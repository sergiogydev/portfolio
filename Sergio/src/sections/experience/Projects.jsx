import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { Rule } from "../../components/ui/Rule";
import { projects } from "../../data/projects";
import { profile } from "../../data/profile";

const ROMAN = ["I", "II", "III", "IV", "V", "VI"];

export default function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      eyebrow="Proyectos destacados"
      title="Trabajo real, no demos."
      description="Desde TutorTrack, mi plataforma SaaS construida de cero con FastAPI, Stripe e IA, hasta iniciativas profesionales como backend y full stack. Cada proyecto incluye contexto, stack y aporte concreto."
    >
      <Rule />
      {projects.map((p, i) => (
        <Reveal key={p.id} delay={i}>
          <div className="grid grid-cols-1 gap-5 py-10 sm:grid-cols-12 sm:gap-6">
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted sm:col-span-2">
              <div
                className={`font-serif text-2xl italic ${p.featured ? "text-accent" : "text-ink"}`}
              >
                {ROMAN[i] || i + 1}
              </div>
              <div className="mt-2">{p.type}</div>
              <div className="mt-1">{p.period}</div>
              {p.featured && <div className="mt-3 text-accent">[ Destacado ]</div>}
            </div>

            <div className="sm:col-span-10">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                <h3 className="font-serif text-2xl text-ink sm:text-3xl">{p.title}</h3>
                {p.subtitle && (
                  <span className="text-sm text-ink-muted">{p.subtitle}</span>
                )}
              </div>
              <p className="mb-4 text-sm text-ink-muted">{p.role}</p>

              <p className="max-w-2xl mb-5 text-sm leading-relaxed sm:text-base text-ink-muted">
                {p.description}
              </p>

              <ul
                className={`mb-5 space-y-1.5 text-sm text-ink-muted ${
                  p.featured ? "sm:grid sm:grid-cols-2 sm:gap-x-8 sm:space-y-0 sm:gap-y-1.5" : ""
                }`}
              >
                {p.highlights.map((h) => (
                  <li key={h} className="relative pl-5">
                    <span className="absolute left-0 text-ink-muted">–</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="font-mono text-xs text-ink-muted">
                {p.stack.join("  ·  ")}
              </div>
            </div>
          </div>
          <Rule />
        </Reveal>
      ))}

      <Reveal delay={projects.length} className="pt-10">
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-4 group sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent mb-2">
              Más en GitHub
            </div>
            <h3 className="font-serif text-xl text-ink sm:text-2xl">
              Repositorio personal con experimentos y proyectos open source
            </h3>
            <p className="max-w-lg mt-2 text-sm text-ink-muted">
              Donde practico nuevos stacks, pruebo arquitecturas y mantengo proyectos en
              evolución.
            </p>
          </div>
          <span className="inline-flex items-center gap-2 pb-0.5 text-sm border-b border-ink/30 text-ink group-hover:border-accent group-hover:text-accent transition-colors shrink-0">
            <FiGithub className="w-4 h-4" /> Ver perfil
            <FiArrowUpRight className="w-4 h-4" />
          </span>
        </a>
      </Reveal>
    </Section>
  );
}
