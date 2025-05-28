import ChatWindow from "../components/chat-window/ChatWindow";
import Left from "../components/left-sidebar/Left";
import Right from "../components/right-sidebar/Right";

const HomePage = () => {
  return (
    <div className="flex flex-row h-screen w-screen bg-gray-100 justify-between">
      {/* left users sidebar */}
      <div className="bg-gray-100 border-r border-gray-300 max-w-fit lg:w-1/4">
        <Left />
      </div>
      {/* main chat window */}
      <div className=" w-2/4">
        <ChatWindow />
      </div>
      {/* right AI copilot panel */}
      <div className="bg-gray-100 w-1/4 shadow-lg">
        <Right />
      </div>
    </div>
  );
};

export default HomePage;
