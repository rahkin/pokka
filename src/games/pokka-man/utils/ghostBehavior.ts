import { GhostMode } from './ghostStateMachine';
import { CELL_SIZE, GHOST_PERSONALITIES, GHOST_EXIT_POSITION, GHOST_HOUSE_POSITION, GHOST_HOUSE_BOUNDS } from './gameConstants';

interface Position {
  x: number;
  y: number;
}

interface Ghost {
  x: number;
  y: number;
  direction: string;
  type: 'pink' | 'blue' | 'purple' | 'skin';
  mode: 'chase' | 'scatter' | 'frightened' | 'eaten';
  targetX: number;
  targetY: number;
  isReleased: boolean;
  stateMachine: any;
  path: Array<{ x: number; y: number }>;
  lastPathUpdate: number;
  baseSpeed: number;
  consecutiveEats: number;
  spawnDelay: number;
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
  private readonly ghostHouse: Position;
  private lastDirectionChange: number = 0;
  private lastTargetUpdate: number = 0;
  private currentTarget: Position;

  constructor(type: string, scatterTarget: Position, maze: number[][], ghostHouse: Position) {
    this.type = type;
    this.scatterTarget = scatterTarget;
    this.maze = maze;
    this.ghostHouse = ghostHouse;
    this.currentTarget = scatterTarget;
  }

  getTargetPosition(ghost: GhostState, pacman: PacmanState, redGhost?: Position): Position {
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
    
    // Only update target periodically to prevent erratic movement
    if (currentTime - this.lastTargetUpdate < 500) {
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
      target = this.getChaseTarget(ghost, pacman, redGhost);
    }
    
    this.currentTarget = target;
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

  private getChaseTarget(ghost: GhostState, pacman: PacmanState, redGhost?: Position): Position {
    switch (this.type) {
      case 'pink':
        return this.getPinkTarget(pacman, ghost);
      case 'blue':
        return this.getBlueTarget(pacman, redGhost || ghost.position, ghost);
      case 'purple':
        return this.getPurpleTarget(ghost.position, pacman, ghost);
      case 'skin':
        return this.getSkinTarget(ghost.position, pacman, ghost);
      default:
        return pacman.position;
    }
  }

  private getPinkTarget(pacman: PacmanState, _ghost: GhostState): Position {
    const personality = GHOST_PERSONALITIES.pink;
    const lookAhead = personality.lookAheadTiles;
    
    // Occasionally make random turns
    if (Math.random() < personality.turnProbability && 
        Date.now() - this.lastDirectionChange > 2000) {
      this.lastDirectionChange = Date.now();
      return this.getRandomAdjacentTarget(_ghost.position);
    }
    
    return this.getPositionAhead(pacman.position, pacman.direction, lookAhead);
  }

  private getBlueTarget(pacman: PacmanState, redGhost: Position, _ghost: GhostState): Position {
    const personality = GHOST_PERSONALITIES.blue;
    // Get position 2 tiles ahead of Pacman
    const aheadPos = this.getPositionAhead(pacman.position, pacman.direction, 2);
    
    // Calculate vector from red ghost
    const vectorX = (aheadPos.x - redGhost.x) * personality.vectorMultiplier;
    const vectorY = (aheadPos.y - redGhost.y) * personality.vectorMultiplier;
    
    // Maintain minimum distance from red ghost
    const distanceToRed = this.calculateDistance(_ghost.position, redGhost);
    if (distanceToRed < personality.minDistance * CELL_SIZE) {
      return this.getOppositePosition(_ghost.position, redGhost);
    }
    
    return {
      x: aheadPos.x + vectorX,
      y: aheadPos.y + vectorY
    };
  }

  private getPurpleTarget(ghostPos: Position, pacman: PacmanState, _ghost: GhostState): Position {
    const personality = GHOST_PERSONALITIES.purple;
    const distance = this.calculateDistance(ghostPos, pacman.position);
    
    // Switch between behaviors based on distance
    if (distance > personality.switchDistance * CELL_SIZE) {
      return pacman.position; // Direct chase when far
    } else {
      // Move to ambush position when close
      return this.getPositionAhead(
        pacman.position,
        pacman.direction,
        personality.ambushDistance
      );
    }
  }

  private getSkinTarget(ghostPos: Position, pacman: PacmanState, _ghost: GhostState): Position {
    const personality = GHOST_PERSONALITIES.skin;
    const distance = this.calculateDistance(ghostPos, pacman.position);
    
    // Alternate between direct chase and scatter
    const currentTime = Date.now();
    if (currentTime % personality.scatterInterval < personality.scatterInterval / 2) {
      return this.scatterTarget;
    }
    
    return distance < personality.chaseThreshold * CELL_SIZE ?
      pacman.position : // Direct chase when close
      this.getRandomAdjacentTarget(ghostPos); // Random movement when far
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
      return this.isValidPosition(newX, newY);
    });

    if (validDirections.length === 0) return pos;

    const randomDir = validDirections[Math.floor(Math.random() * validDirections.length)];
    return {
      x: (gridX + randomDir.x) * CELL_SIZE + CELL_SIZE / 2,
      y: (gridY + randomDir.y) * CELL_SIZE + CELL_SIZE / 2
    };
  }

  private getOppositePosition(from: Position, to: Position): Position {
    const dx = from.x - to.x;
    const dy = from.y - to.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance === 0) return from;
    
    return {
      x: from.x + (dx / distance) * CELL_SIZE * 2,
      y: from.y + (dy / distance) * CELL_SIZE * 2
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

  private isValidPosition(x: number, y: number): boolean {
    // Check bounds
    if (x < 0 || x >= this.maze[0].length || y < 0 || y >= this.maze.length) {
      return false;
    }
    
    // Check if position is a wall (1) or empty (0) or has a dot (2) or power pellet (3)
    const cell = this.maze[y][x];
    return cell !== 1;
  }

  private isReachablePosition(from: Position, to: Position): boolean {
    // Convert pixel coordinates to grid coordinates
    const fromGridX = Math.floor(from.x / CELL_SIZE);
    const fromGridY = Math.floor(from.y / CELL_SIZE);
    const toGridX = Math.floor(to.x / CELL_SIZE);
    const toGridY = Math.floor(to.y / CELL_SIZE);

    // Simple check: if either position is invalid, return false
    if (!this.isValidPosition(fromGridX, fromGridY) || !this.isValidPosition(toGridX, toGridY)) {
      return false;
    }

    // If positions are adjacent, check if there's a wall between them
    if (Math.abs(fromGridX - toGridX) + Math.abs(fromGridY - toGridY) === 1) {
      return true;
    }

    // For non-adjacent positions, return true and let the movement logic handle pathfinding
    return true;
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