import { motion } from "framer-motion";

const experiences = [
  {
    title: "Programador Full Stack",
    company: "Soluciones Smart de Territorio",
    period: "Septiembre 2025 – Actualidad",
    location: "León",
    description: "Desarrollo de aplicaciones web participando tanto en tareas de frontend como de backend, trabajando en equipo y aplicando buenas prácticas de desarrollo en entornos reales.",
    color: "indigo"
  },
  {
    title: "Prácticas Universitarias",
    company: "CDS (HP Enterprise Company)",
    period: "Octubre 2024 – Enero 2025",
    location: "León (Híbrido)",
    description: "Desarrollo de aplicaciones web utilizando Next.js, adquiriendo experiencia práctica en proyectos profesionales y flujos de trabajo reales.",
    color: "purple"
  },
  {
    title: "Prácticas Universitarias",
    company: "Certitec",
    period: "Julio 2024 – Septiembre 2024",
    location: "Astorga",
    description: "Desarrollo de soluciones de programación y trabajo con bases de datos SQL, reforzando la lógica y el enfoque práctico del desarrollo.",
    color: "pink"
  },
  {
    title: "Técnico",
    company: "Electro Garpa S.L.",
    period: "Julio 2022 – Septiembre 2025",
    location: "Astorga",
    description: "Experiencia clave en organización, responsabilidad y resolución de problemas, valores que aplico directamente en el desarrollo de software.",
    color: "blue"
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 mx-auto scroll-mt-16 lg:scroll-mt-32"
    >
      {/* Title */}
      <motion.div 
        className="mb-6 sm:mb-8 lg:mb-10"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="block mb-2 text-lg sm:text-xl lg:text-2xl font-bold tracking-wide bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent uppercase">
          Experiencia
        </span>
      </motion.div>

      {/* Content */}
      <div className="space-y-6 sm:space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.02, x: 4 }}
          >
            <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-${exp.color}-400 to-${exp.color}-600 transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300`} />
            
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
              {exp.title} · <span className="text-indigo-600 dark:text-indigo-400">{exp.company}</span>
            </h3>
            <p className="mb-3 text-sm sm:text-base text-slate-500 dark:text-slate-400 flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              {exp.period} · {exp.location}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
