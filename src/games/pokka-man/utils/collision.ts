import { CELL_SIZE, CHARACTER_SIZE, WALL_MARGIN } from './gameConstants';

// Check if a grid position is walkable (used by the pixel-based check)
const isValidGridPosition = (x: number, y: number, maze: number[][]): boolean => {
  return x >= 0 && x < maze[0].length &&
         y >= 0 && y < maze.length &&
         maze[y][x] !== 1;
};

// Helper function to check if a pixel-based position is valid (no wall collision)
// RESTORED VERSION: Checks multiple points around the character's bounds with margins.
export const isValidPosition = (x: number, y: number, maze: number[][]): boolean => {
  // Calculate bounds using reduced hitbox (e.g., 80% of CHARACTER_SIZE)
  const effectiveSize = CHARACTER_SIZE * 0.8;
  const offsetX = (CHARACTER_SIZE - effectiveSize) / 2;

  const leftX = x + offsetX;
  const rightX = x + CHARACTER_SIZE - offsetX;
  const topY = y + offsetX;
  const bottomY = y + CHARACTER_SIZE - offsetX;

  // Check overall pixel bounds first
  if (leftX < 0 || rightX > maze[0].length * CELL_SIZE ||
      topY < 0 || bottomY > maze.length * CELL_SIZE) {
    return false;
  }

  // Define points to check around the reduced hitbox
  const checkPoints = [
    { x: leftX, y: topY },        // Top-left
    { x: rightX, y: topY },       // Top-right
    { x: leftX, y: bottomY },     // Bottom-left
    { x: rightX, y: bottomY },    // Bottom-right
    { x: x + CHARACTER_SIZE / 2, y: y + CHARACTER_SIZE / 2 } // Center
  ];

  // Check each point against the grid and wall margins
  for (const point of checkPoints) {
    const gridX = Math.floor(point.x / CELL_SIZE);
    const gridY = Math.floor(point.y / CELL_SIZE);

    // Check if the grid cell itself is a wall
    if (!isValidGridPosition(gridX, gridY, maze)) {
      return false;
    }

    // Check proximity to adjacent walls using WALL_MARGIN
    // This prevents getting too close even if the center is in a valid cell.
    const xInCell = point.x % CELL_SIZE;
    const yInCell = point.y % CELL_SIZE;

    // Check left wall proximity
    if (xInCell < WALL_MARGIN && !isValidGridPosition(gridX - 1, gridY, maze)) {
      return false;
    }
    // Check right wall proximity
    if (xInCell > CELL_SIZE - WALL_MARGIN && !isValidGridPosition(gridX + 1, gridY, maze)) {
      return false;
    }
    // Check top wall proximity
    if (yInCell < WALL_MARGIN && !isValidGridPosition(gridX, gridY - 1, maze)) {
      return false;
    }
    // Check bottom wall proximity
    if (yInCell > CELL_SIZE - WALL_MARGIN && !isValidGridPosition(gridX, gridY + 1, maze)) {
      return false;
    }
  }

  // If all checks pass, the position is valid
  return true;
}; 