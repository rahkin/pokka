// Game Constants
export const CELL_SIZE = 30;
export const CHARACTER_SIZE = 24;
export const CHARACTER_SCALE = 1.0;
export const WALL_MARGIN = 4;
export const TARGET_FPS = 60;
export const FRAME_TIME = 1000 / TARGET_FPS;

// Character Speeds
export const PACMAN_SPEED = 3.2;
export const GHOST_SPEED = 3.0;
export const GHOST_BASE_SPEED = 5;
export const GHOST_SPEED_VARIATION = 0.15;
export const GHOST_FRIGHTENED_SPEED_MULTIPLIER = 0.75;
export const GHOST_EATEN_SPEED_MULTIPLIER = 1.5;

// Timing Constants
export const POWER_PELLET_DURATION = 10000;
export const PATH_RECALCULATION_DELAY = 500;
export const GHOST_CHASE_DURATION = 20000;
export const GHOST_SCATTER_DURATION = 7000;
export const GHOST_RELEASE_DELAYS = [
  0,     // First ghost (pink) starts immediately
  5000,  // Second ghost (blue) after 5 seconds
  10000, // Third ghost (purple) after 10 seconds
  15000  // Fourth ghost (skin) after 15 seconds
];
export const FLASH_WARNING_DURATION = 2000;
export const FLASH_INTERVAL = 200;

// Movement Thresholds
export const GRID_ALIGNMENT_THRESHOLD = 4;
export const CORNER_TURN_THRESHOLD = 6;

// Scoring
export const POINT_VALUE = 10;
export const DOT_POINTS = 10;
export const POWER_PELLET_VALUE = 50;
export const POWER_PELLET_POINTS = 50;
export const GHOST_POINTS = [200, 400, 800, 1600];

// Pathfinding
export const MIN_PATH_LENGTH = 3;
export const WALL_BOUNCE_FACTOR = 0.5;
export const ACCELERATION_RATE = 0.15;
export const DECELERATION_RATE = 0.1;

// Movement States
export const MOVEMENT_STATES = {
  MOVING: 'moving',
  TURNING: 'turning',
  ALIGNING: 'aligning'
} as const;

// Game States
export const GAME_STATES = {
  READY: 'ready',
  PLAYING: 'playing',
  PAUSED: 'paused',
  GAME_OVER: 'gameOver',
  WIN: 'win'
} as const;

// Sound Effects
export const SOUND_EFFECTS = {
  START: 'start',
  DOT_EAT: 'eat',
  POWER_PELLET: 'powerPellet',
  GHOST_EAT: 'eatGhost',
  DEATH: 'death',
  WIN: 'win'
} as const;

// Ghost House Configuration
export const GHOST_HOUSE_POSITION = { x: 10, y: 10 };
export const GHOST_EXIT_POSITION = { x: 10, y: 8 };
export const GHOST_SPAWN_POSITIONS = [
  { x: 8, y: 10 },   // Pink ghost
  { x: 9, y: 10 },   // Blue ghost
  { x: 10, y: 10 },  // Purple ghost
  { x: 11, y: 10 }   // Skin ghost
];

// Ghost Scatter Targets (spread out more)
export const GHOST_SCATTER_TARGETS = [
  { x: 1, y: 1 },           // Pink (near top-left)
  { x: 18, y: 1 },          // Blue (near top-right)
  { x: 1, y: 20 },          // Purple (near bottom-left)
  { x: 18, y: 20 }          // Skin (near bottom-right)
];

// Ghost Personality Constants
export const GHOST_PERSONALITIES = {
  pink: {
    lookAheadTiles: 4,
    turnProbability: 0.4,
    avoidanceRadius: 4,
    spawnDelay: 0
  },
  blue: {
    vectorMultiplier: 2.5,
    minDistance: 6,
    avoidanceRadius: 5,
    spawnDelay: 5000
  },
  purple: {
    switchDistance: 7,
    ambushDistance: 3,
    avoidanceRadius: 4,
    spawnDelay: 10000
  },
  skin: {
    chaseThreshold: 5,
    scatterInterval: 2500,
    avoidanceRadius: 5,
    spawnDelay: 15000
  }
};

// Maze layout (1 = wall, 0 = path, 2 = dot, 3 = power pellet)
export const MAZE_LAYOUT = [
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