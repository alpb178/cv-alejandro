import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import { experience, pick } from "@/content/cv";
import SectionHeading from "./SectionHeading";

export default function Experience({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="experience" className="pt-12 sm:pt-16">
      <SectionHeading number="03" title={dict.sections.experience} />

      <ol className="relative ml-0 sm:ml-4 sm:border-l sm:border-line">
        {experience.map((job, idx) => (
          <li
            key={`${job.company}-${idx}`}
            className="relative mb-8 last:mb-0 sm:pl-8 avoid-break"
          >
            <span
              aria-hidden="true"
              className="absolute left-[-7px] top-2 hidden h-3 w-3 rounded-full border-2 border-accent bg-surface sm:block"
            />
            <div className="surface-card rounded-2xl p-5 sm:p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold text-fg sm:text-lg">
                  {pick(job.role, locale)}{" "}
                  <span className="text-fg-faint">·</span>{" "}
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-accent hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="text-accent">{job.company}</span>
                  )}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-fg-faint">
                  {pick(job.period, locale)}
                </p>
              </div>

              <p className="mt-1 text-xs text-fg-subtle">{pick(job.location, locale)}</p>

              <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
                {job.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2">
                    <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>{pick(b, locale)}</span>
                  </li>
                ))}
              </ul>

              {job.stack.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="print-flat rounded-md border border-line bg-card px-2 py-0.5 text-[11px] text-fg-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
