import { createContext, useState } from "react";

export const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
  const messagesList = [
    {
      id: 1,
      text: "Hello, how can I help you?",
      sender: "bot",
    },
    {
      id: 2,
      text: "I need to track my order",
      sender: "user",
    },
    {
      id: 3,
      text: "okay wait a moment let me check your order",
      sender: "bot",
    },
    {
      id: 4,
      text: "okay great thank you",
      sender: "user",
    },
  ];
  const [messages] = useState(messagesList);
  const [copilotMessage, setCopilotMessage] = useState("");
  const [composerMessage, setComposerMessage] = useState("");

  return (
    <MessageContext.Provider
      value={{
        messages,
        copilotMessage,
        setCopilotMessage,
        composerMessage,
        setComposerMessage,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};
