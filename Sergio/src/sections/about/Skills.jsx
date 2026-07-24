import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { Rule } from "../../components/ui/Rule";
import { stackGroups } from "../../data/stack";

export default function Skills() {
  return (
    <Section
      id="stack"
      index="02"
      eyebrow="Stack técnico"
      title="Las herramientas con las que construyo software."
      description="Mi stack está priorizado: backend en Java/Spring Boot y Python/FastAPI como núcleo, capacidades full stack alrededor y herramientas de DevOps e IA para mover proyectos rápido sin perder calidad."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-12">
        {stackGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.id} delay={i}>
              <Rule />
              <div className="py-7">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-ink-muted" />
                  <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-ink-muted">
                    {group.title}
                  </h3>
                </div>
                <p className="max-w-md mb-5 text-sm leading-relaxed text-ink-muted">
                  {group.description}
                </p>
                <ul className="flex flex-wrap gap-x-1 gap-y-2.5">
                  {group.items.map((item, j) => {
                    const ItemIcon = item.icon;
                    return (
                      <li key={item.name} className="inline-flex items-baseline">
                        {j > 0 && <span className="mx-2.5 text-ink/20">·</span>}
                        <span className="inline-flex items-baseline gap-1.5 text-sm text-ink">
                          <ItemIcon className="relative w-3.5 h-3.5 top-0.5 text-ink-muted" />
                          {item.name}
                          {item.level && (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-accent">
                              {item.level}
                            </span>
                          )}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Rule />
    </Section>
  );
}
