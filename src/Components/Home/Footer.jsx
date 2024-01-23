import React from 'react';

export default function Footer() {
  return (
    // <footer className="border flex justify-between p-3">
    //   <ul className="flex justify-start text-xs lg:text-sm text-gray-500">
    //   <li className="lg:mx-2 mx-1">India</li>
    //   </ul>
    //   <ul className="flex justify-start text-xs lg:text-sm text-gray-500">
    //     <li className="lg:mx-2 mx-1"><a target="_blank" href="about">About</a></li>
    //     <li className="lg:mx-2 mx-1"><a target="_blank" href="https://www.linkedin.com/in/batoolfatima2135/" rel="noreferrer">LinkedIn</a></li>
    //     <li className="lg:mx-2 mx-1"><a target="_blank" href="https://www.youtube.com/channel/UCFlLhnJS3lXB6JATy8QFrrg" rel="noreferrer">Youtube</a></li>
    //     <li className="lg:mx-2 mx-1"><a target="_blank" href="https://github.com/batoolfatima2135" rel="noreferrer">Github</a></li>
    //   </ul>
    //   <ul className="flex justify-end text-xs lg:text-sm text-gray-500">
    //     <li className="lg:mx-2 mx-1"><a href="/work">Projects</a></li>
    //     <li className="lg:mx-2 mx-1"><a href="contact">Contact</a></li>
    //     <li className="lg:mx-2 mx-1"><a href="mailto:arjunpandeyy12@gmail.com">Email</a></li>
    //     <li className="lg:mx-2 mx-1"><a href="./Batool_Fatima_Resume.pdf" target="_blank">Resume</a></li>
    //   </ul>
    // </footer>
    <footer className="border w-full flex justify-between bg-gray-200 p-3">
      
      <ul className="flex justify-start text-xs lg:text-sm text-gray-500">
        <li className="lg:mx-2 mx-1"><a target="_blank" href="about">About</a></li>
        <li className="lg:mx-2 mx-1"><a target="_blank" href="/" rel="noreferrer">LinkedIn</a></li>
        <li className="lg:mx-2 mx-1"><a target="_blank" href="/" rel="noreferrer">Youtube</a></li>
        <li className="lg:mx-2 mx-1"><a target="_blank" href="https://github.com/error0x0000001" rel="noreferrer">Github</a></li>
      </ul>
      <ul className="flex justify-end text-xs lg:text-sm text-gray-500">
        <li className="lg:mx-2 mx-1"><a href="/work">Projects</a></li>
        <li className="lg:mx-2 mx-1"><a href="contact">Contact</a></li>
        <li className="lg:mx-2 mx-1"><a href="mailto:arjunpandeyy12@gmail.com">Email</a></li>
        <li className="lg:mx-2 mx-1"><a href="Resume.pdf" target="_blank">Resume</a></li>
      </ul>
      
    </footer>
  );
}
