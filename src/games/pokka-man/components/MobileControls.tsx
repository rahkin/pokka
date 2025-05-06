import React, { useEffect } from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  position: absolute;
  bottom: min(20px, 5vh);
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: min(10px, 2vw);
  width: min(200px, 40vw);
  height: min(200px, 40vw);
  z-index: 10;
  touch-action: none; /* Prevent browser handling of touch events */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;

  @media (max-width: 768px) {
    position: static;
    left: unset;
    bottom: unset;
    transform: none;
    margin: 20px auto 0 auto;
  }
`;

const ControlButton = styled.button<{ isPressed?: boolean }>`
  background: ${props => props.isPressed ? 'rgba(var(--pokka-cyan-rgb), 0.4)' : 'rgba(255, 255, 255, 0.2)'};
  border: 2px solid var(--pokka-cyan);
  border-radius: 50%;
  color: white;
  font-size: min(24px, 5vw);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  touch-action: none;
  width: 100%;
  height: 100%;
  padding: 0;
  transition: all 0.1s ease;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: rgba(var(--pokka-cyan-rgb), 0.6);
    transform: scale(0.95);
  }
`;

interface MobileControlsProps {
  onDirectionChange: (direction: string) => void;
}

export const MobileControls: React.FC<MobileControlsProps> = ({ onDirectionChange }) => {
  // Prevent default touch behaviors
  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      if (e.target instanceof Element && e.target.closest('.control-button')) {
        e.preventDefault();
      }
    };

    // Add passive: false to ensure preventDefault works
    document.addEventListener('touchstart', preventDefault, { passive: false });
    document.addEventListener('touchmove', preventDefault, { passive: false });
    document.addEventListener('touchend', preventDefault, { passive: false });

    return () => {
      document.removeEventListener('touchstart', preventDefault);
      document.removeEventListener('touchmove', preventDefault);
      document.removeEventListener('touchend', preventDefault);
    };
  }, []);

  const handleTouchStart = (direction: string) => (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Mobile control pressed:', direction);
    onDirectionChange(direction);
  };

  const handleClick = (direction: string) => () => {
    console.log('Mobile control clicked:', direction);
    onDirectionChange(direction);
  };

  return (
    <ControlsContainer>
      <div style={{ gridColumn: 2, gridRow: 1 }}>
        <ControlButton
          className="control-button"
          onTouchStart={handleTouchStart('up')}
          onClick={handleClick('up')}
          aria-label="Move Up"
        >
          ↑
        </ControlButton>
      </div>
      <div style={{ gridColumn: 1, gridRow: 2 }}>
        <ControlButton
          className="control-button"
          onTouchStart={handleTouchStart('left')}
          onClick={handleClick('left')}
          aria-label="Move Left"
        >
          ←
        </ControlButton>
      </div>
      <div style={{ gridColumn: 2, gridRow: 2 }}>
        <ControlButton
          className="control-button"
          onTouchStart={handleTouchStart('down')}
          onClick={handleClick('down')}
          aria-label="Move Down"
        >
          ↓
        </ControlButton>
      </div>
      <div style={{ gridColumn: 3, gridRow: 2 }}>
        <ControlButton
          className="control-button"
          onTouchStart={handleTouchStart('right')}
          onClick={handleClick('right')}
          aria-label="Move Right"
        >
          →
        </ControlButton>
      </div>
    </ControlsContainer>
  );
}; 