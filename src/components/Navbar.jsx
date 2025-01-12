import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Name, Search, Menu, Notifications, Create } from "../assets";

export default function Navbar() {
  const [navLinkOne, _] = React.useState([
    { img: Home, text: "Home" },
    { img: Search, text: "Search" },
    { img: Home, text: "Explore" },
    { img: Home, text: "Reels" },
    { img: Home, text: "Messages" },
    { img: Notifications, text: "Notifications" },
    { img: Create, text: "Create" },
    { img: Home, text: "Profile" },
  ]);
  const [navLinkTwo, __] = React.useState([
    { img: Home, text: "AI Studio" },
    { img: Home, text: "Threads" },
    { img: Menu, text: "More" },
  ]);
  return (
    <>
      <div className="border-r-[1px] h-[100dvh] flex flex-col gap-y-5 pt-10 px-3 pb-9 border-[#51515187] w-[21%] max-xl:w-20">
        <div className="mb-3 px-4">
          <img src={Name} alt="name" />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col">
            {navLinkOne.map((nav) => {
              return (
                <NavLink
                  key={nav.text}
                  className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg"
                >
                  <img src={nav.img} alt="img" className="p-4 inline" />
                  <span className="max-xl:hidden">{nav.text}</span>
                </NavLink>
              );
            })}
          </div>
          <div className="flex flex-col">
            {navLinkTwo.map((nav) => {
              return (
                <NavLink
                  key={nav.text}
                  className="hover:bg-[rgba(255,255,255,0.1)] rounded-md"
                >
                  <img src={nav.img} alt="img" className="p-4 inline" />
                  <span className="max-xl:hidden">{nav.text}</span>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
