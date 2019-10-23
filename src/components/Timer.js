import React from "react";
import { useTimer } from "../hooks";
const Timer = () => {
  const { counter } = useTimer(1, 5);
  console.log(counter);
  return (
    <div>
      <p>Counter is at {counter.number}</p>
    </div>
  );
};

export default Timer;
