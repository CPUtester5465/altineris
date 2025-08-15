import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current.x = e.clientX;
      mousePosition.current.y = e.clientY;
    };

    const animateCursor = () => {
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * 0.1;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * 0.1;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPosition.current.x - 10 + 'px';
        cursorRef.current.style.top = cursorPosition.current.y - 10 + 'px';
      }
      
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="custom-cursor" ref={cursorRef}>
      <div className="cursor-inner"></div>
    </div>
  );
}
