import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useAccount } from 'wagmi';
import { GameCanvas } from './components/GameCanvas';
import { MobileControls } from './components/MobileControls';
import { Leaderboard } from '../../components/Leaderboard';
import { saveScore } from '../../utils/scoreTracking';

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
    gap: 20px;
  }
`;

const GameSection = styled.div`
  position: relative;
  width: 600px;
  height: 660px;
  background: #000;
  border-radius: 8px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1/1.1;
    margin-bottom: 60px; /* Space for mobile controls */
  }
`;

const SidebarSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 500px;
  }
`;

const ScoreDisplay = styled.div`
  color: var(--pokka-cyan);
  font-size: 24px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 8px;
  border: 1px solid var(--pokka-cyan);
  text-align: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 15px;
  }
`;

const StartButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
  font-size: 24px;
  background: #ff0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  z-index: 10;

  &:hover {
    background: #ff6;
  }
`;

const GameOverOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 20;
`;

const GameOverText = styled.h2`
  color: #ff0;
  font-size: 48px;
  margin-bottom: 20px;
`;

const FinalScore = styled.div`
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
`;

const RestartButton = styled.button`
  padding: 10px 20px;
  font-size: 24px;
  background: #ff0;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #ff6;
  }
`;

const HowToPlaySection = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid var(--pokka-cyan);
  color: white;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const HowToPlayTitle = styled.h3`
  color: var(--pokka-cyan);
  margin-bottom: 1rem;
  text-align: center;
`;

const ControlsSection = styled.div`
  margin-top: 10px;
`;

const ControlItem = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
  gap: 10px;
`;

const KeyboardKey = styled.span`
  background: var(--pokka-cyan);
  color: black;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: monospace;
  font-weight: bold;
  min-width: 30px;
  text-align: center;
`;

const ControlDescription = styled.span`
  color: white;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin: 10px 0;
`;

export const PokkaManGame: React.FC = () => {
  const { address } = useAccount();
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDirection, setCurrentDirection] = useState<string>('up');
  const [nextDirection, setNextDirection] = useState<string>('');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [gameKey, setGameKey] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      let handled = false;
      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          setNextDirection('up');
          handled = true;
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          setNextDirection('down');
          handled = true;
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          setNextDirection('left');
          handled = true;
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          setNextDirection('right');
          handled = true;
          break;
        default:
          break;
      }
      if (handled) {
        e.preventDefault();
      }
    };
    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile && isPlaying) {
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isMobile, isPlaying]);

  const handleScoreUpdate = (newScore: number) => {
    setScore(newScore);
  };

  const handleTurnTaken = useCallback(() => {
    setNextDirection('');
  }, []);

  const handleGameOver = () => {
    setGameOver(true);
    setIsPlaying(false);
    if (address && score > 0) {
      saveScore('pokka-man', address, score);
    }
  };

  const startGame = () => {
    setGameOver(false);
    setIsPlaying(true);
    setScore(0);
    setCurrentDirection('up');
    setGameKey(prev => prev + 1);
  };

  const handleDirectionChange = (direction: string) => {
    setNextDirection(direction);
  };

  return (
    <GameContainer>
      <GameSection>
        <GameCanvas 
          key={gameKey}
          onScoreUpdate={handleScoreUpdate}
          onGameOver={handleGameOver}
          currentDirection={currentDirection}
          nextDirection={nextDirection}
          onTurnTaken={handleTurnTaken}
          isPlaying={isPlaying}
          gameOver={gameOver}
        />
        {!isPlaying && !gameOver && (
          <StartButton onClick={startGame}>Start Game</StartButton>
        )}
        {gameOver && (
          <GameOverOverlay>
            <GameOverText>Game Over</GameOverText>
            <FinalScore>Final Score: {score}</FinalScore>
            <RestartButton onClick={startGame}>Play Again</RestartButton>
          </GameOverOverlay>
        )}
        {isMobile && <MobileControls onDirectionChange={handleDirectionChange} />}
      </GameSection>
      <SidebarSection>
        <HowToPlaySection>
          <HowToPlayTitle>How to Play</HowToPlayTitle>
          <div>
            Guide Pokka through the maze, collect all dots while avoiding Memecoins. 
            Eat power pellets to turn the tables and chase the Memecoins! Each Memecoin has its own 
            unique personality and strategy - watch out for Andy, Siren, Aicz, and Banana!
          </div>
          <Divider />
          <ControlsSection>
            <div style={{ marginBottom: '10px', color: 'var(--pokka-cyan)' }}>Desktop Controls:</div>
            <ControlItem>
              <div>
                <KeyboardKey>W</KeyboardKey>
                <KeyboardKey>↑</KeyboardKey>
              </div>
              <ControlDescription>Move Up</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>S</KeyboardKey>
                <KeyboardKey>↓</KeyboardKey>
              </div>
              <ControlDescription>Move Down</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>A</KeyboardKey>
                <KeyboardKey>←</KeyboardKey>
              </div>
              <ControlDescription>Move Left</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>D</KeyboardKey>
                <KeyboardKey>→</KeyboardKey>
              </div>
              <ControlDescription>Move Right</ControlDescription>
            </ControlItem>
          </ControlsSection>
          {isMobile && (
            <>
              <Divider />
              <ControlsSection>
                <div style={{ marginBottom: '10px', color: 'var(--pokka-cyan)' }}>Mobile Controls:</div>
                <div>Use the on-screen directional buttons at the bottom of the game to control Pokka's movement.</div>
              </ControlsSection>
            </>
          )}
        </HowToPlaySection>
        <ScoreDisplay>Score: {score}</ScoreDisplay>
        <Leaderboard gameId="pokka-man" limit={10} />
      </SidebarSection>
    </GameContainer>
  );
}; 