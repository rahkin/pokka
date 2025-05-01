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
  currentDirection: string;
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
export function GameCanvas({ onScoreUpdate, onGameOver, currentDirection: initialDirection, nextDirection, onTurnTaken, isPlaying, gameOver }: GameCanvasProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const assetsRef = useRef<any>(null);
  const powerUpTimeoutRef = useRef<NodeJS.Timeout>();
  const gameOverRef = useRef(false);
  const scoreRef = useRef(0);
  const animationFrameRef = useRef<number>();

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
      const { pacman, maze } = prevState;
      const speed = (PACMAN_SPEED * deltaTime) / FRAME_TIME;

      // --- Turn Handling --- 
      const centerX = pacman.x + CELL_SIZE / 2;
      const centerY = pacman.y + CELL_SIZE / 2;
      const currentGridX = Math.floor(centerX / CELL_SIZE);
      const currentGridY = Math.floor(centerY / CELL_SIZE);
      const offsetX = centerX % CELL_SIZE - CELL_SIZE / 2;
      const offsetY = centerY % CELL_SIZE - CELL_SIZE / 2;
      const isAligned = Math.abs(offsetX) < GRID_ALIGNMENT_THRESHOLD && 
                       Math.abs(offsetY) < GRID_ALIGNMENT_THRESHOLD;
      let potentialNewDirection = pacman.currentMovingDirection; // Start with current direction

      if (isAligned && nextDirection && nextDirection !== pacman.currentMovingDirection && nextDirection !== getOppositeDirection(pacman.currentMovingDirection)) {
        // Check if the new direction is valid from the current aligned grid position
        let checkX = gridToPixel(currentGridX);
        let checkY = gridToPixel(currentGridY);
        const checkDistance = speed > 0 ? speed : 1; // Check slightly ahead

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
          pacman.currentMovingDirection = nextDirection; // Update internal direction
          potentialNewDirection = nextDirection;         // Use new direction for this update cycle
          onTurnTaken(); // Clear the buffered direction in parent
        }
      }
      // --- End Turn Handling ---

      const movingDirection = potentialNewDirection; // Use the potentially updated direction

      // Calculate next position based on current MOVING direction
      let nextX = pacman.x;
      let nextY = pacman.y;

      if (!movingDirection) {
          // If not moving initially (e.g., start of game), don't move until a direction is set
          return prevState;
      }

      switch (movingDirection) {
          case 'right': nextX += speed; break;
          case 'left': nextX -= speed; break;
          case 'down': nextY += speed; break;
          case 'up': nextY -= speed; break;
        }

      // Check if next position is valid
      if (isValidPosition(nextX, nextY, maze)) {
        pacman.x = nextX;
        pacman.y = nextY;
        // pacman.direction = movingDirection; // Maybe update this too?
      } else {
        // Intended move failed. Try moving only along the intended axis from the *current* position.
        if (movingDirection === 'left' || movingDirection === 'right') {
          // Try horizontal move only
          const tryX = pacman.x + (movingDirection === 'right' ? speed : -speed);
          if (isValidPosition(tryX, pacman.y, maze)) {
            pacman.x = tryX;
            // pacman.direction = movingDirection; // Keep intended direction if slide works
          }
        } else if (movingDirection === 'up' || movingDirection === 'down') {
          // Try vertical move only
          const tryY = pacman.y + (movingDirection === 'down' ? speed : -speed);
          if (isValidPosition(pacman.x, tryY, maze)) {
            pacman.y = tryY;
            // pacman.direction = movingDirection; // Keep intended direction if slide works
          }
        }
        // If neither the direct move nor the axis-aligned slide worked, Pokka stops against the wall.
        // The position remains unchanged from the start of the function call.
      }
      
      // Handle collisions with dots, power pellets, and ghosts
      const scoreChange = handleCollisions(pacman.x, pacman.y);

      // Need to update the pacman object in the state correctly
      const updatedPacman = { ...pacman }; // Create a copy to modify
      return { ...prevState, pacman: updatedPacman, score: prevState.score + (scoreChange || 0) }; 
    });
  }, [nextDirection, onTurnTaken, handleCollisions]);

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

  // Helper function
  const getOppositeDirection = (direction: string): string => {
      switch (direction) { case 'up': return 'down'; case 'down': return 'up'; case 'left': return 'right'; case 'right': return 'left'; default: return direction; }
  };

  return <Canvas ref={canvasRef} />;
}

// NO DUPLICATE CODE OR IMPORTS BELOW THIS LINE
