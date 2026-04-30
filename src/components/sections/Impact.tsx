import { Container } from "@/components/primitives/Container";
import { NumberStat } from "@/components/primitives/NumberStat";
import { Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { impact } from "@/lib/content";

export const Impact = () => {
  const t = impact.fr;
  return (
    <Section id="impact" tone="navy" className="overflow-hidden">
      <Container className="relative">
        <SectionHeader number={t.section} label={t.label} title={t.title} light />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {t.stats.map((s) => (
            <NumberStat key={s.label} value={s.value} label={s.label} light size="lg" />
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <blockquote className="font-display text-3xl md:text-5xl text-offwhite leading-tight">
              <span className="text-sand">"</span>
              {t.quote}
              <span className="text-sand">"</span>
            </blockquote>
            <div className="mt-6 eyebrow text-sand">— SahelSky Manifesto</div>
          </div>
          <div className="lg:col-span-5">
            <SmartImage
              src="/images/sahel-landscape.webp"
              alt="Paysage sahélien — dunes et horizon mauritanien"
              aspect="aspect-[5/4]"
              className="rounded-sm"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};
