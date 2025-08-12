import React, { useState } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  localStorage.setItem("theme", theme);
  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
};

export default ThemeContextProvider;
