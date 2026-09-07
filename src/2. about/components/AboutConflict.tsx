import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutConflict() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
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
      </Container>
    </section>
  );
}
