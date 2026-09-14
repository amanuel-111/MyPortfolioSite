import React from 'react';
import { Mail, Phone, Linkedin, Github, ChevronUp, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 glow-cyan opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                Amanuel Tilahun
              </span>
            </div>

            <p className="text-slate-400 max-w-sm mt-4 md:mt-0 text-sm leading-relaxed text-justify">
              Computer Science graduate with training in electronics equipment servicing, networking, cybersecurity, and full-stack web development.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://www.linkedin.com/in/amanuel-tilahun-03231226a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/amanuel-111"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="mailto:amatila111@gmail.com"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="tel:0932158839"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors">Home Overview</a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-cyan-400 transition-colors">Core Capabilities</a>
              </li>
              <li>
                <a href="#skills" className="text-slate-400 hover:text-cyan-400 transition-colors">Technical Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-slate-400 hover:text-cyan-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#education" className="text-slate-400 hover:text-cyan-400 transition-colors">Education</a>
              </li>
              <li>
                <a href="#certifications" className="text-slate-400 hover:text-cyan-400 transition-colors">Certifications</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>amatila111@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>0932158839</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                <span>Bahir Dar, Ethiopia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-justify">&copy; {new Date().getFullYear()} Amanuel Tilahun. All rights reserved.</p>

          <div className="flex items-center space-x-4">
            <span>Built with React, TypeScript & Tailwind CSS</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              aria-label="Back to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;