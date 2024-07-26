import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "./bg1.jpg"; // Adjust the path accordingly

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center mb-10 flex flex-col">
        <h1 className="text-4xl font-bold">EMPOWERING THE DIGITAL ERA:</h1>
        <h2 className="text-3xl mt-2">DECENTRALIZING ENTERTAINMENT</h2>
        <p className="mt-4">
          Join the world's first DePIN: Revolutionizing Content Streaming with
          faster, safer, and cheaper access
        </p>
        <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-full text-center flex justify-center mx-[35%] ">
          Coming Soon{" "}
          <FontAwesomeIcon
            icon={faArrowRight}
            className="ml-2 bg-white rounded-full text-purple-600 p-1 "
          />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8 font-black">
        <div className="bg-white bg-opacity-80 text-black p-4 rounded-lg text-left">
          <h3 className="text-2xl font-semibold">No. of Node Operators</h3>
          <p className="text-4xl font-bold mt-2">2000</p>
        </div>
        <div className="bg-white bg-opacity-80 text-black p-4 rounded-lg text-left">
          <h3 className="text-2xl font-semibold">
            Data Transferred in TB (last 30 days)
          </h3>
          <p className="text-4xl font-bold mt-2">12,000</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
