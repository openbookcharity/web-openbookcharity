import { PageLayout } from "@/shared/components/PageLayout";
import { FaqHero } from "../components/FaqHero";
import { FaqList } from "../components/FaqList";

export function FaqPage() {
  return (
    <PageLayout>
      <FaqHero />
      <FaqList />
    </PageLayout>
  );
}
