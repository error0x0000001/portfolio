'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function Microverse() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">education/my-CN-journey</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Education: My journey at Coding Ninja's
      </button>
      <p className="text-sm  text-gray-600">
      Coding Ninjas provides computer language courses that are used to design applications, and software, among others. 
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <a href="https://www.microverse.org/"  target='_blank' className="my-1">
          <div className="flex my-4 items-center">
            <Image
              src="/CN.png"
              alt="CodingNinjas"
              width={50}
              height={50}
            />
            <p className="mx-4 text-2xl font-bold">
              Coding Ninjas
            </p>
          </div>
        </a>

        <ul className="list-disc list-outside">
          <li className="my-2">
            Spent 9 month's mastering full-stack development at Coding Ninja's while simultaneously developing projects with Node.js,
            MongoDb, JavaScript, React, and Redux.
          </li>
          <li className="my-2">
            Developed skills in remote pair programming using GitHub,
            industry-standard git-flow.
          </li>
          <li className="my-4">
            <b className="my-2">Skills:</b>
            <br />
            · Wireframing · Problem Solving · Test-Driven Development · Web Technologies
            · Bootstrap · Project Management · Tailwind CSS · Cross-functional Team Leadership
            · React.js · TypeScript · Git · Functional Programming · Computer Science · GitHub
            · GitHub · Time Management · Unit Testing · Methodology · Progressive Web Applications
            · Version Control · Teamwork · Control Systems · Front-End Design · Database Design
            · Next.js ·JavaScript · Cross-team Collaboration · Redux.js · Interactive Web
            · Programming · Scalable Web Applications · Communication · Web Development
          </li>
        </ul>

      </div>
    </div>
  );
}
