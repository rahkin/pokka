import { CELL_SIZE, CHARACTER_SIZE, GHOST_HOUSE_BOUNDS } from './gameConstants';

// Check if a position is within the ghost house
export const isInGhostHouse = (x: number, y: number): boolean => {
  const gridX = Math.floor(x / CELL_SIZE);
  const gridY = Math.floor(y / CELL_SIZE);
  return gridX >= GHOST_HOUSE_BOUNDS.left && 
         gridX <= GHOST_HOUSE_BOUNDS.right && 
         gridY >= GHOST_HOUSE_BOUNDS.top && 
         gridY <= GHOST_HOUSE_BOUNDS.bottom;
};

// Check if a grid position is walkable
const isValidGridPosition = (x: number, y: number, maze: number[][], allowGhostHouse: boolean = false): boolean => {
  // Always allow movement within ghost house bounds if specified
  if (allowGhostHouse && x >= GHOST_HOUSE_BOUNDS.left && 
      x <= GHOST_HOUSE_BOUNDS.right && 
      y >= GHOST_HOUSE_BOUNDS.top && 
      y <= GHOST_HOUSE_BOUNDS.bottom) {
    return true;
  }

  return x >= 0 && x < maze[0].length &&
         y >= 0 && y < maze.length &&
         maze[y][x] !== 1;
};

// Helper function to check if a pixel-based position is valid (no wall collision)
export const isValidPosition = (
  x: number, 
  y: number, 
  maze: number[][], 
  isGhost: boolean = false, 
  allowGhostHouse: boolean = false
): boolean => {
  // Get the center of the character
  const centerX = x + CHARACTER_SIZE / 2;
  const centerY = y + CHARACTER_SIZE / 2;

  // Get the current cell
  const currentCellX = Math.floor(centerX / CELL_SIZE);
  const currentCellY = Math.floor(centerY / CELL_SIZE);

  // Special handling for ghost house
  if (isGhost && allowGhostHouse && isInGhostHouse(x, y)) {
    return true;
  }

  // Check if current cell is valid
  if (!isValidGridPosition(currentCellX, currentCellY, maze, allowGhostHouse)) {
    return false;
  }

  // Calculate position within current cell
  const offsetX = centerX - (currentCellX * CELL_SIZE + CELL_SIZE / 2);
  const offsetY = centerY - (currentCellY * CELL_SIZE + CELL_SIZE / 2);

  // Define hitbox size (70% of cell size for smoother movement)
  const hitboxSize = CELL_SIZE * 0.7;
  const halfHitbox = hitboxSize / 2;

  // Check adjacent cells based on position within current cell
  if (offsetX > halfHitbox) {
    // Check right cell
    if (!isValidGridPosition(currentCellX + 1, currentCellY, maze, allowGhostHouse)) {
      return false;
    }
  } else if (offsetX < -halfHitbox) {
    // Check left cell
    if (!isValidGridPosition(currentCellX - 1, currentCellY, maze, allowGhostHouse)) {
      return false;
    }
  }

  if (offsetY > halfHitbox) {
    // Check bottom cell
    if (!isValidGridPosition(currentCellX, currentCellY + 1, maze, allowGhostHouse)) {
      return false;
    }
  } else if (offsetY < -halfHitbox) {
    // Check top cell
    if (!isValidGridPosition(currentCellX, currentCellY - 1, maze, allowGhostHouse)) {
      return false;
    }
  }

  return true;
}; 