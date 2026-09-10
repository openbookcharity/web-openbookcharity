import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutTurningPoint() {
  const { m } = useI18n();

  return (
    <section className="bg-background py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.about.turningEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.about.turningTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.about.turningIntro}
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {m.about.turningSteps.map((step) => (
            <article key={step.n} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-lg text-accent">{step.n}</p>
              <h3 className="mt-3 text-xl text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
