import { useContext, useEffect, useState } from "react";
import { FiMenu, FiX, FiGithub, FiDownload } from "react-icons/fi";
import { navigation } from "../../data/navigation";
import { profile } from "../../data/profile";
import { ThemeToggleButton } from "../buttons/Buttons";
import { ThemeContext } from "../../context/ThemeContext";

function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + offset;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [ids, offset]);

  return active;
}

export default function CardNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(navigation.map((n) => n.id));
  useContext(ThemeContext); // ensure re-render on theme switch for any consumers

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/60 dark:border-white/10"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl px-4 mx-auto h-16 sm:px-6 lg:px-8">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm tracking-tight text-zinc-900 dark:text-zinc-100"
          aria-label="Inicio"
        >
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-brand-500 text-zinc-950 font-bold">
            S
          </span>
          <span className="hidden sm:inline">sergio<span className="text-brand-500">.dev</span></span>
        </a>

        <nav className="items-center hidden gap-1 md:flex">
          {navigation.map((item) => {
            const isActive = active === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive
                    ? "text-brand-600 dark:text-brand-400"
                    : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute inset-x-3 -bottom-px h-px bg-brand-500" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md text-zinc-700 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-zinc-950 bg-brand-500 rounded-full hover:bg-brand-400 transition-colors"
          >
            <FiDownload className="w-4 h-4" />
            CV
          </a>
          <ThemeToggleButton />
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 backdrop-blur-md text-zinc-700 dark:text-zinc-200 md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-zinc-200/60 dark:border-white/10 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 max-w-6xl mx-auto gap-1">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`px-3 py-3 rounded-lg text-base font-medium ${
                    isActive
                      ? "text-brand-600 dark:text-brand-400 bg-brand-500/10"
                      : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="flex gap-2 mt-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200"
              >
                <FiGithub className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium rounded-lg bg-brand-500 text-zinc-950"
              >
                <FiDownload className="w-4 h-4" /> CV
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
