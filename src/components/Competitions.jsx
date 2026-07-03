import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, ShieldAlert, Zap, Orbit, Compass, Cpu } from 'lucide-react';

export default function Competitions({ onSelectEvent }) {
  const competitions = [
    {
      id: 'comp-cosmoshack',
      title: 'CosmosHack',
      topic: 'Space-tech & Software Innovation',
      shortPitch: 'Build solutions for micro-satellite data analysis, satellite communications, or celestial mapping systems.',
      description: 'Engage in a software battleground targeting core space infrastructure problems. Solutions may address telemetry ingestion, celestial imagery classification, orbital visualization, or space-traffic management systems. Evaluated on innovation, system design, and algorithmic efficiency.',
      prizePool: '₹50,000',
      teamSize: '2 - 4 Members',
      date: 'Day 1 & Day 2 (36 Hours)',
      registrationStatus: 'Open',
      coordinatorPhone: '+91 99000 88776 (Vikesh)',
      coordinatorEmail: 'cosmoshack@ignito.org',
      themeColor: 'cyan',
      icon: Orbit,
    },
    {
      id: 'comp-roverx',
      title: 'Rover-X',
      topic: 'Robotics & Terrain Traversal',
      shortPitch: 'Build or program rovers to traverse simulated Lunar rock fields and capture mineral payloads.',
      description: 'The premier physical and software robotics challenge. Control or code a mechanical rover to navigate custom obstacle courses containing sand, rocks, and steep climbs. Your rover must locate and collect mock ore samples while maintaining stability and battery efficiency.',
      prizePool: '₹40,000',
      teamSize: '3 - 5 Members',
      date: 'Day 2, 9:00 AM',
      registrationStatus: 'Open',
      coordinatorPhone: '+91 88990 01122 (Arjun)',
      coordinatorEmail: 'roverx@ignito.org',
      themeColor: 'orange',
      icon: Cpu,
    },
    {
      id: 'comp-orbitdesign',
      title: 'OrbitDesign',
      topic: 'UI/UX CAD Space Station Design',
      shortPitch: 'Design micro-gravity habitats or space station layouts emphasizing functional human ergonomics.',
      description: 'Use CAD, Blender, or Figma to architect and render the interior of a micro-gravity space habitat. Focus on ergonomics, oxygen-tank placements, thruster matrices, and crew interface dashboards. Submissions require structural plans and simulated walk-through videos.',
      prizePool: '₹30,000',
      teamSize: '1 - 2 Members',
      date: 'Day 1 & Day 2',
      registrationStatus: 'Open',
      coordinatorPhone: '+91 77665 54433 (Neha)',
      coordinatorEmail: 'orbitdesign@ignito.org',
      themeColor: 'violet',
      icon: Compass,
    }
  ];

  const handleRegisterClick = (e, comp) => {
    e.stopPropagation(); // prevent opening details modal
    alert(`Registration request sent for ${comp.title}! Fill in your team members details in the portal link provided in registration.`);
  };

  return (
    <section id="competitions" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-mono">
            High Stakes Tournament
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-1">
            Major Tournaments
          </h2>
          <p className="text-gray-400 font-sans font-light mt-3 text-sm md:text-base">
            Face off against top-tier coders, robotics enthusiasts, and CAD artists. Compete for huge prizes and earn prestige in the space technology sector.
          </p>
        </div>

        {/* Competition Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitions.map((comp, idx) => {
            const Icon = comp.icon;
            
            // Set styles based on themeColor
            let glowClass = "hover:border-cosmic-cyan/45 hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]";
            let iconColorClass = "text-cosmic-cyan";
            let borderClass = "border-cosmic-cyan/30 bg-cosmic-cyan/10 text-cosmic-cyan";
            let btnClass = "bg-cosmic-cyan text-space-black hover:bg-cosmic-cyan/85 shadow-[0_0_10px_rgba(0,242,254,0.3)]";

            if (comp.themeColor === 'orange') {
              glowClass = "hover:border-cosmic-orange/45 hover:shadow-[0_0_20px_rgba(255,123,0,0.15)]";
              iconColorClass = "text-cosmic-orange";
              borderClass = "border-cosmic-orange/30 bg-cosmic-orange/10 text-cosmic-orange";
              btnClass = "bg-cosmic-orange text-white hover:bg-cosmic-orange/85 shadow-[0_0_10px_rgba(255,123,0,0.3)]";
            } else if (comp.themeColor === 'violet') {
              glowClass = "hover:border-cosmic-violet/45 hover:shadow-[0_0_20px_rgba(127,0,255,0.15)]";
              iconColorClass = "text-cosmic-violet";
              borderClass = "border-cosmic-violet/30 bg-cosmic-violet/10 text-cosmic-violet";
              btnClass = "bg-cosmic-violet text-white hover:bg-cosmic-violet/85 shadow-[0_0_10px_rgba(127,0,255,0.3)]";
            }

            return (
              <motion.div
                key={comp.id}
                onClick={() => onSelectEvent(comp)}
                className={`group glass-panel rounded-lg border border-white/10 p-6 flex flex-col justify-between cursor-pointer transition-all duration-300 relative ${glowClass}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div>
                  {/* Top Row: Icon & Status */}
                  <div className="flex justify-between items-center mb-6">
                    <div className={`p-3 rounded-md bg-white/5 border border-white/10 ${iconColorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    
                    {/* Pulsing Status */}
                    <div className="flex items-center space-x-1.5 font-mono text-[10px] tracking-wider uppercase text-emerald-400">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span>Regs {comp.registrationStatus}</span>
                    </div>
                  </div>

                  {/* Header Title / Topic */}
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-display font-extrabold text-white group-hover:text-white transition-colors">
                      {comp.title}
                    </h3>
                    <p className={`text-xs font-mono font-medium ${iconColorClass}`}>
                      {comp.topic}
                    </p>
                  </div>

                  {/* Pitch description */}
                  <p className="text-gray-300 text-sm font-sans font-light mt-4 leading-relaxed">
                    {comp.shortPitch}
                  </p>

                  {/* Stats list */}
                  <div className="mt-6 space-y-2 border-t border-white/5 pt-4 text-xs font-mono text-gray-400">
                    <div className="flex justify-between">
                      <span>Prize Pool:</span>
                      <span className="text-white font-semibold">{comp.prizePool}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Team Size:</span>
                      <span className="text-white font-semibold">{comp.teamSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Timeline:</span>
                      <span className="text-white font-semibold">{comp.date.split(',')[0]}</span>
                    </div>
                  </div>
                </div>

                {/* Register CTA Button */}
                <div className="mt-8 pt-4 border-t border-white/5 grid grid-cols-2 gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectEvent(comp);
                    }}
                    className="w-full py-2.5 bg-transparent border border-white/10 hover:border-white/20 text-white font-mono text-xs rounded transition-all"
                  >
                    View Details
                  </button>
                  <button
                    onClick={(e) => handleRegisterClick(e, comp)}
                    className={`w-full py-2.5 text-xs font-mono font-semibold rounded uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] cursor-pointer ${btnClass}`}
                  >
                    Register
                  </button>
                </div>

                {/* Bounding box crisp accent outline */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-white/0 group-hover:border-white/30 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-white/0 group-hover:border-white/30 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
