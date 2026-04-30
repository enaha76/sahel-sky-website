import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/primitives/Container";
import { Section, SectionHeader } from "@/components/primitives/Section";
import { SmartImage } from "@/components/primitives/SmartImage";
import { modules } from "@/lib/content";
import { cn } from "@/lib/utils";

export const Plugs = () => {
  const [active, setActive] = useState(0);
  const m = modules[active];

  return (
    <Section id="modules" tone="default">
      <Container>
        <SectionHeader
          number="03"
          label="LES 4 PLUGS"
          title="Une mission. Un plug. Zéro compromis."
          sub="Chaque plug est conçu pour une verticale métier, validé par des partenaires terrain et optimisé pour les conditions sahéliennes."
        />

        <div className="mt-16 grid lg:grid-cols-12 gap-8 lg:gap-14">
          {/* Tab list */}
          <div className="lg:col-span-4 flex lg:flex-col gap-px overflow-x-auto lg:overflow-visible -mx-6 px-6 lg:mx-0 lg:px-0">
            {modules.map((mod, i) => (
              <button
                key={mod.id}
                onClick={() => setActive(i)}
                className={cn(
                  "text-left p-5 lg:p-6 border transition-all duration-200 min-w-[240px] lg:min-w-0 flex-shrink-0",
                  active === i
                    ? "border-navy bg-navy text-offwhite"
                    : "border-border bg-offwhite text-charcoal hover:border-ochre"
                )}
              >
                <div className="flex items-baseline gap-3 mb-1">
                  <span
                    className={cn(
                      "font-display text-xs tabular-nums",
                      active === i ? "text-sand" : "text-ochre"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <span className="font-display font-semibold">{mod.name}</span>
                </div>
                <p
                  className={cn(
                    "text-sm leading-snug",
                    active === i ? "text-offwhite/70" : "text-charcoal/60"
                  )}
                >
                  {mod.sectors}
                </p>
              </button>
            ))}
          </div>

          {/* Active panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={m.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-8"
              >
                <SmartImage
                  src={m.image}
                  alt={`${m.name} — vue produit en mission`}
                  aspect="aspect-[4/5]"
                  className="rounded-sm"
                />
                <div className="flex flex-col">
                  <span className="eyebrow mb-3">{m.sectors}</span>
                  <h3 className="font-display text-3xl md:text-4xl text-navy font-semibold mb-4">
                    {m.name}
                  </h3>
                  <p className="text-charcoal/75 leading-relaxed mb-8">{m.short}</p>

                  <div className="border-t border-border pt-6 mb-6">
                    <div className="eyebrow mb-3">Spécifications</div>
                    <ul className="space-y-2">
                      {m.specs.map((s) => (
                        <li
                          key={s}
                          className="flex items-center gap-3 text-sm text-charcoal"
                        >
                          <span className="h-px w-4 bg-ochre" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-6 mt-auto">
                    <div className="eyebrow mb-2">Impact attendu</div>
                    <div className="font-display text-2xl text-ochre">
                      {m.impact}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </Section>
  );
};
