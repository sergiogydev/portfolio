import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { profile, worksWith } from "../data/profile";
import { artById } from "../components/CardArt";
import ScrollWords from "../components/ScrollWords";

const cards = [
  { id: "sueldin", label: "Sueldin", rot: -9, y: 46, depth: 14, open: "sueldin" },
  { id: "codecoach", label: "CodeCoach", rot: -3, y: -6, depth: 26, open: "codecoach" },
  { id: "bot", label: "Bot de incidencias", rot: 4, y: 16, depth: 38, href: "#experiencia" },
  { id: "stack", label: "Mi stack", rot: 10, y: 54, depth: 20, href: "#stack" },
];

function HeroCard({ card, index, mx, my, scrollY, onOpen }) {
  const Art = artById[card.id];
  const x = useTransform(mx, [-1, 1], [-card.depth, card.depth]);
  const py = useTransform(my, [-1, 1], [-card.depth / 2, card.depth / 2]);
  const sy = useTransform(scrollY, [0, 600], [0, -40 - index * 18]);

  const common = {
    className:
      "group relative block w-full aspect-[4/5] rounded-[8%] overflow-hidden shadow-[0_30px_60px_-20px_rgba(0,0,0,.35)] bg-card cursor-pointer",
    initial: { y: 260, opacity: 0, rotate: card.rot + 18 },
    animate: { y: card.y, opacity: 1, rotate: card.rot },
    transition: {
      delay: 0.5 + index * 0.12,
      type: "spring",
      stiffness: 70,
      damping: 14,
    },
    whileHover: { y: card.y - 22, rotate: 0, scale: 1.07, zIndex: 20 },
    whileTap: { scale: 0.98 },
  };

  const inner = (
    <>
      <Art />
      <span className="absolute inset-x-0 bottom-0 px-3 py-2 text-[11px] font-medium tracking-widest text-center text-white uppercase transition-transform duration-300 translate-y-full bg-black/60 backdrop-blur-sm group-hover:translate-y-0">
        {card.label}
      </span>
    </>
  );

  return (
    <motion.div
      style={{ x, y: py }}
      className="relative w-[27vw] sm:w-[16vw] max-w-[230px] -ml-[5vw] sm:-ml-[2.5vw] first:ml-0"
    >
      <motion.div style={{ y: sy }}>
        {card.open ? (
          <motion.button
            type="button"
            aria-label={`Abrir ${card.label}`}
            onClick={() => onOpen(card.open)}
            {...common}
          >
            {inner}
          </motion.button>
        ) : (
          <motion.a href={card.href} aria-label={card.label} {...common}>
            {inner}
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function Hero({ onOpen }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18 });
  const smy = useSpring(my, { stiffness: 60, damping: 18 });
  const { scrollY } = useScroll();
  const nameRef = useRef(null);

  const onMove = (e) => {
    mx.set((e.clientX / window.innerWidth - 0.5) * 2);
    my.set((e.clientY / window.innerHeight - 0.5) * 2);
  };

  const words = profile.name.toUpperCase().split(" ");

  return (
    <section id="top" onMouseMove={onMove} className="relative px-4 pt-6 sm:px-8">
      <motion.header
        className="px-12 text-center"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <div className="text-xl tracking-wide font-display text-fg">{profile.location}</div>
        <a
          href={`mailto:${profile.email}`}
          className="mt-1 inline-block text-[11px] tracking-[0.22em] uppercase text-faint hover:text-fg transition-colors"
        >
          {profile.email}
        </a>
      </motion.header>

      <h1
        ref={nameRef}
        aria-label={profile.name}
        className="font-display text-fg text-center leading-[0.92] text-[clamp(1.8rem,4.4vw,4.8rem)] flex flex-wrap justify-center overflow-hidden pt-[0.14em] pb-[0.04em] mt-1"
      >
        {words.map((word, wi) => (
          <span key={wi} aria-hidden className="inline-block whitespace-nowrap mx-[0.12em]">
            {word.split("").map((l, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{
                  delay: 0.15 + (wi * 6 + i) * 0.03,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {l}
              </motion.span>
            ))}
          </span>
        ))}
      </h1>

      <div className="relative z-10 flex justify-center mt-8 sm:mt-10 pb-24 sm:pb-28">
        {cards.map((c, i) => (
          <HeroCard
            key={c.id}
            card={c}
            index={i}
            mx={smx}
            my={smy}
            scrollY={scrollY}
            onOpen={onOpen}
          />
        ))}
      </div>

      <div className="relative z-0 max-w-[1000px] mx-auto mt-4 sm:mt-6">
        <ScrollWords
          text="BACKEND DEVELOPER, JAVA & SPRING BOOT"
          className="font-display text-[clamp(2rem,5.6vw,6rem)] leading-[0.95] text-center"
        />
      </div>

      <div className="mt-16 text-center pb-20">
        <div className="text-lg tracking-wide font-display text-fg">He trabajado en</div>
        <ul className="mt-2 flex flex-wrap justify-center gap-x-6 gap-y-1 text-[11px] tracking-[0.22em] uppercase text-faint">
          {worksWith.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
