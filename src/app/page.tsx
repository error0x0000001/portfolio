// import Heading from '../Components/Home/Heading';
// import Navbar from '../Components/Home/Navbar';
// import Input from '../Components/Home/Input';
// import Buttons from '../Components/Home/Buttons';
// import Footer from '../Components/Home/Footer';
import Avatar from '../components/Avatar';
import Image from 'next/image';
export default function Home() {
 
  return (
    <div>
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

        {/* avatar */}
        <Avatar url="https://qph.cf2.quoracdn.net/main-qimg-ba9341fd5e99e413f706915513491700-lq"/>
      </div>
</header>
      
      {/* body */}

      {/* footer */}
    </div>
  );
}