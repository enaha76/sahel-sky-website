import { motion } from "framer-motion";
import { CTAButton } from "@/components/primitives/CTAButton";
import { Container } from "@/components/primitives/Container";
import { SmartImage } from "@/components/primitives/SmartImage";
import { ParallaxDunes } from "@/components/ParallaxDunes";
import { Marquee } from "@/components/Marquee";
import { hero } from "@/lib/content";
import { openContactModal } from "@/lib/contact";
import { ArrowRight, ChevronDown } from "lucide-react";

const TRUST_INSTITUTIONS = [
  "Min. Jeunesse",
  "SUPNUM",
  "Polytechnique",
  "ENSTA",
  "ENSIMAG",
  "ENIT Tunis",
];

export const Hero = ({ lang }: { lang: "fr" | "en" }) => {
  const t = hero[lang];
  return (
    <section
      id="top"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden bg-offwhite grain"
    >
      {/* Sahel-sun ambient — soft warm orbs drifting behind content */}
      <div
        aria-hidden
        className="glow-orb"
        style={{
          width: 620,
          height: 620,
          top: "-12%",
          left: "-15%",
          background:
            "radial-gradient(circle, hsl(33 51% 48% / 0.18) 0%, transparent 65%)",
          animation: "orb-drift-1 22s ease-in-out infinite",
        }}
      />
      <div
        aria-hidden
        className="glow-orb"
        style={{
          width: 720,
          height: 720,
          top: "-25%",
          right: "-20%",
          background:
            "radial-gradient(circle, hsl(30 51% 64% / 0.28) 0%, transparent 65%)",
          animation: "orb-drift-2 28s ease-in-out infinite",
        }}
      />

      {/* Faint topographic drift — same family as Impact, tuned for light bg */}
      <div
        aria-hidden
        className="absolute inset-0 topo-pattern opacity-[0.04] pointer-events-none"
      />

      {/* Parallax horizon — 3 dune layers drifting at different speeds */}
      <ParallaxDunes />

      <Container className="relative">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <span className="eyebrow">{t.eyebrow}</span>
            <h1 className="display-xl font-display font-semibold text-navy mt-6 mb-7">
              <span className="block">{t.titleA}</span>
              <span className="block text-ochre">{t.titleB}</span>
            </h1>
            <p className="text-lg md:text-xl text-charcoal/80 max-w-xl leading-relaxed mb-10">
              {t.sub}
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <CTAButton
                variant="navy"
                size="lg"
                onClick={() => openContactModal({ subject: "Demander une démo" })}
              >
                {t.primary}
              </CTAButton>
              <a
                href="#modules"
                className="group inline-flex items-center gap-2 text-ochre font-medium hover:text-navy transition-colors duration-200 focus-ring rounded-sm"
              >
                {t.secondary}
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative"
          >
            <div className="animate-hover-float">
              <SmartImage
                src="/Drone_manifeste.png"
                alt="Drone SahelSky survolant un paysage désertique sahélien au crépuscule"
                priority
                aspect="aspect-[4/3]"
                className="rounded-sm"
                caption="Visuel conceptuel — prototype en développement"
              />
            </div>
            {/* Floating spec card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-navy text-offwhite p-5 rounded-sm shadow-2xl hidden md:block max-w-[240px] border-t-2 border-sand"
            >
              <div className="eyebrow text-sand mb-2">SahelOS v1.0</div>
              <div className="font-display text-lg leading-snug">
                Navigation autonome embarquée
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust strip — slow ambient marquee of partner institutions */}
        <div className="mt-20 md:mt-28 pt-10 border-t border-border">
          <span className="eyebrow block mb-6">{t.trust}</span>
          <Marquee
            speed={45}
            items={TRUST_INSTITUTIONS.map((p) => (
              <span className="text-sm font-display tracking-wide text-charcoal/80 opacity-80">
                {p}
              </span>
            ))}
          />
        </div>
      </Container>

      {/* Scroll cue */}
      <a
        href="#probleme"
        aria-label="Faire défiler"
        className="absolute left-1/2 -translate-x-1/2 bottom-6 hidden md:flex flex-col items-center gap-1 text-navy/50 hover:text-ochre transition-colors focus-ring rounded-sm"
      >
        <span className="font-display text-[10px] tracking-[0.25em] uppercase">
          Scroll
        </span>
        <ChevronDown size={18} className="animate-[drift_2.4s_ease-in-out_infinite]" />
      </a>
    </section>
  );
};
