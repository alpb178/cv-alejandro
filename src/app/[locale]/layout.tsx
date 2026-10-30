import type { Metadata } from "next";
import { DM_Sans, Fraunces, JetBrains_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { isLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
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
    metadataBase: new URL("https://cv.corpsc.com"),
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { es: "/es", en: "/en", "x-default": "/es" },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://cv.corpsc.com/${locale}`,
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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alejandro Pérez",
  jobTitle: "Senior Frontend Developer",
  url: "https://cv.corpsc.com",
  email: "mailto:alesx2soporte@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Cruz de la Sierra",
    addressCountry: "BO",
  },
  sameAs: ["https://www.linkedin.com/in/alejandro-perez-dev", "https://kods.ai"],
  knowsAbout: ["React", "TypeScript", "React Native", "Strapi"],
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
