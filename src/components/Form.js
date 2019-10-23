import React from "react";
import { useInput } from "../hooks";
const Form = () => {
  const username = useInput("", "username");
  const email = useInput();
  return (
    <div>
      <h2>{username.value}</h2>
      <p>Please Enter your Username: </p>
      <input type="text" {...username} placeholder="username" />
      <p style={{ fontSize: "10px" }}>
        This will be stored into your local storage
      </p>
      <h2>{email.value}</h2>
      <p>Please Enter your Email: </p>
      <input type="text" {...email} placeholder="email" />
    </div>
  );
};

export default Form;
