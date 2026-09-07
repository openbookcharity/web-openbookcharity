import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function HomeCtaBanner() {
  const { m } = useI18n();

  return (
    <section className="pb-4 pt-4 sm:pt-6">
      <Container>
        <div className="rounded-2xl bg-secondary px-6 py-8 text-center text-secondary-foreground shadow-float">
          <h2 className="mx-auto max-w-2xl text-2xl text-secondary-foreground sm:text-3xl">
            {m.home.ctaTitle}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-secondary-foreground/90 sm:text-base">
            {m.home.ctaBody}
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-4">
            <CtaButton to="/partner" variant="light">
              {m.common.raiseFunds}
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
