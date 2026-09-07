import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutPromises() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-20">
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
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {m.about.promises.map((item) => (
            <article key={item.n} className="rounded-2xl border border-border bg-card p-5">
              <p className="font-display text-lg text-accent">{item.n}</p>
              <h3 className="mt-3 text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
