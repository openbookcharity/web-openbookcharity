import { Link } from "@tanstack/react-router";
import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function FaqHero() {
  const { m } = useI18n();

  return (
    <section className="border-b border-border bg-background py-4 sm:py-6">
      <Container>
        <nav className="text-xs text-muted-foreground">
          <Link to="/" className="transition-colors hover:text-navy">
            {m.nav.home}
          </Link>
          <span className="mx-1.5 text-navy/25">/</span>
          <span className="text-navy/70">{m.faq.title}</span>
        </nav>
        <h1 className="mt-2 font-display text-2xl tracking-tight text-navy sm:text-3xl">{m.faq.heading}</h1>
        <p className="mt-1 max-w-2xl text-sm text-muted-foreground">{m.faq.intro}</p>
      </Container>
    </section>
  );
}
