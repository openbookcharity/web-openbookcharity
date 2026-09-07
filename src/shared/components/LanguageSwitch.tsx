import { useI18n } from "@/shared/i18n/LanguageProvider";
import type { Lang } from "@/shared/i18n/messages";
import { cn } from "@/lib/utils";

const OPTIONS: { id: Lang; label: string }[] = [
  { id: "id", label: "ID" },
  { id: "en", label: "EN" },
];

export function LanguageSwitch({ className }: { className?: string }) {
  const { lang, setLang, m } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex rounded-full border border-border p-0.5 text-[11px] font-bold tracking-wide",
        className,
      )}
      role="group"
      aria-label={m.nav.language}
    >
      {OPTIONS.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => setLang(option.id)}
          className={cn(
            "rounded-full px-2.5 py-1 transition-colors",
            lang === option.id
              ? "bg-navy text-navy-foreground"
              : "text-navy/60 hover:text-navy",
          )}
          aria-pressed={lang === option.id}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
