import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BackgroundEffects from './components/BackgroundEffects';
import TelemetryOverlay from './components/TelemetryOverlay';
import Hero from './components/Hero';
import VisualLogs from './components/VisualLogs';
import LegacyArchive from './components/LegacyArchive';
import FlagshipHighlights from './components/FlagshipHighlights';
import Events from './components/Events';
import Competitions from './components/Competitions';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EventModal from './components/EventModal';
import CustomCursor from './components/CustomCursor';

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectEvent = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedEvent(null);
    }, 300);
  };

  return (
    <div className="relative min-h-screen bg-space-black text-gray-100 selection:bg-cosmic-cyan selection:text-space-black">
      {/* 0. Custom Spacey Sniper Cursor */}
      <CustomCursor />

      {/* 1. Orbiting & Drifting Background Particle System */}
      <BackgroundEffects />

      {/* 2. Cybernetic/Space telemetry overlay corners parameters */}
      <TelemetryOverlay />

      {/* 3. Glassmorphic Sticky Header & Audio Synthesizer */}
      <Navbar />

      {/* Main Container Layout */}
      <main className="relative z-10">
        {/* 4. Hero Section (Deep Orbit Landing) */}
        <Hero />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />

        {/* 5. "Visual Logs" & "Legacy" Hub */}
        <VisualLogs />
        
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />
        
        <LegacyArchive />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />

        {/* 6. Flagship Highlights */}
        <FlagshipHighlights onSelectEvent={handleSelectEvent} />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />

        {/* 7. Events Section (The Science Tracks with Tech Specs) */}
        <Events onSelectEvent={handleSelectEvent} />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />

        {/* 8. Competitions Section (The Main Arenas) */}
        <Competitions onSelectEvent={handleSelectEvent} />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />

        {/* 9. Schedule / Timeline Hub */}
        <Schedule />

        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent max-w-7xl mx-auto" />

        {/* 10. Contact & Command Center */}
        <Contact />
      </main>

      {/* 11. Footer Credit Lines */}
      <Footer />

      {/* 12. Unified Drawer/Modal Overlay */}
      <EventModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        event={selectedEvent}
      />
    </div>
  );
}

export default App;
