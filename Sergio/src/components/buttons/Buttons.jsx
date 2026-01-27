import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { SunOutlined, MoonOutlined } from "@ant-design/icons";

export const ThemeToggleButton = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="relative w-20 h-10 transition-colors duration-300 rounded-full cursor-pointer bg-slate-200 dark:bg-slate-700"
      aria-label="Cambiar tema"
    >
      <span
        className={`
          absolute top-1 left-1
          flex h-8 w-8 items-center justify-center
          rounded-full
          bg-white dark:bg-slate-900
          shadow-md
          transition-all duration-300
          ${isDarkMode ? "translate-x-10 text-white" : "translate-x-0 text-slate-700"}
        `}
      >
        {isDarkMode ? <SunOutlined /> : <MoonOutlined />}
      </span>
    </button>
  );
};
