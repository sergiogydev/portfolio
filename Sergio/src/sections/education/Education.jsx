import { FiBookOpen, FiAward } from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { education, certifications, languages } from "../../data/education";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="05 · Formación"
      title="Formación universitaria + aprendizaje continuo."
      description="Grado en Ingeniería Informática complementado con certificaciones técnicas en Python, Machine Learning y ciberseguridad."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Education */}
        <Reveal className="lg:col-span-1">
          <div className="h-full p-6 border rounded-2xl border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center justify-center w-9 h-9 text-brand-600 dark:text-brand-400 bg-brand-500/10 rounded-lg">
                <FiBookOpen className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
                Educación
              </h3>
            </div>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.id}>
                  <h4 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {e.title}
                  </h4>
                  <p className="mt-0.5 text-sm text-brand-600 dark:text-brand-400">
                    {e.org}
                  </p>
                  <p className="mt-1 font-mono text-xs text-zinc-500 dark:text-zinc-500">
                    {e.year}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Languages */}
            <div className="pt-6 mt-6 border-t border-zinc-200 dark:border-white/10">
              <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Idiomas
              </h4>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex items-baseline justify-between mb-1.5 text-sm">
                      <span className="text-zinc-800 dark:text-zinc-200">
                        {lang.name}
                      </span>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                        {lang.level}
                      </span>
                    </div>
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/5">
                      <div
                        className="absolute inset-y-0 left-0 bg-brand-500/80 rounded-full"
                        style={{ width: `${lang.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal delay={1} className="lg:col-span-2">
          <div className="h-full p-6 border rounded-2xl border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md">
            <div className="flex items-center gap-3 mb-5">
              <div className="inline-flex items-center justify-center w-9 h-9 text-brand-600 dark:text-brand-400 bg-brand-500/10 rounded-lg">
                <FiAward className="w-4 h-4" />
              </div>
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-zinc-500 dark:text-zinc-400">
                Certificaciones
              </h3>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {certifications.map((c) => (
                <li
                  key={c.id}
                  className="p-4 border rounded-xl border-zinc-200 dark:border-white/5 bg-white/50 dark:bg-zinc-950/40 hover:border-brand-500/30 transition-colors"
                >
                  <div className="flex items-baseline justify-between gap-2 mb-1">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400">
                      {c.category}
                    </span>
                    <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                      {c.year}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {c.title}
                  </h4>
                  <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                    {c.org}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
