import React from "react";
import { Outlet } from "react-router-dom";

const DonateCamp = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DonateCamp;
