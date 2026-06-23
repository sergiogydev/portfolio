import {
  SiPython,
  SiFastapi,
  SiSqlalchemy,
  SiPydantic,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
  SiMariadb,
  SiMysql,
  SiGit,
  SiDocker,
  SiGithubactions,
  SiStripe,
  SiOpenai,
  SiAnthropic,
  SiPytest,
} from "react-icons/si";
import {
  FiServer,
  FiDatabase,
  FiLayout,
  FiCloud,
  FiZap,
  FiCheckCircle,
  FiLayers,
  FiGitBranch,
} from "react-icons/fi";

export const stackGroups = [
  {
    id: "backend",
    title: "Backend (núcleo)",
    description:
      "Mi enfoque principal: APIs REST limpias y mantenibles con FastAPI, arquitectura por capas y código listo para producción.",
    icon: FiServer,
    accent: "from-brand-500/30 to-brand-500/0",
    items: [
      { name: "Python", icon: SiPython, level: "Principal" },
      { name: "FastAPI", icon: SiFastapi, level: "Principal" },
      { name: "SQLAlchemy", icon: SiSqlalchemy, level: "Producción" },
      { name: "Pydantic", icon: SiPydantic, level: "Producción" },
      { name: "Alembic", icon: FiLayers, level: "Migraciones" },
    ],
  },
  {
    id: "data",
    title: "Bases de datos",
    description:
      "Modelado relacional, optimización de consultas y administración en entornos reales de producción.",
    icon: FiDatabase,
    accent: "from-sky-500/30 to-sky-500/0",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "Principal" },
      { name: "MariaDB", icon: SiMariadb, level: "Producción" },
      { name: "MySQL", icon: SiMysql, level: "Producción" },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Cloud",
    description:
      "Empaquetado, integración continua y despliegue en la nube. Actualmente preparando la certificación AWS Cloud Practitioner.",
    icon: FiCloud,
    accent: "from-amber-500/30 to-amber-500/0",
    items: [
      { name: "Docker", icon: SiDocker, level: "Producción" },
      { name: "AWS", icon: FiCloud, level: "En progreso" },
      { name: "GitHub Actions", icon: SiGithubactions, level: "CI/CD" },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    id: "payments-ai",
    title: "Pagos & IA",
    description:
      "Integración de cobros reales con Stripe y de modelos de lenguaje (OpenAI / Claude) en flujos backend.",
    icon: FiZap,
    accent: "from-violet-500/30 to-violet-500/0",
    items: [
      { name: "Stripe", icon: SiStripe, level: "Pagos & webhooks" },
      { name: "OpenAI API", icon: SiOpenai, level: "LLM" },
      { name: "Anthropic / Claude", icon: SiAnthropic, level: "LLM" },
    ],
  },
  {
    id: "quality",
    title: "Testing & Calidad",
    description:
      "Buenas prácticas como base: pruebas automatizadas, validación de datos y arquitectura limpia por capas.",
    icon: FiCheckCircle,
    accent: "from-emerald-500/30 to-emerald-500/0",
    items: [
      { name: "pytest", icon: SiPytest, level: "Testing" },
      { name: "Arquitectura limpia", icon: FiLayers, level: "Services / Repos" },
      { name: "CI/CD", icon: FiGitBranch, level: "Automatización" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & otros (producción)",
    description:
      "Capacidad full stack: construyo interfaces con React/Next.js y he trabajado con otros stacks backend en producción.",
    icon: FiLayout,
    accent: "from-rose-500/30 to-rose-500/0",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Laravel · NestJS · Node", icon: SiNodedotjs },
    ],
  },
];

export const marqueeStack = [
  "Python",
  "FastAPI",
  "SQLAlchemy",
  "PostgreSQL",
  "Stripe",
  "Docker",
  "AWS",
  "pytest",
  "Alembic",
  "OpenAI",
  "GitHub Actions",
  "Pydantic",
  "React",
  "Next.js",
];
