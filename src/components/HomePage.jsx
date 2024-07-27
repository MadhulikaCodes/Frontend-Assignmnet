import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "./images/bg1.jpg";
import bg7 from "./images/bg7.png";
import bg3 from "./images/bg3.jpg";
import bg4 from "./images/bg4.jpg";
import bg5 from "./images/bg5.jpg";
import bg6 from "./images/bg6.jpg";
 // Adjust the path accordingly

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center text-white py-20"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="text-center mb-10 flex flex-col">
        <h1 className="text-4xl font-bold">
          <span className="text-purple-200">EMPOWERING</span>
          <span className="text-purple-300"> THE</span>
          <span className="text-purple-400"> DIGITAL</span>{" "}
          <span className="text-purple-500">ERA:</span>
        </h1>
        <h2 className="text-3xl mt-2">
          <span className="text-purple-300">DECENTRALIZING </span>
          <span className="text-purple-500">ENTERTAINMENT</span>
        </h2>
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
        <div className=" flex flex-row justify-between gap-20 items-center">
          <div className="rotate-[-9deg]  ">
            <img
              src={bg3}
              style={{ height: "100px", width: "200px" }}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="rotate-[8deg]  ">
            <img
              src={bg5}
              style={{ height: "70px", width: "70px" }}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="rotate-[40deg] my-20">
            <img
              src={bg4}
              style={{ height: "100px", width: "100px" }}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="rotate-[-5deg]  ">
            <img
              src={bg6}
              style={{ height: "160px", width: "200px" }}
              className="rounded-xl shadow-2xl"
            />
          </div>
          <div className="rotate-[45deg]  ">
            <img
              src={bg7}
              style={{ height: "120px", width: "200px" }}
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
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
