import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { SITE_URL as base } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${base}/${locale}`]),
  );

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified,
    alternates: { languages },
  }));
}
