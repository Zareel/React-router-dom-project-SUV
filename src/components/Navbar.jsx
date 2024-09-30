import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-stone-500 text-stone-900 h-20 flex justify-center px-36  ">
      <div className="container flex justify-between items-center h-full font-semibold">
        <NavLink to="/" className="text-5xl text-stone-900 lg:5xl font-bold">
          OnRoad
        </NavLink>
        <ul className="flex gap-6 text-xl">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-500 underline" : "text-stone-900"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) =>
              isActive ? "text-yellow-500 underline" : "text-stone-900"
            }
          >
            Admin
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-500 underline" : "text-stone-900"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-yellow-500 underline" : "text-stone-900"
            }
            to="/suv"
          >
            SUV
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
