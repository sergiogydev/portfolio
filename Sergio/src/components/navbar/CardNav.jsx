import { useContext, useEffect, useState } from "react";
import { FiMenu, FiX, FiGithub, FiArrowUpRight, FiDownload } from "react-icons/fi";
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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 bg-paper ${
        scrolled ? "border-b border-ink/10" : "border-b border-transparent"
      }`}
    >
      <div className="flex items-center justify-between h-16 max-w-6xl px-4 mx-auto sm:px-6 lg:px-10">
        <a
          href="#top"
          className="flex items-baseline gap-2 font-mono text-sm tracking-[0.15em] text-ink"
          aria-label="Inicio"
        >
          <span className="font-semibold">S.G.Y</span>
          {/* <span className="hidden text-ink-muted sm:inline">— dossier</span> */}
        </a>

        <nav className="items-center hidden gap-6 md:flex">
          {navigation.map((item, i) => {
            const isActive = active === item.id;
            return (
              <span key={item.id} className="flex items-center gap-6">
                {i > 0 && <span className="text-ink/20">·</span>}
                <a
                  href={item.href}
                  className={`relative py-1 font-mono text-xs tracking-[0.15em] uppercase transition-colors ${
                    isActive ? "text-accent" : "text-ink-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute inset-x-0 -bottom-px h-px bg-accent" />
                  )}
                </a>
              </span>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-ink-muted hover:text-accent transition-colors"
          >
            <FiGithub className="w-4 h-4" /> GitHub
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-ink border-b border-ink/30 hover:border-accent hover:text-accent transition-colors pb-0.5"
          >
            CV <FiDownload className="w-4 h-4" />
          </a>
          <ThemeToggleButton />
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center w-8 h-8 text-ink md:hidden"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t md:hidden border-ink/10 bg-paper">
          <nav className="flex flex-col max-w-6xl px-4 py-2 mx-auto">
            {navigation.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 border-b border-ink/10 font-mono text-sm uppercase tracking-[0.15em] ${
                    isActive ? "text-accent" : "text-ink-muted"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="flex gap-6 py-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-ink-muted"
              >
                <FiGithub className="w-4 h-4" /> GitHub
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.15em] text-ink"
              >
                CV <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
