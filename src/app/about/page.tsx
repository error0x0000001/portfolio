'use client';

import React, { useContext } from 'react';
import { LinkContext } from '../linksProvider';
import { motion } from 'framer-motion';
import Faq from '../../Components/Others/Faq';
import Footer from '@/Components/Home/Footer.jsx';

export default function About() {
  const links = useContext(LinkContext);
  const aboutLinks = links.filter((link) => link.keywords.includes('about'));
  return (
    
    <motion.div 
      className="lg:m-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {aboutLinks.map((link) => (
        <div key={link.id} className="py-2 my-3">
          {link.data}
        </div>
      ))}
      <Faq />
      
      
    </motion.div>
    
    
  );
}
