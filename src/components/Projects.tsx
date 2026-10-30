import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import { clientProjects, ownProjects, pick, type Project } from "@/content/cv";
import SectionHeading from "./SectionHeading";

export default function Projects({ locale, dict }: { locale: Locale; dict: Dict }) {
  return (
    <section id="projects" className="pt-12 sm:pt-16">
      <SectionHeading number="04" title={dict.sections.projects} />

      <ProjectGroup label={dict.sections.projectsOwn} items={ownProjects} locale={locale} ui={dict.ui} />
      <div className="mt-8">
        <ProjectGroup label={dict.sections.projectsClient} items={clientProjects} locale={locale} ui={dict.ui} />
      </div>
    </section>
  );
}

function ProjectGroup({
  label,
  items,
  locale,
  ui,
}: {
  label: string;
  items: Project[];
  locale: Locale;
  ui: Dict["ui"];
}) {
  return (
    <div>
      <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.22em] text-accent">{label}</p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((p) => (
          <a
            key={p.url}
            href={p.url}
            target="_blank"
            rel="noreferrer noopener"
            className="surface-card group relative flex flex-col rounded-xl p-4 transition hover:border-line-strong avoid-break"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-sm font-semibold text-fg">{p.name}</h3>
                <p className="mt-1 text-xs text-fg-faint">{new URL(p.url).host}</p>
              </div>
              <span className="text-xs font-medium text-accent transition group-hover:translate-x-0.5">
                {ui.open} →
              </span>
            </div>
            <p className="mt-2 text-sm text-fg-muted">{pick(p.summary, locale)}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.stack.map((tech) => (
                <span
                  key={tech}
                  className="print-flat rounded-md border border-line bg-card px-1.5 py-0.5 text-[10.5px] text-fg-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
