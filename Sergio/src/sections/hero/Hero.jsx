import {
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { profile, stats } from "../../data/profile";
import { marqueeStack } from "../../data/stack";
import { navigation } from "../../data/navigation";
import Reveal from "../../components/ui/Reveal";
import { Rule } from "../../components/ui/Rule";

export default function Hero() {
  return (
    <section id="top" className="relative pt-24 pb-16 sm:pt-32 lg:pt-36">
      <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-10">
        {/* Running head */}
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-muted border-b border-ink/15">
          <span className="text-ink">{profile.name}</span>
          {/* <span className="hidden sm:inline">Dossier técnico</span> */}
          <span className="hidden sm:inline">{profile.location} · 2026</span>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-12 lg:grid-cols-12 lg:gap-12">
          {/* Main column */}
          <div className="lg:col-span-8">
            <Reveal
              className="inline-flex items-center gap-2 mb-8 font-mono text-xs tracking-[0.15em] uppercase text-accent"
            >
              <span className="relative inline-flex w-1.5 h-1.5 bg-accent">
                <span className="absolute inset-0 bg-accent caret" />
              </span>
              [ Disponible para nuevas oportunidades ]
            </Reveal>

            <Reveal
              as="h1"
              delay={1}
              className="max-w-2xl font-serif text-4xl font-medium leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
            >
              Construyo backends escalables en{" "}
              <em className="italic text-accent">Python</em>,
              <br />
              impulsados por IA.
            </Reveal>

            <Reveal
              as="p"
              delay={2}
              className="max-w-lg mt-7 text-base leading-relaxed sm:text-lg text-ink-muted"
            >
              Soy <span className="font-medium text-ink">Sergio García Yugueros</span>, Backend
              Engineer con 4 años de experiencia en el sector tecnológico. Especializado en{" "}
              <span className="text-ink">FastAPI</span>, APIs REST y bases de datos relacionales
              y no relacionales. Actualmente centrado en aplicaciones impulsadas por IA:
              integración de <span className="text-ink">LLMs (OpenAI, Anthropic)</span>,
              automatización inteligente y despliegue en <span className="text-ink">AWS</span>{" "}
              con Docker, testing y CI/CD.
            </Reveal>

            <Reveal delay={3} className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-9">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-mono uppercase tracking-[0.1em] bg-ink text-paper hover:bg-accent transition-colors"
              >
                Hablemos <FiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 pb-0.5 text-sm border-b border-ink/30 text-ink hover:border-accent hover:text-accent transition-colors"
              >
                Ver proyectos <FiArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pb-0.5 text-sm border-b border-transparent text-ink-muted hover:text-accent hover:border-accent transition-colors"
              >
                Descargar CV <FiDownload className="w-4 h-4" />
              </a>
            </Reveal>

            <Reveal
              delay={4}
              className="flex flex-wrap items-center mt-10 font-mono text-xs gap-x-6 gap-y-2 text-ink-muted"
            >
              <span className="inline-flex items-center gap-2">
                <FiMapPin className="w-3.5 h-3.5" /> {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiMail className="w-3.5 h-3.5" /> {profile.email}
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-accent transition-colors"
              >
                <FiGithub className="w-3.5 h-3.5" /> {profile.githubHandle}
              </a>
            </Reveal>
          </div>

          {/* Index column */}
          <Reveal delay={2} className="lg:col-span-4">
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-ink-muted">
              Índice
            </div>
            <Rule className="mt-3 mb-1" />
            <ol>
              {navigation.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="flex items-center justify-between py-3 border-b border-ink/10 group"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-ink-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-serif text-lg text-ink group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                    </span>
                    <FiArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-accent transition-colors" />
                  </a>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mt-16 sm:mt-20">
          <Rule delay={0.1} />
          <div className="grid grid-cols-2 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i}
                className={`py-6 ${i > 0 ? "sm:border-l border-ink/10 sm:pl-6" : ""}`}
              >
                <div className="font-serif text-3xl font-medium sm:text-4xl text-ink">
                  {s.value}
                </div>
                <div className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
                  {s.label}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="mt-14 overflow-hidden bg-ink py-3.5">
        <div className="flex gap-10 font-mono text-xs tracking-[0.1em] uppercase whitespace-nowrap text-paper/70 animate-marquee">
          {[...marqueeStack, ...marqueeStack].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-10 shrink-0">
              {t}
              <span className="text-accent">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
