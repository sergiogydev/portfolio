import { createContext, useCallback, useContext, useEffect, useState } from "react";

export const THEMES = ["light", "dark", "sand", "lime"];

const ThemeContext = createContext({ theme: "light", next: () => {} });

const readStored = () => {
  try {
    const t = localStorage.getItem("theme");
    return THEMES.includes(t) ? t : "light";
  } catch {
    return "light";
  }
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readStored);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage no disponible */
    }
  }, [theme]);

  const next = useCallback(
    () => setTheme((t) => THEMES[(THEMES.indexOf(t) + 1) % THEMES.length]),
    []
  );

  return <ThemeContext.Provider value={{ theme, next }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
