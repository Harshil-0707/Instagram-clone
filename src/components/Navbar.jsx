import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Name, Search, Menu, Notifications, Create } from "../assets";

export default function Navbar() {
  return (
    <>
      <div className="border-r-[1px] h-[100dvh] flex flex-col gap-y-5 pt-10 px-3 pb-9 border-[#51515187] w-[21%]">
        <div className="mb-3 px-4">
          <img src={Name} alt="name" />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col">
            <NavLink
              to={"/"}
              className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg font-bold flex items-center"
            >
              <img src={Home} alt="img" className="p-4" />
              Home
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg">
              <img src={Search} alt="img" className="p-4 inline" />
              Search
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg">
              <img src={Search} alt="img" className="p-4 inline" />
              Explore
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg">
              <img src={Search} alt="img" className="p-4 inline" />
              Reels
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg">
              <img src={Search} alt="img" className="p-4 inline" />
              Messages
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg">
              <img src={Notifications} alt="img" className="p-4 inline" />
              Notifications
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg">
              <img src={Create} alt="img" className="p-4 inline" />
              Create
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg">
              <img src={Search} alt="img" className="p-4 inline" />
              Profile
            </NavLink>
          </div>
          <div className="flex flex-col">
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-md">
              <img src={Search} alt="img" className="p-4 inline" />
              AI Studio
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-md">
              <img src={Search} alt="img" className="p-4 inline" />
              Threads
            </NavLink>
            <NavLink className="hover:bg-[rgba(255,255,255,0.1)] rounded-md">
              <img src={Menu} alt="img" className="p-4 inline" />
              More
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
