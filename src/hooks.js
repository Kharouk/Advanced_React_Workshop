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
