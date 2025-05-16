import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PhysicsEngine, COLLISION_GROUP } from './PhysicsEngine';
import { PlayerLike } from './GameCanvas';
import { EventEmitter } from 'events';

export type PowerUpType = 'HEALTH' | 'RAPID_FIRE' | 'TRIPLE_SHOT' | 'SPEED_BOOST' | 'SHIELD';

export interface PowerUp {
    id: string;
    type: PowerUpType;
    mesh: THREE.Mesh;
    body: CANNON.Body;
    duration: number;
}

export class PowerUpSystem extends EventEmitter {
    private scene: THREE.Scene;
    private physicsEngine: PhysicsEngine;
    private powerUps: PowerUp[] = [];
    private readonly SPAWN_INTERVAL = 10000; // 10 seconds
    private readonly MAX_POWER_UPS = 3;
    private spawnTimer: number = 0;
    private readonly POWER_UP_RADIUS = 0.5;
    private readonly ARENA_RADIUS: number;

    constructor(scene: THREE.Scene, physicsEngine: PhysicsEngine, arenaRadius: number) {
        super();
        this.scene = scene;
        this.physicsEngine = physicsEngine;
        this.ARENA_RADIUS = arenaRadius;
    }

    public update(deltaTime: number): void {
        // Rotate power-ups for visual effect
        this.powerUps.forEach(powerUp => {
            powerUp.mesh.rotation.y += deltaTime * 2;
        });

        // Check if it's time to spawn a new power-up
        this.spawnTimer += deltaTime;
        if (this.spawnTimer >= this.SPAWN_INTERVAL && this.powerUps.length < this.MAX_POWER_UPS) {
            this.spawnPowerUp();
            this.spawnTimer = 0;
        }
    }

    private spawnPowerUp(): void {
        const types: PowerUpType[] = ['HEALTH', 'RAPID_FIRE', 'TRIPLE_SHOT', 'SPEED_BOOST', 'SHIELD'];
        const type = types[Math.floor(Math.random() * types.length)];

        // Create mesh based on type
        const geometry = new THREE.SphereGeometry(this.POWER_UP_RADIUS, 16, 16);
        const material = new THREE.MeshStandardMaterial({
            color: this.getPowerUpColor(type),
            emissive: this.getPowerUpColor(type),
            emissiveIntensity: 0.5,
            metalness: 0.7,
            roughness: 0.3
        });
        const mesh = new THREE.Mesh(geometry, material);

        // Random position within arena
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * (this.ARENA_RADIUS - 2); // Keep away from walls
        const position = new THREE.Vector3(
            Math.cos(angle) * radius,
            this.POWER_UP_RADIUS + 0.1,
            Math.sin(angle) * radius
        );
        mesh.position.copy(position);

        // Create physics body
        const shape = new CANNON.Sphere(this.POWER_UP_RADIUS);
        const body = new CANNON.Body({
            mass: 0,
            shape: shape,
            position: new CANNON.Vec3(position.x, position.y, position.z),
            collisionFilterGroup: COLLISION_GROUP.POWER_UP,
            collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI
        });

        const powerUpId = `powerup-${Math.random().toString(36).substring(2)}`;
        (body as any).userData = { type: 'power_up', id: powerUpId };

        const powerUp: PowerUp = {
            id: powerUpId,
            type: type,
            mesh: mesh,
            body: body,
            duration: this.getPowerUpDuration(type)
        };

        this.scene.add(mesh);
        this.physicsEngine.world.addBody(body);
        this.powerUps.push(powerUp);
    }

    private getPowerUpColor(type: PowerUpType): number {
        switch (type) {
            case 'HEALTH': return 0x00ff00;
            case 'RAPID_FIRE': return 0xff0000;
            case 'TRIPLE_SHOT': return 0xff00ff;
            case 'SPEED_BOOST': return 0x00ffff;
            case 'SHIELD': return 0xffff00;
        }
    }

    private getPowerUpDuration(type: PowerUpType): number {
        switch (type) {
            case 'HEALTH': return 0; // Instant effect
            case 'RAPID_FIRE': return 5;
            case 'TRIPLE_SHOT': return 7;
            case 'SPEED_BOOST': return 10;
            case 'SHIELD': return 3;
        }
    }

    public handlePowerUpCollision(powerUp: PowerUp, player: PlayerLike): void {
        switch (powerUp.type) {
            case 'HEALTH':
                player.health = Math.min(player.maxHealth, player.health + 50);
                if (player.healthBar) {
                    player.healthBar.update(player.health, player.maxHealth);
                }
                break;
            case 'RAPID_FIRE':
                player.isRapidFire = true;
                player.rapidFireEndTime = performance.now() / 1000 + powerUp.duration;
                break;
            case 'TRIPLE_SHOT':
                player.hasTripleShot = true;
                player.tripleShotEndTime = performance.now() / 1000 + powerUp.duration;
                break;
            case 'SPEED_BOOST':
                player.hasSpeedBoost = true;
                player.speedBoostEndTime = performance.now() / 1000 + powerUp.duration;
                break;
            case 'SHIELD':
                player.isShielded = true;
                player.shieldEndTime = performance.now() / 1000 + powerUp.duration;
                break;
        }

        // Emit collection event
        this.emit('powerUpCollected', { type: powerUp.type, collector: player });

        // Remove power-up
        this.removePowerUp(powerUp);
    }

    public removePowerUp(powerUp: PowerUp): void {
        // Remove from array if present
        const index = this.powerUps.findIndex(p => p.id === powerUp.id);
        if (index !== -1) {
            this.powerUps.splice(index, 1);
        }
        // Always remove mesh from scene
        if (powerUp.mesh && powerUp.mesh.parent) {
            powerUp.mesh.parent.remove(powerUp.mesh);
        }
        if (powerUp.mesh) {
            powerUp.mesh.geometry.dispose();
            (powerUp.mesh.material as THREE.Material).dispose();
        }
        // Always remove body from physics world
        if (powerUp.body && this.physicsEngine.world.bodies.includes(powerUp.body)) {
            this.physicsEngine.world.removeBody(powerUp.body);
        }
    }

    public reset(): void {
        // Clean up all power-ups
        this.powerUps.forEach(powerUp => {
            this.removePowerUp(powerUp);
        });
        this.powerUps = [];
        this.spawnTimer = 0;
        // Extra: Remove any stray power-up bodies from physics world
        this.physicsEngine.world.bodies = this.physicsEngine.world.bodies.filter(body => {
            const userData = (body as any).userData;
            if (userData && userData.type === 'power_up') {
                this.physicsEngine.world.removeBody(body);
                return false;
            }
            return true;
        });
    }

    public dispose(): void {
        this.reset();
    }
} 