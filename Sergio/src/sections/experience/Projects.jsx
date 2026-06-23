import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { projects } from "../../data/projects";
import { profile } from "../../data/profile";

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 · Proyectos destacados"
      title="Trabajo real, no demos."
      description="Desde TutorTrack, mi plataforma SaaS construida de cero con FastAPI, Stripe e IA, hasta iniciativas profesionales como backend y full stack. Cada proyecto incluye contexto, stack y aporte concreto."
    >
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal
            key={p.id}
            delay={i}
            className={p.featured ? "lg:col-span-2" : ""}
          >
            <article
              className={`relative h-full overflow-hidden border rounded-2xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md transition-colors group ${
                p.featured
                  ? "border-brand-500/40 hover:border-brand-500/60 ring-1 ring-brand-500/10"
                  : "border-zinc-200 dark:border-white/10 hover:border-brand-500/40"
              }`}
            >
              <div
                className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl bg-gradient-to-br ${p.accent} opacity-70 group-hover:opacity-100 transition-opacity`}
                aria-hidden
              />
              <div className="relative p-6 sm:p-7">
                <div className="flex items-center justify-between mb-5 font-mono text-[11px] uppercase tracking-wider text-zinc-500 dark:text-zinc-500">
                  <span className="inline-flex items-center gap-2 text-brand-600 dark:text-brand-400">
                    {p.featured && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-brand-500/10 border border-brand-500/30">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                        Destacado
                      </span>
                    )}
                    {p.type}
                  </span>
                  <span>{p.period}</span>
                </div>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="text-xl font-semibold sm:text-2xl text-zinc-900 dark:text-zinc-100">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <span className="text-sm text-zinc-500 dark:text-zinc-400">
                      {p.subtitle}
                    </span>
                  )}
                </div>
                <p className="mb-5 text-sm text-zinc-500 dark:text-zinc-400">
                  {p.role}
                </p>

                <p className="mb-5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                  {p.description}
                </p>

                <ul
                  className={`mb-5 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400 ${
                    p.featured ? "sm:grid sm:grid-cols-2 sm:gap-x-6 sm:space-y-0 sm:gap-y-1.5" : ""
                  }`}
                >
                  {p.highlights.map((h) => (
                    <li key={h} className="relative pl-5">
                      <span
                        className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-brand-500/70"
                        aria-hidden
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 font-mono text-[11px] rounded-md border border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/50 text-zinc-700 dark:text-zinc-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={projects.length} className="mt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 sm:p-7 overflow-hidden border rounded-2xl border-zinc-200 dark:border-white/10 bg-gradient-to-br from-brand-500/10 via-brand-500/5 to-transparent hover:border-brand-500/50 transition-colors"
        >
          <div>
            <div className="font-mono text-[11px] uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-2">
              Más en GitHub
            </div>
            <h3 className="text-lg font-semibold sm:text-xl text-zinc-900 dark:text-zinc-100">
              Repositorio personal con experimentos y proyectos open source
            </h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              Donde practico nuevos stacks, pruebo arquitecturas y mantengo proyectos en evolución.
            </p>
          </div>
          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium rounded-full bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 group-hover:translate-x-1 transition-transform">
            <FiGithub className="w-4 h-4" /> Ver perfil
            <FiArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
