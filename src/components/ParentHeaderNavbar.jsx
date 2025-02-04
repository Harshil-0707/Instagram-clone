import { Threads } from "../assets";
import { Settings, ChevronDown } from "lucide-react";

export default function ParentHeaderNavbar() {
  return (
    <>
      <div className="max-[768px]:flex fixed top-0 h-[50px] px-5 border-b border-[#51515187] w-full overflow-hidden hidden justify-between items-center">
        <div>
          <Settings />
        </div>
        <div className="flex items-center">
          Developer
          <ChevronDown className="h-4 text-[rgb(254,254,254)]" />
        </div>
        <div>
          <img src={Threads} alt="img" />
        </div>
      </div>
    </>
  );
}
