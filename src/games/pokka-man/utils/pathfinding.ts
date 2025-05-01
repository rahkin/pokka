import { Grid, AStarFinder, DiagonalMovement } from 'pathfinding';

// Manhattan distance heuristic function
const manhattanHeuristic = (dx: number, dy: number) => {
  return dx + dy;
};

export const createPathfinder = (maze: number[][]) => {
  // Convert maze layout to pathfinding grid
  const grid = new Grid(maze[0].length, maze.length);
  
  // Set walkable nodes (0 = walkable, 1 = wall)
  maze.forEach((row, y) => {
    row.forEach((cell, x) => {
      grid.setWalkableAt(x, y, cell !== 1);
    });
  });

  const finder = new AStarFinder({
    diagonalMovement: DiagonalMovement.Never,
    heuristic: manhattanHeuristic
  });

  return {
    findPath: (startX: number, startY: number, endX: number, endY: number) => {
      const path = finder.findPath(
        Math.floor(startX),
        Math.floor(startY),
        Math.floor(endX),
        Math.floor(endY),
        grid.clone()
      );
      return path;
    }
  };
};

export const getNextDirection = (
  currentX: number,
  currentY: number,
  path: number[][]
): string | null => {
  if (path.length < 2) return null;

  const [nextX, nextY] = path[1];
  const dx = nextX - currentX;
  const dy = nextY - currentY;

  if (dx > 0) return 'right';
  if (dx < 0) return 'left';
  if (dy > 0) return 'down';
  if (dy < 0) return 'up';
  return null;
}; 