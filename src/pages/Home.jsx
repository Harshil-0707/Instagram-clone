import React from "react";
import Story from "../components/Story";
import { Posts, SuggestedAcc, HomeHeaderNavbar } from "../components";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col">
        <HomeHeaderNavbar />
        <div className="flex justify-center w-full relative">
          <div className="overflow-hidden flex flex-col">
            <Story />
            <Posts />
          </div>
          <SuggestedAcc />
        </div>
      </div>
    </>
  );
}
