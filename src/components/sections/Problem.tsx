import { Container } from "@/components/primitives/Container";
import { NumberStat } from "@/components/primitives/NumberStat";
import { Section, SectionHeader } from "@/components/primitives/Section";
import { problem } from "@/lib/content";

export const Problem = () => {
  const t = problem.fr;
  return (
    <Section id="probleme" tone="default">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-6">
            <SectionHeader number={t.section} label={t.label} title={t.title} />
          </div>
          <div className="lg:col-span-6 lg:pt-20">
            <p className="text-lg text-charcoal/80 leading-relaxed">{t.body}</p>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-px bg-border border border-border">
          {t.stats.map((s) => (
            <div key={s.label} className="bg-offwhite p-8 md:p-10">
              <NumberStat value={s.value} label={s.label} size="lg" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
