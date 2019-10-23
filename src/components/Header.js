import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const { name } = useContext(UserContext);
  return <header>Hello {name}</header>;
};

export default Header;
