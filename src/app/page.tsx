import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from '../components/Footer'
import Avatar from '../components/Avatar';
import Image from 'next/image';
export default function Home() {
 
  return (
    <div className="flex flex-col justify-center h-screen">
      {/* header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
      <div className="flex space-x-4 items-center">
        <p className="link">About</p>
        <p className="link">Store</p>

      </div>
      {/* right */}
      <div className="flex space-x-4 items-center">
        <p className="link">Gmail</p>
        <p className="link">Images</p>


        {/* icon */}
    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
        {/* avatar */}
        <Avatar url="https://qph.cf2.quoracdn.net/main-qimg-ba9341fd5e99e413f706915513491700-lq"/>
      </div>
</header>
      
      {/* body */}

      <form  className="flex flex-col items-center mt-40 flex-grow">
      <Image
          src="/profile-pic.png"
          alt="profile-pic"
          
          width={300}
          height={100}
        />
        <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center
        sm:max-w-xl lg:max-w-2xl">

      <SearchIcon className="h-5 mr-3 text-gray-500"/>
      <input type="text" className="flex-grow focus:outline-none" />
      <MicrophoneIcon className="h-5" />
      </div>
      
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
      sm:flex-row sm:space-x-4">
        {/* <button>Project</button> */}
        <button className="btn">Google Search</button>
        <button className="btn">Download resume</button>
      </div>


      </form>


      {/* footer */}
      <p className="items-start text-xs lg:text-sm text-gray-600 p-5">India</p>
      <Footer/>
    
    </div>
  );
}