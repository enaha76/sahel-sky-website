import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "navy" | "sand" | "outline" | "ghost-light";
  size?: "md" | "lg";
}

export const CTAButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, variant = "navy", size = "md", ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-medium tracking-tight transition-all duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sand";
    const sizes = {
      md: "h-11 px-5 text-sm",
      lg: "h-14 px-7 text-base",
    };
    const variants = {
      navy:
        "bg-navy text-offwhite hover:bg-navy-deep shadow-[0_1px_0_0_hsl(var(--navy-deep))]",
      sand:
        "bg-sand text-navy hover:bg-ochre hover:text-offwhite",
      outline:
        "border border-navy/20 text-navy hover:border-navy hover:bg-navy hover:text-offwhite bg-transparent",
      "ghost-light":
        "border border-offwhite/30 text-offwhite hover:bg-offwhite hover:text-navy bg-transparent",
    };
    return (
      <button
        ref={ref}
        className={cn(base, sizes[size], variants[variant], "rounded-sm", className)}
        {...props}
      />
    );
  }
);
CTAButton.displayName = "CTAButton";
