import React from "react";
import { Camera, ProfilePosts, ProfileSaved, ProfileTagged } from "../assets";
import { Link } from "react-router-dom";

export default function ProfileBottomSection() {
  const [activeTab, setActiveTab] = React.useState("POSTS");
  const tabs = [
    { label: "POSTS", icon: ProfilePosts },
    { label: "SAVED", icon: ProfileSaved },
    { label: "TAGGED", icon: ProfileTagged },
  ];
  return (
    <>
      <div className="max-md:w-full flex flex-col items-center max-[735px]:items-start text-center">
        <div className="flex max-[735px] max-[735px]:border-b-[1px] border-[#414141] justify-center w-[30%] max-[735px]:w-full text-[14px] font-bold tracking-wide">
          {tabs.map((tab) => (
            <div
              key={tab.label}
              className="w-full relative flex justify-center"
            >
              <div
                onClick={() => setActiveTab(tab.label)}
                className={`w-[4rem] mx-6 max-[735px]:mx-0 focus:outline-none flex justify-center gap-2 py-4 relative ${
                  activeTab === tab.label ? "text-white" : "text-neutral-500"
                }`}
              >
                <img
                  src={tab.icon}
                  alt="img"
                  className="w-[16px] max-[375px]:w-[40%]"
                />
                <div className="text-xs max-[375px]:hidden font-medium tracking-wider">
                  {tab.label}
                </div>
              </div>
              {activeTab === tab.label && (
                <div className="absolute top-0 w-full h-[1px] bg-white" />
              )}
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col items-center">
          <div className="flex flex-col items-center mt-[3.5rem] mb-[1.5rem]">
            <img src={Camera} alt="camera" />
          </div>
          <div className="font-bold text-[2rem]">Share Photos</div>
          <div className="text-[0.80rem] max-w-[22rem] my-[1rem]">
            When you share photos, they will appear on your profile.
          </div>
          <Link
            to="/profile"
            className="focus:outline-none text-sm text-blue-500 font-bold"
          >
            Share your first photo
          </Link>
        </div>
      </div>
    </>
  );
}
