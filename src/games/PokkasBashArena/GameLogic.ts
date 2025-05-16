// Core game loop and logic for Pokka's Bash Arena

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PhysicsEngine } from './PhysicsEngine.ts';
import { AIController } from './AIController.ts';
import type { Orb, PlayerLike } from './GameCanvas.tsx';
import { CombatSystem } from './CombatSystem.ts';
import { EventEmitter } from 'events';

export type GameState = 'waiting' | 'active' | 'countdown' | 'gameOver';

export class GameLogic extends EventEmitter {
  public scene: THREE.Scene;
  public physicsEngine: PhysicsEngine;
  public player: PlayerLike | null = null; // Represents the human player
  public aiPlayers: AIController[] = [];
  public orbs: Orb[] = [];
  public gameState: GameState = 'waiting';
  public score = 0;
  public aiScore = 0;
  public gameTime = 0;
  private readonly GAME_DURATION = 60; // Game lasts 60 seconds
  private countdownValue = 3;
  private countdownTimeoutId: NodeJS.Timeout | null = null;
  public readonly instanceId: string;
  private combatSystem: CombatSystem;

  // Callbacks to GameCanvas for UI updates or specific actions
  private onStateChange: (newState: GameState) => void;
  private onScoreUpdate: (newScore: number) => void;
  private onCountdownUpdate: (value: number) => void;
  private onGameOver: (finalScore: number) => void;
  private readonly RESPAWN_TIME = 3; // seconds
  private readonly SPAWN_POSITIONS = [
    new THREE.Vector3(0, 0.5, 5),
    new THREE.Vector3(5, 0.5, 0),
    new THREE.Vector3(0, 0.5, -5),
    new THREE.Vector3(-5, 0.5, 0)
  ];

  constructor(
    scene: THREE.Scene, 
    physicsEngine: PhysicsEngine, 
    onStateChange: (newState: GameState) => void,
    onScoreUpdate: (newScore: number) => void,
    onCountdownUpdate: (value: number) => void,
    onGameOver: (finalScore: number) => void,
    combatSystem: CombatSystem
  ) {
    super();
    this.instanceId = `gl-${Math.random().toString(36).substring(2, 9)}`;
    this.scene = scene;
    this.physicsEngine = physicsEngine;
    this.onStateChange = onStateChange;
    this.onScoreUpdate = onScoreUpdate;
    this.onCountdownUpdate = onCountdownUpdate;
    this.onGameOver = onGameOver;
    this.combatSystem = combatSystem;
    this.setGameState('waiting');
  }

  private setGameState(newState: GameState): void {
    console.log(`[GameLogic] State transition: ${this.gameState} -> ${newState}`);
    this.gameState = newState;
    this.onStateChange(this.gameState);
    this.emit('stateChange', this.gameState);
  }

  public requestStartGame(): void {
    console.log("[GameLogic] requestStartGame called. Current state:", this.gameState);
    if (this.gameState === 'waiting' || this.gameState === 'gameOver') {
      this.resetGame();
      this.setGameState('countdown');
      this.countdownValue = 3;
      this.onCountdownUpdate(this.countdownValue);
      this.runCountdown();
    } else {
      console.log(`[GameLogic] requestStartGame ignored, current state: ${this.gameState}`);
    }
  }

  private runCountdown(): void {
    if (this.countdownTimeoutId) {
      clearTimeout(this.countdownTimeoutId);
    }

    const countdown = () => {
      this.countdownValue--;
      this.onCountdownUpdate(this.countdownValue);

      if (this.countdownValue > 0) {
        this.countdownTimeoutId = setTimeout(countdown, 1000);
      } else {
        this.setGameState('active');
      }
    };

    this.countdownTimeoutId = setTimeout(countdown, 1000);
  }

  private resetGame(): void {
    this.score = 0;
    this.onScoreUpdate(this.score);
    this.gameTime = 0;
  }

  public addPlayer(player: PlayerLike): void {
    this.player = player;
  }

  public addAIPlayer(ai: AIController): void {
    this.aiPlayers.push(ai);
  }

  public addOrb(orb: Orb): void {
    this.orbs.push(orb);
  }
  
  public removeOrb(orbId: string): Orb | undefined {
    console.log(`[GameLogic] Attempting to remove orb with ID: ${orbId}`);
    const orbIndex = this.orbs.findIndex(o => o.id === orbId);
    if (orbIndex !== -1) {
      const [removedOrb] = this.orbs.splice(orbIndex, 1);
      console.log(`[GameLogic] Orb found and removed: ${orbId}`);
      return removedOrb;
    }
    console.log(`[GameLogic] Orb NOT found: ${orbId}`);
    return undefined;
  }

  public incrementScore(points: number, isAI: boolean = false): void {
    if (this.gameState !== 'active') {
      console.log(`[GameLogic] Score increment ignored - game not active (state: ${this.gameState})`);
      return;
    }
    if (isAI) {
      this.aiScore += points;
      console.log(`[GameLogic] AI Score incremented by ${points} to ${this.aiScore}`);
    } else {
      const oldScore = this.score;
      this.score += points;
      console.log(`[GameLogic] Player Score incremented from ${oldScore} to ${this.score}`);
      this.onScoreUpdate(this.score);
    }
  }

  public update(deltaTime: number): void {
    if (this.gameState !== 'active') return;

    this.gameTime += deltaTime;
    
    if (this.gameTime >= this.GAME_DURATION) {
      console.log(`[GameLogic] Game duration (${this.GAME_DURATION}s) reached, triggering game over`);
      this.triggerGameOver();
      return;
    }

    const timeRemaining = Math.max(0, this.GAME_DURATION - this.gameTime);
    if (Math.floor(timeRemaining) !== Math.floor(timeRemaining + deltaTime)) {
      console.log(`[GameLogic] Time remaining: ${Math.floor(timeRemaining)}s`);
    }

    // Check for player deaths
    if (this.player && this.player.health <= 0 && this.player.mesh.visible) {
      console.log('[GameLogic] Human player died');
      this.handlePlayerDeath(this.player);
      // End game if player dies
      this.triggerGameOver();
      return;
    }

    // Check for AI deaths
    this.aiPlayers.forEach(ai => {
      if (ai.aiPlayer.health <= 0 && ai.aiPlayer.mesh.visible) {
        console.log(`[GameLogic] AI player ${ai.id} died`);
        this.handlePlayerDeath(ai.aiPlayer);
      }
    });

    // Check if all AIs are dead
    const allAIsDead = this.aiPlayers.every(ai => ai.aiPlayer.health <= 0);
    if (allAIsDead) {
      console.log('[GameLogic] All AI players are dead, triggering game over');
      this.triggerGameOver();
    }
  }
  
  public triggerGameOver(): void {
    if (this.gameState === 'gameOver') return;
    
    console.log('[GameLogic] Game Over triggered');
    console.log(`Final Score: ${this.score}`);
    
    this.setGameState('gameOver');
    this.onGameOver(this.score);

    // Clean up all physics bodies
    if (this.player && this.player.body) {
      this.player.body.sleep();
    }
    
    this.aiPlayers.forEach(ai => {
      if (ai.aiBody) {
        ai.aiBody.sleep();
      }
    });

    this.orbs.forEach(orb => {
      if (orb.body) {
        orb.body.sleep();
      }
    });
  }

  public getGameState(): GameState {
    return this.gameState;
  }

  private handlePlayerDeath(player: PlayerLike): void {
    console.log(`[GameLogic] Handling death of player ${player.id}`);
    // Hide the player
    player.mesh.visible = false;
    if (player.healthBar) {
      player.healthBar.background.visible = false;
      player.healthBar.foreground.visible = false;
    }

    // Disable physics
    if (this.physicsEngine.world.bodies.includes(player.body)) {
      this.physicsEngine.world.removeBody(player.body);
    }

    // Update score if AI was killed by player
    if (player.isAI && this.gameState === 'active') {
      this.incrementScore(5); // 5 points for killing an AI
    }

    // Only respawn AIs during active game
    if (player.isAI && this.gameState === 'active') {
      setTimeout(() => {
        this.respawnPlayer(player);
      }, this.RESPAWN_TIME * 1000);
    }
  }

  private respawnPlayer(player: PlayerLike): void {
    if (this.gameState !== 'active') return;

    // Choose random spawn position
    const spawnPos = this.SPAWN_POSITIONS[Math.floor(Math.random() * this.SPAWN_POSITIONS.length)];
    
    // Reset position and health
    player.body.position.copy(spawnPos as unknown as CANNON.Vec3);
    player.body.velocity.set(0, 0, 0);
    player.body.angularVelocity.set(0, 0, 0);
    player.health = player.maxHealth;
    
    // Make visible again
    player.mesh.visible = true;
    if (player.healthBar) {
      player.healthBar.background.visible = true;
      player.healthBar.foreground.visible = true;
    }

    // Re-add to physics world
    this.physicsEngine.world.addBody(player.body);

    // Give temporary invulnerability
    player.isShielded = true;
    player.shieldEndTime = performance.now() / 1000 + 2; // 2 seconds of invulnerability
  }
}