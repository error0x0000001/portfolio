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
      <p className="text-sm  text-gray-600">Skills/front-end-skills</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Skills: My Front-end Skills Set
      </button>
      <p className="text-sm  text-gray-600">
      My expertise extends to HTML, CSS, and JavaScript, with a special focus on React, Redux, Next.js, and Framer Motion. This comprehensive skill set enables me to craft not only responsive and visually appealing interfaces but also dynamic and engaging user experiences. Let's bring websites to life with the perfect blend of code and creativity! 🚀💻
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
        With a firm grasp of the following technologies and an unwavering commitment to delivering high-quality user interfaces, I am wholeheartedly dedicated to crafting web solutions that not only meet but surpass user expectations. Let's elevate the user experience together! 🚀💻
        </p>

        <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-8 my-5 ">
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/javascript.png"
              width={45}
              height={45}
            />
            <p>JavaScirpt</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/react.png"
              width={45}
              height={45}
            />
            <p>React</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/redux.png"
              width={45}
              height={45}
            />
            <p>Redux</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto text-center"
              src="/techstack/jest.png"
              width={45}
              height={45}
            />
            <p>Jest</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/css.png"
              width={45}
              height={45}
            />
            <p className="text-center">CSS</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/tailwind.png"
              width={45}
              height={45}
            />
            <p>Tailwind CSS</p>
          </div>
          <div className="m-2  lg:m-3 text-center">
            <Image
              className="mx-auto"
              src="/techstack/bootstrap.png"
              width={45}
              height={45}
            />
            <p>Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
}
