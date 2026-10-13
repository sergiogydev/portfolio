import {
  SiOpenjdk,
  SiSpringboot,
  SiKotlin,
  SiPython,
  SiFastapi,
  SiSqlalchemy,
  SiPydantic,
  SiNodedotjs,
  SiNestjs,
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiPostgresql,
  SiMariadb,
  SiMongodb,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiStripe,
  SiPytest,
  SiJsonwebtokens,
} from "react-icons/si";

export const stackGroups = [
  {
    title: "Backend",
    items: [
      { name: "Java", icon: SiOpenjdk },
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "Python", icon: SiPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "REST APIs" },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "NestJS", icon: SiNestjs },
      { name: "Kotlin", icon: SiKotlin },
    ],
  },
  {
    title: "Arquitectura",
    items: [{ name: "Clean Architecture" }, { name: "SOLID" }, { name: "DDD" }],
  },
  {
    title: "Bases de datos",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MariaDB", icon: SiMariadb },
      { name: "MongoDB", icon: SiMongodb },
      { name: "SQL Server" },
    ],
  },
  {
    title: "DevOps",
    items: [
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
      { name: "CI/CD" },
      { name: "Git", icon: SiGit },
    ],
  },
  {
    title: "IA Generativa",
    items: [
      { name: "LLM Integration" },
      { name: "OpenAI API" },
      { name: "RAG" },
      { name: "AI Agents" },
    ],
  },
  {
    title: "Pagos",
    items: [{ name: "Stripe", icon: SiStripe }],
  },
  {
    title: "Frontend (secundario)",
    items: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "JavaScript", icon: SiJavascript },
    ],
  },
  {
    title: "Otros",
    items: [
      { name: "pytest", icon: SiPytest },
      { name: "Pydantic", icon: SiPydantic },
      { name: "Playwright" },
      { name: "JWT", icon: SiJsonwebtokens },
      { name: "SQLAlchemy", icon: SiSqlalchemy },
      { name: "Alembic" },
    ],
  },
];

export const marqueeStack = [
  "Java",
  "Spring Boot",
  "FastAPI",
  "PostgreSQL",
  "Docker",
  "Kubernetes",
  "REST APIs",
  "OpenAI",
  "NestJS",
  "Clean Architecture",
];
