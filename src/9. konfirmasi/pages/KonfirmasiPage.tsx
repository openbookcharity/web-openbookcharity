import { PageLayout } from "@/shared/components/PageLayout";
import { KonfirmasiHero } from "../components/KonfirmasiHero";
import { KonfirmasiGuide } from "../components/KonfirmasiGuide";

export function KonfirmasiPage() {
  return (
    <PageLayout>
      <KonfirmasiHero />
      <KonfirmasiGuide />
    </PageLayout>
  );
}
