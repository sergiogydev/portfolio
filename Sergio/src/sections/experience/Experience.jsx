import { FiMapPin } from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 · Experiencia"
      title="Trayectoria construida en entornos reales."
      description="De técnico informático a programador full stack en empresas reales (HPE, Soluciones Smart de Territorio, Certitec). Cada parada ha sumado bagaje en backend, datos y producción."
    >
      <ol className="relative">
        <span
          className="absolute top-0 bottom-0 left-3 w-px bg-gradient-to-b from-brand-500/40 via-zinc-200 to-transparent dark:via-white/10 sm:left-4"
          aria-hidden
        />
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i} as="li" className="relative">
              <span
                className={`absolute left-0 top-1.5 w-7 h-7 rounded-full border ${
                  exp.current
                    ? "border-brand-500 bg-brand-500/20"
                    : "border-zinc-300 dark:border-white/10 bg-white dark:bg-zinc-950"
                } flex items-center justify-center sm:left-0`}
                aria-hidden
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full ${
                    exp.current
                      ? "bg-brand-500 animate-pulse"
                      : "bg-zinc-400 dark:bg-white/30"
                  }`}
                />
              </span>

              <div className="pl-12 sm:pl-16">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                    {exp.role}
                  </h3>
                  <span className="text-zinc-400 dark:text-zinc-600">·</span>
                  <span className="text-base font-medium text-brand-600 dark:text-brand-400">
                    {exp.company}
                  </span>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 ml-1 font-mono text-[10px] uppercase tracking-wider rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 border border-brand-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse" />
                      Actual
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-4 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                  <span>{exp.period}</span>
                  <span className="inline-flex items-center gap-1.5">
                    <FiMapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                <p className="mb-4 text-sm sm:text-base leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {exp.summary}
                </p>

                <ul className="mb-5 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                  {exp.bullets.map((b) => (
                    <li key={b} className="relative pl-5">
                      <span
                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-brand-500/70"
                        aria-hidden
                      />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 font-mono text-[11px] rounded-md border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </ol>
    </Section>
  );
}
