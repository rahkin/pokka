import React, { useState } from 'react';
import styled from 'styled-components';
import { useAccount } from 'wagmi';
import { Leaderboard } from '../../components/Leaderboard';
import { saveScore } from '../../utils/scoreTracking';

const GameContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const GameSection = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 200px);
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  margin: 30px auto;

  @media (max-width: 768px) {
    height: calc(100vh - 220px);
    margin: 20px auto;
  }
`;

const GameFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #000;
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

export const PokkaSnakeGame: React.FC = () => {
  const { address } = useAccount();
  const [score, setScore] = useState(0);

  // Handle messages from the iframe
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if the origin is from our domain
      const allowedOrigins = [
        'http://localhost:5173',
        'https://dev-pokka.onrender.com',
        window.location.origin
      ];

      if (!allowedOrigins.includes(event.origin)) return;

      // Handle score updates from the game
      if (event.data.type === 'score') {
        setScore(event.data.score);
        // Save score to leaderboard immediately when it updates
        if (address) {
          saveScore('pokka-snake', address, event.data.score);
        }
      }
      
      // Handle game over and submit final score
      if (event.data.type === 'gameOver' && address) {
        saveScore('pokka-snake', address, event.data.finalScore);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [address]);

  return (
    <GameContainer>
      <GameSection>
        <GameFrame
          src="/games/pokka-snakes-gl/dist/index.html"
          title="Pokka Snake Game"
          allow="autoplay"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
        />
      </GameSection>
      <ScoreDisplay>Score: {score}</ScoreDisplay>
      <Leaderboard gameId="pokka-snake" limit={10} />
    </GameContainer>
  );
}; 