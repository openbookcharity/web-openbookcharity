import { Container } from "@/shared/components/Container";
import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function WhyAudience() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.why.audienceEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.why.audienceTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.why.audienceIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-border bg-card">
            <PhotoFrame
              caption={m.why.donorCaption}
              hint={m.why.donorHint}
              className="min-h-[160px] rounded-none border-x-0 border-t-0 lg:min-h-[180px]"
            />
            <div className="p-5 sm:p-6">
              <p className="text-eyebrow text-accent">{m.why.donorEyebrow}</p>
              <h3 className="mt-3 text-2xl text-navy">{m.why.donorTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {m.why.donorBody}
              </p>
            </div>
          </article>
          <article className="overflow-hidden rounded-2xl bg-navy text-navy-foreground">
            <PhotoFrame
              caption={m.why.orgCaption}
              hint={m.why.orgHint}
              tone="navy"
              className="min-h-[160px] rounded-none border-x-0 border-t-0 lg:min-h-[180px]"
            />
            <div className="p-5 sm:p-6">
              <p className="text-eyebrow text-navy-foreground/55">{m.why.orgEyebrow}</p>
              <h3 className="mt-3 text-2xl">{m.why.orgTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/80">
                {m.why.orgBody}
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
