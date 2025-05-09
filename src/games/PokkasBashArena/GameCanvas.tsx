import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PhysicsEngine } from './PhysicsEngine.ts';
import { PlayerController } from './PlayerController.ts';
import { AIController } from './AIController.ts';
import { GameLogic, GameState } from './GameLogic.ts';
import { CombatSystem } from './CombatSystem.ts';

const ARENA_RADIUS = 10;
const ARENA_HEIGHT = 5;
const WALL_THICKNESS = 0.5; 
const WALL_SEGMENTS = 32;   

const ORB_RADIUS = 0.3;
const NUM_ORBS = 5;

export interface Orb { mesh: THREE.Mesh; body: CANNON.Body; id: string; }
export interface PlayerLike { 
    id: string; 
    mesh: THREE.Object3D; 
    body: CANNON.Body; 
    isAI?: boolean;
    health: number;
    maxHealth: number;
    lastShotTime: number;
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
  });
  const [uiScore, setUiScore] = useState(0);
  const [uiGameState, setUiGameState] = useState<GameState>('waiting');
  const [uiCountdown, setUiCountdown] = useState(0);
  const [uiFinalScore, setUiFinalScore] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(60);

  console.log(`[GameCanvas Render] Current uiGameState: ${uiGameState}`);

  const spawnOrb = (scene: THREE.Scene, physicsEngine: PhysicsEngine, gameLogic: GameLogic) => {
    console.log(`[spawnOrb GL=${gameLogic.instanceId}] Called.`);
    const orbId = `orb-${Math.random().toString(36).substring(2, 15)}`;
    const orbGeometry = new THREE.SphereGeometry(ORB_RADIUS, 16, 16);
    const orbMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
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

    const camera = new THREE.PerspectiveCamera(60, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    gameInstances.current.camera = camera;
    
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    console.log("[GameCanvas] Initializing PhysicsEngine...");
    const physicsEngine = new PhysicsEngine();
    gameInstances.current.physicsEngine = physicsEngine;
    console.log("[GameCanvas] PhysicsEngine initialized.");

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
        }
    );
    gameInstances.current.gameLogic = gameLogic;
    console.log(`[GameCanvas] GameLogic initialized. Initial state: ${gameLogic.getGameState()}, GameLogic ID: ${gameLogic.instanceId}`);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(15, 25, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -ARENA_RADIUS * 1.5;
    directionalLight.shadow.camera.right = ARENA_RADIUS * 1.5;
    directionalLight.shadow.camera.top = ARENA_RADIUS * 1.5;
    directionalLight.shadow.camera.bottom = -ARENA_RADIUS * 1.5;
    scene.add(directionalLight);
    
    const groundGeometry = new THREE.CylinderGeometry(ARENA_RADIUS, ARENA_RADIUS, 0.5, 64);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x333333, roughness: 0.8 });
    const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    groundMesh.position.y = -0.25;
    groundMesh.receiveShadow = true;
    scene.add(groundMesh);

    const wallVisualHeight = ARENA_HEIGHT;
    const wallVisualMaterial = new THREE.MeshStandardMaterial({ color: 0x555555, roughness: 0.7 });
    const segmentAngle = (Math.PI * 2) / WALL_SEGMENTS;
    for (let i = 0; i < WALL_SEGMENTS; i++) {
      const angle = i * segmentAngle;
      const segmentLength = 2 * ARENA_RADIUS * Math.sin(segmentAngle / 2);
      const wallSegmentGeometry = new THREE.BoxGeometry(WALL_THICKNESS, wallVisualHeight, segmentLength + 0.05); 
      const wallMesh = new THREE.Mesh(wallSegmentGeometry, wallVisualMaterial);
      wallMesh.position.set(
        ARENA_RADIUS * Math.cos(angle),
        wallVisualHeight / 2,
        ARENA_RADIUS * Math.sin(angle)
      );
      wallMesh.quaternion.setFromEuler(new THREE.Euler(0, -angle, 0));
      wallMesh.castShadow = true;
      wallMesh.receiveShadow = true;
      scene.add(wallMesh);
      gameInstances.current.wallMeshes.push(wallMesh);
    }

    const playerCraftRadius = 0.5;
    const playerCraftHeight = 0.2;
    const cockpitRadius = 0.25;
    const cockpitHeight = 0.3;

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

    const playerPhysicsShape = new CANNON.Cylinder(playerCraftRadius, playerCraftRadius, playerCraftHeight + cockpitHeight, 16);
    const playerBody = physicsEngine.addPlayerBody(playerPhysicsShape, 1, new THREE.Vector3(0, (playerCraftHeight + cockpitHeight) / 2, 0), false);
    playerBody.angularDamping = 0.95; playerBody.fixedRotation = true; playerBody.allowSleep = false;
    console.log("[GameCanvas] playerBody created:", playerBody);
    gameInstances.current.playerBody = playerBody;
    const humanPlayerRefObj: PlayerLike = { id: 'human_player', mesh: playerGroup, body: playerBody, isAI: false, health: 100, maxHealth: 100, lastShotTime: 0 };
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

    const combatSystem = new CombatSystem(scene, physicsEngine);
    gameInstances.current.combatSystem = combatSystem;

    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const playerController = new PlayerController(humanPlayerRefObj, renderer.domElement, isMobile, combatSystem);
    gameInstances.current.playerController = playerController;

    const aiCraftMaterial = new THREE.MeshStandardMaterial({ color: 0xff6600, metalness: 0.3, roughness: 0.4 });
    const aiBaseMesh = new THREE.Mesh(baseGeometry.clone(), aiCraftMaterial); aiBaseMesh.castShadow = true; aiBaseMesh.receiveShadow = true;
    const aiCockpitMaterial = new THREE.MeshStandardMaterial({ color: 0xffaa88, emissive:0x884422, transparent: true, opacity: 0.7 });
    const aiCockpitMesh = new THREE.Mesh(cockpitGeometry.clone(), aiCockpitMaterial); aiCockpitMesh.position.y = playerCraftHeight / 2; aiCockpitMesh.castShadow = true;
    const aiGroup = new THREE.Group(); aiGroup.add(aiBaseMesh); aiGroup.add(aiCockpitMesh);
    aiGroup.position.set(3, (playerCraftHeight + cockpitHeight) / 2, 0); scene.add(aiGroup); gameInstances.current.aiMesh = aiGroup;
    const aiPhysicsShape = new CANNON.Cylinder(playerCraftRadius, playerCraftRadius, playerCraftHeight + cockpitHeight, 16);
    const aiBody = physicsEngine.addPlayerBody(aiPhysicsShape, 1, aiGroup.position.clone(), true);
    console.log("[GameCanvas] aiBody created:", aiBody);
    gameInstances.current.aiBody = aiBody;
    const aiController = new AIController('ai_opponent_1', aiBody, aiGroup, ARENA_RADIUS, combatSystem);
    gameInstances.current.aiController = aiController;
    gameLogic.addAIPlayer(aiController);

    // Create second AI bot (green)
    const ai2CraftMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff66, metalness: 0.3, roughness: 0.4 });
    const ai2BaseMesh = new THREE.Mesh(baseGeometry.clone(), ai2CraftMaterial);
    ai2BaseMesh.castShadow = true;
    ai2BaseMesh.receiveShadow = true;
    const ai2CockpitMaterial = new THREE.MeshStandardMaterial({ color: 0x88ffaa, emissive: 0x228844, transparent: true, opacity: 0.7 });
    const ai2CockpitMesh = new THREE.Mesh(cockpitGeometry.clone(), ai2CockpitMaterial);
    ai2CockpitMesh.position.y = playerCraftHeight / 2;
    ai2CockpitMesh.castShadow = true;
    const ai2Group = new THREE.Group();
    ai2Group.add(ai2BaseMesh);
    ai2Group.add(ai2CockpitMesh);
    ai2Group.position.set(-3, (playerCraftHeight + cockpitHeight) / 2, 0);
    scene.add(ai2Group);
    const ai2PhysicsShape = new CANNON.Cylinder(playerCraftRadius, playerCraftRadius, playerCraftHeight + cockpitHeight, 16);
    const ai2Body = physicsEngine.addPlayerBody(ai2PhysicsShape, 1, ai2Group.position.clone(), true);
    const ai2Controller = new AIController('ai_opponent_2', ai2Body, ai2Group, ARENA_RADIUS, combatSystem);
    gameLogic.addAIPlayer(ai2Controller);

    // Create third AI bot (purple)
    const ai3CraftMaterial = new THREE.MeshStandardMaterial({ color: 0x9933ff, metalness: 0.3, roughness: 0.4 });
    const ai3BaseMesh = new THREE.Mesh(baseGeometry.clone(), ai3CraftMaterial);
    ai3BaseMesh.castShadow = true;
    ai3BaseMesh.receiveShadow = true;
    const ai3CockpitMaterial = new THREE.MeshStandardMaterial({ color: 0xcc99ff, emissive: 0x662299, transparent: true, opacity: 0.7 });
    const ai3CockpitMesh = new THREE.Mesh(cockpitGeometry.clone(), ai3CockpitMaterial);
    ai3CockpitMesh.position.y = playerCraftHeight / 2;
    ai3CockpitMesh.castShadow = true;
    const ai3Group = new THREE.Group();
    ai3Group.add(ai3BaseMesh);
    ai3Group.add(ai3CockpitMesh);
    ai3Group.position.set(0, (playerCraftHeight + cockpitHeight) / 2, 3);
    scene.add(ai3Group);
    const ai3PhysicsShape = new CANNON.Cylinder(playerCraftRadius, playerCraftRadius, playerCraftHeight + cockpitHeight, 16);
    const ai3Body = physicsEngine.addPlayerBody(ai3PhysicsShape, 1, ai3Group.position.clone(), true);
    const ai3Controller = new AIController('ai_opponent_3', ai3Body, ai3Group, ARENA_RADIUS, combatSystem);
    gameLogic.addAIPlayer(ai3Controller);

    console.log("[GameCanvas] Attaching collision listener to aiBody...");
    try {
        aiBody.addEventListener('collide', (event: any) => {
            const gl = gameInstances.current.gameLogic as GameLogic | null;
            const physicsEngineInstance = gameInstances.current.physicsEngine as PhysicsEngine | null;
            
            if (!gl || !physicsEngineInstance) {
                console.log("[GameCanvas AI Collision] No GameLogic or PhysicsEngine instance found");
                return;
            }
            
            console.log(`[AI Collision] AI ID: ${gameInstances.current.aiController?.id}, GameLogic State: ${gl.getGameState()}`);
            
            if (gl.getGameState() !== 'active') {
                console.log("[GameCanvas AI Collision] Game not active, ignoring collision");
                return;
            }

            const collidedWith = event.body as CANNON.Body;
            const collidedUserData = (collidedWith as any).userData;
            if (collidedUserData && collidedUserData.type === 'orb') {
                const orbId = collidedUserData.id;
                const removedOrb = gl.removeOrb(orbId); 
                if (removedOrb) {
                    scene.remove(removedOrb.mesh);
                    removedOrb.mesh.geometry.dispose();
                    (removedOrb.mesh.material as THREE.Material).dispose();
                    physicsEngineInstance.removeBody(removedOrb.body);
                    gl.incrementScore(1, true);
                    spawnOrb(scene, physicsEngineInstance, gl);
                }
            }
        });
        console.log("[GameCanvas] Attached collision listener to aiBody.");
    } catch (error) {
        console.error("[GameCanvas] ERROR attaching AI collision listener:", error);
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
        const humanPlayersForAI: PlayerLike[] = gameInstances.current.humanPlayerRef ? [gameInstances.current.humanPlayerRef] : [];
        // Update all AI controllers
        currentLogic.aiPlayers.forEach(aiController => {
          aiController.update(deltaTime, currentLogic.orbs, humanPlayersForAI);
        });
        currentLogic.update(deltaTime);
        
        if (currentLogic.gameState === 'active') {
          const remaining = Math.max(0, 60 - currentLogic.gameTime);
          setTimeRemaining(Math.ceil(remaining));
        }
        
        if (logTimer > 2) {
          console.log(`[Animate] GameLogic (${currentLogic.instanceId}) orbs count: ${currentLogic.orbs.length}`);
          logTimer = 0;
        }
      }
      
      gameInstances.current.physicsEngine?.update(deltaTime);
      gameInstances.current.combatSystem?.update(deltaTime);

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

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!currentMount || !gameInstances.current.camera) return;
      gameInstances.current.camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      gameInstances.current.camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      
      const gl = gameInstances.current.gameLogic as GameLogic | null;
      console.log(`[useEffect Cleanup] Running. GameLogic ID: ${gl?.instanceId}. Scene children BEFORE orb cleanup: ${scene.children.length}`);

      gameInstances.current.playerController?.dispose();
      // Dispose all AI controllers
      gl?.aiPlayers.forEach(aiController => {
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
      gameInstances.current.physicsEngine?.dispose();

      gl?.orbs.forEach((orb: Orb) => {
        console.log(`[useEffect Cleanup GL=${gl?.instanceId}] Removing orb: ${orb.id}, mesh ID: ${orb.mesh.id}, UUID: ${orb.mesh.uuid}`);
        scene.remove(orb.mesh);
        orb.mesh.geometry.dispose();
        (orb.mesh.material as THREE.Material).dispose();
        gameInstances.current.physicsEngine?.removeBody(orb.body);
      });
      if (gl) gl.orbs = [];
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
    };
  }, []);

  const handleStartGame = () => {
    console.log("[GameCanvas] handleStartGame called. Current UI state:", uiGameState);
    const gl = gameInstances.current.gameLogic as GameLogic | null;
    if (gl) {
      console.log(`[GameCanvas] Found GameLogic instance (${gl.instanceId}). Current game state:`, gl.getGameState());
      gl.requestStartGame();
    } else {
      console.error("[GameCanvas] GameLogic not initialized when trying to start game.");
    }
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />
      
      {/* Score display - only show during active game */}
      {uiGameState === 'active' && (
        <div style={styles.scoreStyle}>
          Score: {uiScore} | Time: {timeRemaining}s
        </div>
      )}

      {/* Game state specific overlays */}
      {uiGameState === 'waiting' && (
        <div style={styles.overlayContainerStyle}>
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
        gap: '20px'
    }
};

export default PokkasBashArena;
