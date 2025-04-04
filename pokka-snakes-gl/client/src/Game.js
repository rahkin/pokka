import * as THREE from 'three';
import { AdvancedCameraController } from './camera/AdvancedCameraController';
import { Snake } from './entities/Snake';
import { Pellet } from './entities/Pellet';
import { GameManager } from './systems/GameManager';
import { HUD } from './ui/HUD';
import { PowerUpSystem } from './systems/PowerUpSystem';
import { WeatherSystem } from './systems/WeatherSystem';
import { AudioManager } from './systems/AudioManager';
import { ObstacleSystem } from './systems/ObstacleSystem';
import { Scoreboard } from './ui/Scoreboard';
import './styles/scoreboard.css';
// Import other systems as needed
// import { NetworkManager } from './network/NetworkManager';
// import { GameStateManager } from './systems/GameStateManager';
// etc...

export class Game {
    constructor(updateLoadingProgress) {
        // Store the callback with a different name
        this._loadingProgressCallback = updateLoadingProgress || (() => {});
        
        // Initialize core components first
        this.initializeCore();
        this.updateLoadingProgress(10, 'Initializing core components...');
        
        // Initialize audio manager
        this.audioManager = new AudioManager();
        
        // Initialize game with a more resilient approach
        this.initializeGame().catch(error => {
            console.error('Game: Failed to initialize:', error);
            // Force show the game even if initialization fails
            this.forceShowGame();
        });
        
        this.lastTime = 0;
        this.isRunning = false;
        this.isGameOver = false;
        this.lastPelletSpawnTime = 0;
        this.pelletSpawnInterval = 2;
        this.specialPelletChance = 0.2;
        this.frameCount = 0;
        this.dayNightCycle = 0;
        this.particles = [];
        this.snakeTrail = [];
        this.weatherChangeInterval = 30;
        this.lastWeatherChange = 0;

        // Initialize input manager with direction vectors
        this.inputManager = {
            keys: new Set(),
            directions: {
                'ArrowUp': new THREE.Vector3(0, 0, -1),
                'ArrowDown': new THREE.Vector3(0, 0, 1),
                'ArrowLeft': new THREE.Vector3(-1, 0, 0),
                'ArrowRight': new THREE.Vector3(1, 0, 0),
            }
        };
    }

    forceShowGame() {
        console.log('Game: Force showing game');
        const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
        
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            console.log('Game: Added hidden class to loading screen');
        } else {
            console.warn('Game: Loading screen element not found');
        }
        
        if (gameContainer) {
            gameContainer.style.visibility = 'visible';
            console.log('Game: Made game container visible');
            
            // Force a resize event to ensure proper rendering
            window.dispatchEvent(new Event('resize'));
        } else {
            console.warn('Game: Game container element not found');
        }
        
        // Ensure the game is running
        if (!this.isRunning) {
            console.log('Game: Starting game as it was not running');
            this.start();
        }
    }

    async initializeGame() {
        try {
            console.log('Game: Starting initialization sequence');
            
            // Initialize weather system first
            this.weatherSystem = new WeatherSystem(this.scene);
            this.updateLoadingProgress(20, 'Weather system initialized...');
            
            // Initialize game systems
            await this.initializeSystems();
            this.updateLoadingProgress(40, 'Game systems initialized...');

            // Create the scene and environment
            await this.createBasicScene();
            this.updateLoadingProgress(60, 'Scene created...');

            // Initialize audio with a timeout
            const audioInitPromise = Promise.race([
                this.audioManager.initializeSounds(),
                new Promise((_, reject) => setTimeout(() => reject(new Error('Audio initialization timeout')), 5000))
            ]).catch(error => {
                console.warn('Game: Audio initialization timed out or failed:', error);
                return null; // Continue without audio
            });

            // Wait for audio initialization to complete
            await audioInitPromise;
            console.log('Game: Audio initialization complete');
            this.updateLoadingProgress(80, 'Audio initialized...');

            // Start the game
            this.start();
            this.updateLoadingProgress(100, 'Ready!');
            
            console.log('Game: All systems initialized, showing instructions');
            
            // Show instructions and wait for user to start
            await this.showInstructions();
            
            console.log('Game: Initialization sequence complete');
        } catch (error) {
            console.error('Game: Failed to initialize:', error);
            // Force show the game even if initialization fails
            this.forceShowGame();
        }
    }

    async showInstructions() {
        return new Promise((resolve) => {
            const loadingBar = document.getElementById('loading-progress');
            const loadingText = document.getElementById('loading-text');
            const instructions = document.getElementById('instructions');
            const startButton = document.getElementById('start-button');

            // Hide loading progress elements
            if (loadingBar) loadingBar.style.display = 'none';
            if (loadingText) loadingText.style.display = 'none';

            // Show instructions
            if (instructions) {
                instructions.style.display = 'block';
                console.log('Game: Showing instructions panel');
            }

            // Handle start button click
            if (startButton) {
                startButton.onclick = () => {
                    console.log('Game: Start button clicked');
                    this.forceShowGame();
                    resolve();
                };
            }
        });
    }

    initializeCore() {
        // Set up scene first
        this.setupScene();
        
        // Set up renderer
        this.setupRenderer();
        
        // Set up camera
        this.setupCamera();

        // Set up lights
        this.setupLights();
        
        // Create basic scene with ground
        this.createBasicScene();
        
        // Set up input
        this.setupInput();
        
        // Set up HUD last
        this.hud = new HUD(this);

        // Initialize scoreboard
        this.scoreboard = new Scoreboard(this);
        this.scoreboard.loadScores();
    }

    initializeSystems() {
        // Initialize game manager first
        this.gameManager = new GameManager(this);
        
        // Initialize power-up system
        this.powerUpSystem = new PowerUpSystem(this);
        
        // Initialize obstacle system
        this.obstacleSystem = new ObstacleSystem(this);
        this.obstacleSystem.start();
        
        // Create snake at the center of the scene
        const startPosition = new THREE.Vector3(0, 0.5, 0);
        this.snake = new Snake(this, startPosition);

        // Set snake as camera target
        if (this.cameraController) {
            this.cameraController.setTarget(this.snake.head);
        }

        // Initialize other systems
        this.gameManager.start();

        // Add window resize handler
        const boundHandleResize = this.handleResize.bind(this);
        window.addEventListener('resize', boundHandleResize);

        // Store the bound function for cleanup
        this._boundHandleResize = boundHandleResize;
    }

    cleanup() {
        this.isRunning = false;

        // Remove event listeners
        if (this._boundHandleResize) {
            window.removeEventListener('resize', this._boundHandleResize);
            this._boundHandleResize = null;
        }

        // Cleanup HUD
        if (this.hud) {
            this.hud.cleanup();
        }

        // Cleanup scoreboard
        if (this.scoreboard) {
            this.scoreboard.cleanup();
        }

        // Cleanup obstacle system
        if (this.obstacleSystem) {
            this.obstacleSystem.cleanup();
        }

        // Dispose of Three.js objects
        if (this.scene) {
            this.scene.traverse(object => {
                if (object.geometry) {
                    object.geometry.dispose();
                }
                if (object.material) {
                    if (Array.isArray(object.material)) {
                        object.material.forEach(material => material.dispose());
                    } else {
                        object.material.dispose();
                    }
                }
            });
        }

        // Cleanup camera controller
        if (this.cameraController) {
            this.cameraController.cleanup();
        }

        // Dispose of renderer
        if (this.renderer) {
            this.renderer.dispose();
            this.renderer.domElement.remove();
        }

        if (this.gameManager) {
            this.gameManager.cleanup();
        }

        // Cleanup audio manager
        if (this.audioManager) {
            this.audioManager.cleanup();
        }
    }

    setupRenderer() {
        try {
            this.renderer = new THREE.WebGLRenderer({ 
                antialias: true,
                powerPreference: "high-performance",
                alpha: false // Ensure black background instead of transparent
            });
            this.renderer.setClearColor(0x000000); // Set clear color to black
            this.renderer.setSize(window.innerWidth, window.innerHeight);
            this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            
            // Clear any existing canvas
            const existingCanvas = document.querySelector('canvas');
            if (existingCanvas) {
                existingCanvas.remove();
            }
            
            // Add renderer to game container
            const gameContainer = document.getElementById('game-container');
            if (gameContainer) {
                gameContainer.appendChild(this.renderer.domElement);
            } else {
            document.body.appendChild(this.renderer.domElement);
            }
            
            console.log('Game: Renderer initialized', {
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRatio: this.renderer.getPixelRatio(),
                shadowsEnabled: this.renderer.shadowMap.enabled
            });
        } catch (error) {
            console.error('Error setting up renderer:', error);
            throw error;
        }
    }

    setupScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x8B4513); // Changed to coffee brown color
        this.scene.fog = new THREE.FogExp2(0x8B4513, 0.01); // Matched fog color to background
        console.log('Game: Scene initialized');
    }

    setupCamera() {
        // Create camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        // Set initial camera position
        this.camera.position.set(0, 15, 20);
        this.camera.lookAt(0, 0, 0);

        // Initialize camera controller after camera is set up
        try {
            this.cameraController = new AdvancedCameraController(this);
        } catch (error) {
            console.warn('Error initializing camera controller:', error);
            // Fallback to basic camera if controller fails
            this.camera.position.set(0, 30, 30);
            this.camera.lookAt(0, 0, 0);
        }
    }

    setupLights() {
        // Warm ambient light matching the photo's sunlit atmosphere
        this.ambientLight = new THREE.AmbientLight(0xFFE4B5, 0.4);
        this.scene.add(this.ambientLight);

        // Main sunlight with warm tone
        this.directionalLight = new THREE.DirectionalLight(0xFFE4B5, 1.0);
        this.directionalLight.position.set(50, 50, 50);
        this.directionalLight.castShadow = true;
        this.directionalLight.shadow.mapSize.width = 2048;
        this.directionalLight.shadow.mapSize.height = 2048;
        this.directionalLight.shadow.camera.near = 0.5;
        this.directionalLight.shadow.camera.far = 500;
        this.directionalLight.shadow.bias = -0.0001;
        this.scene.add(this.directionalLight);

        // Soft fill light for shadows
        this.hemisphereLight = new THREE.HemisphereLight(0xF5E6D3, 0x4A3728, 0.6);
        this.scene.add(this.hemisphereLight);

        // Add spotlights for giant coffee cups
        const cupPositions = [
            [-80, 0, -80], [80, 0, -80],
            [-80, 0, 80], [80, 0, 80]
        ];

        cupPositions.forEach(pos => {
            const spotlight = new THREE.SpotLight(0xFFE4B5, 1);
            spotlight.position.set(pos[0], 15, pos[2]);
            spotlight.target.position.set(pos[0], 0, pos[2]);
            spotlight.angle = Math.PI / 6;
            spotlight.penumbra = 0.3;
            spotlight.decay = 1.5;
            spotlight.distance = 30;
            spotlight.castShadow = true;
            this.scene.add(spotlight);
            this.scene.add(spotlight.target);
        });
    }

    setupInput() {
        const handleKeyDown = (e) => {
            // Prevent default behavior for game controls
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key)) {
                e.preventDefault();
                
                // Get direction from input manager
                const direction = this.inputManager.directions[e.key];
                if (direction && this.snake) {
                    console.log('Game: Key pressed', {
                        key: e.key,
                        direction: direction.clone(),
                        currentSnakeDirection: this.snake.direction ? this.snake.direction.clone() : null,
                        snakePosition: this.snake.head.position.clone()
                    });
                    this.snake.setDirection(direction);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
    }

    createBasicScene() {
        // Create ground plane with white material for the play area
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const textureLoader = new THREE.TextureLoader();
        
        // Create base material for the ground
        const groundMaterial = new THREE.MeshStandardMaterial({
            color: 0xFFFFFF,
            roughness: 0.7,
            metalness: 0.3,
            envMapIntensity: 1,
            side: THREE.DoubleSide,
            transparent: true
        });
        
        // Create the ground mesh
        this.ground = new THREE.Mesh(groundGeometry, groundMaterial);
        this.ground.rotation.x = -Math.PI / 2;
        this.ground.position.y = 0.01;
        this.ground.receiveShadow = true;
        this.scene.add(this.ground);

        // Load AIAI texture for ground
        console.log('Loading aiai texture for ground');
        textureLoader.load('/assets/img/aiai_header.png', (texture) => {
            console.log('Successfully loaded aiai texture');
            texture.flipY = true;
            const material = new THREE.MeshStandardMaterial({
                map: texture,
                transparent: true,
                opacity: 0.8,
                depthWrite: true,
                roughness: 0.5,
                metalness: 0.1,
                side: THREE.DoubleSide
            });
            const plane = new THREE.Mesh(groundGeometry, material);
            plane.rotation.x = -Math.PI / 2;
            plane.position.y = -0.5;
            plane.receiveShadow = true;
            this.scene.add(plane);
        });

        // Add stylish grid with subtle colors on white
        const gridHelper = new THREE.GridHelper(100, 20, 0xE0E0E0, 0xF0F0F0);
        gridHelper.material.opacity = 0.2;
        gridHelper.material.transparent = true;
        gridHelper.position.y = 0.02;
        this.scene.add(gridHelper);

        // Add coffee shop environment
        this.createCoffeeShopEnvironment();

        // Add decorative elements
        this.addDecorations();
    }

    createCoffeeShopEnvironment() {
        // Create walls first
        this.createWalls();

        // Create floor
        const floorGeometry = new THREE.PlaneGeometry(100, 100);
        const floorMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            roughness: 0.8,
            metalness: 0.2
        });

        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
            floor.rotation.x = -Math.PI / 2;
        floor.position.y = 0;
            this.scene.add(floor);

        // Add furniture and other elements
        this.addFurniture();
        this.addKiosk();
        this.addNPCs();
        this.addCoffeeShopProps();
        
        // Add the picture frames explicitly
        this.createPictureFrames();
    }

    createWalls() {
        // Walls removed to prevent blocking of game elements
    }

    async createPictureFrames() {
        // Create frame geometry - reduced size by 10%
        const frameGeometry = new THREE.BoxGeometry(8.64, 11.52, 0.3);  // Reduced from 9.6x12.8 to 8.64x11.52
        const frameMaterial = new THREE.MeshStandardMaterial({
            color: 0x8B4513,
            roughness: 0.3,
            metalness: 0.1,
            emissive: 0x4A3728,
            emissiveIntensity: 0.2
        });

        // Add picture frames
        const frames = [
            { pos: [-20, 12, -70], rotation: 0, image: '/assets/img/frame1.png' },  // Left frame
            { pos: [20, 12, -70], rotation: 0, image: '/assets/img/frame2.png' }    // Right frame
        ];

        // Load images first
        const imageLoader = new THREE.TextureLoader();
        const images = await Promise.all(frames.map(async ({ image }) => {
            try {
                console.log('Attempting to load image:', image);
                const texture = await new Promise((resolve, reject) => {
                    imageLoader.load(
                        image,  // Updated path with base
                        (texture) => {
                            console.log('Successfully loaded image:', image);
                            texture.minFilter = THREE.LinearFilter;
                            texture.magFilter = THREE.LinearFilter;
                            texture.format = THREE.RGBAFormat;
                            texture.flipY = true;
                            texture.needsUpdate = true;
                            resolve(texture);
                        },
                        (progress) => {
                            console.log(`Loading progress for ${image}:`, (progress.loaded / progress.total * 100) + '%');
                        },
                        (error) => {
                            console.error(`Failed to load image ${image}:`, error);
                            reject(error);
                        }
                    );
                });
                return texture;
            } catch (error) {
                console.error(`Failed to load image ${image}:`, error);
                return null;
            }
        }));

        frames.forEach(({ pos, rotation, image }, index) => {
            // Create main frame
            const frame = new THREE.Mesh(frameGeometry, frameMaterial);
            frame.position.set(pos[0], pos[1], pos[2]);
            frame.rotation.y = rotation;
            frame.castShadow = true;
            frame.receiveShadow = true;
            this.scene.add(frame);

            // Create image plane - slightly smaller than frame (reduced by 10%)
            const imageGeometry = new THREE.PlaneGeometry(8.06, 10.94);  // Reduced from 8.96x12.16 to 8.06x10.94
            const imageMaterial = new THREE.MeshBasicMaterial({
                color: 0xFFFFFF,
                side: THREE.DoubleSide,  // Changed to DoubleSide to ensure visibility
                map: images[index] || null,
                transparent: true,  // Enable transparency
                opacity: 1.0,
                depthWrite: false,  // Prevent depth issues
                depthTest: false    // Prevent depth issues
            });
            const imageMesh = new THREE.Mesh(imageGeometry, imageMaterial);
            imageMesh.position.set(pos[0], pos[1], pos[2] - 0.1);
            imageMesh.rotation.y = rotation;
            imageMesh.renderOrder = 1;  // Ensure it renders after the frame
            this.scene.add(imageMesh);

            // Add spotlight for the frame - adjusted for new size
            const spotlight = new THREE.SpotLight(0xFFE4B5, 1.5);
            spotlight.position.set(pos[0], pos[1] + 3, pos[2] + 3);
            spotlight.target.position.set(pos[0], pos[1], pos[2]);
            spotlight.angle = Math.PI / 6;
            spotlight.penumbra = 0.3;
            spotlight.decay = 1.5;
            spotlight.distance = 15;
            this.scene.add(spotlight);
            this.scene.add(spotlight.target);

            // Store reference for texture updates
            imageMesh.userData.isPictureFrame = true;
            imageMesh.userData.frameIndex = index;

            console.log('Added picture frame at:', pos, 'with image:', image);
        });
    }

    addFurniture() {
        // Create table geometry with warm wood color from the photo
        const tableGeometry = new THREE.CylinderGeometry(3, 3, 0.5, 16); // Increased table size
        const tableMaterial = new THREE.MeshPhongMaterial({
            color: 0x8B4513, // Warm wood tone
            shininess: 30
        });

        // Create chair geometry with soft pink from Pokka's shirt - scaled up
        const chairGeometry = new THREE.BoxGeometry(1.2, 1.8, 1.2); // Increased chair size
        const chairMaterial = new THREE.MeshPhongMaterial({
            color: 0xFFB6C6, // Soft pink
            shininess: 30
        });

        // Place tables and chairs in a pattern - moved closer to watch the game
        const tablePositions = [
            [-57.5, 0, -57.5], [-57.5, 0, -34.5], [-57.5, 0, -11.5],
            [57.5, 0, -57.5], [57.5, 0, -34.5], [57.5, 0, -11.5],
            [-57.5, 0, 11.5], [-57.5, 0, 34.5], [-57.5, 0, 57.5],
            [57.5, 0, 11.5], [57.5, 0, 34.5], [57.5, 0, 57.5]
        ];

        tablePositions.forEach(pos => {
            // Add table - fixed orientation
            const table = new THREE.Mesh(tableGeometry, tableMaterial);
            table.position.set(pos[0], pos[1] + 0.25, pos[2]); // Raised by half height to sit on ground
            table.castShadow = true;
            table.receiveShadow = true;
            this.scene.add(table);

            // Add chairs around the table - scaled up and properly positioned
            const chairOffsets = [
                [-3.5, 0, 0], [3.5, 0, 0],
                [0, 0, -3.5], [0, 0, 3.5]
            ];

            chairOffsets.forEach(offset => {
                const chair = new THREE.Mesh(chairGeometry, chairMaterial);
                chair.position.set(
                    pos[0] + offset[0],
                    pos[1] + 0.9, // Half chair height
                    pos[2] + offset[2]
                );
                chair.castShadow = true;
                chair.receiveShadow = true;
                this.scene.add(chair);
            });
        });
    }

    addKiosk() {
        // Create main kiosk structure with cream color from the walls - scaled up
        const kioskGeometry = new THREE.BoxGeometry(15, 6, 6); // Increased size
        const kioskMaterial = new THREE.MeshPhongMaterial({
            color: 0xF5E6D3, // Cream color
            shininess: 50
        });

        const kiosk = new THREE.Mesh(kioskGeometry, kioskMaterial);
        kiosk.position.set(0, 3, -70); // Adjusted height for new size
        kiosk.castShadow = true;
        kiosk.receiveShadow = true;
        this.scene.add(kiosk);

        // Add counter top with coffee brown - scaled up
        const counterGeometry = new THREE.BoxGeometry(18, 0.3, 7); // Increased size
        const counterMaterial = new THREE.MeshPhongMaterial({
            color: 0x4A3728, // Deep coffee brown
            shininess: 60
        });

        const counter = new THREE.Mesh(counterGeometry, counterMaterial);
        counter.position.set(0, 6, -69); // Adjusted height for new size
        counter.castShadow = true;
        counter.receiveShadow = true;
        this.scene.add(counter);

        // Add coffee machines and props
        this.addCoffeeShopProps();

        // Add plants around the kiosk
        this.addPlants();
    }

    addNPCs() {
        // Create simple NPC geometries - scaled up
        const bodyGeometry = new THREE.CapsuleGeometry(0.8, 1.5, 4, 8); // Increased size
        const headGeometry = new THREE.SphereGeometry(0.6, 16, 16); // Increased size

        // Create NPCs with different colors - moved closer to watch
        const npcPositions = [
            // Customers at tables
            [-50, 0, -50], [50, 0, -30], [-50, 0, 10], [50, 0, 50],
            // Baristas behind kiosk
            [-3, 0, -68], [3, 0, -68]
        ];

        npcPositions.forEach((pos, index) => {
            const isBarista = index >= npcPositions.length - 2;
            const npcColor = isBarista ? 0x3EE0B1 : 0xE179DA;

            // Create body
            const bodyMaterial = new THREE.MeshPhongMaterial({
                color: npcColor,
                shininess: 30
            });
            const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
            body.position.set(pos[0], pos[1] + 2.25, pos[2]); // Adjusted height for new size
            body.castShadow = true;
            this.scene.add(body);

            // Create head
            const headMaterial = new THREE.MeshPhongMaterial({
                color: npcColor,
                shininess: 30
            });
            const head = new THREE.Mesh(headGeometry, headMaterial);
            head.position.set(pos[0], pos[1] + 4, pos[2]); // Adjusted height for new size
            head.castShadow = true;
            this.scene.add(head);

            // Store reference for animation
            const npc = { body, head, initialY: pos[1] + 2.25 };
            npc.floatSpeed = 0.5 + Math.random() * 0.5;
            npc.floatOffset = Math.random() * Math.PI * 2;
            this.npcs = this.npcs || [];
            this.npcs.push(npc);
        });
    }

    addPlants() {
        // Create plant pots with plants - scaled up
        const potPositions = [
            [-8, 0, -68], [8, 0, -68],  // Next to kiosk
            [-50, 0, -70], [50, 0, -70], // Corners
            [-50, 0, 70], [50, 0, 70]    // Back corners
        ];

        potPositions.forEach(pos => {
            // Create pot - scaled up
            const potGeometry = new THREE.CylinderGeometry(1.2, 0.9, 1.8, 16);
            const potMaterial = new THREE.MeshPhongMaterial({
                color: 0x4A3728, // Deep brown
                shininess: 30
            });
            const pot = new THREE.Mesh(potGeometry, potMaterial);
            pot.position.set(...pos);
            pot.castShadow = true;
            pot.receiveShadow = true;
            this.scene.add(pot);

            // Create plant foliage - scaled up
            const foliageGeometry = new THREE.SphereGeometry(1.5, 16, 16);
            const foliageMaterial = new THREE.MeshPhongMaterial({
                color: 0x7EA479, // Soft green
                shininess: 20
            });
            const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
            foliage.position.set(pos[0], pos[1] + 2.25, pos[2]);
            foliage.scale.set(1.5, 2.25, 1.5);
            foliage.castShadow = true;
            this.scene.add(foliage);
        });
    }

    addCoffeeShopProps() {
        // Add coffee machines on the kiosk
        const machinePosX = [-4, 0, 4];
        machinePosX.forEach(x => {
            const machine = new THREE.Mesh(
                new THREE.BoxGeometry(1.5, 1.5, 1),
                new THREE.MeshPhongMaterial({
                    color: 0xFFFFFF,
                    shininess: 90
                })
            );
            machine.position.set(x, 4.85, -69);
            machine.castShadow = true;
            this.scene.add(machine);
        });

        // Add giant decorative coffee cups
        const cupPositions = [
            { pos: [-80, 0, -80], rotation: 0.4 },  // Further out in corners
            { pos: [80, 0, -80], rotation: -0.4 },
            { pos: [-80, 0, 80], rotation: 0.3 },
            { pos: [80, 0, 80], rotation: -0.3 }
        ];

        cupPositions.forEach(({pos, rotation}) => {
            // Create cup body - made slightly larger for visibility at distance
            const cupBody = new THREE.Mesh(
                new THREE.CylinderGeometry(4, 3, 8, 32),  // Increased size
                new THREE.MeshPhongMaterial({
                    color: 0xFFFFFF,
                    shininess: 100
                })
            );
            cupBody.position.set(pos[0], pos[1] + 4, pos[2]);  // Raised higher
            cupBody.rotation.y = rotation;
            cupBody.castShadow = true;
            this.scene.add(cupBody);

            // Create handle - scaled up proportionally
            const handleTorus = new THREE.Mesh(
                new THREE.TorusGeometry(2, 0.5, 16, 32),  // Increased size
                new THREE.MeshPhongMaterial({
                    color: 0xFFFFFF,
                    shininess: 100
                })
            );
            handleTorus.position.set(pos[0] + 4, pos[1] + 4, pos[2]);  // Adjusted for new cup size
            handleTorus.rotation.y = rotation + Math.PI / 2;
            handleTorus.castShadow = true;
            this.scene.add(handleTorus);

            // Create saucer - scaled up proportionally
            const saucer = new THREE.Mesh(
                new THREE.CylinderGeometry(5.5, 5.7, 0.4, 32),  // Increased size
                new THREE.MeshPhongMaterial({
                    color: 0xFFFFFF,
                    shininess: 100
                })
            );
            saucer.position.set(pos[0], pos[1] + 0.2, pos[2]);
            saucer.rotation.y = rotation;
            saucer.castShadow = true;
            this.scene.add(saucer);

            // Add coffee liquid - scaled up proportionally
            const coffee = new THREE.Mesh(
                new THREE.CylinderGeometry(3.8, 3.8, 0.1, 32),  // Increased size
                new THREE.MeshPhongMaterial({
                    color: 0x4A3728, // Deep coffee brown
                    shininess: 60,
                    transparent: true,
                    opacity: 0.9
                })
            );
            coffee.position.set(pos[0], pos[1] + 7.5, pos[2]);  // Adjusted for new height
            coffee.rotation.y = rotation;
            this.scene.add(coffee);

            // Add steam particles - made larger and higher
            for (let i = 0; i < 5; i++) {
                const steam = new THREE.Mesh(
                    new THREE.SphereGeometry(0.4, 8, 8),  // Slightly larger steam
                    new THREE.MeshPhongMaterial({
                        color: 0xFFFFFF,
                        transparent: true,
                        opacity: 0.3
                    })
                );
                steam.position.set(
                    pos[0] + (Math.random() - 0.5) * 3,  // Wider spread
                    pos[1] + 8 + i * 1,  // Higher steam
                    pos[2] + (Math.random() - 0.5) * 3   // Wider spread
                );
                steam.userData.initialY = steam.position.y;
                steam.userData.floatSpeed = 0.3 + Math.random() * 0.2;
                steam.userData.floatOffset = Math.random() * Math.PI * 2;
                this.scene.add(steam);
            }
        });

        // Add hanging lights with warm glow
        const lightPositions = [
            [-60, 8, -60], [-60, 8, 0], [-60, 8, 60],
            [60, 8, -60], [60, 8, 0], [60, 8, 60]
        ];

        lightPositions.forEach(pos => {
            // Light fixture
            const fixture = new THREE.Mesh(
                new THREE.CylinderGeometry(0.2, 0.4, 1, 16),
                new THREE.MeshPhongMaterial({
                    color: 0xFFE4B5, // Warm light
                    emissive: 0xFFE4B5,
                    emissiveIntensity: 0.5
                })
            );
            fixture.position.set(...pos);
            this.scene.add(fixture);

            // Add point light with warm color
            const light = new THREE.PointLight(0xFFE4B5, 0.8, 20);
            light.position.set(...pos);
            this.scene.add(light);
        });
    }

    addDecorations() {
        // Add floating orbs with Pokka's colors
        for (let i = 0; i < 30; i++) {
            const size = 0.2 + Math.random() * 0.3;
            const geometry = new THREE.SphereGeometry(size, 16, 16);
            
            // Alternate between Pokka's colors
            const colors = [0x3EE0B1, 0xFAA70D, 0xE179DA];
            const material = new THREE.MeshPhongMaterial({
                color: colors[i % 3],
                emissive: colors[i % 3],
                emissiveIntensity: 0.3,
                transparent: true,
                opacity: 0.7,
                shininess: 30
            });
            
            const orb = new THREE.Mesh(geometry, material);
            
            // Position orbs in a more interesting pattern
            const radius = 20 + Math.random() * 20;
            const angle = (i / 30) * Math.PI * 2;
            orb.position.x = Math.cos(angle) * radius;
            orb.position.z = Math.sin(angle) * radius;
            orb.position.y = 2 + Math.random() * 8; // Float at different heights
            
            // Store initial position for animation
            orb.userData.initialY = orb.position.y;
            orb.userData.floatSpeed = 0.5 + Math.random() * 0.5;
            orb.userData.floatOffset = Math.random() * Math.PI * 2;
            
            orb.castShadow = true;
            this.scene.add(orb);
        }

        // Add some ground decorations
        for (let i = 0; i < 15; i++) {
            const geometry = new THREE.RingGeometry(0.5, 0.7, 32);
            const material = new THREE.MeshPhongMaterial({
                color: 0x3EE0B1,
                emissive: 0x3EE0B1,
                emissiveIntensity: 0.2,
                side: THREE.DoubleSide,
                transparent: true,
                opacity: 0.3
            });
            
            const ring = new THREE.Mesh(geometry, material);
            ring.rotation.x = -Math.PI / 2;
            
            // Position rings randomly on the ground
            ring.position.x = (Math.random() - 0.5) * 80;
            ring.position.z = (Math.random() - 0.5) * 80;
            ring.position.y = 0.01; // Slightly above ground
            
            this.scene.add(ring);
        }
    }

    restart() {
        console.log('Game: Restarting game');
        
        // Show loading screen
        const loadingScreen = document.getElementById('loading-screen');
        const gameContainer = document.getElementById('game-container');
        
        if (loadingScreen && gameContainer) {
            loadingScreen.style.display = 'flex';
            gameContainer.style.display = 'none';
            
            // Update initial loading text
            const loadingText = document.getElementById('loading-text');
            if (loadingText) {
                loadingText.textContent = 'Restarting game...';
            }
        }
        
        // Stop the current game
        this.isRunning = false;
        this.isGameOver = false;
        this.frameCount = 0; // Reset frame count on restart
        
        // Clean up existing snake
        if (this.snake) {
            this.snake.cleanup();
            this.snake = null;
        }

        // Clean up game manager
        if (this.gameManager) {
            this.gameManager.stop();
        }

        // Clean up power-up system if it exists
        if (this.powerUpSystem) {
            try {
                this.powerUpSystem.stop();
            } catch (error) {
                console.warn('Game: Error stopping power-up system:', error);
            }
        }

        // Reset camera position first
        if (this.camera) {
            this.camera.position.set(0, 15, 20);
            this.camera.lookAt(0, 0, 0);
        }

        // Clear the entire scene
        const objectsToRemove = [];
        this.scene.traverse((object) => {
            if (object !== this.scene) {
                objectsToRemove.push(object);
            }
        });
        
        objectsToRemove.forEach(object => {
            this.scene.remove(object);
            if (object.geometry) object.geometry.dispose();
            if (object.material) {
                if (Array.isArray(object.material)) {
                    object.material.forEach(material => material.dispose());
                } else {
                    object.material.dispose();
                }
            }
        });

        // Reset scene properties with coffee shop colors
        this.scene.background = new THREE.Color(0x8B4513);
        this.scene.fog = new THREE.FogExp2(0x8B4513, 0.01);

        // Recreate all lights
        this.setupLights();

        // Update loading progress
        this.updateLoadingProgress(30);

        // Recreate the entire environment
        this.createBasicScene(); // This includes ground, grid, and coffee shop environment

        // Update loading progress
        this.updateLoadingProgress(60);

        // Create new snake at the center
        const startPosition = new THREE.Vector3(0, 0.5, 0);
        this.snake = new Snake(this, startPosition);

        // Update loading progress
        this.updateLoadingProgress(80);

        // Set snake as camera target
        if (this.cameraController) {
            this.cameraController.setTarget(this.snake.head);
        }

        // Reinitialize game systems
        this.gameManager = new GameManager(this);
        this.powerUpSystem = new PowerUpSystem(this);

        // Start game systems
        this.gameManager.start();
        this.powerUpSystem.start();
        this.isRunning = true;
        this.isGameOver = false;

        // Update loading progress
        this.updateLoadingProgress(100);

        // Hide loading screen and show game after a short delay
        setTimeout(() => {
            if (loadingScreen && gameContainer) {
                loadingScreen.style.display = 'none';
                gameContainer.style.display = 'block';
            }
        }, 500);

        // Start the animation loop
        this.animate();

        console.log('Game: Restart complete', {
            isRunning: this.isRunning,
            isGameOver: this.isGameOver,
            hasSnake: !!this.snake,
            hasPowerUpSystem: !!this.powerUpSystem,
            snakePosition: this.snake?.head?.position,
            hasEnvironment: true
        });
    }

    handleGameOver() {
        if (this.isGameOver) return;
        
        console.log('Game: Handling game over');
        
        this.isGameOver = true;
        this.isRunning = false;
        
        // Stop game manager first
        if (this.gameManager) {
            this.gameManager.gameOver();
            // Show game over screen using GameManager
            setTimeout(() => {
                this.gameManager.showGameOverScreen();
                console.log('Game: Game over screen shown', {
                    isRunning: this.isRunning,
                    isGameOver: this.isGameOver,
                    hasSnake: !!this.snake,
                    score: this.gameManager.score
                });
            }, 100);
        }

        // Add the current score to the scoreboard
        if (this.scoreboard) {
            this.scoreboard.addScore(this.snake.score);
        }
    }

    stop() {
        console.log('Game: Stopping game');
        this.isRunning = false;
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
        
        // Ensure game over screen is visible
        const gameOverScreen = document.getElementById('gameOverScreen');
        if (gameOverScreen) {
            gameOverScreen.style.display = 'flex';
            console.log('Game: Game over screen displayed');
        }
    }

    createParticleEffect(position, color, count = 10, options = {}) {
        const {
            scale = 0.1,
            lifetime = 1.0,
            velocityScale = 2,
            verticalForce = 1,
            emissive = false
        } = options;

        for (let i = 0; i < count; i++) {
            const particle = new THREE.Mesh(
                new THREE.SphereGeometry(scale, 8, 8),
                new THREE.MeshPhongMaterial({
                    color: color,
                    transparent: true,
                    opacity: 0.8,
                    emissive: emissive ? color : 0x000000,  // Use black when not emissive
                    emissiveIntensity: emissive ? 0.5 : 0
                })
            );

            particle.position.copy(position);
            particle.velocity = new THREE.Vector3(
                (Math.random() - 0.5) * velocityScale,
                Math.random() * verticalForce,
                (Math.random() - 0.5) * velocityScale
            );
            particle.lifetime = lifetime;
            particle.initialScale = scale;
            this.particles.push(particle);
            this.scene.add(particle);
        }
    }

    updateParticles(deltaTime) {
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            particle.lifetime -= deltaTime;

            if (particle.lifetime <= 0) {
                this.scene.remove(particle);
                this.particles.splice(i, 1);
                continue;
            }

            // Update position with more dynamic movement
            particle.velocity.y -= deltaTime * 2; // Gravity effect
            particle.position.add(particle.velocity.clone().multiplyScalar(deltaTime));
            
            // Fade out with smooth curve
            particle.material.opacity = (particle.lifetime * particle.lifetime) * 0.8;
            
            // Scale down over lifetime
            const scale = particle.initialScale * (0.5 + particle.lifetime * 0.5);
            particle.scale.set(scale, scale, scale);
            
            // Add subtle rotation
            particle.rotation.x += deltaTime * (Math.random() - 0.5);
            particle.rotation.z += deltaTime * (Math.random() - 0.5);
            
            // Slow down with air resistance
            particle.velocity.multiplyScalar(0.98);
        }
    }

    createSnakeTrail() {
        if (!this.snake || !this.snake.head) return;

        const trail = new THREE.Mesh(
            new THREE.SphereGeometry(0.2, 8, 8),
            new THREE.MeshPhongMaterial({
                color: 0x3EE0B1,
                transparent: true,
                opacity: 0.5
            })
        );

        trail.position.copy(this.snake.head.position);
        trail.lifetime = 0.5; // Trail particles last 0.5 seconds
        this.snakeTrail.push(trail);
        this.scene.add(trail);
    }

    updateSnakeTrail(deltaTime) {
        // Update existing trail particles
        for (let i = this.snakeTrail.length - 1; i >= 0; i--) {
            const trail = this.snakeTrail[i];
            trail.lifetime -= deltaTime;

            if (trail.lifetime <= 0) {
                this.scene.remove(trail);
                this.snakeTrail.splice(i, 1);
                continue;
            }

            // Fade out
            trail.material.opacity = trail.lifetime;
            
            // Shrink slightly
            trail.scale.multiplyScalar(0.95);
        }
    }

    updateDayNightCycle(deltaTime) {
        this.dayNightCycle += deltaTime * 0.05; // Slower cycle - now takes 120 seconds
        const cyclePosition = (Math.sin(this.dayNightCycle) + 1) / 2; // 0 to 1

        // Morning colors (warm)
        const morningColor = new THREE.Color(0xFFE4B5);
        // Noon colors (bright white)
        const noonColor = new THREE.Color(0xFFFFFF);
        // Evening colors (warm orange)
        const eveningColor = new THREE.Color(0xFFA07A);
        // Night colors (cool blue)
        const nightColor = new THREE.Color(0x4A6F8A);

        let currentColor;
        if (cyclePosition < 0.25) { // Dawn to morning
            currentColor = morningColor.lerp(noonColor, cyclePosition * 4);
        } else if (cyclePosition < 0.5) { // Morning to noon
            currentColor = noonColor;
        } else if (cyclePosition < 0.75) { // Noon to evening
            currentColor = noonColor.lerp(eveningColor, (cyclePosition - 0.5) * 4);
        } else { // Evening to night
            currentColor = eveningColor.lerp(nightColor, (cyclePosition - 0.75) * 4);
        }

        // Update lights with new colors
        this.ambientLight.color = currentColor;
        this.ambientLight.intensity = 0.2 + cyclePosition * 0.4;

        this.directionalLight.color = currentColor;
        this.directionalLight.intensity = 0.4 + cyclePosition * 0.6;

        this.hemisphereLight.color = currentColor;
        this.hemisphereLight.groundColor = nightColor;
        this.hemisphereLight.intensity = 0.2 + cyclePosition * 0.4;

        // Update fog
        this.scene.fog.color = currentColor;
        this.scene.fog.density = 0.01 + (1 - cyclePosition) * 0.02;

        // Update giant coffee cup steam based on time of day
        this.scene.traverse((object) => {
            if (object.material && object.material.opacity < 0.5) { // Likely steam particle
                object.material.opacity = 0.1 + cyclePosition * 0.3;
            }
        });
    }

    onSnakeTurn(position) {
        this.createParticleEffect(position, 0x3EE0B1, 8, {
            scale: 0.15,
            lifetime: 0.6,
            velocityScale: 1,
            verticalForce: 0.5
        });
        this.audioManager.play('turn');
    }

    onGameOver(position) {
        // Create a dramatic explosion effect
        this.createParticleEffect(position, 0xE179DA, 40, {
            scale: 0.2,
            lifetime: 2.0,
            velocityScale: 4,
            verticalForce: 3,
            emissive: true
        });
        this.audioManager.play('gameOver');
    }

    onSpeedBoost(position) {
        this.createParticleEffect(position, 0xFAA70D, 20, {
            scale: 0.15,
            lifetime: 0.8,
            velocityScale: 3,
            verticalForce: 1,
            emissive: true
        });
        this.audioManager.play('powerUp');
    }

    addAmbientParticles() {
        // Add floating dust particles in the coffee shop
        for (let i = 0; i < 100; i++) {
            const particle = new THREE.Mesh(
                new THREE.SphereGeometry(0.05, 4, 4),
                new THREE.MeshPhongMaterial({
                    color: 0xFFFFFF,
                    transparent: true,
                    opacity: 0.2
                })
            );

            // Position randomly in the coffee shop area
            particle.position.set(
                (Math.random() - 0.5) * 160,
                1 + Math.random() * 6,
                (Math.random() - 0.5) * 160
            );

            particle.userData.initialY = particle.position.y;
            particle.userData.floatSpeed = 0.2 + Math.random() * 0.3;
            particle.userData.floatOffset = Math.random() * Math.PI * 2;
            particle.userData.driftSpeed = {
                x: (Math.random() - 0.5) * 0.2,
                z: (Math.random() - 0.5) * 0.2
            };

            this.scene.add(particle);
        }
    }

    handleResize() {
        // Update canvas size
        const canvas = this.renderer.domElement;
        const container = canvas.parentElement;
        
        // Get container dimensions
        const width = container.clientWidth;
        const height = container.clientHeight;
        
        // Update camera aspect ratio
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        
        // Update renderer size
        this.renderer.setSize(width, height);
        
        // Update HUD
        if (this.hud) {
            this.hud.updateSize(width, height);
        }
    }

    start() {
        if (!this.isRunning) {
            console.log('Game: Starting game');
            this.isRunning = true;
            this.isGameOver = false;
            this.lastTime = performance.now();
            
            // Create snake at the center of the scene if it doesn't exist
            if (!this.snake) {
                const startPosition = new THREE.Vector3(0, 0.5, 0);
                this.snake = new Snake(this, startPosition);
                
                // Set snake as camera target
                if (this.cameraController) {
                    this.cameraController.setTarget(this.snake.head);
                }
            }
            
            // Start animation loop
            this.animate();
            
            console.log('Game: Started', {
                isRunning: this.isRunning,
                hasSnake: !!this.snake,
                hasGameManager: !!this.gameManager,
                cameraPosition: this.camera.position.clone(),
                rendererSize: {
                    width: this.renderer.domElement.width,
                    height: this.renderer.domElement.height
                }
            });
        }
    }

    animate() {
        if (!this.isRunning) return;

        const currentTime = performance.now();
        const deltaTime = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;
        this.frameCount++;

        // Update game systems
        if (this.gameManager) {
            this.gameManager.update(deltaTime);
        }

        // Update snake
        if (this.snake) {
            this.snake.update(deltaTime);
            
            // Check for collisions with obstacles
            if (this.obstacleSystem && this.obstacleSystem.checkCollisions(this.snake.head)) {
                this.handleGameOver();
            }
        }

        // Update power-up system
        if (this.powerUpSystem) {
            this.powerUpSystem.update(deltaTime);
        }

        // Update obstacle system
        if (this.obstacleSystem) {
            this.obstacleSystem.update(deltaTime);
            this.obstacleSystem.increaseDifficulty(deltaTime);
        }

        // Update camera controller
        if (this.cameraController) {
            this.cameraController.update(deltaTime);
        }

        // Update weather system
        if (this.weatherSystem) {
            this.weatherSystem.update(deltaTime);
        }

        // Update particles and effects
        this.updateParticles(deltaTime);
        this.updateSnakeTrail(deltaTime);
        this.updateDayNightCycle(deltaTime);

        // Render the scene
        if (this.renderer && this.scene && this.camera) {
            this.renderer.render(this.scene, this.camera);
        }

        // Continue animation loop
        requestAnimationFrame(() => this.animate());
    }

    updateLoadingProgress(percent, message) {
        // Store the callback function in a different property name to avoid confusion
        if (typeof this._loadingProgressCallback === 'function') {
            this._loadingProgressCallback(percent, message);
        }
        
        const loadingBar = document.getElementById('loading-bar');
        const loadingText = document.getElementById('loading-text');
        
        if (loadingBar) {
            loadingBar.style.width = `${percent}%`;
            console.log('Game: Updated loading bar width:', loadingBar.style.width);
        } else {
            console.warn('Game: Loading bar element not found');
        }
        
        if (loadingText && message) {
            loadingText.textContent = message;
            console.log('Game: Updated loading text:', message);
        } else if (!loadingText) {
            console.warn('Game: Loading text element not found');
        }
    }

    updateScore(score) {
        if (this.scoreboard) {
            this.scoreboard.updateScore(score);
        }
    }
} 