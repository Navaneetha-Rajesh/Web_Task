import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function BackgroundEffects() {
  // Generate random stars for the background
  const stars = useMemo(() => {
    const starArray = [];
    for (let i = 0; i < 60; i++) {
      starArray.push({
        id: i,
        x: Math.random() * 100, // percentage width
        y: Math.random() * 100, // percentage height
        size: Math.random() * 2 + 1, // 1px to 3px
        opacity: Math.random() * 0.7 + 0.3,
        duration: Math.random() * 5 + 3, // animation duration
        delay: Math.random() * 5,
      });
    }
    return starArray;
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-space-black pointer-events-none">
      {/* Matte Indigo Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-tr from-space-black via-[#060613] to-[#0d0d29] opacity-90" />
      
      {/* Large Glowing Ambient Nebulas */}
      <div className="absolute -top-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full bg-glow-radial filter blur-[80px]" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[50vw] h-[50vw] rounded-full bg-glow-cyan-radial filter blur-[80px]" />

      {/* Orbiting Gravitational Grid Lines */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.12]">
        <svg className="w-[120vw] h-[120vw] max-w-none text-cosmic-cyan animate-[spin_120s_linear_infinite]" viewBox="0 0 1000 1000">
          {/* Gravitational grid lines */}
          <line x1="500" y1="0" x2="500" y2="1000" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="0" y1="500" x2="1000" y2="500" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="146" y1="146" x2="854" y2="854" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          <line x1="146" y1="854" x2="854" y2="146" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 5" />
          
          {/* Concentric Gravity Rings */}
          <circle cx="500" cy="500" r="100" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="3 3" />
          <circle cx="500" cy="500" r="200" fill="none" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 4" />
          <circle cx="500" cy="500" r="300" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
          <circle cx="500" cy="500" r="400" fill="none" stroke="currentColor" strokeWidth="1.25" strokeDasharray="8 8" />
          <circle cx="500" cy="500" r="480" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="10 10" />
        </svg>
      </div>

      {/* Grid Mesh Overlay (Static Excel-like grid texture) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] opacity-60" />

      {/* Floating Cosmic Particles */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            boxShadow: star.size > 2 ? '0 0 6px rgba(255, 255, 255, 0.8)' : 'none',
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [star.opacity, star.opacity * 0.3, star.opacity],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
