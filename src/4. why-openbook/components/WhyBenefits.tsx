import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function WhyBenefits() {
  const { m } = useI18n();

  return (
    <section className="bg-background py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.why.benefitsEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.why.benefitsTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.why.benefitsIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {m.why.benefits.map((item) => (
            <article key={item.n} className="rounded-2xl border border-border bg-card p-5 sm:p-6">
              <p className="font-display text-lg text-accent">{item.n}</p>
              <h3 className="mt-3 text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
