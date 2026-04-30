import { Container } from "@/components/primitives/Container";
import { Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { modules, solution } from "@/lib/content";

export const Solution = () => {
  const t = solution.fr;
  return (
    <Section id="plateforme" tone="soft">
      <Container>
        <SectionHeader number={t.section} label={t.label} title={t.title} sub={t.sub} />

        <div className="mt-20 relative">
          {/* Center hub */}
          <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            <div className="grid gap-6">
              {modules.slice(0, 2).map((m, i) => (
                <ModulePill key={m.id} module={m} index={i + 1} />
              ))}
            </div>
            <div className="hidden lg:block relative">
              <div className="aspect-square w-72 relative">
                <SmartImage
                  src="/images/modular-concept.webp"
                  alt="Concept de drone modulaire SahelSky avec quatre plugs interchangeables"
                  aspect="aspect-square"
                  className="rounded-sm"
                />
                <div className="absolute inset-0 ring-1 ring-navy/10 rounded-sm" />
              </div>
            </div>
            <div className="grid gap-6">
              {modules.slice(2, 4).map((m, i) => (
                <ModulePill key={m.id} module={m} index={i + 3} />
              ))}
            </div>
          </div>
          <div className="lg:hidden mt-8">
            <SmartImage
              src="/images/modular-concept.webp"
              alt="Concept de drone modulaire SahelSky"
              aspect="aspect-[4/3]"
              className="rounded-sm"
            />
          </div>
        </div>

        {/* Modularity advantages strip */}
        <div className="mt-20 flex flex-wrap gap-3">
          {t.advantages.map((a, i) => (
            <div
              key={a}
              className="flex items-center gap-3 bg-offwhite border border-border px-5 py-3 rounded-sm hover:border-ochre transition-colors"
            >
              <span className="font-display text-xs text-ochre tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-medium text-navy">{a}</span>
            </div>
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
    className="group block bg-offwhite border border-border p-5 rounded-sm hover:border-navy transition-all duration-200 hover:-translate-y-0.5"
  >
    <div className="flex items-baseline gap-3 mb-2">
      <span className="font-display text-xs text-ochre tabular-nums">
        0{index}
      </span>
      <span className="font-display text-base font-semibold text-navy">
        {m.name}
      </span>
    </div>
    <p className="text-sm text-charcoal/70 leading-relaxed">{m.short}</p>
  </a>
);
