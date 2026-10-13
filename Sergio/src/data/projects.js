export const projects = [
  {
    id: "sueldin",
    title: "Sueldin",
    subtitle: "Control de gastos e ingresos personales",
    period: "2026",
    kind: "Proyecto personal",
    tint: "#2563eb",
    description:
      "Aplicación web de finanzas personales que sustituye a una hoja de cálculo propia: movimientos (gasto, ingreso y transferencia), presupuesto estimado frente a real por categoría, saldos por cuenta y resúmenes semanales, mensuales y anuales con panel de gráficas.",
    highlights: [
      "Backend en Python / FastAPI con SQLAlchemy 2, Alembic y Pydantic v2, y persistencia en PostgreSQL.",
      "API REST documentada con OpenAPI. Cuentas y categorías como entidades sin límites artificiales y reglas de validación por tipo de movimiento aplicadas en el backend.",
      "Frontend en React y TypeScript con Vite.",
      "Script idempotente de importación del Excel original y despliegue completo con un único docker-compose.",
    ],
    stack: ["Python", "FastAPI", "SQLAlchemy 2", "Alembic", "Pydantic v2", "PostgreSQL", "React", "TypeScript", "Vite", "Docker Compose"],
  },
  {
    id: "codecoach",
    title: "CodeCoach",
    subtitle: "Gestión de clases y ERP de alumnos para la enseñanza de programación",
    period: "2026",
    kind: "Proyecto personal",
    tint: "#2e5c4c",
    description:
      "Plataforma pensada para academias y profesores particulares de programación: combina la resolución de ejercicios asistida por IA con un ERP ligero de alumnos (matrícula, horas de clase, pagos y deuda por alumno), todo desde un mismo panel de profesor.",
    highlights: [
      "Backend en Java 17 / Spring Boot 4, organizado en módulos por dominio (usuarios, cursos, ejercicios, entregas, workspaces) comunicados solo a través de su capa de Service. Autenticación JWT y autorización en dos capas: rol en el controller y propiedad del recurso en el servicio.",
      "Frontend en React 19 / TypeScript con Vite, TanStack Query para el estado de servidor y Tailwind con tokens semánticos (modo oscuro).",
      "Módulo de IA generativa como servicio independiente (Python / FastAPI) con DeepSeek: pistas guiadas sobre un ejercicio (no autocompletado) y generación de resúmenes y flashcards a partir de la teoría en PDF, con extracción de texto vía PDFBox.",
      "PostgreSQL con Flyway como única fuente de verdad del esquema (ddl-auto=validate). Tests unitarios de servicios con JUnit 5 + Mockito + AssertJ.",
      "CI con GitHub Actions (build y test de backend, frontend e IA, y build de las tres imágenes Docker en cada push). Orquestación con Kubernetes y despliegue en curso sobre OVHCloud — demo pública disponible en breve.",
    ],
    stack: ["Java 17", "Spring Boot 4", "JWT", "React 19", "TypeScript", "TanStack Query", "FastAPI", "DeepSeek", "PostgreSQL", "Flyway", "JUnit 5", "Docker", "Kubernetes", "GitHub Actions"],
  },
];
