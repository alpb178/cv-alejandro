import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { pick, profile } from "@/content/cv";
import { SITE_HOST } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Alejandro Pérez — CEO at CORPSC · Senior Full Stack Developer";

// Light-theme tokens from globals.css. Every text colour clears 4.5:1 on the
// background; fg-faint and accent-strong are left out on purpose (they don't).
const palette = {
  surface: "#f7f7f5",
  fg: "#0a0c14",
  fgMuted: "#3a4358",
  fgSubtle: "#5b6478",
  accent: "#1f48c4",
  accentSoft: "rgba(31, 72, 196, 0.10)",
};

const copy: Record<Locale, { cta: string }> = {
  es: { cta: "CV digital" },
  en: { cta: "Digital resume" },
};

// DM Sans is the site's UI font; next/og only takes ttf/otf/woff, so static
// instances live in assets/og (OFL). Read once at module scope.
const dmSansRegular = await readFile(join(process.cwd(), "assets/og/DMSans-Regular.ttf"));
const dmSansSemiBold = await readFile(join(process.cwd(), "assets/og/DMSans-SemiBold.ttf"));

// Same photo as the CV header. If it can't be read, the card falls back to the
// "AP" monogram instead of failing the build.
let portraitSrc: string | null = null;
try {
  portraitSrc = `data:image/jpeg;base64,${await readFile(join(process.cwd(), "public/images/portrait.jpg"), "base64")}`;
} catch {
  portraitSrc = null;
}

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
  const { cta } = copy[locale];

  // Split exactly like HeaderCard so the preview can't drift from the CV.
  const role = pick(profile.role, locale).split("·");
  const eyebrow = role[0].trim();
  const summary = role.slice(1).join("·").trim();
  const location = pick(profile.location, locale).split("·")[0].trim();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          background: palette.surface,
          padding: 64,
          color: palette.fg,
          fontFamily: "DM Sans",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -160,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background: palette.accentSoft,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 10,
            background: palette.accent,
          }}
        />

        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              padding: "8px 18px",
              borderRadius: 9999,
              background: palette.accentSoft,
              color: palette.accent,
              fontSize: 22,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            {cta}
          </div>
        </div>

        <div style={{ display: "flex", flex: 1, alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              paddingRight: 48,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 26,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: palette.accent,
              }}
            >
              {eyebrow}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 12,
                fontSize: 76,
                fontWeight: 600,
                letterSpacing: -1.5,
                lineHeight: 1.05,
                color: palette.fg,
              }}
            >
              {profile.name}
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 20,
                fontSize: 32,
                lineHeight: 1.3,
                color: palette.fgMuted,
              }}
            >
              {summary}
            </div>
            <div style={{ display: "flex", marginTop: 16, fontSize: 26, color: palette.fgSubtle }}>
              {location}
            </div>
          </div>

          {portraitSrc ? (
            <img
              src={portraitSrc}
              alt=""
              width={320}
              height={320}
              style={{
                objectFit: "cover",
                borderRadius: 32,
                border: "1px solid rgba(15, 23, 42, 0.08)",
              }}
            />
          ) : (
            <Monogram />
          )}
        </div>

        <div style={{ display: "flex", fontSize: 26, color: palette.fgSubtle }}>{SITE_HOST}</div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "DM Sans", data: dmSansRegular, weight: 400, style: "normal" },
        { name: "DM Sans", data: dmSansSemiBold, weight: 600, style: "normal" },
      ],
    }
  );
}

function Monogram() {
  return (
    <div
      style={{
        width: 320,
        height: 320,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 32,
        background: palette.accent,
        color: "#ffffff",
        fontSize: 96,
        fontWeight: 600,
      }}
    >
      AP
    </div>
  );
}
