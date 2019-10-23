import React from "react";
import Counter from "./components/Counter";
import { useToggle, useInput } from "./hooks";
import "./App.css";

function App() {
  const counterToggle = useToggle(false);
  const { isVisible, toggleVisibility } = counterToggle;
  const username = useInput("");
  const email = useInput("");
  return (
    <div className="App">
      <header className="App-header">
        <h1 id="main--event">Advanced React With Kitze</h1>
        <div className="counter--div">
          <button onClick={toggleVisibility}>
            {isVisible ? "Hide Counter" : "Show Counter"}
          </button>
          {isVisible && <Counter />}
        </div>
      </header>
      <div>
        <h2>{username.value}</h2>
        <input type="text" {...username} />
        <h2>{email.value}</h2>
        <input type="text" {...email} />
      </div>
    </div>
  );
}

export default App;
