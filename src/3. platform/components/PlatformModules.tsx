import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function PlatformModules() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border bg-secondary/8 py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.platform.modulesEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.platform.modulesTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.platform.modulesIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {m.platform.modules.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-5">
              <h3 className="text-xl text-navy">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
