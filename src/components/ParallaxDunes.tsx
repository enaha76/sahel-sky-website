import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export const ParallaxDunes = () => {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();

  const backY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -25]);
  const midY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -55]);
  const frontY = useTransform(scrollY, [0, 800], [0, reduce ? 0 : -100]);

  return (
    <div
      className="absolute inset-x-0 bottom-0 pointer-events-none"
      aria-hidden
    >
      {/* Back dune — farthest, lowest hill, slowest movement */}
      <motion.svg
        style={{ y: backY }}
        className="absolute -bottom-2 left-0 w-full text-sand-soft"
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
      >
        <path
          d="M0 160 Q360 100 720 120 T1440 110 L1440 160 Z"
          fill="currentColor"
          opacity="0.45"
        />
      </motion.svg>

      {/* Mid dune */}
      <motion.svg
        style={{ y: midY }}
        className="absolute -bottom-1 left-0 w-full text-sand-soft"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          d="M0 140 Q300 60 720 90 T1440 70 L1440 140 Z"
          fill="currentColor"
          opacity="0.7"
        />
      </motion.svg>

      {/* Front dune — closest, sharper crest, fastest movement */}
      <motion.svg
        style={{ y: frontY }}
        className="absolute -bottom-1 left-0 w-full text-sand"
        viewBox="0 0 1440 110"
        preserveAspectRatio="none"
      >
        <path
          d="M0 110 Q200 30 540 60 T1080 50 T1440 70 L1440 110 Z"
          fill="currentColor"
          opacity="0.35"
        />
      </motion.svg>
    </div>
  );
};
