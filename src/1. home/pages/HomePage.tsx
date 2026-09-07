import { PageLayout } from "@/shared/components/PageLayout";
import { StoryHighlight } from "@/shared/components/StoryHighlight";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { useTranslatedStories } from "@/shared/i18n/useTranslatedStories";
import { HomeProvider } from "../context/HomeContext";
import { HomeHero } from "../components/HomeHero";
import { StatsStrip } from "../components/StatsStrip";
import { FeatureGrid } from "../components/FeatureGrid";
import { HomeGallery } from "../components/HomeGallery";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { TransferOwnershipPanel } from "../transfer-ownership/TransferOwnershipPanel";
import { HomeCtaBanner } from "../components/HomeCtaBanner";

export function HomePage() {
  const { m } = useI18n();
  const stories = useTranslatedStories();

  return (
    <HomeProvider>
      <PageLayout>
        <HomeHero />
        <StatsStrip />
        <FeatureGrid />
        <HomeGallery />
        <ProjectsGrid />
        <StoryHighlight
          eyebrow={m.home.storiesEyebrow}
          title={m.home.storiesTitle}
          description={m.home.storiesDescription}
          stories={stories}
        />
        <TransferOwnershipPanel />
        <HomeCtaBanner />
      </PageLayout>
    </HomeProvider>
  );
}
