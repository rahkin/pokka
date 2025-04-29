import React, { useState } from 'react';
import styled from 'styled-components';
import { useAccount } from 'wagmi';
import { Leaderboard } from '../../components/Leaderboard';
import { submitScore } from '../../utils/scoreTracking';

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
  height: calc(100vh - 260px);
  background: #000;
  border-radius: 8px;
  overflow: hidden;
  margin: 30px auto;

  @media (max-width: 768px) {
    height: calc(100vh - 280px);
    margin: 20px auto;
  }
`;

const GameFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  background: #000;
`;

const InfoSection = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px 0;
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

export const PokkaSnakeGame: React.FC = () => {
  const { address } = useAccount();
  const [score, setScore] = useState(0);

  // Handle messages from the iframe
  React.useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // For local development, check if origin is localhost
      if (!event.origin.startsWith('http://localhost:')) return;

      // Handle score updates from the game
      if (event.data.type === 'score') {
        setScore(event.data.score);
      }
      
      // Handle game over and submit score
      if (event.data.type === 'gameOver' && address) {
        submitScore('pokka-snake', address, event.data.finalScore);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [address]);

  // Inject score handling code into the iframe
  React.useEffect(() => {
    const injectScoreHandling = () => {
      const frame = document.querySelector('iframe');
      if (frame && frame.contentWindow && frame.contentDocument) {
        const script = document.createElement('script');
        script.textContent = `
          // Override the Scoreboard class methods
          if (window.game && window.game.scoreboard) {
            const originalUpdateScore = window.game.scoreboard.updateScore;
            window.game.scoreboard.updateScore = function(newScore) {
              // Call original method
              originalUpdateScore.call(this, newScore);
              // Send score to parent
              window.parent.postMessage({ type: 'score', score: newScore }, '*');
            };

            const originalHandleGameOver = window.game.handleGameOver;
            window.game.handleGameOver = function() {
              // Call original method
              originalHandleGameOver.call(this);
              // Send final score to parent
              window.parent.postMessage({ 
                type: 'gameOver', 
                finalScore: window.game.scoreboard.currentScore 
              }, '*');
            };

            // Hide the original scoreboard
            const scoreboardElement = document.querySelector('.scoreboard');
            if (scoreboardElement) {
              scoreboardElement.style.display = 'none';
            }
          }
        `;
        frame.contentDocument.head.appendChild(script);
      }
    };

    // Try to inject after a short delay to ensure the game is loaded
    setTimeout(injectScoreHandling, 2000);
  }, []);

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
      <InfoSection>
        <HowToPlaySection>
          <HowToPlayTitle>How to Play</HowToPlayTitle>
          <div>
            Guide your snake through the 3D world, collecting tokens to grow longer.
            Avoid hitting walls and your own tail!
          </div>
          <Divider />
          <ControlsSection>
            <div style={{ marginBottom: '10px', color: 'var(--pokka-cyan)' }}>Controls:</div>
            <ControlItem>
              <div>
                <KeyboardKey>W</KeyboardKey>
                <KeyboardKey>↑</KeyboardKey>
              </div>
              <ControlDescription>Move Forward</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>S</KeyboardKey>
                <KeyboardKey>↓</KeyboardKey>
              </div>
              <ControlDescription>Move Backward</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>A</KeyboardKey>
                <KeyboardKey>←</KeyboardKey>
              </div>
              <ControlDescription>Turn Left</ControlDescription>
            </ControlItem>
            <ControlItem>
              <div>
                <KeyboardKey>D</KeyboardKey>
                <KeyboardKey>→</KeyboardKey>
              </div>
              <ControlDescription>Turn Right</ControlDescription>
            </ControlItem>
            <ControlItem>
              <KeyboardKey>Space</KeyboardKey>
              <ControlDescription>Jump</ControlDescription>
            </ControlItem>
          </ControlsSection>
        </HowToPlaySection>
        <div>
          <ScoreDisplay>Score: {score}</ScoreDisplay>
          <Leaderboard gameId="pokka-snake" limit={10} />
        </div>
      </InfoSection>
    </GameContainer>
  );
}; 