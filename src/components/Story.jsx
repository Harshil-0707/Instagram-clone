import React from "react";
import { CircleChevronRight, CircleChevronLeft } from "lucide-react";

export default function Story() {
  const containerRef = React.useRef(null);

  const story = [
    { id: 1, name: "Developer" },
    { id: 2, name: "Nothing" },
    { id: 3, name: "Samsung" },
    { id: 4, name: "Instagram" },
    { id: 5, name: "Food" },
    { id: 6, name: "Technology" },
    { id: 7, name: "Story" },
    { id: 8, name: "Book" },
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
    <div className="relative mb-6">
      <div
        className="absolute z-[30] left-3 top-[18px] cursor-pointer hidden max-[663px]:block"
        onClick={() => handleScroll("left")}
      >
        <CircleChevronLeft className="bg-white rounded-full text-black" />
      </div>
      <div
        className="absolute z-[30] right-3 top-[18px] cursor-pointer hidden max-[663px]:block"
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
            className="relative flex flex-col items-center hover:cursor-pointer"
            key={val.id}
          >
            <div className="absolute h-[60px] w-[60px] -z-10 top-[-1px] rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-orange-500" />
            <div className="h-[58px] w-[58px] mb-1 rounded-full bg-slate-200 border-[2px] border-black"></div>
            <div className="text-sm">{val.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
