import React from 'react';
import styled from 'styled-components';

const StartContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`;

const Title = styled.h1`
  color: #FFD700;
  font-size: 48px;
  margin-bottom: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const StartButton = styled.button`
  background: #FF69B4;
  color: white;
  border: none;
  padding: 15px 40px;
  font-size: 24px;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s, background-color 0.2s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #FF1493;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;

interface StartScreenProps {
  onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <StartContainer>
      <Title>Pokka Man</Title>
      <StartButton onClick={onStart}>Start Game</StartButton>
    </StartContainer>
  );
}; 