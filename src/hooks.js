import { useState, useEffect } from "react";

export const useToggle = (value = false) => {
  const [isVisible, setVisibility] = useState(value);
  const toggleVisibility = () => setVisibility(isVisible => !isVisible);

  return { isVisible, setVisibility, toggleVisibility };
};

export const useInput = (initialValue = "", persistKey = "") => {
  // If the input has a persist key (the value to save to local storage), get the text
  const initialState = persistKey
    ? () => window.localStorage.getItem(persistKey)
    : initialValue;

  const [value, setValue] = useState(initialState);

  const onChange = e => setValue(e.target.value);

  useEffect(() => {
    if (!!persistKey) {
      window.localStorage.setItem(persistKey, value);
    }
  }, [persistKey, value]);
  return { value, onChange };
};

export const useNumber = (initialNumber = 0, steps = 1) => {
  const [number, setNumber] = useState(initialNumber);
  const incrementCounter = () => setNumber(number => number + steps);
  const decrementCounter = () => setNumber(number => number - steps);

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

export const useTimer = (duration, step) => {
  const counter = useNumber(0, step);
  useEffect(() => {
    const interval = setInterval(() => {
      counter.incrementCounter();
    }, duration * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [counter, duration]);

  return { counter };
};
