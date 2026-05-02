import { Container } from "@/components/primitives/Container";
import { Reveal, Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { tech } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Tech = () => {
  const t = tech.fr;
  return (
    <Section id="apropos" tone="soft" className="overflow-hidden">
      <div
        aria-hidden
        className="glow-orb"
        style={{
          width: 560,
          height: 560,
          top: "30%",
          left: "-20%",
          background:
            "radial-gradient(circle, hsl(30 51% 64% / 0.18) 0%, transparent 65%)",
          animation: "orb-drift-1 30s ease-in-out infinite",
        }}
      />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <SectionHeader number={t.section} label={t.label} title={t.title} />
          </div>
          <Reveal delay={0.15} className="lg:col-span-5">
            <SmartImage
              src="/tech-pcb-vertical.png"
              alt="Carte électronique embarquée du flight controller SahelSky"
              aspect="aspect-[3/4]"
              objectFit="contain"
              className="rounded-sm border border-border"
              caption="Render conceptuel — production prévue 2026"
            />
          </Reveal>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-px bg-border border border-border">
          {t.cols.map((c, i) => {
            const featured = i === 1;
            return (
              <Reveal key={c.title} delay={i * 0.1}>
                <div
                  className={cn(
                    "relative bg-offwhite p-8 md:p-10 h-full transition-all duration-300 hover:bg-sand-soft/30",
                    featured && "ring-1 ring-ochre/30"
                  )}
                >
                  {featured && (
                    <span
                      aria-hidden
                      className="absolute top-0 left-0 right-0 h-[2px] bg-ochre"
                    />
                  )}
                  <span className="font-display text-xs text-ochre tabular-nums mb-6 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-navy mb-4">
                    {c.title}
                  </h3>
                  <p className="text-sm text-charcoal/80 leading-relaxed mb-6">
                    {c.body}
                  </p>
                  <ul className="space-y-2 pt-5 border-t border-border">
                    {c.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-center gap-3 text-sm text-charcoal/85"
                      >
                        <span className="h-1 w-1 rounded-full bg-ochre" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};
