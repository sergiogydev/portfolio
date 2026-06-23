import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import Section from "../../components/ui/Section";
import Reveal from "../../components/ui/Reveal";
import { profile } from "../../data/profile";

const channels = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    primary: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "Sergio García Yugueros",
    href: profile.linkedin,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: profile.githubHandle,
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <Section id="contact" className="pb-32">
      <div className="relative overflow-hidden border rounded-3xl border-zinc-200 dark:border-white/10 bg-gradient-to-br from-zinc-50 via-zinc-50 to-brand-500/10 dark:from-zinc-900/60 dark:via-zinc-900/40 dark:to-brand-500/10">
        <div
          className="absolute inset-0 bg-grid opacity-40"
          aria-hidden
        />
        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-brand-500/10"
          aria-hidden
        />

        <div className="relative grid grid-cols-1 gap-10 p-8 sm:p-12 lg:p-16 lg:grid-cols-2">
          {/* Left */}
          <Reveal>
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-brand-600 dark:text-brand-400">
              06 · Contacto
            </div>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl">
              ¿Tienes un proyecto backend en mente?
            </h2>
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Estoy abierto a oportunidades como Backend Engineer (Python, FastAPI, APIs REST, PostgreSQL, AWS) y a posiciones full stack. La forma más rápida de contactarme es por email.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-full bg-brand-500 text-zinc-950 hover:bg-brand-400 transition-colors shadow-lg shadow-brand-500/20"
              >
                Escríbeme <FiArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-full border border-zinc-300 dark:border-white/15 bg-white/70 dark:bg-zinc-900/50 backdrop-blur-md text-zinc-800 dark:text-zinc-100 hover:border-brand-500/50 transition-colors"
              >
                <FiLinkedin className="w-4 h-4" /> LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-2 mt-6 font-mono text-xs text-zinc-500 dark:text-zinc-500">
              <FiMapPin className="w-3.5 h-3.5" /> {profile.location}
            </div>
          </Reveal>

          {/* Right */}
          <Reveal delay={1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex flex-col h-full p-4 border rounded-xl border-zinc-200 dark:border-white/10 bg-white/70 dark:bg-zinc-950/40 backdrop-blur-md hover:border-brand-500/40 hover:bg-white dark:hover:bg-zinc-900/60 transition-colors group"
                  >
                    <span className="flex items-center justify-between">
                      <span className="inline-flex items-center justify-center w-9 h-9 text-brand-600 dark:text-brand-400 bg-brand-500/10 rounded-lg">
                        <c.icon className="w-4 h-4" />
                      </span>
                      <FiArrowUpRight className="w-4 h-4 text-zinc-400 dark:text-zinc-600 group-hover:text-brand-500 transition-colors" />
                    </span>
                    <span className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-500">
                      {c.label}
                    </span>
                    <span className="mt-1 text-sm font-medium break-all text-zinc-900 dark:text-zinc-100">
                      {c.value}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
