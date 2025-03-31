import * as THREE from 'three';
import { Snake } from './Snake';

export class BotSnake extends Snake {
    constructor(game, startPosition) {
        super(game, startPosition);
        
        // Bot-specific properties
        this.targetPellet = null;
        this.updateInterval = 30;
        this.lastUpdate = 0;
        this.color = 0xFF0000;
        this.avoidanceRadius = 12;
        this.viewDistance = 60;
        this.wallAvoidanceDistance = 25;
        this.wallAvoidanceStrength = 25;
        this.obstacleAvoidanceStrength = 8;
        this.lastPelletSwitchTime = 0;
        this.interceptPoint = null;
        
        // Override snake properties for bot
        this.speed = 13;
        this.segmentSpacing = 1.2;
        this.wanderAngle = 0;
        this.wanderRadius = 2;
        
        // New properties for enhanced behavior
        this.lastPlayerPosition = null;
        this.playerVelocity = new THREE.Vector3();
        this.lastPelletScan = 0;
        this.pelletScanInterval = 100;
        this.nearbyPellets = [];
        this.lastDirectionChange = 0;
        this.directionChangeInterval = 500; // Minimum time between direction changes
        this.currentMovementDirection = new THREE.Vector3(1, 0, 0); // Start moving right
        
        // Initialize bot behavior
        this.initBot();
        
        // Enable movement and collision checks immediately
        this.movementEnabled = true;
        this.isAlive = true;
        this.collisionChecksEnabled = true;
        this.isInitialized = true;

        // Set initial direction towards center
        const center = new THREE.Vector3(0, 0, 0);
        this.direction = new THREE.Vector3()
            .subVectors(center, this.head.position)
            .normalize();
        this.nextDirection = this.direction.clone();

        // Ensure initial position is at correct height
        this.head.position.y = 0.5;
        this.headGlow.position.y = 0.5;

        // Initialize position history with current position
        this.positionHistory = [this.head.position.clone()];

        // Ensure all existing segments are at correct height and properly spaced
        for (let i = 0; i < this.segments.length; i++) {
            const segment = this.segments[i];
            const spacing = this.segmentSpacing * (i + 1);
            const direction = this.direction.clone();
            
            const segmentPos = new THREE.Vector3()
                .subVectors(this.head.position, direction.multiplyScalar(spacing));
            
            segment.position.copy(segmentPos);
            segment.position.y = 0.5;
        }

        // Remove any existing input event listeners
        this.removeInputListeners();
    }

    initBot() {
        // Override material color for bot snake
        this.material.color.setHex(this.color);
        this.material.emissive.setHex(0x330000);
        
        // Make segments slightly transparent
        this.material.transparent = true;
        this.material.opacity = 0.9;
    }

    // Override setupInput to do nothing (bot doesn't need input)
    setupInput() {
        // Intentionally empty - bot doesn't use player input
    }

    // Remove any existing input listeners
    removeInputListeners() {
        const removeListener = (event) => {
            window.removeEventListener(event, this._handleInput);
        };
        
        ['keydown', 'keyup', 'mousemove'].forEach(removeListener);
    }

    // Override setDirection to handle AI movement
    setDirection(newDirection) {
        if (!this.movementEnabled || !this.isAlive) return;
        
        const now = performance.now();
        if (now - this.lastDirectionChange < this.directionChangeInterval) {
            return; // Too soon to change direction
        }

        // Update direction vectors
        this.nextDirection.copy(newDirection).normalize();
        this.direction.copy(this.nextDirection);
        this.lastDirectionChange = now;
    }

    update(deltaTime) {
        if (!this.isInitialized) return;

        // Track player movement for prediction
        if (this.game.snake) {
            const currentPlayerPos = this.game.snake.head.position.clone();
            if (this.lastPlayerPosition) {
                this.playerVelocity = currentPlayerPos.clone()
                    .sub(this.lastPlayerPosition)
                    .multiplyScalar(1 / deltaTime);
            }
            this.lastPlayerPosition = currentPlayerPos;
        }

        // Update AI behavior at fixed intervals
        const now = performance.now();
        if (now - this.lastUpdate > this.updateInterval) {
            this.updateAI();
            this.lastUpdate = now;
        }

        // Scan for pellets periodically
        if (now - this.lastPelletScan > this.pelletScanInterval) {
            this.scanForPellets();
            this.lastPelletScan = now;
        }

        // Move the bot
        this.move(deltaTime);

        // Check for collisions
        if (this.collisionChecksEnabled) {
            this.checkCollisions();
        }

        // Check for pellet collection
        this.checkPelletCollection();
    }

    scanForPellets() {
        if (!this.game.gameManager) return;
        
        // Update nearby pellets list
        this.nearbyPellets = this.game.gameManager.pellets.filter(pellet => {
            if (!pellet.mesh) return false;
            const distance = this.head.position.distanceTo(pellet.mesh.position);
            return distance <= this.viewDistance;
        });

        // Sort pellets by priority
        this.nearbyPellets.sort((a, b) => {
            const scoreA = this.calculatePelletScore(a);
            const scoreB = this.calculatePelletScore(b);
            return scoreB - scoreA;
        });
    }

    calculatePelletScore(pellet) {
        if (!pellet.mesh) return -Infinity;

        let score = 0;
        const distance = this.head.position.distanceTo(pellet.mesh.position);

        // Base distance factor (closer is better)
        score -= distance * 0.5;

        // Pellet type priority with much higher values for power-ups
        if (pellet.type === 'powerUp') {
            score += 10000; // Significantly increased from 5000
            if (distance < 50) { // Increased range
                score += (50 - distance) * 400; // Doubled bonus
            }
        } else if (pellet.type === 'bonus') {
            score += 800;
            if (distance < 25) {
                score += (25 - distance) * 40;
            }
        } else {
            score += 50;
            if (distance < 15) {
                score += (15 - distance) * 5;
            }
        }

        // Path analysis with higher bonus for power-ups
        if (this.isPathClear(pellet.mesh.position)) {
            score += pellet.type === 'powerUp' ? 4000 : (pellet.type === 'bonus' ? 400 : 50);
        }

        // Competition with player - much more aggressive for power-ups
        if (this.game.snake) {
            const playerDistance = this.game.snake.head.position.distanceTo(pellet.mesh.position);
            if (playerDistance < distance) {
                if (pellet.type === 'powerUp') {
                    if (distance - playerDistance < 40) { // Increased range
                        score *= 3.0; // Increased multiplier
                        score += 4000; // Doubled bonus
                    }
                } else if (pellet.type === 'bonus') {
                    if (distance - playerDistance < 15) {
                        score *= 1.3;
                        score += 600;
                    }
                } else {
                    if (distance - playerDistance < 10) {
                        score *= 0.5;
                        score += 50;
                    }
                }
            } else {
                score += (playerDistance - distance) * (pellet.type === 'powerUp' ? 320 : 40);
            }
        }

        return score;
    }

    predictInterceptionPoint(pelletPosition) {
        if (!this.game.snake || !this.playerVelocity) return null;

        const playerPos = this.game.snake.head.position;
        const playerSpeed = this.game.snake.speed || 12;
        const botPos = this.head.position;
        const pelletPos = pelletPosition.clone();

        // Calculate time for player to reach pellet
        const playerToPellet = pelletPos.clone().sub(playerPos);
        const playerDistance = playerToPellet.length();
        const playerTime = playerDistance / playerSpeed;

        // Calculate time for bot to reach pellet
        const botToPellet = pelletPos.clone().sub(botPos);
        const botDistance = botToPellet.length();
        const botTime = botDistance / this.speed;

        // If bot can reach pellet first, target pellet directly
        if (botTime < playerTime * 0.9) {
            return pelletPos;
        }

        // Otherwise, try to intercept
        const predictedPlayerPos = playerPos.clone().add(
            this.playerVelocity.clone().multiplyScalar(botTime)
        );

        // Return a point slightly ahead of the player's predicted position
        return predictedPlayerPos.clone().add(
            this.playerVelocity.clone().normalize().multiplyScalar(2)
        );
    }

    move(deltaTime) {
        if (!this.movementEnabled) return;

        // Store previous position
        const previousPosition = this.head.position.clone();

        // Update head position with smoother movement
        const movement = this.direction.clone().multiplyScalar(this.speed * deltaTime);
        this.head.position.add(movement);
        
        // Ensure bot stays at correct height and within bounds
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        const safetyMargin = 1;

        // Clamp position to world bounds with reduced safety margin
        this.head.position.x = Math.max(-halfSize + safetyMargin, Math.min(halfSize - safetyMargin, this.head.position.x));
        this.head.position.z = Math.max(-halfSize + safetyMargin, Math.min(halfSize - safetyMargin, this.head.position.z));
        this.head.position.y = 0.5;

        // Update glow position
        this.headGlow.position.copy(this.head.position);

        // Store position history for smoother segment following
        this.positionHistory.unshift(this.head.position.clone());
        
        // Keep enough history points for smooth following
        const historyLimit = Math.max((this.segments.length + 1) * 2, 10);
        while (this.positionHistory.length > historyLimit) {
            this.positionHistory.pop();
        }

        // Update segment positions with improved following behavior
        const segmentSpacing = this.segmentSpacing;
        let totalDistance = 0;

        for (let i = 0; i < this.segments.length; i++) {
            const segment = this.segments[i];
            totalDistance += segmentSpacing;

            // Find the right position in history for this segment
            let targetPosition = null;
            let remainingDistance = totalDistance;
            
            // Special handling for first segment to stay closer to head
            if (i === 0) {
                const headDir = this.direction.clone().normalize();
                targetPosition = this.head.position.clone().sub(
                    headDir.multiplyScalar(segmentSpacing)
                );
            } else {
                for (let j = 0; j < this.positionHistory.length - 1; j++) {
                    const currentPoint = this.positionHistory[j];
                    const nextPoint = this.positionHistory[j + 1];
                    const segmentDistance = currentPoint.distanceTo(nextPoint);
                    
                    if (remainingDistance <= segmentDistance) {
                        // Interpolate between these two points
                        const ratio = remainingDistance / segmentDistance;
                        targetPosition = new THREE.Vector3().lerpVectors(
                            currentPoint,
                            nextPoint,
                            ratio
                        );
                        break;
                    }
                    remainingDistance -= segmentDistance;
                }
            }

            // If no suitable position found in history, use the last history point
            if (!targetPosition && this.positionHistory.length > 0) {
                targetPosition = this.positionHistory[this.positionHistory.length - 1].clone();
            }

            // If we have a target position, smoothly move the segment towards it
            if (targetPosition) {
                // Faster interpolation for segments closer to head
                const lerpFactor = i === 0 ? 0.5 : 0.3 * (1 - (i / this.segments.length * 0.5));
                segment.position.lerp(targetPosition, lerpFactor);
                segment.position.y = 0.5; // Maintain consistent height
            }

            // Ensure segments stay within bounds with reduced safety margin
            segment.position.x = Math.max(-halfSize + safetyMargin, Math.min(halfSize - safetyMargin, segment.position.x));
            segment.position.z = Math.max(-halfSize + safetyMargin, Math.min(halfSize - safetyMargin, segment.position.z));
        }

        // Update trail
        if (this.trail) {
            this.updateTrail();
        }
    }

    updateAI() {
        if (!this.game.gameManager) return;

        // Update pellet scanning
        this.scanForPellets();

        // Find best pellet if we don't have a target
        if (!this.targetPellet || !this.game.gameManager.pellets.includes(this.targetPellet)) {
            this.targetPellet = this.findBestPellet();
            this.interceptPoint = null;
        }

        // Calculate movement direction
        let targetDirection = new THREE.Vector3();

        if (this.targetPellet && this.targetPellet.mesh) {
            // Move towards target pellet
            const targetPos = this.targetPellet.mesh.position;
            targetDirection.subVectors(targetPos, this.head.position).normalize();

            // If it's a power-up, move more aggressively towards it
            if (this.targetPellet.type === 'powerUp') {
                // Reduce influence of wall avoidance for power-ups
                const distance = this.head.position.distanceTo(targetPos);
                if (distance < 15) { // Increased range
                    this.wallAvoidanceStrength = 10; // Further reduced
                    this.speed = 15; // Temporarily increase speed
                } else {
                    this.wallAvoidanceStrength = 25;
                    this.speed = 13;
                }
            } else if (this.targetPellet.type === 'bonus') {
                const distance = this.head.position.distanceTo(targetPos);
                if (distance < 10) {
                    this.wallAvoidanceStrength = 15;
                    this.speed = 14;
                } else {
                    this.wallAvoidanceStrength = 25;
                    this.speed = 13;
                }
            }
        } else {
            // No target pellet, move in current direction
            targetDirection.copy(this.currentMovementDirection);
            this.speed = 13; // Reset speed
            this.wallAvoidanceStrength = 25; // Reset wall avoidance
        }

        // Check for wall collision and change direction if needed
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        const margin = 5;
        const pos = this.head.position;

        if (pos.x > halfSize - margin && this.currentMovementDirection.x > 0) {
            // Near right wall, turn down
            this.currentMovementDirection.set(0, 0, 1);
        } else if (pos.x < -halfSize + margin && this.currentMovementDirection.x < 0) {
            // Near left wall, turn up
            this.currentMovementDirection.set(0, 0, -1);
        } else if (pos.z > halfSize - margin && this.currentMovementDirection.z > 0) {
            // Near bottom wall, turn left
            this.currentMovementDirection.set(-1, 0, 0);
        } else if (pos.z < -halfSize + margin && this.currentMovementDirection.z < 0) {
            // Near top wall, turn right
            this.currentMovementDirection.set(1, 0, 0);
        }

        // Set the new direction
        this.setDirection(this.targetPellet ? targetDirection : this.currentMovementDirection);
    }

    calculateCenterForce() {
        // Calculate force towards center of play area
        const center = new THREE.Vector3(0, 0, 0);
        const toCenter = new THREE.Vector3().subVectors(center, this.head.position);
        const distanceToCenter = toCenter.length();
        
        // Stronger force when far from center
        const strength = Math.min(1, distanceToCenter / 20);
        return toCenter.normalize().multiplyScalar(strength);
    }

    calculateObstacleAvoidance() {
        const avoidanceVector = new THREE.Vector3();
        const obstacles = this.findNearbyObstacles();
        const predictedPosition = this.head.position.clone().add(
            this.direction.clone().multiplyScalar(5) // Look ahead 5 units
        );

        for (const obstacle of obstacles) {
            // Avoid current position
            const toObstacle = new THREE.Vector3().subVectors(obstacle.position, this.head.position);
            const distance = toObstacle.length();
            
            if (distance < this.avoidanceRadius * 1.5) { // Increased avoidance radius
                // Stronger avoidance force for closer obstacles
                const avoidanceForce = Math.pow(1 / distance, 2) * this.obstacleAvoidanceStrength;
                
                // Calculate perpendicular direction for smoother avoidance
                const perpendicular = new THREE.Vector3(-toObstacle.z, 0, toObstacle.x).normalize();
                
                // Add both direct avoidance and perpendicular movement
                avoidanceVector.add(toObstacle.normalize().multiplyScalar(avoidanceForce));
                avoidanceVector.add(perpendicular.multiplyScalar(avoidanceForce * 0.8));
            }

            // Also avoid predicted position
            const toPredicted = new THREE.Vector3().subVectors(obstacle.position, predictedPosition);
            const predictedDistance = toPredicted.length();
            
            if (predictedDistance < this.avoidanceRadius * 2) {
                const predictedForce = Math.pow(1 / predictedDistance, 2) * this.obstacleAvoidanceStrength * 0.7;
                avoidanceVector.add(toPredicted.normalize().multiplyScalar(-predictedForce));
            }
        }

        return avoidanceVector;
    }

    calculateWallAvoidance() {
        const wallAvoidance = new THREE.Vector3();
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        const safetyMargin = 1; // Reduced from 3 to keep bot closer to play area
        const pos = this.head.position;
        
        // Calculate distance to each wall (including safety margin)
        const distanceToRightWall = halfSize - safetyMargin - pos.x;
        const distanceToLeftWall = halfSize - safetyMargin + pos.x;
        const distanceToFrontWall = halfSize - safetyMargin - pos.z;
        const distanceToBackWall = halfSize - safetyMargin + pos.z;

        // Add stronger avoidance forces based on distance to walls
        const applyWallForce = (distance, direction) => {
            if (distance < this.wallAvoidanceDistance) {
                const force = Math.pow((this.wallAvoidanceDistance - distance) / this.wallAvoidanceDistance, 2);
                return force * this.wallAvoidanceStrength;
            }
            return 0;
        };

        // Apply wall avoidance forces
        wallAvoidance.x -= applyWallForce(distanceToRightWall, -1);
        wallAvoidance.x += applyWallForce(distanceToLeftWall, 1);
        wallAvoidance.z -= applyWallForce(distanceToFrontWall, -1);
        wallAvoidance.z += applyWallForce(distanceToBackWall, 1);

        // Add extra force when very close to walls
        if (this.isNearWall(4)) { // Reduced from 6
            wallAvoidance.multiplyScalar(2); // Reduced from 3
        }

        // Emergency turn if extremely close to wall
        if (this.isNearWall(2)) { // Reduced from 4
            wallAvoidance.multiplyScalar(3); // Reduced from 5
            
            // Add perpendicular force for better wall avoidance
            const currentDir = this.direction.clone();
            const perpendicular = new THREE.Vector3(-currentDir.z, 0, currentDir.x);
            wallAvoidance.add(perpendicular.multiplyScalar(this.wallAvoidanceStrength));
        }

        return wallAvoidance;
    }

    isNearWall(threshold) {
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        const safetyMargin = 2;
        const pos = this.head.position;
        
        return (
            Math.abs(pos.x) > halfSize - safetyMargin - threshold ||
            Math.abs(pos.z) > halfSize - safetyMargin - threshold
        );
    }

    getEmergencyTurnDirection() {
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        const pos = this.head.position;
        
        // Determine which wall we're closest to
        const distanceToRight = halfSize - pos.x;
        const distanceToLeft = halfSize + pos.x;
        const distanceToFront = halfSize - pos.z;
        const distanceToBack = halfSize + pos.z;

        // Find the minimum distance
        const minDistance = Math.min(distanceToRight, distanceToLeft, distanceToFront, distanceToBack);

        // Return turn direction based on closest wall
        if (minDistance === distanceToRight) return -1; // Turn left
        if (minDistance === distanceToLeft) return 1;  // Turn right
        if (minDistance === distanceToFront) return Math.sign(pos.x); // Turn away from front wall
        return -Math.sign(pos.x); // Turn away from back wall
    }

    findBestPellet() {
        // Use the sorted nearby pellets list
        if (this.nearbyPellets.length > 0) {
            return this.nearbyPellets[0];
        }
        return null;
    }

    canReachBefore(position, playerDistance) {
        if (!this.game.snake) return true;

        const myDistance = this.head.position.distanceTo(position);
        const playerSpeed = this.game.snake.speed || 12;
        const myTimeToReach = myDistance / this.speed;
        const playerTimeToReach = playerDistance / playerSpeed;

        return myTimeToReach < playerTimeToReach;
    }

    findAlternativePath(targetPosition) {
        const steps = 8;
        const angleStep = (Math.PI * 2) / steps;
        const radius = 5;

        for (let i = 0; i < steps; i++) {
            const angle = i * angleStep;
            const offset = new THREE.Vector3(
                Math.cos(angle) * radius,
                0,
                Math.sin(angle) * radius
            );
            const waypoint = targetPosition.clone().add(offset);
            
            if (this.isPathClear(waypoint) && this.isPathClear(targetPosition, waypoint)) {
                return waypoint;
            }
        }

        return null;
    }

    isGoodTacticalPosition(position) {
        if (!this.game.snake) return true;

        // Check if position gives advantage over player
        const playerPos = this.game.snake.head.position;
        const distanceToPlayer = position.distanceTo(playerPos);

        // Good distance to maintain from player
        if (distanceToPlayer > 8 && distanceToPlayer < 20) {
            return true;
        }

        // Check if position blocks player from other pellets
        let blockingScore = 0;
        for (const pellet of this.nearbyPellets) {
            if (!pellet.mesh || pellet.mesh.position === position) continue;
            
            const pelletToPlayer = pellet.mesh.position.distanceTo(playerPos);
            const pelletToPosition = pellet.mesh.position.distanceTo(position);
            
            if (pelletToPosition < pelletToPlayer) {
                blockingScore++;
            }
        }

        return blockingScore >= 2;
    }

    getDistanceToNearestWall(position) {
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        
        const distanceToRight = halfSize - position.x;
        const distanceToLeft = halfSize + position.x;
        const distanceToFront = halfSize - position.z;
        const distanceToBack = halfSize + position.z;

        return Math.min(distanceToRight, distanceToLeft, distanceToFront, distanceToBack);
    }

    isPathClear(targetPosition) {
        const direction = new THREE.Vector3()
            .subVectors(targetPosition, this.head.position)
            .normalize();
        const distance = this.head.position.distanceTo(targetPosition);
        
        // Check for obstacles along the path
        const obstacles = this.findNearbyObstacles();
        for (const obstacle of obstacles) {
            const toObstacle = new THREE.Vector3().subVectors(obstacle.position, this.head.position);
            const projection = toObstacle.dot(direction);
            
            if (projection > 0 && projection < distance) {
                const perpDistance = toObstacle.sub(direction.multiplyScalar(projection)).length();
                if (perpDistance < 2) {
                    return false;
                }
            }
        }
        
        return true;
    }

    calculatePlayerAvoidance() {
        const avoidanceVector = new THREE.Vector3();
        
        if (!this.game.snake) return avoidanceVector;

        // Calculate avoidance from player's head
        const playerHead = this.game.snake.head.position;
        const toPlayer = new THREE.Vector3().subVectors(this.head.position, playerHead);
        const distance = toPlayer.length();
        
        // Much stronger avoidance when player is close
        if (distance < 15) {
            // Exponential avoidance force that gets very strong when close
            const avoidanceStrength = Math.pow(15 / distance, 3);
            avoidanceVector.add(toPlayer.normalize().multiplyScalar(avoidanceStrength));

            // Add perpendicular component for better evasion
            const perpendicular = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize();
            avoidanceVector.add(perpendicular.multiplyScalar(avoidanceStrength * 0.5));
        }

        // Also avoid player's segments with strong avoidance
        for (const segment of this.game.snake.segments) {
            const toSegment = new THREE.Vector3().subVectors(this.head.position, segment.position);
            const segmentDistance = toSegment.length();
            
            if (segmentDistance < 12) {
                const segmentAvoidance = Math.pow(12 / segmentDistance, 2);
                avoidanceVector.add(toSegment.normalize().multiplyScalar(segmentAvoidance));
            }
        }

        // Predict player's movement and avoid future position
        if (this.game.snake.direction) {
            const predictedPosition = playerHead.clone().add(
                this.game.snake.direction.clone().multiplyScalar(5)
            );
            const toPredicted = new THREE.Vector3().subVectors(this.head.position, predictedPosition);
            const predictedDistance = toPredicted.length();
            
            if (predictedDistance < 15) {
                const predictedAvoidance = Math.pow(15 / predictedDistance, 2);
                avoidanceVector.add(toPredicted.normalize().multiplyScalar(predictedAvoidance));
            }
        }

        return avoidanceVector;
    }

    isNearObstacle(threshold) {
        const obstacles = this.findNearbyObstacles();
        for (const obstacle of obstacles) {
            if (obstacle.distance < threshold) {
                return true;
            }
        }
        return false;
    }

    findNearbyObstacles() {
        const obstacles = [];
        
        // Check game obstacles
        if (this.game.gameManager.obstacleSystem) {
            for (const obstacle of this.game.gameManager.obstacleSystem.obstacles) {
                if (!obstacle.mesh) continue;
                const distance = this.head.position.distanceTo(obstacle.mesh.position);
                if (distance < this.viewDistance) {
                    obstacles.push({
                        position: obstacle.mesh.position,
                        distance: distance
                    });
                }
            }
        }

        // Check player snake segments as obstacles
        if (this.game.snake && this.game.snake !== this) {
            for (const segment of this.game.snake.segments) {
                const distance = this.head.position.distanceTo(segment.position);
                if (distance < this.viewDistance) {
                    obstacles.push({
                        position: segment.position,
                        distance: distance
                    });
                }
            }
        }

        return obstacles;
    }

    onCollision() {
        // Override parent collision to prevent game over
        this.die();
    }

    turn(amount) {
        // Create rotation matrix
        const rotation = new THREE.Matrix4();
        rotation.makeRotationY(amount * 0.1);
        
        // Apply rotation to direction vector
        this.nextDirection.applyMatrix4(rotation);
        this.nextDirection.normalize();
        
        // Direct direction update for more responsive turning
        this.direction.copy(this.nextDirection);

        // Update head rotation to match direction
        const angle = Math.atan2(this.direction.x, this.direction.z);
        this.head.rotation.y = angle;
    }

    calculateWanderForce() {
        // Update wander angle with reduced randomness
        this.wanderAngle += (Math.random() - 0.5) * 0.1;

        // Calculate wander force with reduced radius
        const wanderForce = new THREE.Vector3();
        wanderForce.x = Math.cos(this.wanderAngle) * (this.wanderRadius * 0.5);
        wanderForce.z = Math.sin(this.wanderAngle) * (this.wanderRadius * 0.5);

        // Add some randomness to the direction
        const randomAngle = Math.random() * Math.PI * 2;
        const randomForce = new THREE.Vector3(
            Math.cos(randomAngle) * 0.3,
            0,
            Math.sin(randomAngle) * 0.3
        );
        wanderForce.add(randomForce);

        return wanderForce.normalize();
    }

    checkCollisions() {
        if (!this.collisionChecksEnabled) return;

        // Check for obstacle collisions with increased radius
        if (this.game.gameManager && this.game.gameManager.obstacleSystem) {
            const headPos = this.head.position;
            const collisionRadius = 1.2; // Increased from 0.8

            const obstacleCollision = this.game.gameManager.obstacleSystem.checkCollisions({
                position: headPos,
                radius: collisionRadius
            });

            if (obstacleCollision) {
                console.log('Bot: Obstacle collision detected', {
                    position: headPos,
                    radius: collisionRadius
                });

                // Create collision effect
                if (this.game.createParticleEffect) {
                    this.game.createParticleEffect(headPos, 0xFF0000, 20, {
                        scale: 0.2,
                        lifetime: 0.5,
                        velocityScale: 2
                    });
                }

                // Play collision sound
                if (this.game.audioManager) {
                    this.game.audioManager.play('collision');
                }

                // Perform emergency avoidance
                this.performEmergencyAvoidance();
            }
        }

        // Check for player collision with increased radius
        this.checkPlayerCollision();
    }

    checkPlayerCollision() {
        if (!this.game.snake || !this.collisionChecksEnabled) return;

        const collisionRadius = 1.2; // Increased from 0.8
        const headPos = this.head.position;
        const playerHead = this.game.snake.head.position;
        const distance = headPos.distanceTo(playerHead);

        // Check head-to-head collision
        if (distance < collisionRadius * 2) {
            if (this.game.snake.direction) {
                const playerVelocity = this.game.snake.direction.clone().normalize();
                const toBot = new THREE.Vector3().subVectors(headPos, playerHead).normalize();
                
                // Check if player is moving towards bot
                const dotProduct = playerVelocity.dot(toBot);
                if (dotProduct > 0.3) {
                    console.log('Bot: Player collision detected', {
                        distance,
                        dotProduct,
                        positions: {
                            bot: headPos,
                            player: playerHead
                        }
                    });

                    // Kill player
                    if (this.game.snake.die) {
                        this.game.snake.die();
                    }
                    
                    // Create collision effect
                    if (this.game.createParticleEffect) {
                        this.game.createParticleEffect(playerHead, 0xFF0000, 30, {
                            scale: 0.3,
                            lifetime: 1.0,
                            velocityScale: 3
                        });
                    }

                    // Play collision sound
                    if (this.game.audioManager) {
                        this.game.audioManager.play('collision');
                    }
                }
            }
        }

        // Check collision with player's segments
        for (const segment of this.game.snake.segments) {
            if (headPos.distanceTo(segment.position) < collisionRadius * 1.8) {
                console.log('Bot: Player segment collision detected', {
                    distance: headPos.distanceTo(segment.position),
                    positions: {
                        bot: headPos,
                        segment: segment.position
                    }
                });

                // Kill player
                if (this.game.snake.die) {
                    this.game.snake.die();
                }
                
                // Create collision effect
                if (this.game.createParticleEffect) {
                    this.game.createParticleEffect(segment.position, 0xFF0000, 25, {
                        scale: 0.25,
                        lifetime: 0.8,
                        velocityScale: 2.5
                    });
                }

                // Play collision sound
                if (this.game.audioManager) {
                    this.game.audioManager.play('collision');
                }
            }
        }
    }

    performEmergencyAvoidance() {
        // Get current position and direction
        const currentPos = this.head.position.clone();
        const currentDir = this.direction.clone();

        // Calculate perpendicular directions (left and right)
        const leftDir = new THREE.Vector3(-currentDir.z, 0, currentDir.x).normalize();
        const rightDir = new THREE.Vector3(currentDir.z, 0, -currentDir.x).normalize();

        // Check which direction has more space
        const leftSpace = this.checkSpaceInDirection(leftDir);
        const rightSpace = this.checkSpaceInDirection(rightDir);
        const backSpace = this.checkSpaceInDirection(currentDir.multiplyScalar(-1));

        // Choose the direction with the most space
        if (leftSpace > rightSpace && leftSpace > backSpace) {
            this.direction.copy(leftDir);
        } else if (rightSpace > leftSpace && rightSpace > backSpace) {
            this.direction.copy(rightDir);
        } else {
            this.direction.copy(currentDir.multiplyScalar(-1));
        }

        // Update next direction
        this.nextDirection.copy(this.direction);
    }

    checkSpaceInDirection(direction) {
        const rayLength = 10;
        const startPos = this.head.position.clone();
        const endPos = startPos.clone().add(direction.multiplyScalar(rayLength));
        let space = rayLength;

        // Check for obstacles in this direction
        const obstacles = this.findNearbyObstacles();
        for (const obstacle of obstacles) {
            const toObstacle = obstacle.position.clone().sub(startPos);
            const projection = toObstacle.dot(direction);
            
            if (projection > 0 && projection < rayLength) {
                const perpDistance = toObstacle.sub(direction.multiplyScalar(projection)).length();
                if (perpDistance < 2) {
                    space = Math.min(space, projection);
                }
            }
        }

        // Check for walls
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        const safetyMargin = 2;

        // Project end position and clamp to world bounds
        const projectedX = endPos.x;
        const projectedZ = endPos.z;
        
        if (Math.abs(projectedX) > halfSize - safetyMargin) {
            const distanceToWall = halfSize - safetyMargin - Math.abs(startPos.x);
            space = Math.min(space, distanceToWall);
        }
        
        if (Math.abs(projectedZ) > halfSize - safetyMargin) {
            const distanceToWall = halfSize - safetyMargin - Math.abs(startPos.z);
            space = Math.min(space, distanceToWall);
        }

        return space;
    }

    checkPelletCollection() {
        if (!this.game.gameManager) return;

        // Scan for nearby pellets
        this.scanForPellets();

        // Sort pellets by type and distance
        const sortedPellets = [...this.game.gameManager.pellets].sort((a, b) => {
            if (!a.mesh || !b.mesh) return 0;
            
            // First sort by type (power-ups first)
            if (a.type === 'powerUp' && b.type !== 'powerUp') return -1;
            if (a.type !== 'powerUp' && b.type === 'powerUp') return 1;
            
            // Then by distance
            const distA = this.head.position.distanceTo(a.mesh.position);
            const distB = this.head.position.distanceTo(b.mesh.position);
            return distA - distB;
        });

        // Check each pellet for collection, prioritizing power-ups
        for (const pellet of sortedPellets) {
            if (!pellet.mesh) continue;
            
            const distance = this.head.position.distanceTo(pellet.mesh.position);
            
            // Increased collection radius for power-ups
            const collectionRadius = pellet.type === 'powerUp' ? 4.0 : 2.0;
            
            // Debug logging for power-up collection attempts
            if (pellet.type === 'powerUp') {
                console.log('Bot: Checking power-up collection', {
                    distance,
                    collectionRadius,
                    dotProduct: this.direction.dot(new THREE.Vector3().subVectors(pellet.mesh.position, this.head.position).normalize()),
                    position: this.head.position,
                    powerUpPosition: pellet.mesh.position
                });
            }
            
            if (distance < collectionRadius) {
                // Simplified collection logic - no direction check needed
                console.log('Bot: Collecting pellet', {
                    distance,
                    type: pellet.type,
                    collectionRadius
                });
                this.collectPellet(pellet);
                break;
            }
        }
    }

    collectPellet(pellet) {
        if (!this.isAlive) return;

        // Add score and handle power-ups
        if (this.game.gameManager) {
            let points = 10; // Default points
            
            if (pellet.type === 'bonus') {
                points = 50;
            } else if (pellet.type === 'powerUp') {
                points = 100;
                // Handle power-up effects
                if (this.game.gameManager.activatePowerUp) {
                    console.log('Bot: Activating power-up', { type: pellet.type });
                    this.game.gameManager.activatePowerUp(pellet.type);
                }
            }

            // Add score if the method exists
            if (this.game.gameManager.addScore) {
                this.game.gameManager.addScore(points);
            }
        }

        // Add new segment
        this.addSegment();

        // Play collection sound with different sounds for different types
        if (this.game.audioManager) {
            if (pellet.type === 'powerUp') {
                this.game.audioManager.play('powerUpCollect');
            } else if (pellet.type === 'bonus') {
                this.game.audioManager.play('bonusCollect');
            } else {
                this.game.audioManager.play('pelletCollect');
            }
        }

        // Create collection effect with different colors for different types
        if (this.game.createParticleEffect) {
            let effectColor = 0xFFD700;
            let particleCount = 15;
            let effectScale = 0.1;
            
            if (pellet.type === 'powerUp') {
                effectColor = 0x00FF00;
                particleCount = 25;
                effectScale = 0.15;
            } else if (pellet.type === 'bonus') {
                effectColor = 0xFF00FF;
                particleCount = 20;
                effectScale = 0.12;
            }

            this.game.createParticleEffect(pellet.mesh.position, effectColor, particleCount, {
                scale: effectScale,
                lifetime: 0.5,
                velocityScale: 2
            });
        }

        // Remove pellet from game
        if (this.game.gameManager) {
            this.game.gameManager.removePellet(pellet);
        }

        // Reset target pellet
        this.targetPellet = null;
    }

    addSegment() {
        // Create new segment
        const segment = new THREE.Mesh(
            new THREE.SphereGeometry(0.5, 16, 16),
            this.material.clone()
        );

        // Position the new segment behind the last segment or head
        const lastSegment = this.segments[this.segments.length - 1];
        const referencePosition = lastSegment ? lastSegment.position : this.head.position;
        const direction = this.direction.clone().normalize();
        
        // Position new segment behind the reference position
        segment.position.copy(referencePosition).sub(
            direction.multiplyScalar(this.segmentSpacing)
        );
        segment.position.y = 0.5;

        // Add to scene and segments array
        this.game.scene.add(segment);
        this.segments.push(segment);

        // Ensure position history has enough points
        const lastPos = this.positionHistory[this.positionHistory.length - 1];
        if (lastPos) {
            this.positionHistory.push(lastPos.clone());
        }

        // Update trail if it exists and has the correct method
        if (this.trail && typeof this.trail.updateSegmentCount === 'function') {
            this.trail.updateSegmentCount(this.segments.length);
        }

        // Adjust segment spacing based on snake length
        this.segmentSpacing = Math.max(0.8, 1.0 - (this.segments.length * 0.005));
    }
} 