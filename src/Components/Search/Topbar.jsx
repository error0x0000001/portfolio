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
    // <div className="flex lg:mx-52 overflow-auto">
    //   <Link href="/work" className="p-3  text-sm rounded-full border  lg:mx-1 hover:bg-gray-100">Projects</Link>
    //   <Link href="/images" className="p-3  text-sm rounded-full border  lg:mx-1 hover:bg-gray-100">Images</Link>
    //   <Link href="/videos" className="p-3 text-sm rounded-full border mx-0.5 lg:mx-1 hover:bg-gray-100">Videos</Link>
    //   <Link href="/about" className="p-3 text-sm mx-0.5 rounded-full border lg:mx-1 hover:bg-gray-100">About</Link>
    //   <Link href="./Batool_Fatima_Resume.pdf" target="_blank" className="p-3 text-sm mx-0.5 rounded-full border lg:mx-1">Resume</Link>
    // </div>
    <div className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">

      <div className="flex space-x-6">
      <Link href="/about"><TopbarOptions Icon={SearchIcon} title="About" selected/></Link>
      <Link href="/images"><TopbarOptions Icon={PhotographIcon} title="Images" /></Link>
      <Link href="/video"><TopbarOptions Icon={PlayIcon} title="Video" /></Link>
      <Link href="/work"><TopbarOptions Icon={MapIcon} title="Project" /></Link>
      <Link href="./Resume.pdf"><TopbarOptions Icon={NewspaperIcon} title="Resume" /></Link>
        
      </div>
    </div>
  );
}
