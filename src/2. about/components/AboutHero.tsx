import { ImageIcon } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

/** Isi path di sini ketika foto sudah siap, misalnya `/about-hero.jpg`. */
const HERO_IMAGE: string | undefined = undefined;

export function AboutHero() {
  const { m } = useI18n();

  return (
    <section className="bg-background py-8 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="text-eyebrow text-accent">{m.about.heroEyebrow}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.15] tracking-tight text-navy sm:text-5xl">
              {m.about.heroTitle}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {m.about.heroP1}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              {m.about.heroP2}
            </p>
          </div>

          <figure className="relative min-h-[280px] overflow-hidden rounded-2xl border border-dashed border-navy/20 bg-muted lg:min-h-[420px]">
            {HERO_IMAGE ? (
              <img
                src={HERO_IMAGE}
                alt={m.about.heroAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
                <span className="inline-flex size-12 items-center justify-center rounded-full border border-navy/15 bg-card text-navy/50">
                  <ImageIcon className="size-5" strokeWidth={1.5} />
                </span>
                <p className="font-display text-lg text-navy">{m.about.heroPhoto}</p>
                <p className="max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
                  {m.about.heroPhotoHint}
                </p>
              </div>
            )}
          </figure>
        </div>
      </Container>
    </section>
  );
}
