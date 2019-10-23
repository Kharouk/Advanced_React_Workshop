import React from "react";
import { useNumber, useConsoleLog } from "../hooks";

const Counter = ({ initialNumber = 0 }) => {
  const { number, incrementCounter, decrementCounter } = useNumber(
    initialNumber
  );

  useConsoleLog(`Counter is at ${number}`);

  return (
    <div>
      <h2>Counter is at {number}</h2>
      <button onClick={incrementCounter}>Increment by 1</button>
      <button onClick={decrementCounter}>Decrement by 1</button>
    </div>
  );
};

export default Counter;
