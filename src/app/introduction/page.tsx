'use client';

import React, { useContext } from 'react';
import { LinkContext } from '../linksProvider';
import { motion } from 'framer-motion';
import Faq from '../../Components/Others/Faq.jsx';

export default function About() {
  const links = useContext(LinkContext);
  const aboutLinks = links.filter((link) => link.keywords.includes('about'));
  return (
    <motion.div 
      className="lg:m-6 m-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h1 className="text-xl font-bold"> 🌟 Greetings, fabulous human! 👋 Brace yourself for a lightning-speed introduction – it's about to get professionally whimsical! 🚀</h1>
      <h1 className="text-lg font-bold text-gray-700 my-3">  I hope this video brings you joy and a sprinkle of entertainment! 🌟</h1>
      <iframe src="https://youtu.be/Hv2XFbW1Cfw?si=xcWjLY8G0M7WD8P1" title="Introduction" className="lg:w-full lg:h-96 md:w-full md:h-96" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
      <Faq />
    </motion.div>
  );
}
