import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { soundManager } from '../utils/sounds';
import { createPathfinder, getNextDirection } from '../utils/pathfinding';
import { createGhostStateMachine } from '../utils/ghostStateMachine';
import { interpret } from 'xstate';

const Canvas = styled.canvas`
  width: 600px;
  height: 660px;
  display: block;
  image-rendering: pixelated;
  margin: 0 auto;
  background: #000;
`;

// Game Constants
const CELL_SIZE = 30;
const PACMAN_SPEED = 8;
const GHOST_SPEED = 6;
const POWER_PELLET_DURATION = 10000;
const POINT_VALUE = 10;
const POWER_PELLET_VALUE = 50;
const CHARACTER_SCALE = 1.0;
const TARGET_FPS = 60;
const FRAME_TIME = 1000 / TARGET_FPS;
const WALL_MARGIN = 2; // Margin to keep characters away from walls
const GHOST_SPEED_VARIATION = 0.2; // Random speed variation between ghosts
const MIN_PATH_LENGTH = 3; // Minimum path length before recalculating
const PATH_RECALCULATION_DELAY = 1000; // Minimum time between path recalculations
const GHOST_POINTS = [200, 400, 800, 1600]; // Increasing points for consecutive ghost eats
const GHOST_RELEASE_DELAYS = [0, 2000, 4000, 6000]; // Staggered ghost release
const GHOST_CHASE_DURATION = 20000; // 20 seconds chase mode
const GHOST_SCATTER_DURATION = 7000; // 7 seconds scatter mode

// Maze layout (1 = wall, 0 = path, 2 = dot, 3 = power pellet)
const MAZE_LAYOUT = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
  [1, 3, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 3, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 1, 2, 2, 2, 1, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1],
  [0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0],
  [1, 1, 1, 1, 2, 1, 2, 1, 1, 0, 0, 1, 1, 2, 1, 2, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
  [0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 0, 0, 0],
  [1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 2, 1, 1, 2, 1],
  [1, 3, 2, 1, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 1, 2, 3, 1],
  [1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1],
  [1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1],
  [1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

type GhostMode = 'scatter' | 'chase' | 'frightened';

interface GameCanvasProps {
  onScoreUpdate?: (score: number) => void;
  onGameOver?: () => void;
  currentDirection: string;
  isPlaying: boolean;
  gameOver?: boolean;
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
  ghosts: Array<{
    x: number;
    y: number;
    direction: string;
    type: string;
    mode: 'scatter' | 'chase' | 'frightened' | 'eaten';
    targetX: number;
    targetY: number;
    isReleased: boolean;
    stateMachine: any;
    path: number[][];
    lastPathUpdate: number;
    baseSpeed: number;
    consecutiveEats: number;
  }>;
  maze: number[][];
  dots: Array<{ x: number; y: number }>;
  powerPellets: Array<{ x: number; y: number }>;
}

// Convert between grid and pixel coordinates
const gridToPixel = (grid: number) => grid * CELL_SIZE;
const pixelToGrid = (pixel: number) => Math.floor(pixel / CELL_SIZE);

const getAvailableDirections = (x: number, y: number, maze: number[][]) => {
  const directions: string[] = [];
  const currentGridX = Math.floor(x / CELL_SIZE);
  const currentGridY = Math.floor(y / CELL_SIZE);
  
  // Check if we're close enough to the grid center to consider changing direction
  const currentCellOffsetX = x % CELL_SIZE;
  const currentCellOffsetY = y % CELL_SIZE;
  const isCentered = Math.abs(currentCellOffsetX - CELL_SIZE / 2) < WALL_MARGIN * 2 && 
                     Math.abs(currentCellOffsetY - CELL_SIZE / 2) < WALL_MARGIN * 2;

  if (!isCentered) {
    return directions;
  }

  const positions = {
    up: { x: currentGridX, y: currentGridY - 1 },
    down: { x: currentGridX, y: currentGridY + 1 },
    left: { x: currentGridX - 1, y: currentGridY },
    right: { x: currentGridX + 1, y: currentGridY }
  };

  Object.entries(positions).forEach(([direction, pos]) => {
    if (pos.x >= 0 && pos.x < maze[0].length && 
        pos.y >= 0 && pos.y < maze.length && 
        maze[pos.y][pos.x] !== 1) {
      // Additional check to ensure the entire ghost can fit through the passage
      const testX = pos.x * CELL_SIZE + CELL_SIZE / 2;
      const testY = pos.y * CELL_SIZE + CELL_SIZE / 2;
      if (isValidGhostPosition(testX - CELL_SIZE / 2, testY - CELL_SIZE / 2, maze)) {
        directions.push(direction);
      }
    }
  });

  return directions;
};

const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

// Helper to check if a ghost's position is valid (not a wall)
const isValidGhostPosition = (x: number, y: number, maze: number[][]) => {
  // Check multiple points around the ghost to prevent wall clipping
  const points = [
    { x: x + CELL_SIZE * 0.3, y: y + CELL_SIZE * 0.3 },
    { x: x + CELL_SIZE * 0.7, y: y + CELL_SIZE * 0.3 },
    { x: x + CELL_SIZE * 0.3, y: y + CELL_SIZE * 0.7 },
    { x: x + CELL_SIZE * 0.7, y: y + CELL_SIZE * 0.7 },
    { x: x + CELL_SIZE * 0.5, y: y + CELL_SIZE * 0.5 }
  ];

  return points.every(point => {
    const gridX = Math.floor(point.x / CELL_SIZE);
    const gridY = Math.floor(point.y / CELL_SIZE);
    return gridX >= 0 && gridX < maze[0].length &&
           gridY >= 0 && gridY < maze.length &&
           maze[gridY][gridX] !== 1;
  });
};

// Helper to get the opposite direction
const getOppositeDirection = (direction: string): string => {
  switch (direction) {
    case 'up': return 'down';
    case 'down': return 'up';
    case 'left': return 'right';
    case 'right': return 'left';
    default: return '';
  }
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

export const GameCanvas: React.FC<GameCanvasProps> = ({
  onScoreUpdate,
  onGameOver,
  currentDirection,
  isPlaying,
  gameOver
}) => {
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
      const cellOffsetX = pacman.x % CELL_SIZE;
      const cellOffsetY = pacman.y % CELL_SIZE;

      // Check if we're at a grid intersection (allowing for some margin)
      const isAtIntersection = 
        (Math.abs(cellOffsetX) < speed || Math.abs(cellOffsetX - CELL_SIZE) < speed) &&
        (Math.abs(cellOffsetY) < speed || Math.abs(cellOffsetY - CELL_SIZE) < speed);

      // If at intersection, check if we can change direction
      if (isAtIntersection && currentDirection !== pacman.direction) {
        let testX = gridX * CELL_SIZE;
        let testY = gridY * CELL_SIZE;
        
        // Calculate test position in next direction
        switch (currentDirection) {
          case 'right': testX += CELL_SIZE; break;
          case 'left': testX -= CELL_SIZE; break;
          case 'down': testY += CELL_SIZE; break;
          case 'up': testY -= CELL_SIZE; break;
        }
        
        // If we can move in the next direction, change direction
        if (isValidPosition(testX, testY, prevState.maze)) {
          // Align to grid when changing direction
          pacman.x = gridX * CELL_SIZE;
          pacman.y = gridY * CELL_SIZE;
          pacman.direction = currentDirection;
          pacman.visualX = pacman.x;
          pacman.visualY = pacman.y;
        }
      }

      // Continue in current direction if possible
      if (pacman.direction) {
        let nextX = pacman.x;
        let nextY = pacman.y;
        
        switch (pacman.direction) {
          case 'right': nextX += speed; break;
          case 'left': nextX -= speed; break;
          case 'down': nextY += speed; break;
          case 'up': nextY -= speed; break;
        }

        if (isValidPosition(nextX, nextY, prevState.maze)) {
          pacman.x = nextX;
          pacman.y = nextY;
          pacman.visualX = nextX;
          pacman.visualY = nextY;
          handleCollisions(nextX, nextY);
        } else {
          // Align to grid when hitting a wall
          const alignedX = Math.round(pacman.x / CELL_SIZE) * CELL_SIZE;
          const alignedY = Math.round(pacman.y / CELL_SIZE) * CELL_SIZE;
          
          // Check if we're moving horizontally or vertically
          const isMovingHorizontally = pacman.direction === 'left' || pacman.direction === 'right';
          const isMovingVertically = pacman.direction === 'up' || pacman.direction === 'down';
          
          // Only align in the direction we're moving
          if (isMovingHorizontally && Math.abs(pacman.x - alignedX) < speed) {
            pacman.x = alignedX;
            pacman.visualX = alignedX;
          }
          if (isMovingVertically && Math.abs(pacman.y - alignedY) < speed) {
            pacman.y = alignedY;
            pacman.visualY = alignedY;
          }
        }
      }

      return { ...prevState, pacman };
    });
  }, [currentDirection, handleCollisions]);

  // Update ghosts
  const updateGhosts = useCallback((deltaTime: number) => {
    setGameState(prevState => {
      const newGhosts = prevState.ghosts.map(ghost => {
        if (!ghost.isReleased) return ghost;

        // Update ghost state machine
        const currentState = ghost.stateMachine.getSnapshot();
        const mode = currentState.context.mode;
        const target = currentState.context.currentTarget;
        const currentTime = Date.now();

        // Calculate target position based on ghost type and mode
        let targetPosition = { x: target.x, y: target.y };
        if (mode === 'chase') {
          switch (ghost.type) {
            case 'pink':
              // Target 4 cells ahead of Pacman
              targetPosition = {
                x: pixelToGrid(prevState.pacman.x) + (prevState.pacman.direction === 'right' ? 4 : 
                   prevState.pacman.direction === 'left' ? -4 : 0),
                y: pixelToGrid(prevState.pacman.y) + (prevState.pacman.direction === 'down' ? 4 : 
                   prevState.pacman.direction === 'up' ? -4 : 0)
              };
              break;
            case 'blue':
              // Target position based on red ghost and Pacman
              const redGhost = prevState.ghosts[0];
              const vectorX = prevState.pacman.x - redGhost.x;
              const vectorY = prevState.pacman.y - redGhost.y;
              targetPosition = {
                x: pixelToGrid(prevState.pacman.x + vectorX),
                y: pixelToGrid(prevState.pacman.y + vectorY)
              };
              break;
            case 'purple':
              // Target position 2 cells ahead of Pacman
              targetPosition = {
                x: pixelToGrid(prevState.pacman.x) + (prevState.pacman.direction === 'right' ? 2 : 
                   prevState.pacman.direction === 'left' ? -2 : 0),
                y: pixelToGrid(prevState.pacman.y) + (prevState.pacman.direction === 'down' ? 2 : 
                   prevState.pacman.direction === 'up' ? -2 : 0)
              };
              break;
            case 'skin':
              // Directly target Pacman
              targetPosition = {
                x: pixelToGrid(prevState.pacman.x),
                y: pixelToGrid(prevState.pacman.y)
              };
              break;
          }
        }

        // Ensure target position is valid
        targetPosition = getValidTargetPosition(targetPosition.x, targetPosition.y, prevState.maze);

        // Check if we're at a grid intersection
        const gridX = Math.floor(ghost.x / CELL_SIZE);
        const gridY = Math.floor(ghost.y / CELL_SIZE);
        const cellOffsetX = ghost.x % CELL_SIZE;
        const cellOffsetY = ghost.y % CELL_SIZE;
        const speed = ghost.baseSpeed * (deltaTime / FRAME_TIME);
        const isAtIntersection = 
          (Math.abs(cellOffsetX) < speed || Math.abs(cellOffsetX - CELL_SIZE) < speed) &&
          (Math.abs(cellOffsetY) < speed || Math.abs(cellOffsetY - CELL_SIZE) < speed);

        // Only recalculate path if needed
        const needsNewPath = !ghost.path.length || 
                           (isAtIntersection && 
                            currentTime - ghost.lastPathUpdate > PATH_RECALCULATION_DELAY &&
                            ghost.path.length < MIN_PATH_LENGTH);

        if (needsNewPath) {
          try {
            const path = pathfinderRef.current.findPath(
              gridX,
              gridY,
              targetPosition.x,
              targetPosition.y
            );

            if (path && path.length > 0) {
              const nextDirection = getNextDirection(
                gridX,
                gridY,
                path
              );

              if (nextDirection) {
                // Align to grid when changing direction
                ghost.x = gridX * CELL_SIZE;
                ghost.y = gridY * CELL_SIZE;
                ghost.direction = nextDirection;
                ghost.path = path;
                ghost.lastPathUpdate = currentTime;
              }
            }
          } catch (error) {
            console.warn('Pathfinding error:', error);
          }
        }

        // Calculate next position with mode-based speed
        let nextX = ghost.x;
        let nextY = ghost.y;
        const modeSpeed = mode === 'frightened' ? 
          speed * 0.8 : 
          speed * (mode === 'chase' ? 1.1 : 0.9);

        // Move in current direction first
        switch (ghost.direction) {
          case 'up': nextY -= modeSpeed; break;
          case 'down': nextY += modeSpeed; break;
          case 'left': nextX -= modeSpeed; break;
          case 'right': nextX += modeSpeed; break;
        }

        // Check if the next position is valid
        if (isValidPosition(nextX, nextY, prevState.maze)) {
          // Check if we're at an intersection for direction changes
          const currentGridX = Math.floor(nextX / CELL_SIZE);
          const currentGridY = Math.floor(nextY / CELL_SIZE);
          const currentCellOffsetX = nextX % CELL_SIZE;
          const currentCellOffsetY = nextY % CELL_SIZE;
          
          const isNearIntersection = 
            Math.abs(currentCellOffsetX - CELL_SIZE / 2) < modeSpeed && 
            Math.abs(currentCellOffsetY - CELL_SIZE / 2) < modeSpeed;

          if (isNearIntersection) {
            // Align to grid center
            nextX = currentGridX * CELL_SIZE + CELL_SIZE / 2;
            nextY = currentGridY * CELL_SIZE + CELL_SIZE / 2;
            
            // Get available directions excluding the opposite of current direction
            const availableDirections = getAvailableDirections(nextX, nextY, prevState.maze)
              .filter(dir => dir !== getOppositeDirection(ghost.direction));

            if (availableDirections.length > 0) {
              // Choose direction that gets us closer to target
              const bestDirection = availableDirections.reduce((best, dir) => {
                let testX = currentGridX;
                let testY = currentGridY;
                switch (dir) {
                  case 'up': testY--; break;
                  case 'down': testY++; break;
                  case 'left': testX--; break;
                  case 'right': testX++; break;
                }
                const distance = calculateDistance(
                  testX * CELL_SIZE + CELL_SIZE / 2,
                  testY * CELL_SIZE + CELL_SIZE / 2,
                  targetPosition.x * CELL_SIZE + CELL_SIZE / 2,
                  targetPosition.y * CELL_SIZE + CELL_SIZE / 2
                );
                return distance < best.distance ? { direction: dir, distance } : best;
              }, { direction: availableDirections[0], distance: Infinity });

              ghost.direction = bestDirection.direction;
            }
          }

          return {
            ...ghost,
            x: nextX,
            y: nextY,
            mode
          };
        }

        // If next position is invalid, align with current grid position
        const currentGridX = Math.floor(ghost.x / CELL_SIZE);
        const currentGridY = Math.floor(ghost.y / CELL_SIZE);
        return {
          ...ghost,
          x: currentGridX * CELL_SIZE + CELL_SIZE / 2,
          y: currentGridY * CELL_SIZE + CELL_SIZE / 2,
          mode
        };
      });

      return {
        ...prevState,
        ghosts: newGhosts
      };
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

  // Update the isValidPosition function
  const isValidPosition = (x: number, y: number, maze: number[][]) => {
    // Check multiple points around the character with more precise margins
    const points = [
      { x: x + WALL_MARGIN, y: y + WALL_MARGIN }, // Top-left
      { x: x + CELL_SIZE - WALL_MARGIN, y: y + WALL_MARGIN }, // Top-right
      { x: x + WALL_MARGIN, y: y + CELL_SIZE - WALL_MARGIN }, // Bottom-left
      { x: x + CELL_SIZE - WALL_MARGIN, y: y + CELL_SIZE - WALL_MARGIN }, // Bottom-right
      { x: x + CELL_SIZE / 2, y: y + CELL_SIZE / 2 } // Center
    ];

    // Check if any point is in a wall
    for (const point of points) {
      const gridX = Math.floor(point.x / CELL_SIZE);
      const gridY = Math.floor(point.y / CELL_SIZE);
      
      // Check if the point is within the maze bounds
      if (gridX < 0 || gridX >= maze[0].length || gridY < 0 || gridY >= maze.length) {
        return false;
      }
      
      // Check if the point is in a wall
      if (maze[gridY][gridX] === 1) {
        return false;
      }
    }

    return true;
  };

  return <Canvas ref={canvasRef} />;
}; 