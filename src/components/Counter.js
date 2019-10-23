import React, { useEffect } from "react";
import { useNumber } from "../hooks";

const Counter = ({ initialNumber = 0 }) => {
  const { number, incrementCounter, decrementCounter } = useNumber(
    initialNumber
  );

  useEffect(() => {
    window.document.title = `Counter is at ${number}`;
  }, [number]);

  return (
    <div>
      <h2>Counter is at {number}</h2>
      <button onClick={incrementCounter}>Increment by 1</button>
      <button onClick={decrementCounter}>Decrement by 1</button>
    </div>
  );
};

export default Counter;
