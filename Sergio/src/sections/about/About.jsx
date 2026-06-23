import { FiCode, FiServer, FiAward } from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";

const pillars = [
  {
    icon: FiCode,
    title: "Python & FastAPI como núcleo",
    body: "Especializado en desarrollo backend con Python y FastAPI: diseño de APIs REST, arquitectura limpia por capas (services, repositories, schemas) y bases de datos relacionales con PostgreSQL.",
  },
  {
    icon: FiServer,
    title: "Buenas prácticas & Cloud",
    body: "Enfoque actual en calidad y despliegue real: testing con pytest, contenedores con Docker, CI/CD con GitHub Actions y despliegue en AWS (EC2/RDS). Actualmente preparando la certificación AWS Cloud Practitioner.",
  },
  {
    icon: FiAward,
    title: "IA integrada & full stack",
    body: "Integro modelos de lenguaje (OpenAI / Claude) en sistemas backend reales y construyo el frontend cuando hace falta, con React y Next.js (experiencia profesional en HPE).",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · Sobre mí"
      title="Backend Engineer formado en producción, no en tutoriales."
      description="Ingeniero Informático por la Universidad de León con cerca de 4 años en el sector. Especializado en backend con Python y FastAPI, diseño de APIs REST, bases de datos relacionales y arquitectura de software, con foco en buenas prácticas, despliegue en AWS e integración de IA en sistemas reales."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i}>
            <article className="relative h-full p-6 overflow-hidden transition-colors border rounded-2xl border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md hover:border-brand-500/50">
              <div className="absolute inset-x-0 h-px transition-opacity opacity-0 -top-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent group-hover:opacity-100" />
              <div className="inline-flex items-center justify-center w-10 h-10 mb-5 text-brand-600 dark:text-brand-400 bg-brand-500/10 rounded-xl">
                <p.icon className="w-5 h-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {p.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
