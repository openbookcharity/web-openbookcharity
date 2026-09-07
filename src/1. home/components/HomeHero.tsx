import { Globe, Star } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { HOME_SETTINGS } from "../settings/home.settings";
import { PhoneShowcase } from "./PhoneShowcase";

export function HomeHero() {
  const { m, locale } = useI18n();
  const { hero } = HOME_SETTINGS;

  return (
    <section className="bg-hero-wash pb-8 pt-8 sm:pb-16 sm:pt-14 lg:pb-24">
      <Container className="grid items-center gap-10 md:grid-cols-[1.05fr_1fr] md:gap-12 lg:gap-16">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-eyebrow text-accent-foreground">
            <Globe className="size-4" />
            {m.home.badge}
          </span>

          <h1 className="mt-8 font-display text-4xl leading-[1.1] text-navy sm:text-5xl">
            {m.home.heroLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block italic">{m.home.heroEmphasis}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {m.home.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <CtaButton to="/partner" size="lg">
              {m.common.raiseFunds}
            </CtaButton>
            <CtaButton to="/platform" size="lg" variant="outline">
              {m.common.seePlatform}
            </CtaButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "B", "C"].map((initial) => (
                <span
                  key={initial}
                  className="inline-flex size-10 items-center justify-center rounded-full border-2 border-background bg-secondary text-sm font-semibold text-secondary-foreground"
                >
                  {initial}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex text-accent">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span>
                <strong className="text-navy">{hero.rating.score}</strong> {m.home.reviewsFrom}{" "}
                <strong className="text-navy">
                  {hero.rating.reviews.toLocaleString(locale)}+
                </strong>{" "}
                {m.home.reviewsSuffix}
              </span>
            </div>
          </div>
        </div>

        <PhoneShowcase />
      </Container>
    </section>
  );
}
