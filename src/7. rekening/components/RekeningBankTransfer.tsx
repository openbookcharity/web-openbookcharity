import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { RekeningAccordion } from "./RekeningAccordion";
import { RekeningAccountList } from "./RekeningAccountList";

export function RekeningBankTransfer() {
  const { m } = useI18n();

  return (
    <section className="py-8 sm:py-12">
      <Container>
        <h1 className="text-2xl tracking-tight text-navy sm:text-3xl">{m.rekening.bankTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{m.rekening.bankIntro}</p>
        <div className="mt-5">
          <RekeningAccordion
            defaultOpen="donasi"
            items={[
              {
                id: "donasi",
                title: m.rekening.groupDonasi,
                content: <RekeningAccountList />,
              },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
