import { PageLayout } from "@/shared/components/PageLayout";
import { RekeningBankTransfer } from "../components/RekeningBankTransfer";
import { RekeningMobileBanking } from "../components/RekeningMobileBanking";
import { RekeningQris } from "../components/RekeningQris";

export function RekeningPage() {
  return (
    <PageLayout>
      <RekeningBankTransfer />
      <RekeningMobileBanking />
      <RekeningQris />
    </PageLayout>
  );
}
