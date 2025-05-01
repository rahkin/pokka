import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { GameCanvas } from './GameCanvas';
import { StartScreen } from './StartScreen';

const GameContainer = styled.div`
  position: relative;
  width: 600px;
  height: 660px;
  margin: 0 auto;
  background: #000;
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

export const PokkaManGame: React.FC = () => {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentDirection, setCurrentDirection] = useState('up');
  const [nextDirection, setNextDirection] = useState('');

  const handleStart = useCallback(() => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
  }, []);

  const handleGameOver = useCallback(() => {
    setGameOver(true);
    setIsPlaying(false);
  }, []);

  const handleScoreUpdate = useCallback((newScore: number) => {
    setScore(newScore);
  }, []);

  const handleTurnTaken = useCallback(() => {
    setCurrentDirection(nextDirection);
    setNextDirection('');
  }, [nextDirection]);

  return (
    <GameContainer>
      <ScoreDisplay>Score: {score}</ScoreDisplay>
      <GameCanvas
        onScoreUpdate={handleScoreUpdate}
        onGameOver={handleGameOver}
        currentDirection={currentDirection}
        nextDirection={nextDirection}
        onTurnTaken={handleTurnTaken}
        isPlaying={isPlaying}
        gameOver={gameOver}
      />
      {(!isPlaying || gameOver) && (
        <StartScreen onStart={handleStart} />
      )}
    </GameContainer>
  );
}; 