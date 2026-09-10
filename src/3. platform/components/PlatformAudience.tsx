import { Container } from "@/shared/components/Container";
import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { PLATFORM_DONOR_PHOTO, PLATFORM_ORG_PHOTO } from "../photos";

export function PlatformAudience() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.platform.sidesEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.platform.sidesTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.platform.sidesIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <article className="overflow-hidden rounded-2xl border border-border bg-card">
            <PhotoFrame
              src={PLATFORM_DONOR_PHOTO}
              caption={m.platform.donorCaption}
              hint={m.platform.donorHint}
              className="min-h-0 aspect-[16/10] rounded-none border-x-0 border-t-0 lg:min-h-0"
            />
            <div className="p-5 sm:p-6">
              <p className="text-eyebrow text-accent">{m.platform.donorEyebrow}</p>
              <h3 className="mt-3 text-2xl text-navy">{m.platform.donorTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {m.platform.donorBody}
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-2xl bg-navy text-navy-foreground">
            <PhotoFrame
              src={PLATFORM_ORG_PHOTO}
              caption={m.platform.orgCaption}
              hint={m.platform.orgHint}
              tone="navy"
              className="min-h-0 aspect-[16/10] rounded-none border-x-0 border-t-0 lg:min-h-0"
            />
            <div className="p-5 sm:p-6">
              <p className="text-eyebrow text-navy-foreground/55">{m.platform.orgEyebrow}</p>
              <h3 className="mt-3 text-2xl">{m.platform.orgTitle}</h3>
              <p className="mt-3 text-base leading-relaxed text-navy-foreground/80">
                {m.platform.orgBody}
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
