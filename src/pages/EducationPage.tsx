import React from 'react';
import { GraduationCap, BookOpen, CheckCircle2, Cpu } from 'lucide-react';

const educationData = [
  {
    institution: 'Bahir Dar University',
    location: 'Bahir Dar, Ethiopia',
    degree: 'BSc Computer Science (2019–2025)',
    type: 'Higher Education Degree',
    icon: GraduationCap,
    description: 'Foundational study of computer science principles, software development methodologies, database systems, operating systems, networking fundamentals, and computer architecture.',
    highlights: [
      'Software Development Fundamentals & Algorithms',
      'Database Systems & SQL',
      'Operating Systems & Networking Principles',
      'Object-Oriented Programming (Java, C++)'
    ]
  },
  {
    institution: 'Bahir Dar Polytechnic College',
    location: 'Bahir Dar, Ethiopia',
    degree: 'Level IV TVET — Electrical Electronics Equipment Servicing Management',
    type: 'Technical & Vocational Education (TVET)',
    icon: Cpu,
    description: 'Technical and vocational training in electrical and electronic equipment servicing management, hardware fault diagnosis, component testing, and equipment maintenance.',
    highlights: [
      'Electrical & Electronic Equipment Servicing',
      'Hardware Fault Diagnosis & Troubleshooting',
      'Component-Level Diagnostics & Testing',
      'Equipment Servicing Management'
    ]
  }
];

const EducationPage: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <BookOpen className="w-4 h-4" /> Academic Background
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Education & <span className="text-cyan-400">Qualifications</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg text-justify">
            Academic degree in computer science and technical vocational training in electrical and electronic equipment servicing.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                className="glass-card glass-card-hover rounded-2xl p-8 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="px-3 py-1 text-xs font-mono text-cyan-300 bg-slate-800/80 border border-slate-700/80 rounded-full">
                      {edu.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-cyan-400 mb-4 text-justify">
                    {edu.degree}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 text-justify">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-800/80">
                  <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Key Focus Areas</h4>
                  <ul className="space-y-2">
                    {edu.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducationPage;