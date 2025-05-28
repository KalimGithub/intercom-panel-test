import { MessageProvider } from "./context/messageContext";
import { UserProvider } from "./context/userContext";
import HomePage from "./pages/HomePage";

import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <UserProvider>
      <MessageProvider>
        <HomePage />
      </MessageProvider>
      <ToastContainer />
    </UserProvider>
  );
}

export default App;
