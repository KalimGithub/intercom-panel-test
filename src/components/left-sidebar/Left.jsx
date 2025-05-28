import React, { useContext } from "react";
import Header from "./Header";
import User from "./User";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { UserContext } from "../../context/userContext";

function Left() {
  const { users, setSelectedUser } = useContext(UserContext);
  return (
    <div>
      <Header />
      <div className="flex flex-col overflow-y-auto w-fit lg:max-h-[calc(100vh-170px)] no-scrollbar">
        {users &&
          users.map((user) => {
            return (
              <div
                onClick={() => {
                  setSelectedUser(user);
                }}
              >
                <User user={user} key={user.id} />
              </div>
            );
          })}
      </div>
      <div className="flex justify-between items-center ml-4 px-2 py-4 border-t border-gray-200">
        <div className="flex  items-center px-2 py-1 max-w-[100px] text-sm gap-3 border border-gray-300 rounded-md shadow-neutral-400 shadow-sm">
          <span className="text-white bg-slate-500 rounded-md p-1 cursor-pointer">
            <BiFoodMenu />
          </span>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
}

export default Left;
