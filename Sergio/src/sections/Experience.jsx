import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { experiences } from "../data/experience";
import Reveal, { SectionTitle } from "../components/Reveal";

export default function Experience() {
  const [open, setOpen] = useState(experiences[0].id);

  return (
    <section id="experiencia" className="px-4 py-24 sm:px-8 scroll-mt-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle>Experiencia</SectionTitle>

        <div className="mt-14 border-t border-line">
          {experiences.map((e, i) => {
            const isOpen = open === e.id;
            return (
              <Reveal key={e.id} delay={i} className="border-b border-line">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : e.id)}
                  className="grid items-center w-full gap-2 py-6 text-left group sm:grid-cols-12 sm:gap-6"
                >
                  <span className="text-[11px] tracking-[0.2em] uppercase text-faint sm:col-span-3">
                    {e.period}
                    {e.current && (
                      <span className="inline-block w-2 h-2 ml-2 rounded-full bg-accent animate-pulse" />
                    )}
                  </span>
                  <span className="sm:col-span-6">
                    <span className="block font-display text-4xl sm:text-5xl leading-none transition-transform duration-300 group-hover:translate-x-3">
                      {e.company}
                    </span>
                    {e.note && <span className="text-sm text-muted">{e.note}</span>}
                  </span>
                  <span className="flex items-center justify-between text-muted sm:col-span-3">
                    <span className="text-sm">{e.role}</span>
                    <motion.span animate={{ rotate: isOpen ? 45 : 0 }} className="text-fg">
                      <FiPlus className="w-6 h-6" />
                    </motion.span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-6 pb-8 sm:grid-cols-12 sm:gap-6">
                        <div className="text-sm text-faint sm:col-span-3">{e.location}</div>
                        <div className="sm:col-span-9">
                          <ul className="space-y-3 text-[15px] leading-relaxed text-muted">
                            {e.bullets.map((b) => (
                              <li key={b}>{b}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-5">
                            {e.stack.map((s) => (
                              <span key={s} className="px-3 py-1 text-xs rounded-full bg-card">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
