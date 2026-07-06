import {
  FiArrowUpRight,
  FiGithub,
  FiGlobe,
  FiLinkedin,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import Reveal from "../../components/ui/Reveal";
import { Rule, Folio } from "../../components/ui/Rule";
import { profile } from "../../data/profile";

const channels = [
  {
    icon: FiMail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
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
  {
    icon: FiGlobe,
    label: "Web",
    value: profile.website.replace("https://", ""),
    href: profile.website,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative px-4 pt-20 pb-24 sm:px-6 lg:px-10 sm:pb-32">
      <Folio className="text-[9rem] leading-none -top-2 left-1/2 -translate-x-1/2 sm:text-[14rem] lg:text-[19rem]">
        06
      </Folio>

      <div className="relative z-10 max-w-6xl mx-auto">
        <Rule />
        <div className="py-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-muted text-center">
          06 · Contacto
        </div>
        <Rule />

        <Reveal
          as="h2"
          delay={1}
          className="max-w-3xl mx-auto mt-16 font-serif text-4xl leading-tight text-center text-ink sm:text-5xl lg:text-6xl"
        >
          ¿Tienes un proyecto <em className="italic text-accent">backend</em> en mente?
        </Reveal>

        <Reveal
          as="p"
          delay={2}
          className="max-w-xl mx-auto mt-6 text-base leading-relaxed text-center sm:text-lg text-ink-muted"
        >
          Estoy abierto a oportunidades como Backend Engineer (Python, FastAPI, APIs REST,
          PostgreSQL, AWS) y a posiciones full stack. La forma más rápida de contactarme es por
          email.
        </Reveal>

        <Reveal
          delay={3}
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mt-10"
        >
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono uppercase tracking-[0.1em] bg-ink text-paper hover:bg-accent transition-colors"
          >
            Escríbeme <FiArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 pb-0.5 text-sm border-b border-ink/30 text-ink hover:border-accent hover:text-accent transition-colors"
          >
            <FiLinkedin className="w-4 h-4" /> LinkedIn
          </a>
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-muted">
            <FiMapPin className="w-3.5 h-3.5" /> {profile.location}
          </span>
        </Reveal>

        <Reveal delay={4} className="mt-24">
          <Rule />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group py-7 sm:px-8 border-ink/10 ${
                  i % 2 === 1 ? "sm:border-l" : ""
                } ${i > 0 ? "lg:border-l" : ""}`}
              >
                <span className="flex items-center justify-between font-mono text-xs uppercase tracking-[0.2em] text-ink-muted">
                  <span className="inline-flex items-center gap-2">
                    <c.icon className="w-4 h-4" /> {c.label}
                  </span>
                  <FiArrowUpRight className="w-4 h-4 group-hover:text-accent transition-colors" />
                </span>
                <span className="block mt-3 text-base break-all text-ink group-hover:text-accent transition-colors">
                  {c.value}
                </span>
              </a>
            ))}
          </div>
          <Rule />
        </Reveal>
      </div>
    </section>
  );
}
