import { PageLayout } from "@/shared/components/PageLayout";
import { StoryHighlight } from "@/shared/components/StoryHighlight";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { useTranslatedStories } from "@/shared/i18n/useTranslatedStories";
import { WhyOpenBookHero } from "../components/WhyOpenBookHero";
import { WhyProblem } from "../components/WhyProblem";
import { WhyContrast } from "../components/WhyContrast";
import { WhyBenefits } from "../components/WhyBenefits";
import { WhyGallery } from "../components/WhyGallery";
import { WhyAudience } from "../components/WhyAudience";
import { WhyCta } from "../components/WhyCta";

export function WhyOpenBookPage() {
  const { m } = useI18n();
  const stories = useTranslatedStories();

  return (
    <PageLayout>
      <WhyOpenBookHero />
      <WhyProblem />
      <WhyContrast />
      <WhyBenefits />
      <WhyGallery />
      <WhyAudience />
      <StoryHighlight
        className="bg-muted py-2 sm:py-20"
        eyebrow={m.home.storiesEyebrow}
        title={m.why.storiesTitle}
        description={m.why.storiesDescription}
        stories={stories}
      />
      <WhyCta />
    </PageLayout>
  );
}
