import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { data } from "../../data/data";
import { NavLink } from "react-router-dom";

const AdminSUVDetails = () => {
  const { id } = useParams();
  const suv = data.find((item) => Number(item.id) === Number(id));
  console.log(suv);

  return (
    <div className="w-full min-h-[70vh] py-10 bg-stone-900">
      <div className="px-36 text-stow text-stone-300">
        <div className="flex items-center gap-10">
          <img src={suv.image} alt="img" className="w-68" />
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-3xl">{suv.title}</h1>
            <p className="text-lg">{suv.rent}</p>
            <Link
              to=".."
              relative="path"
              className="bg-stone-600 text-white px-4 py-1 text-lg rounded-md"
            >
              Back to all SUVs
            </Link>
          </div>
        </div>

        <h1 className="font-semibold pt-6 pb-2">{suv.title}</h1>
        <nav className="h-12 w-[300px] border-2 border-stone-700  text-lg text-yellow-500">
          <ul className="flex gap-12 justify-center h-full items-center">
            <NavLink
              to="."
              className={({ isActive }) =>
                isActive
                  ? "underline text-red-500 cursor-pointer"
                  : "text-yellow-500 cursor-pointer"
              }
            >
              Details
            </NavLink>
            <NavLink
              to="pricing"
              className={({ isActive }) =>
                isActive
                  ? "underline text-red-500 cursor-pointer"
                  : "text-yellow-500 cursor-pointer"
              }
            >
              Pricing
            </NavLink>
            <NavLink
              to="photos"
              className={({ isActive }) =>
                isActive
                  ? "underline text-red-500 cursor-pointer"
                  : "text-yellow-500 cursor-pointer"
              }
            >
              Photos
            </NavLink>
          </ul>
        </nav>

        <Outlet />
      </div>
    </div>
  );
};

export default AdminSUVDetails;
