'use client';

import React, { useContext } from 'react';
import { LinkContext } from '@/app/linksProvider';
import { motion } from 'framer-motion';
import Faq from '../../../Components/Others/Faq';

export default function Search({ params }: { params: { query: string } }) {
  const AllLinks = useContext(LinkContext);
  const query = params.query.toLowerCase().split('%20');
  const Links = AllLinks.filter((link) => query.some((w) => link.keywords.includes(w)));
  return (
    <motion.div 
      className="lg:m-6 m-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >

      {Links && Links.map((link) => (
        <div key={link.id} className="py-2 my-3">
          {link.data}
        </div>
      ))}
      {Links.length < 1 && (
      <div className="text-center py-5">
        <p>💔 Oopsie-daisy! Looks like the search party for excitement came back empty-handed. Let's try again – who knew misadventures could be so entertaining? 🕵️‍♂️🌟</p>
        <p> 💡 Another attempt, or shall we gracefully pirouette through the dropdown of options? Your call – I'm here to entertain and assist with equal flair! 🎭🔄</p>
      </div>

      )}
      <Faq />
    </motion.div>
  );
}
