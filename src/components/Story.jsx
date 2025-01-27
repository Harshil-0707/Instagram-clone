import React from "react";
import {
  DeveloperPfp,
  Nothing,
  SamsungPfp,
  InstagramPfp,
  FoodPfp,
  TechnologyPfp,
  BookPfp,
  StoryPfp,
} from "../assets";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";

export default function Story() {
  const containerRef = React.useRef(null);
  const story = [
    { id: 1, name: "Developer", img: DeveloperPfp },
    { id: 2, name: "Nothing", img: Nothing },
    { id: 3, name: "Samsung", img: SamsungPfp },
    { id: 4, name: "Instagram", img: InstagramPfp },
    { id: 5, name: "Food", img: FoodPfp },
    { id: 6, name: "Technology", img: TechnologyPfp },
    { id: 7, name: "Story", img: StoryPfp },
    { id: 8, name: "Book", img: BookPfp },
  ];

  const handleScroll = (direction) => {
    if (containerRef.current) {
      const scrollAmount = 200;
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-6 mt-5">
      <div
        className="absolute z-[30] left-3 top-[26px] cursor-pointer hidden max-[663px]:block"
        onClick={() => handleScroll("left")}
      >
        <CircleChevronLeft className="bg-white rounded-full text-black" />
      </div>
      <div
        className="absolute z-[30] right-3 top-[26px] cursor-pointer hidden max-[663px]:block"
        onClick={() => handleScroll("right")}
      >
        <CircleChevronRight className="bg-white rounded-full text-black" />
      </div>
      <div
        ref={containerRef}
        className="flex gap-x-5 overflow-x-scroll scrollbar-hide px-2"
      >
        {story.map((val) => (
          <div
            className="relative h-full mt-2 flex flex-col items-center hover:cursor-pointer"
            key={val.id}
          >
            <div className="absolute h-[60px] w-[60px] -z-10 top-[-1px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500" />
            <div className="h-[58px] w-[58px] mb-1 rounded-full border-[2px] border-black overflow-hidden">
              <img src={val.img} alt="Pfp" className="" />
            </div>
            <div className="text-sm">{val.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
