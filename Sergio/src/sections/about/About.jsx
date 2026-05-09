import { FiCode, FiServer, FiAward } from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";

const pillars = [
  {
    icon: FiServer,
    title: "Backend en producción",
    body: "Más de 4 años trabajando con sistemas reales: APIs REST, lógica de negocio y bases de datos. He pasado por administración de infraestructura, software a medida y backend empresarial con Laravel y NestJS.",
  },
  {
    icon: FiCode,
    title: "Foco en Python y FastAPI",
    body: "Mi carrera está orientada al desarrollo backend con Python y FastAPI, con bases sólidas de programación orientada a objetos, ML y código limpio respaldadas por formación continua en DataCamp.",
  },
  {
    icon: FiAward,
    title: "Capacidad full stack",
    body: "Construyo el frontend cuando el proyecto lo necesita. Experiencia profesional con React y Next.js en aplicaciones web internas dentro de un entorno corporativo (HPE).",
  },
];

export default function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · Sobre mí"
      title="Backend Developer formado en producción, no en tutoriales."
      description="Ingeniero Informático por la Universidad de León, con experiencia real desde 2022 administrando bases de datos y sistemas críticos. Hoy enfoco mi carrera en escribir código backend limpio, mantenible y orientado a producto."
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {pillars.map((p, i) => (
          <Reveal key={p.title} delay={i}>
            <article className="relative h-full p-6 overflow-hidden border rounded-2xl border-zinc-200 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-md hover:border-brand-500/50 transition-colors">
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
