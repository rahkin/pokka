import { useEffect, useState } from 'react';

export const useMobileControls = () => {
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Simple quadrant-based direction detection
      if (x < width / 3) {
        setDirection('left');
      } else if (x > (width * 2) / 3) {
        setDirection('right');
      } else if (y < height / 2) {
        setDirection('up');
      } else {
        setDirection('down');
      }
    };

    document.addEventListener('touchstart', handleTouchStart);
    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, []);

  return direction;
}; 