'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Certification() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">achievements/my-CN-certifications</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Achievements: My Certifications
      </button>
      <p className="text-sm  text-gray-600">
        Showcasing recent certification obtained from Coding Ninjas including:
        Certification of MongoDB, Certification of React & Redux,
        Certification of Node js and databases of fromtend
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <div className="grid grid-cols-2">
          <div className="col m-2 p-1">
            <a href="/" rel="noreferrer" target="_blank">
              <Image src="/frontend.jpg" alt="Frontend" 
              className='border border-gray-300 hover:-translate-y-1 hover:transition-transform'
              width={400}
              height={400}/>
              <p className="text-center p-3 font-bold text-xs py-2 lg:text-base md:text-base">Conding Ninja Certification of Frontend</p>
            </a>
          </div>
          <div className="col m-2 p-1">
            <a href="/" rel="noreferrer" target="_blank">
              <Image src="/frontende.jpg" alt="Frontend Excellence"  className='border border-gray-300 hover:-translate-y-1 hover:transition-transform'
              width={400}
              height={400}/>
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Conding Ninja Certification of Frontend Excellence</p>
            </a>
          </div>
          <div className="col m-2 p-1">
            <a href="/" rel="noreferrer" target="_blank">
              <Image src="/backend.jpg" alt="Backend" className='border border-gray-300 hover:-translate-y-1 hover:transition-transform'
              width={400}
              height={400} />
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Conding Ninja Certification of Backend</p>
            </a>
          </div>
          <div className="/">
            <a href="/" rel="noreferrer" target="_blank">
              <Image src="/backende.jpg" alt="Backend Excellence" className='border border-gray-300 hover:-translate-y-1 hover:transition-transform'
              width={400}
              height={400} />
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Conding Ninja Certification of Backend Excellence</p>
            </a>
          </div>
          <div className="/">
            <a href="/" rel="noreferrer" target="_blank">
              <Image src="/react.jpg" alt="React" className='border border-gray-300 hover:-translate-y-1 hover:transition-transform'
              width={400}
              height={400} />
              <p className="text-center p-3 font-bold text-xs py-2  lg:text-base md:text-base"> Conding Ninja Certification of React</p>
            </a>
          </div>
      
          
        </div>
      </div>
    </div>
  );
}
