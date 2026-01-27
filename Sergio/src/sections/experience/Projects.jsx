import { motion } from "framer-motion";

const projectHighlights = [
  {
    title: "Proyectos Personales",
    description: "He desarrollado diversos proyectos personales enfocados principalmente en el desarrollo frontend con React.",
    icon: "🖥️",
    gradient: "from-blue-500 to-indigo-600"
  },
  {
    title: "Arquitectura de Componentes",
    description: "Consolidación de conocimientos en arquitectura de componentes, reutilización de código y buenas prácticas de desarrollo.",
    icon: "🧩",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    title: "Repositorio en GitHub",
    description: "Mantengo un repositorio en crecimiento donde publico aplicaciones web utilizando React y Node.js.",
    icon: "📚",
    gradient: "from-green-500 to-teal-600"
  },
  {
    title: "Aprendizaje Continuo",
    description: "Cada proyecto está pensado como una oportunidad de aprendizaje, priorizando la calidad del código y la resolución de problemas reales.",
    icon: "🎯",
    gradient: "from-orange-500 to-red-600"
  }
];

export default function Projects() {
  return (
    <section
      id="projects"
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
          Proyectos
        </span>
      </motion.div>

      {/* Content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {projectHighlights.map((item, index) => (
          <motion.div
            key={index}
            className="group relative p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <div className={`absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:opacity-20`} />
            
            <div className="relative">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA para GitHub */}
      <motion.div
        className="p-6 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-xl text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        whileHover={{ scale: 1.02 }}
      >
        <p className="text-white text-base sm:text-lg lg:text-xl mb-4 font-medium">
          🚀 Puedes acceder a mi repositorio de GitHub desde la barra de navegación
        </p>
        <a
          href="https://github.com/reactstackdev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-white text-indigo-600 font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
        >
          Ver Repositorio
        </a>
      </motion.div>
    </section>
  );
}
