import Reveal from "./Reveal";
import { Rule, Folio } from "./Rule";

export default function Section({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
  className = "",
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-4 sm:px-6 lg:px-10 py-20 sm:py-28 lg:py-32 ${className}`}
    >
      {index && (
        <Folio className="top-2 right-2 text-[7rem] sm:right-6 sm:text-[10rem] lg:right-10 lg:text-[13rem]">
          {index}
        </Folio>
      )}
      <div className="relative z-10 max-w-6xl mx-auto">
        <Rule />
        <div className="grid grid-cols-1 gap-6 pt-7 lg:grid-cols-12 lg:gap-10">
          {eyebrow && (
            <div className="lg:col-span-3">
              <Reveal>
                <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-ink-muted">
                  {index && <span className="text-accent">{index}</span>}
                  {eyebrow}
                </div>
              </Reveal>
            </div>
          )}
          <div className={eyebrow ? "lg:col-span-9" : "lg:col-span-12"}>
            {title && (
              <Reveal
                as="h2"
                delay={1}
                className="max-w-2xl font-serif text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl text-ink"
              >
                {title}
              </Reveal>
            )}
            {description && (
              <Reveal
                as="p"
                delay={2}
                className="max-w-xl mt-5 text-base leading-relaxed sm:text-lg text-ink-muted"
              >
                {description}
              </Reveal>
            )}
          </div>
        </div>
        {children && <div className="mt-14 sm:mt-16 lg:mt-20">{children}</div>}
      </div>
    </section>
  );
}
