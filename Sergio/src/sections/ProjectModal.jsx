import { useEffect } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiX } from "react-icons/fi";
import { artById } from "../components/CardArt";
import { profile } from "../data/profile";

function SueldinMock() {
  const bars = [40, 62, 48, 80, 56, 90, 70];
  return (
    <div className="flex flex-col w-full h-full gap-4 p-6 bg-[#eef3ff] text-[#1e3a8a]">
      <div className="text-xs tracking-widest uppercase opacity-60">Saldo total</div>
      <div className="font-display text-5xl">3.482,50 €</div>
      <div className="flex items-end flex-1 gap-2">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            className="flex-1 rounded-t-md bg-[#2563eb]"
            initial={{ height: 0 }}
            animate={{ height: `${h}%` }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.7, ease: "easeOut" }}
          />
        ))}
      </div>
      <div className="flex justify-between text-xs">
        <span>Presupuesto vs real</span>
        <span className="font-medium">−12 %</span>
      </div>
    </div>
  );
}

function CodeCoachMock() {
  const lines = [
    ["public ", "Hint ", "guide(", "Exercise e) {"],
    ["  var ctx = ", "workspace.load(e);"],
    ["  return ai.", "hint(ctx);"],
    ["}"],
  ];
  return (
    <div className="flex flex-col w-full h-full gap-3 p-6 font-mono text-[13px] sm:text-sm bg-[#17251f] text-[#d7e6dd]">
      <div className="flex gap-1.5">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
      </div>
      {lines.map((l, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + i * 0.15 }}
          className="whitespace-pre"
        >
          <span className="text-[#7fc8a9]">{l[0]}</span>
          <span className="text-[#f7c873]">{l[1]}</span>
          {l.slice(2).join("")}
        </motion.div>
      ))}
      <div className="p-3 mt-auto text-xs rounded-lg bg-white/10">
        <span className="text-[#f7c873]">✦ Pista:</span> ¿qué pasa si la lista está vacía?
      </div>
    </div>
  );
}

const mocks = { sueldin: SueldinMock, codecoach: CodeCoachMock };

export default function ProjectModal({ project, onClose }) {
  const Art = artById[project.id];
  const Mock = mocks[project.id];

  useEffect(() => {
    document.body.classList.add("no-scroll");
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 p-3 sm:p-5"
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backgroundColor: "rgba(0,0,0,0.45)" }}
      exit={{ backgroundColor: "rgba(0,0,0,0)" }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        className="relative h-full overflow-y-auto bg-bg text-fg rounded-[2rem] shadow-2xl"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 140, damping: 24 }}
      >
        <div className="sticky top-0 z-10 flex justify-end h-0">
          <motion.button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="grid w-12 h-12 mt-5 mr-5 rounded-full place-items-center bg-card shadow-md"
            whileHover={{ rotate: 90, scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
          >
            <FiX className="w-6 h-6" />
          </motion.button>
        </div>

        <div className="max-w-5xl px-6 pt-16 pb-24 mx-auto sm:px-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
          >
            <h2 className="font-display text-[clamp(4rem,14vw,9rem)] leading-none">
              {project.title}
            </h2>
            <p className="max-w-xl mx-auto mt-2 text-lg text-muted">{project.subtitle}</p>
            <p className="mt-3 text-[11px] tracking-[0.22em] uppercase text-faint">
              {project.kind} · {project.period}
            </p>
          </motion.div>

          <div className="grid gap-5 mt-12 sm:grid-cols-2">
            {[<Art key="a" />, <Mock key="m" />].map((node, i) => (
              <motion.div
                key={i}
                className="aspect-[4/5] sm:aspect-square rounded-[1.5rem] overflow-hidden shadow-xl"
                initial={{ opacity: 0, y: 60, rotate: i ? 3 : -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.35 + i * 0.12, type: "spring", stiffness: 90, damping: 16 }}
              >
                {node}
              </motion.div>
            ))}
          </div>

          <p className="max-w-3xl mx-auto mt-14 text-xl leading-relaxed text-center sm:text-2xl">
            {project.description}
          </p>

          <ul className="grid gap-x-10 gap-y-5 mt-14 sm:grid-cols-2">
            {project.highlights.map((h, i) => (
              <motion.li
                key={i}
                className="pt-4 text-[15px] leading-relaxed text-muted border-t border-line"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i % 2) * 0.08 }}
              >
                {h}
              </motion.li>
            ))}
          </ul>

          <div className="flex flex-wrap justify-center gap-2 mt-14">
            {project.stack.map((s, i) => (
              <motion.span
                key={s}
                className="px-4 py-1.5 text-sm rounded-full bg-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
              >
                {s}
              </motion.span>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-full bg-fg text-bg hover:opacity-80 transition-opacity"
            >
              <FiGithub className="w-4 h-4" /> Ver en GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
