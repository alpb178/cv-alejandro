import { ImageResponse } from "next/og";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { profile } from "@/content/cv";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Alejandro Pérez — Senior Frontend Developer";

const copy: Record<Locale, { tagline: string; cta: string }> = {
  es: {
    tagline: "React · TypeScript · React Native · Strapi",
    cta: "CV digital",
  },
  en: {
    tagline: "React · TypeScript · React Native · Strapi",
    cta: "Digital resume",
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const { tagline, cta } = copy[locale];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          padding: "80px",
          color: "#f5f6fa",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#7aa2ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
              color: "#05060a",
            }}
          >
            AP
          </div>
          <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: -0.5, color: "#97a0b3" }}>
            {cta}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.05 }}>{profile.name}</div>
          <div style={{ fontSize: 34, color: "#97a0b3" }}>Senior Frontend Developer</div>
          <div style={{ fontSize: 28, color: "#7aa2ff" }}>{tagline}</div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#6b7589",
          }}
        >
          <div style={{ display: "flex" }}>cv.corpsc.com</div>
          <div style={{ display: "flex" }}>Santa Cruz de la Sierra, Bolivia</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
