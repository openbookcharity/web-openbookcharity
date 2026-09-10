import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function PlatformModules() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border bg-secondary/8 py-2 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.platform.modulesEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.platform.modulesTitle}
          </h2>
        </div>

        <div className="mt-6 grid gap-1.5 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {m.platform.modules.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-card px-3 py-3 sm:p-5"
            >
              <h3 className="text-lg text-navy sm:text-xl">{item.title}</h3>
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
