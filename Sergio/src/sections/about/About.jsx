import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
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
          ¿Quién soy?
        </span>
      </motion.div>

      {/* Content */}
      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        <motion.div
          className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-indigo-300 dark:hover:border-indigo-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            Soy <strong className="text-indigo-600 dark:text-indigo-400">Sergio García Yugueros</strong>, desarrollador Full Stack con
            especial interés en el desarrollo frontend con <strong className="text-indigo-600 dark:text-indigo-400">React</strong> y
            experiencia en backend con <strong className="text-indigo-600 dark:text-indigo-400">Node.js</strong>.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-purple-300 dark:hover:border-purple-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            Me enfoco en crear aplicaciones web bien estructuradas y mantenibles,
            cuidando la experiencia de usuario y la calidad del código.
          </p>
        </motion.div>

        <motion.div
          className="p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-pink-300 dark:hover:border-pink-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          whileHover={{ scale: 1.02 }}
        >
          <p className="text-base sm:text-lg lg:text-xl text-slate-700 dark:text-slate-300">
            He trabajado en entornos profesionales donde el compromiso, la
            organización y el trabajo en equipo son fundamentales, valores que
            aplico también en el desarrollo de software.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
