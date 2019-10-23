import React from "react";
import Counter from "./components/Counter";
import { useToggle } from "./hooks";
import "./App.css";

function App() {
  const counterToggle = useToggle(false);
  const { isVisible, toggleVisibility } = counterToggle;
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
    </div>
  );
}

export default App;
