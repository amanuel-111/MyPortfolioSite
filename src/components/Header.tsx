import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, FileText, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenResume?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#certifications', label: 'Certifications' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
              Amanuel T.
            </span>
            <span className="text-[10px] font-mono text-cyan-400/80 -mt-1 tracking-widest uppercase">
              CS & Hardware
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/80 rounded-xl transition-colors"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              CV Summary
            </button>
          )}

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
          >
            Hire Me <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center gap-3">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="p-2 text-xs font-semibold text-cyan-400 bg-slate-800/80 border border-slate-700 rounded-lg"
              title="View Resume"
            >
              <FileText className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-slate-300 hover:text-white bg-slate-800/80 border border-slate-700 rounded-lg"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div className="lg:hidden fixed top-16 inset-x-0 bg-slate-900/95 backdrop-blur-2xl border-b border-slate-800 p-6 transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                  activeSection === link.href.substring(1)
                    ? 'bg-cyan-500 text-slate-950'
                    : 'text-slate-200 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-800 flex flex-col space-y-2">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="w-full text-center py-3 text-sm font-bold text-slate-950 bg-cyan-400 rounded-xl"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;