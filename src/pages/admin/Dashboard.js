import React from "react";
import { Outlet} from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-[70vh]">
      <h1> Dashboard</h1>
      <Outlet />
    </div>
  );
};

export default Dashboard;
