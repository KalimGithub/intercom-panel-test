import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

function Header() {
  return (
    <div className="h-fit lg:h-[100px] border-b border-gray-300">
      <h1 className="text-xl font-semibold px-4 py-2 mb-2">Your Inbox</h1>
      <div className="flex flex-col gap-4 lg:flex-row px-4 py-2">
        <p className="flex justify-center items-center text-center gap-1 text-sm ">
          Open
          <MdKeyboardArrowDown />
        </p>
        <p className="flex justify-start items-center text-center gap-1 w-full text-sm">
          Waiting Longest
          <MdKeyboardArrowDown />
        </p>
      </div>
    </div>
  );
}

export default Header;
