import { Container } from "@/shared/components/Container";
import { CtaButton } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function WhyOpenBookHero() {
  const { m } = useI18n();

  return (
    <section className="bg-background py-2 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div>
            <p className="text-eyebrow text-accent">{m.why.eyebrow}</p>
            <h1 className="mt-4 font-display text-4xl leading-[1.15] tracking-tight text-navy sm:text-5xl">
              {m.why.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{m.why.p1}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{m.why.p2}</p>
            <div className="mt-8 flex flex-nowrap items-center gap-2 sm:flex-wrap sm:gap-4">
              <CtaButton
                to="/partner"
                size="lg"
                className="h-10 shrink-0 px-3.5 text-xs sm:h-14 sm:px-8 sm:text-base"
              >
                {m.why.heroRaiseFunds}
              </CtaButton>
              <CtaButton
                to="/program"
                size="lg"
                variant="outline"
                className="h-10 shrink-0 px-3.5 text-xs sm:h-14 sm:px-8 sm:text-base"
              >
                {m.why.heroSeeProgram}
              </CtaButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-1.5 sm:gap-3">
            {m.why.stats.map((stat) => (
              <article
                key={stat.label}
                className="rounded-2xl border border-border bg-card px-3 py-3 sm:p-5"
              >
                <p className="font-display text-2xl tracking-tight text-navy sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground sm:mt-2 sm:text-sm">
                  {stat.label}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
