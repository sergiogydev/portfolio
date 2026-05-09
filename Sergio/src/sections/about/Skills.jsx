import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { stackGroups } from "../../data/stack";

export default function Skills() {
  return (
    <Section
      id="stack"
      eyebrow="02 · Stack técnico"
      title="Las herramientas con las que construyo software."
      description="Mi stack está priorizado: backend en Python y FastAPI como núcleo, capacidades full stack alrededor y herramientas de DevOps e IA para mover proyectos rápido sin perder calidad."
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.id} delay={i}>
              <article className="relative h-full p-6 overflow-hidden border rounded-2xl border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md hover:border-brand-500/40 transition-colors group">
                <div
                  className={`absolute -top-16 -right-16 w-40 h-40 rounded-full blur-3xl bg-gradient-to-br ${group.accent}`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="inline-flex items-center justify-center w-9 h-9 text-brand-600 dark:text-brand-400 bg-brand-500/10 rounded-lg">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
                      {group.title}
                    </h3>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {group.description}
                  </p>
                  <ul className="space-y-2">
                    {group.items.map((item) => {
                      const ItemIcon = item.icon;
                      return (
                        <li
                          key={item.name}
                          className="flex items-center justify-between gap-3 px-3 py-2 text-sm border rounded-lg border-zinc-200 dark:border-white/5 bg-white/60 dark:bg-zinc-950/40"
                        >
                          <span className="inline-flex items-center gap-2.5 text-zinc-800 dark:text-zinc-200">
                            <ItemIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                            {item.name}
                          </span>
                          {item.level && (
                            <span className="font-mono text-[10px] uppercase tracking-wider text-brand-600 dark:text-brand-400">
                              {item.level}
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
