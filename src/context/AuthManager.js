import React, { useState } from "react";
import { UserContext } from "./UserContext";

const AuthManager = ({ children }) => {
  const userSchema = {
    name: "",
    surname: ""
  };
  const [user, setUser] = useState(userSchema);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthManager;
