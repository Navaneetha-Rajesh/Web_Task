import React, { useState } from 'react';
import { motion as motionDiv, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, CheckCircle, Play, Sparkles } from 'lucide-react';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState(1);

  const scheduleData = {
    1: [
      {
        id: 's1-1',
        time: '09:00 AM - 10:30 AM',
        title: 'Opening Ceremony & Galactic Inception',
        location: 'Main Hangar / Stage A',
        description: 'Keynote introduction, inauguration of the zero-gravity orbital core simulation, and instructions briefing.',
        status: 'completed', // completed, active, upcoming
      },
      {
        id: 's1-2',
        time: '10:30 AM - 12:30 PM',
        title: 'Star-Mapping Workshop: PyAstronomy Basics',
        location: 'Orbit Room B',
        description: 'Hands-on stellar coordinate computation and interactive scripting to map stars.',
        status: 'completed',
      },
      {
        id: 's1-3',
        time: '02:00 PM - 04:30 PM',
        title: 'Space-Debris Cleanup Simulator Kickoff',
        location: 'Software Lab 3',
        description: 'Release of sandbox API keys and guidelines for the laser debris cleanup challenge.',
        status: 'active',
      },
      {
        id: 's1-4',
        time: '08:00 PM onwards',
        title: 'Anti-Grav Hackathon Team Pool Allocation',
        location: 'Virtual Hangar',
        description: 'Finalizing team signups and remote environment testing for the 36-hour sprint.',
        status: 'upcoming',
      }
    ],
    2: [
      {
        id: 's2-1',
        time: '09:00 AM',
        title: 'Rover-X Obstacle Traversal Commences',
        location: 'Lunar Field Area',
        description: 'Physical rovers take turns navigating through boulder-laden tracks and simulated lunar terrains.',
        status: 'upcoming',
      },
      {
        id: 's2-2',
        time: '11:30 AM - 01:30 PM',
        title: 'Computer Vision for Rovers (Technical Panel)',
        location: 'Orbit Room A',
        description: 'Interactive talk on training CNN models and SLAM navigation pipelines for autonomous space probes.',
        status: 'upcoming',
      },
      {
        id: 's2-3',
        time: '02:00 PM - 03:30 PM',
        title: 'Space-X Panel Summit: Multi-Planetary Exploration',
        location: 'Main Stage',
        description: 'Global experts debate asteroid harvesting, cosmic radiation shielding, and lunar settlement policies.',
        status: 'upcoming',
      },
      {
        id: 's2-4',
        time: '04:00 PM - 06:00 PM',
        title: 'Astrophotography Gallery & Panel Review',
        location: 'Central Gallery Lounge',
        description: 'Review and voting on raw stacked imagery of galaxies and deep space nebulas.',
        status: 'upcoming',
      }
    ],
    3: [
      {
        id: 's3-1',
        time: '10:00 AM - 12:30 PM',
        title: 'Antigravity Orbitals: Simulation Presentations',
        location: 'Software Lab 4',
        description: 'Final submission pitches and live dashboard reviews of micro-gravity orbital simulation systems.',
        status: 'upcoming',
      },
      {
        id: 's3-2',
        time: '02:00 PM - 04:30 PM',
        title: 'Stellar Pitch Summit: Interplanetary Startups',
        location: 'Hangar Lounge',
        description: 'Management teams pitch their space commercialization plans to tech investors and VCs.',
        status: 'upcoming',
      },
      {
        id: 's3-3',
        time: '05:00 PM - 06:30 PM',
        title: 'Closing Plenary, Award Announcements, and Farewell',
        location: 'Main Hangar / Stage A',
        description: 'Prize pool distributions for CosmosHack, Rover-X, and OrbitDesign, followed by cosmic fireworks.',
        status: 'upcoming',
      }
    ]
  };

  const activeEvents = scheduleData[activeDay];

  return (
    <section id="schedule" className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-mono">
            Fest Chronology
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-1">
            Timeline Hub
          </h2>
          <p className="text-gray-400 font-sans font-light mt-3 text-sm md:text-base max-w-xl mx-auto">
            Stay aligned with all active sessions, hackathon submissions, and expert keynotes. Day tracks will update dynamically.
          </p>
        </div>

        {/* Days Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-3 gap-3 glass-panel p-1.5 rounded border border-white/10 w-full max-w-md">
            {[1, 2, 3].map((dayNum) => (
              <button
                key={dayNum}
                onClick={() => setActiveDay(dayNum)}
                className={`relative py-2.5 text-xs sm:text-sm font-mono tracking-wider uppercase font-semibold transition-all duration-300 rounded cursor-pointer ${
                  activeDay === dayNum ? 'text-space-black' : 'text-gray-400 hover:text-white'
                }`}
              >
                {activeDay === dayNum && (
                  <motionDiv
                    layoutId="activeDayTab"
                    className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan to-[#29b6f6] rounded shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Day 0{dayNum}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 relative before:absolute before:left-4 sm:before:left-1/2 before:top-4 before:bottom-4 before:w-[1px] before:bg-white/10">
          
          <motionDiv
            key={activeDay}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {activeEvents.map((item, idx) => {
              const isActive = item.status === 'active';
              const isCompleted = item.status === 'completed';

              return (
                <div key={item.id} className="relative flex flex-col sm:flex-row sm:justify-between items-start group">
                  
                  {/* Timeline Node marker */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-[7px] top-1.5 z-10 flex items-center justify-center">
                    {isCompleted ? (
                      <div className="w-[15px] h-[15px] rounded-full bg-gray-600 border-4 border-space-black" />
                    ) : isActive ? (
                      <div className="relative flex h-[15px] w-[15px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cosmic-cyan opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-[15px] w-[15px] bg-cosmic-cyan border-2 border-space-black"></span>
                      </div>
                    ) : (
                      <div className="w-[15px] h-[15px] rounded-full bg-white/20 border-4 border-space-black group-hover:border-cosmic-cyan transition-colors" />
                    )}
                  </div>

                  {/* Left block (Time & Status) on desktop */}
                  <div className="pl-12 sm:pl-0 sm:w-[45%] sm:text-right sm:pr-8 flex items-center sm:justify-end space-x-3 sm:space-x-reverse">
                    <Clock className={`w-4 h-4 shrink-0 ${isActive ? 'text-cosmic-cyan animate-pulse' : 'text-gray-400'}`} />
                    <span className={`font-mono text-sm tracking-wide ${isActive ? 'text-cosmic-cyan font-bold' : 'text-gray-300'}`}>
                      {item.time}
                    </span>
                    
                    {/* Pulsing Happening Now Tag */}
                    {isActive && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-mono font-medium bg-cosmic-cyan/15 text-cosmic-cyan border border-cosmic-cyan/30 animate-pulse">
                        LIVE NOW
                      </span>
                    )}
                  </div>

                  {/* Spacer for desktop layout */}
                  <div className="hidden sm:block w-[10%]" />

                  {/* Right block (Details Panel) */}
                  <div className="pl-12 sm:pl-8 sm:w-[45%] w-full mt-2 sm:mt-0">
                    <div className={`glass-panel p-5 rounded border transition-all duration-300 ${
                      isActive 
                        ? 'border-cosmic-cyan/35 shadow-[0_0_15px_rgba(0,242,254,0.08)] bg-cosmic-cyan/5' 
                        : 'border-white/5 hover:border-white/10'
                    }`}>
                      <h4 className="text-base font-display font-bold text-white flex items-center gap-1.5">
                        {item.title}
                      </h4>
                      <div className="flex items-center space-x-1.5 text-xs text-gray-400 mt-2 font-mono">
                        <MapPin className="w-3.5 h-3.5 text-cosmic-violet" />
                        <span>{item.location}</span>
                      </div>
                      <p className="text-xs text-gray-300 mt-2.5 leading-relaxed font-sans font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}
          </motionDiv>
          
        </div>
      </div>
    </section>
  );
}
