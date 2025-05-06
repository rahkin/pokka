import { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { soundManager } from '../utils/sounds';
import GhostBehavior from '../utils/ghostBehavior';
import { isValidPosition } from '../utils/collision';
import {
  CELL_SIZE,
  PACMAN_SPEED,
  GHOST_SPEED,
  POWER_PELLET_DURATION,
  POINT_VALUE,
  POWER_PELLET_VALUE,
  CHARACTER_SCALE,
  FRAME_TIME,
  GHOST_POINTS,
  MAZE_LAYOUT,
  GHOST_FRIGHTENED_SPEED_MULTIPLIER,
  GHOST_PERSONALITIES,
  GHOST_SPAWN_POSITIONS,
  GHOST_SCATTER_TARGETS,
  GHOST_EATEN_SPEED_MULTIPLIER,
  GHOST_HOUSE_EXIT_SPEED,
  GRID_ALIGNMENT_THRESHOLD
} from '../utils/gameConstants';

const CanvasWrapper = styled.div`
  width: 100%;
  aspect-ratio: 600 / 660;
  max-width: 600px;
  max-height: 660px;
  margin: 0 auto;
  position: relative;
  background: #000;
  border-radius: 8px;
  overflow: hidden;
`;

const Canvas = styled.canvas`
  width: 100%;
  height: 100%;
  display: block;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  background: #000;
  outline: none;
  touch-action: none;
`;

type GhostMode = 'chase' | 'scatter' | 'frightened' | 'eaten' | 'house' | 'exiting';

interface Ghost {
  x: number;
  y: number;
  direction: string;
  type: 'pink' | 'blue' | 'purple' | 'skin';
  mode: GhostMode;
  isReleased: boolean;
  behavior: GhostBehavior;
  targetX?: number;
  targetY?: number;
  baseSpeed?: number;
  consecutiveEats?: number;
  spawnDelay?: number;
  randomnessActiveUntil: number;
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

// Helper function to check if a position is in the ghost house
const isInGhostHouse = (x: number, y: number): boolean => {
  const centerX = x + CELL_SIZE / 2;
  const centerY = y + CELL_SIZE / 2;
  const gridX = Math.floor(centerX / CELL_SIZE);
  const gridY = Math.floor(centerY / CELL_SIZE);
  
  return gridX >= 8 && gridX <= 11 && gridY >= 9 && gridY <= 11;
};

// Helper to pick a random valid direction for a ghost
function getRandomValidDirection(x: number, y: number, maze: number[][]): string {
  const directions = [
    { dir: 'up', dx: 0, dy: -CELL_SIZE },
    { dir: 'down', dx: 0, dy: CELL_SIZE },
    { dir: 'left', dx: -CELL_SIZE, dy: 0 },
    { dir: 'right', dx: CELL_SIZE, dy: 0 }
  ];
  const valid = directions.filter(d =>
    isValidPosition(x + d.dx, y + d.dy, maze, true, true)
  );
  if (valid.length === 0) return 'up';
  return valid[Math.floor(Math.random() * valid.length)].dir;
}

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
  const ghostReleaseTimeoutsRef = useRef<Map<number, NodeJS.Timeout>>(new Map());

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
        const behavior = new GhostBehavior(type, GHOST_SCATTER_TARGETS[index], MAZE_LAYOUT);
        const x = gridToPixel(pos.x);
        const y = gridToPixel(pos.y);
        return {
          x,
          y,
          direction: getRandomValidDirection(x, y, MAZE_LAYOUT),
          type,
          mode: 'house' as GhostMode,
          isReleased: index === 0,
          behavior,
          randomnessActiveUntil: Date.now() + 5000 // 5 seconds of randomness
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
        ghosts: prev.ghosts.map((ghost, index) => {
          const x = gridToPixel(GHOST_SPAWN_POSITIONS[index].x);
          const y = gridToPixel(GHOST_SPAWN_POSITIONS[index].y);
          return {
            ...ghost,
            x,
            y,
            direction: getRandomValidDirection(x, y, MAZE_LAYOUT),
            mode: 'house' as GhostMode,
            isReleased: index === 0,
            randomnessActiveUntil: Date.now() + 5000
          };
        }),
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

    // Clear any previous timeouts
    ghostReleaseTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    ghostReleaseTimeoutsRef.current.clear();

    // Schedule ghost releases (except pink, which is released immediately)
    const ghostTypes: Array<'pink' | 'blue' | 'purple' | 'skin'> = ['pink', 'blue', 'purple', 'skin'];
    for (let index = 1; index < GHOST_SPAWN_POSITIONS.length; index++) {
      const type = ghostTypes[index];
      const spawnDelay = GHOST_PERSONALITIES[type].spawnDelay;
      
      const timeout = setTimeout(() => {
        setGameState(prev => {
          const newGhosts = prev.ghosts.map((ghost, i) => {
            if (i === index) {
              return {
                ...ghost,
                direction: 'up',
                mode: 'exiting' as GhostMode,
                isReleased: true,
                randomnessActiveUntil: Date.now() + 5000
              };
            }
            return ghost;
          });
          return { ...prev, ghosts: newGhosts };
        });
        ghostReleaseTimeoutsRef.current.delete(index);
      }, spawnDelay);
      ghostReleaseTimeoutsRef.current.set(index, timeout);
    }

    return () => {
      ghostReleaseTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
      ghostReleaseTimeoutsRef.current.clear();
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
      console.log("[handleCollisions] Game Over detected!"); // Add log
      gameOverRef.current = true;
      if (onGameOver) {
        console.log("[handleCollisions] Calling onGameOver callback..."); // Add log
        onGameOver(); // Actually call the callback
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
        direction: prevState.pacman.currentMovingDirection
      };
      const allGhostPositions = prevState.ghosts.map(g => ({ x: g.x, y: g.y, type: g.type }));
      const newGhosts = prevState.ghosts.map((ghost, idx) => {
        // Update ghost mode using behavior
        const { mode: newMode, changed } = ghost.behavior.updateMode(ghost);
        if (changed) {
          ghost.mode = newMode;
        }

        let speed = GHOST_SPEED;
        if (ghost.mode === 'frightened') speed *= GHOST_FRIGHTENED_SPEED_MULTIPLIER;
        if (ghost.mode === 'eaten') speed *= GHOST_EATEN_SPEED_MULTIPLIER;
        if (ghost.mode === 'house' || ghost.mode === 'exiting') speed = GHOST_HOUSE_EXIT_SPEED;
        speed *= deltaTime / FRAME_TIME;

        const currentCellX = pixelToGrid(ghost.x + CELL_SIZE / 2);
        const currentCellY = pixelToGrid(ghost.y + CELL_SIZE / 2);
        const offsetX = Math.abs((ghost.x + CELL_SIZE / 2) - (currentCellX * CELL_SIZE + CELL_SIZE / 2));
        const offsetY = Math.abs((ghost.y + CELL_SIZE / 2) - (currentCellY * CELL_SIZE + CELL_SIZE / 2));
        const isNearCenter = offsetX < GRID_ALIGNMENT_THRESHOLD && offsetY < GRID_ALIGNMENT_THRESHOLD;

        let directionChanged = false;

        // --- FORCE EXITING LOGIC (Restored) ---
        if (ghost.mode === 'exiting' && currentCellY > 8) {
          const doorX = 10 * CELL_SIZE;
          let nextX = doorX;
          let nextY = ghost.y - speed;
          // Snap to center of door column if not already there
          if (Math.abs(ghost.x - doorX) > 1) {
            nextX = doorX; // Snap X
          } else {
            nextX = ghost.x; // Keep current X if aligned
          }
          // If we're about to overshoot the door row, clamp to door row position
          if (nextY < 8 * CELL_SIZE) {
            nextY = 8 * CELL_SIZE;
          }
          // Directly return the updated ghost state for forced exit movement
          return { ...ghost, x: nextX, y: nextY, direction: 'up', mode: ghost.mode };
        }
        // --- END FORCE EXITING LOGIC ---

        // Calculate available directions if needed (at intersection or no direction)
        if (isNearCenter || !ghost.direction || !isValidPosition(ghost.x, ghost.y, prevState.maze)) {
          const availableDirections: string[] = [];
          if (currentCellY > 0 && prevState.maze[currentCellY - 1][currentCellX] !== 1) availableDirections.push('up');
          if (currentCellY < prevState.maze.length - 1 && prevState.maze[currentCellY + 1][currentCellX] !== 1) availableDirections.push('down');
          if (currentCellX > 0 && prevState.maze[currentCellY][currentCellX - 1] !== 1) availableDirections.push('left');
          if (currentCellX < prevState.maze[0].length - 1 && prevState.maze[currentCellY][currentCellX + 1] !== 1) availableDirections.push('right');
          const opposite = getOppositeDirection(ghost.direction);
          if (availableDirections.length > 1 && ghost.direction) {
            const filteredDirections = availableDirections.filter(dir => dir !== opposite);
            if (filteredDirections.length > 0) {
              availableDirections.length = 0;
              availableDirections.push(...filteredDirections);
            }
          }
          if (availableDirections.length > 0) {
            const ghostState = {
              position: { x: ghost.x, y: ghost.y },
              mode: ghost.mode,
              isReleased: ghost.isReleased,
              currentSpeed: speed,
              lastUpdateTime: Date.now()
            };
            const now = Date.now();
            let chosenDirection;
            if (ghost.randomnessActiveUntil && now < ghost.randomnessActiveUntil && Math.random() < 0.3) {
              // Pick a random valid direction (not the opposite of current)
              const randomDirs = availableDirections.filter(dir => dir !== getOppositeDirection(ghost.direction));
              chosenDirection = randomDirs.length > 0 ? randomDirs[Math.floor(Math.random() * randomDirs.length)] : availableDirections[Math.floor(Math.random() * availableDirections.length)];
            } else {
              // Usual targeting logic
              const target = ghost.behavior.getTargetPosition(ghostState, pacmanState, allGhostPositions, idx);
              const directionScores = availableDirections.map(dir => {
                let nextCellX = currentCellX;
                let nextCellY = currentCellY;
                switch (dir) {
                  case 'up': nextCellY--; break;
                  case 'down': nextCellY++; break;
                  case 'left': nextCellX--; break;
                  case 'right': nextCellX++; break;
                }
                const nextX = nextCellX * CELL_SIZE;
                const nextY = nextCellY * CELL_SIZE;
                if (ghost.mode !== 'eaten' && ghost.mode !== 'exiting' && ghost.isReleased && isInGhostHouse(nextX, nextY)) {
                   return { direction: dir, score: -Infinity };
                }
                const distanceToTarget = calculateDistance(nextX, nextY, target.x, target.y);
                const randomFactor = ghost.mode === 'frightened' ? Math.random() * 2 : Math.random() * 0.2;
                const directionBonus = dir === ghost.direction ? 2 : 0;
                return {
                  direction: dir,
                  score: -distanceToTarget + randomFactor + directionBonus
                };
              });
              const bestDirection = directionScores.reduce((best, current) => current.score > best.score ? current : best);
              chosenDirection = bestDirection.direction;
            }
            if (ghost.direction !== chosenDirection) {
              directionChanged = true;
            }
            ghost.direction = chosenDirection;
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
        if (directionChanged || !isValidPosition(nextX, nextY, prevState.maze, ghost.mode === 'exiting')) {
          nextX = currentCellX * CELL_SIZE;
          nextY = currentCellY * CELL_SIZE;
        }
        return { ...ghost, x: nextX, y: nextY, mode: ghost.mode };
      });
      return { ...prevState, ghosts: newGhosts };
    });
  }, []);

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

  // Add at the top, after other useEffects
  useEffect(() => {
    if (!isPlaying) return () => {};

    // Scatter/Chase mode intervals (in ms)
    const SCATTER_DURATION = 7000; // 7 seconds scatter
    const CHASE_DURATION = 20000;  // 20 seconds chase

    let mode: 'scatter' | 'chase' = 'scatter';
    let intervalId: NodeJS.Timeout;

    const switchMode = () => {
      mode = mode === 'scatter' ? 'chase' : 'scatter';
      setGameState(prev => ({
        ...prev,
        isScatterMode: mode === 'scatter',
        ghosts: prev.ghosts.map(g =>
          (g.mode !== 'frightened' && g.mode !== 'eaten' && g.mode !== 'house' && g.mode !== 'exiting')
            ? { ...g, mode }
            : g
        )
      }));
      // Schedule next switch
      intervalId = setTimeout(switchMode, mode === 'scatter' ? SCATTER_DURATION : CHASE_DURATION);
    };

    // Start the first interval
    intervalId = setTimeout(switchMode, SCATTER_DURATION);

    return () => {
      if (intervalId) clearTimeout(intervalId);
    };
  }, [isPlaying]);

  // Add after the scatter/chase mode useEffect
  useEffect(() => {
    setGameState(prev => ({
      ...prev,
      ghosts: prev.ghosts.map(g => {
        // Only update ghosts that are not eaten, house, or exiting
        if (g.mode === 'eaten' || g.mode === 'house' || g.mode === 'exiting') return g;
        if (prev.isPoweredUp) {
          // Enter frightened mode
          return { ...g, mode: 'frightened' };
        } else {
          // Return to current global mode (scatter or chase)
          return { ...g, mode: prev.isScatterMode ? 'scatter' : 'chase' };
        }
      })
    }));
  // Only run when isPoweredUp changes
  }, [gameState.isPoweredUp]);

  // Add a useEffect to set the canvas internal size to match the displayed size on mount and resize:
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      // Set internal pixel size to match display size for crisp rendering
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    return () => window.removeEventListener('resize', setCanvasSize);
  }, []);

  return (
    <CanvasWrapper>
      <Canvas ref={canvasRef} />
    </CanvasWrapper>
  );
}

// NO DUPLICATE CODE OR IMPORTS BELOW THIS LINE
