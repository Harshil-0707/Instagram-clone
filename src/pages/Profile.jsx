import React from "react";
import {
  Camera,
  DeveloperPfp,
  ProfilePosts,
  ProfileSaved,
  ProfileTagged,
} from "../assets";
import { Link } from "react-router-dom";

export default function Profile() {
  const [activeTab, setActiveTab] = React.useState("POSTS");
  const tabs = [
    { label: "POSTS", icon: ProfilePosts },
    { label: "SAVED", icon: ProfileSaved },
    { label: "TAGGED", icon: ProfileTagged },
  ];
  return (
    <>
      <div className="text-white flex flex-col mx-[10%] w-[84dvw] max-xl:!w-[100dvw]">
        <div className="pt-8 flex flex-col items-center gap-y-14 mt-3">
          <div className="flex gap-x-20">
            <div className="w-[30%] flex justify-end">
              <div className="relative mt-4 w-[9rem]">
                <img
                  src={DeveloperPfp}
                  alt="img"
                  className="h-[9rem] w-[9rem] rounded-full"
                />
                <div className="absolute text-[12px] text-[#c7c7c7] rounded-xl py-3 px-2 top-[-30px] left-[35px] bg-[rgb(74,74,74)]">
                  Note...
                </div>
                <div className="absolute top-[7px] left-[45px] h-3 w-3 rounded-full bg-[rgb(74,74,74)]" />
                <div className="absolute rounded-full bg-[rgb(75,75,75)] left-[50px] h-2 w-2 top-[17px]" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5">
              <div className="flex w-full gap-x-3">
                <div className="text-xl mr-2">Developer</div>
                <button className="bg-[#3f3f3f] w-[7rem] text-sm font-semibold px-3 rounded-lg">
                  Edit profile
                </button>
                <button className="bg-[#3f3f3f] w-[7rem] text-sm font-semibold rounded-lg">
                  View archive
                </button>
                <div></div>
              </div>
              <div className="flex gap-x-8">
                <div className="text-[16px]">
                  <span className="text-white font-bold">0</span> posts
                </div>
                <div className="text-[16px]">
                  <span className="text-white font-bold">3k</span> followers
                </div>
                <div className="text-[16px]">
                  <span className="text-white font-bold">120</span> following
                </div>
              </div>
              <div>
                <div className="text-sm">__Developer__</div>
                <div className="text-sm">🇮🇳</div>
                <div className="text-sm">I am a frontend Developer.</div>
              </div>
            </div>
          </div>
          <div className="relative max-w-[40rem] w-full min-w-[50%]">
            <div className="h-[83px] w-[83px] rounded-full bg-[#181818] border-[2px] border-black"></div>
            <div className="absolute top-[-2px] left-[-2px] -z-30 h-[87px] w-[87px] bg-[#5f5f5f8e] rounded-full" />
            <div className="text-sm ml-6 mt-2">New</div>
          </div>
          <div className="min-w-[30rem] w-full max-w-[70%] mx-auto border-b-[1px] border-[#202020]" />
        </div>
        <div className="max-md:w-full flex flex-col items-center">
          <div className="flex justify-center w-[30%] text-[14px] font-bold tracking-wide">
            {tabs.map((tab) => (
              <div key={tab.label} className="w-full flex mx-[2rem]">
                <button
                  onClick={() => setActiveTab(tab.label)}
                  className={`w-[3rem] flex justify-center gap-2 py-4 relative ${
                    activeTab === tab.label ? "text-white" : "text-neutral-500"
                  }`}
                >
                  <img src={tab.icon} alt="img" className="w-[16px]" />
                  <span className="text-xs font-medium tracking-wider">
                    {tab.label}
                  </span>
                  {activeTab === tab.label && (
                    <div className="absolute top-0 left-[-8px] w-[140%] h-[1px] bg-white" />
                  )}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-[3.5rem] mb-[1.5rem]">
            <img src={Camera} alt="camera" />
          </div>
          <div className="font-bold text-[2rem]">Share Photos</div>
          <div className="text-sm my-[1rem]">
            When you share photos, they will appear on your profile.
          </div>
          <Link to="/profile" className="text-sm text-blue-500 font-bold">
            Share your first photo
          </Link>
        </div>
      </div>
    </>
  );
}
