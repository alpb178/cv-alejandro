"use client";

import type { Locale } from "@/i18n/config";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

interface Props {
  locale: Locale;
  theme: { light: string; dark: string };
  printLabel: string;
  ctaLabel: string;
}

export default function Toolbar({ locale, theme, printLabel, ctaLabel }: Props) {
  return (
    <div className="no-print flex shrink-0 items-center gap-2">
      <ThemeToggle label={theme} />
      <LanguageToggle current={locale} />
      <button
        type="button"
        onClick={() => window.print()}
        aria-label={printLabel}
        title={printLabel}
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-line bg-card px-3.5 py-2 text-xs font-semibold text-fg transition hover:border-line-strong"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M7 9V4h10v5M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <rect x="7" y="14" width="10" height="7" rx="1" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="hidden sm:inline">{printLabel}</span>
      </button>
      <a
        href="mailto:alesx2soporte@gmail.com"
        className="hidden whitespace-nowrap rounded-full bg-fg px-4 py-2 text-xs font-semibold text-surface transition hover:opacity-90 md:inline-flex"
      >
        {ctaLabel}
      </a>
    </div>
  );
}
