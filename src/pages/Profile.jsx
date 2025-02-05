import React from "react";
import {
  ProfileTopSection,
  ProfileBottomSection,
  ParentHeaderNavbar,
} from "../components";

export default function Profile() {
  return (
    <>
      <div className="text-white flex flex-col mx-[10%] max-[768px]:mx-0 w-[61dvw] max-xl:!w-[100dvw] mb-[7rem]">
        <ParentHeaderNavbar />
        <ProfileTopSection />
        <ProfileBottomSection />
      </div>
    </>
  );
}
