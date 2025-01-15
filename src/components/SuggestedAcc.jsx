import React from "react";

export default function SuggestedAcc() {
  const [story, setStory] = React.useState([
    { id: 1, name: "Harshil" },
    { id: 2, name: "Nothing" },
    { id: 3, name: "Samsung" },
    { id: 4, name: "Instagram" },
    { id: 5, name: "Food" },
    { id: 6, name: "Technology" },
    { id: 7, name: "Story" },
    { id: 8, name: "Book" },
  ]);
  return (
    <div className="mt-[1.9rem] 2xl:ml-[8rem] lg:ml-[4rem] max-[1200px]:hidden">
      <div className="flex items-center justify-between w-[19rem] mb-8">
        <div className="flex items-center">
          <div className="h-[54px] w-[54px] mr-3 rounded-full bg-slate-200 border-[2px] border-black"></div>
          <div>
            <div className="text-sm">__Harshil__</div>
            <div className="text-sm">__Harshil__</div>
          </div>
        </div>
        <div className="text-[#0095f6] text-[12px]">Switch</div>
      </div>
      <div className="flex justify-between w-[19rem] items-center text-[14px]">
        <div className="text-[#6b6b6b] text-[0.9rem]">Suggested for you</div>
        <div className="text-[13px] font-bold">See All</div>
      </div>
    </div>
  );
}
