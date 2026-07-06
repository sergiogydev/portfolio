import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { Rule } from "../../components/ui/Rule";
import { education, certifications, languages } from "../../data/education";

export default function Education() {
  return (
    <Section
      id="education"
      index="05"
      eyebrow="Formación"
      title="Formación universitaria + aprendizaje continuo."
      description="Grado en Ingeniería Informática complementado con certificaciones en cloud (AWS), ciberseguridad, Python y Machine Learning."
    >
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        {/* Education + languages */}
        <div className="lg:col-span-4 lg:border-r lg:border-ink/10 lg:pr-8">
          <Reveal>
            <h3 className="mb-5 font-mono text-xs tracking-[0.2em] uppercase text-ink-muted">
              Educación
            </h3>
            {education.map((e) => (
              <div key={e.id}>
                <h4 className="font-serif text-lg text-ink">{e.title}</h4>
                <p className="mt-1 italic text-accent">{e.org}</p>
                <p className="mt-1 font-mono text-xs text-ink-muted">{e.year}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{e.description}</p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={1} className="pt-8 mt-8 border-t border-ink/10">
            <h4 className="mb-4 font-mono text-xs tracking-[0.2em] uppercase text-ink-muted">
              Idiomas
            </h4>
            <div className="space-y-4">
              {languages.map((lang) => {
                const filled = Math.round(lang.value / 10);
                return (
                  <div key={lang.name}>
                    <div className="flex items-baseline justify-between mb-2 text-sm">
                      <span className="text-ink">{lang.name}</span>
                      <span className="font-mono text-xs text-ink-muted">{lang.level}</span>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 10 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`h-2.5 flex-1 ${idx < filled ? "bg-ink" : "bg-ink/10"}`}
                        />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Certifications */}
        <div className="lg:col-span-8">
          <Reveal>
            <h3 className="mb-2 font-mono text-xs tracking-[0.2em] uppercase text-ink-muted">
              Certificaciones
            </h3>
          </Reveal>
          <Rule />
          {certifications.map((c, i) => (
            <Reveal key={c.id} delay={i}>
              <div className="grid grid-cols-1 gap-1 py-5 sm:grid-cols-12 sm:items-baseline sm:gap-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent sm:col-span-3">
                  {c.category}
                </div>
                <div className="sm:col-span-7">
                  <h4 className="font-serif text-base text-ink">{c.title}</h4>
                  <p className="mt-0.5 text-sm text-ink-muted">{c.org}</p>
                </div>
                <div className="font-mono text-xs text-ink-muted sm:col-span-2 sm:text-right">
                  {c.year}
                </div>
              </div>
              <Rule />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
