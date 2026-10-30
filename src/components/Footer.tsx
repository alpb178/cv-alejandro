import type { Dict } from "@/i18n/get-dictionary";

export default function Footer({ dict }: { dict: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="container-cv mt-16 border-t border-line py-8 text-xs text-fg-faint">
      <div className="flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
        <span className="font-mono-tight">© {year} Alejandro Pérez.</span>
        <span>{dict.footer.line}</span>
      </div>
    </footer>
  );
}
