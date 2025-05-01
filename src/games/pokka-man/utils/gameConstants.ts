// Game Constants
export const CELL_SIZE = 30;
export const CHARACTER_SIZE = 24;
export const CHARACTER_SCALE = 1.0;
export const WALL_MARGIN = 6;
export const TARGET_FPS = 60;
export const FRAME_TIME = 1000 / TARGET_FPS;

// Character Speeds
export const PACMAN_SPEED = 8;
export const GHOST_SPEED = 5;
export const GHOST_BASE_SPEED = 5;
export const GHOST_SPEED_VARIATION = 0.1;
export const GHOST_FRIGHTENED_SPEED_MULTIPLIER = 0.7;
export const GHOST_EATEN_SPEED_MULTIPLIER = 1.5;

// Timing Constants
export const POWER_PELLET_DURATION = 10000;
export const PATH_RECALCULATION_DELAY = 500;
export const GHOST_CHASE_DURATION = 20000;
export const GHOST_SCATTER_DURATION = 7000;
export const GHOST_RELEASE_DELAYS = [0, 2000, 4000, 6000];
export const FLASH_WARNING_DURATION = 2000;
export const FLASH_INTERVAL = 200;

// Movement Thresholds
export const GRID_ALIGNMENT_THRESHOLD = 4;
export const CORNER_TURN_THRESHOLD = 8;

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

// Ghost Scatter Targets (corners of the maze)
export const GHOST_SCATTER_TARGETS = [
  { x: 0, y: 0 },           // Pink (top-left)
  { x: 19, y: 0 },          // Blue (top-right)
  { x: 0, y: 21 },          // Purple (bottom-left)
  { x: 19, y: 21 }          // Skin (bottom-right)
];

// Ghost Personality Constants
export const GHOST_PERSONALITIES = {
  pink: {
    lookAheadTiles: 4,      // Number of tiles to look ahead of Pacman
    turnProbability: 0.3    // Probability of making random turns
  },
  blue: {
    vectorMultiplier: 2,    // Multiplier for the vector from red ghost
    minDistance: 5          // Minimum distance to maintain from red ghost
  },
  purple: {
    switchDistance: 8,      // Distance at which behavior switches
    ambushDistance: 2       // Number of tiles to ambush ahead
  },
  skin: {
    chaseThreshold: 6,      // Distance at which direct chase begins
    scatterInterval: 3000   // Time between scatter mode switches
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