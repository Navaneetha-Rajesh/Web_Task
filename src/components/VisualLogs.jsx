import React from 'react';
import { motion } from 'framer-motion';
import { Video, Disc, ShieldAlert, Cpu } from 'lucide-react';

export default function VisualLogs() {
  const cameraLogs = [
    {
      id: 'cam-01',
      title: 'CAM_01_ALPHA',
      location: 'Launchpad Alpha (MEC Hangar)',
      recDate: '2000-09',
      logId: 'LOG_ID[ORIGIN]',
      status: 'ARCHIVED',
      desc: 'Inception of Excel at Model Engineering College. Pioneered Kerala\'s first national-level student-organized techno-managerial symposium.',
      coordinates: 'LAT: 10.0286 | LON: 76.3292'
    },
    {
      id: 'cam-02',
      title: 'CAM_02_LUNAR',
      location: 'Lunar Traverse Grid (Rover-X Arena)',
      recDate: '2018-10',
      logId: 'LOG_ID[ROVER_COMMENCE]',
      status: 'ARCHIVED',
      desc: 'Rover-X obstacle tracking grid commissioned. First physical robotics traversal simulated over rocky terrains under custom payloads.',
      coordinates: 'LAT: 0.0000 | LON: 0.0000'
    },
    {
      id: 'cam-03',
      title: 'CAM_03_CORE',
      location: 'Ignito Warp Reactor (Hangar Stage A)',
      recDate: '2026-07',
      logId: 'LOG_ID[IGNITED]',
      status: 'LIVE_FEED',
      desc: 'Ignito anti-gravity core engine active. Preparing software matrices and satellite navigation APIs for Excel 2026 workshops.',
      coordinates: 'THRUST: 98% | TEMP: 400K'
    },
    {
      id: 'cam-04',
      title: 'CAM_04_ORBITAL',
      location: 'Low-Earth Orbit Debris Field',
      recDate: '2026-07',
      logId: 'LOG_ID[DEBRIS_TRACK]',
      status: 'LIVE_FEED',
      desc: 'Telemetry radar lock on scrap clusters. Space debris simulator algorithm loaded. Laser grid target tracking online.',
      coordinates: 'ALT: 400KM | DECAY: 0.02c'
    }
  ];

  return (
    <section id="visual-logs" className="py-16 relative overflow-hidden">
      {/* Glow background highlight */}
      <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[60vw] h-[40vh] bg-glow-radial filter blur-[80px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-mono">
              Telemetry Records
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-1">
              Visual Telemetry Logs
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md mt-2 md:mt-0 font-sans font-light">
            Browse through historical surveillance checkpoints tracking Excel\'s legacy and live spaceport feeds.
          </p>
        </div>

        {/* Camera Feeds Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cameraLogs.map((log, idx) => {
            const isLive = log.status === 'LIVE_FEED';
            return (
              <motion.div
                key={log.id}
                className="group glass-panel rounded border border-white/10 overflow-hidden flex flex-col justify-between relative bg-black/60 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* CRT Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] pointer-events-none opacity-40" />
                
                {/* Visual Header */}
                <div className="p-4 border-b border-white/5 bg-white/2 flex justify-between items-center text-[10px] font-mono text-gray-400">
                  <div className="flex items-center space-x-1.5">
                    <Video className="w-3.5 h-3.5 text-cosmic-cyan" />
                    <span className="text-white font-bold">{log.title}</span>
                  </div>
                  
                  {/* REC indicator */}
                  <div className="flex items-center space-x-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${isLive ? 'bg-red-500 animate-ping' : 'bg-gray-500'}`} />
                    <span className={isLive ? 'text-red-400 font-bold' : ''}>{log.status}</span>
                  </div>
                </div>

                {/* Surveillance Screen Block */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                  {/* Telemetry metadata block */}
                  <div className="space-y-1 font-mono text-[9px] text-cosmic-cyan/85 bg-space-black/50 p-2.5 rounded border border-white/5">
                    <div className="flex justify-between">
                      <span>REC_DATE:</span>
                      <span className="text-white">{log.recDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOC:</span>
                      <span className="text-white">{log.location.split('(')[0]}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>LOG_ID:</span>
                      <span className="text-cosmic-orange">{log.logId}</span>
                    </div>
                    <div className="flex justify-between text-[8px] text-gray-500 border-t border-white/5 pt-1 mt-1">
                      <span>COORD:</span>
                      <span>{log.coordinates}</span>
                    </div>
                  </div>

                  {/* Log description */}
                  <p className="text-xs text-gray-300 font-sans font-light leading-relaxed">
                    {log.desc}
                  </p>
                </div>

                {/* Footer specs line */}
                <div className="px-4 py-2 bg-white/2 border-t border-white/5 flex justify-between items-center text-[8px] font-mono text-gray-500">
                  <span>SYS_HEALTH: OK</span>
                  <span>SIG_LATENCY: 4.8ms</span>
                </div>

                {/* Excel bounding borders on hover */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-2 border-l-2 border-cosmic-cyan/0 group-hover:border-cosmic-cyan/30 transition-all duration-300" />
                <div className="absolute bottom-0 right-0 w-0 h-0 border-b-2 border-r-2 border-cosmic-cyan/0 group-hover:border-cosmic-cyan/30 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
