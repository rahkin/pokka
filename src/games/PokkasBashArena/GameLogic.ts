// Core game loop and logic for Pokka's Bash Arena

import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { PhysicsEngine } from './PhysicsEngine.ts';
import { AIController } from './AIController.ts';
import type { Orb, PlayerLike } from './GameCanvas.tsx';

export type GameState = 'waiting' | 'active' | 'countdown' | 'gameOver';

export class GameLogic {
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
  ) {
    this.instanceId = `gl-${Math.random().toString(36).substring(2, 9)}`;
    this.scene = scene;
    this.physicsEngine = physicsEngine;
    this.onStateChange = onStateChange;
    this.onScoreUpdate = onScoreUpdate;
    this.onCountdownUpdate = onCountdownUpdate;
    this.onGameOver = onGameOver;
    this.setGameState('waiting');
  }

  private setGameState(newState: GameState): void {
    console.log(`[GameLogic] State transition: ${this.gameState} -> ${newState}`);
    this.gameState = newState;
    this.onStateChange(this.gameState);
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
    this.cancelCountdown();
    console.log(`[GameLogic] runCountdown - Current value: ${this.countdownValue}, State: ${this.gameState}`);
    if (this.countdownValue > 0) {
      this.countdownTimeoutId = setTimeout(() => {
        console.log(`[GameLogic] Countdown tick - Current: ${this.countdownValue}, State: ${this.gameState}`);
        this.countdownValue--;
        this.onCountdownUpdate(this.countdownValue);
        if (this.countdownValue > 0) {
          this.runCountdown();
        } else {
          console.log('[GameLogic] Countdown complete, starting game');
          this.startGame();
        }
      }, 1000);
    } else {
      console.log(`[GameLogic] Countdown already at 0, starting game directly`);
      this.startGame();
    }
  }

  public cancelCountdown(): void {
    if (this.countdownTimeoutId) {
      console.log(`[GameLogic] Cancelling countdown timeout ID: ${this.countdownTimeoutId}`);
      clearTimeout(this.countdownTimeoutId);
      this.countdownTimeoutId = null;
    }
  }

  private startGame(): void {
    console.log("[GameLogic] startGame called, current state:", this.gameState);
    if (this.gameState !== 'countdown') {
      console.warn("[GameLogic] Attempted to start game from invalid state:", this.gameState);
      return;
    }
    this.setGameState('active');
    this.gameTime = 0;
    console.log("[GameLogic] Waking up physics bodies");
    this.player?.body.wakeUp();
    this.aiPlayers.forEach(ai => ai.aiBody.wakeUp());
    this.orbs.forEach(orb => orb.body.wakeUp());
    console.log("[GameLogic] Game started successfully");
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
    if (this.player && this.player.health <= 0) {
      this.handlePlayerDeath(this.player);
    }

    this.aiPlayers.forEach(ai => {
      if (ai.aiPlayer.health <= 0) {
        this.handlePlayerDeath(ai.aiPlayer);
      }
    });
  }
  
  public triggerGameOver(): void {
    if (this.gameState === 'gameOver') return;
    this.setGameState('gameOver');
    this.onGameOver(this.score);
    this.player?.body.sleep();
    this.aiPlayers.forEach(ai => ai.aiBody.sleep());
    this.orbs.forEach(orb => orb.body.sleep());
  }

  public resetGame(): void {
    this.cancelCountdown();
    this.score = 0;
    this.aiScore = 0;
    this.gameTime = 0;
    this.onScoreUpdate(this.score);
    this.setGameState('waiting');
  }

  public getGameState(): GameState {
    return this.gameState;
  }

  private handlePlayerDeath(player: PlayerLike): void {
    // Hide the player
    player.mesh.visible = false;
    if (player.healthBar) {
      player.healthBar.background.visible = false;
      player.healthBar.foreground.visible = false;
    }

    // Disable physics
    this.physicsEngine.world.removeBody(player.body);

    // Schedule respawn
    setTimeout(() => {
      this.respawnPlayer(player);
    }, this.RESPAWN_TIME * 1000);

    // Update score if AI was killed by player
    if (player.isAI) {
      this.incrementScore(5); // 5 points for killing an AI
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