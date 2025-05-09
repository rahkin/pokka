// Simple bot behavior logic for Pokka's Bash Arena

import * as CANNON from 'cannon-es';
import * as THREE from 'three'; // For THREE.Vector3 and other types if needed
import { Orb } from './GameCanvas.tsx'; // Assuming Orb interface is exported from GameCanvas

interface PlayerLike {
    id: string;
    mesh: THREE.Object3D;
    body: CANNON.Body;
    isAI?: boolean;
}

export class AIController {
    public id: string;
    public aiBody: CANNON.Body;
    public aiMesh: THREE.Object3D; // Reference to the Three.js mesh for position, etc.
    private targetOrb: Orb | null = null;
    private targetPlayer: PlayerLike | null = null;
    private state: 'seeking_orb' | 'chasing_player' | 'idle' | 'avoiding' = 'idle';
    
    private readonly moveForce = 15; // Slightly less than player for now
    private readonly detectionRadius = 8;
    private readonly avoidanceDistance = 1.0;
    private readonly playerStopDistance = 1.5; // How close AI tries to get to player before stopping force
    private readonly arenaRadius: number;

    constructor(id: string, aiBody: CANNON.Body, aiMesh: THREE.Object3D, arenaRadius: number) {
        this.id = id;
        this.aiBody = aiBody;
        this.aiMesh = aiMesh;
        this.arenaRadius = arenaRadius;
        this.aiBody.angularDamping = 0.95;
        this.aiBody.fixedRotation = true;
        this.aiBody.allowSleep = false;
        (this.aiBody as any).userData = { id: this.id, type: 'ai_player' };
    }

    public update(deltaTime: number, orbs: Orb[], players: PlayerLike[]): void {
        // Use deltaTime for smooth movement
        const scaledForce = this.moveForce * (60 * deltaTime); // Scale for 60 FPS target
        
        // Find closest orb
        let closestOrb = this.findClosestOrb(orbs);
        
        if (closestOrb) {
            // Calculate direction to closest orb
            const direction = new THREE.Vector3()
                .subVectors(closestOrb.mesh.position, this.aiMesh.position)
                .normalize();
            
            // Apply force towards orb
            this.aiBody.applyImpulse(
                new CANNON.Vec3(direction.x * scaledForce, 0, direction.z * scaledForce),
                new CANNON.Vec3(0, 0, 0)
            );
        }

        this.findBestTarget(orbs, players);
        this.avoidWalls(); // Avoidance takes priority
        if (this.state !== 'avoiding') {
            this.moveTowardsTarget(deltaTime);
        }
    }

    private findBestTarget(allOrbs: Orb[], humanPlayers: PlayerLike[]): void {
        let closestOrb: Orb | null = null;
        let minOrbDistance = Infinity;

        allOrbs.forEach(orb => {
            const distance = this.aiMesh.position.distanceTo(orb.mesh.position);
            if (distance < minOrbDistance) {
                minOrbDistance = distance;
                closestOrb = orb;
            }
        });

        // Basic: If an orb is close enough, target it. Otherwise, consider players.
        if (closestOrb && minOrbDistance < this.detectionRadius) {
            this.targetOrb = closestOrb;
            this.targetPlayer = null;
            this.state = 'seeking_orb';
            return;
        }
        
        // TODO: Add logic to target players if no close orbs or if tactically advantageous
        // For now, if no orb, go idle or implement simple player following
        this.targetOrb = null; // No close orb found or prefer player
        // Example: Target first human player if available
        if (humanPlayers.length > 0) {
             const closestPlayer = humanPlayers.reduce((prev, curr) => {
                const prevDist = this.aiMesh.position.distanceTo(prev.mesh.position);
                const currDist = this.aiMesh.position.distanceTo(curr.mesh.position);
                return prevDist < currDist ? prev : curr;
            });
            if (this.aiMesh.position.distanceTo(closestPlayer.mesh.position) < this.detectionRadius * 1.5) {
                this.targetPlayer = closestPlayer;
                this.state = 'chasing_player';
                return;
            }
        }
        
        this.targetPlayer = null;
        this.state = 'idle';
    }

    private avoidWalls(): void {
        const currentPosition = this.aiBody.position;
        const distFromCenter = Math.sqrt(currentPosition.x * currentPosition.x + currentPosition.z * currentPosition.z);

        if (distFromCenter > this.arenaRadius - this.avoidanceDistance) {
            this.state = 'avoiding';
            // Simple avoidance: apply force towards center
            const forceDirection = new CANNON.Vec3(-currentPosition.x, 0, -currentPosition.z).unit();
            const avoidanceForce = forceDirection.scale(this.moveForce * 1.5); // Stronger avoidance force
            this.aiBody.applyForce(avoidanceForce, currentPosition);
        } else if (this.state === 'avoiding') {
            // If we were avoiding but now clear, go back to idle to re-evaluate target
            this.state = 'idle'; 
        }
    }

    private moveTowardsTarget(deltaTime: number): void {
        if (this.state === 'idle') {
            // If idle with no target, reduce existing velocity (damping)
            this.aiBody.velocity.x *= 0.95;
            this.aiBody.velocity.z *= 0.95;
            return;
        }

        let targetPositionVec: THREE.Vector3 | null = null;
        let isPlayerTarget = false;
        if (this.targetOrb) {
            targetPositionVec = this.targetOrb.mesh.position;
        } else if (this.targetPlayer) {
            targetPositionVec = this.targetPlayer.mesh.position;
            isPlayerTarget = true;
        }

        if (targetPositionVec) {
            const currentPos = this.aiBody.position;
            const targetPos = new CANNON.Vec3(targetPositionVec.x, currentPos.y, targetPositionVec.z); // Target on same Y plane
            
            const distanceToTarget = currentPos.distanceTo(targetPos);

            // Stop applying force if close enough to player target
            if (isPlayerTarget && distanceToTarget < this.playerStopDistance) {
                 this.aiBody.velocity.x *= 0.8; // Damp velocity when close
                 this.aiBody.velocity.z *= 0.8;
                 return; // Don't apply force
            }

            const forceDirection = targetPos.vsub(currentPos).unit(); // Vector subtraction and normalization
            const scaledForce = this.moveForce * (60 * deltaTime); // Scale for 60 FPS target, maintaining original force feel
            const force = forceDirection.scale(scaledForce);
            this.aiBody.applyForce(force, currentPos); // Apply force at current position
        }

        // Limit AI speed
        const maxSpeed = 4;
        if (this.aiBody.velocity.lengthSquared() > maxSpeed * maxSpeed) {
            this.aiBody.velocity.normalize();
            this.aiBody.velocity.scale(maxSpeed, this.aiBody.velocity);
        }
    }

    private findClosestOrb(orbs: Orb[]): Orb | null {
        let closestOrb: Orb | null = null;
        let minOrbDistance = Infinity;

        orbs.forEach(orb => {
            const distance = this.aiMesh.position.distanceTo(orb.mesh.position);
            if (distance < minOrbDistance) {
                minOrbDistance = distance;
                closestOrb = orb;
            }
        });

        return closestOrb;
    }

    dispose(): void {
        // Nothing to dispose explicitly here unless AIController creates its own resources
    }
} 