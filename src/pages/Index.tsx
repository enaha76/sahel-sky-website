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

const Index = () => {
  const [lang, setLang] = useState<"fr" | "en">("fr");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <main className="min-h-screen bg-offwhite text-charcoal">
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
    </main>
  );
};

export default Index;
