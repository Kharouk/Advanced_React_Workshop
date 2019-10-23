import React from "react";

const Form = ({ username, email }) => {
  return (
    <div>
      <h2>{username.value}</h2>
      <input type="text" {...username} />
      <h2>{email.value}</h2>
      <input type="text" {...email} />
    </div>
  );
};

export default Form;
