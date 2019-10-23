import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useInput } from "../hooks";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  const firstName = useInput();
  const surname = useInput();

  const handleSubmit = () => {
    setUser({
      name: firstName.value,
      surname: surname.value
    });
  };

  return (
    <div>
      <h1>Hello {user.name}</h1>
      <input type="text" placeholder="first name" {...firstName} />
      {firstName.value}
      <br />
      <input type="text" placeholder="surname" {...surname} /> {surname.value}
      <br />
      <button onClick={handleSubmit}>Submit</button>
      {!!user.name && !!user.surname && (
        <div>
          <h4>
            this is ultra secret {user.name} {user.surname}, sick that you found
            it!
          </h4>
        </div>
      )}
    </div>
  );
};

export default Login;
