import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers } from 'lucide-react';
import { Project } from '@/data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl text-slate-100 p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-500/30 rounded-full">
              {project.category}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            {project.title}
          </h2>
          <p className="text-cyan-400 font-medium text-sm md:text-base mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-56 md:h-72 mb-6 rounded-xl overflow-hidden border border-slate-800">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Description */}
        <div className="mb-6 space-y-3 text-slate-300 leading-relaxed text-sm md:text-base">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-cyan-400" /> System Architecture & Overview
          </h3>
          <p>{project.detailedOverview}</p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-white mb-3">Key Features & Highlights</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 bg-slate-800/40 p-2.5 rounded-lg border border-slate-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold uppercase text-slate-400 tracking-wider mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-xs font-mono text-cyan-200 bg-slate-800/80 border border-slate-700 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center justify-end gap-4 pt-4 border-t border-slate-800">
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors border border-slate-700"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-colors shadow-lg shadow-cyan-500/25"
            >
              <ExternalLink className="w-4 h-4" />
              Live Project Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
