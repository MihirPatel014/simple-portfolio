import React from 'react';
import AnimatedButton from './AnimatedButton';
import { portfolioData } from '../data/portfolioData';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a className="group flex items-center py-3" href={href}>
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-slate-900 dark:bg-slate-600 dark:group-hover:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-900 dark:group-hover:text-slate-200">{children}</span>
        </a>
    </li>
);

const Hero: React.FC = () => {
  return (
    <section>
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-3">
          {portfolioData.name}
        </h1>
        <h2 className="text-lg font-medium tracking-tight text-slate-700 dark:text-slate-200">
          {portfolioData.title}
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-xs mt-4">
          {portfolioData.intro}
        </p>
      </div>

      <nav className="hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max">
              <NavLink href="#experience">Experience</NavLink>
              <NavLink href="#projects">Projects</NavLink>
              <NavLink href="#articles">Articles</NavLink>
          </ul>
      </nav>

      <div className="mt-8 lg:hidden">
        <AnimatedButton href={`mailto:${portfolioData.contactEmail}`}>
          Get in Touch
        </AnimatedButton>
      </div>
    </section>
  );
};

export default Hero;
