'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function Frontend() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">Skills/backend-skills</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Skills: My Backend Skills Set
      </button>
      <p className="text-sm  text-gray-600">
        For backend my expertise include Node js, MongoDb, SupsBase and MySQL which allow me create
        efficiant web-applications
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
        I specialize in crafting powerful and highly functional web application backends, with a keen focus on MongoDB, Supabase, and MySQL. My expertise ensures the seamless creation of efficient backend systems. Let's dive into the realm of database mastery and create impactful solutions! 💻🚀"
        </p>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-7 my-5 ">
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/ruby.png"
              width={45}
              height={45}
            />
            <p className="text-center">Nodejs</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/rubyonrails.png"
              width={45}
              height={45}
            />
            <p>MongoDb</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/postgresql.png"
              width={45}
              height={45}
            />
            <p>MySQL</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto text-center"
              src="/techstack/rspec.png"
              width={45}
              height={45}
            />
            <p>SupaBase</p>
          </div>
        </div>
      </div>
    </div>
  );
}
