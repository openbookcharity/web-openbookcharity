import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutPromises() {
  const { m } = useI18n();

  return (
    <section className="bg-background py-2 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.about.promisesEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.about.promisesTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.about.promisesIntro}
          </p>
        </div>
        <div className="mt-6 grid gap-1.5 sm:mt-10 sm:gap-4 md:grid-cols-3">
          {m.about.promises.map((item) => (
            <article
              key={item.n}
              className="rounded-2xl border border-border bg-card px-3 py-3 sm:p-5"
            >
              <p className="font-display text-base text-accent sm:text-lg">{item.n}</p>
              <h3 className="mt-2 text-lg text-navy sm:mt-3 sm:text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
