import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  Name,
  Search,
  Menu,
  Heart,
  Create,
  Message,
  Reels,
  Explore,
} from "../assets";

export default function Navbar() {
  const [navLinkOne, _] = React.useState([
    { img: Home, text: "Home" },
    { img: Search, text: "Search" },
    { img: Explore, text: "Explore" },
    { img: Reels, text: "Reels" },
    { img: Message, text: "Messages" },
    { img: Heart, text: "Notifications" },
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
      <div className="sticky top-0 border-r-[1px] max-[783px]:border-0 h-[100vh] flex flex-col gap-y-5 pt-10 px-3 pb-9 border-[#51515187] w-[21%] max-xl:w-20 max-[783px]:fixed  max-[783px]:bottom-0 max-[783px]:flex-row">
        <div className="mb-2 px-4 max-[783px]:hidden">
          <img src={Name} alt="name w-20 h-20" />
        </div>
        <div className="h-full flex flex-col justify-between">
          <div className="flex flex-col max-[783px]:hidden">
            {navLinkOne.map((nav) => {
              return (
                <NavLink
                  key={nav.text}
                  className="hover:bg-[rgba(255,255,255,0.1)] rounded-lg flex items-center py-4 max-xl:flex-col"
                >
                  <img
                    src={nav.img}
                    alt="img"
                    className="pl-3 pr-4 max-xl:px-2"
                  />
                  <span className="max-xl:hidden">{nav.text}</span>
                </NavLink>
              );
            })}
          </div>
          <div className="flex flex-col max-[783px]:hidden">
            {navLinkTwo.map((nav) => {
              return (
                <NavLink
                  key={nav.text}
                  className="hover:bg-[rgba(255,255,255,0.1)] rounded-md flex items-center py-4 max-xl:flex-col"
                >
                  <img
                    src={nav.img}
                    alt="img"
                    className="pl-3 pr-4 max-xl:px-2"
                  />
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
