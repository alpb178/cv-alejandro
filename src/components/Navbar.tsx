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
      <div className="container-cv flex h-14 items-center justify-between gap-4">
        <a href={`/${locale}`} className="inline-flex items-center gap-2 text-sm font-semibold tracking-tight text-fg">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-fg text-surface text-[10px] font-bold">
            AP
          </span>
          <span className="hidden sm:inline">Alejandro Pérez · CV</span>
        </a>

        <nav className="hidden items-center gap-6 text-xs text-fg-muted lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-fg">
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
