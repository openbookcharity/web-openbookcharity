import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function WhyProblem() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.why.problemEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.why.problemTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.why.problemP1}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.why.problemP2}
          </p>
        </div>

        <figure className="mt-10 max-w-3xl rounded-2xl bg-navy px-6 py-10 text-navy-foreground sm:px-10 sm:py-12">
          <blockquote className="font-display text-2xl leading-snug tracking-tight">
            {m.why.problemQuote}
          </blockquote>
          <p className="mt-5 text-base leading-relaxed text-navy-foreground/80">
            {m.why.problemQuoteBody}
          </p>
        </figure>
      </Container>
    </section>
  );
}
