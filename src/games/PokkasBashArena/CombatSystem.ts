import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PlayerLike } from './GameCanvas';
import { PhysicsEngine, COLLISION_GROUP } from './PhysicsEngine';

export interface Projectile {
    id: string;
    mesh: THREE.Mesh;
    body: CANNON.Body;
    owner: string;
    damage: number;
    lifetime: number;
}

export interface SpecialAbility {
    name: string;
    cooldown: number;
    lastUsed: number;
    duration?: number;
    isActive?: boolean;
}

export class CombatSystem {
    private scene: THREE.Scene;
    private physicsEngine: PhysicsEngine;
    private projectiles: Projectile[] = [];
    private readonly PROJECTILE_SPEED = 15;
    private readonly PROJECTILE_LIFETIME = 2; // seconds
    private readonly PROJECTILE_RADIUS = 0.15;
    private readonly BASIC_SHOT_COOLDOWN = 0.5; // seconds
    private readonly BASIC_SHOT_DAMAGE = 20;

    constructor(scene: THREE.Scene, physicsEngine: PhysicsEngine) {
        this.scene = scene;
        this.physicsEngine = physicsEngine;
    }

    public shootProjectile(shooter: PlayerLike, direction: THREE.Vector3): void {
        const projectileGeometry = new THREE.SphereGeometry(this.PROJECTILE_RADIUS, 8, 8);
        const projectileMaterial = new THREE.MeshStandardMaterial({ 
            color: shooter.isAI ? 0xff4444 : 0x44aaff,
            emissive: shooter.isAI ? 0xff0000 : 0x0066ff,
            metalness: 0.7,
            roughness: 0.3
        });
        const projectileMesh = new THREE.Mesh(projectileGeometry, projectileMaterial);
        
        // Position slightly in front of the shooter
        const spawnPos = shooter.mesh.position.clone().add(direction.multiplyScalar(1));
        projectileMesh.position.copy(spawnPos);

        const projectileShape = new CANNON.Sphere(this.PROJECTILE_RADIUS);
        const projectileBody = new CANNON.Body({
            mass: 0.1,
            shape: projectileShape,
            position: new CANNON.Vec3(spawnPos.x, spawnPos.y, spawnPos.z),
            collisionFilterGroup: COLLISION_GROUP.PROJECTILE,
            collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.WALL
        });

        // Apply velocity in shooting direction
        const velocity = direction.normalize().multiplyScalar(this.PROJECTILE_SPEED);
        projectileBody.velocity.set(velocity.x, velocity.y, velocity.z);

        const projectileId = `projectile-${Math.random().toString(36).substring(2)}`;
        const projectile: Projectile = {
            id: projectileId,
            mesh: projectileMesh,
            body: projectileBody,
            owner: shooter.id,
            damage: this.BASIC_SHOT_DAMAGE,
            lifetime: this.PROJECTILE_LIFETIME
        };

        this.scene.add(projectileMesh);
        this.physicsEngine.world.addBody(projectileBody);
        this.projectiles.push(projectile);
    }

    public update(deltaTime: number): void {
        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];
            projectile.lifetime -= deltaTime;

            if (projectile.lifetime <= 0) {
                this.removeProjectile(projectile);
                this.projectiles.splice(i, 1);
                continue;
            }

            // Update projectile position
            projectile.mesh.position.copy(projectile.body.position as unknown as THREE.Vector3);
            projectile.mesh.quaternion.copy(projectile.body.quaternion as unknown as THREE.Quaternion);
        }
    }

    public handleProjectileCollision(projectile: Projectile, target: PlayerLike): void {
        if (projectile.owner !== target.id) {
            // Apply damage/knockback here
            const knockbackForce = 10;
            const direction = new CANNON.Vec3()
                .copy(projectile.body.velocity)
                .unit()
                .scale(knockbackForce);
            
            target.body.applyImpulse(direction, target.body.position);
            this.removeProjectile(projectile);
        }
    }

    private removeProjectile(projectile: Projectile): void {
        this.scene.remove(projectile.mesh);
        this.physicsEngine.world.removeBody(projectile.body);
        projectile.mesh.geometry.dispose();
        (projectile.mesh.material as THREE.Material).dispose();
    }

    public dispose(): void {
        this.projectiles.forEach(projectile => {
            this.removeProjectile(projectile);
        });
        this.projectiles = [];
    }
} 