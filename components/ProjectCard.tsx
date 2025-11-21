import React from 'react';
import { Project } from '../types';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white/60 dark:bg-white/5 backdrop-blur-lg border border-white/40 dark:border-white/10 hover:border-accent/30 dark:hover:border-accent/30 shadow-lg hover:shadow-2xl hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-500 flex flex-col h-full">
      <div className="h-48 overflow-hidden relative">
        <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors duration-300 z-10 mix-blend-overlay"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          onError={(e) => { e.currentTarget.src = `https://picsum.photos/500/300?random=${project.id}`; }}
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow relative z-20">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-accent transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow">
          {project.description}
        </p>
        
        <a 
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white mt-auto group-hover:text-accent transition-colors"
        >
          Read Article <ArrowUpRight size={16} className="ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;