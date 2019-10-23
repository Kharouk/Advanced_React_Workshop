import { useState } from "react";

export const useToggle = (value = false) => {
  const [isVisible, setVisibility] = useState(value);
  const toggleVisibility = () => setVisibility(!isVisible);

  return { isVisible, setVisibility, toggleVisibility };
};

export const useInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const onChange = e => setValue(e.target.value);

  return { value, onChange };
};
