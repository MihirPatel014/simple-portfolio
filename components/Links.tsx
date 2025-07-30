import React from 'react';
import { portfolioData } from '../data/portfolioData';
import type { Link as LinkType } from '../types';

const GithubIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className={className} aria-hidden="true">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"></path>
  </svg>
);

const LinkedInIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.62 1.62 0 0013 14.19V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.1 1.16 3.1 3.99z"></path>
    </svg>
);

const MailIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
    <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"></path>
    <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"></path>
  </svg>
);

const ResumeIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
        <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM5.5 4a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM5.5 6.5A.75.75 0 016.25 6h3.5a.75.75 0 010 1.5h-3.5A.75.75 0 015.5 6.5zM6.25 9a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5zM6.25 12a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5h-7.5z" clipRule="evenodd" />
    </svg>
);

const icons: Record<LinkType['name'], React.ReactNode> = {
    GitHub: <GithubIcon className="h-6 w-6" />,
    LinkedIn: <LinkedInIcon className="h-6 w-6" />,
    Email: <MailIcon className="h-6 w-6" />,
    Resume: <ResumeIcon className="h-6 w-6" />,
};

const Links: React.FC = () => {
  const allLinks: LinkType[] = portfolioData.links.map(link => ({
    ...link,
    icon: icons[link.name]
  }));

  return (
    <ul className="mt-8 flex items-center" aria-label="Social media">
      {allLinks.map((link) => (
        <li key={link.name} className="mr-5 text-xs shrink-0">
          <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name} title={link.name} className="block text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-300">
            <span className="sr-only">{link.name}</span>
            {link.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Links;
