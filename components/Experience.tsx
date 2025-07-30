import React from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Experience as ExperienceType } from '../types';

const ExperienceItem: React.FC<ExperienceType> = ({ years, role, company, description, stack }) => (
  <a href="#" className="block rounded-lg transition-all p-4 -m-4 group hover:bg-slate-100/50 dark:hover:bg-slate-800/50 hover:shadow-sm">
    <div className="grid md:grid-cols-4 gap-4 md:gap-8">
      <div className="md:col-span-1 text-sm text-slate-500 dark:text-slate-500 pt-1">
        {years}
      </div>
      <div className="md:col-span-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors duration-300">
          {role} · {company}
        </h3>
        <p className="mt-2 text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {stack.map(tech => (
            <span key={tech} className="bg-sky-100/50 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300 text-xs font-medium px-2.5 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </a>
);

const Experience: React.FC = () => {
  return (
    <section id="experience" className="scroll-mt-24">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-400 mb-8">
        Experience
      </h2>
      <div className="flex flex-col gap-8">
        {portfolioData.experience.map((exp, index) => (
          <ExperienceItem key={index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
