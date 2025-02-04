import React from "react";
import { DeveloperPfp } from "../assets";
import { Plus, Settings } from "lucide-react";

export default function ProfileTopSection() {
  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}

function Desktop() {
  return (
    <div className="max-[768px]:hidden pt-8 flex flex-col items-center gap-y-14 mt-3">
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
          <div className="flex w-full items-center gap-x-3">
            <div className="text-xl mr-2">Developer</div>
            <button className="focus:outline-none h-[1.8rem] bg-[#3f3f3f] w-[7rem] text-sm font-semibold px-3 rounded-lg">
              Edit profile
            </button>
            <button className="focus:outline-none h-[1.8rem] bg-[#3f3f3f] w-[7rem] text-sm font-semibold rounded-lg">
              View archive
            </button>
            <div>
              <Settings />
            </div>
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
      <div className="relative ml-4 max-w-[39rem] w-full min-w-[50%]">
        <div className="flex justify-center items-center h-[83px] w-[83px] rounded-full bg-[#181818] border-[2px] border-black">
          <Plus className="h-[3rem] w-[3rem] text-[#6f6f6f]" />
        </div>
        <div className="absolute top-[-2px] left-[-2px] -z-30 h-[87px] w-[87px] bg-[#5f5f5f8e] rounded-full" />
        <div className="text-sm ml-6 mt-2">New</div>
      </div>
      <div className="w-full border-b-[1px] border-[#202020]" />
    </div>
  );
}

function Mobile() {
  return (
    <div className="max-[768px]:flex pt-8 hidden flex-col gap-y-4 mt-[5rem]">
      <div className="flex flex-col gap-y-5">
        <div className="flex ml-[0.6rem]">
          <div>
            <div className="relative mt-5 w-[6rem]">
              <img
                src={DeveloperPfp}
                alt="img"
                className="h-[5rem] w-[5rem] rounded-full"
              />
              <div className="absolute text-[12px] text-[#c7c7c7] rounded-xl py-3 px-2 top-[-35px] left-[10px] bg-[rgb(74,74,74)]">
                Note...
              </div>
              <div className="absolute top-[2px] left-[18px] h-3 w-3 rounded-full bg-[rgb(74,74,74)]" />
              <div className="absolute rounded-full bg-[rgb(75,75,75)] left-[23px] h-2 w-2 top-[10px]" />
            </div>
          </div>
          <div className="flex flex-col w-full gap-y-5">
            <div className="flex w-full gap-y-3 flex-col">
              <div className="flex">
                <div className="text-xl mr-2">Developer</div>
                <Settings />
              </div>
              <div className="flex gap-x-2 mr-3">
                <button className="focus:outline-none bg-[#3f3f3f] h-full max-w-[7rem] text-[0.88rem] font-semibold px-3 rounded-lg">
                  Edit profile
                </button>
                <button className="focus:outline-none h-full bg-[#3f3f3f] max-w-[7rem] text-[0.88rem] font-semibold px-3 rounded-lg">
                  View archive
                </button>
              </div>
            </div>
            {/* <div className="flex gap-x-8">
            <div className="text-[16px]">
              <span className="text-white font-bold">0</span> posts
            </div>
            <div className="text-[16px]">
              <span className="text-white font-bold">3k</span> followers
            </div>
            <div className="text-[16px]">
              <span className="text-white font-bold">120</span> following
            </div>
          </div> */}
          </div>
        </div>
        <div className="ml-4">
          <div className="text-sm">__Developer__</div>
          <div className="text-sm">🇮🇳</div>
          <div className="text-sm">I am a frontend Developer.</div>
        </div>
      </div>
      <div className="relative ml-2">
        <div className="flex justify-center items-center h-[60px] w-[60px] rounded-full bg-[#181818] border-[2px] border-black">
          <Plus className="h-[3rem] w-[2rem] text-[#6f6f6f]" />
        </div>
        <div className="absolute top-[-2px] left-[-2px] -z-30 h-[64px] w-[64px] bg-[#5f5f5f8e] rounded-full" />
        <div className="text-xs text-[#d6d6d6] ml-3 mt-2">New</div>
      </div>
      <div className="w-full border-b-[1px] border-[#414141]" />
    </div>
  );
}
