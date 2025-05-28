import React, { useContext, useState } from "react";
import { RiCopilotLine } from "react-icons/ri";
import { FaLongArrowAltUp } from "react-icons/fa";
import { MessageContext } from "../../context/messageContext";
import { UserContext } from "../../context/userContext";
import { toast } from "react-toastify";

const CopilotTab = () => {
  const { copilotMessage, setCopilotMessage, setComposerMessage } =
    useContext(MessageContext);
  const { selectedUser } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [suggestedInput, setSuggestedInput] = useState("How can I help you?");
  return (
    <div className="grid place-items-stretch items-end h-[90vh] bg-[linear-gradient(182deg,rgba(247,247,247,0.63)_0%,rgba(235,221,235,1)_92%,rgba(227,202,227,1)_95%,rgba(247,247,247,1)_100%)]">
      <div>
        <RiCopilotLine className="m-auto my-2" />
        <h1 className="text-center font-bold">Hi, Im Fin AI Co-Pilot</h1>
        <p className="text-gray-400 text-sm text-center">
          Ask me anything about this conversation!
        </p>
      </div>
      <div>
        <div
          className={`px-6 py-4 border border-gray-300 rounded-lg shadow-xl mx-2 bg-gray-100 ${
            copilotMessage ? "" : "hidden"
          }`}
        >
          <p>{copilotMessage}</p>
          <button
            onClick={() => {
              if (selectedUser) {
                setComposerMessage(copilotMessage);
                setCopilotMessage("");
              } else {
                toast.error("plz select a conversation");
              }
            }}
            className="flex items-center font-semibold gap-2 px-6 cursor-pointer border border-gray-300 rounded-lg bg-gray-300 mt-2"
          >
            <span className="">+</span>Add to Composer
          </button>
        </div>
        <div className="flex items-center justify-start mx-2 max-w-fit shadow-lg rounded-lg border px-4 py-2 border-gray-200 my-6 bg-white">
          <p
            className="font-bold text-sm cursor-pointer"
            onClick={(e) => {
              setInput(suggestedInput);
            }}
          >
            Suggested{" "}
            <span className="font-normal text-gray-500">{suggestedInput}</span>
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setCopilotMessage(input);
            setInput("");
          }}
          className="flex items-center pr-4 mx-2 shadow-lg rounded-lg border border-gray-200 mb-4 bg-white"
        >
          <input
            placeholder="Ask a question"
            type="text"
            className="px-4 py-2 w-full outline-0"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button type="submit">
            <FaLongArrowAltUp className="cursor-pointer" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CopilotTab;
