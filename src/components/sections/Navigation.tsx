import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/Logo";
import { CTAButton } from "@/components/primitives/CTAButton";
import { Container } from "@/components/primitives/Container";
import { nav } from "@/lib/content";
import { openContactModal } from "@/lib/contact";
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
  const [activeSection, setActiveSection] = useState<string>("");
  const t = nav[lang];
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = t.links.map((l) => l.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [t.links]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    firstLinkRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-offwhite/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <Container className="flex h-20 md:h-24 items-center justify-between">
        <a
          href="#top"
          aria-label="SahelSky UAS"
          className="flex items-center focus-ring rounded-sm"
        >
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center gap-9" aria-label="Principal">
          {t.links.map((l) => {
            const isActive = activeSection === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "text-sm transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:bg-ochre after:transition-all focus-ring rounded-sm",
                  isActive
                    ? "text-navy after:w-full"
                    : "text-charcoal/85 hover:text-navy after:w-0 hover:after:w-full"
                )}
              >
                {l.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center text-xs font-medium border border-border rounded-sm overflow-hidden">
            {(["fr", "en"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                aria-label={l === "fr" ? "Français" : "English"}
                className={cn(
                  "px-2.5 py-1 uppercase tracking-wider transition-colors focus-ring",
                  lang === l
                    ? "bg-navy text-offwhite"
                    : "text-charcoal/75 hover:text-navy"
                )}
              >
                {l}
              </button>
            ))}
          </div>
          <CTAButton
            variant="sand"
            className="hidden md:inline-flex"
            onClick={() => openContactModal({ subject: "Demander une démo" })}
          >
            {t.cta}
          </CTAButton>
          <button
            ref={menuButtonRef}
            className="lg:hidden p-2 text-navy focus-ring rounded-sm"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="lg:hidden border-t border-border bg-offwhite shadow-lg"
        >
          <Container className="py-6 flex flex-col gap-4">
            {t.links.map((l, i) => (
              <a
                key={l.href}
                ref={i === 0 ? firstLinkRef : undefined}
                href={l.href}
                className="text-base text-charcoal hover:text-navy focus-ring rounded-sm py-1"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="sm:hidden flex items-center text-xs font-medium border border-border rounded-sm overflow-hidden self-start mt-2">
              {(["fr", "en"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                  aria-label={l === "fr" ? "Français" : "English"}
                  className={cn(
                    "px-3 py-1.5 uppercase tracking-wider transition-colors focus-ring",
                    lang === l
                      ? "bg-navy text-offwhite"
                      : "text-charcoal/75 hover:text-navy"
                  )}
                >
                  {l}
                </button>
              ))}
            </div>
            <CTAButton
              variant="sand"
              className="mt-2 w-full"
              onClick={() => {
                setOpen(false);
                openContactModal({ subject: "Demander une démo" });
              }}
            >
              {t.cta}
            </CTAButton>
          </Container>
        </div>
      )}
    </header>
  );
};
