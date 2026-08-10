import React, { useState } from 'react';
import { projects, Project } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import ProjectModal from '@/components/ProjectModal';
import { Layers, Sparkles } from 'lucide-react';

const categories = ['All', 'AI & Web', 'Logistics', 'Full-Stack'];

const ProjectsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-4 h-4" /> Portfolio Highlights
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-cyan-400">Software Projects</span>
          </h2>
          <p className="mt-4 text-slate-400 text-base md:text-lg">
            Demonstrating full-stack web development, AI integration, logistics platform design, and database systems.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={(p) => setActiveModalProject(p)}
            />
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      </div>
    </section>
  );
};

export default ProjectsPage;