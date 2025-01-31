import React from "react";
import { DeveloperPfp } from "../assets";

export default function Profile() {
  return (
    <>
      <div className="text-white h-[100dvh] w-[100dvw] flex flex-col items-center p-4">
        <div className="h-full w-full pt-8 flex flex-col items-center">
          {/* Top */}
          <div className="flex w-full gap-x-20">
            <div className="flex justify-end h-full w-[60%]">
              <div className="relative">
                <img
                  src={DeveloperPfp}
                  alt="img"
                  className="h-[10rem] rounded-full"
                />
                <div className="absolute text-[12px] text-[#c7c7c7] rounded-xl py-3 px-2 top-[-20px] right-[80px] bg-[rgb(74,74,74)]">
                  Note...
                </div>
                <div className="absolute top-[16px] left-[35px] h-3 w-3 rounded-full bg-[rgb(74,74,74)]" />
                <div className="absolute rounded-full bg-[rgb(75,75,75)] left-[43px] h-2 w-2 top-[28px]" />
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-5">
              <div className="flex w-full gap-x-3">
                <div className="text-xl mr-3">Developer</div>
                <button className="bg-[#3f3f3f] text-sm font-semibold px-3 rounded-lg">
                  Edit profile
                </button>
                <button className="bg-[#3f3f3f] text-sm font-semibold px-3 rounded-lg">
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
          <div>
            {/* Bottom */}
            {/* <div className="h-10 w-10 bg-slate-100">
              <div />
            </div> */}
          </div>
        </div>
        <div>{/* Bottom */}</div>
      </div>
    </>
  );
}
