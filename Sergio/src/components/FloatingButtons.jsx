import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";
import { IoColorPaletteSharp } from "react-icons/io5";
import profileImg from "../assets/images/profile.png";
import { THEMES, useTheme } from "../context/ThemeContext";
import { profile } from "../data/profile";

const LABELS = { light: "Claro", dark: "Oscuro", sand: "Arena", lime: "Lima" };

const btn =
  "grid place-items-center w-14 h-14 rounded-full bg-card/80 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,.12)] text-fg overflow-hidden";

export default function FloatingButtons() {
  const { theme, next } = useTheme();
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 1300);
    return () => clearTimeout(t);
  }, [toast]);

  return (
    <>
      <motion.a
        href="#contacto"
        aria-label="Contacto"
        className={`fixed top-6 right-6 z-40 ${btn}`}
        initial={{ scale: 0, rotate: -90 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1.4, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1, rotate: 6 }}
        whileTap={{ scale: 0.92 }}
      >
        <img src={profileImg} alt="" className="object-cover w-full h-full" />
      </motion.a>

      <motion.a
        href={profile.cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Descargar CV"
        className={`fixed bottom-24 right-6 z-40 ${btn}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.6, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.92 }}
      >
        <FiDownload className="w-5 h-5" />
      </motion.a>

      <motion.button
        type="button"
        aria-label="Cambiar tema"
        onClick={() => {
          next();
          setToast(LABELS[THEMES[(THEMES.indexOf(theme) + 1) % THEMES.length]]);
        }}
        className={`fixed bottom-6 right-6 z-40 ${btn}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.8, type: "spring", stiffness: 260, damping: 18 }}
        whileHover={{ scale: 1.1, rotate: 20 }}
        whileTap={{ scale: 0.9, rotate: 120 }}
      >
        <IoColorPaletteSharp className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {toast && (
          <motion.div
            key={toast}
            className="fixed bottom-9 right-24 z-40 px-4 py-2 text-xs font-medium tracking-widest uppercase rounded-full bg-fg text-bg"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 12 }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
