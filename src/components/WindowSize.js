import React from "react";
import { useMeasureWindow } from "../hooks";

const WindowSize = () => {
  const { width, height } = useMeasureWindow();
  return (
    <div>
      <h1>The width is {width}px</h1>
      <h1>The height is {height}px</h1>
    </div>
  );
};

export default WindowSize;
