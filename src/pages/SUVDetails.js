import React from "react";
import { useParams, Link } from "react-router-dom";
import { data } from "../data/data";

const SUVDetails = () => {
  const  {id}  = useParams();
  console.log(id);
  const suv = data.find((item) => Number(item.id) === Number(id))
  console.log(suv);
 
  //Number(item.id) === Number(suvId)
 
  return (
    <div>
      <h1 className="text-4xl font-semibold py-6 px-6 lg:px-20">SUV Details</h1>
    <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
    <img src={suv.image} alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
    <div className="p-6 space-y-2 lg:col-span-5">
      <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">{suv.title}</h3>
      <span className="text-xs dark:text-gray-400">{suv.price}</span>
      <div>{suv.price}</div>
      <div>{suv.details}</div>
      <p className="py-4 lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non qui libero explicabo suscipit? Sapiente error eaque ex veniam dicta quas porro repudiandae illum earum corporis? Distinctio, veritatis vitae! Corrupti ab quis, accusamus eveniet aspernatur reiciendis repellendus maxime animi itaque, illo, quia nisi maiores autem quo nam numquam rem! Iste, maiores.</p>
      <Link to=".." relative="path" className="bg-sky-800 text-white px-6 py-2 mt-6">Back to All SUVs</Link>
    </div>
    </div>
    </div>
  );
};

export default SUVDetails;
