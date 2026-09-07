import { PageLayout } from "@/shared/components/PageLayout";
import { PlatformHero } from "../components/PlatformHero";
import { PlatformFlow } from "../components/PlatformFlow";
import { PlatformAudience } from "../components/PlatformAudience";
import { PlatformModules } from "../components/PlatformModules";
import { PlatformScreens } from "../components/PlatformScreens";
import { PlatformCta } from "../components/PlatformCta";

export function PlatformPage() {
  return (
    <PageLayout>
      <PlatformHero />
      <PlatformFlow />
      <PlatformAudience />
      <PlatformModules />
      <PlatformScreens />
      <PlatformCta />
    </PageLayout>
  );
}
