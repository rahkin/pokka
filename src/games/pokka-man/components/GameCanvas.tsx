import { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { soundManager } from '../utils/sounds';
import { createGhostStateMachine } from '../utils/ghostStateMachine';
import { GhostBehavior } from '../utils/ghostBehavior';
import { isValidPosition } from '../utils/collision';
import { interpret } from 'xstate';
import {
  CELL_SIZE,
  PACMAN_SPEED,
  GHOST_SPEED,
  POWER_PELLET_DURATION,
  POINT_VALUE,
  POWER_PELLET_VALUE,
  CHARACTER_SCALE,
  FRAME_TIME,
  GHOST_SPEED_VARIATION,
  GHOST_POINTS,
  MAZE_LAYOUT,
  GHOST_FRIGHTENED_SPEED_MULTIPLIER,
  GRID_ALIGNMENT_THRESHOLD,
  GHOST_PERSONALITIES,
  GHOST_SPAWN_POSITIONS,
  GHOST_EXIT_POSITION,
  GHOST_HOUSE_POSITION,
  GHOST_SCATTER_TARGETS
} from '../utils/gameConstants';

const Canvas = styled.canvas`
  width: 600px;
  height: 660px;
  display: block;
  image-rendering: pixelated;
  margin: 0 auto;
  background: #000;
`;

type GhostMode = 'chase' | 'scatter' | 'frightened' | 'eaten';

interface Ghost {
  x: number;
  y: number;
  direction: string;
  type: 'pink' | 'blue' | 'purple' | 'skin';
  mode: GhostMode;
  targetX: number;
  targetY: number;
  isReleased: boolean;
  stateMachine: any;
  behavior: GhostBehavior;
  path: Array<{ x: number; y: number }>;
  lastPathUpdate: number;
  baseSpeed: number;
  consecutiveEats: number;
  spawnDelay: number;
  currentMovingDirection: string;
}

interface GameState {
  score: number;
  isPoweredUp: boolean;
  isScatterMode: boolean;
  pacman: {
    x: number;
    y: number;
    direction: string;
    nextDirection: string;
    nextX: number;
    nextY: number;
    visualX: number;
    visualY: number;
    currentMovingDirection: string;
  };
  ghosts: Ghost[];
  maze: number[][];
  dots: Array<{ x: number; y: number }>;
  powerPellets: Array<{ x: number; y: number }>;
}

interface GameCanvasProps {
  onScoreUpdate?: (score: number) => void;
  onGameOver?: () => void;
  nextDirection: string;
  onTurnTaken: () => void;
  isPlaying: boolean;
  gameOver?: boolean;
}

// Convert between grid and pixel coordinates
const gridToPixel = (grid: number) => grid * CELL_SIZE;
const pixelToGrid = (pixel: number) => Math.floor(pixel / CELL_SIZE);

// Helper function to get available directions at a position
const getAvailableDirections = (x: number, y: number, maze: number[][], testDistance?: number): string[] => {
  const directions: string[] = [];
  const distance = testDistance || CELL_SIZE * 0.6;  // Use provided distance or default
  
  // Test each direction with a small offset to prevent wall touching
  if (isValidPosition(x, y - distance, maze)) directions.push('up');
  if (isValidPosition(x, y + distance, maze)) directions.push('down');
  if (isValidPosition(x - distance, y, maze)) directions.push('left');
  if (isValidPosition(x + distance, y, maze)) directions.push('right');
  
  return directions;
};

// Helper function to calculate distance between two points
const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.abs(x2 - x1) + Math.abs(y2 - y1);
};

// Add this function after the existing helper functions
const checkGhostCollision = (
  pacmanX: number,
  pacmanY: number,
  ghost: GameState['ghosts'][0],
  isPoweredUp: boolean
): 'none' | 'death' | 'eatGhost' => {
  const distance = calculateDistance(
    pacmanX + CELL_SIZE / 2,
    pacmanY + CELL_SIZE / 2,
    ghost.x + CELL_SIZE / 2,
    ghost.y + CELL_SIZE / 2
  );

  if (distance < CELL_SIZE * 0.8) {
    return isPoweredUp ? 'eatGhost' : 'death';
  }

  return 'none';
};

// Move checkCollisions function declaration before it's used
const checkCollisions = (
  pacman: GameState['pacman'],
  ghosts: GameState['ghosts'],
  isPoweredUp: boolean,
  onGameOver?: () => void
) => {
  ghosts.forEach((ghost, index) => {
    const collisionResult = checkGhostCollision(pacman.x, pacman.y, ghost, isPoweredUp);
    
    if (collisionResult === 'death') {
      soundManager.play('death');
      if (onGameOver) {
        onGameOver();
      }
    } else if (collisionResult === 'eatGhost') {
      soundManager.play('eatGhost');
      // Points for eating a ghost
      return { ghostIndex: index, points: 200 };
    }
  });
  return null;
};

// Helper function to calculate wall avoidance bonus
const calculateWallAvoidanceBonus = (x: number, y: number, maze: number[][]): number => {
  const gridX = Math.floor(x / CELL_SIZE);
  const gridY = Math.floor(y / CELL_SIZE);
  let bonus = 0;
  const penaltyFactor = 3; // Increased penalty for adjacent walls

  // Check adjacent cells for walls and add stronger penalty
  if (gridX > 0 && maze[gridY][gridX - 1] === 1) bonus += penaltyFactor;
  if (gridX < maze[0].length - 1 && maze[gridY][gridX + 1] === 1) bonus += penaltyFactor;
  if (gridY > 0 && maze[gridY - 1][gridX] === 1) bonus += penaltyFactor;
  if (gridY < maze.length - 1 && maze[gridY + 1][gridX] === 1) bonus += penaltyFactor;

  // Add smaller penalty for diagonal walls (corners)
  const diagonalPenalty = penaltyFactor / 2; // Penalty for being near a corner
  if (gridX > 0 && gridY > 0 && maze[gridY - 1][gridX - 1] === 1) bonus += diagonalPenalty;
  if (gridX < maze[0].length - 1 && gridY > 0 && maze[gridY - 1][gridX + 1] === 1) bonus += diagonalPenalty;
  if (gridX > 0 && gridY < maze.length - 1 && maze[gridY + 1][gridX - 1] === 1) bonus += diagonalPenalty;
  if (gridX < maze[0].length - 1 && gridY < maze.length - 1 && maze[gridY + 1][gridX + 1] === 1) bonus += diagonalPenalty;

  // This bonus is added to the score. Since distance is negative,
  // a higher positive bonus here makes directions towards walls LESS likely.
  return bonus;
};

// Change from const to function component and add proper export
export function GameCanvas({ onScoreUpdate, onGameOver, nextDirection, onTurnTaken, isPlaying, gameOver }: GameCanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const assetsRef = useRef<any>(null);
  const powerUpTimeoutRef = useRef<NodeJS.Timeout>();
  const gameOverRef = useRef(false);
  const scoreRef = useRef(0);
  const animationFrameRef = useRef<number>();
  // Add refs for state accessed by handleCollisions
  const dotsRef = useRef<GameState['dots']>([]);
  const powerPelletsRef = useRef<GameState['powerPellets']>([]);
  const ghostsRef = useRef<GameState['ghosts']>([]);
  const isPoweredUpRef = useRef<boolean>(false);

  // Initialize game state
  const [gameState, setGameState] = useState<GameState>(() => {
    // Initialize dots and power pellets
    const dots: Array<{ x: number; y: number }> = [];
    const powerPellets: Array<{ x: number; y: number }> = [];

    for (let y = 0; y < MAZE_LAYOUT.length; y++) {
      for (let x = 0; x < MAZE_LAYOUT[y].length; x++) {
        if (MAZE_LAYOUT[y][x] === 2) {
          dots.push({ x: gridToPixel(x), y: gridToPixel(y) });
        } else if (MAZE_LAYOUT[y][x] === 3) {
          powerPellets.push({ x: gridToPixel(x), y: gridToPixel(y) });
        }
      }
    }

    const ghostTypes: Array<'pink' | 'blue' | 'purple' | 'skin'> = ['pink', 'blue', 'purple', 'skin'];

    return {
      score: 0,
      isPoweredUp: false,
      isScatterMode: true,
      pacman: {
        x: gridToPixel(10),
        y: gridToPixel(16),
        direction: '',
        nextDirection: '',
        nextX: gridToPixel(10),
        nextY: gridToPixel(16),
        visualX: gridToPixel(10),
        visualY: gridToPixel(16),
        currentMovingDirection: ''
      },
      ghosts: GHOST_SPAWN_POSITIONS.map((pos, index) => {
        const type = ghostTypes[index];
        const personality = GHOST_PERSONALITIES[type];
        const behavior = new GhostBehavior(type, GHOST_SCATTER_TARGETS[index], MAZE_LAYOUT, GHOST_HOUSE_POSITION);
        return {
          x: gridToPixel(pos.x),
          y: gridToPixel(pos.y),
          direction: 'up',
          type,
          mode: 'scatter' as GhostMode,
          targetX: GHOST_SCATTER_TARGETS[index].x * CELL_SIZE,
          targetY: GHOST_SCATTER_TARGETS[index].y * CELL_SIZE,
          isReleased: index === 0,
          stateMachine: interpret(createGhostStateMachine(GHOST_SCATTER_TARGETS[index])).start(),
          behavior,
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0,
          spawnDelay: personality.spawnDelay,
          currentMovingDirection: ''
        };
      }),
      maze: MAZE_LAYOUT,
      dots,
      powerPellets
    };
  });

  // Reset game state when isPlaying changes to true
  useEffect(() => {
    if (isPlaying) {
      // Clear any existing animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Reset refs
      gameOverRef.current = false;
      scoreRef.current = 0;

      // Clear any existing timeouts
      if (powerUpTimeoutRef.current) {
        clearTimeout(powerUpTimeoutRef.current);
      }

      // Reset game state
      setGameState(prev => ({
        ...prev,
        score: 0,
        isPoweredUp: false,
        isScatterMode: true,
        pacman: {
          x: gridToPixel(10),
          y: gridToPixel(16),
          direction: '',
          nextDirection: '',
          nextX: gridToPixel(10),
          nextY: gridToPixel(16),
          visualX: gridToPixel(10),
          visualY: gridToPixel(16),
          currentMovingDirection: ''
        },
        ghosts: prev.ghosts.map((ghost, index) => ({
          ...ghost,
          x: gridToPixel(GHOST_SPAWN_POSITIONS[index].x),
          y: gridToPixel(GHOST_SPAWN_POSITIONS[index].y),
          direction: 'up',
          mode: 'scatter' as GhostMode,
          isReleased: index === 0,
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0,
          currentMovingDirection: ''
        })),
        dots: prev.dots.map(dot => ({ ...dot })),
        powerPellets: prev.powerPellets.map(pellet => ({ ...pellet }))
      }));
    }
  }, [isPlaying]);

  // Update score and game over state using refs
  useEffect(() => {
    if (gameState.score !== scoreRef.current) {
      scoreRef.current = gameState.score;
      if (onScoreUpdate) {
        onScoreUpdate(gameState.score);
      }
    }
  }, [gameState.score, onScoreUpdate]);

  // Handle game over state
  useEffect(() => {
    if (gameOver && !gameOverRef.current) {
      gameOverRef.current = true;
      if (onGameOver) {
        onGameOver();
      }
    }
  }, [gameOver, onGameOver]);

  // Update ghost release timing
  useEffect(() => {
    if (!isPlaying) return;

    const releaseGhost = (index: number) => {
      setGameState(prev => ({
        ...prev,
        ghosts: prev.ghosts.map((ghost, i) => {
          if (i === index) {
            return {
              ...ghost,
              direction: 'up',
              mode: 'chase' as GhostMode,
              y: gridToPixel(GHOST_EXIT_POSITION.y),
              isReleased: true
            };
          }
          return ghost;
        })
      }));
    };

    // Release ghosts at staggered intervals based on personality
    gameState.ghosts.forEach((ghost, index) => {
      if (!ghost.isReleased) {
        setTimeout(() => releaseGhost(index), ghost.spawnDelay);
      }
    });

    return () => {
      gameState.ghosts.forEach((_, index) => {
        clearTimeout(index);
      });
    };
  }, [isPlaying]);

  // Update the handleCollisions function to use refs
  const handleCollisions = useCallback((newX: number, newY: number) => {
    const centerX = newX + CELL_SIZE / 2;
    const centerY = newY + CELL_SIZE / 2;
    let scoreChange = 0;
    // Read from refs
    let currentDots = [...dotsRef.current];
    let currentPellets = [...powerPelletsRef.current];
    let currentGhosts = ghostsRef.current.map(g => ({...g})); // Ensure we work with copies if modifying
    let currentIsPoweredUp = isPoweredUpRef.current;
    let localGameOver = false;

    // Keep track of changes to apply via setGameState at the end
    let dotsChanged = false;
    let pelletsChanged = false;
    let ghostsChanged = false;
    let powerUpChanged = false;

    // Check for dot collection
    const dotIndex = currentDots.findIndex(dot =>
      Math.abs(dot.x + CELL_SIZE / 2 - centerX) < CELL_SIZE / 2 &&
      Math.abs(dot.y + CELL_SIZE / 2 - centerY) < CELL_SIZE / 2
    );

    if (dotIndex !== -1) {
      currentDots.splice(dotIndex, 1);
      scoreChange += POINT_VALUE;
      dotsChanged = true;
      soundManager.play('eat');
    }

    // Check for power pellet collection
    const pelletIndex = currentPellets.findIndex(pellet =>
      Math.abs(pellet.x + CELL_SIZE / 2 - centerX) < CELL_SIZE / 2 &&
      Math.abs(pellet.y + CELL_SIZE / 2 - centerY) < CELL_SIZE / 2
    );

    if (pelletIndex !== -1) {
      currentPellets.splice(pelletIndex, 1);
      scoreChange += POWER_PELLET_VALUE;
      currentIsPoweredUp = true;
      powerUpChanged = true;
      pelletsChanged = true;
      soundManager.play('powerPellet');

      if (powerUpTimeoutRef.current) {
        clearTimeout(powerUpTimeoutRef.current);
      }

      powerUpTimeoutRef.current = setTimeout(() => {
        // Update state via setGameState when timeout finishes
        setGameState(prev => ({ ...prev, isPoweredUp: false }));
        isPoweredUpRef.current = false; // Keep ref in sync
      }, POWER_PELLET_DURATION);
    }

    // Check for ghost collisions
    let consecutiveEats = 0; // Reset consecutive count for this collision check cycle
    currentGhosts = currentGhosts.map((ghost, index) => {
        const collisionResult = checkGhostCollision(newX, newY, ghost, currentIsPoweredUp);
        if (collisionResult === 'death' && !currentIsPoweredUp) { // Only die if not powered up
            soundManager.play('death');
            localGameOver = true; 
            return ghost; // Return unchanged ghost, game over handled below
        } else if (collisionResult === 'eatGhost' && currentIsPoweredUp) {
            soundManager.play('eatGhost');
            const points = GHOST_POINTS[Math.min(consecutiveEats, GHOST_POINTS.length - 1)];
            scoreChange += points;
            consecutiveEats++; 
            ghostsChanged = true;
            // Return ghost to spawn position
            return {
                ...ghost,
                x: gridToPixel(GHOST_SPAWN_POSITIONS[index].x),
                y: gridToPixel(GHOST_SPAWN_POSITIONS[index].y),
                mode: 'eaten', // Should transition to eaten state
                // consecutiveEats: 0 // Reset should happen elsewhere?
            };
        }
        return ghost; // Return ghost unchanged if no relevant collision
    });

    // Check for game completion
    if (currentDots.length === 0 && currentPellets.length === 0) {
      soundManager.play('win');
      localGameOver = true;
    }

    // If any relevant state changed, update using setGameState
    if (scoreChange > 0 || dotsChanged || pelletsChanged || ghostsChanged || powerUpChanged || localGameOver) {
      setGameState(prev => ({
        ...prev,
        // Only update score if it changed
        score: scoreChange > 0 ? prev.score + scoreChange : prev.score,
        // Only update collections if they changed
        dots: dotsChanged ? currentDots : prev.dots,
        powerPellets: pelletsChanged ? currentPellets : prev.powerPellets,
        // Only update ghosts if they changed (eaten)
        ghosts: ghostsChanged ? currentGhosts : prev.ghosts,
        // Only update powerup status if it changed
        isPoweredUp: powerUpChanged ? currentIsPoweredUp : prev.isPoweredUp,
      }));
      
      // Update scoreRef if score changed
      if (scoreChange > 0 && onScoreUpdate) {
          // Call onScoreUpdate asynchronously later using useEffect triggered by gameState.score
      }
    }

    // Handle game over state change outside of setGameState
    if (localGameOver && !gameOverRef.current) {
      gameOverRef.current = true;
      if (onGameOver) {
        // Call onGameOver asynchronously later using useEffect triggered by gameOver prop
      }
    }

    // Return scoreChange for immediate use in updatePokka if needed (currently not used there)
    // The actual state update happens via setGameState above.
    return scoreChange; 
    // Dependencies should be stable functions from props/context or empty
  }, [onGameOver, onScoreUpdate]); // Removed gameState dependency

  // Drawing functions
  const drawMaze = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    MAZE_LAYOUT.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 1) {
          ctx.fillStyle = '#00f';
          ctx.fillRect(
            gridToPixel(x),
            gridToPixel(y),
            CELL_SIZE,
            CELL_SIZE
          );
        }
      });
    });
  }, []);

  const drawDots = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#ff69b4';
    gameState.dots.forEach(dot => {
      ctx.beginPath();
      ctx.arc(
        dot.x + CELL_SIZE / 2,
        dot.y + CELL_SIZE / 2,
        2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });
  }, [gameState.dots]);

  const drawPowerPellets = useCallback((ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = '#fff';
    gameState.powerPellets.forEach(pellet => {
      ctx.beginPath();
      ctx.arc(
        pellet.x + CELL_SIZE / 2,
        pellet.y + CELL_SIZE / 2,
        6,
        0,
        Math.PI * 2
      );
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#ff9ec5';
      ctx.fill();
      ctx.shadowBlur = 0;
    });
  }, [gameState.powerPellets]);

  const drawPokka = useCallback((ctx: CanvasRenderingContext2D) => {
    if (!assetsRef.current?.pokka) return;
    const { pacman } = gameState;
    
    ctx.save();
    ctx.translate(
      Math.round(pacman.x + CELL_SIZE / 2),
      Math.round(pacman.y + CELL_SIZE / 2)
    );
    
    ctx.drawImage(
      assetsRef.current.pokka,
      -CELL_SIZE * CHARACTER_SCALE / 2,
      -CELL_SIZE * CHARACTER_SCALE / 2,
      CELL_SIZE * CHARACTER_SCALE,
      CELL_SIZE * CHARACTER_SCALE
    );
    ctx.restore();
  }, [gameState]);

  const drawGhosts = useCallback((ctx: CanvasRenderingContext2D) => {
    if (!assetsRef.current) return;
    
    gameState.ghosts.forEach(ghost => {
      const ghostImg = gameState.isPoweredUp
        ? assetsRef.current.ghosts[ghost.type]?.scared
        : assetsRef.current.ghosts[ghost.type]?.normal;
        
      if (ghostImg && ghostImg.complete) {
        ctx.save();
        ctx.translate(
          Math.round(ghost.x + CELL_SIZE / 2),
          Math.round(ghost.y + CELL_SIZE / 2)
        );
        ctx.drawImage(
          ghostImg,
          -CELL_SIZE / 2,
          -CELL_SIZE / 2,
          CELL_SIZE,
          CELL_SIZE
        );
        ctx.restore();
      }
    });
  }, [gameState.ghosts, gameState.isPoweredUp]);

  // Initialize canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    canvas.width = MAZE_LAYOUT[0].length * CELL_SIZE;
    canvas.height = MAZE_LAYOUT.length * CELL_SIZE;

    // Initial render
    const ctx = canvas.getContext('2d');
    if (ctx) {
      drawMaze(ctx);
      drawDots(ctx);
      drawPowerPellets(ctx);
      drawGhosts(ctx);
      drawPokka(ctx);
    }
  }, [drawMaze, drawDots, drawPowerPellets, drawGhosts, drawPokka]);

  // Load game assets
  useEffect(() => {
    const loadAssets = async () => {
      const assets = {
        pokka: new Image(),
        ghosts: {
          pink: { normal: new Image(), scared: new Image() },
          blue: { normal: new Image(), scared: new Image() },
          purple: { normal: new Image(), scared: new Image() },
          skin: { normal: new Image(), scared: new Image() },
          lightPink: { normal: new Image(), scared: new Image() }
        }
      };

      // Set image sources
      assets.pokka.src = '/assets/images/pokka.png';
      assets.ghosts.pink.normal.src = '/assets/images/andy.png';
      assets.ghosts.blue.normal.src = '/assets/images/siren.png';
      assets.ghosts.purple.normal.src = '/assets/images/aicz.png';
      assets.ghosts.skin.normal.src = '/assets/images/banana.png';
      assets.ghosts.lightPink.normal.src = '/assets/images/mubarak.png';
      
      // Set scared ghost images
      Object.values(assets.ghosts).forEach(ghost => {
        ghost.scared.src = '/assets/images/aiai.png';
      });

      // Wait for all images to load
      await Promise.all([
        new Promise(resolve => assets.pokka.onload = resolve),
        ...Object.values(assets.ghosts).flatMap(ghost => [
          new Promise(resolve => ghost.normal.onload = resolve),
          new Promise(resolve => ghost.scared.onload = resolve)
        ])
      ]);

      assetsRef.current = assets;
    };

    loadAssets().catch(console.error);
  }, []);

  // Update Pokka's position and handle movement (Restored Version)
  const updatePokka = useCallback((deltaTime: number) => {
    setGameState((prevState) => {
      const { pacman, maze } = prevState;
      const speed = (PACMAN_SPEED * deltaTime) / FRAME_TIME;
      let effectiveDirection = pacman.currentMovingDirection; // Start with current or empty
      // Note: We don't need didTakeTurn flag with the useEffect logic

      // --- Initial Movement Check --- 
      if (!pacman.currentMovingDirection && nextDirection) {
          let startCheckX = pacman.x;
          let startCheckY = pacman.y;
          const startCheckDistance = speed > 0 ? speed : 1;
          switch (nextDirection) {
              case 'right': startCheckX += startCheckDistance; break;
              case 'left': startCheckX -= startCheckDistance; break;
              case 'down': startCheckY += startCheckDistance; break;
              case 'up': startCheckY -= startCheckDistance; break;
          }
          if (isValidPosition(startCheckX, startCheckY, maze)) {
              effectiveDirection = nextDirection; // Decide to start moving
          }
      }
      // --- End Initial Movement Check ---

      // --- Turn Handling Check (only if already moving) --- 
      if (pacman.currentMovingDirection && nextDirection && nextDirection !== pacman.currentMovingDirection && nextDirection !== getOppositeDirection(pacman.currentMovingDirection)) {
          const centerX = pacman.x + CELL_SIZE / 2;
          const centerY = pacman.y + CELL_SIZE / 2;
          const currentGridX = Math.floor(centerX / CELL_SIZE);
          const currentGridY = Math.floor(centerY / CELL_SIZE);
          const offsetX = centerX % CELL_SIZE - CELL_SIZE / 2;
          const offsetY = centerY % CELL_SIZE - CELL_SIZE / 2;
          const isAligned = Math.abs(offsetX) < GRID_ALIGNMENT_THRESHOLD && 
                           Math.abs(offsetY) < GRID_ALIGNMENT_THRESHOLD;

          if (isAligned) {
            let checkX = gridToPixel(currentGridX);
            let checkY = gridToPixel(currentGridY);
            const checkDistance = speed > 0 ? speed : 1; 

            switch (nextDirection) {
              case 'right': checkX += checkDistance; break;
              case 'left': checkX -= checkDistance; break;
              case 'down': checkY += checkDistance; break;
              case 'up': checkY -= checkDistance; break;
            }

            if (isValidPosition(checkX, checkY, maze)) {
              // Snap to grid center before turning
              pacman.x = gridToPixel(currentGridX);
              pacman.y = gridToPixel(currentGridY);
              effectiveDirection = nextDirection; // Decide to turn
            }
          }
      }
      // --- End Turn Handling Check ---

      // --- Movement Calculation --- 
      let nextX = pacman.x;
      let nextY = pacman.y;

      if (!effectiveDirection) {
          // If no direction decided, don't move
          // Return previous state but ensure pacman object is copied if needed elsewhere
          return { ...prevState, pacman: { ...pacman } }; 
      }

      switch (effectiveDirection) {
          case 'right': nextX += speed; break;
          case 'left': nextX -= speed; break;
          case 'down': nextY += speed; break;
          case 'up': nextY -= speed; break;
        }

        let currentX = pacman.x;
        let currentY = pacman.y;

        // Check if the intended next position is valid
        if (isValidPosition(nextX, nextY, maze)) {
          currentX = nextX; // Move if valid
          currentY = nextY;
        } else {
          // Intended move failed. Stop Pokka at the current position.
          // currentX and currentY remain pacman.x and pacman.y
          effectiveDirection = ''; // Clear the direction to prevent repeated attempts into wall
        }
        // --- End Movement Calculation ---
      
      const scoreChange = handleCollisions(currentX, currentY);

      return {
         ...prevState, 
         pacman: { 
             ...pacman, 
             x: currentX, 
             y: currentY,
             currentMovingDirection: effectiveDirection 
         }, 
         score: prevState.score + (scoreChange || 0), 
        };
    });
  }, [nextDirection, handleCollisions]);

  // Restore useEffect for onTurnTaken
  useEffect(() => {
    // Call onTurnTaken if a direction was buffered (nextDirection exists)
    // AND the gameState now reflects that direction as the currentMovingDirection.
    if (nextDirection && gameState.pacman.currentMovingDirection === nextDirection) {
      onTurnTaken();
    }
  }, [gameState.pacman.currentMovingDirection, nextDirection, onTurnTaken]);

  // Update ghosts with improved movement using GhostBehavior
  const updateGhosts = useCallback((deltaTime: number) => {
    setGameState(prevState => {
      const pacmanState = {
        position: { x: prevState.pacman.x, y: prevState.pacman.y },
        direction: prevState.pacman.direction
      };

      const redGhost = prevState.ghosts.find(g => g.type === 'pink');
      const redGhostPos = redGhost ? { x: redGhost.x, y: redGhost.y } : undefined;

      const newGhosts = prevState.ghosts.map(ghost => {
        if (!ghost.isReleased) return ghost;

        const currentState = ghost.stateMachine.getSnapshot();
        const mode = currentState.context.mode;
        const baseSpeed = ghost.baseSpeed * (deltaTime / FRAME_TIME);
        const speed = mode === 'frightened' ? 
          baseSpeed * GHOST_FRIGHTENED_SPEED_MULTIPLIER : 
          baseSpeed * (mode === 'chase' ? 1.1 : 0.9);

        const centerX = ghost.x + CELL_SIZE / 2;
        const centerY = ghost.y + CELL_SIZE / 2;
        const currentGridX = Math.floor(centerX / CELL_SIZE);
        const currentGridY = Math.floor(centerY / CELL_SIZE);

        const offsetX = centerX % CELL_SIZE - CELL_SIZE / 2;
        const offsetY = centerY % CELL_SIZE - CELL_SIZE / 2;
        
        const atGridCenter = Math.abs(offsetX) < GRID_ALIGNMENT_THRESHOLD && 
                            Math.abs(offsetY) < GRID_ALIGNMENT_THRESHOLD;

        if (atGridCenter || !ghost.direction || !isValidPosition(ghost.x, ghost.y, prevState.maze)) {
          if (atGridCenter) {
            ghost.x = currentGridX * CELL_SIZE;
            ghost.y = currentGridY * CELL_SIZE;
          }

          let availableDirections = getAvailableDirections(ghost.x, ghost.y, prevState.maze);
          
          if (availableDirections.length === 0) {
            availableDirections = getAvailableDirections(ghost.x, ghost.y, prevState.maze, CELL_SIZE * 0.8);
          }

          availableDirections = availableDirections.filter(dir => {
            if (dir === getOppositeDirection(ghost.direction)) {
              return availableDirections.length === 1;
            }
            return true;
          });

          if (availableDirections.length > 0) {
            const ghostState = {
              position: { x: ghost.x, y: ghost.y },
              mode: mode,
              isReleased: ghost.isReleased,
              currentSpeed: speed, 
              lastUpdateTime: Date.now()
            };
            
            const target = ghost.behavior.getTargetPosition(ghostState, pacmanState, redGhostPos);
            
            const directionScores = availableDirections.map(dir => {
              let nextX = ghost.x;
              let nextY = ghost.y;
              
              switch (dir) {
                case 'up': nextY -= CELL_SIZE; break;
                case 'down': nextY += CELL_SIZE; break;
                case 'left': nextX -= CELL_SIZE; break;
                case 'right': nextX += CELL_SIZE; break;
              }
              
              const nextGridX = Math.floor(nextX / CELL_SIZE);
              const nextGridY = Math.floor(nextY / CELL_SIZE);
              
              const targetGridX = Math.floor(target.x / CELL_SIZE);
              const targetGridY = Math.floor(target.y / CELL_SIZE);
              
              const distanceToTarget = Math.abs(nextGridX - targetGridX) + Math.abs(nextGridY - targetGridY);
              
              const randomFactor = mode === 'frightened' ? Math.random() * 4 : Math.random() * 0.5;
              
              const directionBonus = dir === ghost.direction ? 0.8 : 0;
              
              const personality = GHOST_PERSONALITIES[ghost.type];
              const ghostAvoidanceBonus = prevState.ghosts.reduce((bonus, otherGhost) => {
                if (otherGhost === ghost) return bonus;
                const otherGridX = Math.floor(otherGhost.x / CELL_SIZE);
                const otherGridY = Math.floor(otherGhost.y / CELL_SIZE);
                const distanceToGhost = Math.abs(nextGridX - otherGridX) + Math.abs(nextGridY - otherGridY);
                
                if (distanceToGhost < personality.avoidanceRadius) {
                  const avoidanceStrength = Math.pow(1 - (distanceToGhost / personality.avoidanceRadius), 2);
                  return bonus + (avoidanceStrength * 2);
                }
                return bonus;
              }, 0);
              
              const wallAvoidanceBonus = calculateWallAvoidanceBonus(nextX, nextY, prevState.maze);
              
              return {
                direction: dir,
                score: -distanceToTarget + randomFactor + directionBonus + ghostAvoidanceBonus + wallAvoidanceBonus
              };
            });

            const bestDirection = directionScores.reduce((best, current) => 
              current.score > best.score ? current : best
            );

            ghost.direction = bestDirection.direction;
          }
        }

        let nextX = ghost.x;
        let nextY = ghost.y;
        
        switch (ghost.direction) {
          case 'up': nextY -= speed; break;
          case 'down': nextY += speed; break;
          case 'left': nextX -= speed; break;
          case 'right': nextX += speed; break;
        }

        if (isValidPosition(nextX, nextY, prevState.maze)) {
          if (Math.abs(offsetX) < speed && (ghost.direction === 'up' || ghost.direction === 'down')) {
            nextX = currentGridX * CELL_SIZE;
          }
          if (Math.abs(offsetY) < speed && (ghost.direction === 'left' || ghost.direction === 'right')) {
            nextY = currentGridY * CELL_SIZE;
          }
          
          return { ...ghost, x: nextX, y: nextY, mode, targetX: ghost.targetX, targetY: ghost.targetY };
        } else {
          const slideX = ghost.direction === 'up' || ghost.direction === 'down' ? nextX : ghost.x;
          const slideY = ghost.direction === 'left' || ghost.direction === 'right' ? nextY : ghost.y;
          
          if (isValidPosition(ghost.x, slideY, prevState.maze)) {
            return { ...ghost, y: slideY, mode, targetX: ghost.targetX, targetY: ghost.targetY };
          } else if (isValidPosition(slideX, ghost.y, prevState.maze)) {
            return { ...ghost, x: slideX, mode, targetX: ghost.targetX, targetY: ghost.targetY };
          }
        }

        return ghost;
      });

      return { ...prevState, ghosts: newGhosts };
    });
  }, []);

  // Update ghost targets when Pacman moves
  useEffect(() => {
    if (!isPlaying) return;

    setGameState(prevState => {
      const pacmanGridPos = { x: pixelToGrid(prevState.pacman.x), y: pixelToGrid(prevState.pacman.y) };
      const newGhosts = prevState.ghosts.map(ghost => {
        if (ghost.isReleased) {
          ghost.stateMachine.send({ type: 'UPDATE_CHASE_TARGET', target: pacmanGridPos });
        }
        return ghost;
      });
      return { ...prevState, ghosts: newGhosts };
    });
  }, [isPlaying, gameState.pacman.x, gameState.pacman.y]);

  // Update the useEffect for game start
  useEffect(() => {
    if (isPlaying) {
      soundManager.play('start');
    }
  }, [isPlaying]);

  // Define draw function before animation loop
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw game elements
    drawMaze(ctx);
    drawDots(ctx);
    drawPowerPellets(ctx);
    drawGhosts(ctx);
    drawPokka(ctx);
  }, [drawMaze, drawDots, drawPowerPellets, drawGhosts, drawPokka]);

  // Update the animation loop
  useEffect(() => {
    if (!isPlaying || gameOverRef.current) return;
    let lastTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (gameOverRef.current) { cancelAnimationFrame(animationFrameId); return; }
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      console.log('deltaTime:', deltaTime); // Log delta time

      // Update game state
      updatePokka(deltaTime);
      updateGhosts(deltaTime); // Restore ghost updates

      // Draw the game state
      draw();

      // Add collision checking
      const collisionResult = checkCollisions(gameState.pacman, gameState.ghosts, gameState.isPoweredUp, onGameOver);
      if (collisionResult) {
        const { ghostIndex, points } = collisionResult;
        gameState.ghosts[ghostIndex].mode = 'eaten';
        gameState.score += points;
        if (onScoreUpdate) {
          onScoreUpdate(gameState.score);
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, draw, updatePokka, updateGhosts, handleCollisions, onGameOver, onScoreUpdate]);

  // Helper function
  const getOppositeDirection = (direction: string): string => {
      switch (direction) { case 'up': return 'down'; case 'down': return 'up'; case 'left': return 'right'; case 'right': return 'left'; default: return direction; }
  };

  // Update refs whenever relevant gameState changes
  useEffect(() => {
    dotsRef.current = gameState.dots;
    powerPelletsRef.current = gameState.powerPellets;
    ghostsRef.current = gameState.ghosts;
    isPoweredUpRef.current = gameState.isPoweredUp;
  }, [gameState.dots, gameState.powerPellets, gameState.ghosts, gameState.isPoweredUp]);

  return <Canvas ref={canvasRef} />;
}

// NO DUPLICATE CODE OR IMPORTS BELOW THIS LINE
