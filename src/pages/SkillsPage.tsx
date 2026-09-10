import React from 'react';
import { Network, Code2, BrainCircuit, Cpu, Terminal, Database, Server, Languages, CheckCircle2 } from 'lucide-react';

interface TechnicalSkill {
  name: string;
  level: number;
  category: 'Programming' | 'Networking' | 'Electronics' | 'Database';
  description: string;
}

const skillBars: TechnicalSkill[] = [
  { name: 'Frontend Development', level: 90, category: 'Programming', description: 'React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS' },
  { name: 'Backend Development', level: 85, category: 'Programming', description: 'Node.js, Express.js, Python, REST APIs' },
  { name: 'IT & Networking', level: 80, category: 'Networking', description: 'Network troubleshooting, Linux, Cybersecurity fundamentals' },
  { name: 'Database Systems', level: 85, category: 'Database', description: 'MySQL, PostgreSQL' },
];

const skillTags = {
  frontend: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  backend: ['Node.js', 'Express.js', 'Python', 'REST APIs'],
  networking: ['Network Troubleshooting', 'Linux OS', 'Cybersecurity fundamentals', 'CompTIA Network+'],
  database: ['MySQL', 'PostgreSQL', 'SQL']
};

const softSkills = [
  "Strong analytical and problem-solving abilities",
  "Excellent teamwork and collaboration skills",
  "Adaptability and willingness to learn new technologies"
];

const languages = [
  { name: 'Amharic', level: 'Native proficiency' },
  { name: 'English', level: 'Basic working proficiency' }
];

const SkillsPage: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4" /> Technical & Soft Skills
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical & <span className="text-cyan-400">Professional Competencies</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Full-stack web development, database fundamentals, IT networking, and cybersecurity expertise.
          </p>
        </div>

        {/* Skill Proficiency Progress Bars */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan-400" /> Key Proficiency Overview
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillBars.map((skill, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-5 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{skill.name}</h4>
                    <p className="text-[11px] text-slate-400">{skill.description}</p>
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Tech Stack Tags */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-5 h-5 text-cyan-400" /> Technical Skills Categorized
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Frontend Development */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Code2 className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Frontend Development</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillTags.frontend.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono text-cyan-200 bg-slate-800/80 rounded-lg border border-slate-700/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 border border-teal-500/20">
                  <Server className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Backend Development</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillTags.backend.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono text-teal-200 bg-slate-800/80 rounded-lg border border-slate-700/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Database Systems */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <Database className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">Database Systems</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillTags.database.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono text-purple-200 bg-slate-800/80 rounded-lg border border-slate-700/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* IT & Networking */}
            <div className="glass-card rounded-2xl p-6 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Network className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-white text-base">IT & Networking</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillTags.networking.map((tag, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-mono text-indigo-200 bg-slate-800/80 rounded-lg border border-slate-700/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills & Languages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl mx-auto">
          {/* Soft Skills Section */}
          <div className="md:col-span-7 glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Soft Skills</h3>
            </div>
            
            <div className="space-y-3">
              {softSkills.map((skill, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="md:col-span-5 glass-card rounded-2xl p-6 border border-slate-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center">
                <Languages className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Languages</h3>
            </div>

            <div className="space-y-3">
              {languages.map((lang, idx) => (
                <div key={idx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{lang.name}</span>
                  <span className="text-[11px] font-mono text-cyan-400 bg-slate-800 px-2 py-0.5 rounded-md border border-slate-700">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SkillsPage;