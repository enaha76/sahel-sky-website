import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/primitives/Container";
import { Reveal, Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { modules } from "@/lib/content";
import { cn } from "@/lib/utils";

type Module = (typeof modules)[number];

const PlugCard = ({
  m,
  i,
  bordered,
}: {
  m: Module;
  i: number;
  bordered?: boolean;
}) => (
  <article
    className={cn(
      "group relative bg-offwhite p-6 md:p-8 h-full flex flex-col overflow-hidden",
      bordered && "border border-border rounded-sm"
    )}
  >
    <span
      aria-hidden
      className="absolute top-0 left-0 right-0 h-[2px] bg-ochre origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
    />

    <figure className="m-0">
      <div className="overflow-hidden rounded-sm bg-sand-soft/30">
        <div className="transition-transform duration-700 ease-out group-hover:scale-[1.04]">
          <SmartImage
            src={m.image}
            alt={`${m.name} — vue conceptuelle en mission`}
            aspect="aspect-[4/3]"
            className="rounded-sm"
          />
        </div>
      </div>
      <figcaption className="mt-2 text-[11px] italic tracking-wide text-right text-slate-muted/85">
        Visuel conceptuel
      </figcaption>
    </figure>

    <div className="mt-6 flex items-baseline gap-3 mb-3">
      <span className="font-display text-xs text-ochre tabular-nums">
        0{i + 1}
      </span>
      <span className="eyebrow text-[10px]">{m.sectors}</span>
    </div>

    <h3 className="font-display text-2xl md:text-3xl text-navy font-semibold mb-3 leading-tight">
      {m.name}
    </h3>
    <p className="text-sm text-charcoal/85 leading-relaxed mb-6">{m.short}</p>

    <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 pt-5 border-t border-border mt-auto">
      <div>
        <div className="eyebrow text-[10px] mb-3">Spécifications</div>
        <ul className="space-y-1.5">
          {m.specs.map((s) => (
            <li
              key={s}
              className="flex items-center gap-2.5 text-xs text-charcoal/85"
            >
              <span className="h-px w-3 bg-ochre flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="sm:text-right sm:max-w-[140px]">
        <div className="eyebrow text-[10px] mb-2">Impact</div>
        <div className="font-display text-base md:text-lg text-ochre leading-tight">
          {m.impact}
        </div>
      </div>
    </div>
  </article>
);

export const Plugs = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = carouselRef.current;
    if (!container) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
            const idx = Number((entry.target as HTMLElement).dataset.index);
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      { root: container, threshold: [0.55, 0.75] }
    );
    Array.from(container.children).forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = (i: number) => {
    const container = carouselRef.current;
    if (!container) return;
    const card = container.children[i] as HTMLElement | undefined;
    if (!card) return;
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <Section id="modules" tone="default" className="overflow-hidden">
      <div
        aria-hidden
        className="glow-orb"
        style={{
          width: 600,
          height: 600,
          bottom: "-15%",
          left: "-18%",
          background:
            "radial-gradient(circle, hsl(33 51% 48% / 0.14) 0%, transparent 65%)",
          animation: "orb-drift-1 24s ease-in-out infinite",
        }}
      />
      <Container className="relative">
        <SectionHeader
          number="03"
          label="LES 4 PLUGS"
          title="Une mission. Un plug. Zéro compromis."
          sub="Chaque plug est conçu pour une verticale métier, validé par des partenaires terrain et optimisé pour les conditions sahéliennes."
        />

        {/* Desktop: bento grid */}
        <div className="mt-16 hidden md:grid md:grid-cols-2 gap-px bg-border border border-border">
          {modules.map((m, i) => (
            <Reveal key={m.id} delay={(i % 2) * 0.08}>
              <PlugCard m={m} i={i} />
            </Reveal>
          ))}
        </div>

        {/* Mobile: swipe carousel */}
        <div className="mt-12 md:hidden">
          <div
            ref={carouselRef}
            role="region"
            aria-label="Modules SahelSky"
            aria-roledescription="carousel"
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-6 px-6 scroll-px-6 gap-4 pb-2"
          >
            {modules.map((m, i) => (
              <div
                key={m.id}
                data-index={i}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} sur ${modules.length} — ${m.name}`}
                className="snap-start flex-shrink-0 w-[88%]"
              >
                <PlugCard m={m} i={i} bordered />
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <nav
            aria-label="Sélectionner un plug"
            className="flex items-center justify-center gap-2 mt-6"
          >
            {modules.map((m, i) => {
              const active = activeIndex === i;
              return (
                <button
                  key={m.id}
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Aller au plug ${i + 1} : ${m.name}`}
                  aria-current={active}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 focus-ring",
                    active
                      ? "w-6 bg-ochre"
                      : "w-1.5 bg-border hover:bg-charcoal/40"
                  )}
                />
              );
            })}
          </nav>

          {/* Swipe affordance label */}
          <div className="mt-3 text-center text-[11px] tracking-wide text-slate-muted/80 uppercase font-display">
            Glisser pour voir les autres plugs
          </div>
        </div>
      </Container>
    </Section>
  );
};
