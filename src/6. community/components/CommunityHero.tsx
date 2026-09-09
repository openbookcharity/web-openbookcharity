import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function CommunityHero() {
  const { m } = useI18n();

  return (
    <section className="bg-hero-wash py-8 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="text-eyebrow text-accent">{m.community.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.15] tracking-tight text-navy sm:text-5xl">
              {m.community.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {m.community.description}
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

          <PhotoFrame
            caption={m.community.heroCaption}
            hint={m.community.heroHint}
            className="min-h-[280px] lg:min-h-[380px]"
          />
        </div>
      </Container>
    </section>
  );
}
