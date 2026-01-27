import { motion } from "framer-motion";

export default function Education() {
  return (
    <section
      id="education"
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
          Educación
        </span>
      </motion.div>

      {/* Content */}
      <motion.div
        className="group relative p-8 bg-gradient-to-br from-white to-indigo-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-indigo-200 dark:border-indigo-800 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03, y: -5 }}
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-400 to-purple-600 opacity-10 rounded-bl-full transform group-hover:scale-150 transition-transform duration-500" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-tr from-purple-400 to-pink-600 opacity-10 rounded-tr-full transform group-hover:scale-150 transition-transform duration-500" />
        
        {/* Icon */}
        <div className="relative mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl shadow-lg text-3xl">
            🎓
          </div>
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
            Grado en Ingeniería Informática
          </h3>
          <p className="mb-4 text-base sm:text-lg text-indigo-600 dark:text-indigo-400 font-semibold flex items-center gap-2">
            🏦 Universidad de León
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Formación universitaria enfocada al desarrollo de software,
            programación, bases de datos y fundamentos de la ingeniería
            informática.
          </p>
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
      </motion.div>
    </section>
  );
}
