import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for smooth target-lock lag effect
  const springConfigInner = { damping: 40, stiffness: 600, mass: 0.1 };
  const springConfigOuter = { damping: 25, stiffness: 180, mass: 0.5 };
  
  const innerX = useSpring(cursorX, springConfigInner);
  const innerY = useSpring(cursorY, springConfigInner);
  const outerX = useSpring(cursorX, springConfigOuter);
  const outerY = useSpring(cursorY, springConfigOuter);

  useEffect(() => {
    // Disable custom cursor on touch devices or small viewports
    const hasMouse = window.matchMedia('(hover: hover)').matches;
    if (!hasMouse) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      // Check if hovering an interactive element
      const target = e.target;
      const isClickable = target.closest('a, button, [role="button"], input, select, textarea, [onclick]');
      setIsPointer(!!isClickable);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50">
      
      {/* Outer target locking ring */}
      <motion.div
        className="absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center"
        style={{
          x: outerX,
          y: outerY,
        }}
      >
        <svg 
          className={`w-full h-full transition-colors duration-300 ${isPointer ? 'text-cosmic-orange' : 'text-cosmic-cyan'}`} 
          viewBox="0 0 100 100"
        >
          {/* Outer Ring Segmented */}
          <motion.circle 
            cx="50" cy="50" r="40" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeDasharray="25 6"
            animate={{
              rotate: isPointer ? 135 : 0,
              scale: isPointer ? 1.25 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          />
          {/* Target tick lines */}
          <line x1="50" y1="5" x2="50" y2="20" stroke="currentColor" strokeWidth="2.5" />
          <line x1="50" y1="80" x2="50" y2="95" stroke="currentColor" strokeWidth="2.5" />
          <line x1="5" y1="50" x2="20" y2="50" stroke="currentColor" strokeWidth="2.5" />
          <line x1="80" y1="50" x2="95" y2="50" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </motion.div>

      {/* Inner instant tracking reticle dot */}
      <motion.div
        className="absolute w-2 h-2 -ml-1 -mt-1 flex items-center justify-center"
        style={{
          x: innerX,
          y: innerY,
        }}
      >
        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
          isPointer ? 'bg-cosmic-orange shadow-[0_0_8px_#ff7b00]' : 'bg-cosmic-cyan shadow-[0_0_8px_#00f2fe]'
        }`} />
      </motion.div>
      
    </div>
  );
}
