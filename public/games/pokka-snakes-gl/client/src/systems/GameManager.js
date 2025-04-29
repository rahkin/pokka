import * as THREE from 'three';
import { Snake } from '../entities/Snake';
import { Pellet } from '../entities/Pellet';
import { PowerUp } from '../entities/PowerUp';
import { ObstacleSystem } from './ObstacleSystem';
import { PowerUpSystem } from './PowerUpSystem.js';
import { BotSnake } from '../entities/BotSnake';
import { AudioManager } from './AudioManager';

export class GameManager {
    constructor(game) {
        this.game = game;
        this.scene = game.scene;
        this.camera = game.camera;
        this.renderer = game.renderer;
        this.isRunning = true;
        this.isGameOver = false;
        this.collisionChecksEnabled = false;
        this.startTime = performance.now();
        this.lastPelletTime = 0;
        this.pellets = [];
        this.powerUps = new Set();
        this.settings = {
            spawnInterval: 1000,
            maxPellets: 50,
            maxPowerUps: 3,
            powerUpSpawnChance: 0.1,
            botSnakeEnabled: true
        };

        // Initialize systems
        this.powerUpSystem = new PowerUpSystem(this);
        this.obstacleSystem = new ObstacleSystem(this);
        this.audioManager = new AudioManager();

        // Setup game environment
        this.setupRenderer();
        this.setupLights();
        this.setupEventListeners();
        this.addDecorations();

        // Start game systems
        this.powerUpSystem.start();
        this.obstacleSystem.start();
        this.spawnInitialPellets();
        this.spawnInitialPowerUps();
        if (this.settings.botSnakeEnabled) {
            this.spawnBotSnake();
        }

        // Start update loop
        this.update = this.update.bind(this);
        requestAnimationFrame(this.update);
    }

    setupRenderer() {
        try {
            this.renderer = new THREE.WebGLRenderer({ 
                antialias: true,
                powerPreference: "high-performance"
            });
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            document.body.appendChild(this.renderer.domElement);
        } catch (error) {
            console.error('Error setting up renderer:', error);
        }
    }

    setupLights() {
        // Ambient light
        this.ambientLight = new THREE.AmbientLight(0x404040);
        this.scene.add(this.ambientLight);

        // Directional light with shadows
        this.directionalLight = new THREE.DirectionalLight(0xffffff, 1);
        this.directionalLight.position.set(1, 1, 1);
        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.mapSize.width = 2048;
        this.directionalLight.shadow.mapSize.height = 2048;
        this.scene.add(this.directionalLight);

        // Hemisphere light
        this.hemisphereLight = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
        this.scene.add(this.hemisphereLight);
    }

    setupEventListeners() {
        window.addEventListener('keydown', (e) => {
            if (e.key === 'r') this.game.restart();
            if (e.key === 'p') this.togglePause();
        });
    }

    start() {
        console.log('GameManager: Starting game');
        this.isRunning = true;
        this.isGameOver = false;
        this.pellets = [];
        this.powerUps.clear();
        this.totalPellets = 0;
        this.pelletSpawnInterval = 2;
        this.lastPelletSpawnTime = 0;
        this.collisionChecksEnabled = false;
        this.startTime = Date.now();
        this.obstacleSystem.start();
        this.powerUpSystem.start();

        // Spawn initial pellets and power-ups
        this.spawnInitialPellets();
        this.spawnInitialPowerUps();

        // Create bot snake with delay
        setTimeout(() => {
            this.spawnBotSnake();
        }, this.botStartDelay);

        // Delay enabling collision checks until after snake initialization
        setTimeout(() => {
            this.collisionChecksEnabled = true;
            console.log('GameManager: Enabling collision checks');
        }, this.startDelay);
    }

    stop() {
        console.log('GameManager: Stopping game');
        this.isRunning = false;
        this.isGameOver = false;
        this.collisionChecksEnabled = false;
        
        // Stop systems
        if (this.powerUpSystem) {
            this.powerUpSystem.cleanup();
        }
        if (this.obstacleSystem) {
            this.obstacleSystem.cleanup();
        }
        
        // Clean up game objects
        this.cleanup();
    }

    spawnInitialPellets() {
        // Spawn more initial pellets
        for (let i = 0; i < 5; i++) {
            this.spawnPellet();
        }
    }

    spawnInitialPowerUps() {
        // Spawn initial power-ups
        for (let i = 0; i < 2; i++) {
            this.spawnPowerUp();
        }
    }

    spawnBotSnake() {
        // Create bot snake at random position
        const angle = Math.random() * Math.PI * 2;
        const distance = 15; // Start distance from center
        const startPos = new THREE.Vector3(
            Math.cos(angle) * distance,
            0.5,
            Math.sin(angle) * distance
        );

        this.botSnake = new BotSnake(this.game, startPos);
        console.log('GameManager: Bot snake spawned', {
            position: startPos.clone(),
            angle: angle
        });
    }

    update(deltaTime) {
        if (!this.isRunning) return;

        // Update systems
        this.powerUpSystem.update(deltaTime);
        this.obstacleSystem.update(deltaTime);

        // Update bot snake
        if (this.botSnake && this.botSnake.isAlive) {
            this.botSnake.update(deltaTime);
        }

        // Handle spawning
        this.handleSpawning();

        // Check collisions if enabled
        if (this.collisionChecksEnabled) {
            this.checkCollisions();
        }
    }

    checkCollisions() {
        if (!this.collisionChecksEnabled) return;

        // Check player snake collisions
        if (this.game.snake) {
            this.game.snake.checkCollisions();
        }

        // Check bot snake collisions
        if (this.botSnake && this.botSnake.isAlive) {
            this.botSnake.checkCollisions();

            // Check collision between player and bot
            if (this.game.snake && this.game.snake.isAlive) {
                this.checkSnakeCollision(this.game.snake, this.botSnake);
            }
        }
    }

    checkSnakeCollision(snake1, snake2) {
        if (!snake1 || !snake2) return;

        const headDistance = snake1.head.position.distanceTo(snake2.head.position);
        if (headDistance < 1.0) {
            // Head-on collision, both snakes die
            snake1.die();
            snake2.die();
            return;
        }

        // Check snake1's head against snake2's body
        for (const segment of snake2.segments) {
            if (snake1.head.position.distanceTo(segment.position) < 0.8) {
                snake1.die();
                return;
            }
        }

        // Check snake2's head against snake1's body
        for (const segment of snake1.segments) {
            if (snake2.head.position.distanceTo(segment.position) < 0.8) {
                snake2.die();
                return;
            }
        }
    }

    collectPellet(pellet) {
        if (!pellet || !pellet.isActive) return;

        // Play sound effect
        this.audioManager.playSound('collect');

        // Remove the pellet
        this.removePellet(pellet);

        // Grow the snake
        this.game.snake.grow();
    }

    collectPowerUp(powerUp) {
        if (!powerUp || !powerUp.isActive) return;

        // Play power-up sound
        this.audioManager.playSound('powerup');

        // Apply power-up effect
        const effect = powerUp.getEffect();
        if (effect) {
            effect(this.game.snake);
        }

        // Remove the power-up
        this.powerUps.delete(powerUp);
        this.scene.remove(powerUp.mesh);
    }

    spawnPellet() {
        const type = Math.random() < 0.2 ? 'bonus' : 'normal';
        const worldSize = this.game.worldSize || 45;
        const halfSize = worldSize / 2;
        const position = new THREE.Vector3(
            (Math.random() - 0.5) * worldSize,
            0.5,
            (Math.random() - 0.5) * worldSize
        );
        const pellet = new Pellet(this.game, position, type);
        this.pellets.push(pellet);
        console.log('GameManager: Spawned new pellet', {
            type,
            position: position.clone(),
            totalPellets: this.pellets.length,
            worldSize
        });
    }

    spawnPowerUp() {
        const type = this.settings.powerUpTypes[
            Math.floor(Math.random() * this.settings.powerUpTypes.length)
        ];
        const worldSize = this.game.worldSize || 45;
        
        // Ensure power-ups spawn within the game bounds, away from edges and center
        const minDistanceFromCenter = 10; // Minimum distance from center
        const maxDistanceFromCenter = (worldSize / 2) - 5; // Keep away from edges
        
        let position;
        let attempts = 0;
        const maxAttempts = 10;
        
        do {
            // Generate random angle and radius
            const angle = Math.random() * Math.PI * 2;
            const radius = minDistanceFromCenter + Math.random() * (maxDistanceFromCenter - minDistanceFromCenter);
            
            // Convert to Cartesian coordinates
            position = new THREE.Vector3(
                Math.cos(angle) * radius,
                0.5, // Slightly above ground
                Math.sin(angle) * radius
            );
            
            attempts++;
        } while (this.isPositionOccupied(position) && attempts < maxAttempts);
        
        const powerUp = new PowerUp(this.game, type);
        powerUp.setPosition(position);
        this.powerUps.add(powerUp);
        
        console.log('GameManager: Spawned new power-up', {
            type,
            powerUpType: PowerUpSystem.Types[type],
            position: position.clone(),
            totalPowerUps: this.powerUps.size,
            worldSize,
            distanceFromCenter: position.length(),
            collisionChecksEnabled: this.collisionChecksEnabled,
            isRunning: this.isRunning,
            isGameOver: this.isGameOver,
            snakePosition: this.game.snake?.head?.position
        });
    }

    isPositionOccupied(position) {
        // Check distance from other power-ups
        const minDistance = 5; // Minimum distance between power-ups
        for (const powerUp of this.powerUps) {
            if (powerUp.position.distanceTo(position) < minDistance) {
                return true;
            }
        }
        
        // Check distance from snake
        if (this.game.snake && this.game.snake.head) {
            if (position.distanceTo(this.game.snake.head.position) < minDistance) {
                return true;
            }
        }
        
        return false;
    }

    handleSpawning() {
        const now = Date.now();
        if (now - this.lastSpawnTime > this.settings.spawnInterval) {
            if (this.pellets.length < this.settings.maxPellets) {
                if (Math.random() < this.settings.powerUpChance) {
                    this.spawnPowerUp();
                } else {
                    this.spawnPellet();
                }
            }
            this.lastSpawnTime = now;
        }
    }

    updateDifficulty(deltaTime) {
        this.settings.spawnInterval = Math.max(
            500,
            this.settings.spawnInterval - deltaTime * this.settings.difficultyIncrease
        );
        this.obstacleSystem.increaseDifficulty(deltaTime);
    }

    gameOver() {
        if (this.isGameOver) return;
        
        console.log('GameManager: Game Over');
        this.isGameOver = true;
        this.isRunning = false;
        this.collisionChecksEnabled = false;
        
        // Show game over screen
        this.showGameOverScreen();
    }

    showGameOverScreen() {
        const gameOverDiv = document.createElement('div');
        gameOverDiv.className = 'game-over';
        gameOverDiv.innerHTML = `
            <h1>Game Over</h1>
            <button id="restartButton">Play Again</button>
        `;
        document.body.appendChild(gameOverDiv);

        const restartButton = document.getElementById('restartButton');
        if (restartButton) {
            restartButton.addEventListener('click', () => {
                this.game.restart();
                gameOverDiv.remove();
            });
        }
    }

    restart() {
        console.log('GameManager: Restarting game');
        
        // Reset game state
        this.isRunning = true;
        this.isGameOver = false;
        this.collisionChecksEnabled = false;
        this.startTime = performance.now();
        
        // Reset settings
        this.settings.spawnInterval = 1000;
        
        // Clean up existing game objects
        this.cleanup();
        
        // Initialize fresh game state
        this.powerUpSystem.start();
        this.obstacleSystem.start();
        this.spawnInitialPellets();
        
        // Delay enabling collision checks
        setTimeout(() => {
            console.log('GameManager: Enabling collision checks');
            this.collisionChecksEnabled = true;
        }, 3000);
        
        console.log('GameManager: Game restarted:', {
            isRunning: this.isRunning,
            pelletCount: this.pellets.length
        });
    }

    togglePause() {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.startTime = performance.now();
            this.collisionChecksEnabled = false;
        }
    }

    cleanup() {
        console.log('GameManager: Cleaning up game objects');
        
        // Clean up pellets
        this.pellets.forEach(pellet => {
            if (pellet && pellet.cleanup) {
                pellet.cleanup();
            }
        });
        this.pellets = [];
        
        // Clean up power-ups
        this.powerUps.forEach(powerUp => {
            if (powerUp && powerUp.collect) {
                powerUp.collect();
            }
        });
        this.powerUps.clear();
        
        // Clean up obstacles
        if (this.obstacleSystem) {
            this.obstacleSystem.cleanup();
        }

        // Clean up bot snake
        if (this.botSnake) {
            this.botSnake.cleanup();
            this.botSnake = null;
        }
    }

    addDecorations() {
        // Add some random rocks or obstacles for visual interest
        for (let i = 0; i < 20; i++) {
            const size = 0.5 + Math.random() * 1;
            const geometry = new THREE.BoxGeometry(size, size, size);
            const material = new THREE.MeshStandardMaterial({
                color: 0x666666,
                roughness: 0.7,
                metalness: 0.3
            });
            const rock = new THREE.Mesh(geometry, material);
            
            // Random position within bounds
            rock.position.x = (Math.random() - 0.5) * 80;
            rock.position.z = (Math.random() - 0.5) * 80;
            rock.position.y = size / 2;
            
            rock.castShadow = true;
            rock.receiveShadow = true;
            this.scene.add(rock);
        }
    }

    removePellet(pellet) {
        const index = this.pellets.indexOf(pellet);
        if (index > -1) {
            this.pellets.splice(index, 1);
        }
        pellet.cleanup();
    }
} 