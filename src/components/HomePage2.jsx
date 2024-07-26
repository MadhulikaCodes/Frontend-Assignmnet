import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


import globeImage from "./bg2.png"; // Replace with actual path


const HomePage2 = () => {
  return (
    <div className="min-h-screen bg-cover bg-[#2A2A2C] pt-8 bg-center flex flex-col items-center justify-center text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          FanCloud CDN network revolutionizes video infrastructure
        </h1>
        <h2 className="text-2xl mt-2">with community-driven Innovation</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          FanCloud pioneers a new era of connectivity with its decentralized
          content delivery network (dCDN), leveraging a global network of
          community-powered nodes. By harnessing a decentralized architecture,
          dCDN drastically reduces data transfer and compute costs while
          enhancing load time. Join FanCloud's dCDN network and experience the
          future of seamless, secure and community-driven consumption.
        </p>
      </div>

      <div className="relative w-full max-w-4xl mx-auto mb-10">
        <img src={globeImage} alt="Globe" className="mx-auto" />
        <div className="absolute top-10 left-1/3 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-10 right-1/3 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-10 left-1/4 transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute bottom-10 right-1/4 transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
        <div className="bg-blue-400 bg-opacity-80 p-4  rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-white">Content Nodes</h3>
          <p className="mt-4 mb-10 text-white">
            Content Nodes, Earn rewards for supplying their GPU, Storage and
            bandwidth for dCDN.
          </p>
          <button className="mt-4 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full">
            Deploy
          </button>
        </div>
        <div className="bg-pink-400 bg-opacity-90 p-4 rounded-lg text-center">
          <h3 className="text-2xl font-semibold text-black">Orchestrators</h3>
          <p className="mt-2 text-black">
            Orchestrators will be responsible for connecting with the Content
            Nodes for seamless streaming. Traffic distribution will be based on
            multiple factors like job type, performance.
          </p>
          <button className="mt-4 bg-pink-400 hover:bg-pink-500 text-black font-bold py-2 px-4 mx-10 rounded-full flex items-center">
            Coming Soon <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
        <div className="bg-green-400 bg-opacity-90 p-4 rounded-lg text-center relative">
          <h3 className="text-2xl font-semibold text-white">Validators</h3>
          <p className="mt-2 mb-10 text-white">
            Validators will be responsible for validating the execution of dCDN
            Network. Validators earn rewards from Staking and earn a cut on the
            executions validated.
          </p>
          <button className="mt-4 bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 mx-8 rounded-full flex items-center absolute bottom-4 right-2">
            Coming Soon <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage2;
