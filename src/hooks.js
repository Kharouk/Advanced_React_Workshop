import { useState } from "react";

export const useToggle = (value = false) => {
  const [isVisible, setVisibility] = useState(value);
  const toggleVisibility = () => setVisibility(!isVisible);

  return { isVisible, setVisibility, toggleVisibility };
};
