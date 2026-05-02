import { CTAButton } from "@/components/primitives/CTAButton";
import { Container } from "@/components/primitives/Container";
import { Reveal, Section } from "@/components/primitives/Section";
import { cta } from "@/lib/content";
import { openContactModal } from "@/lib/contact";

export const FinalCTA = () => {
  const t = cta.fr;
  return (
    <Section id="contact" tone="navy" className="grain grain-dark overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 topo-pattern opacity-[0.06] pointer-events-none"
      />
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <Reveal className="lg:col-span-8">
            <span className="eyebrow text-sand">PRÊTS À DÉCOLLER</span>
            <h2 className="font-display display-xl text-offwhite mt-4 mb-6">
              {t.title}
            </h2>
            <p className="text-offwhite/80 text-lg max-w-xl">{t.sub}</p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-4">
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <CTAButton
                variant="sand"
                size="lg"
                className="w-full"
                onClick={() => openContactModal({ subject: "Demander une démo" })}
              >
                {t.primary}
              </CTAButton>
              <CTAButton
                variant="ghost-light"
                size="lg"
                className="w-full"
                onClick={() => openContactModal({ subject: "Devenir partenaire" })}
              >
                {t.secondary}
              </CTAButton>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
};
