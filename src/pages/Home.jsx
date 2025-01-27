import React from "react";
import Story from "../components/Story";
import { Posts, SuggestedAcc } from "../components";
import HeaderNavbar from "../components/HeaderNavbar";

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col">
        <HeaderNavbar />
        <div className="flex justify-center w-full relative">
          <div className="overflow-hidden pt-6 flex flex-col">
            <Story />
            <Posts />
          </div>
          <SuggestedAcc />
        </div>
      </div>
    </>
  );
}
