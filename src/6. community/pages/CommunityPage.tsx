import { PageLayout } from "@/shared/components/PageLayout";
import { CommunityHero } from "../components/CommunityHero";
import { CommunityRoles } from "../components/CommunityRoles";
import { CommunityWays } from "../components/CommunityWays";
import { CommunityCta } from "../components/CommunityCta";

export function CommunityPage() {
  return (
    <PageLayout>
      <CommunityHero />
      <CommunityRoles />
      <CommunityWays />
      <CommunityCta />
    </PageLayout>
  );
}
