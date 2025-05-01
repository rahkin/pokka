import { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { soundManager } from '../utils/sounds';
import { createGhostStateMachine } from '../utils/ghostStateMachine';
import { GhostBehavior } from '../utils/ghostBehavior';
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
  WALL_MARGIN,
  CHARACTER_SIZE,
  GHOST_SPEED_VARIATION,
  GHOST_POINTS,
  GHOST_CHASE_DURATION,
  GHOST_SCATTER_DURATION,
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

interface Position {
  x: number;
  y: number;
}

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
  // First check if the position is in bounds
  const leftX = x + CHARACTER_SIZE * 0.2;  // Reduce effective size by 20% on each side
  const rightX = x + CHARACTER_SIZE * 0.8;
  const topY = y + CHARACTER_SIZE * 0.2;
  const bottomY = y + CHARACTER_SIZE * 0.8;
  
  const leftGridX = Math.floor(leftX / CELL_SIZE);
  const rightGridX = Math.floor(rightX / CELL_SIZE);
  const topGridY = Math.floor(topY / CELL_SIZE);
  const bottomGridY = Math.floor(bottomY / CELL_SIZE);
  
  // Check bounds
  if (leftGridX < 0 || rightGridX >= maze[0].length || 
      topGridY < 0 || bottomGridY >= maze.length) {
    return false;
  }

  // Check the four corners and center with reduced hitbox
  const points = [
    { x: leftX + CHARACTER_SIZE * 0.1, y: topY + CHARACTER_SIZE * 0.1 },     // Top-left
    { x: rightX - CHARACTER_SIZE * 0.1, y: topY + CHARACTER_SIZE * 0.1 },    // Top-right
    { x: leftX + CHARACTER_SIZE * 0.1, y: bottomY - CHARACTER_SIZE * 0.1 },  // Bottom-left
    { x: rightX - CHARACTER_SIZE * 0.1, y: bottomY - CHARACTER_SIZE * 0.1 }, // Bottom-right
    { x: x + CHARACTER_SIZE * 0.5, y: y + CHARACTER_SIZE * 0.5 }            // Center
  ];

  // Check each point
  return points.every(point => {
    const gridX = Math.floor(point.x / CELL_SIZE);
    const gridY = Math.floor(point.y / CELL_SIZE);
    
    // Check if this point is in a wall
    if (maze[gridY][gridX] === 1) {
      return false;
    }

    // Check wall margins with increased margin for non-center points
    if (point !== points[4]) {  // If not center point
      const xInCell = point.x % CELL_SIZE;
      const yInCell = point.y % CELL_SIZE;
      const increasedMargin = WALL_MARGIN * 1.5;  // Increase wall margin by 50%
      
      // Check adjacent cells based on position within cell
      if (xInCell < increasedMargin) {
        if (gridX > 0 && maze[gridY][gridX - 1] === 1) return false;
      } else if (xInCell > CELL_SIZE - increasedMargin) {
        if (gridX < maze[0].length - 1 && maze[gridY][gridX + 1] === 1) return false;
      }
      
      if (yInCell < increasedMargin) {
        if (gridY > 0 && maze[gridY - 1][gridX] === 1) return false;
      } else if (yInCell > CELL_SIZE - increasedMargin) {
        if (gridY < maze.length - 1 && maze[gridY + 1][gridX] === 1) return false;
      }
    }
    
    return true;
  });
};

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

// Change from const to function component and add proper export
export function GameCanvas({ onScoreUpdate, onGameOver, currentDirection, isPlaying, gameOver }: GameCanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const assetsRef = useRef<any>(null);
  const powerUpTimeoutRef = useRef<NodeJS.Timeout>();
  const gameOverRef = useRef(false);
  const scoreRef = useRef(0);
  const animationFrameRef = useRef<number>();

  // Initialize game state
  const [gameState, setGameState] = useState<GameState>(() => {
    // Scatter targets are now defined in gameConstants
    // const scatterTargets = [
    //   { x: 0, y: 0 },
    //   { x: MAZE_LAYOUT[0].length - 1, y: 0 },
    //   { x: 0, y: MAZE_LAYOUT.length - 1 },
    //   { x: MAZE_LAYOUT[0].length - 1, y: MAZE_LAYOUT.length - 1 }
    // ];

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
        visualY: gridToPixel(16)
      },
      ghosts: GHOST_SPAWN_POSITIONS.map((pos, index) => {
        const type = ghostTypes[index];
        const personality = GHOST_PERSONALITIES[type];
        const scatterTarget = GHOST_SCATTER_TARGETS[index];
        const behavior = new GhostBehavior(type, scatterTarget, MAZE_LAYOUT, GHOST_HOUSE_POSITION);

        return {
          x: gridToPixel(pos.x),
          y: gridToPixel(pos.y),
          direction: 'up',
          type,
          mode: 'scatter' as GhostMode,
          targetX: scatterTarget.x * CELL_SIZE,
          targetY: scatterTarget.y * CELL_SIZE,
          isReleased: index === 0,
          stateMachine: interpret(createGhostStateMachine(scatterTarget)).start(),
          behavior,
          path: [],
          lastPathUpdate: 0,
          baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
          consecutiveEats: 0,
          spawnDelay: personality.spawnDelay
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
      setGameState(prev => {
        const ghostTypes: Array<'pink' | 'blue' | 'purple' | 'skin'> = ['pink', 'blue', 'purple', 'skin'];
        return {
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
          ghosts: GHOST_SPAWN_POSITIONS.map((pos, index) => {
            const type = ghostTypes[index];
            const personality = GHOST_PERSONALITIES[type];
            const scatterTarget = GHOST_SCATTER_TARGETS[index];
            const behavior = new GhostBehavior(type, scatterTarget, MAZE_LAYOUT, GHOST_HOUSE_POSITION);

            return {
              x: gridToPixel(pos.x),
              y: gridToPixel(pos.y),
              direction: 'up',
              type,
              mode: 'scatter' as GhostMode,
              targetX: scatterTarget.x * CELL_SIZE,
              targetY: scatterTarget.y * CELL_SIZE,
              isReleased: index === 0,
              stateMachine: interpret(createGhostStateMachine(scatterTarget)).start(),
              behavior,
              path: [],
              lastPathUpdate: 0,
              baseSpeed: GHOST_SPEED * (1 + (Math.random() * GHOST_SPEED_VARIATION - GHOST_SPEED_VARIATION/2)),
              consecutiveEats: 0,
              spawnDelay: personality.spawnDelay
            };
          }),
          dots: prev.dots.map(dot => ({ ...dot })),
          powerPellets: prev.powerPellets.map(pellet => ({ ...pellet }))
        };
      });
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
                  x: gridToPixel(GHOST_SPAWN_POSITIONS[index].x), 
                  y: gridToPixel(GHOST_SPAWN_POSITIONS[index].y),
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

  // Update ghosts with improved movement using GhostBehavior
  const updateGhosts = useCallback((deltaTime: number) => {
    setGameState(prevState => {
      // Prepare Pacman state for behavior calculation
      const pacmanState = {
        position: { x: prevState.pacman.x, y: prevState.pacman.y },
        direction: prevState.pacman.direction
      };

      // Find red ghost position for blue ghost logic
      const redGhost = prevState.ghosts.find(g => g.type === 'pink');
      const redGhostPos = redGhost ? { x: redGhost.x, y: redGhost.y } : undefined;

      const newGhosts = prevState.ghosts.map(ghost => {
        if (!ghost.isReleased) return ghost;

        const currentState = ghost.stateMachine.getSnapshot();
        const mode = currentState.context.mode; // Use mode from state machine
        const baseSpeed = ghost.baseSpeed * (deltaTime / FRAME_TIME);
        const speed = mode === 'frightened' ? 
          baseSpeed * GHOST_FRIGHTENED_SPEED_MULTIPLIER : 
          baseSpeed * (mode === 'chase' ? 1.1 : 0.9);

        // Get current grid position
        const centerX = ghost.x + CELL_SIZE / 2;
        const centerY = ghost.y + CELL_SIZE / 2;
        const currentGridX = Math.floor(centerX / CELL_SIZE);
        const currentGridY = Math.floor(centerY / CELL_SIZE);

        // Calculate offset from grid center
        const offsetX = centerX % CELL_SIZE - CELL_SIZE / 2;
        const offsetY = centerY % CELL_SIZE - CELL_SIZE / 2;
        
        // Check if we're close enough to grid center to make a decision
        const atGridCenter = Math.abs(offsetX) < GRID_ALIGNMENT_THRESHOLD && 
                            Math.abs(offsetY) < GRID_ALIGNMENT_THRESHOLD;

        // If at grid center or no valid direction, choose new direction
        if (atGridCenter || !ghost.direction || !isValidPosition(ghost.x, ghost.y, prevState.maze)) {
          // Snap to grid when at center
          if (atGridCenter) {
            ghost.x = currentGridX * CELL_SIZE;
            ghost.y = currentGridY * CELL_SIZE;
          }

          // Get available directions
          let availableDirections = getAvailableDirections(ghost.x, ghost.y, prevState.maze);
          
          // If no directions available (trapped), increase test distance
          if (availableDirections.length === 0) {
            availableDirections = getAvailableDirections(ghost.x, ghost.y, prevState.maze, CELL_SIZE * 0.8);
          }

          // Filter out opposite direction unless it's the only option
          availableDirections = availableDirections.filter(dir => {
            if (dir === getOppositeDirection(ghost.direction)) {
              return availableDirections.length === 1;
            }
            return true;
          });

          if (availableDirections.length > 0) {
            // Prepare GhostState for behavior calculation
            const ghostState = {
              position: { x: ghost.x, y: ghost.y },
              mode: mode,
              isReleased: ghost.isReleased,
              currentSpeed: speed, // Pass current speed if needed by behavior
              lastUpdateTime: Date.now() // Pass time if needed
            };
            
            // Calculate target using the GhostBehavior instance
            const target = ghost.behavior.getTargetPosition(ghostState, pacmanState, redGhostPos);
            
            // Score each direction based on the new target
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
              
              // Calculate distance to target (using pixel coordinates from behavior)
              const targetGridX = Math.floor(target.x / CELL_SIZE);
              const targetGridY = Math.floor(target.y / CELL_SIZE);
              const distanceToTarget = Math.abs(nextGridX - targetGridX) + Math.abs(nextGridY - targetGridY);
              
              // Add randomness factor based on mode
              const randomFactor = mode === 'frightened' ? Math.random() * 4 : Math.random() * 0.5;
              
              // Prefer current direction slightly
              const directionBonus = dir === ghost.direction ? 0.8 : 0;
              
              // Enhanced ghost avoidance
              const personality = GHOST_PERSONALITIES[ghost.type];
              const ghostAvoidanceBonus = prevState.ghosts.reduce((bonus, otherGhost) => {
                if (otherGhost === ghost || !otherGhost.isReleased) return bonus;
                const otherGridX = Math.floor(otherGhost.x / CELL_SIZE);
                const otherGridY = Math.floor(otherGhost.y / CELL_SIZE);
                const distanceToGhost = Math.abs(nextGridX - otherGridX) + Math.abs(nextGridY - otherGridY);
                
                if (distanceToGhost < personality.avoidanceRadius) {
                  const avoidanceStrength = Math.pow(1 - (distanceToGhost / personality.avoidanceRadius), 2);
                  return bonus + (avoidanceStrength * 2);
                }
                return bonus;
              }, 0);
              
              // Wall avoidance bonus
              const wallAvoidanceBonus = calculateWallAvoidanceBonus(nextX, nextY, prevState.maze);
              
              return {
                direction: dir,
                score: -distanceToTarget + randomFactor + directionBonus + ghostAvoidanceBonus + wallAvoidanceBonus
              };
            });

            // Choose best direction
            const bestDirection = directionScores.reduce((best, current) => 
              current.score > best.score ? current : best
            );

            ghost.direction = bestDirection.direction;
          }
        }

        // Move in current direction
        let nextX = ghost.x;
        let nextY = ghost.y;
        
        switch (ghost.direction) {
          case 'up': nextY -= speed; break;
          case 'down': nextY += speed; break;
          case 'left': nextX -= speed; break;
          case 'right': nextX += speed; break;
        }

        // Validate next position
        if (isValidPosition(nextX, nextY, prevState.maze)) {
          // Apply movement with grid alignment
          if (Math.abs(offsetX) < speed && (ghost.direction === 'up' || ghost.direction === 'down')) {
            nextX = currentGridX * CELL_SIZE;
          }
          if (Math.abs(offsetY) < speed && (ghost.direction === 'left' || ghost.direction === 'right')) {
            nextY = currentGridY * CELL_SIZE;
          }
          
          // Update ghost position and potentially target based on behavior outcome
          // Note: Target update might be better handled within the GhostBehavior class or state machine
          return { ...ghost, x: nextX, y: nextY, mode, targetX: ghost.targetX, targetY: ghost.targetY }; // Keep existing target for now
        }

        // Wall sliding logic
        const slideX = ghost.direction === 'up' || ghost.direction === 'down' ? nextX : ghost.x;
        const slideY = ghost.direction === 'left' || ghost.direction === 'right' ? nextY : ghost.y;
          
        if (isValidPosition(ghost.x, slideY, prevState.maze)) {
          return { ...ghost, y: slideY, mode, targetX: ghost.targetX, targetY: ghost.targetY };
        } else if (isValidPosition(slideX, ghost.y, prevState.maze)) {
          return { ...ghost, x: slideX, mode, targetX: ghost.targetX, targetY: ghost.targetY };
        }

        // If stuck, return current state
        return ghost;
      });

      return { ...prevState, ghosts: newGhosts };
    });
  }, []);

  // Helper function to calculate wall avoidance bonus
  const calculateWallAvoidanceBonus = (x: number, y: number, maze: number[][]): number => {
    const gridX = Math.floor(x / CELL_SIZE);
    const gridY = Math.floor(y / CELL_SIZE);
    let bonus = 0;
    
    // Check adjacent cells for walls
    if (gridX > 0 && maze[gridY][gridX - 1] === 1) bonus += 1;
    if (gridX < maze[0].length - 1 && maze[gridY][gridX + 1] === 1) bonus += 1;
    if (gridY > 0 && maze[gridY - 1][gridX] === 1) bonus += 1;
    if (gridY < maze.length - 1 && maze[gridY + 1][gridX] === 1) bonus += 1;
    
    return bonus;
  };

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