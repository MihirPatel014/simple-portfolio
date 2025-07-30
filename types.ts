import type React from 'react';

export interface Experience {
  years: string;
  role: string;
  company: string;
  description: string;
  stack: string[];
}

export interface Project {
  name: string;
  description:string;
  stack: string[];
  link?: string;
}

export interface Article {
  date: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface Link {
  name: 'GitHub' | 'LinkedIn' | 'Email' | 'Resume';
  url: string;
  icon: React.ReactNode;
}

export interface PortfolioData {
  name: string;
  title: string;
  intro: string;
  contactEmail: string;
  experience: Experience[];
  projects: Project[];
  articles: Article[];
  links: Omit<Link, 'icon'>[];
}
