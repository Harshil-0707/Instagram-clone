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
  { img: Home, text: "Home", NavLink: "/" },
  { img: Search, text: "Search", NavLink: "/" },
  { img: Explore, text: "Explore", NavLink: "/" },
  { img: Reels, text: "Reels", NavLink: "/" },
  { img: Message, text: "Messages", NavLink: "/" },
  { img: Heart, text: "Notifications", NavLink: "/" },
  { img: Create, text: "Create", NavLink: "/" },
  { img: DeveloperPfp, text: "Profile", NavLink: "/profile" },
];

const navLinkTwo = [
  { img: Home, text: "AI Studio", NavLink: "/" },
  { img: Threads, text: "Threads", NavLink: "/" },
  { img: Menu, text: "More", NavLink: "/" },
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
    <div className="sticky top-0 border-r-[1px] overflow-y-hidden h-[100vh] flex md:flex-col gap-y-5 md:pt-10 px-3 md:pb-9 border-[#51515187] w-[17.6%] max-xl:w-20 max-[840px]:hidden max-md:w-full max-xl:items-center max-xl:justify-evenly">
      <div className="mb-1">
        <img src={Name} alt="icon" className="px-4 block max-xl:hidden" />
        <img
          src={InstagramIcon}
          alt="icon"
          className="hidden !w-[2rem] !h-[1.5rem] max-xl:block"
        />
      </div>
      <div className="h-full flex flex-col justify-between  max-md:flex-row">
        <div className="flex flex-col max-md:flex-row">
          {navLinkOne.map((nav, index) => {
            return (
              <NavLink
                key={nav.text}
                to={nav.NavLink}
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
    { img: Home, text: "Home", NavLink: "/" },
    { img: Explore, text: "Explore", NavLink: "/" },
    { img: Reels, text: "Reels", NavLink: "/" },
    { img: Create, text: "Create", NavLink: "/" },
    { img: Message, text: "Messages", NavLink: "/" },
    { img: DeveloperPfp, text: "Profile", NavLink: "/profile" },
  ];
  return (
    <>
      <div className="h-30 fixed z-[100] hidden bottom-0 gap-y-5 bg-black px-3 border-t border-[#51515187] justify-evenly w-full max-[840px]:flex">
        {navLink.map((nav, index) => {
          return (
            <NavLink
              key={nav.text}
              to={nav.NavLink}
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
