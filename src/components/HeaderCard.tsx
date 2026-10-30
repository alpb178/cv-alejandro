import Image from "next/image";
import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import { highlights, pick, profile } from "@/content/cv";

export default function HeaderCard({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section className="pt-10 sm:pt-14">
      <div className="surface-card relative overflow-hidden rounded-3xl p-6 sm:p-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl"
          style={{ background: "var(--accent-soft)" }}
        />

        <div className="relative grid items-center gap-8 sm:grid-cols-[auto_1fr]">
          <div className="relative w-28 shrink-0 overflow-hidden rounded-2xl border border-line bg-elevated aspect-[7/15] sm:w-32">
            <Image
              src="/images/portrait.jpg"
              alt={
                locale === "es"
                  ? `${profile.name}, Senior Frontend Developer en Santa Cruz de la Sierra, Bolivia`
                  : `${profile.name}, Senior Frontend Developer based in Santa Cruz de la Sierra, Bolivia`
              }
              fill
              className="object-cover"
              sizes="(min-width: 640px) 128px, 112px"
              priority
            />
          </div>

          <div className="min-w-0">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-accent">
              {pick(profile.role, locale).split("·")[0].trim()}
            </p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
              {profile.name}
            </h1>
            <p className="mt-3 text-sm text-fg-muted sm:text-base">
              {pick(profile.role, locale)}
            </p>
            <p className="mt-1 text-sm text-fg-subtle">{pick(profile.location, locale)}</p>

            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <ContactLink href={`mailto:${profile.email}`} icon="mail" label={profile.email} />
              <ContactLink href={profile.whatsapp} icon="phone" label={profile.phone} />
              <ContactLink href={profile.linkedin} icon="linkedin" label="LinkedIn" />
              <ContactLink href={profile.website} icon="link" label="kods.ai" />
            </ul>
          </div>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-5">
          {highlights.map((h) => (
            <div key={h.value} className="bg-surface p-4 text-center sm:text-left">
              <dt className="text-[10px] font-medium uppercase tracking-[0.18em] text-fg-faint">
                {pick(h.label, locale)}
              </dt>
              <dd className="mt-1 text-xl font-semibold tracking-tight text-fg sm:text-2xl">
                {h.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex items-center gap-2 rounded-2xl border border-line bg-card px-4 py-3 text-sm">
          <span className="h-2 w-2 rounded-full bg-positive shadow-[0_0_10px_var(--color-positive)]" />
          <span className="text-fg-faint">{dict.ui.availableFor}:</span>
          <span className="text-fg">{dict.ui.availabilityValue}</span>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: "mail" | "phone" | "linkedin" | "link";
  label: string;
}) {
  const isExternal = href.startsWith("http");
  return (
    <li>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer noopener" : undefined}
        className="inline-flex items-center gap-1.5 text-fg transition hover:text-accent"
      >
        <Icon name={icon} />
        <span>{label}</span>
      </a>
    </li>
  );
}

function Icon({ name }: { name: "mail" | "phone" | "linkedin" | "link" }) {
  const paths: Record<string, React.ReactNode> = {
    mail: (
      <>
        <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" stroke="currentColor" strokeWidth="1.5" />
        <path d="m3 8 9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
    phone: (
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 10v7M8 7.5v.01M12 17v-4a2 2 0 0 1 4 0v4M12 17v-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
    link: (
      <path d="M9.5 14.5 14.5 9.5M8 13l-2 2a3.5 3.5 0 1 0 5 5l2-2M16 11l2-2a3.5 3.5 0 1 0-5-5l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    ),
  };
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-fg-faint">
      {paths[name]}
    </svg>
  );
}
