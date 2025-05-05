import { CELL_SIZE, GHOST_PERSONALITIES, GHOST_EXIT_POSITION, GHOST_HOUSE_POSITION, GHOST_HOUSE_BOUNDS, POWER_PELLET_DURATION } from './gameConstants';

// Define GhostMode type locally since we removed XState
export type GhostMode = 'chase' | 'scatter' | 'frightened' | 'eaten' | 'house' | 'exiting';

interface Position {
  x: number;
  y: number;
}

interface Ghost {
  x: number;
  y: number;
  direction: string;
  type: 'pink' | 'blue' | 'purple' | 'skin';
  mode: GhostMode;
  isReleased: boolean;
  behavior: GhostBehavior;
  targetX?: number;
  targetY?: number;
  baseSpeed?: number;
  consecutiveEats?: number;
  spawnDelay?: number;
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
  };
  ghosts: Ghost[];
  maze: number[][];
  dots: Array<{ x: number; y: number }>;
  powerPellets: Array<{ x: number; y: number }>;
}

interface GhostState {
  position: Position;
  mode: GhostMode;
  isReleased: boolean;
  currentSpeed: number;
  lastUpdateTime: number;
}

interface PacmanState {
  position: Position;
  direction: string;
}

export default class GhostBehavior {
  private readonly type: string;
  private readonly scatterTarget: Position;
  private readonly maze: number[][];
  private lastDirectionChange: number = 0;
  private lastTargetUpdate: number = 0;
  private currentTarget: Position;
  private lastModeChange: number = 0;

  constructor(type: string, scatterTarget: Position, maze: number[][]) {
    this.type = type;
    this.scatterTarget = scatterTarget;
    this.maze = maze;
    this.currentTarget = scatterTarget;
  }

  getTargetPosition(
    ghost: GhostState,
    pacman: PacmanState,
    redGhost?: Position,
    allGhostPositions?: Array<{ x: number; y: number; type: string }>,
    selfIndex?: number
  ): Position {
    const currentTime = Date.now();
    
    // Handle ghost house movement
    if (!ghost.isReleased) {
      // Get current grid position
      const gridX = Math.floor(ghost.position.x / CELL_SIZE);
      const gridY = Math.floor(ghost.position.y / CELL_SIZE);
      
      // If we're at the exit position, we're ready to leave
      if (gridX === GHOST_EXIT_POSITION.x && gridY === GHOST_EXIT_POSITION.y) {
        return {
          x: GHOST_EXIT_POSITION.x * CELL_SIZE,
          y: GHOST_EXIT_POSITION.y * CELL_SIZE
        };
      }
      
      // If we're in the ghost house, move up and down
      if (this.isInGhostHouse(ghost.position)) {
        // Move up and down in the house
        const houseCenterY = GHOST_HOUSE_POSITION.y * CELL_SIZE;
        const verticalOffset = Math.sin(currentTime / 500) * CELL_SIZE * 0.5;
        
        return {
          x: GHOST_HOUSE_POSITION.x * CELL_SIZE,
          y: houseCenterY + verticalOffset
        };
      }
      
      // If we're not in the house and not at the exit, move toward the exit
      return {
        x: GHOST_EXIT_POSITION.x * CELL_SIZE,
        y: GHOST_EXIT_POSITION.y * CELL_SIZE
      };
    }
    
    // If ghost is exiting, always target the door
    if (ghost.mode === 'exiting') {
      console.log(`[GhostBehavior] ${this.type} exiting mode, targeting door at (${GHOST_EXIT_POSITION.x},${GHOST_EXIT_POSITION.y})`);
      return {
        x: GHOST_EXIT_POSITION.x * CELL_SIZE,
        y: GHOST_EXIT_POSITION.y * CELL_SIZE
      };
    }
    
    // Only update target periodically to prevent erratic movement
    if (currentTime - this.lastTargetUpdate < 100) {
      return this.currentTarget;
    }
    
    this.lastTargetUpdate = currentTime;
    
    // Get the target based on mode
    let target: Position;
    
    if (ghost.mode === 'frightened') {
      target = this.getFrightenedTarget(ghost.position, currentTime);
    } else if (ghost.mode === 'eaten') {
      target = this.getEatenTarget(ghost.position);
    } else if (ghost.mode === 'scatter') {
      target = { x: this.scatterTarget.x * CELL_SIZE, y: this.scatterTarget.y * CELL_SIZE };
    } else {
      // Chase mode - each ghost has unique behavior
      target = this.getChaseTarget(ghost, pacman, redGhost, allGhostPositions, selfIndex);
    }
    
    this.currentTarget = target;
    // Debug log for target selection
    console.log(`[GhostBehavior] ${this.type} mode=${ghost.mode} isReleased=${ghost.isReleased} returning target=(${target.x},${target.y})`);
    return target;
  }

  private isInGhostHouse(position: Position): boolean {
    const gridX = Math.floor(position.x / CELL_SIZE);
    const gridY = Math.floor(position.y / CELL_SIZE);
    
    return gridX >= GHOST_HOUSE_BOUNDS.left && 
           gridX <= GHOST_HOUSE_BOUNDS.right && 
           gridY >= GHOST_HOUSE_BOUNDS.top && 
           gridY <= GHOST_HOUSE_BOUNDS.bottom;
  }

  private getEatenTarget(position: Position): Position {
    const distanceToHouse = this.calculateDistance(position, {
      x: GHOST_EXIT_POSITION.x * CELL_SIZE,
      y: GHOST_EXIT_POSITION.y * CELL_SIZE
    });
    
    return distanceToHouse > CELL_SIZE * 2 ? 
      { x: GHOST_EXIT_POSITION.x * CELL_SIZE, y: GHOST_EXIT_POSITION.y * CELL_SIZE } :
      { x: GHOST_HOUSE_POSITION.x * CELL_SIZE, y: GHOST_HOUSE_POSITION.y * CELL_SIZE };
  }

  private getChaseTarget(
    ghost: GhostState,
    pacman: PacmanState,
    redGhost?: Position,
    allGhostPositions?: Array<{ x: number; y: number; type: string }>,
    selfIndex?: number
  ): Position {
    switch (this.type) {
      case 'pink':
        // Pink: Direct chase
        return pacman.position;
      case 'blue': {
        // Blue: Ambush ahead of Pokkaman, but if another ghost is already there, target a different intersection
        const ahead = this.getPositionAhead(pacman.position, pacman.direction, 4);
        if (allGhostPositions) {
          const others = allGhostPositions.filter((g, i) => i !== selfIndex);
          const tooClose = others.some(g => this.calculateDistance(g, ahead) < CELL_SIZE * 2);
          if (tooClose) {
            // Pick a nearby intersection instead
            return this.getPositionAhead(pacman.position, pacman.direction, 2);
          }
        }
        return ahead;
      }
      case 'purple': {
        // Purple: Try to cut off escape routes by targeting the closest intersection to Pokkaman that is not near another ghost
        if (allGhostPositions) {
          const intersections = this.getPossiblePaths(pacman.position, pacman.direction);
          let best = intersections[0];
          let minScore = Infinity;
          for (const pos of intersections) {
            // Score: distance to self minus distance to other ghosts
            const distToSelf = this.calculateDistance(ghost.position, pos);
            const distToOthers = allGhostPositions
              .filter((g, i) => i !== selfIndex)
              .reduce((sum, g) => sum + this.calculateDistance(g, pos), 0);
            const score = distToSelf - distToOthers * 0.5;
            if (score < minScore) {
              minScore = score;
              best = pos;
            }
          }
          return best;
        }
        return pacman.position;
      }
      case 'skin': {
        // Skin: Herd Pokkaman toward the closest ghost (other than self)
        if (allGhostPositions) {
          let closestGhost = null;
          let minDist = Infinity;
          for (let i = 0; i < allGhostPositions.length; i++) {
            if (i === selfIndex) continue;
            const g = allGhostPositions[i];
            const dist = this.calculateDistance(g, pacman.position);
            if (dist < minDist) {
              minDist = dist;
              closestGhost = g;
            }
          }
          if (closestGhost) {
            // Target a point between Pokkaman and the closest ghost
            return {
              x: (pacman.position.x + closestGhost.x) / 2,
              y: (pacman.position.y + closestGhost.y) / 2
            };
          }
        }
        return pacman.position;
      }
      default:
        return pacman.position;
    }
  }

  private getPossiblePaths(pos: Position, direction: string): Position[] {
    const paths: Position[] = [];
    const directions = ['up', 'down', 'left', 'right'];
    
    for (const dir of directions) {
      if (dir !== this.getOppositeDirection(direction)) {
        const nextPos = this.getPositionAhead(pos, dir, 1);
        if (this.isValidGridPosition(
          Math.floor(nextPos.x / CELL_SIZE),
          Math.floor(nextPos.y / CELL_SIZE)
        )) {
          paths.push(nextPos);
        }
      }
    }
    
    return paths;
  }

  private getStrategicPosition(ghostPos: Position, pacmanPos: Position): Position {
    // Calculate the center of the maze
    const centerX = Math.floor(this.maze[0].length / 2) * CELL_SIZE;
    const centerY = Math.floor(this.maze.length / 2) * CELL_SIZE;
    
    // Calculate vector from center to Pacman
    const vectorX = pacmanPos.x - centerX;
    const vectorY = pacmanPos.y - centerY;
    
    // Normalize vector
    const length = Math.sqrt(vectorX * vectorX + vectorY * vectorY);
    const normalizedX = vectorX / length;
    const normalizedY = vectorY / length;
    
    // Calculate strategic position (opposite side of the maze from Pacman)
    const strategicX = centerX - normalizedX * CELL_SIZE * 5;
    const strategicY = centerY - normalizedY * CELL_SIZE * 5;
    
    // Ensure position is valid
    if (this.isValidGridPosition(
      Math.floor(strategicX / CELL_SIZE),
      Math.floor(strategicY / CELL_SIZE)
    )) {
      return { x: strategicX, y: strategicY };
    }
    
    // Fallback to random position
    return this.getRandomAdjacentTarget(ghostPos);
  }

  private getOppositeDirection(direction: string): string {
    switch (direction) {
      case 'up': return 'down';
      case 'down': return 'up';
      case 'left': return 'right';
      case 'right': return 'left';
      default: return direction;
    }
  }

  private getFrightenedTarget(ghostPos: Position, currentTime: number): Position {
    // Change direction periodically
    if (currentTime - this.lastDirectionChange > 1000) {
      this.lastDirectionChange = currentTime;
      return this.getRandomAdjacentTarget(ghostPos);
    }
    return this.currentTarget;
  }

  private getRandomAdjacentTarget(pos: Position): Position {
    const directions = [
      { x: 1, y: 0 }, { x: -1, y: 0 },
      { x: 0, y: 1 }, { x: 0, y: -1 }
    ];
    
    // Convert pixel coordinates to grid coordinates
    const gridX = Math.floor(pos.x / CELL_SIZE);
    const gridY = Math.floor(pos.y / CELL_SIZE);
    
    const validDirections = directions.filter(dir => {
      const newX = gridX + dir.x;
      const newY = gridY + dir.y;
      return this.isValidGridPosition(newX, newY);
    });

    if (validDirections.length === 0) return pos;

    const randomDir = validDirections[Math.floor(Math.random() * validDirections.length)];
    return {
      x: (gridX + randomDir.x) * CELL_SIZE + CELL_SIZE / 2,
      y: (gridY + randomDir.y) * CELL_SIZE + CELL_SIZE / 2
    };
  }

  private getPositionAhead(pos: Position, direction: string, steps: number): Position {
    const stepSize = CELL_SIZE * steps;
    switch (direction) {
      case 'up':
        return { x: pos.x, y: pos.y - stepSize };
      case 'down':
        return { x: pos.x, y: pos.y + stepSize };
      case 'left':
        return { x: pos.x - stepSize, y: pos.y };
      case 'right':
        return { x: pos.x + stepSize, y: pos.y };
      default:
        return pos;
    }
  }

  private calculateDistance(pos1: Position, pos2: Position): number {
    return Math.sqrt(
      Math.pow(pos2.x - pos1.x, 2) + 
      Math.pow(pos2.y - pos1.y, 2)
    );
  }

  private isValidGridPosition(x: number, y: number, allowGhostHouse: boolean = false): boolean {
    // Always allow movement within ghost house bounds if specified
    if (allowGhostHouse && x >= GHOST_HOUSE_BOUNDS.left && 
        x <= GHOST_HOUSE_BOUNDS.right && 
        y >= GHOST_HOUSE_BOUNDS.top && 
        y <= GHOST_HOUSE_BOUNDS.bottom) {
      return true;
    }
  
    return x >= 0 && x < this.maze[0].length &&
           y >= 0 && y < this.maze.length &&
           this.maze[y][x] !== 1;
  }

  // Add method to handle mode transitions
  updateMode(ghost: Ghost): { mode: GhostMode, changed: boolean } {
    const currentTime = Date.now();
    let newMode = ghost.mode;
    let changed = false;

    console.log(`[GhostBehavior] ${this.type} current mode=${ghost.mode} isReleased=${ghost.isReleased}`);

    if (ghost.mode === 'frightened' && currentTime - this.lastModeChange > POWER_PELLET_DURATION) {
      newMode = 'chase';
      changed = true;
      this.lastModeChange = currentTime;
    }
    if (ghost.mode === 'eaten' && this.isInGhostHouse({ x: ghost.x, y: ghost.y })) {
      newMode = 'house';
      changed = true;
      this.lastModeChange = currentTime;
    }
    if (ghost.mode === 'house' && ghost.isReleased) {
      newMode = 'exiting';
      changed = true;
      this.lastModeChange = currentTime;
    }
    if (ghost.mode === 'exiting' && 
        Math.abs(ghost.x - GHOST_EXIT_POSITION.x * CELL_SIZE) < 2 &&
        Math.abs(ghost.y - GHOST_EXIT_POSITION.y * CELL_SIZE) < 2) {
      newMode = 'scatter';
      changed = true;
      this.lastModeChange = currentTime;
      console.log(`[GhostBehavior] ${this.type} mode changed from exiting to scatter`);
    }

    if (changed) {
      this.lastModeChange = currentTime;
    }
    
    return { mode: newMode, changed };
  }
}

export const calculateChaseTarget = (_ghost: Ghost, gameState: GameState): Position => {
  const pacmanGridX = Math.floor(gameState.pacman.x / CELL_SIZE);
  const pacmanGridY = Math.floor(gameState.pacman.y / CELL_SIZE);
  
  return { x: pacmanGridX, y: pacmanGridY };
};

export const calculateScatterTarget = (_ghost: Ghost, gameState: GameState): Position => {
  // Use corner positions for scatter mode
  return {
    x: Math.floor(Math.random() * gameState.maze[0].length),
    y: Math.floor(Math.random() * gameState.maze.length)
  };
};

export const calculateFrightenedTarget = (_ghost: Ghost, gameState: GameState): Position => {
  // Move randomly but avoid Pacman
  return {
    x: Math.floor(Math.random() * gameState.maze[0].length),
    y: Math.floor(Math.random() * gameState.maze.length)
  };
}; 