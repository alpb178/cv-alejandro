import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import { SITE_URL } from "@/content/site";
import { ThemeProvider, themeBootstrapScript } from "@/components/ThemeProvider";
import "../globals.css";

// Same trio as the group's invoice-gen site: DM Sans for body/UI, Fraunces
// for display headings, JetBrains Mono for small data-like labels. Bound to
// their own CSS vars (not `--font-sans` etc. directly) because this project's
// Tailwind v4 `@theme` block defines `--font-sans`/`--font-serif`/`--font-mono`
// as theme tokens in terms of these — naming them the same would make the
// theme token reference itself and resolve to nothing.
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = getDictionary(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `${SITE_URL}/${locale}`,
      type: "profile",
      locale: locale === "es" ? "es_BO" : "en_US",
      siteName: "Alejandro Pérez — CV",
      images: [
        {
          url: `/${locale}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: dict.meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
      images: [`/${locale}/opengraph-image`],
    },
  };
}

// Hides the header highlight figures until CountUpValue animates them. Only runs the
// animation path when motion is allowed and the figures haven't already counted up in
// this session (same key as CountUpValue). Crawlers and no-JS visitors never get the
// class, so they see the final values; globals.css also reveals them after 2 s.
const countupBootstrapScript = `
(function(){
  try{
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches &&
        sessionStorage.getItem('cv-countup-played') !== '1') {
      document.documentElement.classList.add('countup');
    }
  }catch(e){}
})();
`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alejandro Pérez",
  jobTitle: "CEO & Senior Full Stack Developer",
  worksFor: [
    { "@type": "Organization", name: "CORPSC", url: "https://www.corpsc.com" },
    { "@type": "Organization", name: "EMX Comunicaciones", url: "https://emxcomunicaciones.com" },
  ],
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "CUJAE — Universidad Tecnológica de La Habana «José Antonio Echeverría»",
  },
  url: SITE_URL,
  email: "mailto:alesx2soporte@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Cruz de la Sierra",
    addressCountry: "BO",
  },
  sameAs: ["https://www.linkedin.com/in/alpb1708", "https://github.com/alpb178", "https://www.corpsc.com"],
  knowsAbout: ["React", "Next.js", "TypeScript", "React Native", "Expo", "NestJS", "Prisma", "Django", "PostgreSQL", "Playwright"],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${dmSans.variable} ${fraunces.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBootstrapScript }} />
        <script dangerouslySetInnerHTML={{ __html: countupBootstrapScript }} />
      </head>
      <body className="bg-surface text-fg antialiased font-sans">
        <ThemeProvider>{children}</ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
