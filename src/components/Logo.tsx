// SahelSky UAS — S² wordmark with drone + dune motif
import { cn } from "@/lib/utils";

export const Logo = ({
  className,
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) => {
  const fg = variant === "dark" ? "hsl(var(--navy))" : "hsl(var(--offwhite))";
  const sand = "hsl(var(--sand))";
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <svg width="36" height="36" viewBox="0 0 40 40" fill="none" aria-hidden>
        {/* Drone above S */}
        <g transform="translate(20 6)">
          <line x1="-5" y1="0" x2="5" y2="0" stroke={fg} strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="-5" cy="0" r="1.6" fill={sand} />
          <circle cx="5" cy="0" r="1.6" fill={sand} />
          <rect x="-1.2" y="-1" width="2.4" height="2" fill={fg} rx="0.3" />
        </g>
        {/* Stylized S² */}
        <path
          d="M28 14 Q28 10 22 10 L14 10 Q8 10 8 15 Q8 19 14 20 L22 20 Q28 21 28 25 Q28 30 22 30 L12 30"
          stroke={fg}
          strokeWidth="2.4"
          fill="none"
          strokeLinecap="round"
        />
        {/* Dune accent inside S */}
        <path
          d="M11 22 Q15 19 19 22 Q23 25 27 22"
          stroke={sand}
          strokeWidth="1.6"
          fill="none"
          strokeLinecap="round"
        />
        {/* Superscript ² */}
        <text
          x="32"
          y="16"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="9"
          fontWeight="700"
          fill={sand}
        >
          2
        </text>
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-semibold tracking-tight text-[15px]"
          style={{ color: fg }}
        >
          SahelSky
        </span>
        <span
          className="text-[10px] tracking-[0.2em] uppercase mt-0.5"
          style={{ color: sand }}
        >
          UAS
        </span>
      </div>
    </div>
  );
};
