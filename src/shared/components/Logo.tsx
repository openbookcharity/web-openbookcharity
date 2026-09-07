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
        className={cn(
          "w-auto shrink-0 object-contain",
          hideTaglineOnMobile ? "h-10 lg:h-14" : "h-14",
        )}
      />
      <span className="-ml-1 min-w-0 leading-none">
        <span
          className={cn(
            "block font-display font-semibold",
            hideTaglineOnMobile
              ? "whitespace-nowrap text-sm leading-none tracking-tighter sm:text-lg sm:tracking-tight lg:text-xl"
              : "text-lg leading-tight tracking-tight sm:text-xl",
            tone === "light" ? "text-navy-foreground" : "text-navy",
          )}
        >
          OpenBook Charity
        </span>
        <span
          className={`block text-[10px] tracking-wide ${
            hideTaglineOnMobile ? "hidden lg:block" : ""
          } ${tone === "light" ? "text-navy-foreground/70" : "text-muted-foreground"}`}
        >
          {m.logo.tagline}
        </span>
      </span>
    </Link>
  );
}
