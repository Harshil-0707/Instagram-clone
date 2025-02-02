import React from "react";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="flex relative">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
