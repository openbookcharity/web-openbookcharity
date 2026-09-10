import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { WHY_PROBLEM_PHOTO } from "../photos";

export function WhyProblem() {
  const { m } = useI18n();

  return (
    <section className="bg-muted py-2 sm:py-20">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <div>
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
            <figure className="mt-6 rounded-2xl bg-navy px-3 py-4 text-navy-foreground sm:mt-10 sm:px-10 sm:py-12">
              <blockquote className="font-display text-xl leading-snug tracking-tight sm:text-2xl">
                {m.why.problemQuote}
              </blockquote>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/80 sm:mt-5">
                {m.why.problemQuoteBody}
              </p>
            </figure>
          </div>

          <figure className="lg:sticky lg:top-24">
            <img
              src={WHY_PROBLEM_PHOTO}
              alt={m.why.problemPhotoAlt}
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
