import { education, certifications, languages } from "../data/profile";
import Reveal, { SectionTitle } from "../components/Reveal";

export default function Education() {
  return (
    <section id="formacion" className="px-4 py-20 sm:px-8 scroll-mt-10">
      <div className="max-w-[1400px] mx-auto">
        <SectionTitle>Formación</SectionTitle>

        <div className="grid gap-12 mt-14 lg:grid-cols-3">
          <Reveal>
            <div className="eyebrow">Educación</div>
            <h3 className="mt-3 text-3xl leading-none font-display">{education.title}</h3>
            <p className="mt-2 text-muted">
              {education.org} · {education.year}
            </p>
          </Reveal>

          <Reveal delay={1}>
            <div className="eyebrow">Certificaciones</div>
            <ul className="mt-3 space-y-5">
              {certifications.map((c) => (
                <li key={c.title}>
                  <h3 className="text-xl leading-tight font-display">{c.title}</h3>
                  <p className="text-muted">
                    {c.org} · {c.year}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="eyebrow">Idiomas</div>
            <ul className="mt-3 space-y-5">
              {languages.map((l) => (
                <li key={l.name}>
                  <h3 className="text-3xl leading-none font-display">{l.name}</h3>
                  <p className="text-muted">{l.level}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
