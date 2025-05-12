import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PhysicsEngine, COLLISION_GROUP } from './PhysicsEngine';

export type ArenaLayout = 'BASIC' | 'PILLARS' | 'MAZE' | 'ASYMMETRIC';

interface Obstacle {
    id: string;
    mesh: THREE.Mesh;
    body: CANNON.Body;
}

interface BoxObstacle {
    type: 'box';
    x: number;
    z: number;
    width: number;
    height: number;
    depth: number;
    rotation: number;
}

interface CylinderObstacle {
    type: 'cylinder';
    x: number;
    z: number;
    radius: number;
    height: number;
}

type ObstacleDefinition = BoxObstacle | CylinderObstacle;

export class ArenaSystem {
    private scene: THREE.Scene;
    private physicsEngine: PhysicsEngine;
    private obstacles: Obstacle[] = [];
    private readonly ARENA_RADIUS: number;
    private readonly WALL_THICKNESS = 0.5;
    private readonly WALL_HEIGHT = 5;
    private currentLayout: ArenaLayout = 'BASIC';

    constructor(scene: THREE.Scene, physicsEngine: PhysicsEngine, arenaRadius: number) {
        this.scene = scene;
        this.physicsEngine = physicsEngine;
        this.ARENA_RADIUS = arenaRadius;
    }

    public setLayout(layout: ArenaLayout): void {
        // Clear current layout
        this.clearObstacles();
        this.currentLayout = layout;

        switch (layout) {
            case 'BASIC':
                this.createBasicArena();
                break;
            case 'PILLARS':
                this.createPillarArena();
                break;
            case 'MAZE':
                this.createMazeArena();
                break;
            case 'ASYMMETRIC':
                this.createAsymmetricArena();
                break;
        }
    }

    private createBasicArena(): void {
        // Create circular wall segments
        const WALL_SEGMENTS = 32;
        const segmentAngle = (Math.PI * 2) / WALL_SEGMENTS;
        
        for (let i = 0; i < WALL_SEGMENTS; i++) {
            const angle = i * segmentAngle;
            const segmentLength = 2 * this.ARENA_RADIUS * Math.sin(segmentAngle / 2);
            
            // Visual mesh
            const wallGeometry = new THREE.BoxGeometry(this.WALL_THICKNESS, this.WALL_HEIGHT, segmentLength + 0.05);
            const wallMaterial = new THREE.MeshStandardMaterial({ 
                color: 0x555555, 
                roughness: 0.7,
                metalness: 0.3
            });
            const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
            wallMesh.position.set(
                this.ARENA_RADIUS * Math.cos(angle),
                this.WALL_HEIGHT / 2,
                this.ARENA_RADIUS * Math.sin(angle)
            );
            wallMesh.quaternion.setFromEuler(new THREE.Euler(0, -angle, 0));
            wallMesh.castShadow = true;
            wallMesh.receiveShadow = true;

            // Physics body
            const wallShape = new CANNON.Box(new CANNON.Vec3(
                this.WALL_THICKNESS / 2,
                this.WALL_HEIGHT / 2,
                segmentLength / 2
            ));
            const wallBody = new CANNON.Body({
                mass: 0,
                shape: wallShape,
                position: new CANNON.Vec3(wallMesh.position.x, wallMesh.position.y, wallMesh.position.z),
                collisionFilterGroup: COLLISION_GROUP.WALL,
                collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.PROJECTILE
            });
            wallBody.quaternion.copy(wallMesh.quaternion as unknown as CANNON.Quaternion);

            const wallId = `wall-${i}`;
            (wallBody as any).userData = { type: 'wall', id: wallId };

            this.scene.add(wallMesh);
            this.physicsEngine.world.addBody(wallBody);
            this.obstacles.push({ id: wallId, mesh: wallMesh, body: wallBody });
        }
    }

    private createPillarArena(): void {
        // Create basic arena first
        this.createBasicArena();

        // Add pillars in a circular pattern
        const NUM_PILLARS = 6;
        const PILLAR_RADIUS = 0.5;
        const PILLAR_HEIGHT = 4;
        const PILLAR_DISTANCE = this.ARENA_RADIUS * 0.6;

        for (let i = 0; i < NUM_PILLARS; i++) {
            const angle = (i / NUM_PILLARS) * Math.PI * 2;
            const position = new THREE.Vector3(
                Math.cos(angle) * PILLAR_DISTANCE,
                PILLAR_HEIGHT / 2,
                Math.sin(angle) * PILLAR_DISTANCE
            );

            // Visual mesh
            const pillarGeometry = new THREE.CylinderGeometry(PILLAR_RADIUS, PILLAR_RADIUS, PILLAR_HEIGHT, 16);
            const pillarMaterial = new THREE.MeshStandardMaterial({
                color: 0x888888,
                roughness: 0.6,
                metalness: 0.4
            });
            const pillarMesh = new THREE.Mesh(pillarGeometry, pillarMaterial);
            pillarMesh.position.copy(position);
            pillarMesh.castShadow = true;
            pillarMesh.receiveShadow = true;

            // Physics body
            const pillarShape = new CANNON.Cylinder(PILLAR_RADIUS, PILLAR_RADIUS, PILLAR_HEIGHT, 8);
            const pillarBody = new CANNON.Body({
                mass: 0,
                shape: pillarShape,
                position: new CANNON.Vec3(position.x, position.y, position.z),
                collisionFilterGroup: COLLISION_GROUP.WALL,
                collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.PROJECTILE
            });

            const pillarId = `pillar-${i}`;
            (pillarBody as any).userData = { type: 'pillar', id: pillarId };

            this.scene.add(pillarMesh);
            this.physicsEngine.world.addBody(pillarBody);
            this.obstacles.push({ id: pillarId, mesh: pillarMesh, body: pillarBody });
        }
    }

    private createMazeArena(): void {
        // Create basic arena first
        this.createBasicArena();

        // Add maze walls
        const WALL_LENGTH = 4;
        const mazeWalls = [
            { x: -3, z: 0, rotation: 0 },
            { x: 3, z: 0, rotation: 0 },
            { x: 0, z: -3, rotation: Math.PI / 2 },
            { x: 0, z: 3, rotation: Math.PI / 2 },
            { x: -2, z: -2, rotation: Math.PI / 4 },
            { x: 2, z: 2, rotation: Math.PI / 4 }
        ];

        mazeWalls.forEach((wall, index) => {
            // Visual mesh
            const wallGeometry = new THREE.BoxGeometry(WALL_LENGTH, this.WALL_HEIGHT * 0.6, this.WALL_THICKNESS);
            const wallMaterial = new THREE.MeshStandardMaterial({
                color: 0x666666,
                roughness: 0.7,
                metalness: 0.3
            });
            const wallMesh = new THREE.Mesh(wallGeometry, wallMaterial);
            wallMesh.position.set(wall.x, this.WALL_HEIGHT * 0.3, wall.z);
            wallMesh.rotation.y = wall.rotation;
            wallMesh.castShadow = true;
            wallMesh.receiveShadow = true;

            // Physics body
            const wallShape = new CANNON.Box(new CANNON.Vec3(
                WALL_LENGTH / 2,
                this.WALL_HEIGHT * 0.3,
                this.WALL_THICKNESS / 2
            ));
            const wallBody = new CANNON.Body({
                mass: 0,
                shape: wallShape,
                position: new CANNON.Vec3(wall.x, this.WALL_HEIGHT * 0.3, wall.z),
                collisionFilterGroup: COLLISION_GROUP.WALL,
                collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.PROJECTILE
            });
            wallBody.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), wall.rotation);

            const wallId = `maze-wall-${index}`;
            (wallBody as any).userData = { type: 'maze_wall', id: wallId };

            this.scene.add(wallMesh);
            this.physicsEngine.world.addBody(wallBody);
            this.obstacles.push({ id: wallId, mesh: wallMesh, body: wallBody });
        });
    }

    private createAsymmetricArena(): void {
        // Create basic arena first
        this.createBasicArena();

        // Add asymmetric obstacles
        const obstacles: ObstacleDefinition[] = [
            { type: 'box', x: -3, z: 2, width: 3, height: 2, depth: 0.5, rotation: Math.PI / 6 },
            { type: 'cylinder', x: 2, z: -3, radius: 0.7, height: 3 },
            { type: 'box', x: 4, z: 1, width: 2, height: 1.5, depth: 0.5, rotation: -Math.PI / 4 }
        ];

        obstacles.forEach((obstacle, index) => {
            if (obstacle.type === 'box') {
                // Visual mesh
                const geometry = new THREE.BoxGeometry(obstacle.width, obstacle.height, obstacle.depth);
                const material = new THREE.MeshStandardMaterial({
                    color: 0x777777,
                    roughness: 0.7,
                    metalness: 0.3
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(obstacle.x, obstacle.height / 2, obstacle.z);
                mesh.rotation.y = obstacle.rotation;
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                // Physics body
                const shape = new CANNON.Box(new CANNON.Vec3(
                    obstacle.width / 2,
                    obstacle.height / 2,
                    obstacle.depth / 2
                ));
                const body = new CANNON.Body({
                    mass: 0,
                    shape: shape,
                    position: new CANNON.Vec3(obstacle.x, obstacle.height / 2, obstacle.z),
                    collisionFilterGroup: COLLISION_GROUP.WALL,
                    collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.PROJECTILE
                });
                body.quaternion.setFromAxisAngle(new CANNON.Vec3(0, 1, 0), obstacle.rotation);

                const id = `asymmetric-box-${index}`;
                (body as any).userData = { type: 'asymmetric_obstacle', id: id };

                this.scene.add(mesh);
                this.physicsEngine.world.addBody(body);
                this.obstacles.push({ id: id, mesh: mesh, body: body });
            } else if (obstacle.type === 'cylinder') {
                // Visual mesh
                const geometry = new THREE.CylinderGeometry(obstacle.radius, obstacle.radius, obstacle.height, 16);
                const material = new THREE.MeshStandardMaterial({
                    color: 0x777777,
                    roughness: 0.7,
                    metalness: 0.3
                });
                const mesh = new THREE.Mesh(geometry, material);
                mesh.position.set(obstacle.x, obstacle.height / 2, obstacle.z);
                mesh.castShadow = true;
                mesh.receiveShadow = true;

                // Physics body
                const shape = new CANNON.Cylinder(obstacle.radius, obstacle.radius, obstacle.height, 8);
                const body = new CANNON.Body({
                    mass: 0,
                    shape: shape,
                    position: new CANNON.Vec3(obstacle.x, obstacle.height / 2, obstacle.z),
                    collisionFilterGroup: COLLISION_GROUP.WALL,
                    collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.PROJECTILE
                });

                const id = `asymmetric-cylinder-${index}`;
                (body as any).userData = { type: 'asymmetric_obstacle', id: id };

                this.scene.add(mesh);
                this.physicsEngine.world.addBody(body);
                this.obstacles.push({ id: id, mesh: mesh, body: body });
            }
        });
    }

    private clearObstacles(): void {
        this.obstacles.forEach(obstacle => {
            this.scene.remove(obstacle.mesh);
            this.physicsEngine.world.removeBody(obstacle.body);
            obstacle.mesh.geometry.dispose();
            (obstacle.mesh.material as THREE.Material).dispose();
        });
        this.obstacles = [];
    }

    public getCurrentLayout(): ArenaLayout {
        return this.currentLayout;
    }

    public reset(): void {
        this.setLayout(this.currentLayout);
    }

    public dispose(): void {
        this.clearObstacles();
    }
} 