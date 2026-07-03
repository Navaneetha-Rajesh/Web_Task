import React, { useState, useEffect } from 'react';

export default function TelemetryOverlay() {
  const [velocity, setVelocity] = useState(2.00);
  const [shield, setShield] = useState(98);
  const [countdown, setCountdown] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

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
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-30 font-mono text-[10px] text-cosmic-cyan/60 tracking-wider">
      
      {/* Top Left Corner Stats */}
      <div className="absolute top-24 left-6 space-y-1.5 p-3 rounded border border-white/5 bg-space-black/35 backdrop-blur-sm">
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

      {/* Top Right Corner Stats */}
      <div className="absolute top-24 right-6 space-y-1.5 p-3 rounded border border-white/5 bg-space-black/35 backdrop-blur-sm">
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

      {/* Bottom Left Corner Countdown */}
      <div className="absolute bottom-6 left-6 p-4 rounded border border-white/5 bg-space-black/35 backdrop-blur-sm">
        <div className="text-[9px] text-gray-500 uppercase tracking-widest mb-1.5">Launch Telemetry Countdown</div>
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

      {/* Bottom Right Corner Environment Specs */}
      <div className="absolute bottom-6 right-6 p-3 rounded border border-white/5 bg-space-black/35 backdrop-blur-sm text-right">
        <div>LOC: GOVT MEC KERALA</div>
        <div className="text-gray-500 mt-1">LAT: 10.0286&deg; N | LON: 76.3292&deg; E</div>
        <div className="text-[8px] text-cosmic-cyan/40 mt-1">IGNITO CORE ENGINE v4.32</div>
      </div>
      
    </div>
  );
}
