import React, { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const circle = useRef({ x: 0, y: 0 });
  
  const dotRef = useRef(null);
  const circleRef = useRef(null);
  
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);

      const target = e.target;
      const isPointer = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||      
        target.closest('button');

      setIsHovered(isPointer);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);
    
    const animate = () => {
      const speed = 0.15; 
      
      circle.current.x += (mouse.current.x - circle.current.x) * speed;
      circle.current.y += (mouse.current.y - circle.current.y) * speed;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (circleRef.current) {
        circleRef.current.style.transform = `translate3d(${circle.current.x}px, ${circle.current.y}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <div 
        ref={dotRef}
        className={`fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-opacity duration-300
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      />

      <div 
        ref={circleRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference transition-opacity duration-300 flex items-center justify-center
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <div 
          className={`
            rounded-full border border-white transition-all duration-300 ease-out
            ${isHovered 
              ? 'w-20 h-20 bg-white opacity-100 scale-100'
              : 'w-10 h-10 bg-transparent scale-100'
            }
          `}
        ></div>
      </div>
    </>
  );
};

export default CustomCursor;