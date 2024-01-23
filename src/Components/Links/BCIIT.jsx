'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function VU() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">education/my-post-graduation-journey</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Education: Banarsidas Chandiwala Institue Of Information Technology
      </button>
      <p className="text-sm  text-gray-600">
      Banarsidas Chandiwala Institue Of Information Technology (BCIIT), part of the GGSIPU, stands as a beacon of innovative education. It embraces modern Information and Communication Technologies to redefine the learning experience, paving the way as a trailblazer among educational institutions.
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <a href="https://www.vu.edu.pk"  target='_blank' className="my-1">
          <div className="flex my-4 items-center">
            <Image
              src="/bciit.png"
              alt="BCIIT"
              width={70}
              height={70}
            />
            <p className="mx-4 text-2xl font-bold">
            Banarsidas Chandiwala Institue Of Information Technology
            </p>
          </div>
        </a>

        <ul className="list-disc list-outside">
          <b> Expected graduation: 2025</b>
          <li className="my-2">
          Pursuing a Master&#39;s in Computer Applications (MCA) at  Banarsidas Chandiwala Institue Of Information Technology (BCIIT), I am immersed in an extensive two-year program. This curriculum provides a robust foundation in information technology, coupled with a diverse set of practical skills, shaping a comprehensive educational experience.
          </li>
          {/* <li className="my-2">
            Learning through an online platform, which not
            only demonstrates my adaptability and self-discipline but also underlines my ability to
            excel in a flexible, technology-driven learning environment.
          </li> */}
          <li className="my-2">
          Exploring diverse facets of computer science, my journey in the Master&#39;s in Computer Applications (MCA) program involves delving into core areas such as programming languages, data structures, algorithms, and software engineering. This educational expedition has not only broadened my understanding but also equipped me with invaluable practical skills, especially in coding, problem-solving, and a profound grasp of computer science principles.
          </li>
        </ul>

      </div>
    </div>
  );
}
