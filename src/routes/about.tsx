import { createFileRoute } from "@tanstack/react-router";
import { PageLayout } from "@/shared/components/PageLayout";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { StoryHighlight } from "@/shared/components/StoryHighlight";
import { SHARED_STORIES } from "@/shared/data/stories";

const title = "About Us — OpenBook Charity";
const description =
  "Who we are, why we keep our books open, and the people whose stories shaped OpenBook Charity.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageLayout>
      <section className="bg-hero-wash py-20">
        <Container>
          <SectionHeading
            eyebrow="About us"
            title="We keep the books open"
            description="OpenBook Charity started with a simple frustration: donors rarely find out what happened after they gave. We built a platform where every gift is tied to a project and every project reports back."
          />
        </Container>
      </section>

      <StoryHighlight
        title="Stories that keep us honest"
        description="This sharing block lives in shared code, so the home page and this page always show the same stories."
        stories={SHARED_STORIES}
      />
    </PageLayout>
  );
}
