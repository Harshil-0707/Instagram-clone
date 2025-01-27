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
  Threads,
  InstagramIcon,
  DeveloperPfp,
} from "../assets";

const navLinkOne = [
  { img: Home, text: "Home" },
  { img: Search, text: "Search" },
  { img: Explore, text: "Explore" },
  { img: Reels, text: "Reels" },
  { img: Message, text: "Messages" },
  { img: Heart, text: "Notifications" },
  { img: Create, text: "Create" },
  { img: DeveloperPfp, text: "Profile" },
];

const navLinkTwo = [
  { img: Home, text: "AI Studio" },
  { img: Threads, text: "Threads" },
  { img: Menu, text: "More" },
];

export default function Navbar() {
  return (
    <>
      <DesktopNavbar />
      <MobileNavbar />
    </>
  );
}

function DesktopNavbar() {
  return (
    <div className="md:sticky md:top-0 md:border-r-[1px] md:h-[100vh] max-md:h-30 flex flex-row fixed bottom-0 md:flex-col gap-y-5 md:pt-10 px-3 md:pb-9 border-[#51515187] w-[21%] max-xl:w-20 max-md:hidden max-md:w-full max-xl:items-center max-xl:justify-evenly">
      <div className="mb-2 px-4">
        <img src={Name} alt="icon" className="block max-xl:hidden" />
        <img src={InstagramIcon} alt="icon" className="hidden max-xl:block" />
      </div>
      <div className="h-full flex flex-col justify-between  max-md:flex-row">
        <div className="flex flex-col max-md:flex-row">
          {navLinkOne.map((nav, index) => {
            return (
              <NavLink
                key={nav.text}
                className="hover:bg-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center py-4 max-xl:flex-col"
              >
                <img
                  src={nav.img}
                  alt="img"
                  className={`pl-3 pr-4 max-w-[54px] max-xl:px-2 ${
                    index === 7
                      ? "max-w-[54px] mx-3 !px-0 max-h-[24px] rounded-full"
                      : ""
                  }`}
                />
                <span
                  className={`max-xl:hidden ${
                    index === 0 ? "font-bold" : "font-normal"
                  }`}
                >
                  {nav.text}
                </span>
              </NavLink>
            );
          })}
        </div>
        <div className="flex flex-col max-md:flex-row max-md:items-center">
          {navLinkTwo.map((nav) => {
            return (
              <NavLink
                key={nav.text}
                className="hover:bg-[rgba(255,255,255,0.1)] rounded-[10px] flex items-center py-4 max-xl:flex-col"
              >
                <img
                  src={nav.img}
                  alt="img"
                  className="pl-3 pr-4 max-w-[54px] max-xl:px-2"
                />
                <span className="max-xl:hidden">{nav.text}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MobileNavbar() {
  const navLink = [
    { img: Home, text: "Home" },
    { img: Explore, text: "Explore" },
    { img: Reels, text: "Reels" },
    { img: Create, text: "Create" },
    { img: Message, text: "Messages" },
    { img: DeveloperPfp, text: "Profile" },
  ];
  return (
    <>
      <div className="h-30 fixed z-[100] bottom-0 gap-y-5 bg-black px-3 border-t border-[#51515187] flex justify-evenly w-full md:hidden">
        {navLink.map((nav, index) => {
          return (
            <NavLink
              key={nav.text}
              className="hover:bg-[rgba(255,255,255,0.1)] flex items-center py-4 min-w-[20px]"
            >
              <img
                src={nav.img}
                alt="img"
                className={`block max-w-[54px] pl-3 pr-4 ${
                  index === 5 ? "!px-0 rounded-full h-[28px]" : ""
                }`}
              />
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
