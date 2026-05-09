import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-zinc-200 dark:border-white/10 bg-white/40 dark:bg-zinc-950/60">
      <div className="flex flex-col gap-6 px-4 py-10 mx-auto max-w-6xl sm:px-6 lg:px-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-1">
          <span className="flex items-center gap-2 font-mono text-sm text-zinc-900 dark:text-zinc-100">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-brand-500 text-zinc-950 font-bold text-xs">
              S
            </span>
            sergio<span className="text-brand-500">.dev</span>
          </span>
          <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
            © {year} {profile.name}. Diseñado y desarrollado con React.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 transition-colors"
            aria-label="Email"
          >
            <FiMail className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-4 h-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-4 h-4" />
          </a>
          <a
            href="#top"
            className="inline-flex items-center gap-1 px-3 h-10 ml-2 rounded-full border border-zinc-200 dark:border-white/10 text-xs font-mono text-zinc-700 dark:text-zinc-200 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-500/50 transition-colors"
          >
            <FiArrowUp className="w-3.5 h-3.5" /> arriba
          </a>
        </div>
      </div>
    </footer>
  );
}
