import React from 'react';
import { ViewGridIcon } from "@heroicons/react/solid";
export default function Icon() {
  return (
      <header className="flex flex-col justify-center">
    <div className=" flex space-x-4 items-center">
      <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
    </div>
    </header>
  );
}
