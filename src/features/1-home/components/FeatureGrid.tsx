import { Activity, BookOpen, Target, Video } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { HOME_SETTINGS } from "../settings/home.settings";

const ICONS = { target: Target, video: Video, book: BookOpen, activity: Activity };

export function FeatureGrid() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="Platform"
          title="Everything a transparent charity needs"
          description="Fundraise per project, report with video, and let donors follow the money from gift to result."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {HOME_SETTINGS.features.map((feature) => {
            const Icon = ICONS[feature.icon];
            return (
              <article
                key={feature.title}
                className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-xl text-navy">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
