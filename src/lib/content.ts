// SahelSky UAS — All marketing copy. Typed for easy translation.

export type Lang = "fr" | "en";

export const nav = {
  fr: {
    links: [
      { href: "#plateforme", label: "Plateforme" },
      { href: "#modules", label: "Modules" },
      { href: "#apropos", label: "À propos" },
      { href: "#impact", label: "Impact" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Demander une démo",
  },
  en: {
    links: [
      { href: "#plateforme", label: "Platform" },
      { href: "#modules", label: "Modules" },
      { href: "#apropos", label: "About" },
      { href: "#impact", label: "Impact" },
      { href: "#contact", label: "Contact" },
    ],
    cta: "Request a demo",
  },
};

export const hero = {
  fr: {
    eyebrow: "FABRICANT MAURITANIEN DE DRONES INTELLIGENTS",
    titleA: "Un drone. Quatre missions.",
    titleB: "Une souveraineté technologique.",
    sub: "SahelSky conçoit des drones modulaires plug-and-play pour l'agriculture, l'inspection, le monitoring urbain et la sécurité — pensés pour les réalités du Sahel.",
    primary: "Découvrir la plateforme",
    secondary: "Voir les modules →",
    trust: "Soutenu par le Ministère de l'Autonomisation de la Jeunesse",
  },
  en: {
    eyebrow: "MAURITANIAN INTELLIGENT DRONE MANUFACTURER",
    titleA: "One drone. Four missions.",
    titleB: "One technological sovereignty.",
    sub: "SahelSky designs modular plug-and-play drones for agriculture, inspection, urban monitoring and security — built for the realities of the Sahel.",
    primary: "Discover the platform",
    secondary: "See the modules →",
    trust: "Backed by the Ministry of Youth Empowerment",
  },
};

export const problem = {
  fr: {
    section: "01",
    label: "LE PROBLÈME",
    title: "70% du marché mondial des drones contrôlé par DJI.",
    body: "Cette dépendance crée des risques de sécurité majeurs, des vulnérabilités logistiques et un manque criant de personnalisation pour les usages africains. L'Afrique consomme — sans concevoir, sans assembler, sans contrôler.",
    stats: [
      { value: "70%", label: "Domination DJI mondiale" },
      { value: "$49.1M", label: "Marché africain des drones (2025)" },
      { value: "0", label: "Fabricant mauritanien aujourd'hui" },
    ],
  },
};

export const solution = {
  fr: {
    section: "02",
    label: "NOTRE SOLUTION",
    title: "Une plateforme. Des possibilités infinies.",
    sub: "Un châssis modulaire universel. Quatre plugs interchangeables. Une plateforme logicielle souveraine.",
    advantages: [
      "Économies d'échelle",
      "R&D centralisée",
      "Évolutivité native",
      "Maintenance simplifiée",
      "Coût total réduit",
    ],
  },
};

export const modules = [
  {
    id: "agriculture",
    name: "Plug Agriculture",
    short: "Cartographie NDVI · Pulvérisation de précision (réservoir 50L).",
    image: "/PLUG_AGRICULTURE.png",
    sectors: "Agriculture · Élevage · Eaux & Forêts",
    specs: ["Réservoir 50L", "Multi-spectral NDVI", "Buses anti-dérive"],
    impact: "+15-25% rendement agricole",
  },
  {
    id: "inspection",
    name: "Plug Inspection",
    short: "Éoliennes, lignes haute tension, fuselages aéronautiques.",
    image: "/PLUG_INSPECTION_Drone_segmentation_de_fissure.png",
    sectors: "Énergie · Aéronautique · Industrie",
    specs: ["Caméra thermique 640p", "Zoom optique 30x", "LiDAR embarqué"],
    impact: "−40 à 60% coût d'inspection",
  },
  {
    id: "monitoring",
    name: "Plug Monitoring",
    short: "Scan urbain 3D, détection de déchets et eaux stagnantes.",
    image: "/PLUG%20MONITORING_Drone_multi-segmentation_urbaine.png",
    sectors: "Smart Cities · Santé publique · Urbanisme",
    specs: ["Photogrammétrie 3D", "IA computer vision", "Détection automatisée"],
    impact: "Cartographie urbaine 10x plus rapide",
  },
  {
    id: "mining",
    name: "Plug Mining",
    short: "Magnétomètres en réseau, détection de mines explosives.",
    image: "/PLUG_MINING_Drone_magnetic_anomaly_heatmap.png",
    sectors: "Mines · Défense · Sécurité civile",
    specs: ["Magnétomètre fluxgate", "Vol en essaim", "Cartographie GPR"],
    impact: "Zones sécurisées 5x plus vite",
  },
];

export const tech = {
  fr: {
    section: "04",
    label: "TECHNOLOGIE",
    title: "Construit pour durer. Conçu pour évoluer.",
    cols: [
      {
        title: "Hardware souverain",
        body: "Contrôleur de vol propriétaire, châssis modulaire en composite, conçus et assemblés à Nouakchott.",
        items: ["Custom Flight Controller", "Châssis modulaire", "Composants industriels"],
      },
      {
        title: "IA embarquée",
        body: "SahelOS, notre OS embarqué, exécute SLAM, vision par ordinateur et navigation autonome en temps réel.",
        items: ["SLAM temps réel", "Computer Vision", "Navigation autonome"],
      },
      {
        title: "Sovereign by design",
        body: "Souveraineté des données, fabrication locale, code source maîtrisé, personnalisation complète par mission.",
        items: ["Data sovereignty", "Local manufacturing", "Open customization"],
      },
    ],
  },
};

export const impact = {
  fr: {
    section: "05",
    label: "IMPACT & VISION",
    title: "Au-delà de la technologie.",
    stats: [
      { value: "15+", label: "Emplois qualifiés directs en 3 ans" },
      { value: "100+", label: "Jeunes formés via SahelSky Academy" },
      { value: "5", label: "ODD adressés (2 · 8 · 9 · 11 · 13)" },
      { value: "2030", label: "Leader régional Sahel" },
    ],
    quote: "Le DJI Africain — Conçu pour et par l'Afrique.",
  },
};

export const team = {
  fr: {
    section: "06",
    label: "L'ÉQUIPE",
    title: "7 fondateurs. Une vision.",
    eyebrow: "Âge moyen 25 ans · Polytechnique · ENSTA · ENSIMAG · ENIT · SUPNUM",
    members: [
      { name: "Zayed Herma", role: "CEO & Co-fondateur", school: "École Polytechnique" },
      { name: "Mohamed Mahmoud", role: "CTO Hardware", school: "ENSTA Paris" },
      { name: "Ahmedou Beillahi", role: "Lead Embedded Systems", school: "ENSIMAG" },
      { name: "Cheikh Ahmedou Enaha", role: "Head of AI", school: "École Polytechnique" },
      { name: "Mohamed Ahmed", role: "Head of Operations", school: "ENIT Tunis" },
      { name: "Sidi Ali Tijani", role: "Lead Mechanical Eng.", school: "SUPNUM" },
      { name: "Mohamed Lemine", role: "Head of Product", school: "ENSTA Paris" },
    ],
  },
};

export const roadmap = {
  fr: {
    section: "07",
    label: "ROADMAP",
    title: "De Nouakchott au continent.",
    items: [
      { year: "2025", title: "Prototype", body: "Premier châssis modulaire fonctionnel." },
      { year: "2026", title: "SahelOS + Custom FC", body: "OS embarqué et flight controller propriétaire." },
      { year: "2027", title: "Production série", body: "Chaîne d'assemblage à Nouakchott." },
      { year: "2027", title: "Hexacopter", body: "Plateforme charge lourde." },
      { year: "2028", title: "VTOL", body: "Endurance longue distance." },
      { year: "2029", title: "Swarm", body: "Coordination en essaim." },
      { year: "2030", title: "AI+", body: "Autonomie de niveau 4." },
    ],
  },
};

export const cta = {
  fr: {
    title: "Prêt à passer à la souveraineté technologique ?",
    sub: "Rejoignez les pionniers de l'industrie aéronautique sahélienne.",
    primary: "Demander une démo",
    secondary: "Devenir partenaire",
  },
};

export const contactForm = {
  fr: {
    title: "Contactez SahelSky",
    sub: "Démo, partenariat, presse — écrivez-nous, nous répondons sous 48h ouvrées.",
    fields: {
      name: "Nom complet",
      email: "Email professionnel",
      organization: "Organisation (optionnel)",
      subject: "Sujet",
      message: "Votre message",
    },
    subjects: [
      "Demander une démo",
      "Devenir partenaire",
      "Presse / Média",
      "Recrutement",
      "Autre",
    ],
    submit: "Envoyer",
    sending: "Envoi…",
    success: "Message envoyé. Notre équipe revient vers vous sous peu.",
    error: "L'envoi a échoué. Réessayez ou écrivez à contact@sahelskyuas.mr.",
    close: "Fermer",
  },
};

export const footer = {
  fr: {
    tagline: "Assemble · Integrate · Innovate",
    columns: [
      { title: "Plateforme", links: ["Drone modulaire", "SahelOS", "Plug Agriculture", "Plug Inspection"] },
      { title: "Entreprise", links: ["À propos", "Équipe", "Carrières", "Presse"] },
      { title: "Ressources", links: ["Documentation", "Études de cas", "Blog", "FAQ"] },
      { title: "Légal", links: ["Mentions légales", "Confidentialité", "Conditions", "Cookies"] },
    ],
    contact: { email: "contact@sahelskyuas.mr", city: "Nouakchott, Mauritanie" },
    bottom: "© 2026 SahelSky UAS · Soutenu par la République Islamique de Mauritanie",
    disclaimer:
      "Visuels du site : renders et schémas conceptuels. Prototypes en développement.",
  },
};
