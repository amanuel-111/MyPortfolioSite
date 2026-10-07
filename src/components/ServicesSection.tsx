import React from 'react';
import { Code2, Network, Wrench, ShieldCheck, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Junior Full-Stack Development',
    subtitle: 'Web Apps, REST APIs & Practical Solutions',
    description: 'Building practical web applications and REST APIs using React, JavaScript, Node.js, and SQL databases through hands-on project work.',
    tags: ['React', 'JavaScript', 'TypeScript', 'Node.js', 'Express.js', 'SQL']
  },
  {
    icon: Network,
    title: 'Networking & Network Support',
    subtitle: 'TCP/IP, Routing & Security Fundamentals',
    description: 'Working with TCP/IP, IPv4 addressing, subnetting fundamentals, switching and routing concepts, network troubleshooting, and basic network security.',
    tags: ['TCP/IP', 'OSI Model', 'Subnetting', 'Routing & Switching', 'Network Security']
  },
  {
    icon: Wrench,
    title: 'Web Development & API Integration',
    subtitle: 'UI Components & Practical Features',
    description: 'Integrating external APIs, building interactive UI components, and developing functional web applications with modern libraries and tools.',
    tags: ['API Integration', 'UI Components', 'Responsive Design', 'Git / GitHub', 'Postman']
  },
  {
    icon: ShieldCheck,
    title: 'IT Support & Hardware Troubleshooting',
    subtitle: 'Help Desk, Hardware & OS Support',
    description: 'Providing hardware fault diagnosis, PC and peripheral troubleshooting, OS installations (Windows/Linux), software setup, and basic user assistance.',
    tags: ['Hardware Troubleshooting', 'Windows Support', 'Linux CLI', 'Help Desk', 'PC Maintenance']
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 glow-cyan rounded-full pointer-events-none opacity-50" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-4 h-4" /> Core Technical Focus
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Technical Skills & <span className="text-cyan-400">Focus Areas</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg text-justify">
            Foundational knowledge and hands-on project experience across IT support, networking fundamentals, cybersecurity basics, and full-stack web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="glass-card glass-card-hover rounded-2xl p-8 flex flex-col justify-between border border-slate-800/80 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-4 text-justify">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 text-justify">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 text-xs font-mono text-slate-300 bg-slate-800/60 rounded-md border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
