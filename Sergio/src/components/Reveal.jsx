import { motion } from "framer-motion";

export default function Reveal({ as = "div", delay = 0, y = 30, className = "", children, ...rest }) {
  const Tag = motion[as] || motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: delay * 0.08, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Título de sección: letras que suben desde una máscara. */
export function SectionTitle({ children, className = "" }) {
  return (
    <h2
      className={`font-display text-[clamp(2.4rem,5.5vw,5rem)] leading-[0.95] text-fg overflow-hidden ${className}`}
    >
      <motion.span
        className="inline-block"
        initial={{ y: "105%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </h2>
  );
}
