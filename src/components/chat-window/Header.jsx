import React, { useContext } from "react";
import { FaRegStar } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { GiNightSleep } from "react-icons/gi";
import { ImDownload2 } from "react-icons/im";
import { UserContext } from "../../context/userContext";
function Header() {
  const { selectedUser, setSelectedUser } = useContext(UserContext);

  return (
    <>
      {selectedUser ? (
        <div className="flex gap-2 items-center justify-between px-4 py-4 w-full border-b border-gray-300">
          <h1 className="text-xl font-semibold px-4">{selectedUser?.name}</h1>
          <div className=" justify-between items-center px-2 gap-6 hidden lg:flex">
            <FaRegStar />
            <HiDotsHorizontal />
            <span className="flex items-center gap-2 px-4 py-1 bg-slate-200 rounded-md cursor-pointer font-semibold">
              <IoCall /> Call
            </span>
            <span className="flex items-center gap-2 px-4 py-1 bg-slate-200 rounded-md cursor-pointer font-semibold">
              <GiNightSleep /> Snooze
            </span>
          </div>
          <span
            className="flex items-center gap-2 px-4 mr-4 py-1 bg-black text-white rounded-md cursor-pointer font-semibold"
            onClick={() => setSelectedUser(null)}
          >
            <ImDownload2 /> Close
          </span>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Header;
