import React from 'react';
import Image from 'next/image';

export default function Profile() {
  return (
    <div className="group relative">
      <a href='/introduction'>
        <Image
          src="/profile-pic.jpg"
          alt="profile-pic"
          className="w-8 h-8 rounded-full mx-1 cursor-pointer transition duration-150 transform hover:scale-110"
          width={400}
          height={300}
        />

      </a>
      <div className="bg-gray-600 text-white   text-xs hidden lg-absolute px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 right-0">
        <p><a href="/" target="_blank" rel="noreferrer">Umashannkar Pandey</a></p>
        <p><a href="mailto:arjunpandeyy12@gmail.com">arjunpandeyy12@gmail.com</a></p>
        <p><a href="Resume.pdf" target="_blank" className="text-blue-400">Download Resume</a></p>
      </div>
    </div>
  );
}
