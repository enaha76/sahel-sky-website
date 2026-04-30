import { CTAButton } from "@/components/primitives/CTAButton";
import { Container } from "@/components/primitives/Container";
import { Section } from "@/components/primitives/Section";
import { cta } from "@/lib/content";

export const FinalCTA = () => {
  const t = cta.fr;
  return (
    <Section id="contact" tone="navy" className="grain">
      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <span className="eyebrow text-sand">PRÊTS À DÉCOLLER</span>
            <h2 className="font-display display-xl text-offwhite mt-4 mb-6">
              {t.title}
            </h2>
            <p className="text-offwhite/70 text-lg max-w-xl">{t.sub}</p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <CTAButton variant="sand" size="lg" className="w-full">
              {t.primary}
            </CTAButton>
            <CTAButton variant="ghost-light" size="lg" className="w-full">
              {t.secondary}
            </CTAButton>
          </div>
        </div>
      </Container>
    </Section>
  );
};
