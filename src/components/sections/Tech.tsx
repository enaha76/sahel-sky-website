import { Container } from "@/components/primitives/Container";
import { Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { tech } from "@/lib/content";

export const Tech = () => {
  const t = tech.fr;
  return (
    <Section id="apropos" tone="soft">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeader number={t.section} label={t.label} title={t.title} />
          </div>
          <div className="lg:col-span-5">
            <SmartImage
              src="/images/tech-pcb.webp"
              alt="Carte électronique embarquée du flight controller SahelSky"
              aspect="aspect-[5/3]"
              className="rounded-sm border border-border"
            />
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border border border-border">
          {t.cols.map((c, i) => (
            <div key={c.title} className="bg-offwhite p-8 md:p-10">
              <span className="font-display text-xs text-ochre tabular-nums mb-6 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl font-semibold text-navy mb-4">
                {c.title}
              </h3>
              <p className="text-sm text-charcoal/75 leading-relaxed mb-6">
                {c.body}
              </p>
              <ul className="space-y-2 pt-5 border-t border-border">
                {c.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 text-sm text-charcoal/80"
                  >
                    <span className="h-1 w-1 rounded-full bg-ochre" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
