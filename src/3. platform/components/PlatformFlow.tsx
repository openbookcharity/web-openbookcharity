import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function PlatformFlow() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-2 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.platform.flowEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.platform.flowTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.platform.flowIntro}
          </p>
        </div>

        <ol className="mt-6 grid gap-1.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-5">
          {m.platform.steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-border bg-card px-3 py-3 sm:p-5"
            >
              <p className="font-display text-base text-accent sm:text-lg">{step.n}</p>
              <h3 className="mt-2 text-base text-navy sm:mt-3 sm:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:mt-3">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
