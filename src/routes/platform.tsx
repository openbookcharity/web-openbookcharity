import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/shared/components/PageLayout";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";

const title = "Platform Overview — OpenBook Charity";
const description =
  "Project-based fundraising, video impact updates, disbursement tracking, and partner health scores in one platform.";

export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PlatformPage,
});

function PlatformPage() {
  return (
    <PageLayout>
      <section className="bg-hero-wash py-20">
        <Container>
          <SectionHeading
            eyebrow="Platform"
            title="One place to raise, spend, and prove"
            description="Set up a costed project, collect gifts, record disbursements, and publish the video proof donors are waiting for."
          />
        </Container>
      </section>
    </PageLayout>
  );
}
