// Cannon-es physics setup for Pokka's Bash Arena
import * as CANNON from 'cannon-es';
import * as THREE from 'three';

const ARENA_RADIUS = 10; // Should match GameCanvas.tsx
const ARENA_HEIGHT = 5;  // Should match GameCanvas.tsx
const WALL_THICKNESS = 0.5;
const WALL_SEGMENTS = 32;

// Collision Groups
export const COLLISION_GROUP = {
  PLAYER: 1,
  AI: 2,
  ORB: 4, // Powers of 2 for bitmasking
  WALL: 8,
  GROUND: 16,
  PROJECTILE: 32
};

export class PhysicsEngine {
  public world: CANNON.World;
  public materials: {
    groundMaterial: CANNON.Material;
    playerMaterial: CANNON.Material;
    orbMaterial: CANNON.Material;
    wallMaterial: CANNON.Material;
  };

  constructor() {
    this.world = new CANNON.World();
    this.world.gravity.set(0, -9.82, 0); 
    this.world.broadphase = new CANNON.SAPBroadphase(this.world); // More performant broadphase
    // this.world.solver.iterations = 10; // Solver iterations might need a specific solver type e.g. GSSolver

    this.materials = {
      groundMaterial: new CANNON.Material('groundMaterial'),
      playerMaterial: new CANNON.Material('playerMaterial'),
      orbMaterial: new CANNON.Material('orbMaterial'),
      wallMaterial: new CANNON.Material('wallMaterial') // Added wall material
    };

    this.setupContactMaterials();
    this.initArenaBounds();
  }

  setupContactMaterials() {
    const { groundMaterial, playerMaterial, orbMaterial, wallMaterial } = this.materials;

    // Ground-Player contact
    this.world.addContactMaterial(new CANNON.ContactMaterial(
      groundMaterial,
      playerMaterial,
      { friction: 0.1, restitution: 0.3 }
    ));

    // Player-Player contact
    this.world.addContactMaterial(new CANNON.ContactMaterial(
      playerMaterial,
      playerMaterial,
      { friction: 0.05, restitution: 0.8 }
    ));

    // Player-Orb contact
    this.world.addContactMaterial(new CANNON.ContactMaterial(
      playerMaterial,
      orbMaterial,
      { friction: 1, restitution: 0.0 }
    ));
    
    // Player-Wall contact
    this.world.addContactMaterial(new CANNON.ContactMaterial(
      playerMaterial,
      wallMaterial,
      { friction: 0.0, restitution: 0.5 } // Players should bounce off walls
    ));

    // Ground-Wall contact (walls are static, but good practice)
    this.world.addContactMaterial(new CANNON.ContactMaterial(
        groundMaterial,
        wallMaterial,
        { friction: 0.1, restitution: 0.1 }
    ));
  }

  initArenaBounds() {
    // Ground
    const groundShape = new CANNON.Plane();
    const groundBody = new CANNON.Body({
      mass: 0, 
      material: this.materials.groundMaterial,
      collisionFilterGroup: COLLISION_GROUP.GROUND,
      collisionFilterMask: -1 // Collide with everything
    });
    groundBody.addShape(groundShape);
    groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);
    this.world.addBody(groundBody);

    // Cylindrical Walls (composed of static boxes)
    const wallHeight = ARENA_HEIGHT;
    // Adjusted wall segment length for better fit: (2 * PI * R) / N_segments / 2 for halfExtents. More accurately, length of chord.
    // The third parameter of CANNON.Box is half-depth, so we use the chord length.
    const segmentAngle = (Math.PI * 2) / WALL_SEGMENTS;

    for (let i = 0; i < WALL_SEGMENTS; i++) {
      const angle = i * segmentAngle;
      const wallBody = new CANNON.Body({
        mass: 0, 
        material: this.materials.wallMaterial,
        collisionFilterGroup: COLLISION_GROUP.WALL,
        collisionFilterMask: -1 // Collide with everything
      });

      // Calculate position and orientation for each wall segment
      const x = ARENA_RADIUS * Math.cos(angle);
      const z = ARENA_RADIUS * Math.sin(angle);
      wallBody.position.set(x, wallHeight / 2, z);
      wallBody.quaternion.setFromEuler(0, -angle, 0); // Rotate wall segment to align with circumference
      
      // Use a slightly longer box for better coverage if segments are flat
      // Calculate the length of the side of the polygon segment
      const segmentLength = 2 * ARENA_RADIUS * Math.sin(segmentAngle / 2);
      const wallSegmentShape = new CANNON.Box(new CANNON.Vec3(WALL_THICKNESS / 2, wallHeight / 2, segmentLength / 2 + 0.05)); // Add small overlap

      wallBody.addShape(wallSegmentShape);
      this.world.addBody(wallBody);
    }
  }

  addPlayerBody(shape: CANNON.Shape, mass: number, position: THREE.Vector3, isAI: boolean): CANNON.Body {
    const group = isAI ? COLLISION_GROUP.AI : COLLISION_GROUP.PLAYER;
    // Players/AI collide with everything except potentially each other initially?
    // Or collide with everything: mask = -1
    const mask = -1; // Collide with ALL groups
    
    const playerBody = new CANNON.Body({
      mass: mass,
      shape: shape,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      material: this.materials.playerMaterial,
      linearDamping: 0.5, 
      angularDamping: 0.5,
      collisionFilterGroup: group,
      collisionFilterMask: mask
    });
    this.world.addBody(playerBody);
    return playerBody;
  }

  addOrbBody(shape: CANNON.Shape, mass: number, position: THREE.Vector3): CANNON.Body {
    const orbBody = new CANNON.Body({
      mass: mass,
      shape: shape,
      position: new CANNON.Vec3(position.x, position.y, position.z),
      material: this.materials.orbMaterial,
      collisionFilterGroup: COLLISION_GROUP.ORB,
      // Orbs need to collide with Player, AI, Ground, and Walls
      collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.GROUND | COLLISION_GROUP.WALL
    });
    this.world.addBody(orbBody);
    return orbBody;
  }

  update(deltaTime: number): void {
    this.world.step(1 / 60, deltaTime, 3); 
  }

  removeBody(body: CANNON.Body): void {
    if (body) {
      this.world.removeBody(body);
    }
  }
  
  dispose(): void {
    while(this.world.bodies.length > 0){
        this.world.removeBody(this.world.bodies[0]);
    }
  }
}