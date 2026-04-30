import { useEffect, useState } from "react";
import { Logo } from "@/components/Logo";
import { CTAButton } from "@/components/primitives/CTAButton";
import { Container } from "@/components/primitives/Container";
import { nav } from "@/lib/content";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export const Navigation = ({
  lang,
  setLang,
}: {
  lang: "fr" | "en";
  setLang: (l: "fr" | "en") => void;
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const t = nav[lang];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-offwhite/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-16 md:h-20 items-center justify-between">
        <a href="#top" aria-label="SahelSky UAS" className="flex items-center">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {t.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-charcoal/80 hover:text-navy transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-ochre hover:after:w-full after:transition-all"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center text-xs font-medium border border-border rounded-sm overflow-hidden">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={cn(
                  "px-2.5 py-1 uppercase tracking-wider transition-colors",
                  lang === l
                    ? "bg-navy text-offwhite"
                    : "text-charcoal/70 hover:text-navy"
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <CTAButton variant="sand" className="hidden md:inline-flex">
            {t.cta}
          </CTAButton>
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-border bg-offwhite">
          <Container className="py-6 flex flex-col gap-4">
            {t.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-base text-charcoal hover:text-navy"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <CTAButton variant="sand" className="mt-2 w-full">
              {t.cta}
            </CTAButton>
          </Container>
        </div>
      )}
    </header>
  );
};
