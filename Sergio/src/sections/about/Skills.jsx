import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    description: "Trabajo principalmente con React, creando interfaces limpias, reutilizables y centradas en la experiencia de usuario.",
    skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS"],
    icon: "🎨",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend",
    description: "Experiencia desarrollando lógica de negocio y APIs con Node.js, así como trabajando con bases de datos SQL.",
    skills: ["Node.js", "Express", "SQL", "REST APIs"],
    icon: "⚙️",
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Otras Tecnologías",
    description: "Experiencia con múltiples lenguajes y frameworks que me permiten adaptarme con facilidad a distintos entornos.",
    skills: ["Java", "Python", "Laravel", "Flutter", "Kotlin"],
    icon: "🛠️",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Habilidades Profesionales",
    description: "Destaco por mi responsabilidad, trabajo en equipo, aprendizaje continuo y cumplimiento de plazos priorizando la calidad del código.",
    skills: ["Trabajo en Equipo", "Responsabilidad", "Aprendizaje Continuo", "Organización"],
    icon: "👥",
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
  return (
    <section
      id="skills"
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
          Skills
        </span>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={index}
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-10 rounded-bl-full transition-all duration-300 group-hover:scale-150`} />
            
            <div className="relative">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {category.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mb-4">
                {category.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className={`px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-gradient-to-r ${category.color} text-white shadow-md`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
