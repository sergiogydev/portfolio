import {
  SiPython,
  SiFastapi,
  SiLaravel,
  SiNestjs,
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
  SiFlutter,
  SiKotlin,
  SiGithub,
} from "react-icons/si";
import {
  FiServer,
  FiDatabase,
  FiLayout,
  FiTerminal,
  FiCpu,
  FiShield,
  FiZap,
} from "react-icons/fi";

export const stackGroups = [
  {
    id: "backend",
    title: "Backend",
    description:
      "Mi enfoque principal: diseñar APIs limpias, mantenibles y listas para producción.",
    icon: FiServer,
    accent: "from-brand-500/30 to-brand-500/0",
    items: [
      { name: "Python", icon: SiPython, level: "Principal" },
      { name: "FastAPI", icon: SiFastapi, level: "Principal" },
      { name: "Laravel", icon: SiLaravel, level: "Producción" },
      { name: "NestJS", icon: SiNestjs, level: "Producción" },
      { name: "Node.js", icon: SiNodedotjs, level: "Producción" },
    ],
  },
  {
    id: "data",
    title: "Bases de datos",
    description:
      "Modelado relacional, optimización de consultas y administración en entornos reales.",
    icon: FiDatabase,
    accent: "from-sky-500/30 to-sky-500/0",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, level: "Principal" },
      { name: "MariaDB", icon: SiMariadb, level: "Producción" },
      { name: "MySQL", icon: SiMysql, level: "Producción" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    description:
      "Capacidad full stack: construyo interfaces modernas con React y Next.js cuando el proyecto lo requiere.",
    icon: FiLayout,
    accent: "from-violet-500/30 to-violet-500/0",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    description:
      "Empaquetado, despliegue y gestión de entornos productivos.",
    icon: FiTerminal,
    accent: "from-amber-500/30 to-amber-500/0",
    items: [
      { name: "Git", icon: SiGit },
      { name: "Docker", icon: SiDocker },
      { name: "GitHub", icon: SiGithub },
      { name: "Cisco CyberOps", icon: FiShield },
    ],
  },
  {
    id: "mobile",
    title: "Mobile & Cross-platform",
    description:
      "Experiencia construyendo apps nativas y multiplataforma como complemento al backend.",
    icon: FiCpu,
    accent: "from-rose-500/30 to-rose-500/0",
    items: [
      { name: "Flutter", icon: SiFlutter },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    id: "ai",
    title: "IA & Productividad",
    description:
      "Uso intensivo de IA para acelerar el flujo de desarrollo manteniendo calidad y revisión humana.",
    icon: FiZap,
    accent: "from-emerald-500/30 to-emerald-500/0",
    items: [
      { name: "Claude", icon: FiCpu },
      { name: "GitHub Copilot", icon: SiGithub },
      { name: "Cursor", icon: FiTerminal },
    ],
  },
];

export const marqueeStack = [
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Laravel",
  "NestJS",
  "Node.js",
  "Docker",
  "MariaDB",
  "React",
  "Next.js",
  "Git",
  "MySQL",
];
