import { Link } from "@tanstack/react-router";
import { SITE_CONTACT } from "@/shared/config/contact";
import { Container } from "@/shared/components/Container";
import { CtaButton, ctaVariants } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { KONFIRMASI_SETTINGS } from "../settings/konfirmasi.settings";

export function KonfirmasiGuide() {
  const { m } = useI18n();

  return (
    <section className="py-4 sm:py-6">
      <Container className="max-w-2xl space-y-6">
        <div>
          <h2 className="text-sm font-semibold text-navy">{m.konfirmasi.whyTitle}</h2>
          <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{m.konfirmasi.whyBody}</p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">{m.konfirmasi.howTitle}</h2>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm leading-snug text-muted-foreground">
            {m.konfirmasi.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-navy">{m.konfirmasi.fieldsTitle}</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-snug text-muted-foreground">
            {KONFIRMASI_SETTINGS.fields.map((field) => (
              <li key={field}>{m.konfirmasi.fields[field]}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-4 text-sm font-semibold">
          <a
            href={SITE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="text-navy hover:text-accent"
          >
            WhatsApp {SITE_CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${SITE_CONTACT.email}`} className="text-navy hover:text-accent">
            {SITE_CONTACT.email}
          </a>
          <Link to={SITE_CONTACT.rekeningPath} className="text-navy hover:text-accent">
            {m.topBar.rekening}
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={SITE_CONTACT.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className={cn(ctaVariants({ variant: "solid", size: "md" }))}
          >
            {m.konfirmasi.whatsappButton}
          </a>
          <CtaButton to={SITE_CONTACT.rekeningPath} size="md" variant="outline">
            {m.konfirmasi.rekeningButton}
          </CtaButton>
        </div>
      </Container>
    </section>
  );
}
