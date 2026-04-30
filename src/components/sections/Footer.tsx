import { Container } from "@/components/primitives/Container";
import { Logo } from "@/components/Logo";
import { footer } from "@/lib/content";
import { Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const t = footer.fr;
  return (
    <footer className="bg-navy-deep text-offwhite/80 pt-20 pb-8">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-offwhite/10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-offwhite/60 text-sm max-w-xs">{t.tagline}</p>
            <div className="mt-8 space-y-2 text-sm text-offwhite/70">
              <a
                href={`mailto:${t.contact.email}`}
                className="flex items-center gap-2 hover:text-sand transition-colors"
              >
                <Mail size={14} /> {t.contact.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {t.contact.city}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {[Linkedin, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-sm border border-offwhite/15 flex items-center justify-center hover:border-sand hover:text-sand transition-colors"
                  aria-label="social"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.columns.map((col) => (
              <div key={col.title}>
                <div className="eyebrow text-sand mb-4">{col.title}</div>
                <ul className="space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="text-sm text-offwhite/70 hover:text-sand transition-colors"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-offwhite/50">
          <span>{t.bottom}</span>
          <span className="font-display tracking-[0.2em] uppercase">
            Assemble · Integrate · Innovate
          </span>
        </div>
      </Container>
    </footer>
  );
};
