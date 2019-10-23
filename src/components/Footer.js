import React from "react";
import { UserContext } from "../context/UserContext";

const Footer = () => {
  const { surname } = React.useContext(UserContext);
  return <footer>Goodbye {surname}</footer>;
};

export default Footer;
