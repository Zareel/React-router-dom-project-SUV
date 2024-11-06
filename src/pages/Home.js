import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="bg-stone-900 h-screen w-full relative">
        <img
          src="https://cdni.autocarindia.com/ExtraImages/20240227063644_1238976123b.jpeg"
          alt="img"
          className="w-full h-full object-cover absolute mix-blend-overlay"
        />
        <div className="flex justify-start pt-24 text-white flex-col gap-6 items-center">
          <h1 className="font-bold text-7xl tracking-wide  ">Your Destination is Waiting</h1>
          <p className="text-2xl font-semibold tracking-wider">
            Style Size Speed Safety Comfort...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
