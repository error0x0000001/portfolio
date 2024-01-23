import React from 'react';

export default function Links() {
  return (
    
    <header className='flex w-full justify-between '>
      <div className="">
        <a href="mailto:arjunpandeyy12@gmail.com" className="mx-1 text-sm hover:underline">About</a>
        <a href="/images" className="mx-3 text-sm hover:underline">Store</a>
      </div>

      <div className="">
        <a href="mailto:arjunpandeyy12@gmail.com" className="mx-1 text-sm hover:underline">Gmail</a>
        <a href="/images" className="mx-3 text-sm hover:underline">Images</a>
      </div>
    </header>
  );
}
