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
    isHoming?: boolean;
    target?: PlayerLike;
}

export interface SpecialAbility {
    name: string;
    cooldown: number;
    lastUsed: number;
    duration?: number;
    isActive?: boolean;
}

export type AbilityType = 'DASH' | 'SHIELD' | 'RAPID_FIRE' | 'HOMING_MISSILE' | 'AREA_DENIAL';

export class CombatSystem {
    private scene: THREE.Scene;
    private physicsEngine: PhysicsEngine;
    private projectiles: Projectile[] = [];
    private readonly PROJECTILE_SPEED = 15;
    private readonly PROJECTILE_LIFETIME = 2; // seconds
    private readonly PROJECTILE_RADIUS = 0.15;
    private readonly BASIC_SHOT_COOLDOWN = 0.5; // seconds
    private readonly BASIC_SHOT_DAMAGE = 20;
    private readonly HOMING_TURN_SPEED = 2;
    private areaEffects: THREE.Mesh[] = [];

    constructor(scene: THREE.Scene, physicsEngine: PhysicsEngine) {
        this.scene = scene;
        this.physicsEngine = physicsEngine;
    }

    public activateAbility(player: PlayerLike, abilityType: AbilityType, targets?: PlayerLike[]): void {
        const now = performance.now() / 1000;
        
        switch (abilityType) {
            case 'DASH':
                if (now - player.lastAbilityUse >= 3) { // 3 second cooldown
                    const dashForce = 500;
                    const velocity = player.body.velocity;
                    const direction = new CANNON.Vec3(velocity.x, 0, velocity.z).unit();
                    player.body.applyImpulse(direction.scale(dashForce), player.body.position);
                    player.lastAbilityUse = now;
                }
                break;

            case 'SHIELD':
                if (now - player.lastAbilityUse >= 5) { // 5 second cooldown
                    player.isShielded = true;
                    player.shieldEndTime = now + 2; // 2 second duration
                    // Add visual shield effect
                    const shieldGeometry = new THREE.SphereGeometry(1.2, 16, 16);
                    const shieldMaterial = new THREE.MeshStandardMaterial({
                        color: 0x00ffff,
                        transparent: true,
                        opacity: 0.3,
                        emissive: 0x00ffff
                    });
                    const shield = new THREE.Mesh(shieldGeometry, shieldMaterial);
                    player.mesh.add(shield);
                    player.shieldMesh = shield;
                    player.lastAbilityUse = now;
                }
                break;

            case 'RAPID_FIRE':
                if (now - player.lastAbilityUse >= 8) { // 8 second cooldown
                    player.isRapidFire = true;
                    player.rapidFireEndTime = now + 3; // 3 second duration
                    player.lastAbilityUse = now;
                }
                break;

            case 'HOMING_MISSILE':
                if (now - player.lastAbilityUse >= 6 && targets && targets.length > 0) { // 6 second cooldown
                    const target = targets[Math.floor(Math.random() * targets.length)];
                    this.shootProjectile(player, new THREE.Vector3().subVectors(target.mesh.position, player.mesh.position).normalize(), true, target);
                    player.lastAbilityUse = now;
                }
                break;

            case 'AREA_DENIAL':
                if (now - player.lastAbilityUse >= 10) { // 10 second cooldown
                    const areaGeometry = new THREE.CylinderGeometry(3, 3, 0.1, 32);
                    const areaMaterial = new THREE.MeshStandardMaterial({
                        color: 0xff00ff,
                        transparent: true,
                        opacity: 0.3,
                        emissive: 0xff00ff
                    });
                    const areaMesh = new THREE.Mesh(areaGeometry, areaMaterial);
                    areaMesh.position.copy(player.mesh.position);
                    this.scene.add(areaMesh);
                    this.areaEffects.push(areaMesh);
                    setTimeout(() => {
                        this.scene.remove(areaMesh);
                        this.areaEffects = this.areaEffects.filter(mesh => mesh !== areaMesh);
                        areaMesh.geometry.dispose();
                        (areaMesh.material as THREE.Material).dispose();
                    }, 5000); // 5 second duration
                    player.lastAbilityUse = now;
                }
                break;
        }
    }

    public shootProjectile(shooter: PlayerLike, direction: THREE.Vector3, isHoming: boolean = false, target?: PlayerLike): void {
        const projectileGeometry = new THREE.SphereGeometry(this.PROJECTILE_RADIUS, 8, 8);
        const projectileMaterial = new THREE.MeshStandardMaterial({ 
            color: shooter.isAI ? 0xff4444 : 0x44aaff,
            emissive: shooter.isAI ? 0xff0000 : 0x0066ff,
            metalness: 0.7,
            roughness: 0.3
        });
        const projectileMesh = new THREE.Mesh(projectileGeometry, projectileMaterial);
        
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

        const velocity = direction.normalize().multiplyScalar(this.PROJECTILE_SPEED);
        projectileBody.velocity.set(velocity.x, velocity.y, velocity.z);

        const projectileId = `projectile-${Math.random().toString(36).substring(2)}`;
        const projectile: Projectile = {
            id: projectileId,
            mesh: projectileMesh,
            body: projectileBody,
            owner: shooter.id,
            damage: this.BASIC_SHOT_DAMAGE,
            lifetime: this.PROJECTILE_LIFETIME,
            isHoming: isHoming,
            target: target
        };

        this.scene.add(projectileMesh);
        this.physicsEngine.world.addBody(projectileBody);
        this.projectiles.push(projectile);
    }

    public update(deltaTime: number): void {
        const now = performance.now() / 1000;

        // Update projectiles
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];
            projectile.lifetime -= deltaTime;

            if (projectile.lifetime <= 0) {
                this.removeProjectile(projectile);
                this.projectiles.splice(i, 1);
                continue;
            }

            // Update homing projectiles
            if (projectile.isHoming && projectile.target) {
                const currentDir = new THREE.Vector3(
                    projectile.body.velocity.x,
                    projectile.body.velocity.y,
                    projectile.body.velocity.z
                ).normalize();

                const targetDir = new THREE.Vector3()
                    .subVectors(projectile.target.mesh.position, projectile.mesh.position)
                    .normalize();

                // Interpolate between current and target direction
                const newDir = new THREE.Vector3()
                    .addVectors(
                        currentDir.multiplyScalar(1 - this.HOMING_TURN_SPEED * deltaTime),
                        targetDir.multiplyScalar(this.HOMING_TURN_SPEED * deltaTime)
                    )
                    .normalize();

                // Apply new velocity
                projectile.body.velocity.set(
                    newDir.x * this.PROJECTILE_SPEED,
                    newDir.y * this.PROJECTILE_SPEED,
                    newDir.z * this.PROJECTILE_SPEED
                );
            }

            // Update projectile position
            projectile.mesh.position.copy(projectile.body.position as unknown as THREE.Vector3);
            projectile.mesh.quaternion.copy(projectile.body.quaternion as unknown as THREE.Quaternion);
        }

        // Check for players in area denial zones
        this.areaEffects.forEach(area => {
            const areaPos = new THREE.Vector2(area.position.x, area.position.z);
            // Add damage to players in area
            // This would need to be implemented based on how you track players
        });
    }

    public handleProjectileCollision(projectile: Projectile, target: PlayerLike): void {
        if (projectile.owner !== target.id) {
            if (!target.isShielded) {
                // Apply damage/knockback
                const knockbackForce = 10;
                const direction = new CANNON.Vec3()
                    .copy(projectile.body.velocity)
                    .unit()
                    .scale(knockbackForce);
                
                target.body.applyImpulse(direction, target.body.position);
                target.health = Math.max(0, target.health - projectile.damage);

                // Visual feedback for hit
                const hitEffect = new THREE.Mesh(
                    new THREE.SphereGeometry(0.5, 8, 8),
                    new THREE.MeshStandardMaterial({
                        color: 0xffff00,
                        emissive: 0xffff00,
                        transparent: true,
                        opacity: 0.7
                    })
                );
                hitEffect.position.copy(projectile.mesh.position);
                this.scene.add(hitEffect);

                // Fade out and remove hit effect
                const startTime = performance.now();
                const animate = () => {
                    const elapsed = (performance.now() - startTime) / 1000;
                    if (elapsed > 0.2) {
                        this.scene.remove(hitEffect);
                        hitEffect.geometry.dispose();
                        (hitEffect.material as THREE.Material).dispose();
                        return;
                    }
                    (hitEffect.material as THREE.Material).opacity = 0.7 * (1 - elapsed / 0.2);
                    hitEffect.scale.multiplyScalar(1.05);
                    requestAnimationFrame(animate);
                };
                animate();
            }
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
        
        this.areaEffects.forEach(area => {
            this.scene.remove(area);
            area.geometry.dispose();
            (area.material as THREE.Material).dispose();
        });
        this.areaEffects = [];
    }
} 