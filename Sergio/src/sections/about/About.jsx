import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { Rule } from "../../components/ui/Rule";

const pillars = [
  {
    numeral: "I",
    title: "Java, Spring Boot y Python como núcleo",
    body: "Especializado en desarrollo backend con Java/Spring Boot y Python/FastAPI: diseño de APIs REST, arquitectura limpia por capas (services, repositories, schemas) y bases de datos tanto relacionales (PostgreSQL, MariaDB, SQL Server) como no relacionales (MongoDB).",
  },
  {
    numeral: "II",
    title: "Aplicaciones impulsadas por IA",
    body: "Enfoque actual: integración de LLMs (OpenAI) en sistemas backend reales, automatización de procesos inteligentes y asistentes con RAG, en sistemas construidos para producción, no para demos.",
  },
  {
    numeral: "III",
    title: "Buenas prácticas de ingeniería",
    body: "Arquitectura limpia, principios SOLID y DDD, testing con pytest, contenedores con Docker y pipelines de CI/CD con GitHub Actions.",
  },
];

export default function About() {
  return (
    <Section id="about" index="01" eyebrow="Sobre mí" title="Backend Developer formado en producción, no en tutoriales.">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <Reveal className="font-mono text-xs uppercase tracking-[0.15em] text-ink-muted leading-loose">
            Ingeniero Informático
            <br />
            Universidad de León
            <br />
            León, España
          </Reveal>
        </div>

        <div className="lg:col-span-9">
          <Reveal
            as="p"
            className="max-w-2xl text-lg leading-relaxed drop-cap text-ink-muted sm:text-xl"
          >
            Ingeniero Informático por la Universidad de León con 4 años de experiencia en el
            sector. Especializado en backend con Java y Spring Boot, además de Python y FastAPI,
            diseño de APIs REST, arquitectura de software y bases de datos relacionales y no
            relacionales. Actualmente centrado en aplicaciones impulsadas por IA: integración de
            LLMs, automatización de procesos inteligentes y sistemas backend escalables, con
            buenas prácticas de ingeniería como Docker, testing y CI/CD.
          </Reveal>

          <div className="mt-14">
            <Rule />
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i}>
                <div className="grid grid-cols-1 gap-3 py-8 sm:grid-cols-12 sm:gap-6">
                  <div className="flex items-baseline gap-4 sm:col-span-4">
                    <span className="font-serif text-2xl italic text-accent">{p.numeral}</span>
                    <h3 className="font-serif text-xl text-ink">{p.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed sm:col-span-8 sm:text-base text-ink-muted">
                    {p.body}
                  </p>
                </div>
                <Rule />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
