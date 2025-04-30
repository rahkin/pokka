import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { soundManager } from '../utils/sounds';

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
const PACMAN_SPEED = 4;
const GHOST_SPEED = 3;
const POWER_PELLET_DURATION = 8000;
const POINT_VALUE = 10;
const POWER_PELLET_VALUE = 50;
const CHARACTER_SCALE = 1.0;
const TARGET_FPS = 60;
const FRAME_TIME = 1000 / TARGET_FPS;

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

// Ghost target corners for scatter mode
const GHOST_CORNERS = {
  pink: { x: 2, y: 0 },     // Top-left
  blue: { x: 17, y: 0 },    // Top-right
  purple: { x: 0, y: 20 },  // Bottom-left
  skin: { x: 19, y: 20 }    // Bottom-right
} as const;

// Ghost personalities
const GHOST_PERSONALITIES = {
  pink: {
    name: 'Andy',
    getTarget: (pacman: GameState['pacman']) => ({
      x: pixelToGrid(pacman.x),
      y: pixelToGrid(pacman.y)
    })
  },
  blue: {
    name: 'Siren',
    getTarget: (pacman: GameState['pacman']) => {
      const gridX = pixelToGrid(pacman.x);
      const gridY = pixelToGrid(pacman.y);
      return { x: gridX, y: gridY };
    }
  },
  purple: {
    name: 'Aicz',
    getTarget: (pacman: GameState['pacman']) => {
      const gridX = pixelToGrid(pacman.x);
      const gridY = pixelToGrid(pacman.y);
      return { x: gridX, y: gridY };
    }
  },
  skin: {
    name: 'Banana',
    getTarget: (pacman: GameState['pacman']) => {
      const gridX = pixelToGrid(pacman.x);
      const gridY = pixelToGrid(pacman.y);
      return { x: gridX, y: gridY };
    }
  }
} as const;

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
    mode: GhostMode;
    targetX: number;
    targetY: number;
    isReleased: boolean;
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
  const gridX = pixelToGrid(x);
  const gridY = pixelToGrid(y);
  
  // Only check for new directions when centered in a cell
  const isCentered = x % CELL_SIZE === 0 && y % CELL_SIZE === 0;
  if (!isCentered) {
    return directions;
  }

  const positions = {
    up: { x: gridX, y: gridY - 1 },
    down: { x: gridX, y: gridY + 1 },
    left: { x: gridX - 1, y: gridY },
    right: { x: gridX + 1, y: gridY }
  };

  Object.entries(positions).forEach(([direction, pos]) => {
    if (pos.x >= 0 && pos.x < maze[0].length && 
        pos.y >= 0 && pos.y < maze.length && 
        maze[pos.y][pos.x] !== 1) {
      directions.push(direction);
    }
  });

  return directions;
};

const calculateDistance = (x1: number, y1: number, x2: number, y2: number): number => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

// Helper to check if a ghost's position is valid (not a wall)
const isValidGhostPosition = (x: number, y: number, maze: number[][]) => {
  // Use a simpler collision box for ghosts
  const points = [
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

  const [gameState, setGameState] = useState<GameState>(() => ({
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
      { x: gridToPixel(8), y: gridToPixel(10), direction: 'right', type: 'pink', mode: 'scatter', targetX: 2, targetY: 0, isReleased: true },
      { x: gridToPixel(9), y: gridToPixel(10), direction: 'left', type: 'blue', mode: 'scatter', targetX: 17, targetY: 0, isReleased: false },
      { x: gridToPixel(10), y: gridToPixel(10), direction: 'up', type: 'purple', mode: 'scatter', targetX: 0, targetY: 20, isReleased: false },
      { x: gridToPixel(11), y: gridToPixel(10), direction: 'right', type: 'skin', mode: 'scatter', targetX: 19, targetY: 20, isReleased: false }
    ],
    maze: MAZE_LAYOUT,
    dots: [],
    powerPellets: []
  }));

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

  // Initialize dots and power pellets
  useEffect(() => {
    const dots: Array<{ x: number; y: number }> = [];
    const powerPellets: Array<{ x: number; y: number }> = [];
    
    MAZE_LAYOUT.forEach((row, y) => {
      row.forEach((cell, x) => {
        if (cell === 2) dots.push({ x: gridToPixel(x), y: gridToPixel(y) });
        if (cell === 3) powerPellets.push({ x: gridToPixel(x), y: gridToPixel(y) });
      });
    });
    
    setGameState(prev => ({ ...prev, dots, powerPellets }));
  }, []);

  // Update the GameCanvas component's handleCollisions function
  const handleCollisions = useCallback((newX: number, newY: number) => {
    const centerX = newX + CELL_SIZE / 2;
    const centerY = newY + CELL_SIZE / 2;
    let scoreChange = 0;
    let newDots = [...gameState.dots];
    let newPellets = [...gameState.powerPellets];
    let isPoweredUp = gameState.isPoweredUp;

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

    // Check for ghost collisions
    gameState.ghosts.forEach((ghost, index) => {
      const collisionResult = checkGhostCollision(newX, newY, ghost, isPoweredUp);
      
      if (collisionResult === 'death') {
        soundManager.play('death');
        if (onGameOver) {
          onGameOver();
        }
      } else if (collisionResult === 'eatGhost') {
        soundManager.play('eatGhost');
        scoreChange += 200; // Points for eating a ghost
        setGameState(prev => ({
          ...prev,
          ghosts: prev.ghosts.map((g, i) => 
            i === index 
              ? { ...g, x: gridToPixel(10), y: gridToPixel(10) } // Reset ghost position
              : g
          )
        }));
      }
    });

    if (scoreChange > 0 || newDots.length !== gameState.dots.length || newPellets.length !== gameState.powerPellets.length) {
      setGameState(prev => ({
        ...prev,
        score: prev.score + scoreChange,
        dots: newDots,
        powerPellets: newPellets,
        isPoweredUp
      }));
    }

    // Move score update to useEffect
    return scoreChange;
  }, [gameState, onGameOver]);

  // Add effect for score updates
  useEffect(() => {
    if (onScoreUpdate) {
      onScoreUpdate(gameState.score);
    }
  }, [gameState.score, onScoreUpdate]);

  // Update ghost release timing
  useEffect(() => {
    if (!isPlaying) return;

    const releaseIntervals = [
      0,     // Pink ghost starts immediately
      1000,  // Blue ghost after 1 second
      2000,  // Purple ghost after 2 seconds
      3000   // Skin ghost after 3 seconds
    ];

    const releaseGhost = (index: number) => {
      setGameState(prev => ({
        ...prev,
        ghosts: prev.ghosts.map((ghost, i) => {
          if (i === index) {
            // Force ghosts to move upward first to exit spawn area
            const initialY = gridToPixel(8); // Position above the spawn area
            return {
              ...ghost,
              direction: 'up',
              mode: 'chase',
              y: initialY,
              isReleased: true
            };
          }
          return ghost;
        })
      }));
    };

    // Release ghosts at shorter intervals
    releaseIntervals.forEach((delay, index) => {
      setTimeout(() => releaseGhost(index), delay);
    });

    return () => {
      releaseIntervals.forEach((_, index) => {
        clearTimeout(index);
      });
    };
  }, [isPlaying]);

  // Update Pokka's position and handle movement
  const updatePokka = useCallback((deltaTime: number) => {
    setGameState((prevState) => {
      const { pacman } = prevState;
      const speed = (PACMAN_SPEED * deltaTime) / FRAME_TIME;

      // Helper function to check if a position is valid (not a wall)
      const isValidPosition = (x: number, y: number) => {
        const points = [
          { x: x + CELL_SIZE * 0.2, y: y + CELL_SIZE * 0.2 }, // Top-left
          { x: x + CELL_SIZE * 0.8, y: y + CELL_SIZE * 0.2 }, // Top-right
          { x: x + CELL_SIZE * 0.2, y: y + CELL_SIZE * 0.8 }, // Bottom-left
          { x: x + CELL_SIZE * 0.8, y: y + CELL_SIZE * 0.8 }, // Bottom-right
          { x: x + CELL_SIZE * 0.5, y: y + CELL_SIZE * 0.5 }  // Center
        ];

        return points.every(point => {
          const gridX = Math.floor(point.x / CELL_SIZE);
          const gridY = Math.floor(point.y / CELL_SIZE);
          
          return gridX >= 0 && gridX < MAZE_LAYOUT[0].length &&
                 gridY >= 0 && gridY < MAZE_LAYOUT.length &&
                 MAZE_LAYOUT[gridY][gridX] !== 1;
        });
      };

      // Try to move in the next direction if it's different from current
      if (currentDirection !== pacman.direction) {
        let testX = pacman.x;
        let testY = pacman.y;
        
        // Calculate test position in next direction
        switch (currentDirection) {
          case 'right': testX += speed; break;
          case 'left': testX -= speed; break;
          case 'down': testY += speed; break;
          case 'up': testY -= speed; break;
        }
        
        // If we can move in the next direction, change direction
        if (isValidPosition(testX, testY)) {
          pacman.direction = currentDirection;
          pacman.x = testX;
          pacman.y = testY;
          pacman.visualX = testX;
          pacman.visualY = testY;
          handleCollisions(testX, testY);
          return { ...prevState, pacman };
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

        if (isValidPosition(nextX, nextY)) {
          pacman.x = nextX;
          pacman.y = nextY;
          pacman.visualX = nextX;
          pacman.visualY = nextY;
          handleCollisions(nextX, nextY);
        } else {
          // Align to grid when hitting a wall
          const gridX = Math.round(pacman.x / CELL_SIZE) * CELL_SIZE;
          const gridY = Math.round(pacman.y / CELL_SIZE) * CELL_SIZE;
          
          if (Math.abs(pacman.x - gridX) < speed) {
            pacman.x = gridX;
            pacman.visualX = gridX;
          }
          if (Math.abs(pacman.y - gridY) < speed) {
            pacman.y = gridY;
            pacman.visualY = gridY;
          }
        }
      }

      return { ...prevState, pacman };
    });
  }, [currentDirection, handleCollisions]);

  // Update ghosts
  const updateGhosts = useCallback((deltaTime: number) => {
    setGameState((prevState) => {
      const newGhosts = prevState.ghosts.map(ghost => {
        if (!ghost.isReleased) return ghost;

        const speed = (GHOST_SPEED * deltaTime) / FRAME_TIME;
        const gridX = pixelToGrid(ghost.x);
        const gridY = pixelToGrid(ghost.y);

        // Force ghosts to exit spawn area if they're still there
        const isInSpawnArea = gridY >= 9 && gridY <= 11 && gridX >= 8 && gridX <= 12;
        if (isInSpawnArea) {
          const nextY = ghost.y - speed;
          if (isValidGhostPosition(ghost.x, nextY, MAZE_LAYOUT)) {
            ghost.y = nextY;
            ghost.direction = 'up';
          }
          return ghost;
        }

        // Get available directions excluding the opposite of current direction
        // and excluding directions that would lead back to spawn
        const availableDirections = getAvailableDirections(ghost.x, ghost.y, MAZE_LAYOUT)
          .filter(dir => {
            // Don't allow moving back to spawn area
            let testX = gridX;
            let testY = gridY;
            switch (dir) {
              case 'up': testY--; break;
              case 'down': testY++; break;
              case 'left': testX--; break;
              case 'right': testX++; break;
            }
            const wouldEnterSpawn = testY >= 9 && testY <= 11 && testX >= 8 && testX <= 12;
            return !wouldEnterSpawn && dir !== getOppositeDirection(ghost.direction);
          });

        // Update ghost target based on personality and mode
        if (ghost.mode === 'scatter') {
          const corner = GHOST_CORNERS[ghost.type as keyof typeof GHOST_CORNERS];
          ghost.targetX = corner.x;
          ghost.targetY = corner.y;
        } else if (ghost.mode === 'chase') {
          const personality = GHOST_PERSONALITIES[ghost.type as keyof typeof GHOST_PERSONALITIES];
          const target = personality.getTarget(prevState.pacman);
          ghost.targetX = target.x;
          ghost.targetY = target.y;
        } else if (ghost.mode === 'frightened') {
          // Random movement when frightened, but avoid spawn area
          let newTarget: { x: number; y: number };
          do {
            newTarget = {
              x: Math.floor(Math.random() * MAZE_LAYOUT[0].length),
              y: Math.floor(Math.random() * MAZE_LAYOUT.length)
            };
          } while (
            newTarget.y >= 9 && newTarget.y <= 11 && 
            newTarget.x >= 8 && newTarget.x <= 12
          );
          ghost.targetX = newTarget.x;
          ghost.targetY = newTarget.y;
        }

        // Only allow direction changes when centered in a cell
        const isCentered = ghost.x % CELL_SIZE === 0 && ghost.y % CELL_SIZE === 0;
        if (isCentered) {
          if (availableDirections.length > 0) {
            // Choose the direction that gets closest to the target
            let bestDirection = availableDirections[0];
            let shortestDistance = Infinity;

            availableDirections.forEach(direction => {
              let nextX = gridX;
              let nextY = gridY;

              switch (direction) {
                case 'up': nextY--; break;
                case 'down': nextY++; break;
                case 'left': nextX--; break;
                case 'right': nextX++; break;
              }

              const distance = calculateDistance(nextX, nextY, ghost.targetX, ghost.targetY);
              const randomFactor = ghost.mode === 'frightened' ? Math.random() * 2 : Math.random() * 0.5;
              
              if (distance + randomFactor < shortestDistance) {
                shortestDistance = distance + randomFactor;
                bestDirection = direction;
              }
            });

            ghost.direction = bestDirection;
          } else if (ghost.direction === '') {
            // If no direction is set and no preferred directions available,
            // allow any valid direction including reverse
            const allDirections = getAvailableDirections(ghost.x, ghost.y, MAZE_LAYOUT);
            if (allDirections.length > 0) {
              ghost.direction = allDirections[Math.floor(Math.random() * allDirections.length)];
            }
          }
        }

        // Calculate and validate next position
        let nextX = ghost.x;
        let nextY = ghost.y;
        
        const currentSpeed = ghost.mode === 'frightened' ? speed * 0.5 : speed * 1.2;
        
        switch (ghost.direction) {
          case 'up': nextY = ghost.y - currentSpeed; break;
          case 'down': nextY = ghost.y + currentSpeed; break;
          case 'left': nextX = ghost.x - currentSpeed; break;
          case 'right': nextX = ghost.x + currentSpeed; break;
        }

        // Validate next position
        if (isValidGhostPosition(nextX, nextY, MAZE_LAYOUT)) {
          ghost.x = nextX;
          ghost.y = nextY;
        } else {
          // If next position is invalid, align to grid and force direction recalculation
          ghost.x = gridX * CELL_SIZE;
          ghost.y = gridY * CELL_SIZE;
          ghost.direction = '';
        }

        return ghost;
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

  // Main render loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let lastTime = performance.now();

    // Update the animate function to use the moved functions
    const animate = (currentTime: number) => {
      if (!lastTime) {
        lastTime = currentTime;
      }

      const deltaTime = currentTime - lastTime;
      const timeStep = Math.min(deltaTime / FRAME_TIME, 1.0); // Cap the time step at 1.0

      // Update game state based on deltaTime
      if (isPlaying && !gameOver) {
        // Update Pacman position with deltaTime
        const pacmanStep = PACMAN_SPEED * timeStep;
        updatePokka(pacmanStep);

        // Update Ghost positions with deltaTime
        const ghostStep = GHOST_SPEED * timeStep;
        updateGhosts(ghostStep);

        // Check collisions and update score
        const collisionResult = checkCollisions(
          gameState.pacman,
          gameState.ghosts,
          gameState.isPoweredUp,
          onGameOver
        );

        if (collisionResult) {
          const { ghostIndex, points } = collisionResult;
          // Reset ghost position and update score
          gameState.ghosts[ghostIndex] = {
            ...gameState.ghosts[ghostIndex],
            x: gridToPixel(10),
            y: gridToPixel(10)
          };
          gameState.score += points;
        }
      }

      // Draw the game state
      draw();

      lastTime = currentTime;
      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation loop
    if (isPlaying && !gameOver) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPlaying, gameOver, drawMaze, drawDots, drawPowerPellets, drawGhosts, drawPokka, updatePokka, updateGhosts, checkCollisions]);

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

      // Shorter scatter mode, longer chase mode for more aggressive behavior
      modeTimer = setTimeout(
        switchMode,
        gameState.isScatterMode ? 5000 : 25000 // 5s scatter, 25s chase
      );
    };

    // Start in chase mode
    switchMode();

    return () => {
      if (modeTimer) clearTimeout(modeTimer);
    };
  }, []);

  // Draw the game state
  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw maze
    drawMaze(ctx);

    // Draw dots
    drawDots(ctx);

    // Draw power pellets
    drawPowerPellets(ctx);

    // Draw ghosts
    drawGhosts(ctx);

    // Draw Pokka
    drawPokka(ctx);
  }, [drawMaze, drawDots, drawPowerPellets, drawGhosts, drawPokka]);

  return <Canvas ref={canvasRef} />;
}; 