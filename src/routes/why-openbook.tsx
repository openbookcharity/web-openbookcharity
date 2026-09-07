import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/shared/components/PageLayout";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";

const title = "Why OpenBook — OpenBook Charity";
const description =
  "Why open books, project-level accountability, and video proof beat annual reports nobody reads.";

export const Route = createFileRoute("/why-openbook")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <PageLayout>
      <section className="bg-hero-wash py-20">
        <Container>
          <SectionHeading
            eyebrow="Why OpenBook"
            title="Trust you can check, not just believe"
            description="Donors stay when they can see what changed. Partners grow when their track record is visible."
          />
        </Container>
      </section>
    </PageLayout>
  );
}
