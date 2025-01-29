import React from "react";
import { DeveloperPfp } from "../assets";

export default function Profile() {
  return (
    <>
      <div className="text-white h-[100dvh] w-[100dvw] flex flex-col items-center p-4">
        <div className="h-full w-full pt-8">
          {/* Top */}
          <div className="flex w-full gap-x-20">
            {/* top */}
            <div className="flex justify-end h-full w-[60%]">
              {/* Left */}
              <div className="relative">
                <img
                  src={DeveloperPfp}
                  alt="img"
                  className="h-[10rem] rounded-full"
                />
                <div className="absolute text-xs top-0 right-[80px] bg-[rgb(54,54,54)]">
                  Note...
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-y-3">
              {/* Right */}
              <div className="flex w-full gap-x-3">
                <div className="text-[#c7c7c7] text-sm">Developer</div>
                <button className="bg-[#3f3f3f] text-xs font-semibold px-3 rounded-lg">
                  Edit profile
                </button>
                <button className="bg-[#3f3f3f] text-xs font-semibold px-3 rounded-lg">
                  View archive
                </button>
                <div></div>
              </div>
              <div className="flex gap-x-4">
                <div className="text-[13px] text-[#c7c7c7]">
                  <span className="text-white font-bold">0</span> posts
                </div>
                <div className="text-[13px] text-[#c7c7c7]">
                  <span className="text-white font-bold">3k</span> followers
                </div>
                <div className="text-[13px] text-[#c7c7c7]">
                  <span className="text-white font-bold">120</span> following
                </div>
              </div>
              <div>
                <div className="text-sm">__Developer__</div>
                <div className="text-sm">🇮🇳</div>
                <div className="text-sm text-[#c7c7c7]">
                  I am a frontend Developer.
                </div>
              </div>
            </div>
          </div>
          <div>{/* Bottom */}</div>
        </div>
        <div>{/* Bottom */}</div>
      </div>
    </>
  );
}
