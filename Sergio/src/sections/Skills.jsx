import { motion } from "framer-motion";
import { stackGroups, marqueeStack } from "../data/stack";
import Reveal, { SectionTitle } from "../components/Reveal";

export default function Skills() {
  const loop = [...marqueeStack, ...marqueeStack];
  return (
    <section id="stack" className="py-24 scroll-mt-10">
      <div className="px-4 sm:px-8 max-w-[1400px] mx-auto">
        <SectionTitle>Stack</SectionTitle>
      </div>

      <div className="mt-12 overflow-hidden" aria-hidden>
        <div className="flex gap-10 whitespace-nowrap animate-marquee w-max">
          {loop.map((t, i) => (
            <span
              key={i}
              className="font-display text-[clamp(3rem,8vw,7rem)] leading-none outline-text"
            >
              {t} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="px-4 sm:px-8 max-w-[1400px] mx-auto mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {stackGroups.map((g, gi) => (
          <Reveal key={g.title} delay={gi % 4}>
            <h3 className="pb-3 text-2xl border-b font-display border-line">{g.title}</h3>
            <ul className="flex flex-wrap gap-2 mt-4">
              {g.items.map((it, i) => (
                <motion.li
                  key={it.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 text-sm rounded-full bg-card cursor-default"
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, type: "spring", stiffness: 300, damping: 18 }}
                  whileHover={{ y: -4, rotate: -3 }}
                >
                  {it.icon && <it.icon className="w-4 h-4" />}
                  {it.name}
                </motion.li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
