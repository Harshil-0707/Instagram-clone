import React from "react";

export default function SuggestedAcc() {
  const [suggestedAccs, _] = React.useState([
    { name: "Nothing", username: "Followed by Harshil + 3 more" },
    { name: "Samsung", username: "Followed by Teach + 2 more" },
    { name: "Instagram", username: "Followed by Book + 5 more" },
    { name: "Food", username: "Followed by Hunger + 2 more" },
    { name: "Book", username: "Followed by knowledge + 2 more" },
  ]);
  return (
    <div className="mt-[1.9rem] 2xl:ml-[8rem] lg:ml-[4rem] max-[1200px]:hidden">
      <div className="flex items-center justify-between w-[19rem] mb-4">
        <div className="flex items-center">
          <div className="h-[53px] w-[53px] mr-3 rounded-full bg-slate-200 border-[2px] border-black"></div>
          <div>
            <div className="text-sm font-bold">__Harshil__</div>
            <div className="text-[13px] text-[rgb(168,168,168)]">
              __Harshil__
            </div>
          </div>
        </div>
        <div className="text-[#0095f6] text-[12px] font-bold">Switch</div>
      </div>
      <div className="flex justify-between w-[19rem] items-center text-[14px] mb-3">
        <div className="text-[rgb(168,168,168)] text-[0.85rem] font-bold">
          Suggested for you
        </div>
        <div className="text-[11px] font-bold">See All</div>
      </div>
      {suggestedAccs.map((acc) => {
        return (
          <div
            key={acc.name}
            className="flex items-center justify-between w-[19rem] mb-3"
          >
            <div className="flex items-center">
              <div className="h-[53px] w-[53px] mr-3 rounded-full bg-slate-200 border-[2px] border-black"></div>
              <div>
                <div className="text-sm font-bold">{acc.name}</div>
                <div className="text-[12px] text-[rgb(168,168,168)]">
                  {acc.username}
                </div>
              </div>
            </div>
            <div className="text-[#0095f6] text-[12px] font-bold">Follow</div>
          </div>
        );
      })}
    </div>
  );
}
