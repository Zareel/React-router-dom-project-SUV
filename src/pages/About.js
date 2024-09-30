import React from "react";
import img from "../images/mahindraThar.avif";

const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10">
        <img className="lg:w-[700px] lg:h-[400px]" src={img} alt="" />

        <div className="px-6 flex flex-col justify-center items-center">
          <h1 className="text-2xl lg:text-4xl font-semibold py-6 text-center">
            Don't squeeze in a small car when you could relax in a SUV
          </h1>
          <p className="pb-6 lg:text-xl text-center w-[450px] lg:w-[800px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
            tempora assumenda error maxime vitae commodi quam minus corrupti
            laboriosam repudiandae fugit debitis illo modi, eligendi itaque
            aliquam tempore ab ipsum.
          </p>
          <p className="lg:text-xl text-center w-[450px] lg:w-[800px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem distinctio consequuntur nesciunt facilis deserunt
            dignissimos.
          </p>
        </div>

        <div className="w-full h-auto flex justify-center max-w-auto px-10 my-10">
          <div className="container bg-yellow-700 text-gray-200 p-7 ">
            <h1 className="text-2xl font-semibold">Your Desitination is waiting</h1>
            <h1 className="text-2xl font-semibold">Your SUV is waiting</h1>
            <button className="bg-stone-800 text-gray-200 hover:text-white  rounded-md px-6 py-2 mt-6">Explore our SUVs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
