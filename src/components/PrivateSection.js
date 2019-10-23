import React from "react";
import { UserContext } from "../context/UserContext";
import Header from "./Header";
import Footer from "./Footer";

const PrivateSection = () => {
  const userObject = {
    name: "John",
    surname: "Lennon"
  };

  return (
    <UserContext.Provider value={userObject}>
      <Header />
      <Footer />
    </UserContext.Provider>
  );
};

export default PrivateSection;
