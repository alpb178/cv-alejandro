import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import { pick, profile } from "@/content/cv";
import SectionHeading from "./SectionHeading";

export default function Contact({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="contact" className="pt-12 sm:pt-16">
      <SectionHeading number="07" title={dict.sections.contact} />

      <div className="surface-card grid gap-6 rounded-2xl p-6 sm:grid-cols-3">
        <Item label={dict.sections.contact} value={profile.email} href={`mailto:${profile.email}`} />
        <Item label="WhatsApp" value={profile.phone} href={profile.whatsapp} />
        <Item label="LinkedIn" value="alejandro-perez-dev" href={profile.linkedin} />
        <Item label="Web" value="kods.ai" href={profile.website} />
        <Item label={dict.ui.availableFor} value={pick(profile.location, locale)} />
      </div>
    </section>
  );
}

function Item({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <>
      <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-fg-faint">{label}</p>
      <p className="mt-1 text-sm text-fg">{value}</p>
    </>
  );
  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer noopener" : undefined}
        className="group block transition hover:text-accent"
      >
        {inner}
      </a>
    );
  }
  return <div>{inner}</div>;
}
