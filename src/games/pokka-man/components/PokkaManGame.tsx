import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { GameCanvas } from './GameCanvas';

const GameContainer = styled.div`
  position: relative;
  width: 600px;
  height: 660px;
  margin: 0 auto;
  background: #000;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  -ms-interpolation-mode: nearest-neighbor;
  image-rendering: -webkit-optimize-contrast;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

const GameSection = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  touch-action: none;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
`;

const ScoreDisplay = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  color: #FFD700;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1;
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

const StartButton = styled(RestartButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
`;

export const PokkaManGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDirection, setCurrentDirection] = useState('up');
  const [nextDirection, setNextDirection] = useState('');
  const [gameKey, setGameKey] = useState(0);

  const handleScoreUpdate = useCallback((newScore: number) => {
    setScore(newScore);
  }, []);

  const handleTurnTaken = useCallback(() => {
    setNextDirection('');
  }, []);

  const handleGameOver = useCallback(() => {
    setGameOver(true);
    setIsPlaying(false);
  }, []);

  const startGame = useCallback(() => {
    setGameOver(false);
    setIsPlaying(true);
    setScore(0);
    setCurrentDirection('up');
    setNextDirection('');
    setGameKey(prev => prev + 1);
  }, []);

  return (
    <GameContainer>
      <GameSection>
        <ScoreDisplay>Score: {score}</ScoreDisplay>
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
      </GameSection>
    </GameContainer>
  );
}; 