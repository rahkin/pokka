import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { PhysicsEngine, COLLISION_GROUP } from './PhysicsEngine.ts';
import { PlayerController } from './PlayerController.ts';
import { AIController } from './AIController.ts';
import { GameLogic, GameState } from './GameLogic.ts';
import { CombatSystem, Projectile } from './CombatSystem.ts';
import { ArenaSystem, ArenaLayout } from './ArenaSystem.ts';
import { PowerUpSystem, PowerUp } from './PowerUpSystem.ts';
import { ParticleSystem } from './ParticleSystem.ts';
import pxURL from './assets/skybox/px.png';
import nxURL from './assets/skybox/nx.png';
import pyURL from './assets/skybox/py.png';
import nyURL from './assets/skybox/ny.png';
import pzURL from './assets/skybox/pz.png';
import nzURL from './assets/skybox/nz.png';

const ARENA_RADIUS = 10;
const ORB_RADIUS = 0.3;
const NUM_ORBS = 5;
const ARENA_LAYOUTS: ArenaLayout[] = ['BASIC', 'PILLARS', 'MAZE', 'ASYMMETRIC'];

interface HealthBar {
    background: THREE.Sprite;
    foreground: THREE.Sprite;
    update: (health: number, maxHealth: number) => void;
}

function createHealthBar(scene: THREE.Scene): HealthBar {
    // Create background sprite (red)
    const backgroundMaterial = new THREE.SpriteMaterial({ 
        color: 0xff0000,
        sizeAttenuation: false
    });
    const background = new THREE.Sprite(backgroundMaterial);
    background.scale.set(0.1, 0.02, 1);
    background.position.y = 1.5; // Position above player
    scene.add(background);

    // Create foreground sprite (green)
    const foregroundMaterial = new THREE.SpriteMaterial({ 
        color: 0x00ff00,
        sizeAttenuation: false
    });
    const foreground = new THREE.Sprite(foregroundMaterial);
    foreground.scale.set(0.1, 0.02, 1);
    foreground.position.y = 1.5;
    scene.add(foreground);

    const update = (health: number, maxHealth: number) => {
        const healthPercent = Math.max(0, Math.min(1, health / maxHealth));
        foreground.scale.x = 0.1 * healthPercent;
        // Center the foreground bar
        foreground.position.x = background.position.x - (0.1 * (1 - healthPercent)) / 2;
    };

    return { background, foreground, update };
}

export interface Orb { mesh: THREE.Mesh; body: CANNON.Body; id: string; }
export interface PlayerLike { 
    id: string; 
    mesh: THREE.Object3D; 
    body: CANNON.Body; 
    isAI?: boolean;
    health: number;
    maxHealth: number;
    lastShotTime: number;
    // Ability system
    lastAbilityUse: number;
    isShielded?: boolean;
    shieldEndTime?: number;
    shieldMesh?: THREE.Mesh;
    isRapidFire?: boolean;
    rapidFireEndTime?: number;
    // Power-up system
    hasTripleShot?: boolean;
    tripleShotEndTime?: number;
    hasSpeedBoost?: boolean;
    speedBoostEndTime?: number;
    healthBar?: HealthBar;
}

const PokkasBashArena = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const gameInstances = useRef<any>({
    orbs: [],
    wallMeshes: [],
    physicsEngine: null,
    playerController: null,
    playerBody: null,
    playerMesh: null,
    aiController: null,
    aiBody: null,
    aiMesh: null,
    humanPlayerRef: null,
    camera: null,
    gameLogic: null,
    combatSystem: null,
    arenaSystem: null,
    powerUpSystem: null,
    particleSystem: null,
  });
  const [uiScore, setUiScore] = useState(0);
  const [uiGameState, setUiGameState] = useState<GameState>('waiting');
  const [uiCountdown, setUiCountdown] = useState(0);
  const [uiFinalScore, setUiFinalScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [currentArenaLayout, setCurrentArenaLayout] = useState<ArenaLayout>('BASIC');
  const [showHowToPlay, setShowHowToPlay] = useState(false);

  console.log(`[GameCanvas Render] Current uiGameState: ${uiGameState}`);

  const spawnOrb = (scene: THREE.Scene, physicsEngine: PhysicsEngine, gameLogic: GameLogic) => {
    console.log(`[spawnOrb GL=${gameLogic.instanceId}] Called.`);
    const orbId = `orb-${Math.random().toString(36).substring(2, 15)}`;
    const orbGeometry = new THREE.SphereGeometry(ORB_RADIUS, 16, 16);
    const orbMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000, roughness: 0.5, metalness: 0.2 });
    const orbMesh = new THREE.Mesh(orbGeometry, orbMaterial);
    orbMesh.castShadow = true;
    orbMesh.name = orbId;

    const orbShape = new CANNON.Sphere(ORB_RADIUS);
    let positionValid = false;
    let orbPosition = new THREE.Vector3();
    while(!positionValid){
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * (ARENA_RADIUS - ORB_RADIUS * 2); 
        orbPosition.set(Math.cos(angle) * radius, ORB_RADIUS + 0.1, Math.sin(angle) * radius);
        positionValid = true; 
    }
    console.log(`[spawnOrb GL=${gameLogic.instanceId}] Attempting to spawn orb ${orbId} (mesh ID: ${orbMesh.id}, UUID: ${orbMesh.uuid}) at ${orbPosition.x.toFixed(2)}, ${orbPosition.y.toFixed(2)}, ${orbPosition.z.toFixed(2)}`);
    orbMesh.position.copy(orbPosition);
    const orbBody = physicsEngine.addOrbBody(orbShape, 0.1, orbPosition);
    (orbBody as any).userData = { id: orbId, type: 'orb' };
    
    console.log(`[spawnOrb GL=${gameLogic.instanceId}] Adding orb mesh ${orbId} to scene. Scene children before: ${scene.children.length}`);
    scene.add(orbMesh);
    console.log(`[spawnOrb GL=${gameLogic.instanceId}] Added orb mesh ${orbId} to scene. Scene children after: ${scene.children.length}. Mesh visible: ${orbMesh.visible}`);
    
    const newOrb = { mesh: orbMesh, body: orbBody, id: orbId };
    console.log(`[spawnOrb GL=${gameLogic.instanceId}] Adding orb ${orbId} to GameLogic. Orbs before: ${gameLogic.orbs.length}`);
    gameLogic.addOrb(newOrb);
    console.log(`[spawnOrb GL=${gameLogic.instanceId}] Added orb ${orbId} to GameLogic. Orbs after: ${gameLogic.orbs.length}`);
    return newOrb;
  };

  useEffect(() => {
    console.log("[GameCanvas] useEffect hook started.");
    if (!mountRef.current) {
      console.error("[GameCanvas] mountRef is null on entry!");
      return;
    }
    const currentMount = mountRef.current;
    console.log("[GameCanvas] mountRef found, proceeding with setup.");
    gameInstances.current.orbs = [];
    gameInstances.current.wallMeshes = [];

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a1a);

    // Skybox/Environment Map Setup
    const loader = new THREE.CubeTextureLoader();
    const texture = loader.load([
        pxURL, // Right
        nxURL, // Left
        pyURL, // Top
        nyURL, // Bottom
        pzURL, // Front
        nzURL  // Back
    ]);
    scene.background = texture;
    scene.environment = texture; // For reflections on MeshStandardMaterial

    // Add Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Soft white light, half intensity
    scene.add(ambientLight);

    // Add Directional Light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8); // White light, strong intensity
    directionalLight.position.set(10, 20, 10); // Position it to cast from an angle
    directionalLight.castShadow = true;
    // Configure shadow properties for the directional light (optional, but good for quality)
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -ARENA_RADIUS * 1.5;
    directionalLight.shadow.camera.right = ARENA_RADIUS * 1.5;
    directionalLight.shadow.camera.top = ARENA_RADIUS * 1.5;
    directionalLight.shadow.camera.bottom = -ARENA_RADIUS * 1.5;
    scene.add(directionalLight);

    const camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    gameInstances.current.camera = camera;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    // Post-processing - Bloom
    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const bloomPass = new UnrealBloomPass(
        new THREE.Vector2(currentMount.clientWidth, currentMount.clientHeight),
        1.2, // strength
        0.5, // radius
        0.8  // threshold - pixels brighter than this threshold will contribute to bloom
    );
    composer.addPass(bloomPass);

    console.log("[GameCanvas] Initializing PhysicsEngine...");
    const physicsEngine = new PhysicsEngine();
    gameInstances.current.physicsEngine = physicsEngine;
    console.log("[GameCanvas] PhysicsEngine initialized.");

    const combatSystem = new CombatSystem(scene, physicsEngine);
    gameInstances.current.combatSystem = combatSystem;

    // Initialize Arena System
    const arenaSystem = new ArenaSystem(scene, physicsEngine, ARENA_RADIUS);
    arenaSystem.setLayout(currentArenaLayout);
    gameInstances.current.arenaSystem = arenaSystem;

    // Initialize Power-Up System
    const powerUpSystem = new PowerUpSystem(scene, physicsEngine, ARENA_RADIUS);
    gameInstances.current.powerUpSystem = powerUpSystem;

    // Initialize Particle System
    const particleSystem = new ParticleSystem(scene);
    gameInstances.current.particleSystem = particleSystem;

    console.log("[GameCanvas] Initializing GameLogic...");
    const gameLogic = new GameLogic(
        scene, 
        physicsEngine,
        (newState) => setUiGameState(newState),
        (newScore) => {
            console.log(`[GameCanvas] onScoreUpdate received: ${newScore}`);
            setUiScore(newScore);
        },
        (countdown) => {
            console.log(`[GameCanvas] onCountdownUpdate received: ${countdown}. Setting uiCountdown.`);
            setUiCountdown(countdown);
        },
        (finalScore) => {
            setUiFinalScore(finalScore);
            setUiGameState('gameOver');
        },
        combatSystem
    );
    gameInstances.current.gameLogic = gameLogic;
    console.log(`[GameCanvas] GameLogic initialized. Initial state: ${gameLogic.getGameState()}, GameLogic ID: ${gameLogic.instanceId}`);

    const groundGeometry = new THREE.CylinderGeometry(ARENA_RADIUS, ARENA_RADIUS, 0.5, 64);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.position.y = -0.25;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    const playerCraftRadius = 0.5;
    const playerCraftHeight = 0.2;
    const cockpitRadius = 0.25;

    const playerGroup = new THREE.Group(); 
    const baseGeometry = new THREE.CylinderGeometry(playerCraftRadius, playerCraftRadius * 0.8, playerCraftHeight, 16);
    const baseMaterial = new THREE.MeshStandardMaterial({ color: 0x0077cc, metalness: 0.3, roughness: 0.4 });
    const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    playerGroup.add(baseMesh);

    const cockpitGeometry = new THREE.SphereGeometry(cockpitRadius, 16, 8, 0, Math.PI * 2, 0, Math.PI /2 ); 
    const cockpitMaterial = new THREE.MeshStandardMaterial({ color: 0xaaddff, emissive:0x225588, transparent: true, opacity: 0.7 });
    const cockpitMesh = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
    cockpitMesh.position.y = playerCraftHeight /2;
    cockpitMesh.castShadow = true;
    playerGroup.add(cockpitMesh);
    scene.add(playerGroup);
    gameInstances.current.playerMesh = playerGroup;

    const playerPhysicsShape = new CANNON.Cylinder(playerCraftRadius, playerCraftRadius, playerCraftHeight, 16);
    const playerBody = physicsEngine.addPlayerBody(playerPhysicsShape, 1, new THREE.Vector3(0, (playerCraftHeight) / 2, 0), false);
    playerBody.angularDamping = 0.95; playerBody.fixedRotation = true; playerBody.allowSleep = false;
    console.log("[GameCanvas] playerBody created:", playerBody);
    gameInstances.current.playerBody = playerBody;
    const humanPlayerRefObj: PlayerLike = { 
        id: 'human_player', 
        mesh: playerGroup, 
        body: playerBody, 
        isAI: false, 
        health: 100, 
        maxHealth: 100, 
        lastShotTime: 0, 
        lastAbilityUse: 0,
        healthBar: createHealthBar(scene)
    };
    gameInstances.current.humanPlayerRef = humanPlayerRefObj;
    gameLogic.addPlayer(humanPlayerRefObj);
    
    console.log("[GameCanvas] Attaching collision listener to playerBody...");
    try {
        playerBody.addEventListener('collide', (event: any) => {
            const gl = gameInstances.current.gameLogic as GameLogic | null;
            console.log(`[GameCanvas Player Collision] State: ${gl?.getGameState()}`);
            if (!gl) {
                console.log("[GameCanvas Player Collision] No GameLogic instance found");
                return;
            }
            if (gl.getGameState() !== 'active') {
                console.log("[GameCanvas Player Collision] Game not active, ignoring collision");
                return;
            }
            const collidedWith = event.body as CANNON.Body;
            const collidedUserData = (collidedWith as any).userData;
            if (collidedUserData && collidedUserData.type === 'orb') {
                const orbId = collidedUserData.id;
                const removedOrb = gl.removeOrb(orbId); 
                if (removedOrb) {
                    scene.remove(removedOrb.mesh);
                    // Emit particles on orb collection
                    gameInstances.current.particleSystem?.emit(
                        removedOrb.mesh.position.clone(),
                        new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
                        new THREE.Color(0xffff00), // Yellow particles
                        0.2, // size
                        0.5, // life in seconds
                        10   // count
                    );
                    removedOrb.mesh.geometry.dispose();
                    (removedOrb.mesh.material as THREE.Material).dispose();
                    gameInstances.current.physicsEngine?.removeBody(removedOrb.body); 
                    gl.incrementScore(1); 
                    spawnOrb(scene, gameInstances.current.physicsEngine!, gl); 
                }
            }
        });
        console.log("[GameCanvas] Attached collision listener to playerBody.");
    } catch (error) {
        console.error("[GameCanvas] ERROR attaching player collision listener:", error);
    }

    // Set up collision handling for all players
    const setupCollisionHandler = (player: PlayerLike) => {
        player.body.addEventListener('collide', (event: any) => {
            try {
                const gl = gameInstances.current.gameLogic as GameLogic | null;
                if (!gl || gl.getGameState() !== 'active') return;

                const collidedWith = event.body as CANNON.Body;
                if (!collidedWith || !collidedWith.world) return; // Skip if body is not in world

                const collidedUserData = (collidedWith as any).userData;
                if (!collidedUserData) return;

                console.log(`[Collision] Player ${player.id} collided with ${collidedUserData.type}`, {
                    playerIsAI: player.isAI,
                    collidedWithId: collidedUserData.id,
                    playerHealth: player.health,
                    collisionGroup: collidedWith.collisionFilterGroup
                });

                if (collidedUserData.type === 'orb') {
                    // Handle orb collection
                    const orbId = collidedUserData.id;
                    const removedOrb = gl.removeOrb(orbId);
                    if (removedOrb) {
                        scene.remove(removedOrb.mesh);
                        // Emit particles on orb collection
                        gameInstances.current.particleSystem?.emit(
                            removedOrb.mesh.position.clone(),
                            new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
                            new THREE.Color(0xffff00), // Yellow particles
                            0.2, // size
                            0.5, // life in seconds
                            10   // count
                        );
                        removedOrb.mesh.geometry.dispose();
                        (removedOrb.mesh.material as THREE.Material).dispose();
                        if (gameInstances.current.physicsEngine?.world.bodies.includes(removedOrb.body)) {
                            gameInstances.current.physicsEngine?.removeBody(removedOrb.body);
                        }
                        gl.incrementScore(1, player.isAI);
                        // Emit particles on orb collection by AI/Player
                        gameInstances.current.particleSystem?.emit(
                            removedOrb.mesh.position.clone(),
                            new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
                            new THREE.Color(player.isAI ? 0xffaa00 : 0x00ff00), // Orange for AI, Green for Player
                            0.2, // size
                            0.5, // life
                            10   // count
                        );
                        spawnOrb(scene, gameInstances.current.physicsEngine!, gl);
                    }
                } else if (collidedUserData.type === 'projectile') {
                    // Handle projectile hits
                    const projectile = gameInstances.current.combatSystem?.projectiles.find(
                        (p: Projectile) => p.id === collidedUserData.id
                    );
                    
                    if (projectile && projectile.owner !== player.id) {
                        console.log(`[Projectile Hit] Player ${player.id} hit by projectile from ${projectile.owner}`, {
                            damage: projectile.damage,
                            currentHealth: player.health,
                            projectileId: projectile.id,
                            projectileOwner: projectile.owner
                        });
                        gameInstances.current.combatSystem?.handleProjectileCollision(projectile, player);
                    }
                } else if (collidedUserData.type === 'power_up') {
                    const powerUp = gameInstances.current.powerUpSystem.powerUps.find(
                        (p: PowerUp) => p.id === collidedUserData.id
                    );
                    if (powerUp) {
                        gameInstances.current.powerUpSystem.handlePowerUpCollision(powerUp, player);
                    }
                }
            } catch (error) {
                console.error("[GameCanvas] Error in collision handler:", error);
            }
        });
    };

    // Set up player collision handling
    setupCollisionHandler(humanPlayerRefObj);

    // Create AI players with proper collision groups
    const createPlayerMesh = (type: 'orange' | 'green' | 'purple'): THREE.Group => {
        const playerCraftRadius = 0.5;
        const playerCraftHeight = 0.2;
        const cockpitRadius = 0.25;

        const group = new THREE.Group();
        const baseGeometry = new THREE.CylinderGeometry(playerCraftRadius, playerCraftRadius * 0.8, playerCraftHeight, 16);
        
        let color: number;
        let emissiveColor: number;
        switch (type) {
            case 'orange':
                color = 0xff6600;
                emissiveColor = 0x884422;
                break;
            case 'green':
                color = 0x00ff66;
                emissiveColor = 0x228844;
                break;
            case 'purple':
                color = 0xff00ff;
                emissiveColor = 0x880088;
                break;
        }

        const baseMaterial = new THREE.MeshStandardMaterial({ 
            color: color, 
            metalness: 0.3, 
            roughness: 0.4 
        });
        const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
        baseMesh.castShadow = true;
        baseMesh.receiveShadow = true;
        group.add(baseMesh);

        const cockpitGeometry = new THREE.SphereGeometry(cockpitRadius, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2);
        const cockpitMaterial = new THREE.MeshStandardMaterial({
            color: color,
            emissive: emissiveColor,
            transparent: true,
            opacity: 0.7
        });
        const cockpitMesh = new THREE.Mesh(cockpitGeometry, cockpitMaterial);
        cockpitMesh.position.y = playerCraftHeight / 2;
        cockpitMesh.castShadow = true;
        group.add(cockpitMesh);

        return group;
    };

    const aiTypes: ('orange' | 'green' | 'purple')[] = ['orange', 'green', 'purple'];
    const aiPlayers: AIController[] = [];

    aiTypes.forEach((aiType, index) => {
        const aiMesh = createPlayerMesh(aiType);
        scene.add(aiMesh);

        const aiBody = new CANNON.Body({
            mass: 1,
            shape: new CANNON.Sphere(0.5),
            position: new CANNON.Vec3(
                Math.cos(index * Math.PI * 2 / 3) * 5,
                0.5,
                Math.sin(index * Math.PI * 2 / 3) * 5
            ),
            collisionFilterGroup: COLLISION_GROUP.AI,
            collisionFilterMask: COLLISION_GROUP.PLAYER | COLLISION_GROUP.AI | COLLISION_GROUP.WALL | COLLISION_GROUP.PROJECTILE | COLLISION_GROUP.ORB
        });

        // Configure AI body
        aiBody.angularDamping = 0.9;
        aiBody.linearDamping = 0.1;
        aiBody.fixedRotation = true;
        aiBody.allowSleep = false;
        (aiBody as any).userData = { id: `ai-${index}`, type: 'ai_player' };

        physicsEngine.world.addBody(aiBody);

        const aiController = new AIController(
            `ai-${index}`,
            aiBody,
            aiMesh,
            ARENA_RADIUS,
            combatSystem,
            aiType
        );

        // Create health bar for AI
        aiController.aiPlayer.healthBar = createHealthBar(scene);

        // Set up collision handling for AI
        setupCollisionHandler(aiController.aiPlayer);

        aiPlayers.push(aiController);
        gameLogic.addAIPlayer(aiController);
    });

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const playerController = new PlayerController(humanPlayerRefObj, renderer.domElement, isMobile, combatSystem);
    gameInstances.current.playerController = playerController;

    console.log("[GameCanvas] Attaching collision listener to aiBody...");
    try {
        // Update collision handling for all AIs
        gameLogic.aiPlayers.forEach(aiController => {
            aiController.aiBody.addEventListener('collide', (event: any) => {
                const gl = gameInstances.current.gameLogic as GameLogic | null;
                const physicsEngineInstance = gameInstances.current.physicsEngine as PhysicsEngine | null;
                
                if (!gl || !physicsEngineInstance) {
                    console.log("[GameCanvas AI Collision] No GameLogic or PhysicsEngine instance found");
                    return;
                }
                
                const collidedWith = event.body as CANNON.Body;
                const collidedUserData = (collidedWith as any).userData;
                if (collidedUserData && collidedUserData.type === 'orb') {
                    const orbId = collidedUserData.id;
                    const removedOrb = gl.removeOrb(orbId); 
                    if (removedOrb) {
                        scene.remove(removedOrb.mesh);
                        // Emit particles on orb collection
                        gameInstances.current.particleSystem?.emit(
                            removedOrb.mesh.position.clone(),
                            new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
                            new THREE.Color(0xffaa00), // Orange particles for AI
                            0.2, // size
                            0.5, // life
                            10   // count
                        );
                        removedOrb.mesh.geometry.dispose();
                        (removedOrb.mesh.material as THREE.Material).dispose();
                        physicsEngineInstance.removeBody(removedOrb.body);
                        gl.incrementScore(1, true);
                         // Emit particles on orb collection by AI
                        gameInstances.current.particleSystem?.emit(
                            removedOrb.mesh.position.clone(),
                            new THREE.Vector3((Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
                            new THREE.Color(0xffaa00), // Orange particles for AI
                            0.2, // size
                            0.5, // life
                            10   // count
                        );
                        spawnOrb(scene, physicsEngineInstance, gl);
                    }
                }
            });
        });
        console.log("[GameCanvas] Attached collision listeners to all AI bodies.");
    } catch (error) {
        console.error("[GameCanvas] ERROR attaching AI collision listeners:", error);
    }

    for (let i = 0; i < NUM_ORBS; i++) {
      spawnOrb(scene, physicsEngine, gameLogic);
    }
    
    camera.position.set(0, ARENA_RADIUS * 1.2, ARENA_RADIUS * 1.5); 
    camera.lookAt(scene.position); 

    const clock = new THREE.Clock();
    let animationFrameId: number;
    let logTimer = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const deltaTime = clock.getDelta();
      logTimer += deltaTime;

      if (gameInstances.current.camera && gameInstances.current.playerController) {
        gameInstances.current.playerController.updateCameraDirection(gameInstances.current.camera);
      }
      gameInstances.current.playerController?.update(deltaTime);
      
      const currentLogic = gameInstances.current.gameLogic as GameLogic | null;
      if (currentLogic) {
        // Include both human player and other AIs as potential targets
        const allPlayers: PlayerLike[] = [
          gameInstances.current.humanPlayerRef,
          ...currentLogic.aiPlayers.map(ai => ai.aiPlayer)
        ].filter(p => p && p.health > 0 && p.mesh.visible) as PlayerLike[];

        // Update all AI controllers with complete list of potential targets
        currentLogic.aiPlayers.forEach(aiController => {
          // Filter out self from targets
          const validTargets = allPlayers.filter(p => p.id !== aiController.id);
          aiController.update(deltaTime, currentLogic.orbs, validTargets);
        });
        currentLogic.update(deltaTime);
        
        if (currentLogic.gameState === 'active') {
          const remaining = Math.max(0, 60 - currentLogic.gameTime);
          setTimeRemaining(Math.ceil(remaining));
        }
        
        if (logTimer > 2) {
          console.log(`[Animate] GameLogic (${currentLogic.instanceId}) orbs count: ${currentLogic.orbs.length}, Active AIs: ${currentLogic.aiPlayers.length}, Valid Targets: ${allPlayers.length}`);
          logTimer = 0;
        }
      }
      
      gameInstances.current.physicsEngine?.update(deltaTime);
      gameInstances.current.combatSystem?.update(deltaTime);
      gameInstances.current.powerUpSystem?.update(deltaTime);
      gameInstances.current.particleSystem?.update(deltaTime);

      if (gameInstances.current.playerMesh && gameInstances.current.playerBody) {
        gameInstances.current.playerMesh.position.copy(gameInstances.current.playerBody.position as unknown as THREE.Vector3);
      }

      // Update all AI positions
      currentLogic?.aiPlayers.forEach(aiController => {
        aiController.aiMesh.position.copy(aiController.aiBody.position as unknown as THREE.Vector3);
      });

      // Update orb positions
      currentLogic?.orbs.forEach((orb: Orb) => {
        orb.mesh.position.copy(orb.body.position as unknown as THREE.Vector3);
        orb.mesh.quaternion.copy(orb.body.quaternion as unknown as THREE.Quaternion);
      });

      if (gameInstances.current.playerMesh && gameInstances.current.camera) {
        const targetCameraPosition = new THREE.Vector3();
        targetCameraPosition.set(gameInstances.current.playerMesh.position.x, gameInstances.current.playerMesh.position.y + ARENA_RADIUS * 0.8, gameInstances.current.playerMesh.position.z + ARENA_RADIUS * 0.7);
        gameInstances.current.camera.position.lerp(targetCameraPosition, 0.05);
        gameInstances.current.camera.lookAt(gameInstances.current.playerMesh.position);
      }

      // Update health bar positions
      if (gameInstances.current.humanPlayerRef?.healthBar) {
        const pos = gameInstances.current.humanPlayerRef.mesh.position;
        gameInstances.current.humanPlayerRef.healthBar.background.position.set(pos.x, pos.y + 1.5, pos.z);
        gameInstances.current.humanPlayerRef.healthBar.foreground.position.set(pos.x, pos.y + 1.5, pos.z);
      }

      // Update AI health bars
      gameInstances.current.gameLogic?.aiPlayers.forEach((ai: AIController) => {
        if (ai.aiPlayer.healthBar) {
          const pos = ai.aiPlayer.mesh.position;
          ai.aiPlayer.healthBar.background.position.set(pos.x, pos.y + 1.5, pos.z);
          ai.aiPlayer.healthBar.foreground.position.set(pos.x, pos.y + 1.5, pos.z);
          ai.aiPlayer.healthBar.update(ai.aiPlayer.health, ai.aiPlayer.maxHealth);
        }
      });

      // Update player health bar
      if (gameInstances.current.humanPlayerRef?.healthBar) {
        gameInstances.current.humanPlayerRef.healthBar.update(
          gameInstances.current.humanPlayerRef.health,
          gameInstances.current.humanPlayerRef.maxHealth
        );
      }

      // Update power-up effects
      const currentTime = performance.now() / 1000;
      if (gameInstances.current.humanPlayerRef) {
        const player = gameInstances.current.humanPlayerRef;
        if (player.rapidFireEndTime && currentTime > player.rapidFireEndTime) {
          player.isRapidFire = false;
        }
        if (player.tripleShotEndTime && currentTime > player.tripleShotEndTime) {
          player.hasTripleShot = false;
        }
        if (player.speedBoostEndTime && currentTime > player.speedBoostEndTime) {
          player.hasSpeedBoost = false;
        }
        if (player.shieldEndTime && currentTime > player.shieldEndTime) {
          player.isShielded = false;
          if (player.shieldMesh) {
            scene.remove(player.shieldMesh);
            player.shieldMesh = undefined;
          }
        }
      }

      composer.render(); // Use composer to render with effects
    };
    animate();

    const handleResize = () => {
      if (!currentMount || !gameInstances.current.camera) return;
      gameInstances.current.camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      gameInstances.current.camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      composer.setSize(currentMount.clientWidth, currentMount.clientHeight); // Resize composer as well
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      
      const gl = gameInstances.current.gameLogic as GameLogic | null;
      console.log(`[useEffect Cleanup] Running. GameLogic ID: ${gl?.instanceId}. Scene children BEFORE orb cleanup: ${scene.children.length}`);

      gameInstances.current.playerController?.dispose();
      
      // Dispose all AI controllers and their resources
      if (gl) {
        gl.aiPlayers.forEach(aiController => {
          aiController.dispose();
          scene.remove(aiController.aiMesh);
          (aiController.aiMesh as THREE.Group).traverse(child => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
              const material = child.material as THREE.Material | THREE.Material[];
              if (Array.isArray(material)) {
                material.forEach(m => m.dispose());
              } else {
                material.dispose();
              }
            }
          });
        });

        // Clean up orbs
        gl.orbs.forEach((orb: Orb) => {
          console.log(`[useEffect Cleanup GL=${gl?.instanceId}] Removing orb: ${orb.id}, mesh ID: ${orb.mesh.id}, UUID: ${orb.mesh.uuid}`);
          scene.remove(orb.mesh);
          orb.mesh.geometry.dispose();
          (orb.mesh.material as THREE.Material).dispose();
          gameInstances.current.physicsEngine?.removeBody(orb.body);
        });
        gl.orbs = [];
      }

      gameInstances.current.physicsEngine?.dispose();
      
      console.log(`[useEffect Cleanup] Scene children AFTER orb cleanup: ${scene.children.length}`);

      gameInstances.current.wallMeshes.forEach((mesh: THREE.Mesh) => {
        scene.remove(mesh);
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      gameInstances.current.wallMeshes = [];

      if (gameInstances.current.playerMesh) {
          scene.remove(gameInstances.current.playerMesh as THREE.Group);
          (gameInstances.current.playerMesh as THREE.Group).traverse(child => {
              if (child instanceof THREE.Mesh) {
                  child.geometry.dispose();
                  const material = child.material as THREE.Material | THREE.Material[];
                  if (Array.isArray(material)) {
                    material.forEach(m => m.dispose());
                  } else {
                    material.dispose();
                  }
              }
          });
      }
      if (gameInstances.current.aiMesh) {
        scene.remove(gameInstances.current.aiMesh as THREE.Group);
        (gameInstances.current.aiMesh as THREE.Group).traverse(child => {
            if (child instanceof THREE.Mesh) {
                child.geometry.dispose();
                const material = child.material as THREE.Material | THREE.Material[];
                if (Array.isArray(material)) {
                  material.forEach(m => m.dispose());
                } else {
                  material.dispose();
                }
            }
        });
      }
      
      scene.remove(ambientLight, directionalLight, groundMesh);
      groundGeometry.dispose();
      (groundMaterial as THREE.Material).dispose();
            
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      Object.keys(gameInstances.current).forEach(key => gameInstances.current[key] = null);
      gameInstances.current.combatSystem?.dispose();
      gameInstances.current.arenaSystem?.dispose();
      gameInstances.current.powerUpSystem?.dispose();
      gameInstances.current.particleSystem?.dispose();

      // Clean up health bars
      if (gameInstances.current.humanPlayerRef?.healthBar) {
        scene.remove(gameInstances.current.humanPlayerRef.healthBar.background);
        scene.remove(gameInstances.current.humanPlayerRef.healthBar.foreground);
        gameInstances.current.humanPlayerRef.healthBar.background.material.dispose();
        gameInstances.current.humanPlayerRef.healthBar.foreground.material.dispose();
      }

      gameInstances.current.gameLogic?.aiPlayers.forEach((ai: AIController) => {
        if (ai.aiPlayer.healthBar) {
          scene.remove(ai.aiPlayer.healthBar.background);
          scene.remove(ai.aiPlayer.healthBar.foreground);
          ai.aiPlayer.healthBar.background.material.dispose();
          ai.aiPlayer.healthBar.foreground.material.dispose();
        }
      });
    };
  }, []);

  const handleStartGame = () => {
    if (gameInstances.current.gameLogic) {
      // Randomly select an arena layout
      const randomLayout = ARENA_LAYOUTS[Math.floor(Math.random() * ARENA_LAYOUTS.length)];
      setCurrentArenaLayout(randomLayout);
      gameInstances.current.gameLogic.requestStartGame();
      // Reset power-up system
      gameInstances.current.powerUpSystem.reset();
      // Reset arena system
      gameInstances.current.arenaSystem.setLayout(randomLayout);
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />
      
      {/* Score display - only show during active game */}
      {uiGameState === 'active' && (
        <div style={styles.scoreStyle}>
          <div>Score: {uiScore} | Time: {timeRemaining}s</div>
          {/* Power-up status display */}
          {gameInstances.current.humanPlayerRef && (
            <div style={styles.powerUpStyle}>
              {gameInstances.current.humanPlayerRef.isRapidFire && (
                <div style={{...styles.powerUpItem, color: '#ff0000'}}>Rapid Fire</div>
              )}
              {gameInstances.current.humanPlayerRef.hasTripleShot && (
                <div style={{...styles.powerUpItem, color: '#ff00ff'}}>Triple Shot</div>
              )}
              {gameInstances.current.humanPlayerRef.hasSpeedBoost && (
                <div style={{...styles.powerUpItem, color: '#00ffff'}}>Speed Boost</div>
              )}
              {gameInstances.current.humanPlayerRef.isShielded && (
                <div style={{...styles.powerUpItem, color: '#ffff00'}}>Shield</div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Game state specific overlays */}
      {uiGameState === 'waiting' && (
        <div style={styles.overlayContainerStyle}>
          {/* How to Play Button and Modal */}
          <button onClick={() => setShowHowToPlay(true)} style={{...styles.buttonStyle, marginBottom: 20}}>How to Play</button>
          {showHowToPlay && (
            <div style={styles.howToPlayModal}>
              <div style={styles.howToPlayTitle}>How to Play</div>
              <ul style={styles.howToPlayList}>
                <li>Move with WASD or arrow keys.</li>
                <li>Click to shoot in the direction of your mouse pointer.</li>
                <li>Collect orbs for points and power-ups for special abilities.</li>
                <li>Use Shift to dash and Space to activate a shield.</li>
                <li>Defeat AI bots and survive as long as possible!</li>
              </ul>
              <div style={{marginBottom: '12px', fontWeight: 'bold'}}>Power-Ups:</div>
              <ul style={styles.howToPlayList}>
                <li><span style={{color:'#ff0000'}}>Rapid Fire</span>: Shoot much faster for a short time.</li>
                <li><span style={{color:'#ff00ff'}}>Triple Shot</span>: Shoot three projectiles at once for a short time.</li>
                <li><span style={{color:'#00ffff'}}>Speed Boost</span>: Move much faster for a short time.</li>
                <li><span style={{color:'#ffff00'}}>Shield</span>: Become invulnerable for a few seconds.</li>
                <li><span style={{color:'#00ff00'}}>Health</span>: Instantly restore some health.</li>
              </ul>
              <button onClick={() => setShowHowToPlay(false)} style={styles.buttonStyle}>Close</button>
            </div>
          )}
          <button onClick={handleStartGame} style={styles.buttonStyle}>Start Game</button>
        </div>
      )}
      
      {uiGameState === 'countdown' && (
        <div style={styles.overlayContainerStyle}>
          <div style={styles.overlayTextStyle}>Starting in: {uiCountdown}...</div>
        </div>
      )}
      
      {uiGameState === 'gameOver' && (
        <div style={styles.overlayContainerStyle}>
          <div style={styles.overlayTextStyle}>Game Over!</div>
          <div style={{...styles.overlayTextStyle, fontSize: '24px', margin: '10px 0'}}>Final Score: {uiFinalScore}</div>
          <button onClick={handleStartGame} style={styles.buttonStyle}>Play Again?</button>
        </div>
      )}
    </div>
  );
};

const styles = {
    overlayContainerStyle: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0,0,0,0.7)',
        padding: '30px',
        borderRadius: '10px',
        textAlign: 'center' as 'center',
        zIndex: 1000
    },
    overlayTextStyle: {
        color: 'white',
        fontSize: '36px',
        fontFamily: 'Arial, sans-serif',
        marginBottom: '20px'
    },
    buttonStyle: {
        padding: '15px 30px',
        fontSize: '24px',
        cursor: 'pointer',
        backgroundColor: '#0077cc',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        transition: 'background-color 0.2s',
        ':hover': {
            backgroundColor: '#0066b3'
        }
    },
    scoreStyle: {
        position: 'absolute' as 'absolute',
        top: '20px',
        left: '20px',
        color: 'white',
        fontSize: '24px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '10px 20px',
        borderRadius: '5px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column' as 'column',
        gap: '10px'
    },
    powerUpStyle: {
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap' as 'wrap'
    },
    powerUpItem: {
        fontSize: '18px',
        padding: '5px 10px',
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        display: 'flex',
        alignItems: 'center',
        gap: '5px'
    },
    howToPlayModal: {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(30,30,30,0.95)',
        color: 'white',
        padding: '30px',
        borderRadius: '10px',
        zIndex: 2000,
        minWidth: '320px',
        textAlign: 'left' as 'left',
        boxShadow: '0 4px 32px rgba(0,0,0,0.5)'
    },
    howToPlayTitle: {
        fontSize: '28px',
        fontWeight: 'bold' as 'bold',
        marginBottom: '16px',
        textAlign: 'center' as 'center'
    },
    howToPlayList: {
        fontSize: '18px',
        marginBottom: '20px',
        paddingLeft: '20px'
    }
};

export default PokkasBashArena;
