import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/shared/components/PageLayout";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";

const title = "Partner with Us — OpenBook Charity";
const description =
  "Bring your nonprofit projects onto OpenBook and report impact to donors in days instead of quarters.";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PartnerPage,
});

function PartnerPage() {
  return (
    <PageLayout>
      <section className="bg-hero-wash py-20">
        <Container>
          <SectionHeading
            eyebrow="Partner with us"
            title="Start your first open project"
            description="Tell us about your organisation and we will help you publish your first costed project."
          />
        </Container>
      </section>
    </PageLayout>
  );
}
