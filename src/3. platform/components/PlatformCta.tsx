import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function PlatformCta() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl tracking-tight text-navy sm:text-4xl">{m.platform.ctaTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.platform.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton to="/partner" size="lg">
              {m.common.raiseFunds}
            </CtaButton>
            <CtaButton to="/" size="lg" variant="outline">
              {m.common.seePrograms}
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
