import { motion } from "framer-motion";
import { profile } from "../data/profile";

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "GitHub", href: profile.github },
  { label: "CV", href: profile.cvUrl },
];

export default function Contact() {
  return (
    <section id="contacto" className="px-4 pt-24 pb-10 text-center sm:px-8 scroll-mt-10">
      <div className="eyebrow">¿Trabajamos juntos?</div>
      <motion.a
        href={`mailto:${profile.email}`}
        className="block mt-4 font-display text-[clamp(2.8rem,8vw,8rem)] leading-[0.92] text-fg"
        whileHover={{ scale: 1.03, rotate: -1.5 }}
        transition={{ type: "spring", stiffness: 200, damping: 14 }}
      >
        Hablemos
      </motion.a>
      <a
        href={`mailto:${profile.email}`}
        className="inline-block mt-3 text-xs tracking-[0.2em] uppercase text-muted hover:text-fg transition-colors"
      >
        {profile.email}
      </a>

      <ul className="flex flex-wrap justify-center mt-12 gap-x-8 gap-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-lg tracking-wide transition-colors font-display text-fg hover:text-accent"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-16 text-[11px] tracking-[0.22em] uppercase text-faint">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </section>
  );
}
