import { createContext, useState } from "react";
import { userDetails } from "../assets/users";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users] = useState(userDetails);
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <UserContext.Provider value={{ users, selectedUser, setSelectedUser }}>
      {children}
    </UserContext.Provider>
  );
};
