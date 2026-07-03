import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Compass, Binary, Sparkles } from 'lucide-react';

export default function Events({ onSelectEvent }) {
  const [activeTab, setActiveTab] = useState('Technical');

  const eventsData = [
    {
      id: 'tech-star-mapping',
      title: 'Star-Mapping Workshops',
      track: 'Technical',
      category: 'Workshop',
      shortPitch: 'Learn to plot stellar coordinates and track distant constellations using open-source PyAstronomy libraries.',
      description: 'Unlock the secrets of astronomical coordinate systems. This workshop covers stellar charting, right ascension/declination calculations, and querying planetary databases. Participants will write scripts to render real-time local sky maps.',
      prizePool: 'Certification & Toolkit',
      teamSize: 'Individual',
      date: 'Day 1, 10:00 AM',
      coordinatorPhone: '+91 99112 23344 (Aravind)',
      coordinatorEmail: 'starmapping@ignito.org',
      prereq: 'Basic Coding',
      duration: '6 Hours'
    },
    {
      id: 'tech-rover-cv',
      title: 'AI & Computer Vision for Rovers',
      track: 'Technical',
      category: 'Challenge',
      shortPitch: 'Train advanced computer vision models to navigate autonomous rovers through harsh terrain structures.',
      description: 'Implement obstacle avoidance and path planning algorithms. Teams are provided with a simulated rover environment and must use PyTorch or OpenCV to safely traverse obstacle fields containing crevices and space dust. Performance is evaluated on accuracy and velocity.',
      prizePool: '₹20,000',
      teamSize: '1 - 3 Members',
      date: 'Day 2, 11:30 AM',
      coordinatorPhone: '+91 88223 34455 (Meera)',
      coordinatorEmail: 'rovercv@ignito.org',
      prereq: 'Python Basics',
      duration: '12 Hours'
    },
    {
      id: 'tech-grav-simulation',
      title: 'Antigravity Orbitals',
      track: 'Technical',
      category: 'Simulation',
      shortPitch: 'Simulate orbit decay and build mathematical equations for maintaining gravity habitats.',
      description: 'In this simulation event, participants write micro-gravity algorithms. Model orbital mechanics, launch windows, and fuel-optimal delta-v adjustments. Ideal for physics enthusiasts and simulation engineers.',
      prizePool: '₹15,000',
      teamSize: '1 - 2 Members',
      date: 'Day 3, 10:00 AM',
      coordinatorPhone: '+91 77334 45566 (Karthik)',
      coordinatorEmail: 'orbitals@ignito.org',
      prereq: 'Physics 101',
      duration: '8 Hours'
    },
    {
      id: 'tech-debris-cleanup',
      title: 'Space-Debris Cleanup Simulator',
      track: 'Technical',
      category: 'Hack',
      shortPitch: 'Optimize laser grids and robotic arms to capture moving space debris in lower-Earth orbits.',
      description: 'Write real-time pathfinding algorithms to capture high-velocity debris particles in simulated low-Earth orbit. Avoid operational satellites while collecting as much junk as possible within the timeline limit.',
      prizePool: '₹10,000',
      teamSize: 'Individual',
      date: 'Day 1, 2:00 PM',
      coordinatorPhone: '+91 99000 11223 (Vikram)',
      coordinatorEmail: 'debris@ignito.org',
      prereq: 'Algorithms',
      duration: '4 Hours'
    },
    {
      id: 'nontech-astrophoto',
      title: 'Astrophotography Showcase',
      track: 'Non-Technical / General',
      category: 'Exhibition',
      shortPitch: 'Submit and showcase high-resolution captures of nebula clouds, solar flares, and lunar phases.',
      description: 'A visual celebration of deep-sky photography. Submit your raw captures or stacked frames of nebulas, planets, and galaxies. Selected prints will be exhibited physically in the main hangar, with public and panel voting.',
      prizePool: '₹15,000',
      teamSize: 'Individual',
      date: 'Day 2, 4:00 PM',
      coordinatorPhone: '+91 88445 56677 (Anjana)',
      coordinatorEmail: 'astrophoto@ignito.org',
      prereq: 'Camera Frames',
      duration: '3 Hours'
    },
    {
      id: 'nontech-quiz',
      title: 'Cosmic Quiz',
      track: 'Non-Technical / General',
      category: 'Trivia',
      shortPitch: 'Test your knowledge on astrophysics history, NASA/ISRO missions, and sci-fi cinema.',
      description: 'The ultimate space quiz. Multiple rounds covering space exploration history, orbital mechanics trivia, standard model physics, and legendary sci-fi literature. Rapid-fire buzzers in the finals.',
      prizePool: '₹10,000',
      teamSize: '2 Members',
      date: 'Day 1, 3:30 PM',
      coordinatorPhone: '+91 77556 67788 (Dev)',
      coordinatorEmail: 'quiz@ignito.org',
      prereq: 'None',
      duration: '2 Hours'
    },
    {
      id: 'nontech-pitch',
      title: 'Stellar Pitch Summit',
      track: 'Non-Technical / General',
      category: 'Management',
      shortPitch: 'Pitch business models for space mining, space tourism, or asteroid habitation to VCs.',
      description: 'The ultimate entrepreneurial space arena. Draft business models mapping cost metrics, logistics, and safety regulations for interplanetary services. Pitch live to industry executives and startup mentors.',
      prizePool: '₹25,000',
      teamSize: '2 - 4 Members',
      date: 'Day 3, 2:00 PM',
      coordinatorPhone: '+91 99667 78899 (Sarah)',
      coordinatorEmail: 'pitch@ignito.org',
      prereq: 'Pitch Slides',
      duration: '5 Hours'
    },
    {
      id: 'nontech-art',
      title: 'Nebula Art Canvas',
      track: 'Non-Technical / General',
      category: 'Digital Art',
      shortPitch: 'Paint digital sci-fi concepts representing humanity landing on distant exoplanets.',
      description: 'Create concept art detailing spaceports, colony modules, or foreign solar systems. Artists must work with digital media tools and explain their astrophysical design decisions to the review panel.',
      prizePool: '₹8,000',
      teamSize: 'Individual',
      date: 'Day 2, 10:00 AM',
      coordinatorPhone: '+91 88778 89900 (Kabir)',
      coordinatorEmail: 'art@ignito.org',
      prereq: 'Digital Tool',
      duration: '4 Hours'
    }
  ];

  const filteredEvents = eventsData.filter((ev) => ev.track === activeTab);

  return (
    <section id="events" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-mono">
            Explore Tracks
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-1">
            Tracks & Workshops
          </h2>
          <p className="text-gray-400 font-sans font-light mt-3 text-sm md:text-base">
            Filter through our catalog of space-tech challenges and workshops. Find your niche, join team pools, and register.
          </p>
        </div>

        {/* Excel-style Track Toggle Tab */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex glass-panel p-1 rounded border border-white/10">
            {['Technical', 'Non-Technical / General'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 text-xs md:text-sm font-mono tracking-wider uppercase font-semibold transition-all duration-300 rounded cursor-pointer ${
                  activeTab === tab
                    ? 'text-space-black z-10'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Active Tab Background indicator */}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeEventTab"
                    className="absolute inset-0 bg-gradient-to-r from-cosmic-cyan to-[#29b6f6] rounded -z-10 shadow-[0_0_12px_rgba(0,242,254,0.3)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="flex items-center gap-2">
                  {tab === 'Technical' ? <Binary className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  {tab}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => onSelectEvent(event)}
                className="group glass-panel rounded border border-white/10 p-5 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-cosmic-cyan/45 hover:shadow-[0_0_20px_rgba(0,242,254,0.1)] hover:-translate-y-1 relative"
              >
                <div>
                  {/* Category Tag */}
                  <span className="text-[10px] font-mono tracking-wider uppercase text-cosmic-cyan bg-cosmic-cyan/5 px-2 py-0.5 rounded border border-cosmic-cyan/20">
                    {event.category}
                  </span>
                  
                  {/* Title */}
                  <h3 className="text-lg font-display font-bold text-white mt-3 group-hover:text-cosmic-cyan transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  {/* Pitch */}
                  <p className="text-xs text-gray-400 mt-2 font-sans font-light leading-relaxed">
                    {event.shortPitch}
                  </p>

                  {/* Tech Specs */}
                  <div className="mt-3.5 pt-3.5 border-t border-white/5 space-y-1 font-mono text-[9px] text-gray-400">
                    <div className="flex justify-between">
                      <span>PREREQ:</span>
                      <span className="text-white truncate max-w-[120px]">{event.prereq}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>DURATION:</span>
                      <span className="text-white">{event.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-3.5 h-3.5 text-cosmic-cyan" />
                    <span>{event.date.split(',')[0]}</span>
                  </div>
                  <span className="text-cosmic-cyan group-hover:underline">
                    Explore
                  </span>
                </div>

                {/* Excel crisp corner border accents on card hover */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-2 border-r-2 border-cosmic-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-0 h-0 border-b-2 border-l-2 border-cosmic-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
