import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function StatsStrip() {
  const { m } = useI18n();

  return (
    <section className="border-y border-border bg-card py-12">
      <Container className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {m.home.stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-4xl text-navy">{stat.value}</p>
            <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
