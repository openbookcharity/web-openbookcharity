import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { ABOUT_CONFLICT_PHOTO } from "../photos";

export function AboutConflict() {
  const { m } = useI18n();

  return (
    <section className="bg-muted py-8 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
            <p className="text-eyebrow text-accent">{m.about.conflictEyebrow}</p>
            <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
              {m.about.conflictTitle}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {m.about.conflictP1}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {m.about.conflictP2}
            </p>
            <div className="mt-10 border-l-2 border-accent pl-5 sm:pl-6">
              <p className="font-display text-xl leading-snug tracking-tight text-navy sm:text-2xl">
                “{m.about.conflictQuote}”
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {m.about.conflictQuoteBody}
              </p>
            </div>
          </div>

          <figure className="lg:sticky lg:top-24">
            <img
              src={ABOUT_CONFLICT_PHOTO}
              alt={m.about.conflictPhotoAlt}
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
