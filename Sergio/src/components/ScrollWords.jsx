import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Word({ word, progress, range }) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block mr-[0.22em]">
      <span className="text-faint">{word}</span>
      <motion.span aria-hidden style={{ opacity }} className="absolute inset-0 text-fg">
        {word}
      </motion.span>
    </span>
  );
}

/** Texto gigante que pasa de gris a oscuro palabra a palabra con el scroll. */
export default function ScrollWords({ text, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 55%"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((w, i) => (
        <Word
          key={i}
          word={w}
          progress={scrollYProgress}
          range={[i / words.length, (i + 1) / words.length]}
        />
      ))}
    </p>
  );
}
