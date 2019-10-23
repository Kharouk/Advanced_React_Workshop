import React from "react";
import { useInput } from "../hooks";
const Form = () => {
  const username = useInput();
  const email = useInput();
  return (
    <div>
      <h2>{username.value}</h2>
      <input type="text" {...username} placeholder="username" />
      <h2>{email.value}</h2>
      <input type="text" {...email} placeholder="email" />
    </div>
  );
};

export default Form;
