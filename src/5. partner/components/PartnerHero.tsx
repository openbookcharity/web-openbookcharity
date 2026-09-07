import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function PartnerHero() {
  const { m } = useI18n();

  return (
    <section className="bg-hero-wash py-20">
      <Container>
        <SectionHeading
          eyebrow={m.partner.eyebrow}
          title={m.partner.title}
          description={m.partner.description}
        />
      </Container>
    </section>
  );
}
