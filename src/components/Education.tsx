import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import { education, languages, pick } from "@/content/cv";
import SectionHeading from "./SectionHeading";

export default function Education({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="education" className="pt-12 sm:pt-16">
      <div className="grid gap-12 sm:grid-cols-2">
        <div>
          <SectionHeading number="05" title={dict.sections.education} />
          <ul className="space-y-3">
            {education.map((e) => (
              <li key={pick(e.title, locale)} className="surface-card rounded-xl p-4 avoid-break">
                <h3 className="text-sm font-semibold text-fg">{pick(e.title, locale)}</h3>
                <p className="mt-1 text-sm text-fg-muted">{pick(e.institution, locale)}</p>
                <p className="mt-1 text-xs uppercase tracking-wider text-fg-faint">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading number="06" title={dict.sections.languages} />
          <ul className="space-y-3">
            {languages.map((l) => (
              <li
                key={pick(l.name, locale)}
                className="surface-card rounded-xl p-4 avoid-break"
              >
                <div className="flex items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-fg">{pick(l.name, locale)}</p>
                  <p className="text-xs uppercase tracking-wider text-accent">
                    {pick(l.level, locale).split("—")[0].trim()}
                  </p>
                </div>
                {pick(l.level, locale).includes("—") ? (
                  <p className="mt-1 text-xs text-fg-muted">
                    {pick(l.level, locale).split("—").slice(1).join("—").trim()}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
