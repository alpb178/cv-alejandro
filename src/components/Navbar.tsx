import type { Locale } from "@/i18n/config";
import type { Dict } from "@/i18n/get-dictionary";
import Toolbar from "./Toolbar";

export default function Navbar({ locale, dict }: { locale: Locale; dict: Dict }) {
  const items = [
    { href: "#summary", label: dict.nav.summary },
    { href: "#skills", label: dict.nav.skills },
    { href: "#experience", label: dict.nav.experience },
    { href: "#projects", label: dict.nav.projects },
    { href: "#education", label: dict.nav.education },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 glass-header no-print">
      {/* Wider than the 920px reading column (.container-cv): brand + 6 links +
          toolbar need ~1040px, and squeezing them made labels wrap onto two
          lines. The links only show from xl, where this width is available. */}
      <div className="mx-auto flex h-14 w-full max-w-[1120px] items-center justify-between gap-4 px-5 md:px-8">
        <a
          href={`/${locale}`}
          className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold tracking-tight text-fg"
        >
          <span className="grid h-7 w-7 place-items-center rounded-md bg-fg text-surface text-[10px] font-bold">
            AP
          </span>
          <span className="hidden sm:inline">Alejandro Pérez · CV</span>
        </a>

        <nav className="hidden min-w-0 items-center gap-5 text-xs text-fg-muted xl:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="whitespace-nowrap transition hover:text-fg">
              {item.label}
            </a>
          ))}
        </nav>

        <Toolbar
          locale={locale}
          theme={dict.nav.theme}
          printLabel={dict.nav.print}
          ctaLabel={dict.nav.cta}
        />
      </div>
    </header>
  );
}
