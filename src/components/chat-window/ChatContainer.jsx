import React, { useContext } from "react";
import Message from "./Message";
import { UserContext } from "../../context/userContext";
import { MessageContext } from "../../context/messageContext";

function ChatContainer() {
  const { selectedUser } = useContext(UserContext);
  const { messages } = useContext(MessageContext);
  return (
    <div>
      {selectedUser ? (
        <div className="overflow-y-auto h-[calc(100vh-210px)] mx-4 py-4 no-scrollbar">
          {messages.map((message, index) => {
            return <Message message={message} key={index} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center flex-col items-center pt-64 text-xl font-semibold">
          <p className="text-center font-bold text-xs lg:text-xl">Welcome</p>
          <p className="text-center font-bold text-base lg:text-3xl">
            Select a user to start Conversation!!
          </p>
          <p className="text-center text-sm lg:text-xl font-semibold flex-end mt-60">
            Intercom: Your AI Enhanced Chatbot and Customer Support!!
          </p>
        </div>
      )}
    </div>
  );
}

export default ChatContainer;
