import { PageLayout } from "@/shared/components/PageLayout";
import { StoryHighlight } from "@/shared/components/StoryHighlight";
import { SHARED_STORIES } from "@/shared/data/stories";
import { HomeProvider } from "../context/HomeContext";
import { HomeHero } from "../components/HomeHero";
import { StatsStrip } from "../components/StatsStrip";
import { FeatureGrid } from "../components/FeatureGrid";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { AiToolsSection } from "../components/AiToolsSection";
import { TransferOwnershipPanel } from "../transfer-ownership/TransferOwnershipPanel";
import { HomeCtaBanner } from "../components/HomeCtaBanner";

export function HomePage() {
  return (
    <HomeProvider>
      <PageLayout>
        <HomeHero />
        <StatsStrip />
        <FeatureGrid />
        <ProjectsGrid />
        <AiToolsSection />
        <StoryHighlight
          title="What donors and partners say"
          description="The same sharing block is reused on the About Us page, so stories stay consistent everywhere."
          stories={SHARED_STORIES}
        />
        <TransferOwnershipPanel />
        <HomeCtaBanner />
      </PageLayout>
    </HomeProvider>
  );
}
