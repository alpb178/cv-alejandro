import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import { pick, skills } from "@/content/cv";
import SectionHeading from "./SectionHeading";

export default function Skills({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="skills" className="pt-12 sm:pt-16">
      <SectionHeading number="02" title={dict.sections.skills} />
      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={pick(group.label, locale)} className="surface-card rounded-xl p-4 avoid-break">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
              {pick(group.label, locale)}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="print-flat rounded-full border border-line bg-card px-2.5 py-1 text-[12px] text-fg"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
