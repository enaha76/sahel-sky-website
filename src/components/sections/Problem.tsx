import { Container } from "@/components/primitives/Container";
import { NumberStat } from "@/components/primitives/NumberStat";
import { Reveal, Section, SectionHeader } from "@/components/primitives/Section";
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
          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-20">
            <p className="text-lg text-charcoal/80 leading-relaxed">{t.body}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid sm:grid-cols-3 gap-px bg-border border border-border">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="bg-offwhite p-8 md:p-10 h-full">
                <NumberStat value={s.value} label={s.label} size="lg" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};
