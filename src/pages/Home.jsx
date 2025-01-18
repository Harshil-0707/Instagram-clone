import React from "react";
import { Posts, SuggestedAcc } from "../components";

export default function Home() {
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
      <div className="flex justify-center w-full">
        <div className="flex flex-col">
          <div className="flex gap-x-5 mb-6 mt-6  justify-center 2xl:ml-[4rem] max-2xl:ml-[0rem]">
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
    </>
  );
}
