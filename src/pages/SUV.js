import React, { useState } from "react";
import { data } from "../data/data";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";

const SUV = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex flex-col items-center pb-14">
        <h1 className="text-5xl font-semibold text-stone-200 p-10">Explore Our SUV Options</h1>
        <div className="flex justify-center  w-full flex-wrap gap-10 mx-20">
          {data &&
            data
              .filter((item) => {
                return searchTerm.toLowerCase() === ""
                  ? item
                  : item.title.toLowerCase().includes(searchTerm);
              })
              .map((item) => {
                return (
                  <div
                    key={item.id}
                    className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
                  >
                    <Link to={`/suv/${item.id}`}>
                      <img
                        src={item.image}
                        alt=""
                        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
                      />
                      <div className="flex flex-col justify-between p-6 space-y-8">
                        <div className="space-y-2">
                          <h2 className="text-3xl font-semibold tracki">
                            {item.title}
                          </h2>
                          <p className="dark:text-gray-100">{item.details}</p>
                        </div>
                        <button
                          type="button"
                          className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
                        >
                          Read more
                        </button>
                      </div>
                    </Link>
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default SUV;
