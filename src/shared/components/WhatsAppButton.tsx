import { useI18n } from "@/shared/i18n/LanguageProvider";

const WHATSAPP_URL = "https://wa.me/6282125915521";
const WHATSAPP_ICON = "/whatsapp%20logo.png";

export function WhatsAppButton() {
  const { m } = useI18n();

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={m.common.whatsapp}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[70] inline-flex size-28 items-center justify-center rounded-full shadow-float transition-transform hover:scale-105 sm:bottom-[max(1.5rem,env(safe-area-inset-bottom))] sm:right-[max(1.5rem,env(safe-area-inset-right))] sm:size-32"
    >
      <img src={WHATSAPP_ICON} alt="" className="size-full object-contain" />
    </a>
  );
}
