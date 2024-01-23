import Image from 'next/image';
import React from 'react';

export default function Card() {
  return (

    <div className="border border-r-0 border-y-0 p-8 ">
      <Image
        src="/profile-pic.jpg"
        alt="profile-pic"
        className="rounded-lg"
        width={280}
        height={180}
      />
      <div className=" py-5 my-3 border-y  border-gray-300 ">
        <h1 className=" text-xl mb-3">
          About
        </h1>
        <p className="text-sm">
        Greetings, esteemed colleagues and fellow professionals! 👋🌟 I&apos;m
          <b> Umashankar Pandey</b>
          , a Full-stack developer, I'm poised to embrace new challenges. I relish thinking outside the box and thrive on pushing boundaries. Whether it's crafting front-end aesthetics or engineering back-end functionalities, I relentlessly pursue excellence in every line of code I write. 🚀💻
        </p>
        <br />
        <p className="text-sm my-1">
          <b>Frontend: </b>
          JavaScript, React, Redux, Bootstrap, Tailwind, Next.Js, Framer Motion
        </p>
        <p className="text-sm my-1">
          <b>Backend: </b>
          MySQL, SubaBase, MongoDB
        </p>
        <p className="text-sm my-1">
          <b>Frameworks: </b>
          Bootstrap, next.js
        </p>
        <p className="text-sm my-1">
          <b>Tools & methods: </b>
          Git, GitHub, Chrome Dev Tools, ESLint, Stylelint
        </p>
        

        <p className="text-sm my-1 mt-4">
          <b>Resume: </b>
          <a href="./Resume.pdf" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600">download</a>
        </p>
        <p className="text-sm my-1">
          <b>Email: </b>
          <a href="mailto:arjunpandeyy12@gmail.com" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer">arjunpandeyy12@gmail.com</a>
        </p>
        <p className="text-sm my-1">
          <b>LinkedIn: </b>
          <a href="/" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> </a>
        </p>
        <p className="text-sm my-1">
          <b>Github: </b>
          <a href="https://github.com/error0x0000001" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> github.com/error0x0000001</a>
        </p>
        {/* <p className="text-sm my-1">
          <b>Youtube: </b>
          <a href="/" target="_blank" className="text-blue-600 underline hover:text-blue-800 hover:underline visited:text-purple-600" rel="noreferrer"> youtube.com/channel/</a>
        </p> */}
      </div>

    </div>
  );
}
