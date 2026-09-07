import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/shared/components/PageLayout";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";

const title = "AI Tools — OpenBook Charity";
const description =
  "AI-assisted donor updates, report summaries, and early warnings when a funded project goes quiet.";

export const Route = createFileRoute("/ai-tools")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AiToolsPage,
});

function AiToolsPage() {
  return (
    <PageLayout>
      <section className="bg-hero-wash py-20">
        <Container>
          <SectionHeading
            eyebrow="AI tools"
            title="Less admin, more field work"
            description="Turn raw field footage and notes into donor updates, board summaries, and follow-up reminders."
          />
        </Container>
      </section>
    </PageLayout>
  );
}
