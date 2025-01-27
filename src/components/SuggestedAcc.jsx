import React from "react";
import {
  BookPfp,
  DeveloperPfp,
  FoodPfp,
  InstagramPfp,
  Nothing,
  SamsungPfp,
} from "../assets";

export default function SuggestedAcc() {
  const suggestedAccs = [
    {
      name: "Nothing OS",
      username: "Followed by Technology + 3 more",
      pfp: Nothing,
    },
    {
      name: "Samsung UI",
      username: "Followed by Teach + 2 more",
      pfp: SamsungPfp,
    },
    {
      name: "Instagram Posts",
      username: "Followed by Book + 5 more",
      pfp: InstagramPfp,
    },
    {
      name: "Food Blogs",
      username: "Followed by Hunger + 2 more",
      pfp: FoodPfp,
    },
    {
      name: "Book Shows",
      username: "Followed by knowledge + 2 more",
      pfp: BookPfp,
    },
  ];
  return (
    <div className="mt-[1.9rem] 2xl:ml-[8rem] lg:ml-[4rem] max-[1200px]:hidden">
      <div className="flex items-center justify-between w-[19rem] mb-4">
        <div className="flex items-center">
          <div className="h-[53px] w-[53px] mr-3 rounded-full overflow-hidden border-[2px] border-black">
            <img src={DeveloperPfp} alt="pfp" className="w-full" />
          </div>
          <div className="hover:cursor-pointer">
            <div className="text-sm font-bold">Developer</div>
            <div className="text-[13px] text-[rgb(168,168,168)]">
              __Developer__
            </div>
          </div>
        </div>
        <div className="text-[#0095f6] text-[12px] font-bold hover:cursor-pointer">
          Switch
        </div>
      </div>
      <div className="flex justify-between w-[19rem] items-center text-[14px] mb-3">
        <div className="text-[rgb(168,168,168)] text-[0.85rem] font-bold">
          Suggested for you
        </div>
        <div className="text-[11px] font-bold hover:cursor-pointer">
          See All
        </div>
      </div>
      {suggestedAccs.map((acc) => {
        return (
          <div
            key={acc.name}
            className="flex items-center justify-between w-[19rem] mb-3"
          >
            <div className="flex items-center">
              <div className="h-[53px] w-[53px] mr-3 rounded-full overflow-hidden border-[2px] border-black">
                <img src={acc.pfp} alt="pfp" className="w-full" />
              </div>
              <div className="hover:cursor-pointer">
                <div className="text-sm font-bold">{acc.name}</div>
                <div className="text-[12px] text-[rgb(168,168,168)]">
                  {acc.username}
                </div>
              </div>
            </div>
            <div className="text-[#0095f6] text-[12px] font-bold hover:cursor-pointer">
              Follow
            </div>
          </div>
        );
      })}
    </div>
  );
}
