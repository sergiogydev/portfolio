import { FiMapPin } from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { Rule } from "../../components/ui/Rule";
import { experiences } from "../../data/experience";

export default function Experience() {
  return (
    <Section
      id="experience"
      index="03"
      eyebrow="Experiencia"
      title="Trayectoria construida en entornos reales."
      description="De técnico informático a programador full stack en empresas reales (HPE, Soluciones Smart de Territorio, Certitec). Cada parada ha sumado bagaje en backend, datos y producción."
    >
      <Rule />
      {experiences.map((exp, i) => (
        <Reveal key={exp.id} delay={i}>
          <div className="grid grid-cols-1 gap-4 py-9 sm:grid-cols-12 sm:gap-6">
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-ink-muted sm:col-span-3">
              <div>{exp.period}</div>
              <div className="inline-flex items-center gap-1.5 mt-1.5">
                <FiMapPin className="w-3 h-3" /> {exp.location}
              </div>
              {exp.current && (
                <div className="mt-3 text-accent">[ Actual ]</div>
              )}
            </div>

            <div className="sm:col-span-9">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <h3 className="font-serif text-xl text-ink sm:text-2xl">{exp.role}</h3>
                <span className="text-ink/30">·</span>
                <span className="font-serif text-lg italic text-accent">{exp.company}</span>
              </div>

              <p className="mb-4 text-sm leading-relaxed sm:text-base text-ink-muted">
                {exp.summary}
              </p>

              <ul className="mb-5 space-y-1.5 text-sm text-ink-muted">
                {exp.bullets.map((b) => (
                  <li key={b} className="relative pl-5">
                    <span className="absolute left-0 text-ink-muted">–</span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="font-mono text-xs text-ink-muted">
                {exp.stack.join("  /  ")}
              </div>
            </div>
          </div>
          <Rule />
        </Reveal>
      ))}
    </Section>
  );
}
