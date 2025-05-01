import { Grid, AStarFinder, DiagonalMovement } from 'pathfinding';
import { CELL_SIZE, WALL_MARGIN } from './gameConstants';

interface Position {
  x: number;
  y: number;
}

// Manhattan distance heuristic function
const manhattanHeuristic = (dx: number, dy: number) => {
  return Math.abs(dx) + Math.abs(dy);
};

// Enhanced pathfinder with smoothing and corner-turning
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
    heuristic: manhattanHeuristic,
    weight: 1.1 // Slight preference for straighter paths
  });

  return {
    findPath: (startX: number, startY: number, endX: number, endY: number) => {
      // Convert pixel coordinates to grid coordinates
      const gridStartX = Math.floor(startX / CELL_SIZE);
      const gridStartY = Math.floor(startY / CELL_SIZE);
      const gridEndX = Math.floor(endX / CELL_SIZE);
      const gridEndY = Math.floor(endY / CELL_SIZE);

      // Ensure start and end points are valid
      if (!isValidGridPosition(gridStartX, gridStartY, maze) || 
          !isValidGridPosition(gridEndX, gridEndY, maze)) {
        return [];
      }

      const path = finder.findPath(
        gridStartX,
        gridStartY,
        gridEndX,
        gridEndY,
        grid.clone()
      );

      return smoothPath(path, maze);
    }
  };
};

// Check if a grid position is valid
const isValidGridPosition = (x: number, y: number, maze: number[][]): boolean => {
  return x >= 0 && x < maze[0].length && 
         y >= 0 && y < maze.length && 
         maze[y][x] !== 1;
};

// Smooth the path to reduce zigzagging
const smoothPath = (path: number[][], maze: number[][]): number[][] => {
  if (path.length <= 2) return path;

  const smoothed: number[][] = [path[0]];
  let current = 0;

  while (current < path.length - 1) {
    let furthest = current + 1;
    
    // Look ahead for line-of-sight points
    for (let i = current + 2; i < path.length; i++) {
      if (hasLineOfSight(
        path[current][0], path[current][1],
        path[i][0], path[i][1],
        maze
      )) {
        furthest = i;
      }
    }

    smoothed.push(path[furthest]);
    current = furthest;
  }

  // Convert grid coordinates to pixel coordinates (center of cells)
  return smoothed.map(([x, y]) => [
    x * CELL_SIZE + CELL_SIZE / 2,
    y * CELL_SIZE + CELL_SIZE / 2
  ]);
};

// Check if there's a clear line of sight between two points
const hasLineOfSight = (
  x1: number, y1: number,
  x2: number, y2: number,
  maze: number[][]
): boolean => {
  const points = getLinePoints(x1, y1, x2, y2);
  
  // Check points and their surroundings for walls
  return points.every(([x, y]) => {
    const checkPoints = [
      [x, y],
      [x + WALL_MARGIN, y],
      [x - WALL_MARGIN, y],
      [x, y + WALL_MARGIN],
      [x, y - WALL_MARGIN]
    ];

    return checkPoints.every(([px, py]) => {
      const gridX = Math.floor(px);
      const gridY = Math.floor(py);
      return isValidGridPosition(gridX, gridY, maze);
    });
  });
};

// Get points along a line using Bresenham's algorithm
const getLinePoints = (x1: number, y1: number, x2: number, y2: number): number[][] => {
  const points: number[][] = [];
  const dx = Math.abs(x2 - x1);
  const dy = Math.abs(y2 - y1);
  const sx = x1 < x2 ? 1 : -1;
  const sy = y1 < y2 ? 1 : -1;
  let err = dx - dy;

  let x = x1;
  let y = y1;

  while (true) {
    points.push([x, y]);
    if (x === x2 && y === y2) break;

    const e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x += sx;
    }
    if (e2 < dx) {
      err += dx;
      y += sy;
    }
  }

  return points;
};

// Get the next direction with improved corner-turning and wall avoidance
export const getNextDirection = (
  currentX: number,
  currentY: number,
  path: number[][],
  currentDirection: string,
  maze: number[][]
): { direction: string; canTurnCorner: boolean; nextPosition: Position } => {
  if (path.length < 2) {
    return { 
      direction: currentDirection, 
      canTurnCorner: false,
      nextPosition: { x: currentX, y: currentY }
    };
  }

  const [nextX, nextY] = path[1];
  
  // Calculate grid-aligned position
  const currentGridX = Math.floor(currentX / CELL_SIZE);
  const currentGridY = Math.floor(currentY / CELL_SIZE);
  const currentOffsetX = currentX % CELL_SIZE;
  const currentOffsetY = currentY % CELL_SIZE;
  
  // Check if we're near the center of a cell
  const isNearCenterX = Math.abs(currentOffsetX - CELL_SIZE / 2) < WALL_MARGIN;
  const isNearCenterY = Math.abs(currentOffsetY - CELL_SIZE / 2) < WALL_MARGIN;
  const canTurnCorner = isNearCenterX && isNearCenterY;

  // Calculate direction and next position
  const dx = nextX - currentX;
  const dy = nextY - currentY;
  
  let newDirection = currentDirection;
  let nextPosition: Position = { x: currentX, y: currentY };

  if (Math.abs(dx) > Math.abs(dy)) {
    newDirection = dx > 0 ? 'right' : 'left';
    // Align to vertical center when moving horizontally
    nextPosition.y = isNearCenterY ? 
      currentGridY * CELL_SIZE + CELL_SIZE / 2 : 
      currentY;
    nextPosition.x = dx > 0 ? 
      Math.min(nextX, currentX + CELL_SIZE / 4) : 
      Math.max(nextX, currentX - CELL_SIZE / 4);
  } else {
    newDirection = dy > 0 ? 'down' : 'up';
    // Align to horizontal center when moving vertically
    nextPosition.x = isNearCenterX ? 
      currentGridX * CELL_SIZE + CELL_SIZE / 2 : 
      currentX;
    nextPosition.y = dy > 0 ? 
      Math.min(nextY, currentY + CELL_SIZE / 4) : 
      Math.max(nextY, currentY - CELL_SIZE / 4);
  }

  // Ensure the next position is valid
  // TODO: If getNextDirection is used later, import and use shared isValidPosition from utils/collision
  // if (!isValidPosition(nextPosition.x, nextPosition.y, maze)) {
  //   nextPosition = { x: currentX, y: currentY };
  // }

  return {
    direction: newDirection,
    canTurnCorner,
    nextPosition
  };
};

export const isValidMove = (x: number, y: number, maze: number[][]): boolean => {
  // Check if position is within maze bounds
  if (x < 0 || x >= maze[0].length || y < 0 || y >= maze.length) {
    return false;
  }

  // Check if position is a wall
  return maze[y][x] !== 1;
}; 