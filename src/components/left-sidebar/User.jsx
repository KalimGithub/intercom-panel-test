import React, { useContext } from "react";
import { UserContext } from "../../context/userContext";

function User({ user, index }) {
  const { selectedUser, setSelectedUser } = useContext(UserContext);
  const isSelected = selectedUser?.id === user.id;

  const bgColor = getBgColor(user.name);
  const firstLetter = user.name.charAt(0).toUpperCase();
  function getBgColor(name) {
    const color = (name.toUpperCase().charCodeAt(0) * 13) % 360;
    return `hsl(${color}, 70%, 60%)`;
  }

  return (
    <div
      key={index}
      className={`flex items-center gap-2 px-4 py-4 border-b border-gray-300  cursor-pointer ${
        isSelected ? "bg-sky-200" : "hover:bg-gray-200"
      }`}
      onClick={() => setSelectedUser(user)}
    >
      <div
        className={`w-8 h-8 rounded-full  text-center text-white hidden lg:flex items-center justify-center`}
        style={{ backgroundColor: bgColor }}
      >
        {firstLetter}
      </div>
      <div>
        <div className="flex items-center gap-1">
          <h2 className="">{user.name}</h2>
          <p className="hidden lg:flex">• {user.company}</p>
        </div>
        <p className="text-xs text-gray-500">{user.email}</p>
      </div>
    </div>
  );
}

export default User;
