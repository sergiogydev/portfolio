import { motion } from "framer-motion";

export function Rule({ className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`rule-draw h-px w-full bg-ink/15 ${className}`}
    />
  );
}

export function Folio({ children, className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none select-none absolute z-0 font-serif leading-none text-ink/5 ${className}`}
    >
      {children}
    </div>
  );
}
