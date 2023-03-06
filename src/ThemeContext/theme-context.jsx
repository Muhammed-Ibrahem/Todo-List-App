import { createContext, useCallback, useState } from "react";

const ThemeContext = createContext({
  Theme: "",
  toggleTheme: () => {},
});

const ThemeInStorage = localStorage.Theme || "DARK";
export const ThemeProvider = ({ children }) => {
  const [Theme, setTheme] = useState(ThemeInStorage);
  const toggleTheme = () => {
    const newTheme = Theme === "DARK" ? "LIGHT" : "DARK";
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider
      value={{
        Theme: Theme,
        toggleTheme: toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
