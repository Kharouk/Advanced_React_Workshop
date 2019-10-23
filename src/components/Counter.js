import React, { useState } from "react";

const Counter = ({ initialNumber = 0 }) => {
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

export default Counter;
