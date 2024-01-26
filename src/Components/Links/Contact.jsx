'use client';

import React, { useState } from 'react';

export default function Contact() {
  const [collapse, setcollapse] = useState(true);
  const toggleCollapse = () => {
    setcollapse(!collapse);
  };
  return (
    <div>
      <p className="text-sm  text-gray-600">contact/my-contact-details</p>
      <button
        className="w-full text-left py-1 text-blue-800 hover:underline text-xl flex justify-between"
        onClick={() => toggleCollapse()}
        type="button"
      >
        Contact: My Contact Details
      </button>
      <p className="text-sm  text-gray-600">
      If you share the same passion for innovative software development as I do, reach out and let's embark on an exciting adventure through lines of code together! 💻✨
      </p>
      <div
        className={`transition-all duration-300 my-5 ${
          collapse ? 'max-h-0 mt-0 mb-0 overflow-hidden' : ' mb-3'
        } text-gray-600 rounded-md `}
      >
        <p>
        Always on the prowl for new and thrilling projects and opportunities! If you've got something fascinating to offer, feel free to reach out via email at
  &nbsp;
          <a href="mailto:arjunpandeyy12@gmail.com" className="text-blue-700 underline">arjunpandeyy12@gmail.com</a>
          &nbsp; or simply use the handy form for a direct message. Let the collaboration begin!
        </p>
        <form
          action="https://formspree.io/f/xbjndzwr"
          method="POST"
          className="lg:w-5/6 w-full my-3"
        >
          <input type="email" name="email" className="my-2 w-full border border-gray-400 rounded-md p-3 focus:outline-none" placeholder="Enter Email" />

          <textarea name="message" rows="3" placeholder="Enter message" className="my-2 border border-gray-400 w-full rounded-md p-3 focus:outline-none" />

          <button type="submit" className="bg-sky-700 w-full text-white text-center p-2 hover:bg-sky-800 rounded my-4">Send</button>
        </form>
      </div>
    </div>
  );
}
