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

  &:active {
    background: rgba(var(--pokka-cyan-rgb), 0.6);
    transform: scale(0.95);
  }

  /* Prevent text selection */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

interface MobileControlsProps {
  onDirectionChange: (direction: string) => void;
}

export const MobileControls: React.FC<MobileControlsProps> = ({ onDirectionChange }) => {
  // Prevent default touch behaviors
  useEffect(() => {
    const preventDefault = (e: TouchEvent) => {
      e.preventDefault();
    };

    document.addEventListener('touchmove', preventDefault, { passive: false });
    document.addEventListener('touchstart', preventDefault, { passive: false });

    return () => {
      document.removeEventListener('touchmove', preventDefault);
      document.removeEventListener('touchstart', preventDefault);
    };
  }, []);

  const handleTouchStart = (direction: string, e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDirectionChange(direction);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onDirectionChange('');
  };

  return (
    <ControlsContainer>
      <div style={{ gridColumn: 2, gridRow: 1 }}>
        <ControlButton
          onTouchStart={(e) => handleTouchStart('up', e)}
          onTouchEnd={handleTouchEnd}
          aria-label="Move Up"
        >
          ↑
        </ControlButton>
      </div>
      <div style={{ gridColumn: 1, gridRow: 2 }}>
        <ControlButton
          onTouchStart={(e) => handleTouchStart('left', e)}
          onTouchEnd={handleTouchEnd}
          aria-label="Move Left"
        >
          ←
        </ControlButton>
      </div>
      <div style={{ gridColumn: 2, gridRow: 2 }}>
        <ControlButton
          onTouchStart={(e) => handleTouchStart('down', e)}
          onTouchEnd={handleTouchEnd}
          aria-label="Move Down"
        >
          ↓
        </ControlButton>
      </div>
      <div style={{ gridColumn: 3, gridRow: 2 }}>
        <ControlButton
          onTouchStart={(e) => handleTouchStart('right', e)}
          onTouchEnd={handleTouchEnd}
          aria-label="Move Right"
        >
          →
        </ControlButton>
      </div>
    </ControlsContainer>
  );
}; 