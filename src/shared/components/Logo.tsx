import { Link } from "@tanstack/react-router";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Logo({ tone = "navy" }: { tone?: "navy" | "light" }) {
  const { m } = useI18n();

  return (
    <Link to="/" className="inline-flex min-w-0 items-center gap-1">
      <img
        src="/OBS.png"
        alt="OpenBook Charity"
        className="h-14 w-auto shrink-0 object-contain"
      />
      <span className="-ml-1 min-w-0 leading-tight">
        <span
          className={cn(
            "block whitespace-nowrap font-display text-lg font-semibold leading-tight tracking-tight sm:text-xl",
            tone === "light" ? "text-navy-foreground" : "text-navy",
          )}
        >
          OpenBook Charity
        </span>
        <span
          className={cn(
            "mt-0.5 block whitespace-nowrap text-[11px] leading-snug sm:text-xs",
            tone === "light" ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {m.logo.tagline}
        </span>
      </span>
    </Link>
  );
}
