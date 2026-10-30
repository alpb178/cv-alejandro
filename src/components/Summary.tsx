import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import { pick, summary } from "@/content/cv";
import SectionHeading from "./SectionHeading";

export default function Summary({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="summary" className="pt-12 sm:pt-16">
      <SectionHeading number="01" title={dict.sections.summary} />
      <p className="font-serif text-lg leading-relaxed text-fg-muted sm:text-xl">
        {pick(summary, locale)}
      </p>
    </section>
  );
}
