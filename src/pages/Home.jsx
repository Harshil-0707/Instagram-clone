import React from "react";

export default function Home() {
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
    <>
      <div className="flex justify-center w-full">
        <div className="flex flex-col">
          <div className="flex gap-x-5 mb-6 mt-6  justify-center 2xl:ml-[4rem] max-2xl:ml-[0rem]">
            {story.map((val) => (
              <div className="flex flex-col items-center relative" key={val.id}>
                <div className="absolute h-[60px] w-[60px] -z-10 top-[-1px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>
                <div
                  className="h-[58px] w-[58px] mb-1 rounded-full bg-slate-200 border-[2px] border-black"
                  key={val.id}
                ></div>
                <div className="text-sm">{val.name}</div>
              </div>
            ))}
          </div>
          {/* {post.map((val) => {
              return <div key={val.id}>{val.name}</div>;
            })} */}
          <div className="w-full flex flex-col items-center">
            <div className="w-[min(470px,100vw)]">
              <div className="flex justify-between items-center">
                <div className="flex items-center ml-5">
                  <div className="h-[38px] relative w-[38px] mb-1 rounded-full bg-slate-200 border-[2px] border-black">
                    <div className="absolute h-[41px] w-[41px] -z-10 top-[-3px] left-[-3px] rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>
                  </div>
                  <div className="ml-2">
                    <div className="text-sm">Harshil</div>
                    <div className="text-sm">Original audio</div>
                  </div>
                </div>
                <div className="font-bold">...</div>
              </div>
              <div className="h-[10rem] border-1 w-full"></div>
              <div></div>
            </div>
          </div>
        </div>
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
            <div className="text-[#6b6b6b] text-[0.9rem]">
              Suggested for you
            </div>
            <div className="text-[13px] font-bold">See All</div>
          </div>
        </div>
      </div>
    </>
  );
}
