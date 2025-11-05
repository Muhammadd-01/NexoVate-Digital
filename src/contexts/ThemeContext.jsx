import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Always start with dark mode
  const [theme, setTheme] = useState("dark");

  // Ensure dark mode is applied before any rendering
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const finalTheme = savedTheme || "dark";

    setTheme(finalTheme);
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  // Even if someone tries to toggle, it stays dark
  const toggleTheme = () => {
    setTheme("dark");
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
