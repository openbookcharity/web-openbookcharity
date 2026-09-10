import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutSilence() {
  const { m } = useI18n();

  return (
    <section className="bg-navy py-8 text-navy-foreground sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-navy-foreground/55">{m.about.silenceEyebrow}</p>
          <blockquote className="mt-4 font-display text-2xl leading-snug tracking-tight">
            {m.about.silenceQuote}
          </blockquote>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/80">
            {m.about.silenceP1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-navy-foreground/80">
            {m.about.silenceP2}
          </p>
        </div>
      </Container>
    </section>
  );
}
