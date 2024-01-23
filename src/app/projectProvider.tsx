'use client';

import { createContext } from 'react';

// Create the context
export interface Techstack{
  id: number;
  image: string;
  techName: string;
}
export interface Project {
  id: number;
  title: string;
  images: string[];
  github: string;
  live: string;
  description: string;
  techstack: Techstack[];
  tools: Techstack[];
  presentation: string;
}

export const ProjectContext = createContext<Project[]>([]);
const tools: Techstack[] = [
  {
    id: 0,
    image: '/techstack/git.png',
    techName: 'Git',
  },
  {
    id: 1,
    image: '/techstack/github.png',
    techName: 'GitHub',
  },
  {
    id: 2,
    image: '/techstack/stylelint.png',
    techName: 'Stylelint',
  },
  {
    id: 3,
    image: '/techstack/eslint.png',
     techName: 'ESLint',
  },
  {
    id: 4,
    image: '/techstack/chrome-devtool.png',
     techName: 'Chrome dev',
  },
  {
    id: 5,
    image: '/techstack/rest.png',
     techName: 'RESTful API',
  }];
const techstack: Techstack[] = [
  {
    id: 0,
    image: '/techstack/html.png',
    techName: 'HTML',
  },
  {
    id: 1,
    image: '/techstack/css.png',
    techName: 'CSS',
  },
  {
    id: 2,
    image: '/techstack/tailwind.png',
    techName: 'Tailwind',
  },
  {
    id: 3,
    image: '/techstack/bootstrap.png',
    techName: 'Bootstrap',
  },
  {
    id: 4,
    image: '/techstack/javascript.png',
    techName: 'JavaScript',
  },
  {
    id: 5,
    image: '/techstack/C++.png',
    techName: 'C++',
  },
  {
    id: 6,
    image: '/techstack/Python.png',
    techName: 'Python',
  },
  {
    id: 7,
    image: '/techstack/react.png',
    techName: 'React',
  },
  {
    id: 8,
    image: '/techstack/redux.png',
    techName: 'Redux toolkit',
  },
  {
    id: 9,
    image: '/techstack/nextjs.png',
    techName: 'Next.js',
  },
  {
    id: 10,
    image: '/techstack/MongoDB.png',
    techName: 'MongoDB',
  },
  {
    id: 11,
    image: '/techstack/SupaBase.png',
    techName: 'SupaBase',
  },
  {
    id: 12,
    image: '/techstack/MySQL.png',
    techName: 'MySQL',
  },
  {
    id: 13,
    image: '/techstack/Framer.webp',
    techName: 'Framer Motion',
  },
];
export default function ProjectProvider({
  children,
  initialProjects = [
  {
    id: 9,
    title: 'CineView',
    images: ['CineView-1.png', 'CineView-2.png', 'CineView-3.png', 'CineView-4.png', 'CineView-5.png', 'CineView-6.png'],
    github: '',
    live: '',
    description: 'An app to get the review & trailer of your favourite movie at your fingertips',
    techstack: [techstack[0], techstack[1], techstack[2], techstack[4], techstack[7], techstack[8], techstack[13]],
    tools: [...tools],
    presentation: '',
  },
  {
    id: 8,
    title: 'Old Portfolio',
    images: ['Old Portfolio-1.png', 'Old Portfolio-2.png', 'Old Portfolio-3.png', 'Old Portfolio-4.png'],
    github: '',
    live: '',
    description: 'My old portfolio',
    techstack: [techstack[0], techstack[1], techstack[2], techstack[4], techstack[7], techstack[9], techstack[13]],
    tools: [tools[1], tools[4],],
    presentation: '',
  },
  {
    id: 7,
    title: 'Fang Dental Lab',
    images: ['Fang Dental Lab-1.png', 'Fang Dental Lab-2.png', 'Fang Dental Lab-3.png', 'Fang Dental Lab-4.png', 'Fang Dental Lab-5.png', 'Fang Dental Lab-6.png'],
    github: '',
    live: '',
    description: 'An application for a start-up (Dental Company)',
    techstack: [techstack[0], techstack[1], techstack[4]],
    tools: [tools[1], tools[4]],
    presentation: '',
  },
 
],
}: {
  children: React.ReactNode;
  initialProjects?: Project[];
}) {
  return (
    <ProjectContext.Provider value={initialProjects}>
      {children}
    </ProjectContext.Provider>
  );
}
