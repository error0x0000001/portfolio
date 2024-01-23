import React from 'react';
import Image from 'next/image';

export default function Socials() {
  return (
    <div className="flex justify-center my-5">
      <a href="/"  target='_blank' className="mx-2"><Image src="/socials/linkedin.png" alt="linkedin" className="rounded-lg" width={25} height={25} /></a>
      <a href="https://github.com/error0x0000001"  target='_blank' className="mx-2"><Image src="/techstack/github.png" alt="github" className="rounded-lg" width={23} height={23} /></a>
      <a href="/"  target='_blank' className="mx-2"><Image src="/socials/youtube.png" alt="youtube" className="rounded-lg" width={30} height={25} /></a>
    </div>
  );
}
