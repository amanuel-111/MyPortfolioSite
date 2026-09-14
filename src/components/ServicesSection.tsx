import React from 'react';
import { Code2, Network, Wrench, ShieldCheck, Cpu } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Full-Stack Software Engineering',
    subtitle: 'Web Apps, APIs & Modern Solutions',
    description: 'Designing and building scalable web applications using React, TypeScript, Node.js, PHP, and modern database architectures.',
    tags: ['React', 'TypeScript', 'Node.js', 'PHP', 'REST APIs', 'SQL']
  },
  {
    icon: Network,
    title: 'Network Engineering & Security',
    subtitle: 'Infrastructure & Defense Basics',
    description: 'Configuring routers, switches, subnetting, TCP/IP networking, network security fundamentals, and troubleshooting corporate connectivity.',
    tags: ['Cisco CCNA', 'Network+', 'TCP/IP', 'Switching & Routing', 'Firewalls']
  },
  {
    icon: Wrench,
    title: 'AI-Assisted Application Development',
    subtitle: 'Smart Features & Integration',
    description: 'Leveraging AI APIs and models to build intelligent, context-aware web applications and personalized user experiences.',
    tags: ['OpenAI API', 'LLM Integration', 'Prompt Engineering', 'AI Chatbots']
  },
  {
    icon: ShieldCheck,
    title: 'IT Support & Systems Administration',
    subtitle: 'Help Desk & Workstation Care',
    description: 'Providing comprehensive IT troubleshooting, OS installations (Windows/Linux), peripheral configuration, and end-user tech support.',
    tags: ['Linux OS', 'Windows Server', 'PC Diagnostics', 'Hardware Upgrades', 'Help Desk']
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
            <Cpu className="w-4 h-4" /> Core Capabilities
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive <span className="text-cyan-400">Technical Expertise</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg text-justify">
            Bridging full-stack software engineering, AI integration, network management, and cybersecurity to provide robust tech solutions.
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
