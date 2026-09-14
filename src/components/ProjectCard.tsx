import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  return (
    <div className="glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col h-full border border-slate-800 group">
      {/* Card Header Image */}
      <div className="relative h-48 overflow-hidden bg-slate-950">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
        
        <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold text-cyan-300 bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 rounded-full">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-1">
          {project.title}
        </h3>
        <p className="text-xs text-cyan-400 font-medium mb-3 text-justify">
          {project.subtitle}
        </p>

        <p className="text-slate-300 text-sm line-clamp-3 mb-6 leading-relaxed text-justify">
          {project.description}
        </p>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
          {project.technologies.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-0.5 text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700/60 rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="px-2 py-0.5 text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/50 rounded-md">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800/80 mt-auto">
          <button
            onClick={() => onSelect(project)}
            className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>

          <div className="flex items-center space-x-3">
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                title="View Code"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                title="Live Demo"
              >
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
