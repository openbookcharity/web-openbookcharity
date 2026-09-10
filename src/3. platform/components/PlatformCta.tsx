import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function PlatformCta() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-2 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl tracking-tight text-navy sm:text-4xl">{m.platform.ctaTitle}</h2>
          <div className="mt-8 flex flex-nowrap items-center gap-2 sm:flex-wrap sm:gap-4">
            <CtaButton
              to="/partner"
              size="lg"
              className="h-10 shrink-0 px-3.5 text-xs sm:h-14 sm:px-8 sm:text-base"
            >
              {m.platform.heroRaiseFunds}
            </CtaButton>
            <CtaButton
              to="/"
              size="lg"
              variant="outline"
              className="h-10 shrink-0 px-3.5 text-xs sm:h-14 sm:px-8 sm:text-base"
            >
              {m.platform.heroSeePrograms}
            </CtaButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
