import * as THREE from 'three';

export class PowerUpSystem {
    static Types = {
        ghost: {
            id: 'ghost',
            name: 'Ghost Mode',
            icon: '👻',
            color: 0x808080,
            duration: 8000,
            effect: (snake) => {
                snake.setGhostMode(true);
                return () => snake.setGhostMode(false);
            }
        },
        timeSlow: {
            id: 'timeSlow',
            name: 'Time Warp',
            icon: '⌛',
            color: 0x00ffff,
            duration: 10000,
            effect: (snake) => {
                snake.setTimeScale(0.5);
                return () => snake.setTimeScale(1.0);
            }
        },
        magnet: {
            id: 'magnet',
            name: 'Pellet Magnet',
            icon: '🧲',
            color: 0xff00ff,
            duration: 15000,
            effect: (snake) => {
                snake.setMagnetMode(true);
                return () => snake.setMagnetMode(false);
            }
        },
        shield: {
            id: 'shield',
            name: 'Shield',
            icon: '🛡️',
            color: 0xffff00,
            duration: 12000,
            effect: (snake) => {
                snake.setInvulnerable(true);
                return () => snake.setInvulnerable(false);
            }
        }
    };

    constructor(game) {
        this.game = game;
        this.powerUps = [];
        this.isActive = false;
        this.activePowerUps = new Map();
        this.magnetRadius = 15; // Radius for magnet effect
        this.timeSlowFactor = 0.5; // Time slow factor (0.5 = half speed)
        this.magnetActive = false;
    }

    start() {
        this.isActive = true;
        console.log('PowerUpSystem: Started');
    }

    cleanup() {
        this.isActive = false;
        // Clean up any active power-ups
        for (const [type] of this.activePowerUps) {
            this.deactivatePowerUp(type);
        }
        this.activePowerUps.clear();
    }

    activatePowerUp(type) {
        console.log('PowerUpSystem: Activating power-up', {
            type,
            hasSnake: !!this.game.snake,
            activePowerUps: Array.from(this.activePowerUps.keys())
        });

        if (!this.game.snake) {
            console.error('PowerUpSystem: Cannot activate power-up - no snake found');
            return;
        }

        const powerUpType = PowerUpSystem.Types[type];
        if (!powerUpType) {
            console.error('PowerUpSystem: Invalid power-up type', { type });
            return;
        }

        // Remove existing power-up of same type
        if (this.activePowerUps.has(powerUpType.id)) {
            this.deactivatePowerUp(powerUpType.id);
        }

        try {
            // Apply effect and store cleanup function
            const cleanup = powerUpType.effect(this.game.snake);
            
            // Store power-up info
            this.activePowerUps.set(powerUpType.id, {
                type: powerUpType,
                cleanup,
                timer: setTimeout(() => {
                    this.deactivatePowerUp(powerUpType.id);
                }, powerUpType.duration)
            });

            // Show visual effect
            this.showPowerUpEffect(type);

            console.log('PowerUpSystem: Power-up activated', {
                type: powerUpType.id,
                duration: powerUpType.duration,
                activePowerUps: Array.from(this.activePowerUps.keys())
            });
        } catch (error) {
            console.error('PowerUpSystem: Error activating power-up', {
                type,
                error: error.message,
                stack: error.stack
            });
        }
    }

    deactivatePowerUp(typeId) {
        const powerUp = this.activePowerUps.get(typeId);
        if (powerUp) {
            console.log('PowerUpSystem: Deactivating power-up', { typeId });
            
            try {
                // Clear the timer
                if (powerUp.timer) {
                    clearTimeout(powerUp.timer);
                }
                
                // Call cleanup function if it exists
                if (powerUp.cleanup) {
                    powerUp.cleanup();
                }
                
                // Remove from active power-ups
                this.activePowerUps.delete(typeId);
                
                console.log('PowerUpSystem: Power-up deactivated', {
                    typeId,
                    activePowerUps: Array.from(this.activePowerUps.keys())
                });
            } catch (error) {
                console.error('PowerUpSystem: Error deactivating power-up', {
                    typeId,
                    error: error.message,
                    stack: error.stack
                });
            }
        }
    }

    showPowerUpEffect(type) {
        const powerUpType = PowerUpSystem.Types[type];
        if (!powerUpType) return;

        // Create visual effect for power-up activation
        if (this.game.snake && this.game.snake.head) {
            const effectGeometry = new THREE.SphereGeometry(2, 32, 32);
            const effectMaterial = new THREE.MeshPhongMaterial({
                color: powerUpType.color,
                transparent: true,
                opacity: 0.5,
                emissive: powerUpType.color,
                emissiveIntensity: 0.5
            });
            const effectMesh = new THREE.Mesh(effectGeometry, effectMaterial);
            this.game.snake.head.add(effectMesh);

            // Animate and remove effect
            const duration = 1000; // 1 second
            const startTime = performance.now();
            const animate = () => {
                const elapsed = performance.now() - startTime;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    effectMesh.scale.setScalar(1 + progress);
                    effectMesh.material.opacity = 0.5 * (1 - progress);
                    requestAnimationFrame(animate);
                } else {
                    if (effectMesh.parent) {
                        effectMesh.parent.remove(effectMesh);
                    }
                    effectMesh.geometry.dispose();
                    effectMesh.material.dispose();
                }
            };
            animate();
        }
    }

    update(deltaTime) {
        if (!this.isActive) return;

        // Update active power-ups
        for (const [type, powerUp] of this.activePowerUps) {
            const elapsed = performance.now() - powerUp.startTime;
            
            // Check if power-up duration has expired
            if (elapsed >= powerUp.duration) {
                console.log(`PowerUpSystem: Power-up ${type} expired`);
                this.deactivatePowerUp(type);
            }
        }
    }
} 