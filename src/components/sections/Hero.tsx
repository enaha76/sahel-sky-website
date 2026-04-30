import { motion } from "framer-motion";
import { CTAButton } from "@/components/primitives/CTAButton";
import { Container } from "@/components/primitives/Container";
import { SmartImage } from "@/components/primitives/SmartImage";
import { hero } from "@/lib/content";
import { ArrowRight } from "lucide-react";

export const Hero = ({ lang }: { lang: "fr" | "en" }) => {
  const t = hero[lang];
  return (
    <section
      id="top"
      className="relative pt-28 md:pt-36 pb-20 md:pb-28 overflow-hidden bg-offwhite grain"
    >
      {/* Curved horizon dune motif */}
      <svg
        className="absolute -bottom-1 left-0 w-full text-sand-soft"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 120 Q360 40 720 70 T1440 60 L1440 120 Z"
          fill="currentColor"
          opacity="0.7"
        />
      </svg>

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <span className="eyebrow">{t.eyebrow}</span>
            <h1 className="display-xl font-display font-semibold text-navy mt-6 mb-7">
              <span className="block">{t.titleA}</span>
              <span className="block text-ochre">{t.titleB}</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/75 max-w-xl leading-relaxed mb-10">
              {t.sub}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton variant="navy" size="lg">
                {t.primary}
              </CTAButton>
              <a
                href="#modules"
                className="inline-flex items-center gap-2 text-ochre font-medium hover:gap-3 transition-all duration-200"
              >
                {t.secondary}
                <ArrowRight size={16} className="opacity-0 -ml-2 group-hover:opacity-100" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <SmartImage
              src="/images/hero-drone-desert.webp"
              alt="Drone SahelSky survolant un paysage désertique sahélien au crépuscule"
              priority
              aspect="aspect-[4/5]"
              className="rounded-sm"
            />
            {/* Floating spec card */}
            <div className="absolute -bottom-6 -left-6 bg-navy text-offwhite p-5 rounded-sm shadow-2xl hidden md:block max-w-[220px]">
              <div className="eyebrow text-sand mb-2">SahelOS v1.0</div>
              <div className="font-display text-lg leading-snug">
                Navigation autonome embarquée
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust strip */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-border flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <span className="eyebrow">{t.trust}</span>
          <div className="flex flex-wrap items-center gap-8 opacity-60">
            {["Min. Jeunesse", "SUPNUM", "Polytechnique", "ENSTA", "ENSIMAG"].map(
              (p) => (
                <span
                  key={p}
                  className="text-sm font-display tracking-wide text-charcoal/70"
                >
                  {p}
                </span>
              )
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
