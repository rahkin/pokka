// Game Constants
export const CELL_SIZE = 30;
export const CHARACTER_SIZE = 24;
export const CHARACTER_SCALE = 1.0;
export const WALL_MARGIN = 1;
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
  { x: 9, y: 10 },   // Pink ghost
  { x: 10, y: 10 },  // Blue ghost
  { x: 11, y: 10 },  // Purple ghost
  { x: 12, y: 10 }   // Skin ghost
];

// Ghost Scatter Targets (adjusted to be reachable)
export const GHOST_SCATTER_TARGETS = [
  { x: 2, y: 2 },     // Pink (top-left)
  { x: 17, y: 2 },    // Blue (top-right)
  { x: 2, y: 19 },    // Purple (bottom-left)
  { x: 17, y: 19 }    // Skin (bottom-right)
];

// Ghost Personality Constants
export const GHOST_PERSONALITIES = {
  pink: {
    lookAheadTiles: 4,
    turnProbability: 0.2,
    avoidanceRadius: 4,
    spawnDelay: 0
  },
  blue: {
    vectorMultiplier: 1.5,
    minDistance: 4,
    avoidanceRadius: 3,
    spawnDelay: 5000
  },
  purple: {
    switchDistance: 5,
    ambushDistance: 2,
    avoidanceRadius: 3,
    spawnDelay: 10000
  },
  skin: {
    chaseThreshold: 4,
    scatterInterval: 3000,
    avoidanceRadius: 3,
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