import { Container } from "@/components/primitives/Container";
import { Reveal, Section, SectionHeader } from "@/components/primitives/Section";
import { roadmap } from "@/lib/content";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CURRENT_YEAR = 2026;

export const Roadmap = () => {
  const t = roadmap.fr;
  return (
    <Section tone="soft">
      <Container>
        <SectionHeader number={t.section} label={t.label} title={t.title} />

        <div className="mt-20 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-[34px] left-0 right-0 h-px bg-border hidden md:block origin-left"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-x-4 gap-y-10">
            {t.items.map((it, i) => {
              const year = parseInt(it.year, 10);
              const isPast = year <= CURRENT_YEAR;
              return (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="relative">
                    <span
                      aria-hidden
                      className={cn(
                        "hidden md:block absolute top-[28px] left-0 w-3 h-3 rounded-full ring-4 ring-sand-soft/60 transition-colors",
                        isPast ? "bg-ochre" : "bg-offwhite border border-ochre"
                      )}
                    />
                    <div className="md:pt-16">
                      <div className="font-display text-xs text-ochre tabular-nums mb-2">
                        {it.year}
                      </div>
                      <h3 className="font-display text-base font-semibold text-navy mb-2 leading-tight">
                        {it.title}
                      </h3>
                      <p className="text-xs text-charcoal/80 leading-relaxed">
                        {it.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
};
