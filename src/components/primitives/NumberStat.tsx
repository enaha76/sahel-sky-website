import { cn } from "@/lib/utils";

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
}) => (
  <div className="group">
    <div
      className={cn(
        "font-display font-semibold tabular-nums leading-none mb-3 transition-colors",
        size === "lg" ? "text-5xl md:text-7xl" : "text-4xl md:text-5xl",
        light ? "text-sand" : "text-navy"
      )}
    >
      {value}
    </div>
    <div
      className={cn(
        "text-sm leading-snug max-w-[18ch]",
        light ? "text-offwhite/70" : "text-slate-muted"
      )}
    >
      {label}
    </div>
  </div>
);
