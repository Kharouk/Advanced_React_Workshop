import React from "react";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { user } = React.useContext(UserContext);
  return <footer>Goodbye {user.surname}</footer>;
};

export default Footer;
