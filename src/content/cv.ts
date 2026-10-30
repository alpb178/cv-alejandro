import type { Locale } from "@/i18n/config";

type T = { es: string; en: string };

export const profile = {
  name: "Alejandro Pérez",
  role: {
    es: "Senior Frontend Developer · React · TypeScript · Desarrollo asistido por IA",
    en: "Senior Frontend Developer · React · TypeScript · AI-Powered Development",
  } as T,
  location: {
    es: "Santa Cruz de la Sierra, Bolivia · Disponible remoto (LATAM / UE)",
    en: "Santa Cruz de la Sierra, Bolivia · Available remote (LATAM / EU)",
  } as T,
  email: "alesx2soporte@gmail.com",
  phone: "+591 736 556 92",
  whatsapp: "https://wa.me/59173655692",
  linkedin: "https://www.linkedin.com/in/alejandro-perez-dev",
  website: "https://kods.ai",
  github: null as string | null,
};

export const summary: T = {
  es: "Ingeniero Informático con más de 9 años de experiencia construyendo aplicaciones web y móviles en producción para clientes internacionales en España, Cuba y Bolivia. Especializado en React.js, TypeScript y Strapi CMS, con experiencia sólida en desarrollo móvil (React Native, Android) y testing end-to-end (Playwright, Cypress). Adoptante temprano del desarrollo asistido por IA (Claude AI, Cursor IDE), reduciendo tiempos de entrega ~60% sin sacrificar calidad. Adicionalmente desarrollo y mantengo productos SaaS propios en producción.",
  en: "Computer Engineer with 9+ years of experience building production web and mobile applications for international clients across Spain, Cuba and Bolivia. Specialized in React.js, TypeScript and Strapi CMS, with strong experience in mobile development (React Native, Android) and end-to-end testing (Playwright, Cypress). Early adopter of AI-powered development (Claude AI, Cursor IDE), reducing delivery time by ~60% while keeping high code quality. I also build and maintain personal SaaS products in production.",
};

export interface Highlight {
  value: string;
  label: T;
}

export const highlights: Highlight[] = [
  { value: "9+", label: { es: "años de experiencia full stack", en: "years of full stack experience" } },
  { value: "15+", label: { es: "proyectos en producción", en: "projects in production" } },
  { value: "~60%", label: { es: "reducción de tiempo con IA", en: "faster delivery with AI" } },
  { value: "2", label: { es: "apps en Google Play", en: "apps on Google Play" } },
  { value: "3", label: { es: "productos SaaS propios", en: "own SaaS products" } },
];

export interface SkillGroup {
  label: T;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: { es: "Frontend", en: "Frontend" },
    items: ["React.js", "Next.js", "TypeScript", "Vue.js", "HTML5", "CSS3", "Tailwind"],
  },
  {
    label: { es: "Móvil", en: "Mobile" },
    items: ["React Native", "Android Studio", "Java", "Kotlin"],
  },
  {
    label: { es: "Backend & CMS", en: "Backend & CMS" },
    items: ["Strapi (headless)", "Node.js", "Symfony", "Ruby on Rails", "PHP / Yii"],
  },
  {
    label: { es: "Testing & QA", en: "Testing & QA" },
    items: ["Playwright", "Cypress", "Jest", "Pipelines E2E"],
  },
  {
    label: { es: "IA & Dev tools", en: "AI & Dev tools" },
    items: ["Claude AI", "Cursor IDE", "Prompt Engineering", "Git / GitHub", "CI/CD"],
  },
  {
    label: { es: "Bases de datos", en: "Databases" },
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"],
  },
  {
    label: { es: "Metodologías", en: "Methodologies" },
    items: [
      "Agile / Scrum",
      "Git Flow",
      "Code review",
      "Remoto async",
    ],
  },
];

export interface Experience {
  role: T;
  company: string;
  companyUrl?: string;
  location: T;
  period: T;
  bullets: T[];
  stack: string[];
}

export const experience: Experience[] = [
  {
    role: { es: "Full Stack Developer (Frontend Focus)", en: "Full Stack Developer (Frontend Focus)" },
    company: "KODS.AI",
    companyUrl: "https://kods.ai",
    location: { es: "Remoto · La Habana, Cuba", en: "Remote · Havana, Cuba" },
    period: { es: "2023 — Presente", en: "2023 — Present" },
    bullets: [
      {
        es: "Construyo y mantengo plataformas web React.js + TypeScript para clientes internacionales en España y la Unión Europea.",
        en: "Build and maintain React.js + TypeScript web platforms for international clients across Spain and the European Union.",
      },
      {
        es: "Diseñé la arquitectura headless con Strapi CMS, permitiendo a los equipos de contenido gestionar datos de forma independiente al frontend.",
        en: "Architected and integrated Strapi CMS as a headless backend, enabling content teams to manage data independently from the frontend.",
      },
      {
        es: "Integré Claude AI y Cursor IDE en el flujo diario para generación de código, revisión y refactor — reduciendo tiempos de entrega ~60%.",
        en: "Integrated Claude AI and Cursor IDE into the daily workflow for code generation, automated review and refactoring — cutting estimated delivery times by ~60%.",
      },
      {
        es: "Implementé suites E2E automatizadas con Playwright y Cypress, reduciendo significativamente regresiones en producción.",
        en: "Designed and implemented automated E2E test suites with Playwright and Cypress, significantly reducing production regressions.",
      },
      {
        es: "Proyectos en vivo: kods.ai · app.tikneo.com · app.orlegitech.com · zendinit.com.",
        en: "Live projects: kods.ai · app.tikneo.com · app.orlegitech.com · zendinit.com.",
      },
    ],
    stack: ["React.js", "TypeScript", "Strapi", "Playwright", "Cypress", "Claude AI", "Cursor IDE", "React Native"],
  },
  {
    role: { es: "Full Stack Developer (contrato paralelo)", en: "Full Stack Developer (parallel contract)" },
    company: "DESOFT",
    location: { es: "Remoto · La Habana, Cuba", en: "Remote · Havana, Cuba" },
    period: { es: "2023 — 2025", en: "2023 — 2025" },
    bullets: [
      {
        es: "Entregué plataformas web React.js para instituciones educativas y clientes corporativos.",
        en: "Delivered React.js web platforms for educational institutions and corporate clients.",
      },
      {
        es: "Construí aplicaciones Android con Android Studio (Java / Kotlin).",
        en: "Built Android applications with Android Studio (Java / Kotlin).",
      },
      {
        es: "Entregables: histolword.corpsc.com · humancore.corpsc.com · tikneo.corpsc.com · pop.corpsc.com.",
        en: "Delivered: histolword.corpsc.com · humancore.corpsc.com · tikneo.corpsc.com · pop.corpsc.com.",
      },
    ],
    stack: ["React.js", "Android Studio", "Java", "Kotlin"],
  },
  {
    role: { es: "Frontend & Mobile Developer", en: "Frontend & Mobile Developer" },
    company: "CENTINELA",
    location: { es: "Remoto · La Habana, Cuba", en: "Remote · Havana, Cuba" },
    period: { es: "2021 — 2023", en: "2021 — 2023" },
    bullets: [
      {
        es: "Desarrollé interfaces React.js para sistemas de gestión y seguridad.",
        en: "Developed React.js web interfaces for management and security systems.",
      },
      {
        es: "Construí aplicaciones móviles cross-platform con React Native.",
        en: "Built cross-platform mobile applications with React Native.",
      },
    ],
    stack: ["React.js", "React Native"],
  },
  {
    role: { es: "Backend Developer (Ruby on Rails) — contrato paralelo", en: "Backend Developer (Ruby on Rails) — parallel contract" },
    company: "CENIT / CENCO",
    location: { es: "Remoto · La Habana, Cuba", en: "Remote · Havana, Cuba" },
    period: { es: "2020 — 2021", en: "2020 — 2021" },
    bullets: [
      {
        es: "Desarrollo backend de la plataforma velosimo.com en Ruby on Rails.",
        en: "Backend development of the velosimo.com platform in Ruby on Rails.",
      },
      {
        es: "Módulos web con React.js, Vue.js y Symfony; integración con APIs REST.",
        en: "Web modules with React.js, Vue.js and Symfony; REST API integration.",
      },
    ],
    stack: ["Ruby on Rails", "React.js", "Vue.js", "Symfony", "PostgreSQL"],
  },
  {
    role: { es: "Frontend & Mobile Developer", en: "Frontend & Mobile Developer" },
    company: "SEVAC / Joven Club de Computación",
    location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
    period: { es: "2019 — 2022", en: "2019 — 2022" },
    bullets: [
      {
        es: "Construí APK Android para la Empresa de Servicios de Aviación Civil (Java, Android Studio).",
        en: "Built Android APK for the Civil Aviation Services Company (Java, Android Studio).",
      },
      {
        es: "Desarrollé app móvil de directorio telefónico para la red nacional Joven Club.",
        en: "Developed mobile phone directory app for the nationwide Joven Club network.",
      },
      {
        es: "Frontends React.js sobre APIs REST en Symfony y CMS headless Strapi.",
        en: "Built React.js web frontends with Symfony REST APIs and Strapi headless CMS.",
      },
    ],
    stack: ["React.js", "Android Studio", "Strapi", "Symfony", "Java"],
  },
  {
    role: { es: "Database Admin & Web Developer", en: "Database Admin & Web Developer" },
    company: "Dirección de Tecnología y Sistemas · CIT · INFOCAP",
    location: { es: "La Habana, Cuba", en: "Havana, Cuba" },
    period: { es: "2011 — 2018", en: "2011 — 2018" },
    bullets: [
      {
        es: "Administré bases de datos PostgreSQL / MySQL en entornos críticos; optimicé queries SQL y automatización de backups (2016-2018).",
        en: "Administered PostgreSQL / MySQL databases in critical production environments; optimized SQL queries and automated backups (2016-2018).",
      },
      {
        es: "Módulos de contabilidad y RRHH con PHP/Yii Framework; programación web y análisis de datos (2011-2015).",
        en: "Built accounting and HR modules using PHP/Yii Framework, web programming and data analysis (2011-2015).",
      },
    ],
    stack: ["PostgreSQL", "MySQL", "PHP", "Yii"],
  },
];

export interface Project {
  name: string;
  url: string;
  kind: "own" | "client";
  summary: T;
  stack: string[];
}

export const ownProjects: Project[] = [
  {
    name: "Take",
    url: "https://take.corpsc.com",
    kind: "own",
    summary: {
      es: "Plataforma e-commerce / marketplace en producción. Producto propio.",
      en: "E-commerce / marketplace platform in production. Own product.",
    },
    stack: ["React.js", "Strapi", "REST API"],
  },
  {
    name: "Invoices",
    url: "https://invoices.corpsc.com",
    kind: "own",
    summary: {
      es: "Generador y gestor de facturas en PDF, en producción.",
      en: "PDF invoice generator and manager, in production.",
    },
    stack: ["React.js", "Strapi", "REST API"],
  },
  {
    name: "Iris Natural",
    url: "https://irisnatural.corpsc.com",
    kind: "own",
    summary: {
      es: "Tienda online de productos naturales, en producción.",
      en: "Online store for natural products, in production.",
    },
    stack: ["React.js", "Strapi", "REST API"],
  },
];

export const clientProjects: Project[] = [
  {
    name: "Kods AI Platform",
    url: "https://kods.ai",
    kind: "client",
    summary: { es: "Plataforma web con integraciones de IA.", en: "Web platform with AI integrations." },
    stack: ["React.js", "Strapi", "Claude AI", "TypeScript"],
  },
  {
    name: "Tikneo Web App",
    url: "https://app.tikneo.com",
    kind: "client",
    summary: { es: "Plataforma de gestión de eventos y torneos de golf.", en: "Golf event and tournament management platform." },
    stack: ["React.js", "Strapi", "REST API"],
  },
  {
    name: "Tikneo Golf (Google Play)",
    url: "https://play.google.com/store/search?q=tikneo%20golf",
    kind: "client",
    summary: { es: "App móvil de gestión de rondas de golf.", en: "Mobile app for golf round management." },
    stack: ["React Native", "Android"],
  },
  {
    name: "Tikneo Social (Google Play)",
    url: "https://play.google.com/store/search?q=tikneo%20social",
    kind: "client",
    summary: { es: "App social para comunidades deportivas.", en: "Social app for sports communities." },
    stack: ["React Native", "Android"],
  },
  {
    name: "HistolWord — Universidad de Málaga",
    url: "https://histolword.uma.es",
    kind: "client",
    summary: { es: "Plataforma educativa de histología (Universidad de Málaga, España).", en: "Histology educational platform (University of Málaga, Spain)." },
    stack: ["React.js"],
  },
  {
    name: "Zendinit",
    url: "https://zendinit.com",
    kind: "client",
    summary: { es: "Plataforma de servicios con CMS headless.", en: "Services platform with headless CMS." },
    stack: ["React.js", "Strapi"],
  },
  {
    name: "Orlegitech",
    url: "https://app.orlegitech.com",
    kind: "client",
    summary: { es: "Plataforma multilingüe de gestión empresarial (ES / EN).", en: "Multilingual business management platform (ES / EN)." },
    stack: ["React.js"],
  },
  {
    name: "HumanCore",
    url: "https://humancore.corpsc.com",
    kind: "client",
    summary: { es: "Sistema corporativo de RRHH con dashboards.", en: "Corporate HR system with dashboards." },
    stack: ["React.js"],
  },
];

export interface EducationItem {
  title: T;
  institution: T;
  period: string;
}

export const education: EducationItem[] = [
  {
    title: { es: "Ingeniería en Informática", en: "Bachelor's Degree in Computer Engineering" },
    institution: {
      es: "CUJAE — Universidad Tecnológica de La Habana «José Antonio Echeverría» · La Habana, Cuba",
      en: "CUJAE — Technological University of Havana \"José Antonio Echeverría\" · Havana, Cuba",
    },
    period: "2011 — 2016",
  },
  {
    title: { es: "Desarrollo web dinámico (PHP / MySQL)", en: "Dynamic Web Development (PHP / MySQL)" },
    institution: { es: "Desoft · La Habana", en: "Desoft · Havana" },
    period: "2015",
  },
];

export interface Language {
  name: T;
  level: T;
}

export const languages: Language[] = [
  {
    name: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
  },
  {
    name: { es: "Inglés", en: "English" },
    level: {
      es: "B1 — Lectura y comunicación técnica escrita sólidas",
      en: "B1 — Strong reading and written technical communication",
    },
  },
];

export function pick<V>(value: { es: V; en: V }, locale: Locale): V {
  return value[locale];
}
