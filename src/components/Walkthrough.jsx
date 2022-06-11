import React from "react";
import Content from "../assets/content.png";

function Walkthrough() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto" src={Content} alt="/" />
        <div className="flex flex-col justify-center ml-3">
          <p className="text-[#971FFD] font-bold">YOU OWN YOUR CONTENT</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Our Solution to fix Modern Social Media
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perspiciatis, deleniti? Sint in delectus, corrupti laudantium culpa
            provident commodi perferendis, dolor dolorem temporibus architecto
            ipsam sapiente ea quaerat voluptate id aliquam.
          </p>
          <button className="bg-black rounded-md w-[200px] mx-auto md:mx-0 py-3 my-6 text-gray-200">
            How it's done
          </button>
        </div>
        {/* <a href="https://pngtree.com/so/web">web png from pngtree.com/</a> */}
      </div>
    </div>
  );
}

export default Walkthrough;
