"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device supports hover (ignore on mobile/touch screens)
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest("a") || 
        target.closest("button") || 
        target.closest("[role='button']") || 
        target.closest("input") || 
        target.closest("select") || 
        target.closest("textarea")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  // Hide the component completely on touch devices ideally, but setting outside viewport works.
  return (
    <>
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference transition-transform duration-75"
        style={{
          width: '14px',
          height: '14px',
          backgroundColor: '#00E5FF',
          transform: `translate(${position.x - 7}px, ${position.y - 7}px) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
      <div 
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full mix-blend-difference transition-all duration-300 ease-out"
        style={{
          width: '36px',
          height: '36px',
          border: isHovering ? '2px solid #00E5FF' : '0px solid transparent',
          backgroundColor: 'transparent',
          opacity: isHovering ? 1 : 0,
          visibility: isHovering ? 'visible' : 'hidden',
          transform: `translate(${position.x - 18}px, ${position.y - 18}px) scale(${isHovering ? 1 : 0.5})`,
        }}
      />
    </>
  );
}
