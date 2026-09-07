import { Link } from "@tanstack/react-router";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const { m } = useI18n();

  return (
    <Link to="/" className="inline-flex items-center gap-1.5">
      <img
        src="/OBS.png"
        alt="OpenBook Charity"
        className="h-14 w-auto shrink-0 object-contain"
      />
      <span className="-ml-1 leading-tight">
        <span
          className={`block font-display text-lg font-semibold tracking-tight sm:text-xl ${
            tone === "light" ? "text-navy-foreground" : "text-navy"
          }`}
        >
          OpenBook Charity
        </span>
        <span
          className={`block text-[10px] tracking-wide ${
            tone === "light" ? "text-navy-foreground/70" : "text-muted-foreground"
          }`}
        >
          {m.logo.tagline}
        </span>
      </span>
    </Link>
  );
}
