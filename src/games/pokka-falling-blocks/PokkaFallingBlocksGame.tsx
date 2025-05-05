import React, { useEffect, useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useAccount } from 'wagmi';
import { Leaderboard } from '../../components/Leaderboard';
import { saveScore } from '../../utils/scoreTracking';

// Game constants
const BOARD_WIDTH = 10;
const BOARD_HEIGHT = 20;
const BLOCK_SIZE = 25;
const INITIAL_DROP_INTERVAL = 1000;
const COLORS = [
  '#FF0D0D', // red
  '#0DFF1D', // green
  '#0D85FF', // blue
  '#FFD90D', // yellow
  '#FF0DFF', // magenta
  '#0DFFF3', // cyan
  '#FF8E0D'  // orange
];

// Tetromino shapes
const SHAPES = [
  [[1, 1, 1, 1]],                    // I
  [[1, 1], [1, 1]],                  // O
  [[1, 1, 1], [0, 1, 0]],           // T
  [[1, 1, 1], [1, 0, 0]],           // L
  [[1, 1, 1], [0, 0, 1]],           // J
  [[1, 1, 0], [0, 1, 1]],           // S
  [[0, 1, 1], [1, 1, 0]]            // Z
];

// Sound system
class SoundManager {
  private sounds: { [key: string]: HTMLAudioElement } = {};
  private muted: boolean = false;
  private bgmMuted: boolean = false;
  private bgm: HTMLAudioElement | null = null;
  private bgmVolume: number = 0.3;

  constructor() {
    this.loadSound('move', '/games/pokka-falling-blocks/assets/sounds/move.mp3');
    this.loadSound('rotate', '/games/pokka-falling-blocks/assets/sounds/rotate.mp3');
    this.loadSound('land', '/games/pokka-falling-blocks/assets/sounds/land.mp3');
    this.loadSound('clear', '/games/pokka-falling-blocks/assets/sounds/clear.mp3');
    this.loadSound('levelup', '/games/pokka-falling-blocks/assets/sounds/levelup.mp3');
    this.loadSound('gameover', '/games/pokka-falling-blocks/assets/sounds/gameover.mp3');
    
    // Initialize BGM
    this.bgm = new Audio('/games/pokka-falling-blocks/assets/sounds/bgm.mp3');
    this.bgm.loop = true;
    this.bgm.volume = this.bgmVolume;
  }

  private loadSound(name: string, path: string) {
    const audio = new Audio(path);
    audio.preload = 'auto';
    this.sounds[name] = audio;
  }

  play(name: string) {
    if (this.muted || !this.sounds[name]) return;
    const sound = this.sounds[name];
    sound.currentTime = 0;
    sound.play().catch(() => {});
  }

  startBgm() {
    if (!this.bgmMuted && this.bgm) {
      this.bgm.play().catch(() => {});
    }
  }

  stopBgm() {
    if (this.bgm) {
      this.bgm.pause();
      this.bgm.currentTime = 0;
    }
  }

  toggleMute() {
    this.muted = !this.muted;
  }

  toggleBgm() {
    this.bgmMuted = !this.bgmMuted;
    if (this.bgm) {
      if (this.bgmMuted) {
        this.bgm.pause();
      } else {
        this.bgm.play().catch(() => {});
      }
    }
  }

  cleanup() {
    this.stopBgm();
    Object.values(this.sounds).forEach(sound => {
      sound.pause();
      sound.currentTime = 0;
    });
  }
}

const CANVAS_WIDTH = BOARD_WIDTH * BLOCK_SIZE;
const CANVAS_HEIGHT = BOARD_HEIGHT * BLOCK_SIZE;
const NEXT_BOX_SIZE = 100; // px, for next piece preview

const GameContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 10px;
    gap: 15px;
  }
`;

const GameSection = styled.div`
  position: relative;
  width: ${CANVAS_WIDTH}px;
  height: ${CANVAS_HEIGHT}px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;

  canvas {
    width: 100%;
    height: 100%;
    touch-action: none;
  }

  @media (max-width: 768px) {
    width: min(100%, 90vh * ${BOARD_WIDTH / BOARD_HEIGHT});
    height: auto;
    aspect-ratio: ${BOARD_WIDTH}/${BOARD_HEIGHT};
  }
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;
  min-height: ${CANVAS_HEIGHT}px;

  @media (max-width: 768px) {
    width: min(100%, 90vh * ${BOARD_WIDTH / BOARD_HEIGHT});
    min-height: auto;
    gap: 10px;
  }
`;

const NextPieceBox = styled.div`
  background: #000;
  border: 1px solid var(--pokka-cyan);
  border-radius: 8px;
  padding: 20px;
  height: 120px;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;

  canvas {
    width: ${NEXT_BOX_SIZE}px;
    height: ${NEXT_BOX_SIZE}px;
    max-width: 100%;
    max-height: 100%;
    display: block;
  }

  @media (max-width: 768px) {
    height: 80px;
    min-height: 80px;
    padding: 10px;
  }
`;

const ScoreBox = styled.div`
  background: #000;
  border: 1px solid var(--pokka-cyan);
  border-radius: 8px;
  padding: 20px;
  color: var(--pokka-cyan);
  text-align: center;

  .level {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .score {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    padding: 10px;
    
    .level {
      font-size: 20px;
      margin-bottom: 5px;
    }
    
    .score {
      font-size: 20px;
    }
  }
`;

const HowToPlayBox = styled.div`
  background: #000;
  border: 1px solid var(--pokka-cyan);
  border-radius: 8px;
  padding: 20px;
  color: white;

  h3 {
    color: var(--pokka-cyan);
    margin: 0 0 15px 0;
    font-size: 24px;
  }

  .controls {
    margin-top: 20px;
    
    .title {
      color: var(--pokka-cyan);
      margin-bottom: 10px;
    }
  }

  @media (max-width: 768px) {
    padding: 15px;
    font-size: 14px;

    h3 {
      font-size: 20px;
      margin: 0 0 10px 0;
    }

    .controls {
      margin-top: 15px;
    }
  }
`;

// Add touch controls
const TouchControls = styled.div`
  display: none;
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const TouchButton = styled.button`
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid var(--pokka-cyan);
  border-radius: 8px;
  color: var(--pokka-cyan);
  padding: 15px;
  font-size: 20px;
  touch-action: manipulation;
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: rgba(0, 240, 255, 0.2);
  }
`;

const ControlItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 10px;
`;

const KeyboardKey = styled.span`
  background: rgba(0, 240, 255, 0.1);
  border: 1px solid var(--pokka-cyan);
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
  font-family: monospace;
  min-width: 30px;
  text-align: center;
`;

const ControlDescription = styled.span`
  color: white;
`;

export const PokkaFallingBlocksGame: React.FC = () => {
  const { address } = useAccount();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nextCanvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const soundManagerRef = useRef<SoundManager | null>(null);
  const lastDropTimeRef = useRef<number>(Date.now());
  const gameLoopRef = useRef<number>();
  const gameStateRef = useRef<{
    board: string[][];
    currentPiece: number[][];
    currentX: number;
    currentY: number;
    currentColor: string;
    nextPiece: number[][];
    nextColor: string;
    level: number;
    gameOver: boolean;
    paused: boolean;
    dropInterval: number;
  }>({
    board: Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill('')),
    currentPiece: SHAPES[0],
    currentX: Math.floor((BOARD_WIDTH - SHAPES[0][0].length) / 2),
    currentY: 0,
    currentColor: COLORS[0],
    nextPiece: SHAPES[1],
    nextColor: COLORS[1],
    level: 1,
    gameOver: false,
    paused: false,
    dropInterval: INITIAL_DROP_INTERVAL
  });
  const [, forceUpdate] = useState({});

  // Initialize sound manager and start BGM
  useEffect(() => {
    soundManagerRef.current = new SoundManager();
    soundManagerRef.current.startBgm();
    
    return () => {
      if (soundManagerRef.current) {
        soundManagerRef.current.cleanup();
      }
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, []);

  const drawBlock = useCallback((ctx: CanvasRenderingContext2D, x: number, y: number, color: string) => {
    const blockX = x * BLOCK_SIZE;
    const blockY = y * BLOCK_SIZE;
    
    // Main block
    ctx.fillStyle = color;
    ctx.fillRect(blockX, blockY, BLOCK_SIZE, BLOCK_SIZE);
    
    // Highlight
    ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.fillRect(blockX, blockY, BLOCK_SIZE, 2);
    ctx.fillRect(blockX, blockY, 2, BLOCK_SIZE);
    
    // Shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(blockX + BLOCK_SIZE - 2, blockY, 2, BLOCK_SIZE);
    ctx.fillRect(blockX, blockY + BLOCK_SIZE - 2, BLOCK_SIZE, 2);
  }, []);

  const isValidMove = useCallback((offsetX: number, offsetY: number) => {
    const { currentPiece, currentX, currentY, board } = gameStateRef.current;
    
    for (let y = 0; y < currentPiece.length; y++) {
      for (let x = 0; x < currentPiece[y].length; x++) {
        if (currentPiece[y][x]) {
          const newX = currentX + x + offsetX;
          const newY = currentY + y + offsetY;
          
          if (newX < 0 || newX >= BOARD_WIDTH || 
              newY < 0 || newY >= BOARD_HEIGHT ||
              board[newY][newX]) {
            return false;
          }
        }
      }
    }
    return true;
  }, []);

  const moveLeft = useCallback(() => {
    if (isValidMove(-1, 0)) {
      soundManagerRef.current?.play('move');
      gameStateRef.current.currentX--;
      forceUpdate({});
    }
  }, [isValidMove]);

  const moveRight = useCallback(() => {
    if (isValidMove(1, 0)) {
      soundManagerRef.current?.play('move');
      gameStateRef.current.currentX++;
      forceUpdate({});
    }
  }, [isValidMove]);

  const rotate = useCallback(() => {
    const { currentPiece } = gameStateRef.current;
    const rotated = currentPiece[0].map((_, i) =>
      currentPiece.map(row => row[row.length - 1 - i])
    );
    
    const prevPiece = gameStateRef.current.currentPiece;
    gameStateRef.current.currentPiece = rotated;
    
    // Wall kicks
    for (let offset of [0, -1, 1, -2, 2]) {
      if (isValidMove(offset, 0)) {
        soundManagerRef.current?.play('rotate');
        gameStateRef.current.currentX += offset;
        forceUpdate({});
        return;
      }
    }
    
    // If no valid position found, revert rotation
    gameStateRef.current.currentPiece = prevPiece;
  }, [isValidMove]);

  const spawnPiece = useCallback(() => {
    const nextShapeIndex = Math.floor(Math.random() * SHAPES.length);
    
    gameStateRef.current.currentPiece = gameStateRef.current.nextPiece;
    gameStateRef.current.currentColor = gameStateRef.current.nextColor;
    gameStateRef.current.currentX = Math.floor((BOARD_WIDTH - gameStateRef.current.nextPiece[0].length) / 2);
    gameStateRef.current.currentY = 0;
    gameStateRef.current.nextPiece = SHAPES[nextShapeIndex];
    gameStateRef.current.nextColor = COLORS[nextShapeIndex];

    // Check for game over
    if (!isValidMove(0, 0)) {
      soundManagerRef.current?.play('gameover');
      soundManagerRef.current?.stopBgm(); // Stop BGM on game over
      gameStateRef.current.gameOver = true;
      
      // Save score immediately when game is over
      if (address) {
        saveScore('pokka-falling-blocks', address, score).then(() => {
          const event = new CustomEvent('scoreUpdated', { 
            detail: { 
              gameId: 'pokka-falling-blocks',
              score: score 
            } 
          });
          window.dispatchEvent(event);
        }).catch(error => {
          console.error('Error saving score:', error);
        });
      }
    }
    
    forceUpdate({});
  }, [isValidMove, score, address]);

  const resetGame = useCallback(() => {
    gameStateRef.current = {
      board: Array(BOARD_HEIGHT).fill(null).map(() => Array(BOARD_WIDTH).fill('')),
      currentPiece: SHAPES[0],
      currentX: Math.floor((BOARD_WIDTH - SHAPES[0][0].length) / 2),
      currentY: 0,
      currentColor: COLORS[0],
      nextPiece: SHAPES[1],
      nextColor: COLORS[1],
      level: 1,
      gameOver: false,
      paused: false,
      dropInterval: INITIAL_DROP_INTERVAL
    };
    setScore(0);
    lastDropTimeRef.current = Date.now();
    // Restart BGM when game resets
    soundManagerRef.current?.startBgm();
    spawnPiece();
    forceUpdate({});
  }, [spawnPiece]);

  const landPiece = useCallback(() => {
    const { currentPiece, currentX, currentY, currentColor, board } = gameStateRef.current;
    
    // Add piece to board
    const newBoard = board.map(row => [...row]);
    for (let y = 0; y < currentPiece.length; y++) {
      for (let x = 0; x < currentPiece[y].length; x++) {
        if (currentPiece[y][x]) {
          newBoard[currentY + y][currentX + x] = currentColor;
        }
      }
    }

    soundManagerRef.current?.play('land');
    
    // Check for completed lines
    let linesCleared = 0;
    let y = BOARD_HEIGHT - 1;
    while (y >= 0) {
      if (newBoard[y].every(cell => cell !== '')) {
        newBoard.splice(y, 1);
        newBoard.unshift(Array(BOARD_WIDTH).fill(''));
        linesCleared++;
        // Don't decrement y here because we need to check the same row again
        // since the line above has moved down
      } else {
        y--;
      }
    }
    
    // Update score and level
    if (linesCleared > 0) {
      soundManagerRef.current?.play('clear');
      const newScore = score + linesCleared * linesCleared * 100 * gameStateRef.current.level;
      setScore(newScore);
      
      const newLevel = Math.floor(newScore / 1000) + 1;
      if (newLevel > gameStateRef.current.level) {
        soundManagerRef.current?.play('levelup');
        gameStateRef.current.level = newLevel;
        gameStateRef.current.dropInterval = Math.max(100, INITIAL_DROP_INTERVAL - (newLevel - 1) * 100);
      }
    }
    
    gameStateRef.current.board = newBoard;
    
    // Spawn new piece
    spawnPiece();
  }, [score, spawnPiece]);

  const moveDown = useCallback(() => {
    if (isValidMove(0, 1)) {
      gameStateRef.current.currentY++;
      forceUpdate({});
      return true;
    }
    landPiece();
    return false;
  }, [isValidMove, landPiece]);

  const hardDrop = useCallback(() => {
    while (isValidMove(0, 1)) {
      gameStateRef.current.currentY++;
    }
    landPiece();
    forceUpdate({});
  }, [isValidMove, landPiece]);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (gameStateRef.current.gameOver) {
      if (event.code === 'Space' || event.code === 'Enter') {
        event.preventDefault();
        resetGame();
      }
      return;
    }

    if (gameStateRef.current.paused) {
      if (event.code === 'KeyP') {
        gameStateRef.current.paused = false;
        soundManagerRef.current?.startBgm();
        forceUpdate({});
      }
      return;
    }

    switch (event.code) {
      case 'ArrowLeft':
        event.preventDefault();
        moveLeft();
        break;
      case 'ArrowRight':
        event.preventDefault();
        moveRight();
        break;
      case 'ArrowDown':
        event.preventDefault();
        moveDown();
        break;
      case 'ArrowUp':
        event.preventDefault();
        rotate();
        break;
      case 'Space':
        event.preventDefault();
        hardDrop();
        break;
      case 'KeyP':
        gameStateRef.current.paused = true;
        soundManagerRef.current?.stopBgm();
        forceUpdate({});
        break;
      case 'KeyM':
        soundManagerRef.current?.toggleMute();
        break;
      case 'KeyB':
        soundManagerRef.current?.toggleBgm();
        break;
    }
  }, [moveLeft, moveRight, moveDown, rotate, hardDrop, resetGame]);

  // Game loop
  useEffect(() => {
    const gameLoop = () => {
      if (!gameStateRef.current.gameOver && !gameStateRef.current.paused) {
        const now = Date.now();
        if (now - lastDropTimeRef.current > gameStateRef.current.dropInterval) {
          moveDown();
          lastDropTimeRef.current = now;
        }
      }
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);
  }, [moveDown]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Drawing effect
  useEffect(() => {
    const canvas = canvasRef.current;
    const nextCanvas = nextCanvasRef.current;
    if (!canvas || !nextCanvas) return;

    // Set crisp rendering
    canvas.style.imageRendering = 'pixelated';
    nextCanvas.style.imageRendering = 'pixelated';

    const ctx = canvas.getContext('2d');
    const nextCtx = nextCanvas.getContext('2d');
    if (!ctx || !nextCtx) return;

    // Set canvas sizes - use actual pixel dimensions for sharp rendering
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;

    nextCanvas.width = NEXT_BOX_SIZE;
    nextCanvas.height = NEXT_BOX_SIZE;

    const render = () => {
      const gameState = gameStateRef.current;

      // Clear canvases
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      nextCtx.fillStyle = '#000000';
      nextCtx.fillRect(0, 0, nextCanvas.width, nextCanvas.height);
      
      // Draw board
      gameState.board.forEach((row, y) => {
        row.forEach((color, x) => {
          if (color) {
            drawBlock(ctx, x, y, color);
          }
        });
      });
      
      // Draw current piece
      const { currentPiece, currentX, currentY, currentColor } = gameState;
      currentPiece.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            drawBlock(ctx, currentX + x, currentY + y, currentColor);
          }
        });
      });

      // Draw next piece preview
      const { nextPiece, nextColor } = gameState;
      // Center the next piece in the preview box
      const pieceWidth = nextPiece[0].length * BLOCK_SIZE;
      const pieceHeight = nextPiece.length * BLOCK_SIZE;
      const offsetX = Math.floor((NEXT_BOX_SIZE - pieceWidth) / 2);
      const offsetY = Math.floor((NEXT_BOX_SIZE - pieceHeight) / 2);
      nextPiece.forEach((row, y) => {
        row.forEach((cell, x) => {
          if (cell) {
            // Draw at integer pixel positions for crispness
            drawBlock(nextCtx, (offsetX / BLOCK_SIZE) + x, (offsetY / BLOCK_SIZE) + y, nextColor);
          }
        });
      });

      // Draw game over or pause overlay
      if (gameState.gameOver || gameState.paused) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.75)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '20px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';
        ctx.textAlign = 'center';
        
        if (gameState.gameOver) {
          ctx.fillText('GAME OVER', canvas.width / 2, canvas.height / 2 - 30);
          ctx.fillText(`Final Score: ${score}`, canvas.width / 2, canvas.height / 2);
          ctx.fillText('Press SPACE to restart', canvas.width / 2, canvas.height / 2 + 30);
        } else {
          ctx.fillText('PAUSED', canvas.width / 2, canvas.height / 2);
          ctx.fillText('Press P to resume', canvas.width / 2, canvas.height / 2 + 30);
        }
      }

      requestAnimationFrame(render);
    };

    render();
  }, [drawBlock, score]);

  // Start game
  useEffect(() => {
    spawnPiece();
  }, [spawnPiece]);

  const handleTouchStart = useCallback((action: () => void) => (e: React.TouchEvent) => {
    e.preventDefault();
    action();
  }, []);

  return (
    <GameContainer>
      <GameSection>
        <canvas ref={canvasRef} />
        <TouchControls>
          <TouchButton onTouchStart={handleTouchStart(moveLeft)}>←</TouchButton>
          <TouchButton onTouchStart={handleTouchStart(rotate)}>↻</TouchButton>
          <TouchButton onTouchStart={handleTouchStart(moveDown)}>↓</TouchButton>
          <TouchButton onTouchStart={handleTouchStart(moveRight)}>→</TouchButton>
          <TouchButton onTouchStart={handleTouchStart(hardDrop)}>⤓</TouchButton>
        </TouchControls>
      </GameSection>
      <SidebarSection>
        <NextPieceBox>
          <canvas ref={nextCanvasRef} />
        </NextPieceBox>
        
        <ScoreBox>
          <div className="level">Level: {gameStateRef.current.level}</div>
          <div className="score">Score: {score}</div>
        </ScoreBox>
        
        <Leaderboard gameId="pokka-falling-blocks" limit={10} />
        
        <HowToPlayBox>
          <h3>How to Play</h3>
          <div>
            Stack the falling blocks to create complete lines. Clear lines to score points and 
            level up! The game speeds up as you progress through levels.
          </div>
          <div className="controls">
            <div className="title">Controls:</div>
            <ControlItem>
              <div>
                <KeyboardKey>←</KeyboardKey>
                <KeyboardKey>→</KeyboardKey>
              </div>
              <ControlDescription>Move Left/Right</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>↓</KeyboardKey>
              </div>
              <ControlDescription>Soft Drop</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>↑</KeyboardKey>
              </div>
              <ControlDescription>Rotate</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>Space</KeyboardKey>
              </div>
              <ControlDescription>Hard Drop / Restart</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>P</KeyboardKey>
              </div>
              <ControlDescription>Pause</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>M</KeyboardKey>
              </div>
              <ControlDescription>Mute Sound Effects</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>B</KeyboardKey>
              </div>
              <ControlDescription>Toggle Background Music</ControlDescription>
            </ControlItem>
          </div>
        </HowToPlayBox>
      </SidebarSection>
    </GameContainer>
  );
}; 