import * as THREE from 'three';
import { Snake } from '../entities/Snake';
import { Pellet } from '../entities/Pellet';
import { PowerUp } from '../entities/PowerUp';
import { ObstacleSystem } from './ObstacleSystem';
import { PowerUpSystem } from './PowerUpSystem.js';
import { BotSnake } from '../entities/BotSnake';

export class GameManager {
    constructor(game) {
        this.game = game;
        this.isRunning = false;
        this.isGameOver = false;
        this.collisionChecksEnabled = false;
        this.pellets = [];
        this.powerUps = new Set();
        this.powerUpSystem = new PowerUpSystem(game);
        this.obstacleSystem = new ObstacleSystem(game);
        
        this.settings = {
            maxPellets: 20,
            powerUpChance: 0.1,
            powerUpTypes: Object.keys(PowerUpSystem.Types),
            spawnInterval: 1000, // ms
            difficultyIncrease: 0.1
        };

        this.startDelay = 1000; // 1 second delay before enabling collisions
        this.startTime = 0;
        this.lastSpawnTime = 0;
        this.score = 0;
        this.highScores = this.loadHighScores();
        this.multiplier = 1;
        this.combo = 0;
        this.lastPelletTime = 0;
        this.comboTimeout = null;
        this.updateScoreboard();
        this.setupEventListeners();

        // Combo system settings
        this.comboSettings = {
            comboTimeout: 3000, // 3 seconds to maintain combo
            basePoints: 10,
            comboMultipliers: [1, 1.5, 2, 3, 5], // Multipliers for combo levels
            comboThresholds: [0, 3, 5, 8, 10], // Thresholds for combo levels
            maxComboLevel: 4 // Maximum combo level (index into arrays above)
        };
        
        // Combo state
        this.currentCombo = 0;
        this.comboTimer = null;

        // Add bot snake tracking
        this.botSnake = null;
        this.botStartDelay = 2000; // 2 second delay before bot starts
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
        this.score = 0;
        this.pellets = [];
        this.powerUps.clear();
        this.totalPellets = 0;
        this.pelletSpawnInterval = 2;
        this.lastPelletSpawnTime = 0;
        this.collisionChecksEnabled = false;
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
        if (!pellet || !this.isRunning || !this.game.snake) return;

        const now = Date.now();
        const timeSinceLastPellet = now - this.lastPelletTime;

        // Update combo based on time between pellets
        if (timeSinceLastPellet < this.comboSettings.comboTimeout) {
            this.currentCombo++;
        } else {
            this.currentCombo = 0;
        }

        // Calculate combo level and multiplier
        const comboLevel = this.getComboLevel();
        const multiplier = this.comboSettings.comboMultipliers[comboLevel];
        
        // Calculate points with combo multiplier
        const basePoints = pellet.isBonus ? 50 : this.comboSettings.basePoints;
        const points = Math.round(basePoints * multiplier);

        // Add points to score
        this.score += points;
        
        // Create score popup with combo information
        this.showScorePopup(points, this.currentCombo, comboLevel);

        // Update combo timer
        this.lastPelletTime = now;
        if (this.comboTimer) clearTimeout(this.comboTimer);
        this.comboTimer = setTimeout(() => {
            if (this.currentCombo > 0) {
                this.currentCombo = 0;
                this.updateScoreboard();
            }
        }, this.comboSettings.comboTimeout);

        // Remove the collected pellet
        this.removePellet(pellet);
        
        // Make the snake grow
        this.game.snake.addSegment();
        
        // Spawn a new pellet
        this.spawnPellet();
        
        // Update the scoreboard
        this.updateScoreboard();

        // Create combo effect if combo is high enough
        if (comboLevel >= 2) {
            this.createComboEffect(this.game.snake.head.position, comboLevel);
        }

        // Play eat sound
        if (this.game.audioManager) {
            this.game.audioManager.play('eat');
        }

        console.log('GameManager: Pellet collected', {
            points,
            basePoints,
            multiplier,
            combo: this.currentCombo,
            comboLevel,
            timeSinceLastPellet,
            snakeLength: this.game.snake.segments.length
        });
    }

    getComboLevel() {
        for (let i = this.comboSettings.maxComboLevel; i >= 0; i--) {
            if (this.currentCombo >= this.comboSettings.comboThresholds[i]) {
                return i;
            }
        }
        return 0;
    }

    showScorePopup(points, combo, comboLevel) {
        const popup = document.createElement('div');
        popup.className = 'score-popup';
        
        // Style based on combo level
        const colors = ['#ffffff', '#00ff00', '#00ffff', '#ff00ff', '#ff0000'];
        const sizes = [24, 28, 32, 36, 40];
        
        popup.innerHTML = `
            <span class="points">+${points}</span>
            ${combo > 1 ? `<span class="combo">x${combo}</span>` : ''}
        `;
        
        // Position popup above snake's head
        const headPos = this.game.snake.head.position;
        const screenPos = this.worldToScreen(headPos);
        
        popup.style.cssText = `
            position: fixed;
            left: ${screenPos.x}px;
            top: ${screenPos.y - 50}px;
            color: ${colors[comboLevel]};
            font-size: ${sizes[comboLevel]}px;
            text-shadow: 0 0 10px ${colors[comboLevel]};
            pointer-events: none;
            z-index: 1000;
            font-family: 'Press Start 2P', monospace;
            text-align: center;
        `;
        
        document.body.appendChild(popup);
        
        // Animate and remove
        requestAnimationFrame(() => {
            popup.style.transform = 'translateY(-100px) scale(1.2)';
            popup.style.opacity = '0';
        });
        
        setTimeout(() => popup.remove(), 1000);
    }

    createComboEffect(position, comboLevel) {
        // Create particle effect for high combos
        const colors = [0x00ff00, 0x00ffff, 0xff00ff, 0xff0000];
        const particleCount = 10 + (comboLevel * 5);
        
        this.game.createParticleEffect(position, colors[comboLevel - 1], particleCount, {
            scale: 0.2 + (comboLevel * 0.1),
            lifetime: 1.0 + (comboLevel * 0.2),
            velocityScale: 2 + comboLevel,
            verticalForce: 2 + comboLevel,
            emissive: true
        });

        // Play combo sound with increasing pitch
        const soundConfig = {
            pitch: 1 + (comboLevel * 0.2),
            volume: 0.5 + (comboLevel * 0.1)
        };
        this.game.audioManager.play('combo', soundConfig);
    }

    worldToScreen(position) {
        const vector = position.clone();
        vector.project(this.game.camera);
        
        return {
            x: (vector.x + 1) * window.innerWidth / 2,
            y: (-vector.y + 1) * window.innerHeight / 2
        };
    }

    collectPowerUp(powerUp) {
        if (!powerUp || this.isGameOver) {
            console.log('GameManager: Cannot collect power-up', {
                hasPowerUp: !!powerUp,
                isGameOver: this.isGameOver
            });
            return;
        }

        // Store power-up position before cleanup
        const powerUpPosition = powerUp.mesh ? powerUp.mesh.position.clone() : null;
        const powerUpType = powerUp.type;

        // Determine which snake collected the power-up based on distance
        let collectingSnake = null;
        let minDistance = Infinity;

        // Check player snake
        if (this.game.snake) {
            const playerDistance = this.game.snake.head.position.distanceTo(powerUp.mesh.position);
            if (playerDistance < 4.0) {
                collectingSnake = this.game.snake;
                minDistance = playerDistance;
            }
        }

        // Check bot snake
        if (this.botSnake && this.botSnake.isAlive) {
            const botDistance = this.botSnake.head.position.distanceTo(powerUp.mesh.position);
            if (botDistance < 4.0 && botDistance < minDistance) {
                collectingSnake = this.botSnake;
                minDistance = botDistance;
            }
        }

        if (!collectingSnake) {
            return; // No snake close enough to collect
        }

        console.log('GameManager: Collecting power-up', {
            type: powerUpType,
            position: powerUpPosition,
            snakeType: collectingSnake === this.game.snake ? 'player' : 'bot',
            snakePosition: collectingSnake.head.position.clone(),
            distance: minDistance
        });

        // Activate power-up effect using PowerUpSystem
        if (this.powerUpSystem) {
            console.log('GameManager: Activating power-up through PowerUpSystem', {
                type: powerUpType,
                powerUpSystem: !!this.powerUpSystem,
                snake: collectingSnake === this.game.snake ? 'player' : 'bot'
            });
            this.powerUpSystem.activatePowerUp(powerUpType, collectingSnake);
        } else {
            console.error('GameManager: PowerUpSystem not found');
        }
        
        // Remove the power-up
        this.powerUps.delete(powerUp);
        powerUp.cleanup();
        
        // Spawn a new power-up after a short delay
        setTimeout(() => {
            if (this.isRunning && !this.isGameOver) {
                this.spawnPowerUp();
            }
        }, 2000);
        
        // Play sound effect if available
        if (this.game.audioManager) {
            this.game.audioManager.play('powerUp');
        }

        // Create visual effect using stored position
        if (this.game.createParticleEffect && powerUpPosition) {
            const powerUpTypeDef = PowerUpSystem.Types[powerUpType];
            const effectColor = powerUpTypeDef ? powerUpTypeDef.color : 0x00ff00;
            this.game.createParticleEffect(powerUpPosition, effectColor, 30, {
                scale: 0.3,
                lifetime: 1.0,
                velocityScale: 3
            });
        }
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
        
        console.log('GameManager: Game over triggered');
        
        // Disable collision checks first
        this.collisionChecksEnabled = false;
        
        // Update game state
        this.isGameOver = true;
        this.isRunning = false;
        
        // Clean up bot snake
        if (this.botSnake) {
            this.botSnake.cleanup();
            this.botSnake = null;
        }

        // Play game over sound
        if (this.game.audioManager) {
            this.game.audioManager.play('gameOver');
        }
        
        // Ensure game over is handled properly
        if (this.game.handleGameOver) {
            this.game.handleGameOver();
        } else {
            console.error('GameManager: handleGameOver method not found on game instance');
        }

        // Add final score to high scores
        this.highScores.push({ score: this.score, date: new Date().toISOString() });
        this.highScores.sort((a, b) => b.score - a.score);
        this.highScores = this.highScores.slice(0, 10); // Keep only top 10
        this.saveHighScores();
        this.updateScoreboard();
    }

    showGameOverScreen() {
        const gameOverElement = document.createElement('div');
        gameOverElement.className = 'game-over';
        gameOverElement.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(0, 0, 0, 0.8);
            padding: 20px;
            border-radius: 10px;
            color: white;
            font-family: 'Press Start 2P', monospace;
            text-align: center;
            z-index: 1000;
        `;
        
        const highScore = Math.max(...this.highScores.map(score => score.score), 0);
        
        gameOverElement.innerHTML = `
            <h1>Game Over</h1>
            <p>Score: ${this.score}</p>
            <p>High Score: ${highScore}</p>
            <button style="
                background: #3EE0B1;
                border: none;
                padding: 10px 20px;
                border-radius: 5px;
                color: black;
                font-family: 'Press Start 2P', monospace;
                cursor: pointer;
                margin-top: 20px;
            ">Play Again</button>
        `;
        
        const button = gameOverElement.querySelector('button');
        button.onclick = () => {
            document.body.removeChild(gameOverElement);
            this.game.restart();
        };
        
        document.body.appendChild(gameOverElement);
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
        }, 3000); // Increased delay to 3 seconds
        
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

    loadHighScores() {
        const scores = localStorage.getItem('highScores');
        return scores ? JSON.parse(scores) : [];
    }

    saveHighScores() {
        localStorage.setItem('highScores', JSON.stringify(this.highScores));
    }

    updateScoreboard() {
        const container = document.getElementById('scores-container');
        if (!container) return;

        // Sort scores in descending order
        const sortedScores = [...this.highScores]
            .sort((a, b) => b.score - a.score)
            .slice(0, 10); // Keep top 10 scores

        // Create HTML for each score entry
        const scoresHTML = sortedScores.map((score, index) => `
            <div class="score-entry${score.score === this.score ? ' current' : ''}">
                <span class="rank">#${index + 1}</span>
                <span class="score">${score.score}</span>
            </div>
        `).join('');

        // Add current score if it's not in top 10
        if (!sortedScores.some(score => score.score === this.score)) {
            container.innerHTML = scoresHTML + `
                <div class="score-entry current">
                    <span class="rank">Current</span>
                    <span class="score">${this.score}</span>
                </div>
            `;
        } else {
            container.innerHTML = scoresHTML;
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