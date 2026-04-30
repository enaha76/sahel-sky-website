import { Container } from "@/components/primitives/Container";
import { Section, SectionHeader } from "@/components/primitives/Section";
import { roadmap } from "@/lib/content";

export const Roadmap = () => {
  const t = roadmap.fr;
  return (
    <Section tone="soft">
      <Container>
        <SectionHeader number={t.section} label={t.label} title={t.title} />

        <div className="mt-20 relative">
          <div className="absolute top-[34px] left-0 right-0 h-px bg-border hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-10">
            {t.items.map((it, i) => (
              <div key={i} className="relative">
                <div className="hidden md:block absolute top-[30px] left-0 w-2 h-2 rounded-full bg-ochre ring-4 ring-sand-soft/60" />
                <div className="md:pt-16">
                  <div className="font-display text-xs text-ochre tabular-nums mb-2">
                    {it.year}
                  </div>
                  <h3 className="font-display text-base font-semibold text-navy mb-2 leading-tight">
                    {it.title}
                  </h3>
                  <p className="text-xs text-charcoal/70 leading-relaxed">
                    {it.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};
