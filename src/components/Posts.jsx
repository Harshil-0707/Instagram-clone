import React from "react";
import {
  Save,
  Food,
  Book,
  Heart,
  Share,
  Comment,
  Nothing,
  Samsung,
  Instagram,
  Developer,
  EndOfPost,
  Technology,
} from "../assets";

export default function Posts() {
  const post = [
    { id: 1, name: "Developer", img: Developer },
    { id: 2, name: "Nothing", img: Nothing },
    { id: 3, name: "Samsung", img: Samsung },
    { id: 4, name: "Instagram", img: Instagram },
    { id: 5, name: "Food", img: Food },
    { id: 6, name: "Technology", img: Technology },
    { id: 7, name: "Book", img: Book },
  ];
  return (
    <div className="w-full flex flex-col items-center gap-y-10">
      {post.map((acc) => {
        return (
          <div
            key={acc.id}
            className="w-[min(470px,100vw)] pb-4 border-b-[1px] border-[#2d2d2d] hover:cursor-pointer"
          >
            <div className="flex justify-between items-center mb-2 max-[488px]:mx-3">
              <div className="flex items-center">
                <div className="h-[38px] relative w-[38px] mb-1 rounded-full bg-slate-200 border-[2px] border-black">
                  <div className="absolute h-[41px] w-[41px] -z-10 top-[-3px] left-[-3px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500" />
                </div>
                <div className="ml-3">
                  <div className="text-sm font-semibold">{acc.name}</div>
                  <div className="text-xs">Original audio</div>
                </div>
              </div>
              <div className="font-bold tracking-widest">...</div>
            </div>
            <div className="border-[1px] border-[#2d2d2d] rounded-[4px] mb-4">
              <img src={acc.img} alt="img" className="w-full" />
            </div>
            <div className="flex justify-between mb-8 max-[488px]:mx-3">
              <div className="flex gap-x-[1.2rem]">
                <img src={Heart} alt="like" />
                <img src={Comment} alt="comment" />
                <img src={Share} alt="Share" />
              </div>
              <div>
                <img src={Save} alt="Save" />
              </div>
            </div>
            <div className="flex justify-between items-center max-[488px]:mx-3">
              <div className="text-[13px] text-[rgb(168,168,168)]">
                Add a comment...
              </div>
              <div className="text-xl text-[rgb(168,168,168)]">☺</div>
            </div>
          </div>
        );
      })}
      <div className="w-[min(470px,100vw)] flex flex-col items-center my-4 pb-12 border-[#2d2d2d] border-b-[1px]">
        <img src={EndOfPost} alt="img" className="h-[7rem] w-[7rem] mb-2" />
        <div className="text-xl">You're all caught up</div>
        <div className="mb-3 text-sm text-[rgb(168,168,168)]">
          You've seen all new posts from the past 3 days.
        </div>
        <div className="text-sm font-semibold text-[rgb(0,149,246)]">
          View older posts
        </div>
      </div>
    </div>
  );
}
