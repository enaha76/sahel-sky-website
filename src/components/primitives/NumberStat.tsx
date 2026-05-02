import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const parseValue = (raw: string) => {
  const match = raw.match(/^(\D*)(-?\d[\d,.\s]*)(.*)$/);
  if (!match) return null;
  const [, prefix, num, suffix] = match;
  const cleaned = num.replace(/[\s,]/g, "");
  const target = Number(cleaned);
  if (!Number.isFinite(target)) return null;
  return { prefix, target, suffix, decimals: (cleaned.split(".")[1] ?? "").length };
};

const formatNumber = (n: number, decimals: number) =>
  decimals > 0
    ? n.toFixed(decimals)
    : Math.round(n).toLocaleString("fr-FR").replace(/ /g, " ");

const useCountUp = (value: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const parsed = useRef(parseValue(value));

  useEffect(() => {
    parsed.current = parseValue(value);
    if (!parsed.current) {
      setDisplay(value);
      return;
    }
    setDisplay(`${parsed.current.prefix}0${parsed.current.suffix}`);
    const node = ref.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || !parsed.current) return;
          observer.disconnect();
          const { prefix, target, suffix, decimals } = parsed.current;
          const duration = 1400;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(`${prefix}${formatNumber(target * eased, decimals)}${suffix}`);
            if (t < 1) requestAnimationFrame(tick);
            else setDisplay(value);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value]);

  return { ref, display };
};

export const NumberStat = ({
  value,
  label,
  light,
  size = "md",
}: {
  value: string;
  label: string;
  light?: boolean;
  size?: "md" | "lg";
}) => {
  const { ref, display } = useCountUp(value);
  return (
    <div className="group" ref={ref}>
      <div
        className={cn(
          "font-display font-semibold tabular-nums leading-none mb-3 transition-colors",
          size === "lg" ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl",
          light ? "text-sand" : "text-navy"
        )}
      >
        {display}
      </div>
      <div
        className={cn(
          "text-sm leading-snug max-w-[18ch]",
          light ? "text-offwhite/75" : "text-slate-muted"
        )}
      >
        {label}
      </div>
    </div>
  );
};
