import { motion } from "framer-motion";
import logo from "../../assets/images/profile.png";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-indigo-950 dark:to-purple-950 opacity-50" />
      <motion.div 
        className="absolute top-20 -right-20 w-72 h-72 bg-indigo-300 dark:bg-indigo-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute -bottom-20 -left-20 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.1
          }}
        >
          <img
            src={logo}
            alt="Foto de Sergio"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 xl:w-64 xl:h-64 rounded-full shadow-2xl ring-4 ring-indigo-500/20 hover:ring-8 hover:ring-indigo-500/40 transition-all duration-300 hover:scale-105"
          />
        </motion.div>

        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 dark:text-slate-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent animate-gradient">
            Sergio
          </span>
        </motion.h1>

        <motion.p 
          className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 dark:text-slate-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Desarrollador Full Stack apasionado por crear soluciones web innovadoras.
        </motion.p>

        <motion.div
          className="flex gap-4 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="https://github.com/reactstackdev"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            Ver GitHub
          </a>
          <a
            href="/AltaCV_Template.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 border border-slate-200 dark:border-slate-700"
          >
            Descargar CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
