import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function WhyContrast() {
  const { m } = useI18n();

  return (
    <section className="bg-accent/10 py-2 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.why.contrastEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.why.contrastTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.why.contrastIntro}
          </p>
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-10 md:grid-cols-2">
          <div className="bg-card px-3 py-3 sm:p-8">
            <p className="text-eyebrow text-muted-foreground">{m.why.without}</p>
            <ul className="mt-3 space-y-2 sm:mt-6 sm:space-y-5">
              {m.why.contrast.map((row) => (
                <li key={row.old} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {row.old}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-navy px-3 py-3 text-navy-foreground sm:p-8">
            <p className="text-eyebrow text-navy-foreground/55">{m.why.with}</p>
            <ul className="mt-3 space-y-2 sm:mt-6 sm:space-y-5">
              {m.why.contrast.map((row) => (
                <li key={row.now} className="text-sm leading-relaxed text-navy-foreground/90 sm:text-base">
                  {row.now}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
