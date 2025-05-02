import { CELL_SIZE, CHARACTER_SIZE } from './gameConstants';

// Check if a grid position is walkable
const isValidGridPosition = (x: number, y: number, maze: number[][]): boolean => {
  return x >= 0 && x < maze[0].length &&
         y >= 0 && y < maze.length &&
         maze[y][x] !== 1;
};

// Helper function to check if a pixel-based position is valid (no wall collision)
export const isValidPosition = (x: number, y: number, maze: number[][]): boolean => {
  // Get the center of the character
  const centerX = x + CHARACTER_SIZE / 2;
  const centerY = y + CHARACTER_SIZE / 2;

  // Get the current cell
  const currentCellX = Math.floor(centerX / CELL_SIZE);
  const currentCellY = Math.floor(centerY / CELL_SIZE);

  // Check if current cell is valid
  if (!isValidGridPosition(currentCellX, currentCellY, maze)) {
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
    if (!isValidGridPosition(currentCellX + 1, currentCellY, maze)) {
      return false;
    }
  } else if (offsetX < -halfHitbox) {
    // Check left cell
    if (!isValidGridPosition(currentCellX - 1, currentCellY, maze)) {
      return false;
    }
  }

  if (offsetY > halfHitbox) {
    // Check bottom cell
    if (!isValidGridPosition(currentCellX, currentCellY + 1, maze)) {
      return false;
    }
  } else if (offsetY < -halfHitbox) {
    // Check top cell
    if (!isValidGridPosition(currentCellX, currentCellY - 1, maze)) {
      return false;
    }
  }

  return true;
}; 