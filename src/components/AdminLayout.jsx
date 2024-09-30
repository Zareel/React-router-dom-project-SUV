import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="bg-stone-400 text-2xl">
      <ul className="text-xl font-bold flex gap-10 px-36 py-3">
        <NavLink
          to="."
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-stone-900"
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          className={({ isActive }) =>
            isActive ? "text-yellow-800 underline" : "text-stone-900"
          }
        >
          Income
        </NavLink>
        <NavLink
          to="suv"
          className={({ isActive }) =>
            isActive ? "text-yellow-800 underline" : "text-stone-900"
          }
        >
          SUV
        </NavLink>
        <NavLink
          to="review"
          className={({ isActive }) =>
            isActive ? "text-yellow-800 underline" : "text-stone-900"
          }
        >
          Reviews
        </NavLink>
      </ul>
      <Outlet />
    </div>
  );
};

export default AdminLayout;
