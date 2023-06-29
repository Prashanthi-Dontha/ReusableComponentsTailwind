import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { resource } from "../Main";
function ScalingCards() {
  const { theme } = useContext(resource);
  return (
    <div className="flex flex-col justify-center items-center px-6 md:px-16 dark:bg-slate-600">
      <div className="lg:text-2xl text-sm font-semibold md:font-normal md:text-xl md:w-[400px] text-center  dark:text-white">
        <h1>Mint, buy and sell or just launch your own NFT Store</h1>
      </div>
      <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1 mt-8 mb-10 gap-x-3 gap-y-2">
        <Link
          to="contact"
          className=" bg-gray-200 md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-md shadow-md hover:scale-110 transition duration-500 border hover:border-sky-700 text-center"
        >
          <div className="flex flex-col items-center justify-center h-full p-5 text-center">
            <p className=" bg-cyan-500 w-[80px] h-[80px] rounded-full mb-5"></p>
            <p className=" font-semibold">Buy and sell your NFTs</p>
          </div>
        </Link>
        <Link
          to="contact"
          className=" bg-gray-200 md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-md shadow-md hover:scale-110 transition duration-500 border hover:border-sky-700"
        >
          <div className="flex flex-col items-center justify-center h-full p-5 text-center">
            <p className=" bg-cyan-500 w-[80px] h-[80px] rounded-full mb-5"></p>
            <p className="font-semibold">Discover top artists & creators</p>
            <p className=" text-sm hidden lg:block text-gray-600">
              Explore beautiful digital art by talented artists around the world
            </p>
          </div>
        </Link>
        <Link
          to="contact"
          className=" bg-gray-200 md:w-[200px] md:h-[250px] lg:w-[250px] lg:h-[300px] rounded-md shadow-md hover:scale-110 transition duration-500 border hover:border-sky-700"
        >
          <div className="flex flex-col items-center justify-center h-full p-5 text-center">
            <p className=" bg-cyan-500 w-[80px] h-[80px] rounded-full mb-5"></p>
            <p className="font-semibold">Earn money by trading NFTs</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default ScalingCards;
