import React from "react";
import { data } from "../../data/data";
import { Link } from "react-router-dom";

const SUV = () => {
  return (
    <div className="w-full min-h-[80vh] bg-stone-950 text-stone-300 px-36">
      <h1 className="text-5xl font-semibold text-center pt-2">
        Your Listed SUVs
      </h1>
      {data &&
        data.map((item) => {
          return (
            <div key={item.id}>
              <Link to={`/admin/suv/${item.id}`}>
                <div className="flex gap-10 items-center">
                  <img src={item.image} alt="img" className="w-56 py-10" />
                  <div className="flex flex-col gap-2">
                    <h1 className="text-2xl hover:text-white cursor pointer font-semibold">
                      {item.title}
                    </h1>
                    <p>{item.rent}</p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};

export default SUV;
