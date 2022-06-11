import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="h-20 mx-auto mt-[-3rem] bg-white"
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Our Story</h2>
          <div className="text-center font-medium">
            <p className="py-2 text-2xl border-b mx-8 mt-8">
              {" "}
              Reshaping the basics of social media to give back to those who
              deserve it.{" "}
            </p>
          </div>
          <button className="bg-[#971FFD] rounded-md w-[200px] mx-auto py-3 text-white my-6 font-medium">
            Learn more
          </button>
        </div>
        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="h-20 mx-auto mt-[-3rem] bg-white"
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Our Vision</h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8 text-2xl">
              Sharing, building community, and earning crypto, together.{" "}
            </p>
          </div>
          <button className="bg-[#971FFD] rounded-md w-[200px] mx-auto py-3 text-white my-6 font-medium">
            Learn more
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="h-20 mx-auto mt-[-3rem] bg-white"
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Our Technology
          </h2>
          <div className="text-center font-medium">
            <p className="py-2 border-b text-2xl mx-8 mt-8 text-center">
              {" "}
              The first social media platform built on blockchain technology.
            </p>
          </div>
          <button className="bg-[#971FFD] rounded-md w-[200px] mx-auto py-3 text-white my-6 font-medium">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
