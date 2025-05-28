import React from "react";
import Header from "./Header";
import ChatInput from "./ChatInput";
import ChatContainer from "./ChatContainer";

function ChatWindow() {
  return (
    <div className="relative min-h-screen w-full">
      <Header />
      <ChatContainer />
      <ChatInput />
    </div>
  );
}

export default ChatWindow;
