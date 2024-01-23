'use client';

import React, { useState } from 'react';

export default function Intro() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">about/my-brief-introduction</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        My brief introducion
      </button>
      <p className="text-sm  text-gray-600">
      In the ever-evolving realm of full stack development, I thrive with a passion for crafting innovative digital solutions. Picture constructing the digital future, one virtual brick at a time – that&#39;s the essence of what fuels my excitement!
      </p>
      <div
        className={`transition-all duration-300 my-5  ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p className="my-2">
        👋 Hello there! I&#39;m Umashankar, your extraordinary Full Stack Developer!
        </p>
        <p className="my-2">
          💻 With a passion for crafting innovative digital solutions, I thrive in the dynamic
          world of full stack development. Imagine building the digital future, brick by virtual
          brick – that&apos;s what I live for!
        </p>

        <p className="my-2">
        🚀 I've invested countless hours mastering a versatile arsenal of technologies, from frontend marvels like React to backend powerhouses such as MongoDB and Node.js. My code isn't just a collection of characters; it's a symphony of functionality and elegance..
        </p>

        <p className="my-2">
        🏆 Navigating the digital realm, my journey has been marked by breathing life into remarkable projects, consistently pushing the boundaries of what's possible. Fueled by a commitment to excellence and an insatiable curiosity for emerging tech trends, I strive to carve a path of innovation.
        </p>

        <p className="my-2">
        🤝 Collaboration is ingrained in my DNA. Flourishing in diverse teams, I adeptly bridge the gap between design, frontend, and backend. After all, the most remarkable digital experiences emerge from seamless cooperation.
        </p>
        <p className="my-2">
        Ready to elevate your digital dreams to the next level? Let's connect and co-create something extraordinary together. The future is digital, and I'm here to shape it. 🚀💻
        </p>
      </div>
    </div>
  );
}
