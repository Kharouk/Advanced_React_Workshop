import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

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
