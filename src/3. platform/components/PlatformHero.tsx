import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { PLATFORM_HERO_PHOTO } from "../photos";

export function PlatformHero() {
  const { m } = useI18n();

  return (
    <section className="bg-background py-2 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="text-eyebrow text-accent">{m.platform.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.15] tracking-tight text-navy sm:text-5xl">
              {m.platform.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {m.platform.description}
            </p>
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

          <PhotoFrame
            src={PLATFORM_HERO_PHOTO}
            caption={m.platform.heroCaption}
            hint={m.platform.heroHint}
            className="min-h-[280px] lg:min-h-[380px]"
          />
        </div>
      </Container>
    </section>
  );
}
