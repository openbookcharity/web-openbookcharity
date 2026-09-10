import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutCta() {
  const { m } = useI18n();

  return (
    <section className="bg-background py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl tracking-tight text-navy sm:text-4xl">
            {m.about.ctaTitle}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.about.ctaBody}
          </p>
          <div className="mt-8">
            <CtaButton to="/partner" size="lg">
              {m.about.ctaButton}
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
