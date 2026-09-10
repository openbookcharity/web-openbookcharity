import { BadgeCheck, Mail, MessageCircle, Phone, Wallet } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { SITE_CONTACT } from "@/shared/config/contact";
import { useI18n } from "@/shared/i18n/LanguageProvider";

function Dot() {
  return <span className="size-1 shrink-0 rounded-full bg-accent" aria-hidden />;
}

export function SiteTopBar() {
  const { m } = useI18n();

  return (
    <div className="border-b border-border bg-muted/70">
      <Container className="flex min-h-8 items-center overflow-x-auto py-1.5">
        <div className="mx-auto flex w-max items-center gap-2.5 text-[11px] font-semibold text-navy/75 sm:gap-3 sm:text-xs">
          <span className="whitespace-nowrap">{m.topBar.service}</span>
          <Dot />
          <a
            href={`tel:${SITE_CONTACT.phoneTel}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
          >
            <Phone className="size-3 shrink-0 text-secondary" />
            {SITE_CONTACT.phoneDisplay} ({m.topBar.callCenter})
          </a>
          <Dot />
          <a
            href={SITE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
          >
            <MessageCircle className="size-3 shrink-0 text-secondary" />
            WhatsApp: {SITE_CONTACT.whatsappDisplay}
          </a>
          <Dot />
          <a
            href={`mailto:${SITE_CONTACT.email}`}
            className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
          >
            <Mail className="size-3 shrink-0 text-secondary" />
            {SITE_CONTACT.email}
          </a>
          <Dot />
          <Link
            to={SITE_CONTACT.rekeningPath}
            className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
          >
            <Wallet className="size-3 shrink-0 text-secondary" />
            {m.topBar.rekening}
          </Link>
          <Dot />
          <Link
            to={SITE_CONTACT.konfirmasiPath}
            className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-2.5 py-0.5 text-accent-foreground transition-colors hover:bg-accent/90"
          >
            <BadgeCheck className="size-3 shrink-0" />
            {m.topBar.confirm}
          </Link>
        </div>
      </Container>
    </div>
  );
}
