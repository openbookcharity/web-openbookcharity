import { useI18n } from "@/shared/i18n/LanguageProvider";
import { SITE_CONTACT } from "@/shared/config/contact";

const WHATSAPP_ICON = "/whatsapp%20logo.png";

export function WhatsAppButton() {
  const { m } = useI18n();

  return (
    <a
      href={SITE_CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={m.common.whatsapp}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-[70] block size-20 overflow-hidden transition-transform hover:scale-105 sm:bottom-[max(1.25rem,env(safe-area-inset-bottom))] sm:right-[max(1.25rem,env(safe-area-inset-right))] sm:size-24"
    >
      <img src={WHATSAPP_ICON} alt="" className="size-full scale-[1.7] object-contain" />
    </a>
  );
}
