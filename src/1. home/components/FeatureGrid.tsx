import { Activity, BookOpen, Target, Video } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { SectionHeading } from "@/shared/components/SectionHeading";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { HOME_SETTINGS } from "../settings/home.settings";

const ICONS = { target: Target, video: Video, book: BookOpen, activity: Activity };

export function FeatureGrid() {
  const { m } = useI18n();

  return (
    <section className="py-2 sm:py-12">
      <Container>
        <SectionHeading
          eyebrow={m.home.featuresEyebrow}
          title={m.home.featuresTitle}
          description={m.home.featuresDescription}
        />
        <div className="mt-4 grid gap-1.5 sm:mt-6 sm:grid-cols-2 sm:gap-3">
          {m.home.features.map((feature, index) => {
            const icon = HOME_SETTINGS.features[index]?.icon ?? "target";
            const Icon = ICONS[icon];
            return (
              <article
                key={feature.title}
                className="rounded-2xl border border-border bg-card px-3 py-3 shadow-soft transition-transform hover:-translate-y-0.5 sm:p-4"
              >
                <span className="inline-flex size-8 items-center justify-center rounded-xl bg-accent text-accent-foreground sm:size-9">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-2 text-base text-navy sm:mt-3 sm:text-lg">{feature.title}</h3>
                <p className="mt-1 text-sm leading-snug text-muted-foreground">
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
