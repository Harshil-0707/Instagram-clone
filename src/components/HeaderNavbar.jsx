import React from "react";
import { Name, Search, Heart } from "../assets";

export default function HeaderNavbar() {
  return (
    <div className="md:hidden sticky z-[60] top-0 h-[60px] px-5 bg-black border-b border-[#51515187] w-full overflow-hidden flex items-center">
      <div className="mt-1 max-[368px]:hidden">
        <img src={Name} alt="instagram" className="h-[29px]" />
      </div>
      <div className="relative z-[90] ml-auto flex items-center justify-evenly gap-x-3 h-[70%] w-[45%] max-[368px]:w-full min-w-[14rem]">
        <input
          type="text"
          className="h-[90%] relative focus:z-20 focus:placeholder:text-[rgb(168,168,168)] w-full rounded-lg bg-[rgb(54,54,54)] placeholder:text-[rgb(54,54,54)] pl-5 "
          placeholder="Search"
        />
        <span className="absolute z-10 left-[45px] text-[rgb(168,168,168)]">
          Search
        </span>
        <img
          src={Search}
          alt="Search"
          className="absolute top-[13px] h-[0.9rem] left-[22px]"
        />
        <img src={Heart} alt="like" />
      </div>
    </div>
  );
}
