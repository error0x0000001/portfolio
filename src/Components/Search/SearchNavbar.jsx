import React from 'react';
import TopInput from '../Home/TopInput';
import Icon from '../Others/Icon';
import Links from '../Others/Links';
import Profile from '../Others/Profile';
import Image from 'next/image';

export default function SearchNavbar() {
  return (
    <nav className="flex justify-between p-3 pt-10">
      <div className="flex items-center w-3/4">
      <div className='mr-3'>
      <a href="/" className="w-1/4">
      <Image
          src="/heading.png"
          alt="heading"
          
          width={200}
          height={80}
        />
        </a>
    </div>

        <TopInput />
      </div>
      <div className="flex items-center ">
      <div className="">
        <a href="mailto:arjunpandeyy12@gmail.com" className="mx-1 text-sm hover:underline hidden lg:inline-block">Gmail</a>
        <a href="/images" className="mx-3 text-sm hover:underline hidden lg:inline-block">Images</a>
      </div>
        <div className="">
        <Icon />
        </div>
        <Profile />
      </div>
    </nav>

  );
}
