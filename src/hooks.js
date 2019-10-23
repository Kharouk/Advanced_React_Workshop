import { useState, useEffect } from "react";

export const useToggle = (value = false) => {
  const [isVisible, setVisibility] = useState(value);
  const toggleVisibility = () => setVisibility(isVisible => !isVisible);

  return { isVisible, setVisibility, toggleVisibility };
};

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);

  return { value, onChange };
};

export const useNumber = (initialNumber = 0) => {
  const [number, setNumber] = useState(initialNumber);
  const incrementCounter = () => setNumber(number => number + 1);
  const decrementCounter = () => setNumber(number => number - 1);

  return { number, incrementCounter, decrementCounter };
};

export const useConsoleLog = title => {
  useEffect(() => {
    console.log(`Counter has mounted/re-rendered.`);
    window.document.title = title;
    console.log(title);
  }, [title]);
};

export const useMeasureWindow = () => {
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

  const { width, height } = dimensions;
  return { width, height };
};
