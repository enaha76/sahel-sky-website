import { Container } from "@/components/primitives/Container";
import { NumberStat } from "@/components/primitives/NumberStat";
import { Reveal, Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { impact } from "@/lib/content";

export const Impact = () => {
  const t = impact.fr;
  return (
    <Section id="impact" tone="navy" className="overflow-hidden grain grain-dark">
      {/* Drifting topographic contour pattern */}
      <div
        aria-hidden
        className="absolute inset-0 topo-pattern opacity-[0.07] pointer-events-none"
      />
      {/* Soft warm sand-glow orbs */}
      <div
        aria-hidden
        className="glow-orb"
        style={{
          width: 520,
          height: 520,
          top: "-15%",
          left: "-10%",
          background:
            "radial-gradient(circle, hsl(33 51% 48% / 0.35) 0%, transparent 70%)",
          animation: "orb-drift-1 18s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          bottom: "-20%",
          right: "-15%",
          background:
            "radial-gradient(circle, hsl(30 51% 64% / 0.28) 0%, transparent 70%)",
          animation: "orb-drift-2 22s ease-in-out infinite",
        }}
      />

      <Container className="relative">
        <SectionHeader number={t.section} label={t.label} title={t.title} light />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {t.stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <NumberStat value={s.value} label={s.label} light size="lg" />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-12 gap-10 items-center">
          <Reveal className="lg:col-span-7">
            <blockquote className="font-display text-3xl md:text-5xl text-offwhite leading-tight">
              <span className="text-sand">"</span>
              {t.quote}
              <span className="text-sand">"</span>
            </blockquote>
            <div className="mt-6 eyebrow text-sand">— SahelSky Manifesto</div>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <SmartImage
              src="/Drone_manifeste.png"
              alt="Paysage sahélien — dunes et horizon mauritanien"
              aspect="aspect-[5/4]"
              className="rounded-sm"
              caption="Visuel conceptuel"
              captionTone="dark"
            />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
