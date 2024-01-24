'use client';

import { createContext } from 'react';
import Intro from '../Components/Links/Intro';
import CN from '../Components/Links/CN';
import BCIIT from '../Components/Links/BCIIT';
import TechnicalSkills from '../Components/Links/TechnicalSkills';
import SoftSkills from '../Components/Links/SoftSkills';
import Certification from '../Components/Links/Certifications';
import Frontend from '../Components/Links/Frontend';
import Backend from '../Components/Links/Backend';
import Contact from '../Components/Links/Contact';
import WorkTemplate from '../Components/Links/WorkTemplate';

export interface LinksInterface {
  id: number,
  keywords: string[];
  data: JSX.Element;
}
export const LinkContext = createContext<LinksInterface[]>([]);

export default function LinksProvider({
  children,
  initialLinks = [
    {
      id: 1,
      keywords: ['about', 'intro', 'developer', 'introduction', 'pitch', 'who', 'detail', 'details', 'information', 'bio', 'profile'],
      data: <Intro />,
    },
    {
      id: 2,
      keywords: ['about', 'introduction', 'details', 'knowledge', 'information', 'education', 'cn', 'coding', 'ninja' , 'coding ninja', 'qualifications', 'qualification', 'Knowledge',
      ],
      data: <CN />,
    },
    {
      id: 3,
      keywords: ['about', 'introduction', 'details', 'knowledge', 'information', 'education', 'post graduation', 'post-graduation','university', 'degree',
        'qualifications', 'qualification', 'Knowledge', 'graduate'],
      data: <BCIIT />,
    },
    {
      id: 4,
      keywords: ['about', 'skill', 'set', 'technical', 'technology', 'technologies', 'knowledge', 'proficiencies',
        'capabilities', 'tech', 'c++', 'python'],
      data: <TechnicalSkills />,
    },

    {
      id: 5,
      keywords: ['about', 'achievment', 'achievements', 'knowledge', 'certificates', 'certificate', 'certification',
        'microverse', 'qualification', 'qualifications'],
      data: <Certification />,
    },
    {
      id: 6,
      keywords: ['skills', 'set', 'front-end', 'frontend', 'design', 'developement', 'skill', 'ui', 'user', 'interface', 'react',
        'redux', 'webpage', 'website', 'style', 'html', 'css', 'javascript', 'tailwind', 'bootstrap','next js', 'designing'],
      data: <Frontend />,
    },
    {
      id: 7,
      keywords: ['skills', 'set', 'development', 'database', 'back-end', 'backend', 'dynamic', 'website', 'webpage', 'mongodb',
        'supabase', 'mysql', 'logic', 'c++'],
      data: <Backend />,
    },
    {
      id: 8,
      keywords: ['about', 'skills', 'set', 'solving', 'creativity', 'communication', 'professional', 'professionalism', 'soft',
        'interpersonal', 'knowledge', 'qualities', 'behavioral', 'collaboration', 'adaptive', 'people', 'team', 'teamwork', 'leadership', 'mentor'],
      data: <SoftSkills />,
    },
     {
      id: 9,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'mongodb', 'mern', 'backend', 'back-end', 'full-stack', 'fullstack', 'frontend' ,
        'react', 'redux', 'tailwind', 'html', 'css', 'api', 'javascript', 
        'c++', 'python', 'git', 'github', 'eslint', 'stylelint', 'mysql', 'supabase', 
        'tailwind', 'html', 'framer motion', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="CineView" />,
    },
    {
      id: 9,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'ruby on rails', 'ror', 'backend', 'back-end', 'rubocop', 'ruby', 'tailwind', 'html', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="Old Portfolio" />,
    },
     {
      id: 9,
      keywords: ['work', 'works', 'project', 'projects', 'experience', 'application', 'applications', 'development',
        'ruby on rails', 'ror', 'backend', 'back-end', 'rubocop', 'ruby', 'tailwind', 'html', 'webpack', 'jest', 'git', 'github', 'eslint', 'stylelint'],
      data: <WorkTemplate currentProject="Fang Dental Lab" />,
    },
   {
      id: 10,
      keywords: ['contact', 'about', 'skills', 'work', 'message', 'email', 'touch', 'reach'],
      data: <Contact />,
    },
  ],
}: {
  children: React.ReactNode;
  initialLinks?: LinksInterface[];
}) {
  return (
    <LinkContext.Provider value={initialLinks}>{children}</LinkContext.Provider>
  );
}
