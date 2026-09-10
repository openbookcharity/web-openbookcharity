import { Facebook, Instagram, Youtube } from "lucide-react";
import { SITE_SOCIAL } from "@/shared/config/social";
import { useI18n } from "@/shared/i18n/LanguageProvider";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M14.5 3c.4 2.4 1.8 4.2 4.2 4.6v3.1c-1.5 0-2.9-.5-4.1-1.3v6.8c0 3.4-2.8 6.2-6.3 6.2S2 19.6 2 16.1s2.8-6.2 6.3-6.2c.3 0 .7 0 1 .1v3.2c-.3-.1-.7-.2-1-.2-1.7 0-3.1 1.4-3.1 3.1s1.4 3.1 3.1 3.1 3.1-1.4 3.1-3.1V3h3.1Z" />
    </svg>
  );
}

const ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Youtube,
  tiktok: TikTokIcon,
} as const;

export function SiteSocial() {
  const { m } = useI18n();

  return (
    <div className="text-left">
      <p className="text-sm font-semibold text-navy-foreground">{m.footer.socialTitle}</p>
      <div className="mt-3 flex flex-wrap items-center gap-4">
        {SITE_SOCIAL.map((item) => {
          const Icon = ICONS[item.id];
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={m.footer.social[item.id]}
              className="text-navy-foreground/85 transition-colors hover:text-accent"
            >
              <Icon className="size-5" />
            </a>
          );
        })}
      </div>
    </div>
  );
}
