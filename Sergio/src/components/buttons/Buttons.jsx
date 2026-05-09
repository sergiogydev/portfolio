import { useContext } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

export const ThemeToggleButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md text-zinc-700 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 transition-colors"
      aria-label={isDarkMode ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {isDarkMode ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
    </button>
  );
};
