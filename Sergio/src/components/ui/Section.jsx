import Reveal from "./Reveal";

export default function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
  align = "left",
}) {
  const alignClasses =
    align === "center" ? "items-center text-center mx-auto" : "items-start";

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {(eyebrow || title || description) && (
          <div className={`flex flex-col gap-3 mb-12 sm:mb-16 ${alignClasses}`}>
            {eyebrow && (
              <Reveal>
                <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] uppercase text-brand-500">
                  <span className="inline-block w-6 h-px bg-brand-500" />
                  {eyebrow}
                </div>
              </Reveal>
            )}
            {title && (
              <Reveal
                as="h2"
                delay={1}
                className="max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl text-zinc-900 dark:text-zinc-50"
              >
                {title}
              </Reveal>
            )}
            {description && (
              <Reveal
                as="p"
                delay={2}
                className="max-w-2xl text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed"
              >
                {description}
              </Reveal>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
