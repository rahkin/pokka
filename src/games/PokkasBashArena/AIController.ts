// Simple bot behavior logic for Pokka's Bash Arena

import * as CANNON from 'cannon-es';
import * as THREE from 'three';
import { Orb, PlayerLike } from './GameCanvas.tsx';
import { CombatSystem } from './CombatSystem';

export type AIPersonality = 'AGGRESSIVE' | 'DEFENSIVE' | 'OPPORTUNIST' | 'TACTICAL';

export class AIController {
    public id: string;
    public aiBody: CANNON.Body;
    public aiMesh: THREE.Object3D;
    public aiPlayer: PlayerLike;
    private aiType: 'orange' | 'green' | 'purple';
    private combatSystem: CombatSystem;
    private readonly arenaRadius: number;
    
    // Movement parameters
    private readonly MOVEMENT_SPEED = 8;
    private readonly SHOOTING_RANGE = 16;
    private readonly MIN_DISTANCE = 4; // Increased from 3
    private readonly VELOCITY_SMOOTHING = 0.1; // New smoothing factor
    private targetVelocity = new THREE.Vector3();
    private lastPosition = new THREE.Vector3();
    
    // Combat parameters
    private currentTarget: PlayerLike | null = null;
    private targetChangeTimer = 0;

    // Stuck detection
    private stuckThreshold = 0.1;
    private stuckTime = 0;
    private readonly MAX_STUCK_TIME = 1.0;

    private personality: AIPersonality;
    private readonly PERSONALITY_PARAMS = {
        AGGRESSIVE: {
            targetSwitchTime: 0.7,
            engageDistance: 12,
            retreatHealth: 20,
            orbitDistance: 2.5,
            shootingProbability: 1.0
        },
        DEFENSIVE: {
            targetSwitchTime: 1.2,
            engageDistance: 10,
            retreatHealth: 50,
            orbitDistance: 4.5,
            shootingProbability: 1.0
        },
        OPPORTUNIST: {
            targetSwitchTime: 1.0,
            engageDistance: 11,
            retreatHealth: 30,
            orbitDistance: 3.5,
            shootingProbability: 1.0
        },
        TACTICAL: {
            targetSwitchTime: 1.5,
            engageDistance: 9,
            retreatHealth: 40,
            orbitDistance: 5.5,
            shootingProbability: 1.0
        }
    };

    private orbitDirection: number; // 1 for CCW, -1 for CW
    private movementMode: 'orbit' | 'approach' | 'pause' | 'dodge' | 'seekPowerUp';
    private movementModeTimer: number;
    private static lastTeamUpTime: number = 0;
    private static TEAM_UP_INTERVAL: number = 10; // seconds
    private static TEAM_UP_DURATION: number = 3; // seconds

    constructor(id: string, aiBody: CANNON.Body, aiMesh: THREE.Object3D, arenaRadius: number, combatSystem: CombatSystem, aiType: 'orange' | 'green' | 'purple') {
        this.id = id;
        this.aiBody = aiBody;
        this.aiMesh = aiMesh;
        this.arenaRadius = arenaRadius;
        this.combatSystem = combatSystem;
        this.aiType = aiType;

        // Configure physics body
        this.aiBody.angularDamping = 0.9;
        this.aiBody.linearDamping = 0.1;
        this.aiBody.fixedRotation = true;
        this.aiBody.allowSleep = false;
        
        // Lock vertical movement
        this.aiBody.velocity.y = 0;
        this.aiBody.force.y = 0;
        this.aiBody.position.y = 0.5; // Keep at fixed height
        
        // Prevent rotation around X and Z axes
        this.aiBody.angularVelocity.x = 0;
        this.aiBody.angularVelocity.z = 0;

        this.aiPlayer = {
            id: this.id,
            mesh: this.aiMesh,
            body: this.aiBody,
            isAI: true,
            health: 100,
            maxHealth: 100,
            lastShotTime: 0,
            lastAbilityUse: 0
        };
        
        (this.aiBody as any).userData = { id: this.id, type: 'ai_player' };
        this.lastPosition.copy(aiMesh.position);

        // Assign personality based on type
        switch (aiType) {
            case 'orange':
                this.personality = 'AGGRESSIVE';
                break;
            case 'green':
                this.personality = 'TACTICAL';
                break;
            case 'purple':
                this.personality = 'OPPORTUNIST';
                break;
            default:
                this.personality = 'DEFENSIVE';
        }

        this.orbitDirection = Math.random() < 0.5 ? 1 : -1;
        this.movementMode = 'orbit';
        this.movementModeTimer = 0;
    }

    public update(deltaTime: number, orbs: Orb[], players: PlayerLike[]): void {
        if (this.aiPlayer.health <= 0 || !this.aiMesh.visible) {
            console.log(`[AI] ${this.id} update skipped: health=${this.aiPlayer.health}, visible=${this.aiMesh.visible}`);
            return;
        }
        const currentPos = new THREE.Vector3(
            this.aiBody.position.x,
            this.aiBody.position.y,
            this.aiBody.position.z
        );
        // Lock Y position to prevent sinking
        this.aiBody.position.y = 0.5;
        this.aiMesh.position.y = 0.5;
        this.aiBody.velocity.y = 0;
        this.aiBody.force.y = 0;
        // Keep bots inside arena
        const distFromCenter = Math.sqrt(currentPos.x * currentPos.x + currentPos.z * currentPos.z);
        if (distFromCenter > this.arenaRadius - 1) {
            // Move back toward center
            const toCenter = new THREE.Vector3(-currentPos.x, 0, -currentPos.z).normalize();
            const desiredVelocity = toCenter.multiplyScalar(this.MOVEMENT_SPEED);
            this.targetVelocity.lerp(desiredVelocity, this.VELOCITY_SMOOTHING);
            this.aiBody.velocity.set(this.targetVelocity.x, 0, this.targetVelocity.z);
            this.lastPosition.copy(currentPos);
            return;
        }

        // Check if stuck
        const movement = new THREE.Vector3().subVectors(currentPos, this.lastPosition);
        if (movement.length() < this.stuckThreshold) {
            this.stuckTime += deltaTime;
        } else {
            this.stuckTime = 0;
        }

        // Apply unstuck behavior if needed
        if (this.stuckTime > this.MAX_STUCK_TIME) {
            this.applyUnstuckBehavior();
            this.stuckTime = 0;
        }

        // --- AI STRATEGY IMPROVEMENTS ---
        // 1. Team up on leading player occasionally
        const now = performance.now() / 1000;
        let focusTarget: PlayerLike | null = null;
        if (now - AIController.lastTeamUpTime < AIController.TEAM_UP_DURATION) {
            // All bots focus on leading player
            focusTarget = players.filter(p => !p.isAI && p.health > 0 && p.mesh.visible)
                .sort((a, b) => b.health - a.health)[0] || null;
        } else if (now - AIController.lastTeamUpTime > AIController.TEAM_UP_INTERVAL + Math.random() * 5) {
            AIController.lastTeamUpTime = now;
        }
        // 2. Seek power-up if low health or not powered up
        const needsPowerUp = this.aiPlayer.health < this.PERSONALITY_PARAMS[this.personality].retreatHealth || !this.aiPlayer.isRapidFire;
        const nearestOrb = this.findNearestOrb(orbs);
        if (needsPowerUp && nearestOrb) {
            this.movementMode = 'seekPowerUp';
            this.movementModeTimer = 2 + Math.random() * 2;
        }
        // 3. Randomly switch movement mode
        this.movementModeTimer -= deltaTime;
        if (this.movementModeTimer <= 0) {
            const rand = Math.random();
            if (rand < 0.5) {
                this.movementMode = 'orbit';
                this.orbitDirection = Math.random() < 0.5 ? 1 : -1;
                this.movementModeTimer = 2 + Math.random() * 2;
            } else if (rand < 0.7) {
                this.movementMode = 'approach';
                this.movementModeTimer = 1 + Math.random() * 1.5;
            } else if (rand < 0.85) {
                this.movementMode = 'pause';
                this.movementModeTimer = 0.5 + Math.random() * 0.5;
            } else {
                this.movementMode = 'dodge';
                this.movementModeTimer = 0.7 + Math.random() * 0.7;
            }
        }
        // --- END STRATEGY IMPROVEMENTS ---

        // Update target based on personality or team-up
        this.targetChangeTimer += deltaTime;
        let selectedTarget = null;
        if (focusTarget) {
            this.currentTarget = focusTarget;
            selectedTarget = focusTarget;
        } else if (!this.currentTarget || 
            this.currentTarget.health <= 0 || 
            !this.currentTarget.mesh.visible ||
            this.targetChangeTimer >= this.PERSONALITY_PARAMS[this.personality].targetSwitchTime) {
            this.currentTarget = this.selectTargetBasedOnPersonality(players, this.PERSONALITY_PARAMS[this.personality]);
            this.targetChangeTimer = 0;
            selectedTarget = this.currentTarget;
        }
        if (selectedTarget) {
            // Remove spammy target selection log
            // console.log(`[AI] ${this.id} selected target: ${selectedTarget.id}`);
        }

        // Handle movement based on mode
        if (this.currentTarget && this.currentTarget.health > 0 && this.currentTarget.mesh.visible) {
            const targetPos = this.currentTarget.mesh.position;
            const distanceToTarget = currentPos.distanceTo(targetPos);
            if (this.movementMode === 'seekPowerUp' && nearestOrb) {
                this.handleOrbCollection(currentPos, orbs);
            } else if (this.movementMode === 'pause') {
                // Stand still
                this.targetVelocity.set(0, 0, 0);
                this.aiBody.velocity.set(0, 0, 0);
            } else if (this.movementMode === 'dodge') {
                // Move perpendicular to target
                const toTarget = new THREE.Vector3().subVectors(targetPos, currentPos).normalize();
                const dodgeDir = new THREE.Vector3(-toTarget.z, 0, toTarget.x).multiplyScalar(this.orbitDirection);
                const desiredVelocity = dodgeDir.multiplyScalar(this.MOVEMENT_SPEED);
                this.targetVelocity.lerp(desiredVelocity, this.VELOCITY_SMOOTHING);
                this.aiBody.velocity.set(this.targetVelocity.x, 0, this.targetVelocity.z);
            } else if (this.movementMode === 'approach') {
                // Only approach if not too close
                if (distanceToTarget > this.MIN_DISTANCE) {
                    this.pursueTarget(currentPos, targetPos);
                } else {
                    this.handleRetreat(currentPos, targetPos, orbs);
                }
            } else if (this.movementMode === 'orbit') {
                // Use handleEngagement for orbiting
                this.handleEngagement(currentPos, targetPos, this.PERSONALITY_PARAMS[this.personality]);
            } else if (distanceToTarget < this.MIN_DISTANCE) {
                // Too close, retreat
                this.handleRetreat(currentPos, targetPos, orbs);
            } else {
                this.pursueTarget(currentPos, targetPos);
            }

            // --- SHOOTING LOGIC: Always check after movement ---
            if (distanceToTarget < this.SHOOTING_RANGE) {
                const shotCooldown = this.aiPlayer.isRapidFire ? 0.25 : 0.5;
                const timeSinceLastShot = now - this.aiPlayer.lastShotTime;
                if (timeSinceLastShot >= shotCooldown) {
                    console.log(`[AI] ${this.id} shooting conditions:`, {
                        distanceToTarget,
                        timeSinceLastShot,
                        shotCooldown,
                        canShoot: true,
                        isRapidFire: this.aiPlayer.isRapidFire
                    });
                    this.handleCombat(this.currentTarget);
                }
            }
            // --- END SHOOTING LOGIC ---
        } else {
            // No valid target, collect orbs or wander
            this.handleOrbCollection(currentPos, orbs);
        }
        // Store current position for next frame
        this.lastPosition.copy(currentPos);
    }

    private selectTargetBasedOnPersonality(players: PlayerLike[], params: typeof this.PERSONALITY_PARAMS.AGGRESSIVE): PlayerLike | null {
        const validTargets = players.filter(p => 
            p.id !== this.id && 
            p.health > 0 && 
            p.mesh.visible
        );

        if (validTargets.length === 0) return null;

        switch (this.personality) {
            case 'AGGRESSIVE': {
                // 70% chance to target human if present, 30% to target closest bot
                const human = validTargets.find(p => !p.isAI);
                if (human && Math.random() < 0.7) return human;
                // Otherwise, target the closest
                return this.findClosestTarget(validTargets);
            }
            case 'DEFENSIVE':
                // Target the weakest player, but only if they're not too close
                return this.findWeakestTarget(validTargets, params.engageDistance);
            case 'OPPORTUNIST':
                // Target players who are already engaged in combat
                return this.findEngagedTarget(validTargets) || this.findClosestTarget(validTargets);
            case 'TACTICAL':
                // Target based on a combination of distance, health, and engagement
                return this.findTacticalTarget(validTargets);
            default:
                return validTargets[Math.floor(Math.random() * validTargets.length)];
        }
    }

    private findClosestTarget(targets: PlayerLike[]): PlayerLike {
        const currentPos = new THREE.Vector3().copy(this.aiBody.position as unknown as THREE.Vector3);
        return targets.reduce((closest, current) => {
            const closestDist = closest.mesh.position.distanceTo(currentPos);
            const currentDist = current.mesh.position.distanceTo(currentPos);
            return currentDist < closestDist ? current : closest;
        });
    }

    private findWeakestTarget(targets: PlayerLike[], minDistance: number): PlayerLike {
        const currentPos = new THREE.Vector3().copy(this.aiBody.position as unknown as THREE.Vector3);
        const validTargets = targets.filter(t => 
            t.mesh.position.distanceTo(currentPos) >= minDistance
        );
        return validTargets.length > 0 ? 
            validTargets.reduce((weakest, current) => 
                current.health < weakest.health ? current : weakest
            ) : 
            targets[0];
    }

    private findEngagedTarget(targets: PlayerLike[]): PlayerLike | null {
        return targets.find(t => {
            const timeSinceLastShot = performance.now() / 1000 - t.lastShotTime;
            return timeSinceLastShot < 1.0; // Target is considered engaged if they shot within the last second
        }) || null;
    }

    private findTacticalTarget(targets: PlayerLike[]): PlayerLike {
        const currentPos = new THREE.Vector3().copy(this.aiBody.position as unknown as THREE.Vector3);
        return targets.reduce((best, current) => {
            const bestScore = this.calculateTargetScore(best, currentPos);
            const currentScore = this.calculateTargetScore(current, currentPos);
            return currentScore > bestScore ? current : best;
        });
    }

    private calculateTargetScore(target: PlayerLike, currentPos: THREE.Vector3): number {
        const distance = target.mesh.position.distanceTo(currentPos);
        const healthFactor = 1 - (target.health / target.maxHealth);
        const timeSinceLastShot = performance.now() / 1000 - target.lastShotTime;
        const engagementFactor = timeSinceLastShot < 1.0 ? 1.5 : 1.0;
        
        return (
            (1 / distance) * 5 + // Distance factor (closer is better)
            healthFactor * 3 + // Health factor (lower health is better)
            engagementFactor // Engagement bonus
        );
    }

    private handleRetreat(currentPos: THREE.Vector3, targetPos: THREE.Vector3, orbs: Orb[]): void {
        // Move away from target
        const retreatDir = new THREE.Vector3().subVectors(currentPos, targetPos).normalize();
        
        // Try to move towards health orbs if available
        const nearestOrb = this.findNearestOrb(orbs);
        if (nearestOrb) {
            const orbDir = new THREE.Vector3().subVectors(nearestOrb.mesh.position, currentPos).normalize();
            retreatDir.lerp(orbDir, 0.3); // Blend between retreat and orb collection
        }

        // Apply velocity
        const desiredVelocity = retreatDir.multiplyScalar(this.MOVEMENT_SPEED);
        this.targetVelocity.lerp(desiredVelocity, this.VELOCITY_SMOOTHING);
        this.aiBody.velocity.set(this.targetVelocity.x, 0, this.targetVelocity.z);
    }

    private handleEngagement(currentPos: THREE.Vector3, targetPos: THREE.Vector3, params: typeof this.PERSONALITY_PARAMS.AGGRESSIVE): void {
        // Calculate orbit position
        const toTarget = new THREE.Vector3().subVectors(targetPos, currentPos);
        // Add a small random offset to orbit angle for more variety
        const randomOffset = (Math.random() - 0.5) * 0.3;
        const orbitAngle = this.orbitDirection * (this.personality === 'AGGRESSIVE' ? Math.PI / 4 : Math.PI / 2) + randomOffset;
        const orbitPos = new THREE.Vector3().copy(targetPos).add(
            toTarget.normalize().multiplyScalar(-params.orbitDistance).applyAxisAngle(new THREE.Vector3(0, 1, 0), orbitAngle)
        );
        // Move towards orbit position
        const moveDir = new THREE.Vector3().subVectors(orbitPos, currentPos).normalize();
        const desiredVelocity = moveDir.multiplyScalar(this.MOVEMENT_SPEED);
        this.targetVelocity.lerp(desiredVelocity, this.VELOCITY_SMOOTHING);
        this.aiBody.velocity.set(this.targetVelocity.x, 0, this.targetVelocity.z);
    }

    private pursueTarget(currentPos: THREE.Vector3, targetPos: THREE.Vector3): void {
        const moveDir = new THREE.Vector3().subVectors(targetPos, currentPos).normalize();
        const desiredVelocity = moveDir.multiplyScalar(this.MOVEMENT_SPEED);
        this.targetVelocity.lerp(desiredVelocity, this.VELOCITY_SMOOTHING);
        this.aiBody.velocity.set(this.targetVelocity.x, 0, this.targetVelocity.z);
    }

    private handleOrbCollection(currentPos: THREE.Vector3, orbs: Orb[]): void {
        const nearestOrb = this.findNearestOrb(orbs);
        if (nearestOrb) {
            const moveDir = new THREE.Vector3().subVectors(nearestOrb.mesh.position, currentPos).normalize();
            const desiredVelocity = moveDir.multiplyScalar(this.MOVEMENT_SPEED);
            this.targetVelocity.lerp(desiredVelocity, this.VELOCITY_SMOOTHING);
            this.aiBody.velocity.set(this.targetVelocity.x, 0, this.targetVelocity.z);
        } else {
            // Random wandering
            const wanderAngle = Math.random() * Math.PI * 2;
            const wanderDir = new THREE.Vector3(Math.cos(wanderAngle), 0, Math.sin(wanderAngle));
            const desiredVelocity = wanderDir.multiplyScalar(this.MOVEMENT_SPEED * 0.5);
            this.targetVelocity.lerp(desiredVelocity, this.VELOCITY_SMOOTHING);
            this.aiBody.velocity.set(this.targetVelocity.x, 0, this.targetVelocity.z);
        }
    }

    private findNearestOrb(orbs: Orb[]): Orb | null {
        let nearest = null;
        let minDist = Infinity;
        const aiPos = new THREE.Vector3(
            this.aiBody.position.x,
            this.aiBody.position.y,
            this.aiBody.position.z
        );

        orbs.forEach(orb => {
            const dist = aiPos.distanceTo(orb.mesh.position);
            if (dist < minDist) {
                minDist = dist;
                nearest = orb;
            }
        });

        return nearest;
    }

    private applyUnstuckBehavior(): void {
        // Apply a random impulse to get unstuck
        const angle = Math.random() * Math.PI * 2;
        const force = new CANNON.Vec3(
            Math.cos(angle) * 100,
            0,
            Math.sin(angle) * 100
        );
        this.aiBody.applyImpulse(force, this.aiBody.position);
    }

    private handleCombat(target: PlayerLike): void {
        const now = performance.now() / 1000;
        const timeSinceLastShot = now - this.aiPlayer.lastShotTime;
        const shotCooldown = this.aiPlayer.isRapidFire ? 0.25 : 0.5;

        if (timeSinceLastShot >= shotCooldown) {
            const currentPos = new THREE.Vector3().copy(this.aiBody.position as unknown as THREE.Vector3);
            const targetPos = target.mesh.position;
            const direction = new THREE.Vector3().subVectors(targetPos, currentPos).normalize();

            // Add some inaccuracy based on personality
            const inaccuracy = this.getInaccuracyForPersonality();
            direction.add(new THREE.Vector3(
                (Math.random() - 0.5) * inaccuracy,
                0,
                (Math.random() - 0.5) * inaccuracy
            )).normalize();

            console.log(`[AI] ${this.id} SHOOTING at ${target.id} (distance: ${currentPos.distanceTo(targetPos).toFixed(2)})`);
            this.combatSystem.shootProjectile(this.aiPlayer, direction);
            this.aiPlayer.lastShotTime = now;

            // Use special abilities based on personality and type
            this.handleSpecialAbilities(now);
        }
    }

    private getInaccuracyForPersonality(): number {
        switch (this.personality) {
            case 'AGGRESSIVE': return 0.2;
            case 'DEFENSIVE': return 0.3;
            case 'OPPORTUNIST': return 0.15;
            case 'TACTICAL': return 0.1;
            default: return 0.25;
        }
    }

    private handleSpecialAbilities(now: number): void {
        const timeSinceLastAbility = now - this.aiPlayer.lastAbilityUse;
        const shouldUseAbility = Math.random() < 0.1; // 10% chance per shot to use ability

        if (shouldUseAbility && timeSinceLastAbility >= 3) {
            switch (this.aiType) {
                case 'orange':
                    // Rapid fire ability
                    if (this.aiPlayer.health < 50) {
                        this.combatSystem.activateAbility(this.aiPlayer, 'RAPID_FIRE');
                        this.aiPlayer.lastAbilityUse = now;
                    }
                    break;
                case 'green':
                    // Homing missile ability
                    if (this.currentTarget) {
                        this.combatSystem.activateAbility(this.aiPlayer, 'HOMING_MISSILE', [this.currentTarget]);
                        this.aiPlayer.lastAbilityUse = now;
                    }
                    break;
                case 'purple':
                    // Area denial ability
                    if (this.currentTarget && this.currentTarget.mesh.position.distanceTo(this.aiMesh.position) < 4) {
                        this.combatSystem.activateAbility(this.aiPlayer, 'AREA_DENIAL');
                        this.aiPlayer.lastAbilityUse = now;
                    }
                    break;
            }
        }
    }

    public dispose(): void {
        // Reset any active states
        this.currentTarget = null;
        this.targetVelocity.set(0, 0, 0);
  }
} 