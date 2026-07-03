import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Award, Zap, Compass, Star } from 'lucide-react';

export default function LegacyArchive() {
  const [selectedYear, setSelectedYear] = useState('2025');

  const archives = {
    '2025': {
      year: '2025',
      theme: 'SINGULARITY',
      pitch: 'Exploring the boundary where artificial intelligence integrates into human evolution.',
      attendees: '12,500+ Participants',
      events: '18 Global Competitions',
      keynote: 'AI Pioneers & Robotics Symposiums',
      legacyNote: 'Pioneered custom virtual sandboxes for remote rover control systems and introduced high-performance computing tracks.',
      colorClass: 'text-cosmic-cyan border-cosmic-cyan/30 bg-cosmic-cyan/5 shadow-[0_0_15px_rgba(0,242,254,0.15)]',
      colorGlow: 'bg-cosmic-cyan/20',
    },
    '2024': {
      year: '2024',
      theme: 'AETHER',
      pitch: 'Celebrating the invisible medium binding developers, designers, and managers.',
      attendees: '10,000+ Participants',
      events: '15 National Challenges',
      keynote: 'ISRO Research Directors & Aerospace Panel',
      legacyNote: 'Initiated the Space-Debris Simulation challenge and expanded physical Rover-X terrain loops with multi-payload capture targets.',
      colorClass: 'text-cosmic-violet border-cosmic-violet/30 bg-cosmic-violet/5 shadow-[0_0_15px_rgba(127,0,255,0.15)]',
      colorGlow: 'bg-cosmic-violet/20',
    },
    '2023': {
      year: '2023',
      theme: 'CHRONOS',
      pitch: 'An interactive voyage through code, space corridors, and chronological timeline bounds.',
      attendees: '8,500+ Participants',
      events: '12 core engineering battles',
      keynote: 'Founders of DeepTech Web Startups',
      legacyNote: 'First post-pandemic physical convergence at MEC hangar. Successfully launched local IoT networks and AI-driven mapping workshops.',
      colorClass: 'text-cosmic-orange border-cosmic-orange/30 bg-cosmic-orange/5 shadow-[0_0_15px_rgba(255,123,0,0.15)]',
      colorGlow: 'bg-cosmic-orange/20',
    }
  };

  const activeArchive = archives[selectedYear];

  return (
    <section id="archive" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-mono">
            Space Port History
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-1">
            Legacy Space Portal
          </h2>
          <p className="text-gray-400 font-sans font-light mt-3 text-sm md:text-base max-w-xl mx-auto">
            Travel back in time through Excel\'s previous editions. Witness the evolution of engineering milestones at Govt. Model Engineering College.
          </p>
        </div>

        {/* Horizontal Year badges selector */}
        <div className="flex justify-center space-x-6 mb-12">
          {Object.keys(archives).map((year) => {
            const isSelected = selectedYear === year;
            const currentArch = archives[year];
            
            // Generate click sound effect (simulated in UI)
            const handleClick = () => {
              setSelectedYear(year);
            };

            return (
              <button
                key={year}
                onClick={handleClick}
                className={`relative px-6 py-4 rounded border text-sm font-mono font-bold tracking-widest uppercase transition-all duration-300 scale-95 cursor-pointer ${
                  isSelected 
                    ? currentArch.colorClass + ' scale-100 z-10'
                    : 'border-white/10 hover:border-white/20 text-gray-500 hover:text-white'
                }`}
              >
                {/* Custom glowing background ring */}
                {isSelected && (
                  <motion.div
                    layoutId="activeYearRing"
                    className={`absolute -inset-1.5 rounded border border-dashed opacity-50 ${
                      year === '2025' ? 'border-cosmic-cyan' : year === '2024' ? 'border-cosmic-violet' : 'border-cosmic-orange'
                    }`}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span>EXCEL {year}</span>
              </button>
            );
          })}
        </div>

        {/* Archive Detail Presentation Card */}
        <div className="glass-panel p-6 md:p-8 rounded border border-white/10 relative overflow-hidden bg-black/45">
          {/* Ambient Glow */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              className={`absolute -top-24 -right-24 w-48 h-48 rounded-full filter blur-[60px] opacity-25 ${activeArchive.colorGlow}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.25 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedYear}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Year Theme Name */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-gray-500">EXCEL EDITION THEME</span>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-wider flex items-center gap-2 mt-0.5">
                    <Star className="w-6 h-6 text-cosmic-orange" />
                    {activeArchive.theme}
                  </h3>
                </div>
                
                <div className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded border border-white/5 flex items-center space-x-1.5 self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-cosmic-cyan" />
                  <span>OCTOBER {selectedYear}</span>
                </div>
              </div>

              {/* Pitch */}
              <p className="text-sm md:text-base text-gray-200 leading-relaxed font-sans font-light">
                {activeArchive.pitch}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-2">
                <div className="p-4 bg-space-black/50 rounded border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400">
                    <Users className="w-3.5 h-3.5 text-cosmic-cyan" />
                    <span>REGISTRATIONS</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{activeArchive.attendees}</div>
                </div>

                <div className="p-4 bg-space-black/50 rounded border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400">
                    <Award className="w-3.5 h-3.5 text-cosmic-violet" />
                    <span>COMPETITIONS</span>
                  </div>
                  <div className="text-sm font-semibold text-white">{activeArchive.events}</div>
                </div>

                <div className="p-4 bg-space-black/50 rounded border border-white/5 space-y-1">
                  <div className="flex items-center space-x-2 text-[10px] font-mono text-gray-400">
                    <Zap className="w-3.5 h-3.5 text-cosmic-orange" />
                    <span>SUMMIT SPEAKERS</span>
                  </div>
                  <div className="text-sm font-semibold text-white truncate">{activeArchive.keynote.split('&')[0]}</div>
                </div>
              </div>

              {/* Legacy notes */}
              <div className="p-4 bg-white/5 rounded border border-white/5 space-y-1.5">
                <h4 className="text-xs font-mono font-medium text-cosmic-cyan uppercase tracking-wider">
                  Evolutionary Milestone
                </h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {activeArchive.legacyNote}
                </p>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
