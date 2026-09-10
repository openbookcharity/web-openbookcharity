import { SITE_CONTACT } from "@/shared/config/contact";
import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { REKENING_SETTINGS } from "../settings/rekening.settings";
import { RekeningAccordion } from "./RekeningAccordion";
import { RichStep } from "./RichStep";

function WhatsAppDone({ text }: { text: string }) {
  return (
    <li>
      {text}{" "}
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
  );
}

function GuideList({
  title,
  steps,
  nestedItems,
  nestedAt = 2,
  done,
}: {
  title: string;
  steps: readonly string[];
  nestedItems?: readonly string[];
  nestedAt?: number;
  done: string;
}) {
  return (
    <div>
      <p className="font-semibold text-navy">{title}</p>
      <ol className="mt-2 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
        {steps.map((step, i) => (
          <li key={step}>
            <RichStep text={step} />
            {nestedItems && i === nestedAt ? (
              <ol className="mt-1 list-decimal space-y-1 pl-5">
                {nestedItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            ) : null}
          </li>
        ))}
        <WhatsAppDone text={done} />
      </ol>
    </div>
  );
}

export function RekeningMobileBanking() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-12">
      <Container>
        <h2 className="text-2xl tracking-tight text-navy sm:text-3xl">{m.rekening.mobileTitle}</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{m.rekening.mobileIntro}</p>
        <div className="mt-5">
          <RekeningAccordion
            items={REKENING_SETTINGS.mobileApps.map((app) => {
              const guide = m.rekening.mobileGuides[app.id];
              return {
                id: app.id,
                title:
                  "logo" in app && app.logo ? (
                    <span className="flex items-center gap-2">
                      <span className="flex h-6 w-10 items-center justify-center rounded bg-white px-1">
                        <img src={app.logo} alt="" className="h-4 w-auto object-contain" />
                      </span>
                      {app.name}
                    </span>
                  ) : (
                    app.name
                  ),
                content: (
                  <div className="space-y-6">
                    <GuideList title={guide.zakatTitle} steps={guide.zakatSteps} done={m.rekening.mobileDone} />
                    {guide.otherSteps.length > 0 ? (
                      <GuideList
                        title={guide.otherTitle}
                        steps={guide.otherSteps}
                        nestedItems={guide.otherPrograms}
                        nestedAt={guide.nestedAt}
                        done={m.rekening.mobileDone}
                      />
                    ) : null}
                  </div>
                ),
              };
            })}
          />
        </div>
      </Container>
    </section>
  );
}
