import React from "react";
import { Heart, Comment, Share, Save, EndOfPost } from "../assets";

export default function Posts() {
  const [post, setPost] = React.useState([
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
    <div className="w-full flex flex-col items-center gap-y-10">
      {post.map((acc) => {
        return (
          <div
            key={acc.id}
            className="w-[min(470px,100vw)] pb-6 border-b-[1px] ml-5 border-[#2d2d2d]"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className="h-[38px] relative w-[38px] mb-1 rounded-full bg-slate-200 border-[2px] border-black">
                  <div className="absolute h-[41px] w-[41px] -z-10 top-[-3px] left-[-3px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>
                </div>
                <div className="ml-3">
                  <div className="text-sm font-semibold">{acc.name}</div>
                  <div className="text-xs">Original audio</div>
                </div>
              </div>
              <div className="font-bold tracking-widest">...</div>
            </div>
            <div className="h-[40rem] border-[1px] border-[#2d2d2d] rounded-[4px] mb-4"></div>
            <div className="flex justify-between">
              <div className="flex gap-x-[1.2rem]">
                <img src={Heart} alt="like" />
                <img src={Comment} alt="comment" />
                <img src={Share} alt="Share" />
              </div>
              <div>
                <img src={Save} alt="Save" />
              </div>
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
