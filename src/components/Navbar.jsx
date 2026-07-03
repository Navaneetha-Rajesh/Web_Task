import React, { useState, useEffect } from 'react';
import { Menu, X, Orbit, Volume2, VolumeX } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audioNodes, setAudioNodes] = useState(null);

  // Monitor scroll for glass opacity transition
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio API Ambient Synthesizer Loop
  useEffect(() => {
    if (!audioEnabled) {
      if (audioNodes) {
        audioNodes.stop();
        setAudioNodes(null);
      }
      return;
    }

    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    try {
      const ctx = new AudioContextClass();
      
      // Lowpass Filter for base rumble
      const filter = ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(100, ctx.currentTime);

      // Low frequency drone
      const osc1 = ctx.createOscillator();
      osc1.type = 'sawtooth';
      osc1.frequency.setValueAtTime(55, ctx.currentTime); // A1 note

      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(55.3, ctx.currentTime); // slight detune

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.06, ctx.currentTime); // keep it soft and background-friendly

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);

      osc1.start();
      osc2.start();

      // Telemetry radar beeper function
      const playBeep = () => {
        if (ctx.state === 'suspended') return;
        const beepOsc = ctx.createOscillator();
        const beepGain = ctx.createGain();
        
        beepOsc.type = 'sine';
        const frequencies = [880, 1320, 1760];
        const selectedFreq = frequencies[Math.floor(Math.random() * frequencies.length)];
        beepOsc.frequency.setValueAtTime(selectedFreq, ctx.currentTime);
        
        beepGain.gain.setValueAtTime(0, ctx.currentTime);
        beepGain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        beepGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.4);
        
        beepOsc.connect(beepGain);
        beepGain.connect(ctx.destination);
        
        beepOsc.start();
        beepOsc.stop(ctx.currentTime + 0.5);
      };

      const intervalId = setInterval(playBeep, 4500);

      setAudioNodes({
        stop: () => {
          clearInterval(intervalId);
          try {
            osc1.stop();
            osc2.stop();
          } catch (e) {}
          ctx.close();
        }
      });
    } catch (err) {
      console.warn("Web Audio API not allowed or supported on this device.", err);
    }

    return () => {
      if (audioNodes) {
        audioNodes.stop();
      }
    };
  }, [audioEnabled]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Competitions', href: '#competitions' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-space-black/85 backdrop-blur-md border-white/10 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          {/* Logo Brand */}
          <a href="#home" className="flex items-center space-x-2.5 group">
            <div className="relative flex items-center justify-center w-8 h-8">
              <Orbit className="w-7 h-7 text-cosmic-cyan group-hover:text-cosmic-violet transition-colors duration-500 animate-[spin_8s_linear_infinite]" />
              <div className="absolute inset-0 border border-dashed border-cosmic-cyan/30 rounded-full scale-125 animate-[spin_12s_linear_infinite_reverse]" />
            </div>
            <span className="text-2xl font-display font-extrabold tracking-wider text-white group-hover:text-cosmic-cyan transition-colors duration-300">
              IGNITO
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cosmic-cyan font-mono text-sm tracking-wider uppercase transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Far Right Action Toolbar */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Audio Toggle Control */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="flex items-center space-x-2 px-3 py-1.5 rounded border border-white/10 hover:border-cosmic-cyan/40 bg-white/5 hover:bg-white/10 text-xs font-mono text-gray-300 hover:text-white transition-all cursor-pointer"
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-cosmic-cyan animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 text-gray-500" />}
              <span>{audioEnabled ? 'Mute Music' : 'Enable Music'}</span>
              
              {/* Soundwave animation */}
              <div className="flex space-x-0.5 items-end h-3 w-4">
                <span className={`w-0.5 bg-cosmic-cyan rounded-full transition-all duration-300 ${audioEnabled ? 'animate-soundwave' : 'h-1.5'}`} style={{ animationDelay: '0.1s', height: audioEnabled ? 'auto' : '6px' }} />
                <span className={`w-0.5 bg-cosmic-cyan rounded-full transition-all duration-300 ${audioEnabled ? 'animate-soundwave' : 'h-3'}`} style={{ animationDelay: '0.3s', height: audioEnabled ? 'auto' : '12px' }} />
                <span className={`w-0.5 bg-cosmic-cyan rounded-full transition-all duration-300 ${audioEnabled ? 'animate-soundwave' : 'h-2'}`} style={{ animationDelay: '0.2s', height: audioEnabled ? 'auto' : '8px' }} />
              </div>
            </button>

            {/* Login / Register */}
            <button
              onClick={() => alert("Registration and Login services will open shortly! Check back soon.")}
              className="relative px-5 py-2.5 bg-transparent text-cosmic-cyan hover:text-space-black font-semibold font-mono text-xs tracking-widest uppercase border border-cosmic-cyan/50 hover:border-cosmic-cyan rounded overflow-hidden transition-all duration-300 group cursor-pointer"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cosmic-cyan to-cosmic-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              Login / Register
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Simple audio toggle icon for mobile */}
            <button
              onClick={() => setAudioEnabled(!audioEnabled)}
              className="p-2 rounded border border-white/10 text-gray-400"
              aria-label="Toggle music"
            >
              {audioEnabled ? <Volume2 className="w-4 h-4 text-cosmic-cyan" /> : <VolumeX className="w-4 h-4 text-gray-500" />}
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md border border-white/10 text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-all duration-200"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 h-6" /> : <Menu className="h-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full glass-panel border-b border-white/10 transition-all duration-300">
          <div className="px-4 pt-2 pb-6 space-y-3 bg-space-black/95 backdrop-blur-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-mono uppercase tracking-wider text-gray-300 hover:text-cosmic-cyan hover:bg-white/5 rounded-md transition-all"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  setIsOpen(false);
                  alert("Registration and Login services will open shortly!");
                }}
                className="w-full py-3 text-center bg-gradient-to-r from-cosmic-cyan to-cosmic-violet text-space-black font-bold font-display uppercase tracking-widest text-sm rounded shadow-[0_0_15px_rgba(0,242,254,0.3)] transition-all cursor-pointer"
              >
                Login / Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
