import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Calendar, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-[40%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[80vw] h-[60vh] bg-glow-radial filter blur-[100px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:col-span-7 text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/5 text-cosmic-cyan font-mono text-xs uppercase tracking-widest">
              <Rocket className="w-3.5 h-3.5 animate-[bounce_2s_infinite]" />
              <span>MEC Kochi &bull; Excel 2026</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.1]">
              IGNITO 2026 <br />
              <span className="text-sm md:text-base font-mono tracking-widest text-cosmic-cyan/85 block mt-2 uppercase">
                July 15, 16 &amp; 17 &bull; The Space Port
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
              Pioneered in 2000 as Kerala's first national-level student-organized techno-managerial symposium, Excel at Govt. Model Engineering College (MEC), Kochi, has spent over two decades serving as a powerful innovation platform. Today, we invite you to step into IGNITO: the ultimate space-tech and managerial convergence arena where gravity is defied and engineering limits are shattered.
            </p>

            {/* Brackets CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-6 font-mono text-xs sm:text-sm tracking-widest">
              <a
                href="#competitions"
                className="text-cosmic-cyan hover:text-white transition-all duration-300 flex items-center uppercase cursor-pointer group"
              >
                <span className="text-gray-600 group-hover:text-cosmic-cyan transition-colors mr-1">[</span>
                <span className="font-bold px-2 py-1">COMPETITIONS</span>
                <span className="text-gray-600 group-hover:text-cosmic-cyan transition-colors ml-1">]</span>
              </a>
              
              <a
                href="#events"
                className="text-cosmic-cyan hover:text-white transition-all duration-300 flex items-center uppercase cursor-pointer group"
              >
                <span className="text-gray-600 group-hover:text-cosmic-cyan transition-colors mr-1">[</span>
                <span className="font-bold px-2 py-1">EVENTS</span>
                <span className="text-gray-600 group-hover:text-cosmic-cyan transition-colors ml-1">]</span>
              </a>
              
              <a
                href="#schedule"
                className="text-cosmic-cyan hover:text-white transition-all duration-300 flex items-center uppercase cursor-pointer group"
              >
                <span className="text-gray-600 group-hover:text-cosmic-cyan transition-colors mr-1">[</span>
                <span className="font-bold px-2 py-1">SCHEDULE</span>
                <span className="text-gray-600 group-hover:text-cosmic-cyan transition-colors ml-1">]</span>
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-6 max-w-sm mx-auto lg:mx-0 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-display font-bold text-white">₹1.5L+</div>
                <div className="text-xs text-gray-400 font-mono">Prize Pool</div>
              </div>
              <div className="border-x border-white/10 px-4">
                <div className="text-2xl font-display font-bold text-white">15+</div>
                <div className="text-xs text-gray-400 font-mono">Cosmic events</div>
              </div>
              <div>
                <div className="text-2xl font-display font-bold text-white">3 Days</div>
                <div className="text-xs text-gray-400 font-mono">Chronology</div>
              </div>
            </div>

          </motion.div>

          {/* Warp Drive / Zero-Gravity Core Visual */}
          <motion.div 
            className="lg:col-span-5 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Outer Glow Orb */}
              <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full bg-cosmic-cyan/15 filter blur-2xl animate-pulse" />
              
              {/* Floating core simulator - SVG Graphic */}
              <svg className="w-full h-full text-cosmic-cyan z-10" viewBox="0 0 400 400">
                {/* Orbital Particle Path 1 */}
                <motion.circle 
                  cx="200" cy="200" r="140" fill="none" stroke="rgba(0, 242, 254, 0.15)" strokeWidth="1" strokeDasharray="5 15"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                />

                {/* Outer Rotating Concentric Ring */}
                <motion.circle 
                  cx="200" cy="200" r="120" fill="none" stroke="url(#cyanVioletGrad)" strokeWidth="1.5" strokeDasharray="30 40 10 20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                />

                {/* Inner Reverse Rotating Ring */}
                <motion.circle 
                  cx="200" cy="200" r="90" fill="none" stroke="url(#violetCyanGrad)" strokeWidth="1.25" strokeDasharray="40 15 5 15"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                />

                {/* Core Gravitational Shield */}
                <motion.circle 
                  cx="200" cy="200" r="60" fill="none" stroke="rgba(0, 242, 254, 0.4)" strokeWidth="0.75"
                  animate={{ scale: [0.95, 1.05, 0.95] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "200px 200px" }}
                />

                {/* Center Core Warp Capsule */}
                <motion.circle 
                  cx="200" cy="200" r="30" fill="rgba(10, 10, 35, 0.85)" stroke="url(#cyanVioletGrad)" strokeWidth="2.5"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformOrigin: "200px 200px" }}
                />

                {/* Core Pulsing Orbiting Dots */}
                <motion.g
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                >
                  <circle cx="200" cy="110" r="4.5" fill="#00f2fe" className="shadow-[0_0_10px_#00f2fe]" />
                  <line x1="200" y1="110" x2="200" y2="140" stroke="rgba(0, 242, 254, 0.3)" strokeWidth="1" />
                </motion.g>
                <motion.g
                  animate={{ rotate: -360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "200px 200px" }}
                >
                  <circle cx="110" cy="200" r="4.5" fill="#7f00ff" />
                  <line x1="110" y1="200" x2="140" y2="200" stroke="rgba(127, 0, 255, 0.3)" strokeWidth="1" />
                </motion.g>

                {/* Warp Field Vectors */}
                <path d="M 200 40 L 200 60 M 200 340 L 200 360 M 40 200 L 60 200 M 340 200 L 360 200" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" />

                {/* SVG Color Gradients */}
                <defs>
                  <linearGradient id="cyanVioletGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00f2fe" />
                    <stop offset="100%" stopColor="#7f00ff" />
                  </linearGradient>
                  <linearGradient id="violetCyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7f00ff" />
                    <stop offset="100%" stopColor="#00f2fe" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating orbital cards around the core */}
              <motion.div 
                className="absolute top-2 right-2 glass-panel px-3 py-1.5 rounded border border-white/10 font-mono text-[10px] text-cosmic-cyan flex items-center space-x-1"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping" />
                <span>GRAV CORE ACTIVE</span>
              </motion.div>

              <motion.div 
                className="absolute bottom-8 left-0 glass-panel px-3 py-1.5 rounded border border-white/10 font-mono text-[10px] text-cosmic-violet flex items-center space-x-1"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>WARP DRIVE: 98%</span>
              </motion.div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
