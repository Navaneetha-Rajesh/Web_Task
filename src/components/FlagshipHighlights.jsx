import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Users, Calendar, ArrowUpRight, Trophy } from 'lucide-react';

export default function FlagshipHighlights({ onSelectEvent }) {
  const flagships = [
    {
      id: 'flagship-hackathon',
      title: 'Anti-Grav Hackathon',
      category: 'Flagship Event',
      track: 'Technical',
      shortPitch: 'A 36-hour build sprint engineering software and hardware to defeat gravity parameters.',
      description: 'The premier build sprint of IGNITO. Teams from across the globe gather to build autonomous rovers, orbital tracking software, or zero-gravity simulation algorithms. Mentorship will be provided by top aerospace and computer engineers.',
      prizePool: '₹75,000',
      teamSize: '2 - 4 Members',
      date: 'Day 1 & Day 2 (36 Hours)',
      coordinatorPhone: '+91 99887 76655 (Rohan)',
      coordinatorEmail: 'hackathon@ignito.org',
      highlightColor: 'cyan',
      icon: Terminal,
    },
    {
      id: 'flagship-spacex',
      title: 'Space-X Panel',
      category: 'Flagship Summit',
      track: 'Non-Technical / General',
      shortPitch: 'Global tech talks with engineers and space explorers discussing multi-planetary life.',
      description: 'A global space convergence talk featuring panels on interstellar traversal, lunar base layouts, and asteroid mining. Includes Q&As with aerospace startups and research executives.',
      prizePool: 'N/A (Talk Summit)',
      teamSize: 'Individual Entry',
      date: 'Day 2, 2:00 PM',
      coordinatorPhone: '+91 88776 65544 (Sneha)',
      coordinatorEmail: 'panel@ignito.org',
      highlightColor: 'violet',
      icon: Users,
    }
  ];

  return (
    <section id="highlights" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-mono">
              The Pinnacle Convergence
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-1">
              Flagship Highlights
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md mt-2 md:mt-0 font-sans font-light">
            Our highest-caliber events bringing together top-tier industrial mentorship, high-stakes competition, and grand prizes.
          </p>
        </div>

        {/* Flagship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {flagships.map((flag, idx) => {
            const Icon = flag.icon;
            const isCyan = flag.highlightColor === 'cyan';
            
            return (
              <motion.div
                key={flag.id}
                onClick={() => onSelectEvent(flag)}
                className="group relative glass-panel rounded-lg border border-white/10 p-6 md:p-8 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:border-white/20 overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                {/* Visual Glow Highlights on Card Hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full -mr-16 -mt-16 filter blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 ${
                  isCyan ? 'bg-cosmic-cyan' : 'bg-cosmic-violet'
                }`} />

                {/* Card Top */}
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <span className={`inline-block text-[10px] tracking-widest uppercase font-mono px-2.5 py-0.5 rounded-full border ${
                      isCyan 
                        ? 'border-cosmic-cyan/30 bg-cosmic-cyan/10 text-cosmic-cyan' 
                        : 'border-cosmic-violet/30 bg-cosmic-violet/10 text-cosmic-violet'
                    }`}>
                      {flag.category}
                    </span>
                    <ArrowUpRight className={`w-5 h-5 text-gray-500 group-hover:text-white transition-colors duration-300`} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                    {flag.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base font-sans font-light leading-relaxed">
                    {flag.shortPitch}
                  </p>
                </div>

                {/* Card Bottom Meta */}
                <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4 items-center justify-between">
                  <div className="flex space-x-6">
                    <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                      <Trophy className={`w-4 h-4 ${isCyan ? 'text-cosmic-cyan' : 'text-cosmic-violet'}`} />
                      <span>{flag.prizePool}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-400 font-mono">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span>{flag.date}</span>
                    </div>
                  </div>
                  
                  <span className={`text-xs font-mono font-medium border-b transition-colors duration-300 ${
                    isCyan 
                      ? 'border-cosmic-cyan text-cosmic-cyan group-hover:text-white group-hover:border-white' 
                      : 'border-cosmic-violet text-cosmic-violet group-hover:text-white group-hover:border-white'
                  }`}>
                    View Details
                  </span>
                </div>

                {/* Left vertical border indicator (Excel bounding-box style accent) */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300 ${
                  isCyan ? 'bg-cosmic-cyan' : 'bg-cosmic-violet'
                }`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
