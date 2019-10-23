import React, { useState } from "react";
import "./App.css";

const Counter = () => {
  const initialNumber = 0;
  const [number, setNumber] = useState(initialNumber);
  const incrementCounter = () => setNumber(number + 1);
  const decrementCounter = () => setNumber(number - 1);

  return (
    <div>
      <h2>Counter is at {number}</h2>
      <button onClick={incrementCounter}>Increment by 1</button>
      <button onClick={decrementCounter}>Decrement by 1</button>
    </div>
  );
};

function App() {
  const [counterVisibility, setCounterVis] = useState(false);
  const toggleVisibility = () => setCounterVis(!counterVisibility);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Advanced React With Kitze</h1>
        <button onClick={toggleVisibility}>
          {counterVisibility ? "Hide Counter" : "Show Counter"}
        </button>
        {counterVisibility && <Counter />}
      </header>
    </div>
  );
}

export default App;
