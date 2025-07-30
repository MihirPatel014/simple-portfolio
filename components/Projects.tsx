import React from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Project as ProjectType } from '../types';

const ArrowUpRightIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className}>
        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
    </svg>
);


const ProjectItem: React.FC<ProjectType> = ({ name, description, stack, link }) => (
  <a href={link || '#'} target="_blank" rel="noopener noreferrer" className="block rounded-lg transition-all p-4 -m-4 group hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:shadow-sm">
    <div className="grid md:grid-cols-4 gap-4 md:gap-8">
      <div className="md:col-span-1 text-sm text-slate-500 dark:text-slate-500 pt-1">
        {/* Placeholder column */}
      </div>
      <div className="md:col-span-3">
        <h3 className="flex items-baseline text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300">
          <span>{name}</span>
          <ArrowUpRightIcon className="w-4 h-4 ml-1 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1"/>
        </h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map(tech => (
            <span key={tech} className="bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="scroll-mt-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-8">
        Featured Projects
      </h2>
      <div className="flex flex-col gap-8">
        {portfolioData.projects.map((proj, index) => (
          <ProjectItem key={index} {...proj} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
