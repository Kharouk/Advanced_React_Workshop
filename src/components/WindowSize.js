import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const initialState = {
    width: 0,
    height: 0
  };
  const [dimensions, setDimensions] = useState(initialState);

  const measureDimensions = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };

  useEffect(() => {
    measureDimensions();
    window.addEventListener("resize", measureDimensions);
    return () => window.removeEventListener("resize", measureDimensions);
  }, []);

  return (
    <div>
      <h1>The width is {dimensions.width}px</h1>
      <h1>The height is {dimensions.height}px</h1>
    </div>
  );
};

export default WindowSize;
