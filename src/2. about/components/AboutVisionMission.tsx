import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function AboutVisionMission() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <p className="text-eyebrow text-accent">{m.about.direction}</p>

        <article className="mt-8 rounded-2xl bg-navy p-6 text-navy-foreground sm:p-10">
          <p className="text-eyebrow text-navy-foreground/55">{m.about.vision}</p>
          <h2 className="mt-4 max-w-3xl font-display text-2xl leading-snug tracking-tight sm:text-3xl">
            {m.about.visionTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-navy-foreground/80">
            {m.about.visionBody}
          </p>
        </article>

        <div className="mt-10">
          <p className="text-eyebrow text-accent">{m.about.mission}</p>
          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {m.about.missions.map((item, index) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-5">
                <p className="font-display text-lg text-accent">{index + 1}</p>
                <h3 className="mt-3 text-xl text-navy">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
