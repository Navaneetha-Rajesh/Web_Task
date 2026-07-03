import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Trophy, Users, ShieldAlert, Award, Phone, Mail } from 'lucide-react';

export default function EventModal({ isOpen, onClose, event }) {
  // Support keyboard dismiss (Esc key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Lock background scroll
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!event) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop blur overlay */}
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <motion.div
            className="relative w-full max-w-2xl glass-panel rounded-lg border border-white/10 shadow-2xl overflow-hidden z-10 my-auto flex flex-col"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Ambient accent background blur */}
            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-cosmic-cyan/10 filter blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-cosmic-violet/10 filter blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="relative p-6 border-b border-white/10 flex justify-between items-start">
              <div>
                <span className="inline-block text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-cosmic-cyan/30 bg-cosmic-cyan/10 text-cosmic-cyan font-mono font-medium mb-2">
                  {event.track || event.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight">
                  {event.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-md border border-white/10 bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body (Scrollable) */}
            <div className="p-6 overflow-y-auto max-h-[60vh] space-y-6">
              {/* Detailed Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cosmic-cyan font-mono">
                  Event Brief
                </h4>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  {event.description || event.longDescription || "This is a flagship tech event in IGNITO. Engage, innovate, and test your skills against top contenders."}
                </p>
              </div>

              {/* Event Specs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-b border-white/5 py-4">
                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-md border border-white/5">
                  <Trophy className="w-5 h-5 text-cosmic-orange shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Prize Pool</div>
                    <div className="text-sm font-semibold text-white">{event.prizePool || 'Certificate'}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-md border border-white/5">
                  <Users className="w-5 h-5 text-cosmic-cyan shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Team Size</div>
                    <div className="text-sm font-semibold text-white">{event.teamSize || 'Individual'}</div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-md border border-white/5">
                  <Calendar className="w-5 h-5 text-cosmic-violet shrink-0" />
                  <div>
                    <div className="text-xs text-gray-400 font-mono">Schedule</div>
                    <div className="text-sm font-semibold text-white">{event.date || 'Day 1'}</div>
                  </div>
                </div>
              </div>

              {/* Guidelines / Rules */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cosmic-cyan font-mono flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4" /> Participation Guidelines
                </h4>
                <ul className="list-disc list-inside space-y-1.5 text-sm text-gray-300 pl-1">
                  <li>Registration must be completed prior to the event time slot.</li>
                  <li>Teams must adhere strictly to the rulebooks specified by the coordinators.</li>
                  <li>In case of disputes, the decision of the evaluation panel will be final and binding.</li>
                  <li>Violations of safety or code of conduct will result in immediate disqualification.</li>
                </ul>
              </div>

              {/* Coordinators / Contacts */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-cosmic-cyan font-mono">
                  Event Contacts
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Phone className="w-4 h-4 text-cosmic-cyan" />
                    <span>{event.coordinatorPhone || '+91 98765 43210 (Aditya)'}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-300">
                    <Mail className="w-4 h-4 text-cosmic-violet" />
                    <span>{event.coordinatorEmail || 'coordination@ignito.org'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer / CTA Actions */}
            <div className="p-6 border-t border-white/10 bg-white/5 flex flex-col sm:flex-row justify-end space-y-3 sm:space-y-0 sm:space-x-4">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-md border border-white/10 text-white font-mono text-sm hover:bg-white/5 transition-all duration-200"
              >
                Close Details
              </button>
              <button
                onClick={() => {
                  alert(`Registering for ${event.title}! This simulated registration logs you as a participant.`);
                  onClose();
                }}
                className="px-6 py-2.5 bg-gradient-to-r from-cosmic-cyan to-cosmic-violet hover:from-cosmic-cyan/90 hover:to-cosmic-violet/90 text-space-black font-semibold rounded-md border border-cosmic-cyan/30 shadow-[0_0_15px_rgba(0,242,254,0.3)] hover:shadow-[0_0_25px_rgba(0,242,254,0.5)] transition-all duration-300 font-display text-sm tracking-wide uppercase cursor-pointer"
              >
                Confirm Registration
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
