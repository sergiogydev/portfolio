import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiDownload,
  FiGithub,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { profile, stats } from "../../data/profile";
import { marqueeStack } from "../../data/stack";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 overflow-hidden sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div className="absolute inset-0 bg-radial-glow" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-zinc-950/0 dark:via-zinc-950/0 dark:to-zinc-950"
        aria-hidden
      />

      <div className="relative max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Status pill */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 font-mono text-xs rounded-full border border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md text-zinc-700 dark:text-zinc-300"
        >
          <span className="relative flex w-2 h-2">
            <span className="absolute inline-flex w-full h-full rounded-full opacity-75 bg-brand-500 animate-ping" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-brand-500" />
          </span>
          Disponible para nuevas oportunidades
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl xl:text-7xl"
        >
          Construyo backends sólidos en{" "}
          <span className="text-transparent bg-gradient-to-r from-brand-400 via-brand-500 to-emerald-300 bg-clip-text text-shine">
            Python
          </span>
          ,
          <br className="hidden sm:block" /> APIs REST y bases de datos.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl"
        >
          Soy <span className="font-medium text-zinc-900 dark:text-zinc-100">Sergio García Yugueros</span>, Backend Developer con +4 años en sistemas reales.
          Especializado en <span className="text-zinc-900 dark:text-zinc-100">FastAPI</span>, <span className="text-zinc-900 dark:text-zinc-100">PostgreSQL</span> y arquitectura escalable, con capacidad full stack para construir el frontend cuando hace falta.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-3 mt-10"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors rounded-full shadow-lg bg-brand-500 text-zinc-950 hover:bg-brand-400 shadow-brand-500/20"
          >
            Hablemos <FiArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border rounded-full border-zinc-300 dark:border-white/15 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md text-zinc-800 dark:text-zinc-100 hover:border-brand-500/50"
          >
            Ver proyectos <FiArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium transition-colors border border-transparent rounded-full text-zinc-700 dark:text-zinc-300 hover:text-brand-600 dark:hover:text-brand-400"
          >
            <FiDownload className="w-4 h-4" /> Descargar CV
          </a>
        </motion.div>

        {/* Quick info row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center mt-8 font-mono text-xs gap-x-6 gap-y-2 sm:text-sm text-zinc-500 dark:text-zinc-500"
        >
          <span className="inline-flex items-center gap-2">
            <FiMapPin className="w-3.5 h-3.5" /> {profile.location}
          </span>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 transition-colors hover:text-brand-500"
          >
            <FiMail className="w-3.5 h-3.5" /> {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-brand-500"
          >
            <FiGithub className="w-3.5 h-3.5" /> {profile.githubHandle}
          </a>
        </motion.div>

        {/* Terminal preview */}
        <TerminalCard />

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-2 gap-px mt-12 overflow-hidden border rounded-2xl border-zinc-200 dark:border-white/10 sm:grid-cols-4 bg-zinc-200/60 dark:bg-white/5"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-5 bg-white dark:bg-zinc-950"
            >
              <div className="font-mono text-2xl font-semibold sm:text-3xl text-zinc-900 dark:text-zinc-50">
                {s.value}
              </div>
              <div className="mt-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Marquee tech bar */}
      <div className="relative mt-20 overflow-hidden border-y border-zinc-200/60 dark:border-white/10">
        <div className="flex gap-12 py-5 font-mono text-sm whitespace-nowrap text-zinc-500 dark:text-zinc-500 animate-marquee">
          {[...marqueeStack, ...marqueeStack].map((t, i) => (
            <span key={i} className="inline-flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500/60" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function TerminalCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative max-w-2xl mt-14"
    >
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-brand-500/40 via-brand-500/0 to-transparent blur-xl opacity-60" aria-hidden />
      <div className="relative overflow-hidden border shadow-xl rounded-2xl border-zinc-200 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
          </div>
          <span className="font-mono text-[11px] text-zinc-500 dark:text-zinc-500">
            ~/sergio — zsh
          </span>
          <span className="w-10" />
        </div>
        <pre className="px-5 py-5 font-mono text-[13px] leading-relaxed text-zinc-700 dark:text-zinc-300">
{`> whoami
sergio · backend developer

> cat stack.json`}
          <span className="text-zinc-900 dark:text-zinc-100">
{`
{
  "primary":   ["Python", "FastAPI"],
  "data":      ["PostgreSQL", "MariaDB"],
  "secondary": ["Laravel", "NestJS", "Node.js"],
  "frontend":  ["React", "Next.js"],
  "devops":    ["Docker", "Git"]
}`}
          </span>
{`

> status `}
          <span className="text-brand-500">Dispuesto a afrontar nuevos retos<span className="caret">▍</span></span>
        </pre>
      </div>
    </motion.div>
  );
}
