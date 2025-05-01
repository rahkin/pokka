import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { soundManager } from '../utils/sounds';
import { createPathfinder, getNextDirection } from '../utils/pathfinding';
import { createGhostStateMachine } from '../utils/ghostStateMachine';
import { interpret } from 'xstate';
import {
  CELL_SIZE,
  PACMAN_SPEED,
  GHOST_SPEED,
  POWER_PELLET_DURATION,
  POINT_VALUE,
  POWER_PELLET_VALUE,
  CHARACTER_SCALE,
  TARGET_FPS,
  FRAME_TIME,
  WALL_MARGIN,
  CHARACTER_SIZE,
  GHOST_SPEED_VARIATION,
  MIN_PATH_LENGTH,
  PATH_RECALCULATION_DELAY,
  GHOST_POINTS,
  GHOST_RELEASE_DELAYS,
  GHOST_CHASE_DURATION,
  GHOST_SCATTER_DURATION,
  MOVEMENT_STATES,
  MAZE_LAYOUT,
  GHOST_FRIGHTENED_SPEED_MULTIPLIER,
  GRID_ALIGNMENT_THRESHOLD
} from '../utils/gameConstants';

const Canvas = styled.canvas`
  width: 600px;
  height: 660px;
  display: block;
  image-rendering: pixelated;
  margin: 0 auto;
  background: #000;
`;

interface Position {
  x: number;
  y: number;
}

interface Ghost {
  x: number;
  y: number;
  type: string;
  direction: string;
  isReleased: boolean;
  baseSpeed: number;
  mode: GhostMode;
  stateMachine: any;  // We'll keep this as any since the exact type isn't critical for this fix
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
  };
  ghosts: Ghost[];
  maze: number[][];
  dots: Array<{ x: number; y: number }>;
  powerPellets: Array<{ x: number; y: number }>;
}

type GhostMode = 'chase' | 'scatter' | 'frightened' | 'eaten';

interface CollisionPoint {
  x: number;
  y: number;
}

// More collision points for better coverage
const COLLISION_POINTS: CollisionPoint[] = [
  // Center cross
  { x: 0.5, y: 0.5 },  // Center
  { x: 0.5, y: 0.3 },  // Top center
  { x: 0.5, y: 0.7 },  // Bottom center
  { x: 0.3, y: 0.5 },  // Left center
  { x: 0.7, y: 0.5 },  // Right center
  
  // Corners with slight inset
  { x: 0.3, y: 0.3 },  // Top-left
  { x: 0.7, y: 0.3 },  // Top-right
  { x: 0.3, y: 0.7 },  // Bottom-left
  { x: 0.7, y: 0.7 },  // Bottom-right
  
  // Additional diagonal points
  { x: 0.4, y: 0.4 },  // Top-left diagonal
  { x: 0.6, y: 0.4 },  // Top-right diagonal
  { x: 0.4, y: 0.6 },  // Bottom-left diagonal
  { x: 0.6, y: 0.6 }   // Bottom-right diagonal
];

interface GameCanvasProps {
  onScoreUpdate?: (score: number) => void;
  onGameOver?: () => void;
  currentDirection: string;
  isPlaying: boolean;
  gameOver?: boolean;
}

// Convert between grid and pixel coordinates
const gridToPixel = (grid: number) => grid * CELL_SIZE;
const pixelToGrid = (pixel: number) => Math.floor(pixel / CELL_SIZE);

// Helper function to check if a position is valid (no wall collision)
const isValidPosition = (x: number, y: number, maze: number[][]): boolean => {
  // First check if the center point is in bounds
  const centerGridX = Math.floor((x + CELL_SIZE / 2) / CELL_SIZE);
  const centerGridY = Math.floor((y + CELL_SIZE / 2) / CELL_SIZE);
  
  if (centerGridX < 0 || centerGridX >= maze[0].length || 
      centerGridY < 0 || centerGridY >= maze.length) {
    return false;
  }

  // Check all collision points
  return COLLISION_POINTS.every(point => {
    // Calculate absolute position of this collision point
    const absoluteX = x + point.x * CHARACTER_SIZE;
    const absoluteY = y + point.y * CHARACTER_SIZE;
    
    // Convert to grid coordinates
    const gridX = Math.floor(absoluteX / CELL_SIZE);
    const gridY = Math.floor(absoluteY / CELL_SIZE);
    
    // Check bounds
    if (gridX < 0 || gridX >= maze[0].length || 
        gridY < 0 || gridY >= maze.length) {
      return false;
    }
    
    // Check for wall collision with margin
    if (maze[gridY][gridX] === 1) {
      return false;
    }
    
    // Get position within cell
    const cellX = absoluteX % CELL_SIZE;
    const cellY = absoluteY % CELL_SIZE;
    
    // Check adjacent cells with improved margin checks
    const checkAdjacent = (x: number, y: number, margin: number) => {
      if (x < margin && gridX > 0 && maze[y][gridX - 1] === 1) return false;
      if (x > CELL_SIZE - margin && gridX < maze[0].length - 1 && maze[y][gridX + 1] === 1) return false;
      if (y < margin && gridY > 0 && maze[gridY - 1][x] === 1) return false;
      if (y > CELL_SIZE - margin && gridY < maze.length - 1 && maze[gridY + 1][x] === 1) return false;
      return true;
    };
    
    return checkAdjacent(gridX, gridY, WALL_MARGIN);
  });
};

// Helper function to get available directions at a position
const getAvailableDirections = (x: number, y: number, maze: number[][]): string[] => {
  const directions: string[] = [];
  const gridX = Math.floor(x / CELL_SIZE);
  const gridY = Math.floor(y / CELL_SIZE);
  
  // Check each direction
  if (gridY > 0 && maze[gridY - 1][gridX] !== 1) directions.push('up');
  if (gridY < maze.length - 1 && maze[gridY + 1][gridX] !== 1) directions.push('down');
  if (gridX > 0 && maze[gridY][gridX - 1] !== 1) directions.push('left');
  if (gridX < maze[0].length - 1 && maze[gridY][gridX + 1] !== 1) directions.push('right');
  
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

// Add these helper functions at the top with other constants
const clampGridPosition = (x: number, y: number, maze: number[][]) => {
  return {
    x: Math.max(0, Math.min(x, maze[0].length - 1)),
    y: Math.max(0, Math.min(y, maze.length - 1))
  };
};

const getValidTargetPosition = (x: number, y: number, maze: number[][]) => {
  const clamped = clampGridPosition(x, y, maze);
  // If the target position is a wall, find the nearest valid position
  if (maze[clamped.y][clamped.x] === 1) {
    // Check adjacent cells
    const directions = [
      { x: 0, y: -1 }, // up
      { x: 1, y: 0 },  // right
      { x: 0, y: 1 },  // down
      { x: -1, y: 0 }  // left
    ];
    
    for (const dir of directions) {
      const newX = clamped.x + dir.x;
      const newY = clamped.y + dir.y;
      if (newX >= 0 && newX < maze[0].length && 
          newY >= 0 && newY < maze.length && 
          maze[newY][newX] !== 1) {
        return { x: newX, y: newY };
      }
    }
  }
  return clamped;
};

// Helper function to calculate ghost target based on mode and type
const calculateGhostTarget = (ghost: Ghost, gameState: GameState, mode: GhostMode): Position => {
  const pacmanGridX = Math.floor(gameState.pacman.x / CELL_SIZE);
  const pacmanGridY = Math.floor(gameState.pacman.y / CELL_SIZE);
  const gridX = Math.floor(ghost.x / CELL_SIZE);
  const gridY = Math.floor(ghost.y / CELL_SIZE);

  if (mode === 'frightened') {
    // In frightened mode, move randomly but avoid Pokka
    const distanceToPokka = Math.abs(gridX - pacmanGridX) + Math.abs(gridY - pacmanGridY);
    if (distanceToPokka < 4) {
      // Try to move away from Pokka
      return {
        x: gridX + (gridX - pacmanGridX),
        y: gridY + (gridY - pacmanGridY)
      };
    }
    // Random movement
    return {
      x: Math.floor(Math.random() * gameState.maze[0].length),
      y: Math.floor(Math.random() * gameState.maze.length)
    };
  }

  if (mode === 'chase') {
    switch (ghost.type) {
      case 'pink': // Ambush ahead of Pokka
        const offset = 4;
        switch (gameState.pacman.direction) {
          case 'up':
            return {
              x: pacmanGridX - offset,
              y: Math.max(0, pacmanGridY - offset)
            };
          case 'down':
            return {
              x: pacmanGridX + offset,
              y: Math.min(gameState.maze.length - 1, pacmanGridY + offset)
            };
          case 'left':
            return {
              x: Math.max(0, pacmanGridX - offset),
              y: pacmanGridY - offset
            };
          case 'right':
            return {
              x: Math.min(gameState.maze[0].length - 1, pacmanGridX + offset),
              y: pacmanGridY + offset
            };
          default:
            return { x: pacmanGridX, y: pacmanGridY };
        }

      case 'blue': // Flank using red ghost position
        const redGhost = gameState.ghosts[0];
        const redGridX = Math.floor(redGhost.x / CELL_SIZE);
        const redGridY = Math.floor(redGhost.y / CELL_SIZE);
        // Position opposite to red ghost relative to Pokka
        return {
          x: pacmanGridX + (pacmanGridX - redGridX),
          y: pacmanGridY + (pacmanGridY - redGridY)
        };

      case 'purple': // Patrol and intercept
        const distanceToTarget = Math.abs(gridX - pacmanGridX) + Math.abs(gridY - pacmanGridY);
        if (distanceToTarget < 6) {
          // Close enough to chase directly
          return { x: pacmanGridX, y: pacmanGridY };
        }
        // Patrol between corners to cut off escape
        const time = Date.now() / 1000;
        const patrolPoint = Math.floor(time % 4);
        switch (patrolPoint) {
          case 0: return { x: 0, y: 0 };
          case 1: return { x: gameState.maze[0].length - 1, y: 0 };
          case 2: return { x: 0, y: gameState.maze.length - 1 };
          case 3: return { x: gameState.maze[0].length - 1, y: gameState.maze.length - 1 };
          default: return { x: pacmanGridX, y: pacmanGridY };
        }

      default: // Direct chase with prediction
        // Predict Pokka's future position
        return {
          x: pacmanGridX + (gameState.pacman.direction === 'right' ? 2 : 
                           gameState.pacman.direction === 'left' ? -2 : 0),
          y: pacmanGridY + (gameState.pacman.direction === 'down' ? 2 : 
                           gameState.pacman.direction === 'up' ? -2 : 0)
        };
    }
  }

  // Scatter mode - patrol corners but maintain aggression
  const cornerIndex = ['pink', 'blue', 'purple', 'skin'].indexOf(ghost.type);
  const time = Date.now() / 1000;
  // Periodically switch between corner and chase
  const shouldChase = (time % 5) < 3; // Chase for 3 seconds, scatter for 2
  
  if (shouldChase) {
    return { x: pacmanGridX, y: pacmanGridY };
  }
  
  switch (cornerIndex) {
    case 0: return { x: 0, y: 0 };
    case 1: return { x: gameState.maze[0].length - 1, y: 0 };
    case 2: return { x: 0, y: gameState.maze.length - 1 };
    default: return { x: gameState.maze[0].length - 1, y: gameState.maze.length - 1 };
  }
};

// Change from const to function component and add proper export
export function GameCanvas({ onScoreUpdate, onGameOver, currentDirection, isPlaying, gameOver }: GameCanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const assetsRef = useRef<any>(null);
  const powerUpTimeoutRef = useRef<NodeJS.Timeout>();
  const pathfinderRef = useRef(createPathfinder(MAZE_LAYOUT));
  const gameOverRef = useRef(false);
  const scoreRef = useRef(0);
  const animationFrameRef = useRef<number>();

  // Initialize game state
  const [gameState, setGameState] = useState<GameState>(() => {
    const scatterTargets = [
      { x: 0, y: 0 },
      { x: MAZE_LAYOUT[0].length - 1, y: 0 },
      { x: 0, y: MAZE_LAYOUT.length - 1 },
      { x: MAZE_LAYOUT[0].length - 1, y: MAZE_LAYOUT.length - 1 }
    ];

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
      visualY: gridToPixel(16)
    },
    ghosts: [
        { 
          x: gridToPixel(8), 
          y: gridToPixel(10), 
          direction: 'right', 
          type: 'pink', 
          mode: 'scatter', 
          targetX: 0, 
          targetY: 0, 
          isReleased: true,
          stateMachine: interpret(createGhostStateMachine(scatterTargets[0])).start(),
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0
        },
        { 
          x: gridToPixel(9), 
          y: gridToPixel(10), 
          direction: 'left', 
          type: 'blue', 
          mode: 'scatter', 
          targetX: MAZE_LAYOUT[0].length - 1, 
          targetY: 0, 
          isReleased: false,
          stateMachine: interpret(createGhostStateMachine(scatterTargets[1])).start(),
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0
        },
        { 
          x: gridToPixel(10), 
          y: gridToPixel(10), 
          direction: 'up', 
          type: 'purple', 
          mode: 'scatter', 
          targetX: 0, 
          targetY: MAZE_LAYOUT.length - 1, 
          isReleased: false,
          stateMachine: interpret(createGhostStateMachine(scatterTargets[2])).start(),
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0
        },
        { 
          x: gridToPixel(11), 
          y: gridToPixel(10), 
          direction: 'right', 
          type: 'skin', 
          mode: 'scatter', 
          targetX: MAZE_LAYOUT[0].length - 1, 
          targetY: MAZE_LAYOUT.length - 1, 
          isReleased: false,
          stateMachine: interpret(createGhostStateMachine(scatterTargets[3])).start(),
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0
        }
    ],
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
          visualY: gridToPixel(16)
        },
        ghosts: prev.ghosts.map((ghost, index) => ({
          ...ghost,
          x: gridToPixel(8 + index),
          y: gridToPixel(10),
          direction: index === 0 ? 'right' : index === 1 ? 'left' : index === 2 ? 'up' : 'right',
          mode: 'scatter',
          isReleased: index === 0,
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0
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
              mode: 'chase',
              y: gridToPixel(8),
              isReleased: true
            };
          }
          return ghost;
        })
      }));
    };

    // Release ghosts at staggered intervals
    GHOST_RELEASE_DELAYS.forEach((delay, index) => {
      setTimeout(() => releaseGhost(index), delay);
    });

    return () => {
      GHOST_RELEASE_DELAYS.forEach((_, index) => {
        clearTimeout(index);
      });
    };
  }, [isPlaying]);

  // Update the handleCollisions function
  const handleCollisions = useCallback((newX: number, newY: number) => {
    const centerX = newX + CELL_SIZE / 2;
    const centerY = newY + CELL_SIZE / 2;
    let scoreChange = 0;
    let newDots = [...gameState.dots];
    let newPellets = [...gameState.powerPellets];
    let isPoweredUp = gameState.isPoweredUp;
    let consecutiveEats = 0;

    // Check for dot collection
    const dotIndex = newDots.findIndex(dot =>
      Math.abs(dot.x + CELL_SIZE / 2 - centerX) < CELL_SIZE / 2 &&
      Math.abs(dot.y + CELL_SIZE / 2 - centerY) < CELL_SIZE / 2
    );

    if (dotIndex !== -1) {
      newDots.splice(dotIndex, 1);
      scoreChange += POINT_VALUE;
      soundManager.play('eat');
    }

    // Check for power pellet collection
    const pelletIndex = newPellets.findIndex(pellet =>
      Math.abs(pellet.x + CELL_SIZE / 2 - centerX) < CELL_SIZE / 2 &&
      Math.abs(pellet.y + CELL_SIZE / 2 - centerY) < CELL_SIZE / 2
    );

    if (pelletIndex !== -1) {
      newPellets.splice(pelletIndex, 1);
      scoreChange += POWER_PELLET_VALUE;
      isPoweredUp = true;
      soundManager.play('powerPellet');

      if (powerUpTimeoutRef.current) {
        clearTimeout(powerUpTimeoutRef.current);
      }

      powerUpTimeoutRef.current = setTimeout(() => {
        setGameState(prev => ({ ...prev, isPoweredUp: false }));
      }, POWER_PELLET_DURATION);
    }

    // Check for ghost collisions with increasing points
    gameState.ghosts.forEach((ghost, index) => {
      const collisionResult = checkGhostCollision(newX, newY, ghost, isPoweredUp);
      
      if (collisionResult === 'death') {
        soundManager.play('death');
        gameOverRef.current = true;
        if (onGameOver) {
          onGameOver();
        }
      } else if (collisionResult === 'eatGhost') {
        soundManager.play('eatGhost');
        const points = GHOST_POINTS[Math.min(consecutiveEats, GHOST_POINTS.length - 1)];
        scoreChange += points;
        consecutiveEats++;
        
        setGameState(prev => ({
          ...prev,
          ghosts: prev.ghosts.map((g, i) => 
            i === index 
              ? { 
                  ...g, 
                  x: gridToPixel(10), 
                  y: gridToPixel(10),
                  consecutiveEats: 0
                }
              : g
          )
        }));
      }
    });

    // Check for game completion
    if (newDots.length === 0 && newPellets.length === 0) {
      soundManager.play('win');
      gameOverRef.current = true;
      if (onGameOver) {
        onGameOver();
      }
    }

    if (scoreChange > 0 || newDots.length !== gameState.dots.length || newPellets.length !== gameState.powerPellets.length) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + scoreChange,
        dots: newDots,
        powerPellets: newPellets,
        isPoweredUp
      }));
    }

    return scoreChange;
  }, [gameState, onGameOver]);

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
      const { pacman } = prevState;
      const speed = (PACMAN_SPEED * deltaTime) / FRAME_TIME;
      const gridX = Math.floor(pacman.x / CELL_SIZE);
      const gridY = Math.floor(pacman.y / CELL_SIZE);
      
      // Calculate next position based on current direction
      let nextX = pacman.x;
      let nextY = pacman.y;
      
      switch (currentDirection) {
        case 'right': nextX += speed; break;
        case 'left': nextX -= speed; break;
        case 'down': nextY += speed; break;
        case 'up': nextY -= speed; break;
      }
      
      // Check if next position is valid
      if (isValidPosition(nextX, nextY, prevState.maze)) {
        pacman.x = nextX;
        pacman.y = nextY;
        pacman.direction = currentDirection;
      } else {
        // Try to slide along walls when hitting them at an angle
        const slideX = currentDirection === 'up' || currentDirection === 'down' ? nextX : pacman.x;
        const slideY = currentDirection === 'left' || currentDirection === 'right' ? nextY : pacman.y;
        
        if (isValidPosition(pacman.x, slideY, prevState.maze)) {
          pacman.y = slideY;
        } else if (isValidPosition(slideX, pacman.y, prevState.maze)) {
          pacman.x = slideX;
        }
      }
      
      // Handle collisions with dots, power pellets, and ghosts
      handleCollisions(pacman.x, pacman.y);
      
      return { ...prevState, pacman };
    });
  }, [currentDirection, handleCollisions]);

  // Update ghosts with improved movement
  const updateGhosts = useCallback((deltaTime: number) => {
    setGameState(prevState => {
      const newGhosts = prevState.ghosts.map(ghost => {
        if (!ghost.isReleased) return ghost;

        const currentState = ghost.stateMachine.getSnapshot();
        const mode = currentState.context.mode;
        const baseSpeed = ghost.baseSpeed * (deltaTime / FRAME_TIME);
        const speed = mode === 'frightened' ? 
          baseSpeed * GHOST_FRIGHTENED_SPEED_MULTIPLIER : 
          baseSpeed * (mode === 'chase' ? 1.1 : 0.9);

        // Get current grid position
        const centerX = ghost.x + CELL_SIZE / 2;
        const centerY = ghost.y + CELL_SIZE / 2;
        const gridX = Math.floor(centerX / CELL_SIZE);
        const gridY = Math.floor(centerY / CELL_SIZE);

        // Calculate offset from grid center
        const offsetX = centerX % CELL_SIZE - CELL_SIZE / 2;
        const offsetY = centerY % CELL_SIZE - CELL_SIZE / 2;
        
        // Check if we're close enough to grid center to make a decision
        const atGridCenter = Math.abs(offsetX) < GRID_ALIGNMENT_THRESHOLD && 
                            Math.abs(offsetY) < GRID_ALIGNMENT_THRESHOLD;

        // If at grid center or no valid direction, choose new direction
        if (atGridCenter || !ghost.direction || !isValidPosition(ghost.x + offsetX, ghost.y + offsetY, prevState.maze)) {
          // Snap to grid when at center
          if (atGridCenter) {
            ghost.x = gridX * CELL_SIZE;
            ghost.y = gridY * CELL_SIZE;
          }

          // Get available directions excluding the opposite of current direction
          const availableDirections = getAvailableDirections(ghost.x, ghost.y, prevState.maze)
            .filter(dir => dir !== getOppositeDirection(ghost.direction));

          if (availableDirections.length > 0) {
            // Calculate target based on mode and ghost type
            const target = calculateGhostTarget(ghost, prevState, mode);
            
            // Score each direction
            const directionScores = availableDirections.map(dir => {
              let nextX = gridX;
              let nextY = gridY;
              switch (dir) {
                case 'up': nextY--; break;
                case 'down': nextY++; break;
                case 'left': nextX--; break;
                case 'right': nextX++; break;
              }
              
              const distanceToTarget = Math.abs(nextX - target.x) + Math.abs(nextY - target.y);
              const randomFactor = mode === 'frightened' ? Math.random() * 3 : Math.random() * 0.5;
              return {
                direction: dir,
                score: -distanceToTarget + randomFactor
              };
            });

            // Choose best direction
            const bestDirection = directionScores.reduce((best, current) => 
              current.score > best.score ? current : best
            );

            ghost.direction = bestDirection.direction;
          } else if (getAvailableDirections(ghost.x, ghost.y, prevState.maze).length > 0) {
            // If no forward directions available, allow reverse
            ghost.direction = getAvailableDirections(ghost.x, ghost.y, prevState.maze)[0];
          }
        }

        // Move in current direction with improved position checking
        let nextX = ghost.x;
        let nextY = ghost.y;
        
        switch (ghost.direction) {
          case 'up': nextY -= speed; break;
          case 'down': nextY += speed; break;
          case 'left': nextX -= speed; break;
          case 'right': nextX += speed; break;
        }

        // Validate next position and apply movement
        if (isValidPosition(nextX, nextY, prevState.maze)) {
          // Smooth out grid alignment when moving
          if (Math.abs(offsetX) < speed && ghost.direction !== 'left' && ghost.direction !== 'right') {
            nextX = gridX * CELL_SIZE;
          }
          if (Math.abs(offsetY) < speed && ghost.direction !== 'up' && ghost.direction !== 'down') {
            nextY = gridY * CELL_SIZE;
          }
          
          return { ...ghost, x: nextX, y: nextY, mode };
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
      const newGhosts = prevState.ghosts.map(ghost => {
        if (!ghost.isReleased) return ghost;

        // Update chase target to Pacman's position
        ghost.stateMachine.send({
          type: 'UPDATE_CHASE_TARGET',
          target: {
            x: pixelToGrid(prevState.pacman.x),
            y: pixelToGrid(prevState.pacman.y)
          }
        });

        return ghost;
      });

      return {
        ...prevState,
        ghosts: newGhosts
      };
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
    if (!isPlaying) return;

    let lastTime = performance.now();
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;
        lastTime = currentTime;

      // Update game state
      updatePokka(deltaTime);
      updateGhosts(deltaTime);

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
  }, [isPlaying, draw, updatePokka, updateGhosts, onGameOver, onScoreUpdate]);

  // Ghost mode switching effect
  useEffect(() => {
    let modeTimer: NodeJS.Timeout;

    const switchMode = () => {
      setGameState(prev => {
        const newGhosts = prev.ghosts.map(ghost => ({
          ...ghost,
          mode: prev.isPoweredUp ? ('frightened' as GhostMode) :
                prev.isScatterMode ? ('scatter' as GhostMode) : ('chase' as GhostMode)
        }));
        return {
          ...prev,
          isScatterMode: !prev.isScatterMode,
          ghosts: newGhosts
        };
      });

      modeTimer = setTimeout(
        switchMode,
        gameState.isScatterMode ? GHOST_SCATTER_DURATION : GHOST_CHASE_DURATION
      );
    };

    switchMode();

    return () => {
      if (modeTimer) clearTimeout(modeTimer);
    };
  }, []);

  // Helper function to get opposite direction
  const getOppositeDirection = (direction: string): string => {
    switch (direction) {
      case 'up': return 'down';
      case 'down': return 'up';
      case 'left': return 'right';
      case 'right': return 'left';
      default: return direction;
    }
  };

  return <Canvas ref={canvasRef} />;
} 