import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeToggleButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="inline-flex items-center justify-center w-8 h-8 text-ink-muted hover:text-accent transition-colors"
      aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {isDarkMode ? <FiSun className="w-4 h-4" /> : <FiMoon className="w-4 h-4" />}
    </button>
  );
};
