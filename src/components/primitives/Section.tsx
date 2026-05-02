import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  tone?: "default" | "soft" | "navy";
}

export const Section = ({ className, tone = "default", ...props }: SectionProps) => {
  const tones = {
    default: "bg-offwhite text-charcoal",
    soft: "bg-sand-soft/60 text-charcoal",
    navy: "bg-navy text-offwhite",
  };
  return (
    <section
      className={cn("relative py-24 md:py-32", tones[tone], className)}
      {...props}
    />
  );
};

export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeader = ({
  number,
  label,
  title,
  sub,
  light,
  align = "left",
}: {
  number?: string;
  label?: string;
  title: string;
  sub?: string;
  light?: boolean;
  align?: "left" | "center";
}) => (
  <Reveal>
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {(number || label) && (
        <div className="flex items-center gap-4 mb-6">
          {number && (
            <span
              className={cn(
                "font-display text-sm tabular-nums",
                light ? "text-sand" : "text-ochre"
              )}
            >
              {number}
            </span>
          )}
          <span className="h-px w-10 bg-current opacity-30" />
          {label && <span className="eyebrow">{label}</span>}
        </div>
      )}
      <h2
        className={cn(
          "display-lg font-display font-semibold mb-6",
          light ? "text-offwhite" : "text-navy"
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "text-lg leading-relaxed max-w-2xl",
            light ? "text-offwhite/75" : "text-slate-muted",
            align === "center" && "mx-auto"
          )}
        >
          {sub}
        </p>
      )}
    </div>
  </Reveal>
);
