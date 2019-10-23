import React from "react";
import Login from "./Login";
import Footer from "./Footer";
import AuthManager from "../context/AuthManager";

const PrivateSection = () => {
  return (
    <AuthManager>
      <Login />
      <Footer />
    </AuthManager>
  );
};

export default PrivateSection;
