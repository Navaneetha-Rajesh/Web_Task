import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, Flame } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-widest text-cosmic-cyan font-mono">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mt-1">
            Contact & Support
          </h2>
          <p className="text-gray-400 font-sans font-light mt-3 text-sm md:text-base">
            Reach out to our spaceport operations crew. Submit your details for fast inquiry resolutions or coordination questions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Block: Coordination Contacts */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Quick Summary Card */}
            <div className="glass-panel p-6 rounded border border-white/10 relative overflow-hidden flex-1 flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-cosmic-violet/10 filter blur-xl pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3 text-white">
                  <Flame className="w-6 h-6 text-cosmic-orange animate-pulse" />
                  <span className="text-lg font-display font-bold">IGNITO Operations Command</span>
                </div>
                
                <p className="text-gray-300 text-sm font-sans font-light leading-relaxed">
                  Our core web and logistics coordinators are on standby. Whether you have problems with registry validations, rover specification bounds, or team allocations, ping us!
                </p>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <div className="flex items-start space-x-3 text-sm text-gray-300">
                    <Mail className="w-5 h-5 text-cosmic-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-gray-400">Command Email</div>
                      <a href="mailto:support@ignito.org" className="hover:text-cosmic-cyan transition-colors">support@ignito.org</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm text-gray-300">
                    <Phone className="w-5 h-5 text-cosmic-violet shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-gray-400">Help Desk Hotline</div>
                      <a href="tel:+919876543210" className="hover:text-cosmic-violet transition-colors">+91 98765 43210</a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm text-gray-300">
                    <MapPin className="w-5 h-5 text-cosmic-cyan shrink-0 mt-0.5" />
                    <div>
                      <div className="font-mono text-xs text-gray-400">Hangar Venue</div>
                      <span>Government Model Engineering College (MEC), Kochi, Kerala</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notice Banner */}
              <div className="mt-8 p-4 bg-cosmic-cyan/5 border border-cosmic-cyan/20 rounded flex items-start space-x-3 text-xs text-gray-300">
                <HelpCircle className="w-4 h-4 text-cosmic-cyan shrink-0 mt-0.5" />
                <span>Notice: All online registrations close on July 15th, 2026. Spot registrations are subject to rover track slot availability.</span>
              </div>
            </div>

          </div>

          {/* Right Block: Inquiry Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-panel p-6 md:p-8 rounded border border-white/10 h-full flex flex-col justify-between space-y-6">
              
              <div className="space-y-4">
                <h3 className="text-xl font-display font-bold text-white mb-2">Send Secure Message</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase text-gray-400" htmlFor="name">Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-space-black/60 rounded border border-white/10 hover:border-white/20 focus:border-cosmic-cyan focus:outline-none focus:ring-1 focus:ring-cosmic-cyan font-sans text-sm text-white transition-all"
                      placeholder="Astronaut Name"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1">
                    <label className="block text-xs font-mono uppercase text-gray-400" htmlFor="email">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 bg-space-black/60 rounded border border-white/10 hover:border-white/20 focus:border-cosmic-cyan focus:outline-none focus:ring-1 focus:ring-cosmic-cyan font-sans text-sm text-white transition-all"
                      placeholder="name@cosmos.com"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase text-gray-400" htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-space-black/60 rounded border border-white/10 hover:border-white/20 focus:border-cosmic-cyan focus:outline-none focus:ring-1 focus:ring-cosmic-cyan font-sans text-sm text-white transition-all"
                    placeholder="Warp Core Inquiry"
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label className="block text-xs font-mono uppercase text-gray-400" htmlFor="message">Transmission Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-space-black/60 rounded border border-white/10 hover:border-white/20 focus:border-cosmic-cyan focus:outline-none focus:ring-1 focus:ring-cosmic-cyan font-sans text-sm text-white transition-all resize-none"
                    placeholder="Enter your message transmission parameters..."
                  />
                </div>
              </div>

              {/* Submit / Status Indicator */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {success ? (
                  <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5 animate-pulse">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    Transmission Received. Operations command will contact shortly.
                  </span>
                ) : (
                  <span className="text-[11px] text-gray-400 font-mono">
                    * Required validation parameters.
                  </span>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-cosmic-cyan to-cosmic-violet text-space-black font-semibold font-display uppercase tracking-widest text-xs rounded shadow-[0_0_15px_rgba(0,242,254,0.2)] hover:shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    isSubmitting ? 'opacity-70 pointer-events-none' : ''
                  }`}
                >
                  <Send className="w-3.5 h-3.5" />
                  {isSubmitting ? 'Transmitting...' : 'Send Transmission'}
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
