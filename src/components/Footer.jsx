import React from 'react';
import { Github, Twitter, Instagram, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-space-black/80 backdrop-blur-md relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Block: Logo / Copyright */}
          <div className="text-center md:text-left space-y-1">
            <span className="font-display font-extrabold text-white tracking-widest text-lg">
              IGNITO 2026
            </span>
            <p className="text-xs text-gray-500 font-sans font-light">
              &copy; {new Date().getFullYear()} IGNITO Space Tech Summit. All rights reserved.
            </p>
          </div>

          {/* Center Block: Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="GitHub"
              className="p-2 rounded border border-white/5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cosmic-cyan transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter / X"
              className="p-2 rounded border border-white/5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cosmic-cyan transition-all"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="p-2 rounded border border-white/5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cosmic-cyan transition-all"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              aria-label="Website"
              className="p-2 rounded border border-white/5 bg-white/5 hover:bg-white/10 text-gray-400 hover:text-cosmic-cyan transition-all"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

          {/* Right Block: Credits */}
          <div className="text-center md:text-right text-xs font-mono text-gray-500">
            <span>Designed by the </span>
            <span className="text-cosmic-cyan hover:underline transition-colors cursor-pointer">
              IGNITO Web Team
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
