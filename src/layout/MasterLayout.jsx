import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";

const MasterLayout = () => {
  return (
    <>
      <section className="flex gap-[24px]">
        <Navbar />
        <Outlet />
      </section>
    </>
  );
};

export default MasterLayout;
