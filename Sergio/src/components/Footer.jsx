import { FiArrowUp } from "react-icons/fi";
import { profile } from "../data/profile";
import { Rule } from "./ui/Rule";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-10">
      <div className="max-w-6xl mx-auto">
        <Rule />
        <div className="flex flex-col gap-8 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-mono text-sm tracking-[0.15em] text-ink">
              S.G.Y  
            </span>
            <p className="max-w-sm mt-2 text-sm leading-relaxed text-ink-muted">
              © {year} {profile.name}.
            </p>
          </div>

          <div className="flex items-center gap-5 font-mono text-xs uppercase tracking-[0.15em]">
            <a
              href={`mailto:${profile.email}`}
              className="text-ink-muted hover:text-accent transition-colors"
            >
              Email
            </a>
            <span className="text-ink/20">·</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-ink/20">·</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span className="text-ink/20">·</span>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-ink hover:text-accent transition-colors"
            >
              Arriba <FiArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
