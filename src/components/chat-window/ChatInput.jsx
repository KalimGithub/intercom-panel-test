import React, { useContext, useRef } from "react";
import { MdMessage } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaBoltLightning } from "react-icons/fa6";
import { PiSmileyFill } from "react-icons/pi";
import { BsBookmarkFill } from "react-icons/bs";
import { UserContext } from "../../context/userContext";
import { MessageContext } from "../../context/messageContext";

function ChatInput() {
  const { composerMessage, setComposerMessage, messages, setMessages } =
    useContext(MessageContext);

  const { selectedUser } = useContext(UserContext);

  const textareaRef = useRef();
  const handleInput = (e) => {
    setComposerMessage(e.target.value);
    const el = textareaRef.current;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <>
      {selectedUser ? (
        <div className="absolute bottom-0 left-0 mx-6 my-2 rounded-lg px-4 py-2 shadow-2xl flex flex-col justify-center w-[95%] bg-gray-100 ">
          <div className="flex items-center gap-2 justify-start">
            <MdMessage />
            <p className="font-semibold">Chat</p>
            <MdKeyboardArrowDown />
          </div>

          {/* text area input for message */}
          <textarea
            ref={textareaRef}
            name="message"
            id="message"
            rows="1"
            cols="50"
            className="p-2 my-2 outline-0 no-scrollbar"
            placeholder="Use ctrl + k for shortcut"
            wrap="hard"
            value={composerMessage}
            onInput={handleInput}
          ></textarea>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaBoltLightning />
              <span>|</span>
              <BsBookmarkFill />
              <PiSmileyFill />
            </div>
            <div className="flex bg-black text-white gap-2 w-fit items-center p-2 px-4 rounded-lg cursor-pointer">
              <button className="border-r border-white pr-2 cursor-pointer">
                Send
              </button>
              <MdKeyboardArrowDown />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default ChatInput;
