import Link from 'next/link';
import TopbarOptions from "../Search/TopbarOptions";
import React from 'react';
import { 
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon
 } from '@heroicons/react/outline';

export default function Topbar() {
  return (
    
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">

      <div className="flex space-x-6">
      <Link href="/about"><TopbarOptions Icon={SearchIcon} title="About" selected/></Link>
      <Link href="/images"><TopbarOptions Icon={PhotographIcon} title="Images" /></Link>
      <Link href="/videos"><TopbarOptions Icon={PlayIcon} title="Video" /></Link>
      <Link href="/work"><TopbarOptions Icon={MapIcon} title="Project" /></Link>
      <Link href="./Resume.pdf"><TopbarOptions Icon={NewspaperIcon} title="Resume" /></Link>
        
      </div>
    </div>
  );
}
