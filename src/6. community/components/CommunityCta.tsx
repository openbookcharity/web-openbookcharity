import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function CommunityCta() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl tracking-tight text-navy sm:text-4xl">{m.community.ctaTitle}</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.community.ctaBody}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CtaButton to="/" size="lg">
              {m.common.seePrograms}
            </CtaButton>
            <CtaButton to="/partner" size="lg" variant="outline">
              {m.common.raiseFunds}
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
