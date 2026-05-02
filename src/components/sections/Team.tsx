import { Container } from "@/components/primitives/Container";
import { Reveal, Section, SectionHeader } from "@/components/primitives/Section";
import { team } from "@/lib/content";
import { Linkedin } from "lucide-react";

export const Team = () => {
  const t = team.fr;
  return (
    <Section tone="default">
      <Container>
        <div className="max-w-3xl">
          <span className="eyebrow block mb-3">{t.eyebrow}</span>
          <SectionHeader number={t.section} label={t.label} title={t.title} />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {t.members.map((m, i) => (
            <Reveal key={m.name} delay={(i % 4) * 0.06}>
              <article className="group relative bg-offwhite p-6 h-full hover:bg-sand-soft/40 transition-all duration-300 overflow-hidden">
                <span
                  aria-hidden
                  className="absolute top-0 left-0 right-0 h-[2px] bg-ochre origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                />
                <div className="aspect-square bg-gradient-to-br from-sand-soft to-sand/40 mb-5 rounded-sm relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center font-display text-5xl text-navy/30 font-semibold transition-transform duration-500 group-hover:scale-110">
                    {m.name
                      .split(" ")
                      .map((s) => s[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <span className="absolute top-3 left-3 font-display text-xs text-navy/60 tabular-nums">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-base font-semibold text-navy mb-1">
                  {m.name}
                </h3>
                <p className="text-sm text-charcoal/75">{m.role}</p>
                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-slate-muted">{m.school}</span>
                  <a
                    href="#"
                    aria-label={`LinkedIn de ${m.name}`}
                    className="text-slate-muted hover:text-navy transition-colors focus-ring rounded-sm p-1 -m-1"
                  >
                    <Linkedin size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
