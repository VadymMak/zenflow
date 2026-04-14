import type {
  NavItem,
  ClassType,
  Instructor,
  DaySchedule,
  PricingPlan,
  WhyItem,
  GalleryImage,
  Review,
  ContactItem,
  ChatConfig,
  Stat,
} from "./types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Lekcie", href: "#lekcie" },
  { label: "Rozvrh", href: "#rozvrh" },
  { label: "Inštruktori", href: "#instruktori" },
  { label: "Cenník", href: "#cennik" },
  { label: "Galéria", href: "#galeria" },
  { label: "Kontakt", href: "#kontakt" },
];

export const CLASSES: ClassType[] = [
  {
    id: "hatha",
    name: "Hatha Yoga",
    duration: "60 min",
    level: "Začiatočník",
    description:
      "Ideálna pre začiatočníkov. Pomalé tempo, správne držanie tela a hlboké dýchanie. Zlepšuje flexibilitu a odbúrava stres.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=400&fit=crop",
  },
  {
    id: "vinyasa",
    name: "Vinyasa Flow",
    duration: "75 min",
    level: "Stredne pokročilý",
    description:
      "Dynamická prax prepájajúca pohyb s dychom. Plynulé prechody medzi pozíciami posilňujú telo a upokojujú myseľ.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop",
  },
  {
    id: "yin",
    name: "Yin Yoga",
    duration: "90 min",
    level: "Všetky úrovne",
    description:
      "Hlboké pasívne pozície držané 3–5 minút. Uvoľňuje fascie, kĺby a hlboké tkanivá. Ideálna na regeneráciu.",
    image:
      "https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=600&h=400&fit=crop",
  },
  {
    id: "power",
    name: "Power Yoga",
    duration: "60 min",
    level: "Pokročilý",
    description:
      "Intenzívna silová joga. Buduje silu, vytrvalosť a spaľuje kalórie. Vyžaduje základné znalosti jogy.",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
  },
  {
    id: "prenatal",
    name: "Prenatálna Yoga",
    duration: "60 min",
    level: "Tehotné ženy",
    description:
      "Špeciálne navrhnutá pre tehotné ženy. Bezpečné cvičenia na posilnenie panvového dna a prípravu na pôrod.",
    image:
      "https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=600&h=400&fit=crop",
  },
  {
    id: "meditation",
    name: "Meditácia",
    duration: "45 min",
    level: "Všetky úrovne",
    description:
      "Vedené meditačné sedenia. Mindfulness, dychové techniky a relaxácia. Znižuje úzkosť a zlepšuje sústredenie.",
    image:
      "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=600&h=400&fit=crop",
  },
];

export const SCHEDULE: DaySchedule[] = [
  {
    day: "Pondelok",
    entries: [
      { time: "7:00", className: "Hatha Yoga", instructor: "Lucia" },
      { time: "9:00", className: "Meditácia", instructor: "Eva" },
      { time: "12:00", className: "Vinyasa Flow", instructor: "Marek" },
      { time: "17:00", className: "Yin Yoga", instructor: "Zuzana" },
      { time: "19:00", className: "Power Yoga", instructor: "Marek" },
    ],
  },
  {
    day: "Utorok",
    entries: [
      { time: "7:00", className: "Vinyasa Flow", instructor: "Marek" },
      { time: "9:00", className: "Hatha Yoga", instructor: "Lucia" },
      { time: "12:00", className: "Meditácia", instructor: "Eva" },
      { time: "17:00", className: "Power Yoga", instructor: "Marek" },
      { time: "19:00", className: "Yin Yoga", instructor: "Zuzana" },
    ],
  },
  {
    day: "Streda",
    entries: [
      { time: "7:00", className: "Meditácia", instructor: "Eva" },
      { time: "9:00", className: "Prenatálna Yoga", instructor: "Lucia" },
      { time: "12:00", className: "Hatha Yoga", instructor: "Lucia" },
      { time: "17:00", className: "Vinyasa Flow", instructor: "Marek" },
      { time: "19:00", className: "Power Yoga", instructor: "Marek" },
    ],
  },
  {
    day: "Štvrtok",
    entries: [
      { time: "7:00", className: "Yin Yoga", instructor: "Zuzana" },
      { time: "9:00", className: "Vinyasa Flow", instructor: "Marek" },
      { time: "12:00", className: "Meditácia", instructor: "Eva" },
      { time: "17:00", className: "Hatha Yoga", instructor: "Lucia" },
      { time: "19:00", className: "Prenatálna Yoga", instructor: "Lucia" },
    ],
  },
  {
    day: "Piatok",
    entries: [
      { time: "7:00", className: "Power Yoga", instructor: "Marek" },
      { time: "9:00", className: "Yin Yoga", instructor: "Zuzana" },
      { time: "12:00", className: "Vinyasa Flow", instructor: "Marek" },
      { time: "17:00", className: "Meditácia", instructor: "Eva" },
      { time: "19:00", className: "Hatha Yoga", instructor: "Lucia" },
    ],
  },
  {
    day: "Sobota",
    entries: [
      { time: "9:00", className: "Hatha Yoga", instructor: "Lucia" },
      { time: "9:00", className: "Vinyasa Flow", instructor: "Marek" },
      { time: "11:00", className: "Yin Yoga", instructor: "Zuzana" },
      { time: "11:00", className: "Meditácia", instructor: "Eva" },
      { time: "13:00", className: "Power Yoga", instructor: "Marek" },
    ],
  },
  {
    day: "Nedeľa",
    entries: [
      { time: "9:00", className: "Meditácia", instructor: "Eva" },
      { time: "10:00", className: "Yin Yoga", instructor: "Zuzana" },
      { time: "11:00", className: "Hatha Yoga", instructor: "Lucia" },
      { time: "17:00", className: "Vinyasa Flow", instructor: "Marek" },
      { time: "19:00", className: "Meditácia", instructor: "Eva" },
    ],
  },
];

export const INSTRUCTORS: Instructor[] = [
  {
    id: "lucia",
    name: "Lucia Kováčová",
    speciality: "Hatha & Prenatálna Yoga",
    bio: "Certifikovaná inštruktorka s 10-ročnou praxou. Vyštudovala jogu v Indii a špeciálne sa venuje začiatočníkom a tehotným ženám. Verí, že joga je pre každého.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=530&fit=crop&crop=top",
  },
  {
    id: "marek",
    name: "Marek Novák",
    speciality: "Vinyasa & Power Yoga",
    bio: "Bývalý profesionálny atléta, ktorý objavil silu jogy po zranení. Dnes učí dynamické štýly s dôrazom na správnu techniku a bezpečnosť.",
    image:
      "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?w=400&h=530&fit=crop&crop=top",
  },
  {
    id: "eva",
    name: "Eva Horváthová",
    speciality: "Meditácia & Mindfulness",
    bio: "Psychologička a meditačná lektorka. Kombinuje vedecký prístup s tradičnými technikami. Pomáha klientom zvládať stres a nájsť vnútorný pokoj.",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=530&fit=crop&crop=top",
  },
  {
    id: "zuzana",
    name: "Zuzana Procházková",
    speciality: "Yin Yoga & Regenerácia",
    bio: "Fyzioterapeutka a yin yoga inštruktorka. Jej hodiny sú terapeutickým zážitkom, ktorý hlboko uvoľňuje telo a obnovuje energiu.",
    image:
      "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=530&fit=crop&crop=top",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "dropin",
    name: "Drop-in",
    label: "Jednorázová lekcia",
    price: 12,
    period: "/ lekcia",
    features: [
      "1 lekcia podľa výberu",
      "Všetky štýly jogy",
      "Bez záväzkov",
      "Online rezervácia",
    ],
    featured: false,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    label: "Neobmedzený prístup",
    price: 49,
    period: "/ mesiac",
    features: [
      "Neobmedzené lekcie",
      "Všetky štýly a časy",
      "Prioritná rezervácia",
      "1× mesačná konzultácia",
      "Prístup k online materiálom",
    ],
    featured: true,
    badge: "Najpopulárnejší",
  },
  {
    id: "membership",
    name: "Členstvo",
    label: "8 lekcií mesačne",
    price: 39,
    period: "/ mesiac",
    features: [
      "8 lekcií mesačne",
      "Preniesť nevyužité lekcie",
      "Online rezervácia",
      "Vernostné zľavy",
    ],
    featured: false,
  },
];

export const WHY_ITEMS: WhyItem[] = [
  {
    id: "certified",
    icon: "🏅",
    title: "Certifikovaní inštruktori",
    description:
      "Všetci naši inštruktori majú medzinárodné certifikáty a pravidelne sa vzdelávajú. Vaša bezpečnosť a správna technika sú pre nás prioritou.",
  },
  {
    id: "small-groups",
    icon: "👥",
    title: "Malé skupiny",
    description:
      "Maximálne 12 žiakov na hodinu. Inštruktor má čas na každého, opraví polohu, poradí a prispôsobí cvičenie vašim potrebám.",
  },
  {
    id: "natural",
    icon: "🌿",
    title: "Prírodné materiály",
    description:
      "Štúdio používa len ekologické pomôcky z prírodných materiálov. Žiadne syntetické podložky — len prírodná korok a bambus.",
  },
  {
    id: "community",
    icon: "💚",
    title: "Priateľská komunita",
    description:
      "ZenFlow nie je len štúdio — je to komunita ľudí, ktorí si navzájom pomáhajú rásť. Pravidelné workshopy a retreaty pre členov.",
  },
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: "studio",
    src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop",
    alt: "Priestranné štúdio ZenFlow",
    span: true,
  },
  {
    id: "class",
    src: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=300&fit=crop",
    alt: "Skupinová lekcia jogy",
  },
  {
    id: "meditation",
    src: "https://images.unsplash.com/photo-1593811167562-9cef47bfc4d7?w=400&h=300&fit=crop",
    alt: "Meditačné sedenie",
  },
  {
    id: "props",
    src: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop",
    alt: "Prírodné pomôcky na jogu",
  },
  {
    id: "stretching",
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
    alt: "Strečing a flexibilita",
  },
  {
    id: "group",
    src: "https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=300&fit=crop",
    alt: "Skupinová hodina",
  },
];

export const REVIEWS: Review[] = [
  {
    id: "katarina",
    name: "Katarína M.",
    detail: "Členka od 2022",
    text: "ZenFlow zmenilo môj život. Po 6 mesiacoch cvičenia som sa zbavila chronických bolestí chrbta a konečne spím normálne. Lucia je úžasná inštruktorka!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=face",
  },
  {
    id: "peter",
    name: "Peter S.",
    detail: "Drop-in návštevník",
    text: "Ako chlap som sa bál ísť na jogu, ale Marek mi ukázal, že joga je pre každého. Power Yoga je náročná ako každý iný šport. Odporúčam všetkým!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
  },
  {
    id: "martina",
    name: "Martina K.",
    detail: "Prenatálna yoga",
    text: "Lucia je skvelá. Prenatálne hodiny mi pomohli počas celého tehotenstva. Cítila som sa silná, uvoľnená a pripravená na pôrod. Ďakujem ZenFlow!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=96&h=96&fit=crop&crop=face",
  },
  {
    id: "tomas",
    name: "Tomáš H.",
    detail: "Unlimited člen",
    text: "Chodieval som 3× týždenne na fitko. Teraz kombinujem Power Yogu s Yin Yogou a cítim sa lepšie ako kedykoľvek predtým. Výborný kolektív a profesionálny prístup.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&h=96&fit=crop&crop=face",
  },
];

export const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: "📍",
    title: "Adresa",
    lines: ["Štúrova 12", "811 02 Bratislava"],
  },
  {
    icon: "📞",
    title: "Telefón",
    lines: ["+421 902 123 456"],
  },
  {
    icon: "✉️",
    title: "Email",
    lines: ["info@zenflow.sk"],
  },
  {
    icon: "🕐",
    title: "Hodiny",
    lines: ["Po–Pia: 7:00 – 21:00", "Sob–Ned: 9:00 – 18:00"],
  },
];

export const CHAT_CONFIG: ChatConfig = {
  greeting:
    "Ahoj! Vitajte v ZenFlow 🌿 Som tu, aby som vám pomohol. Na čo sa chcete opýtať?",
  quickReplies: [
    {
      id: "schedule",
      label: "Rozvrh lekcií",
      response:
        "Naše lekcie prebiehajú každý deň od 7:00 do 21:00. Ponúkame Hatha Yogu, Vinyasa Flow, Yin Yogu, Power Yogu, Prenatálnu Yogu a Meditáciu. Pozrite si sekciu Rozvrh pre presné časy! 📅",
    },
    {
      id: "pricing",
      label: "Cenník",
      response:
        "Máme 3 možnosti: Drop-in lekcia za 12 €, Členstvo (8 lekcií/mesiac) za 39 €/mesiac, alebo Unlimited (neobmedzené lekcie) za 49 €/mesiac. Prvá lekcia je zadarmo pre nových záujemcov! 💚",
    },
    {
      id: "booking",
      label: "Rezervácia",
      response:
        "Rezerváciu môžete urobiť online cez formulár nižšie, alebo nás kontaktujte telefonicky na +421 902 123 456. Odporúčame rezervovať aspoň 24 hodín vopred. 📲",
    },
  ],
  fallbackResponse:
    "Ďakujem za vašu otázku! Pre podrobnejšie informácie nás kontaktujte na info@zenflow.sk alebo +421 902 123 456. Radi vám pomôžeme osobne! 🙏",
  whatsappNumber: "421902123456",
};

export const STATS: Stat[] = [
  { value: "8+", label: "Rokov skúseností" },
  { value: "2500+", label: "Spokojných žiakov" },
  { value: "18", label: "Lekcií týždenne" },
  { value: "4.9★", label: "Priemerné hodnotenie" },
];
