import React from "react";
import { Name, Search, Heart } from "../assets";
import { Posts, SuggestedAcc } from "../components";

export default function Home() {
  const [clicked, setClicked] = React.useState(false);
  const [story, _] = React.useState([
    { id: 1, name: "Developer" },
    { id: 2, name: "Nothing" },
    { id: 3, name: "Samsung" },
    { id: 4, name: "Instagram" },
    { id: 5, name: "Food" },
    { id: 6, name: "Technology" },
    { id: 7, name: "Story" },
    { id: 8, name: "Book" },
  ]);

  return (
    <>
      <div className="w-full flex flex-col">
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
        <div className="flex justify-center w-full overflow-hidden">
          <div className="flex flex-col">
            <div className="flex gap-x-5 mb-6 mt-6 justify-center max-2xl:ml-[0rem]">
              {story.map((val) => (
                <div
                  className="flex flex-col items-center relative hover:cursor-pointer"
                  key={val.id}
                >
                  <div className="absolute h-[60px] w-[60px] -z-10 top-[-1px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500" />
                  <div
                    className="h-[58px] w-[58px] mb-1 rounded-full bg-slate-200 border-[2px] border-black"
                    key={val.id}
                  ></div>
                  <div className="text-sm">{val.name}</div>
                </div>
              ))}
            </div>
            <Posts />
          </div>
          <SuggestedAcc />
        </div>
      </div>
    </>
  );
}
