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
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  margin: 0 auto;
  background: #000;
  outline: none; /* Remove focus outline */
  touch-action: none; /* Prevent browser touch actions */
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
  currentDirection: string;
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
  const distance = testDistance || CELL_SIZE * 0.3;  // Reduced from 0.6 to allow more movement
  
  // Test each direction with a smaller offset
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
// const calculateWallAvoidanceBonus = (x: number, y: number, maze: number[][]): number => {
//   const gridX = Math.floor(x / CELL_SIZE);
//   const gridY = Math.floor(y / CELL_SIZE);
//   let bonus = 0;
//   const penaltyFactor = 3;
//   
//   if (gridX > 0 && maze[gridY][gridX - 1] === 1) bonus += penaltyFactor;
//   if (gridX < maze[0].length - 1 && maze[gridY][gridX + 1] === 1) bonus += penaltyFactor;
//   if (gridY > 0 && maze[gridY - 1][gridX] === 1) bonus += penaltyFactor;
//   if (gridY < maze.length - 1 && maze[gridY + 1][gridX] === 1) bonus += penaltyFactor;
//   
//   const diagonalPenalty = penaltyFactor / 2;
//   if (gridX > 0 && gridY > 0 && maze[gridY - 1][gridX - 1] === 1) bonus += diagonalPenalty;
//   if (gridX < maze[0].length - 1 && gridY > 0 && maze[gridY - 1][gridX + 1] === 1) bonus += diagonalPenalty;
//   if (gridX > 0 && gridY < maze.length - 1 && maze[gridY + 1][gridX - 1] === 1) bonus += diagonalPenalty;
//   if (gridX < maze[0].length - 1 && gridY < maze.length - 1 && maze[gridY + 1][gridX + 1] === 1) bonus += diagonalPenalty;
//   
//   return bonus;
// };

// Change from const to function component and add proper export
export function GameCanvas({ onScoreUpdate, onGameOver, nextDirection, currentDirection, onTurnTaken, isPlaying, gameOver }: GameCanvasProps): JSX.Element {
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
        direction: currentDirection,
      nextDirection: '',
      nextX: gridToPixel(10),
      nextY: gridToPixel(16),
      visualX: gridToPixel(10),
        visualY: gridToPixel(16),
        currentMovingDirection: currentDirection
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
          direction: currentDirection,
          nextDirection: '',
          nextX: gridToPixel(10),
          nextY: gridToPixel(16),
          visualX: gridToPixel(10),
          visualY: gridToPixel(16),
          currentMovingDirection: currentDirection
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
  }, [isPlaying, currentDirection]);

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

  // Update Pokka's position and handle movement
  const updatePokka = useCallback((deltaTime: number) => {
    setGameState((prevState) => {
      const { pacman, maze } = prevState;
      const speed = (PACMAN_SPEED * 1.5 * deltaTime) / FRAME_TIME;
      let effectiveDirection = pacman.currentMovingDirection;

      // Handle direction changes
      if (nextDirection) {
        // Calculate current cell position
        const centerX = pacman.x + CELL_SIZE / 2;
        const centerY = pacman.y + CELL_SIZE / 2;
        const currentCellX = Math.floor(centerX / CELL_SIZE);
        const currentCellY = Math.floor(centerY / CELL_SIZE);
        
        // Calculate position within current cell
        const offsetX = centerX - (currentCellX * CELL_SIZE + CELL_SIZE / 2);
        const offsetY = centerY - (currentCellY * CELL_SIZE + CELL_SIZE / 2);
        
        // Check if we're close enough to the center of a cell to turn
        const isNearCenter = Math.abs(offsetX) <= speed && Math.abs(offsetY) <= speed;

        if (isNearCenter) {
          // Try the new direction
          let canMove = false;
          let nextX = currentCellX * CELL_SIZE;
          let nextY = currentCellY * CELL_SIZE;

          switch (nextDirection) {
            case 'right':
              nextX += CELL_SIZE;
              canMove = !maze[currentCellY][currentCellX + 1] || maze[currentCellY][currentCellX + 1] !== 1;
              break;
            case 'left':
              nextX -= CELL_SIZE;
              canMove = !maze[currentCellY][currentCellX - 1] || maze[currentCellY][currentCellX - 1] !== 1;
              break;
            case 'down':
              nextY += CELL_SIZE;
              canMove = !maze[currentCellY + 1][currentCellX] || maze[currentCellY + 1][currentCellX] !== 1;
              break;
            case 'up':
              nextY -= CELL_SIZE;
              canMove = !maze[currentCellY - 1][currentCellX] || maze[currentCellY - 1][currentCellX] !== 1;
              break;
          }

          if (canMove) {
            // Snap to grid center when changing direction
            pacman.x = currentCellX * CELL_SIZE;
            pacman.y = currentCellY * CELL_SIZE;
            effectiveDirection = nextDirection;
          }
        }
      }

      // Move in the current direction
      if (effectiveDirection) {
        let nextX = pacman.x;
        let nextY = pacman.y;
        const moveDistance = speed;

        switch (effectiveDirection) {
          case 'right':
            nextX += moveDistance;
            break;
          case 'left':
            nextX -= moveDistance;
            break;
          case 'down':
            nextY += moveDistance;
            break;
          case 'up':
            nextY -= moveDistance;
            break;
        }

        // Check if the next position is valid
        if (isValidPosition(nextX, nextY, maze)) {
          pacman.x = nextX;
          pacman.y = nextY;
          pacman.currentMovingDirection = effectiveDirection;
        } else {
          // If we hit a wall, try to align with the grid
          const currentCellX = Math.floor((pacman.x + CELL_SIZE / 2) / CELL_SIZE);
          const currentCellY = Math.floor((pacman.y + CELL_SIZE / 2) / CELL_SIZE);
          
          // Align to the center of the current cell
          pacman.x = currentCellX * CELL_SIZE;
          pacman.y = currentCellY * CELL_SIZE;
          
          effectiveDirection = '';
          pacman.currentMovingDirection = '';
        }
      }

      const scoreChange = handleCollisions(pacman.x, pacman.y);

      return {
        ...prevState,
        pacman: { ...pacman },
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
        
        const baseSpeed = ghost.baseSpeed * 1.5 * (deltaTime / FRAME_TIME);
        const speed = mode === 'frightened' ? 
          baseSpeed * GHOST_FRIGHTENED_SPEED_MULTIPLIER : 
          mode === 'chase' ? baseSpeed * 1.2 : baseSpeed;

        const centerX = ghost.x + CELL_SIZE / 2;
        const centerY = ghost.y + CELL_SIZE / 2;

        const offsetX = centerX % CELL_SIZE - CELL_SIZE / 2;
        const offsetY = centerY % CELL_SIZE - CELL_SIZE / 2;
        
        const atGridCenter = Math.abs(offsetX) < GRID_ALIGNMENT_THRESHOLD * 2 && 
                            Math.abs(offsetY) < GRID_ALIGNMENT_THRESHOLD * 2;

        if (atGridCenter || !ghost.direction || !isValidPosition(ghost.x, ghost.y, prevState.maze)) {
          let availableDirections = getAvailableDirections(ghost.x, ghost.y, prevState.maze);
          
          // Only try larger test distance if no directions are available
          if (availableDirections.length === 0) {
            availableDirections = getAvailableDirections(ghost.x, ghost.y, prevState.maze, CELL_SIZE * 0.5);
          }

          // Remove opposite direction unless it's the only option
          const opposite = getOppositeDirection(ghost.direction);
          if (availableDirections.length > 1 && ghost.direction) {
            availableDirections = availableDirections.filter(dir => dir !== opposite);
          }

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
              
              const distanceToTarget = calculateDistance(nextX, nextY, target.x, target.y);
              
              // Reduced random factor influence
              const randomFactor = mode === 'frightened' ? Math.random() * 2 : Math.random() * 0.2;
              
              // Increased direction persistence
              const directionBonus = dir === ghost.direction ? 1.5 : 0;
              
              // Simplified scoring
              return {
                direction: dir,
                score: -distanceToTarget + randomFactor + directionBonus
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

        // Simplified movement validation
        if (isValidPosition(nextX, nextY, prevState.maze)) {
          return { ...ghost, x: nextX, y: nextY, mode };
        }

        // Try sliding along walls
          const slideX = ghost.direction === 'up' || ghost.direction === 'down' ? nextX : ghost.x;
          const slideY = ghost.direction === 'left' || ghost.direction === 'right' ? nextY : ghost.y;
          
        if (isValidPosition(ghost.x, slideY, prevState.maze)) {
          return { ...ghost, y: slideY, mode };
        } else if (isValidPosition(slideX, ghost.y, prevState.maze)) {
          return { ...ghost, x: slideX, mode };
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

  // Add focus handling
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set tabIndex to make canvas focusable
    canvas.tabIndex = 0;

    // Focus canvas when game starts
    if (isPlaying) {
      canvas.focus();
    }

    // Handle keyboard events
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying || gameOver) return;

      // Prevent default behavior for game controls
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'w', 'a', 's', 'd'].includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }

      // Focus canvas if it's not focused
      if (document.activeElement !== canvas) {
        canvas.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isPlaying, gameOver]);

  return <Canvas ref={canvasRef} />;
}

// NO DUPLICATE CODE OR IMPORTS BELOW THIS LINE
