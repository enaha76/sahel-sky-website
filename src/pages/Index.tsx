import { useEffect, useState } from "react";
import { Navigation } from "@/components/sections/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Plugs } from "@/components/sections/Plugs";
import { Tech } from "@/components/sections/Tech";
import { Impact } from "@/components/sections/Impact";
import { Team } from "@/components/sections/Team";
import { Roadmap } from "@/components/sections/Roadmap";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { ContactModal } from "@/components/ContactModal";
import { nav } from "@/lib/content";

const Index = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="min-h-screen bg-offwhite text-charcoal">
      <ScrollProgress />
      <Navigation lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Problem />
      <Solution />
      <Plugs />
      <Tech />
      <Impact />
      <Team />
      <Roadmap />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA label={nav[lang].cta} />
      <ContactModal />
    </main>
  );
};

export default Index;
