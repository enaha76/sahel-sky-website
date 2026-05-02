import { Container } from "@/components/primitives/Container";
import { Logo } from "@/components/Logo";
import { footer } from "@/lib/content";
import { Linkedin, Twitter, Youtube, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  const t = footer.fr;
  const focus =
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sand focus-visible:ring-offset-2 focus-visible:ring-offset-navy-deep rounded-sm";
  const socials = [
    { Icon: Linkedin, label: "LinkedIn" },
    { Icon: Twitter, label: "Twitter" },
    { Icon: Youtube, label: "YouTube" },
  ];
  return (
    <footer className="bg-navy-deep text-offwhite/85 pt-20 pb-8">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 pb-16 border-b border-offwhite/10">
          <div className="lg:col-span-4">
            <Logo variant="light" />
            <p className="mt-5 text-offwhite/75 text-sm max-w-xs">{t.tagline}</p>
            <div className="mt-8 space-y-2 text-sm text-offwhite/85">
              <a
                href={`mailto:${t.contact.email}`}
                className={`flex items-center gap-2 hover:text-sand transition-colors ${focus}`}
              >
                <Mail size={14} /> {t.contact.email}
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} /> {t.contact.city}
              </div>
            </div>
            <div className="mt-6 flex items-center gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className={`w-9 h-9 rounded-sm border border-offwhite/20 flex items-center justify-center hover:border-sand hover:text-sand hover:-translate-y-0.5 transition-all ${focus}`}
                  aria-label={label}
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
                        className={`text-sm text-offwhite/80 hover:text-sand transition-colors ${focus}`}
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

        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-offwhite/65">
          <span>{t.bottom}</span>
          <span className="font-display tracking-[0.2em] uppercase">
            Assemble · Integrate · Innovate
          </span>
        </div>
        <div className="pt-3 text-[11px] italic text-offwhite/55">
          {t.disclaimer}
        </div>
      </Container>
    </footer>
  );
};
