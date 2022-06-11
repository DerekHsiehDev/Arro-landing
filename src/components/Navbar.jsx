import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNavClick = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto">
      <div className="flex items-center">
        <h1 className="w-full text-3xl font-bold text-white mr-3">Arro </h1>
        <img className="w-8 text-[#971FFD]" src={Logo} alt="" />
      </div>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
        <li className="p-4">Podcast</li>
      </ul>
      <div onClick={handleNavClick} className="block md:hidden">
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] w-[60%] h-full border-r ease-in-out duration-500 md:hidden"
        }
      >
        <div className="   flex m-4">
          <h1 className="w-full text-3xl font-bold text-white mr-3">Arro </h1>
          <img className="w-10 text-[#971FFD]" src={Logo} alt="" />
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
          <li className="p-4 border-b border-gray-600">Podcast</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
