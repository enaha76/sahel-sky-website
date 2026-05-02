import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const Marquee = ({
  items,
  speed = 40,
  className,
  itemClassName,
}: {
  items: ReactNode[];
  speed?: number;
  className?: string;
  itemClassName?: string;
}) => {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn("overflow-hidden", className)}
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
      }}
      aria-hidden
    >
      <div
        className="flex items-center gap-12 animate-marquee"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((it, i) => (
          <div key={i} className={cn("flex-shrink-0", itemClassName)}>
            {it}
          </div>
        ))}
      </div>
    </div>
  );
};
