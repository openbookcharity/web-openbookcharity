import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

export type StoryItem = {
  quote: string;
  name: string;
  role: string;
};

/**
 * Shared "sharing / stories" block. Used on the home page today and on the
 * About Us page — that is why it lives in shared, not in `1. home`.
 */
export function StoryHighlight({
  eyebrow = "Cerita",
  title,
  description,
  stories,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  stories: StoryItem[];
  className?: string;
}) {
  return (
    <section className={className ?? "py-2 sm:py-12"}>
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description={description}
          align="center"
        />
        <div className="mt-4 grid gap-1.5 sm:mt-6 sm:gap-3 md:grid-cols-3">
          {stories.map((story) => (
            <figure
              key={story.name}
              className="rounded-2xl border border-border bg-card px-3 py-3 shadow-soft sm:p-4"
            >
              <blockquote className="font-display text-base leading-snug text-navy">
                “{story.quote}”
              </blockquote>
              <figcaption className="mt-2 text-sm sm:mt-4">
                <span className="block font-semibold text-navy">{story.name}</span>
                <span className="block text-muted-foreground">{story.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
