import { PageLayout } from "@/shared/components/PageLayout";
import { StoryHighlight } from "@/shared/components/StoryHighlight";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { useTranslatedStories } from "@/shared/i18n/useTranslatedStories";
import { AboutHero } from "../components/AboutHero";
import { AboutConflict } from "../components/AboutConflict";
import { AboutSilence } from "../components/AboutSilence";
import { AboutTurningPoint } from "../components/AboutTurningPoint";
import { AboutBirth } from "../components/AboutBirth";
import { AboutVisionMission } from "../components/AboutVisionMission";
import { AboutPromises } from "../components/AboutPromises";
import { AboutCta } from "../components/AboutCta";

export function AboutPage() {
  const { m } = useI18n();
  const stories = useTranslatedStories();

  return (
    <PageLayout>
      <AboutHero />
      <AboutConflict />
      <AboutSilence />
      <AboutTurningPoint />
      <AboutBirth />
      <AboutVisionMission />
      <AboutPromises />
      <StoryHighlight
        eyebrow={m.home.storiesEyebrow}
        title={m.about.storiesTitle}
        description={m.about.storiesDescription}
        stories={stories}
      />
      <AboutCta />
    </PageLayout>
  );
}
