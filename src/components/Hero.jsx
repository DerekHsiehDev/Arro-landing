import React from "react";
import Typed from "react-typed";
import {
  AiOutlineApple,
  AiOutlineAndroid,
  AiFillApple,
  AiFillAndroid,
} from "react-icons/ai";

function Hero() {
  return (
    <div className="text-white">
      <div className="max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className=" text-[#971FFD] uppercase font-bold p-2">
          Arro Social Token
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl md:py-6">
          Your Fair Share.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            The first platform focused on
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl md:pl-3 font-bold pl-2"
            strings={["Privacy", "Crypto", "Free Speech"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <a
          href="#"
          className="no-underline hover:underline md:text-2xl text-xl font-bold text-gray-500 sm:text-lg mx-10"
        >
          Now available for trading on Hotbit.io
        </a>
        <div className="flex flex-col md:flex-row max-w-[600px] mx-auto mt-10">
          {/* <button className="bg-[#971FFD] rounded-md w-[200px] mx-auto py-3 mr-5 text-white my-6 font-bold">
            <AiOutlineApple size={30} />
            iOS Beta
          </button>
          <button className="bg-[#971FFD] rounded-md w-[200px] mx-auto py-3 text-white my-6 font-bold">
            Android Beta
          </button> */}
          <button className="border-solid border-2 border-[#971ffd] text-[#971ffd] flex justify-center items-center rounded-md py-2 px-3 hover:bg-[#971ffd] hover:text-white duration-150 mx-5">
            <AiFillAndroid size={30} className="mr-3" />
            <h2 className="text-lg font-medium mr-3">Android</h2>
          </button>
          <button className="border-solid border-2 border-[#971ffd] text-[#971ffd] flex justify-center items-center rounded-md py-2 px-3 hover:bg-[#971ffd] hover:text-white duration-150 mx-5">
            <AiFillApple size={30} className="mr-3" />
            <h2 className="text-lg font-medium mr-3">iOS Beta</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
