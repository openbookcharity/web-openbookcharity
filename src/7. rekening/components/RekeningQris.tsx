import { ImageIcon } from "lucide-react";
import { SITE_CONTACT } from "@/shared/config/contact";
import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { RekeningAccordion } from "./RekeningAccordion";
import { RichStep } from "./RichStep";

export function RekeningQris() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-12">
      <Container>
        <h2 className="text-2xl tracking-tight text-navy sm:text-3xl">{m.rekening.qrisTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{m.rekening.qrisIntro}</p>
        <div className="mt-5">
          <RekeningAccordion
            defaultOpen="qris"
            items={[
              {
                id: "qris",
                title: m.rekening.qrisName,
                content: (
                  <div>
                    <div className="flex max-w-xs items-center justify-center rounded-xl border border-dashed border-border bg-muted py-16">
                      <div className="text-center">
                        <span className="inline-flex size-12 items-center justify-center rounded-full border border-navy/20 bg-card text-navy/45">
                          <ImageIcon className="size-5" />
                        </span>
                        <p className="mt-2 text-xs text-muted-foreground">{m.rekening.qrisHint}</p>
                      </div>
                    </div>
                    <p className="mt-4 font-semibold text-navy">{m.rekening.qrisHow}</p>
                    <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {m.rekening.qrisSteps.map((step) => (
                        <li key={step}>
                          <RichStep text={step} />
                        </li>
                      ))}
                      <li>
                        {m.rekening.qrisDone}{" "}
                        <a
                          href={SITE_CONTACT.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="font-semibold text-emerald-600 hover:underline"
                        >
                          {SITE_CONTACT.phoneDisplay}
                        </a>
                        .
                      </li>
                    </ol>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </Container>
    </section>
  );
}
