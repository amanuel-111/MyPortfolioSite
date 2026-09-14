import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, MapPin, ArrowRight, GraduationCap, Sparkles, CheckCircle2, FileText } from 'lucide-react';

interface HomePageProps {
  onOpenResume?: () => void;
}

const roles = [
  'Junior Full-Stack Developer',
  'AI-Powered Web Developer',
  'Computer Science Graduate',
  'Junior Electronics Technician'
];

const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="pt-28 md:pt-36 pb-20 md:pb-28 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 glow-cyan rounded-full pointer-events-none opacity-60 animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 glow-indigo rounded-full pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Highlights */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold text-slate-300">
                Available for IT & Software Roles
              </span>
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 ml-1" />
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Amanuel Tilahun</span>
              </h1>
              
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-semibold text-cyan-400 font-mono transition-all">
                  &gt; {roles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Descriptive Bio */}
            <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 text-justify">
              Junior Full-Stack Developer & recent Computer Science graduate. Passionate about building modern, AI-assisted web applications, exploring cybersecurity, and managing IT infrastructure with a foundation in electronics maintenance.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Bahir Dar | Ethiopia
              </div>
              <a
                href="mailto:amatila111@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> amatila111@gmail.com
              </a>
              <a
                href="tel:0932158839"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> 0932158839
              </a>
              <a
                href="https://www.linkedin.com/in/amanuel-tilahun-03231226a"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 text-xs text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" /> LinkedIn Profile
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all shadow-xl shadow-cyan-500/20 hover:scale-105"
              >
                Explore Projects <ArrowRight className="w-4 h-4" />
              </a>

              {onOpenResume && (
                <button
                  onClick={onOpenResume}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-slate-800 hover:bg-slate-700 text-white transition-all border border-slate-700 hover:scale-105"
                >
                  <FileText className="w-4 h-4 text-cyan-400" /> View CV Summary
                </button>
              )}

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-800"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image & Glowing Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative Gradient Frame */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-teal-400 rounded-3xl blur-lg opacity-40 animate-pulse-glow" />

              <div className="relative glass-card rounded-3xl p-3 border border-slate-700/80 overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/images/profile.jpg"
                    alt="Amanuel Tilahun"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Floating Achievement Tag */}
                <div className="absolute bottom-6 left-6 right-6 p-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-cyan-500/30 flex items-center justify-between shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">B.Sc Computer Science</h4>
                      <p className="text-[10px] text-cyan-400 text-justify">Bahir Dar University</p>
                    </div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800/80">
          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-white mb-1">7</div>
            <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Training & Certifications</div>
            <div className="text-[11px] text-slate-400 mt-1">Networking, CyberSec & Systems</div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-white mb-1">3</div>
            <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Full-Stack Projects</div>
            <div className="text-[11px] text-slate-400 mt-1">AI, Logistics & Rental Apps</div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-white mb-1">1</div>
            <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Degree</div>
            <div className="text-[11px] text-slate-400 mt-1">B.Sc Computer Science</div>
          </div>

          <div className="glass-card rounded-2xl p-5 text-center border border-slate-800">
            <div className="text-3xl font-extrabold text-white mb-1">∞</div>
            <div className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Continuous Learning</div>
            <div className="text-[11px] text-slate-400 mt-1">Skill Growth & Adaptability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;