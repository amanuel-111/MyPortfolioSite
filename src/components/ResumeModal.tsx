import React from 'react';
import { X, Printer, GraduationCap, Award, MapPin, Mail, Phone, Linkedin, CheckCircle2, FolderGit2, Wrench, Languages, User } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Controls */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
          <div>
            <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Curriculum Vitae</span>
            <h2 className="text-2xl font-extrabold text-white">AMANUEL TILAHUN</h2>
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors border border-slate-700"
            >
              <Printer className="w-4 h-4 text-cyan-400" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Body */}
        <div className="space-y-8 text-sm text-slate-300">
          {/* Header Info */}
          <div className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white tracking-wide">AMANUEL TILAHUN</h1>
              <p className="text-cyan-400 font-medium mt-0.5 text-xs md:text-sm text-justify">
                Junior Full-Stack Developer & AI-Powered Web Developer
              </p>
            </div>
            <div className="space-y-1.5 text-xs text-slate-400 shrink-0">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Bahir Dar | Ethiopia
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400" /> 0932158839
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400" /> amatila111@gmail.com
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" /> linkedin.com/in/amanuel-tilahun-03231226a
              </div>
            </div>
          </div>

          {/* Objective */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <User className="w-4 h-4" /> Objective
            </h3>
            <p className="leading-relaxed bg-slate-800/30 p-4 rounded-xl border border-slate-800/80 text-xs md:text-sm text-slate-200 text-justify">
              Recent graduate in Computer Science with a strong interest in Full-stack web development, AI-assisted application development, Cybersecurity, IT infrastructure, and Networking. Holds certifications in Linux Server Administration, Networking, Cybersecurity, and a foundation in electronics maintenance. Focused on utilizing technology to build modern, scalable solutions and eager to contribute as a Junior Full-Stack Developer or Junior Electronics Technician.
            </p>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" /> Education
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800 flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white text-sm">Bachelor of Science in Computer Science</h4>
                  <p className="text-xs text-cyan-400 font-medium text-justify">Bahir Dar University</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">Graduate</span>
              </div>
              <div className="p-4 bg-slate-800/40 rounded-xl border border-slate-800 flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-white text-sm">Level IV in Electronics Maintenance</h4>
                  <p className="text-xs text-cyan-400 font-medium text-justify">Bahir Dar Polytechnic College</p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded-md">Graduate</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4" /> Technical Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-white text-xs block text-cyan-300">Frontend Development</span>
                <p className="text-slate-300 text-justify">React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS</p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-white text-xs block text-cyan-300">Backend Development</span>
                <p className="text-slate-300 text-justify">Node.js, Express.js, Python, REST APIs</p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-white text-xs block text-cyan-300">Database Systems</span>
                <p className="text-slate-300 text-justify">MySQL, PostgreSQL</p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800 space-y-1">
                <span className="font-bold text-white text-xs block text-cyan-300">IT & Networking</span>
                <p className="text-slate-300 text-justify">
                  Network troubleshooting, Linux OS, Cybersecurity fundamentals, Git/GitHub
                </p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800 space-y-1 md:col-span-2">
                <span className="font-bold text-white text-xs block text-cyan-300">Electronics Maintenance</span>
                <p className="text-slate-300 text-justify">Basic hardware diagnostics, component testing, circuitry repair</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Award className="w-4 h-4" /> Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs">
              {[
                "Gebeya Frontend Engineering (React.js)",
                "Linux Server Administration",
                "Network Tech & Security",
                "CCNA Starting Course Completion",
                "CompTIA Network+ training",
                "Cisco CCST IT Support",
                "Cybersecurity for IT Professionals"
              ].map((cert, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-800/30 rounded-lg border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-200">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <FolderGit2 className="w-4 h-4" /> Key Projects
            </h3>
            <div className="space-y-3">
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white text-xs md:text-sm">AI Study Coach | Full-Stack Web Application</h4>
                <p className="text-xs text-slate-300 mt-1 text-justify">
                  Developed an AI-powered study platform that helps students learn through interactive chat, personalized study assistance, and educational resources.
                </p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white text-xs md:text-sm">Cargo Management System | Full-Stack Web Application</h4>
                <p className="text-xs text-slate-300 mt-1 text-justify">
                  Designed and developed a cargo management system for managing shipments, customers, and logistics operations.
                </p>
              </div>
              <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800">
                <h4 className="font-bold text-white text-xs md:text-sm">Book Rental Application | Full-Stack Web Application</h4>
                <p className="text-xs text-slate-300 mt-1 text-justify">
                  Developed an online book rental platform that enables users to browse, rent, and manage book collections.
                </p>
              </div>
            </div>
          </div>

          {/* Soft Skills & Languages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Soft Skills */}
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3">Soft Skills</h3>
              <ul className="space-y-2 text-xs text-slate-200">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Strong analytical and problem-solving abilities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Excellent teamwork and collaboration skills</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Adaptability and willingness to learn new technologies</span>
                </li>
              </ul>
            </div>

            {/* Languages */}
            <div className="p-4 bg-slate-800/30 rounded-xl border border-slate-800">
              <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Languages className="w-4 h-4" /> Languages
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                  <span className="font-bold text-white">Amharic</span>
                  <span className="text-cyan-400 font-mono">Native proficiency</span>
                </div>
                <div className="flex justify-between items-center bg-slate-900/60 p-2 rounded-lg border border-slate-800">
                  <span className="font-bold text-white">English</span>
                  <span className="text-cyan-400 font-mono">Basic working proficiency</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
