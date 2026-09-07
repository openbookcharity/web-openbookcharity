import { Globe, Star } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { HOME_SETTINGS } from "../settings/home.settings";
import { PhoneShowcase } from "./PhoneShowcase";

export function HomeHero() {
  const { badge, hero } = HOME_SETTINGS;

  return (
    <section className="bg-hero-wash pb-24 pt-14">
      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-eyebrow text-accent-foreground">
            <Globe className="size-4" />
            {badge}
          </span>

          <h1 className="mt-8 font-display text-5xl leading-[1.05] text-navy sm:text-6xl">
            {hero.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block italic">{hero.emphasis}</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <CtaButton to="/partner" size="lg">
              {hero.primaryCta}
            </CtaButton>
            <CtaButton to="/platform" size="lg" variant="outline">
              {hero.secondaryCta}
            </CtaButton>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-3">
              {["A", "B", "C"].map((initial) => (
                <span
                  key={initial}
                  className="inline-flex size-10 items-center justify-center rounded-full border-2 border-background bg-secondary text-sm font-semibold text-navy"
                >
                  {initial}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex text-chart-4">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </span>
              <span>
                <strong className="text-navy">{hero.rating.score}</strong> average ·{" "}
                <strong className="text-navy">
                  {hero.rating.reviews.toLocaleString("en-US")}+
                </strong>{" "}
                five-star reviews
              </span>
            </div>
          </div>
        </div>

        <PhoneShowcase />
      </Container>
    </section>
  );
}
