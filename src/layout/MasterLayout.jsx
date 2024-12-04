import React from "react";
import { Outlet } from "react-router";

const MasterLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

export default MasterLayout;
