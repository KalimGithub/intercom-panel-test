import React from "react";
import { MdMessage } from "react-icons/md";

function Message({ message }) {
  return (
    <div
      key={message.id}
      className={`flex items-end my-4 ${
        message.sender === "user" ? "justify-start " : "flex-row-reverse"
      }`}
    >
      <img
        src={`https://i.pravatar.cc/150?img=${message.id}`}
        alt={message.id}
        className="w-8 h-8 rounded-full"
      />
      <div
        className={`py-1 px-4 mx-2 flex flex-col gap-2 h-full rounded-lg shadow-lg max-w-[70%] text-sm ${
          message.sender === "user"
            ? "bg-sky-200  items-start"
            : "bg-gray-300 items-end"
        } `}
      >
        <p>{message.text}</p>
        <div>
          <p className="text-xs flex items-center  text-gray-500">
            {message.sender === "user" ? (
              <span className="flex items-center justify-center py-1 px-1">
                <MdMessage />
              </span>
            ) : (
              "Seen "
            )}
            • 1 min
          </p>
        </div>
      </div>
    </div>
  );
}

export default Message;
