import React from 'react';
import Image from 'next/image';

export default function Heading() {
  return (
<div>
      <Image
          src="/heading.png"
          alt="heading"
          
          width={400}
          height={100}
        />
    </div>
  );
}
