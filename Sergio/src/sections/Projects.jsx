import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { projects } from "../data/projects";
import { artById } from "../components/CardArt";
import Reveal, { SectionTitle } from "../components/Reveal";

export default function Projects({ onOpen }) {
  return (
    <section id="proyectos" className="px-4 py-20 sm:px-8 scroll-mt-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle>Mis apps</SectionTitle>
        <Reveal as="p" className="max-w-xl mt-4 text-base text-muted">
          Proyectos personales construidos de punta a punta: backend, frontend, base de datos y
          despliegue. Pulsa en una para ver el detalle.
        </Reveal>

        <div className="grid gap-6 mt-14 sm:grid-cols-2">
          {projects.map((p, i) => {
            const Art = artById[p.id];
            return (
              <Reveal key={p.id} delay={i}>
                <motion.button
                  type="button"
                  onClick={() => onOpen(p.id)}
                  className="relative w-full overflow-hidden text-left rounded-[2rem] group"
                  style={{ background: p.tint }}
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <div className="flex items-center justify-center py-14 sm:py-20">
                    <motion.div
                      className="w-[38%] max-w-[220px] aspect-square rounded-[22%] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,.5)]"
                      whileHover={{ rotate: -6, scale: 1.08 }}
                      initial={{ rotate: 4 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    >
                      <Art />
                    </motion.div>
                  </div>
                  <div className="flex items-end justify-between gap-4 px-6 pb-6 text-white sm:px-8 sm:pb-8">
                    <div>
                      <h3 className="font-display text-4xl sm:text-5xl">{p.title}</h3>
                      <p className="mt-1 text-sm text-white/75 max-w-[28ch]">{p.subtitle}</p>
                    </div>
                    <span className="grid w-12 h-12 transition-all duration-300 rounded-full shrink-0 place-items-center bg-white/20 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                      <FiArrowUpRight className="w-6 h-6" />
                    </span>
                  </div>
                </motion.button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
