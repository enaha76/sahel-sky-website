import { Container } from "@/components/primitives/Container";
import { Reveal, Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { modules, solution } from "@/lib/content";

export const Solution = () => {
  const t = solution.fr;
  return (
    <Section id="plateforme" tone="soft" className="overflow-hidden">
      <div
        aria-hidden
        className="glow-orb"
        style={{
          width: 560,
          height: 560,
          top: "10%",
          right: "-18%",
          background:
            "radial-gradient(circle, hsl(30 51% 64% / 0.2) 0%, transparent 65%)",
          animation: "orb-drift-2 26s ease-in-out infinite",
        }}
      />
      <Container className="relative">
        <SectionHeader number={t.section} label={t.label} title={t.title} sub={t.sub} />

        <div className="mt-20 relative">
          {/* Center hub */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center relative">
            {/* SVG connector lines (desktop only) */}
            <svg
              className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none text-sand"
              aria-hidden
              preserveAspectRatio="none"
              viewBox="0 0 100 100"
            >
              <g stroke="currentColor" strokeWidth="0.15" fill="none" opacity="0.7" strokeDasharray="0.6 0.6">
                <path d="M 38 28 Q 46 32 50 50" />
                <path d="M 38 72 Q 46 68 50 50" />
                <path d="M 62 28 Q 54 32 50 50" />
                <path d="M 62 72 Q 54 68 50 50" />
              </g>
            </svg>

            <div className="grid gap-6 relative">
              {modules.slice(0, 2).map((m, i) => (
                <Reveal key={m.id} delay={i * 0.08}>
                  <ModulePill module={m} index={i + 1} />
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.2} className="hidden lg:block relative">
              <div className="aspect-square w-72 relative">
                <SmartImage
                  src="/center-hub-desktop.png"
                  alt="Concept de drone modulaire SahelSky avec quatre plugs interchangeables"
                  aspect="aspect-square"
                  objectFit="contain"
                  className="rounded-sm"
                  caption="Schéma conceptuel"
                />
                <div className="absolute inset-0 ring-1 ring-navy/10 rounded-sm" />
                <div className="absolute -inset-3 rounded-full border border-sand/40 animate-[drift_8s_ease-in-out_infinite]" aria-hidden />
              </div>
            </Reveal>
            <div className="grid gap-6 relative">
              {modules.slice(2, 4).map((m, i) => (
                <Reveal key={m.id} delay={i * 0.08 + 0.1}>
                  <ModulePill module={m} index={i + 3} />
                </Reveal>
              ))}
            </div>
          </div>
          <div className="lg:hidden mt-8">
            <SmartImage
              src="/center-hub-mobile.png"
              alt="Concept de drone modulaire SahelSky"
              aspect="aspect-[4/5]"
              objectFit="contain"
              className="rounded-sm"
              caption="Schéma conceptuel"
            />
          </div>
        </div>

        {/* Modularity advantages strip */}
        <div className="mt-20 flex flex-wrap gap-3">
          {t.advantages.map((a, i) => (
            <Reveal key={a} delay={i * 0.06}>
              <div className="flex items-center gap-3 bg-offwhite border border-border px-5 py-3 rounded-sm hover:border-ochre hover:-translate-y-0.5 transition-all duration-200">
                <span className="font-display text-xs text-ochre tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-navy">{a}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
};

const ModulePill = ({
  module: m,
  index,
}: {
  module: (typeof modules)[number];
  index: number;
}) => (
  <a
    href={`#modules`}
    className="group block bg-offwhite border border-border p-5 rounded-sm hover:border-navy hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 focus-ring"
  >
    <div className="flex items-baseline gap-3 mb-2">
      <span className="font-display text-xs text-ochre tabular-nums">
        0{index}
      </span>
      <span className="font-display text-base font-semibold text-navy group-hover:text-ochre transition-colors">
        {m.name}
      </span>
    </div>
    <p className="text-sm text-charcoal/75 leading-relaxed">{m.short}</p>
  </a>
);
