import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function TelemetryOverlay() {
  const [velocity, setVelocity] = useState(2.00);
  const [shield, setShield] = useState(98);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  // Mouse Move listener to tilt the cockpit HUD slightly for 3D depth parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate countdown to Excel/IGNITO Launch on July 15, 2026
  useEffect(() => {
    const launchDate = new Date('2026-07-15T09:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = launchDate - now;

      if (difference <= 0) {
        setCountdown({ days: '00', hours: '00', minutes: '00', seconds: '00' });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  // Slowly drift velocity and shield parameters for sci-fi atmosphere
  useEffect(() => {
    const interval = setInterval(() => {
      setVelocity((prev) => {
        const drift = (Math.random() - 0.5) * 0.04;
        return parseFloat((prev + drift).toFixed(2));
      });
      setShield((prev) => {
        if (Math.random() > 0.8) {
          const change = Math.random() > 0.5 ? 1 : -1;
          const next = prev + change;
          return next > 100 ? 100 : next < 95 ? 95 : next;
        }
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-30 font-mono text-[9px] text-cosmic-cyan/60 tracking-wider">
      
      {/* 1. Cockpit HUD Glass Border Brackets (Cockpit Frame feeling) */}
      <div className="absolute inset-4 border border-white/5 rounded-lg flex flex-col justify-between p-4">
        {/* Top edge brackets */}
        <div className="flex justify-between items-start">
          <div className="w-12 h-6 border-t-2 border-l-2 border-cosmic-cyan/30 rounded-tl-md" />
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cosmic-cyan/20 to-transparent flex items-center justify-center">
            <span className="text-[7px] text-cosmic-cyan/40">HUD ACTIVE v4.3</span>
          </div>
          <div className="w-12 h-6 border-t-2 border-r-2 border-cosmic-cyan/30 rounded-tr-md" />
        </div>
        
        {/* Bottom edge brackets */}
        <div className="flex justify-between items-end">
          <div className="w-12 h-6 border-b-2 border-l-2 border-cosmic-cyan/30 rounded-bl-md" />
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-cosmic-cyan/20 to-transparent" />
          <div className="w-12 h-6 border-b-2 border-r-2 border-cosmic-cyan/30 rounded-br-md" />
        </div>
      </div>

      {/* 2. Interactive Parallax Flight Instrumentation Panel */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          x: mousePos.x * 25,
          y: mousePos.y * 20,
          rotate: mousePos.x * 3,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        {/* Pitch Horizon Line (Centering indicators) */}
        <div className="absolute w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cosmic-cyan/15 to-transparent flex justify-between px-24">
          <div className="flex flex-col items-end">
            <span className="text-[7px] text-cosmic-cyan/40 -mt-3.5">+10</span>
            <div className="w-4 h-1 border-r border-cosmic-cyan/30 -mt-1" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[7px] text-cosmic-cyan/40 -mt-3.5">+10</span>
            <div className="w-4 h-1 border-l border-cosmic-cyan/30 -mt-1" />
          </div>
        </div>

        {/* Dynamic Center Crosshair Reticle */}
        <svg className="w-64 h-64 text-cosmic-cyan/30" viewBox="0 0 100 100">
          {/* Centering ring */}
          <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 3" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="6 8" />
          {/* Cross lines */}
          <line x1="50" y1="15" x2="50" y2="30" stroke="currentColor" strokeWidth="0.75" />
          <line x1="50" y1="70" x2="50" y2="85" stroke="currentColor" strokeWidth="0.75" />
          <line x1="15" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="0.75" />
          <line x1="70" y1="50" x2="85" y2="50" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        {/* Small tilt diagnostics text */}
        <div className="absolute top-[42%] text-[7px] text-cosmic-cyan/25 flex space-x-12">
          <span>PITCH: {(mousePos.y * -20).toFixed(1)}&deg;</span>
          <span>YAW: {(mousePos.x * 20).toFixed(1)}&deg;</span>
        </div>
      </motion.div>

      {/* 3. Left Side Cockpit Vertical Speed Indicator */}
      <div className="absolute left-8 top-1/4 bottom-1/4 w-8 flex flex-col justify-between items-center py-4 border-r border-white/5 bg-space-black/10 backdrop-blur-[1px]">
        <div className="text-[6px] text-gray-500 font-bold -rotate-90 origin-center whitespace-nowrap mb-6">WARP THROTTLE</div>
        <div className="flex-1 flex flex-col justify-between items-center text-[7px] text-gray-500 w-full">
          <span>100c</span>
          <div className="w-2.5 h-[1px] bg-white/20" />
          <span>75c</span>
          <div className="w-2.5 h-[1px] bg-white/20" />
          {/* Active speed marker */}
          <div className="w-full flex items-center justify-end pr-1 text-cosmic-cyan font-bold animate-pulse">
            <span className="mr-1">&bull;</span>
            <span>{velocity}c</span>
          </div>
          <div className="w-2.5 h-[1px] bg-white/20" />
          <span>25c</span>
          <div className="w-2.5 h-[1px] bg-white/20" />
          <span>0c</span>
        </div>
        <div className="w-1.5 h-12 bg-white/5 rounded-full mt-4 overflow-hidden relative border border-white/10">
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-cosmic-cyan"
            animate={{ height: `${(velocity / 2.2) * 100}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* 4. Right Side Cockpit Vertical Reactor Energy Level */}
      <div className="absolute right-8 top-1/4 bottom-1/4 w-8 flex flex-col justify-between items-center py-4 border-l border-white/5 bg-space-black/10 backdrop-blur-[1px]">
        <div className="text-[6px] text-gray-500 font-bold rotate-90 origin-center whitespace-nowrap mb-6">SHIELD GENERATOR</div>
        <div className="flex-1 flex flex-col justify-between items-center text-[7px] text-gray-500 w-full">
          <span>MAX</span>
          <div className="w-2.5 h-[1px] bg-white/20" />
          <span>75%</span>
          <div className="w-2.5 h-[1px] bg-white/20" />
          {/* Active level marker */}
          <div className="w-full flex items-center justify-start pl-1 text-emerald-400 font-bold animate-pulse">
            <span>{shield}%</span>
            <span className="ml-1">&bull;</span>
          </div>
          <div className="w-2.5 h-[1px] bg-white/20" />
          <span>25%</span>
          <div className="w-2.5 h-[1px] bg-white/20" />
          <span>MIN</span>
        </div>
        <div className="w-1.5 h-12 bg-white/5 rounded-full mt-4 overflow-hidden relative border border-white/10">
          <motion.div 
            className="absolute bottom-0 left-0 right-0 bg-emerald-400"
            animate={{ height: `${shield}%` }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      {/* 5. Left Consolidated HUD Console */}
      <div className="absolute bottom-6 left-6 space-y-3 p-4 rounded border border-white/5 bg-space-black/45 backdrop-blur-sm shadow-2xl">
        <div className="space-y-1.5 border-b border-white/5 pb-3">
          <div className="flex justify-between items-center space-x-6">
            <span>SYSTEM MODE:</span>
            <span className="text-white font-bold animate-pulse">WARP STANDBY</span>
          </div>
          <div className="flex justify-between items-center">
            <span>GRAVITY STATE:</span>
            <span className="text-cosmic-cyan font-bold">0.00 G (FREEFALL)</span>
          </div>
          <div className="flex justify-between items-center">
            <span>COSMIC SHIELD:</span>
            <span className="text-emerald-400 font-bold">{shield}% (STABLE)</span>
          </div>
        </div>

        <div>
          <div className="text-[8px] text-gray-500 uppercase tracking-widest mb-1.5">Launch Telemetry Countdown</div>
          <div className="flex items-center space-x-2 text-white font-bold text-sm tracking-widest font-mono">
            <span className="text-cosmic-cyan">T-</span>
            <span>{countdown.days}</span>
            <span className="text-gray-600 animate-pulse">:</span>
            <span>{countdown.hours}</span>
            <span className="text-gray-600 animate-pulse">:</span>
            <span>{countdown.minutes}</span>
            <span className="text-gray-600 animate-pulse">:</span>
            <span className="text-cosmic-orange">{countdown.seconds}</span>
          </div>
        </div>
      </div>

      {/* 6. Top Right Corner Stats */}
      <div className="absolute top-24 right-6 space-y-1.5 p-3 rounded border border-white/5 bg-space-black/35 backdrop-blur-sm text-right">
        <div className="flex justify-between items-center space-x-6">
          <span>ORBITAL ANGLE:</span>
          <span className="text-white font-bold">28.45&deg; N</span>
        </div>
        <div className="flex justify-between items-center">
          <span>VELOCITY:</span>
          <span className="text-cosmic-cyan font-bold">v = {velocity}c</span>
        </div>
        <div className="flex justify-between items-center">
          <span>DATA DRIFT:</span>
          <span className="text-cosmic-orange font-bold">2 px/frame</span>
        </div>
      </div>

      {/* 7. Bottom Right Corner Environment Specs */}
      <div className="absolute bottom-6 right-6 p-3 rounded border border-white/5 bg-space-black/35 backdrop-blur-sm text-right">
        <div>LOC: GOVT MEC KERALA</div>
        <div className="text-gray-500 mt-1">LAT: 10.0286&deg; N | LON: 76.3292&deg; E</div>
        <div className="text-[7px] text-cosmic-cyan/40 mt-1">IGNITO CORE ENGINE v4.32</div>
      </div>
      
    </div>
  );
}
