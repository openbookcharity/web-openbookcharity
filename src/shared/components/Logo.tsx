import { Link } from "@tanstack/react-router";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function Logo({
  tone = "navy",
  hideTaglineOnMobile = false,
}: {
  tone?: "navy" | "light";
  hideTaglineOnMobile?: boolean;
}) {
  const { m } = useI18n();

  return (
    <Link to="/" className="inline-flex min-w-0 items-center gap-1">
      <img
        src="/OBS.png"
        alt="OpenBook Charity"
        className="h-14 w-auto shrink-0 object-contain"
      />
      <span className="-ml-1 leading-tight">
        <span
          className={cn(
            "block font-display text-lg font-semibold leading-tight tracking-tight sm:text-xl",
            hideTaglineOnMobile && "whitespace-nowrap",
            tone === "light" ? "text-navy-foreground" : "text-navy",
          )}
        >
          OpenBook Charity
        </span>
        <span
          className={cn(
            "block text-[10px] tracking-wide",
            hideTaglineOnMobile ? "hidden lg:block" : "",
            tone === "light" ? "text-navy-foreground/70" : "text-muted-foreground",
          )}
        >
          {m.logo.tagline}
        </span>
      </span>
    </Link>
  );
}
