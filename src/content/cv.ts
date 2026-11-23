import type { Locale } from "@/i18n/config";

type T = { es: string; en: string };

export const profile = {
  name: "Alejandro Pérez",
  role: {
    es: "CEO de CORPSC · Senior Full Stack Developer (Web & Mobile) · React · TypeScript · IA",
    en: "CEO at CORPSC · Senior Full Stack Developer (Web & Mobile) · React · TypeScript · AI",
  } as T,
  location: {
    es: "Santa Cruz de la Sierra, Bolivia · Disponible remoto (LATAM / UE)",
    en: "Santa Cruz de la Sierra, Bolivia · Available remote (LATAM / EU)",
  } as T,
  email: "alesx2soporte@gmail.com",
  phone: "+591 736 556 92",
  whatsapp: "https://wa.me/59173655692",
  linkedin: "https://www.linkedin.com/in/alpb1708",
  website: "https://www.corpsc.com",
  websiteLabel: "www.corpsc.com",
  github: "https://github.com/alpb178",
  githubLabel: "alpb178",
};

export const summary: T = {
  es: "Ingeniero Informático y CEO de CORPSC, con más de 9 años construyendo aplicaciones web y móviles en producción para clientes de España, Cuba y Bolivia. Full stack con React.js, Next.js y TypeScript en el frontend, NestJS, Prisma y Django en el backend, y React Native/Expo en móvil, con 6 apps publicadas en Google Play y App Store. Testing end-to-end con Playwright y Cypress. Trabajo a diario con agentes de IA (Claude Code, Cursor) y desarrollo guiado por especificaciones (GitHub Spec Kit), lo que reduce los tiempos de entrega ~60% sin bajar la calidad: cada cambio se verifica con tests, lint y revisión de PR.",
  en: "Computer Engineer and CEO of CORPSC, with 9+ years building production web and mobile applications for clients in Spain, Cuba and Bolivia. Full stack: React.js, Next.js and TypeScript on the frontend, NestJS, Prisma and Django on the backend, and React Native/Expo on mobile, with 6 apps published on Google Play and the App Store. End-to-end testing with Playwright and Cypress. I work daily with AI coding agents (Claude Code, Cursor) and spec-driven development (GitHub Spec Kit), cutting delivery time by ~60% without lowering quality: every change is verified with tests, lint and PR review.",
};

export interface Highlight {
  value: string;
  label: T;
}

export const highlights: Highlight[] = [
  { value: "9+", label: { es: "años de experiencia full stack", en: "years of full stack experience" } },
  { value: "15+", label: { es: "proyectos en producción", en: "projects in production" } },
  { value: "~60%", label: { es: "reducción de tiempo con IA", en: "faster delivery with AI" } },
  { value: "6", label: { es: "apps publicadas (Google Play + App Store)", en: "apps published (Google Play + App Store)" } },
  { value: "5", label: { es: "productos SaaS propios", en: "own SaaS products" } },
];

export interface SkillGroup {
  label: T;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    label: { es: "Frontend", en: "Frontend" },
    items: ["React.js", "Next.js", "TypeScript", "Vue.js", "TanStack Query", "i18n (next-intl)", "HTML5", "CSS3", "Tailwind"],
  },
  {
    label: { es: "Móvil", en: "Mobile" },
    items: ["React Native", "Expo", "iOS · App Store", "Android · Google Play", "Android Studio", "Java", "Kotlin"],
  },
  {
    label: { es: "Backend & APIs", en: "Backend & APIs" },
    items: [
      "NestJS",
      "Node.js",
      "Prisma ORM",
      "Django / DRF",
      "Laravel",
      "FastAPI",
      "Ruby on Rails · Symfony · PHP/Yii",
      "REST API · Swagger/OpenAPI",
      "JWT · Passport",
      "WebSockets (Socket.io)",
      "Strapi (headless)",
      "Cloudinary",
      "Firebase (FCM)",
    ],
  },
  {
    label: { es: "Testing & QA", en: "Testing & QA" },
    items: ["Playwright", "Cypress", "Jest", "Pipelines E2E"],
  },
  {
    label: { es: "IA aplicada al desarrollo", en: "AI-assisted development" },
    items: [
      "Claude Code (AI agents)",
      "Cursor",
      "Spec-Driven Development (GitHub Spec Kit)",
      "Context engineering (CLAUDE.md / AGENTS.md)",
      "Parallel agents (git worktrees)",
    ],
  },
  {
    label: { es: "Despliegue & CI/CD", en: "Deployment & CI/CD" },
    items: ["Vercel", "Render", "GitHub Actions", "Git / GitHub"],
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
    role: { es: "Fundador y CEO", en: "Founder & CEO" },
    company: "CORPSC",
    companyUrl: "https://www.corpsc.com",
    location: { es: "Santa Cruz de la Sierra, Bolivia · Remoto", en: "Santa Cruz de la Sierra, Bolivia · Remote" },
    period: { es: "2026 — Presente", en: "2026 — Present" },
    bullets: [
      {
        es: "Dirijo CORPSC, un estudio de software que diseña, construye y opera productos SaaS propios y proyectos para clientes.",
        en: "I run CORPSC, a software studio that designs, builds and operates its own SaaS products and client projects.",
      },
      {
        es: "Arquitectura y desarrollo full stack de 5 productos en producción con Next.js, NestJS, Prisma y apps móviles con Expo.",
        en: "Architecture and full stack development of 5 products in production with Next.js, NestJS, Prisma and Expo mobile apps.",
      },
      {
        es: "Desarrollo con agentes de IA (Claude Code + GitHub Spec Kit): especificación → plan → tareas → implementación, con cada cambio verificado por tests E2E, lint y revisión de PR.",
        en: "AI-agent development (Claude Code + GitHub Spec Kit): specification → plan → tasks → implementation, with every change verified by E2E tests, lint and PR review.",
      },
      {
        es: "Flujo de entrega con ramas por feature, revisión de código y releases a producción en Vercel y Render.",
        en: "Delivery workflow with feature branches, code review and production releases on Vercel and Render.",
      },
      {
        es: "Productos en vivo: take · invoices · irisnatural · tu-chamba · linehot (.corpsc.com).",
        en: "Live products: take · invoices · irisnatural · tu-chamba · linehot (.corpsc.com).",
      },
    ],
    stack: ["Next.js", "NestJS", "Prisma", "Expo", "PostgreSQL", "Vercel", "Render", "Claude Code"],
  },
  {
    role: { es: "Full Stack Developer (Web & Mobile)", en: "Full Stack Developer (Web & Mobile)" },
    company: "EMX Comunicaciones",
    companyUrl: "https://emxcomunicaciones.com",
    location: { es: "Remoto · Donostia, España", en: "Remote · Donostia, Spain" },
    period: { es: "May 2025 — Presente", en: "May 2025 — Present" },
    bullets: [
      {
        es: "Desarrollo full stack del ecosistema Tikneo: tres productos con plataforma web y apps móviles publicadas en Google Play y App Store.",
        en: "Full stack development of the Tikneo ecosystem: three products with a web platform and mobile apps published on Google Play and the App Store.",
      },
      {
        es: "Tikneo: gestión para pymes con fichaje digital legal desde el móvil, proyectos, tiempos y gastos.",
        en: "Tikneo: SME management with legally compliant mobile time tracking, projects, hours and expenses.",
      },
      {
        es: "Orlegitech: gestión de campos de golf con informes aéreos del césped, control de flota y partes del personal.",
        en: "Orlegitech: golf course management with aerial turf reports, fleet tracking and staff reports.",
      },
      {
        es: "Popyplan: red social de planes de deporte y naturaleza sin alcohol ni drogas, con comunidades y asistencia por QR.",
        en: "Popyplan: social network for sport and outdoor plans free of alcohol and drugs, with communities and QR check-in.",
      },
      {
        es: "Publicación y mantenimiento de 6 apps React Native en Google Play y App Store.",
        en: "Publishing and maintaining 6 React Native apps on Google Play and the App Store.",
      },
      {
        es: "Proyectos en vivo: tikneo.com · app.tikneo.com · orlegitech.com · app.orlegitech.com · popyplan.com.",
        en: "Live projects: tikneo.com · app.tikneo.com · orlegitech.com · app.orlegitech.com · popyplan.com.",
      },
    ],
    stack: ["React.js", "TypeScript", "React Native", "Django/DRF", "iOS", "Android", "Playwright"],
  },
  {
    role: { es: "Full Stack Developer (Frontend Focus)", en: "Full Stack Developer (Frontend Focus)" },
    company: "KODS.AI",
    companyUrl: "https://kods.ai",
    location: { es: "Remoto · La Habana, Cuba", en: "Remote · Havana, Cuba" },
    period: { es: "2023 — Nov 2026", en: "2023 — Nov 2026" },
    bullets: [
      {
        es: "Desarrollo frontend con React.js + TypeScript: construyo y mantengo plataformas web para clientes internacionales en España y la Unión Europea.",
        en: "Frontend development with React.js + TypeScript: build and maintain web platforms for international clients across Spain and the European Union.",
      },
      {
        es: "Diseñé la arquitectura headless con Strapi CMS, permitiendo a los equipos de contenido gestionar datos de forma independiente al frontend.",
        en: "Architected and integrated Strapi CMS as a headless backend, enabling content teams to manage data independently from the frontend.",
      },
      {
        es: "Monitoreo de las plataformas en producción (disponibilidad, errores y rendimiento), detectando y resolviendo incidencias de forma proactiva.",
        en: "Monitoring of production platforms (availability, errors and performance), proactively detecting and resolving incidents.",
      },
      {
        es: "Soporte técnico a clientes y usuarios finales: diagnóstico de incidencias, corrección de errores y despliegue de hotfixes.",
        en: "Technical support for clients and end users: incident diagnosis, bug fixing and hotfix delivery.",
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
        es: "Proyectos en vivo: kods.ai · zendinit.com.",
        en: "Live projects: kods.ai · zendinit.com.",
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
        es: "Entregable: histolword.corpsc.com.",
        en: "Delivered: histolword.corpsc.com.",
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

export interface ProjectLink {
  kind: "android" | "ios";
  url: string;
}

export interface Project {
  name: string;
  /** Public website: the card's main link. */
  url: string;
  kind: "own" | "client";
  summary: T;
  stack: string[];
  /** Store listings, in android → ios order. Each one is a concrete app page, never a search. */
  links?: ProjectLink[];
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
    stack: ["Next.js", "NestJS", "Prisma", "Cloudinary"],
  },
  {
    name: "Invoices",
    url: "https://invoices.corpsc.com",
    kind: "own",
    summary: {
      es: "Generador y gestor de facturas en PDF, web y app móvil, en producción.",
      en: "PDF invoice generator and manager, web and mobile app, in production.",
    },
    stack: ["Next.js", "NestJS", "Prisma", "Expo"],
  },
  {
    name: "Iris Natural",
    url: "https://irisnatural.corpsc.com",
    kind: "own",
    summary: {
      es: "Tienda online de productos naturales, web y app móvil, en producción.",
      en: "Online store for natural products, web and mobile app, in production.",
    },
    stack: ["Next.js", "NestJS", "Prisma", "Expo"],
  },
  {
    name: "Tu Chamba",
    url: "https://tu-chamba.corpsc.com",
    kind: "own",
    summary: {
      es: "Bolsa de empleo para Bolivia con contacto directo por WhatsApp, web y app móvil, en producción.",
      en: "Job marketplace for Bolivia with direct WhatsApp contact, web and mobile app, in production.",
    },
    stack: ["Next.js", "NestJS", "Prisma", "Expo"],
  },
  {
    name: "Line Hot",
    url: "https://linehot.corpsc.com",
    kind: "own",
    summary: {
      es: "App de citas para Bolivia, web y móvil, en producción.",
      en: "Dating app for Bolivia, web and mobile, in production.",
    },
    stack: ["Next.js", "React Native", "NestJS", "Prisma"],
  },
];

export const clientProjects: Project[] = [
  // ── Tikneo ecosystem (EMX Comunicaciones) ──
  {
    name: "Tikneo",
    url: "https://tikneo.com",
    kind: "client",
    summary: {
      es: "Gestión para pymes: fichaje digital, proyectos, tiempos y gastos. Web, Android e iOS.",
      en: "SME management: time tracking, projects, hours and expenses. Web, Android and iOS.",
    },
    stack: ["React.js", "React Native", "Django/DRF", "iOS", "Android"],
    links: [
      { kind: "android", url: "https://play.google.com/store/apps/details?id=com.tikneoapp.tikneoapp" },
      { kind: "ios", url: "https://apps.apple.com/us/app/tikneo/id6651859831" },
    ],
  },
  {
    name: "Orlegitech",
    url: "https://orlegitech.com",
    kind: "client",
    summary: {
      es: "Gestión de campos de golf: césped, informes aéreos, flota y personal. Web, Android e iOS.",
      en: "Golf course management: turf, aerial reports, fleet and staff. Web, Android and iOS.",
    },
    stack: ["React.js", "React Native", "iOS", "Android"],
    links: [
      { kind: "android", url: "https://play.google.com/store/apps/details?id=com.tikneo.golf" },
      { kind: "ios", url: "https://apps.apple.com/us/app/orlegitech/id6755734300" },
    ],
  },
  {
    name: "Popyplan",
    url: "https://popyplan.com",
    kind: "client",
    summary: {
      es: "Planes y comunidades de deporte y naturaleza sin alcohol ni drogas. Android e iOS.",
      en: "Sport and outdoor plans and communities, free of alcohol and drugs. Android and iOS.",
    },
    stack: ["React.js", "React Native", "iOS", "Android"],
    links: [
      { kind: "android", url: "https://play.google.com/store/apps/details?id=com.tikneo.popmobile" },
      { kind: "ios", url: "https://apps.apple.com/us/app/popyplan/id6755899118" },
    ],
  },
  {
    name: "Kods AI Platform",
    url: "https://kods.ai",
    kind: "client",
    summary: { es: "Plataforma web con integraciones de IA.", en: "Web platform with AI integrations." },
    stack: ["React.js", "Strapi", "Claude AI", "TypeScript"],
  },
  {
    name: "HistolWord — Universidad de Málaga",
    url: "https://histolword.corpsc.com",
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
    name: "Dando Muela",
    url: "https://dandomuela.com",
    kind: "client",
    summary: {
      es: "Ecosistema web y móvil con API de autenticación y bot de Telegram con pagos en la red TON. Rol: desarrollador.",
      en: "Web and mobile ecosystem with an auth API and a Telegram bot with TON-network payments. Role: developer.",
    },
    stack: ["Laravel", "FastAPI", "Python", "Telegram Bot", "TON"],
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
