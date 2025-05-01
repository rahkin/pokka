import { CELL_SIZE, CHARACTER_SIZE } from './gameConstants';

// Check if a grid position is walkable
const isValidGridPosition = (x: number, y: number, maze: number[][]): boolean => {
  return x >= 0 && x < maze[0].length &&
         y >= 0 && y < maze.length &&
         maze[y][x] !== 1;
};

// Helper function to check if a pixel-based position is valid (no wall collision)
// SIMPLIFIED VERSION: Check only the center point.
export const isValidPosition = (x: number, y: number, maze: number[][]): boolean => {
  const centerX = x + CHARACTER_SIZE / 2;
  const centerY = y + CHARACTER_SIZE / 2;

  // Check bounds based on center
  if (centerX < 0 || centerX > maze[0].length * CELL_SIZE ||
      centerY < 0 || centerY > maze.length * CELL_SIZE) {
    return false;
  }

  // Check if the center point's grid cell is a wall
  const gridX = Math.floor(centerX / CELL_SIZE);
  const gridY = Math.floor(centerY / CELL_SIZE);

  return isValidGridPosition(gridX, gridY, maze);
}; 