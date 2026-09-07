import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutSilence() {
  const { m } = useI18n();

  return (
    <section className="pb-8 sm:pb-20">
      <Container>
        <figure className="max-w-3xl rounded-2xl bg-navy px-6 py-10 text-navy-foreground sm:px-10 sm:py-12">
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
        </figure>
      </Container>
    </section>
  );
}
