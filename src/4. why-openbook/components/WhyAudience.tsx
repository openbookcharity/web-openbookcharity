import { ArrowRight } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { PhotoFrame } from "@/shared/components/PhotoFrame";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { WHY_SETTINGS } from "../settings/why.settings";
import { WHY_FUNNEL_PHOTOS } from "../photos";

function FunnelCard({
  step,
  tone,
  src,
}: {
  step: {
    n: string;
    eyebrow: string;
    title: string;
    body: string;
    caption: string;
    hint: string;
  };
  tone: "light" | "navy" | "sand";
  src?: string | undefined;
}) {
  const isNavy = tone === "navy";

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background">
      <PhotoFrame
        src={src}
        caption={step.caption}
        hint={step.hint}
        tone={isNavy ? "navy" : "light"}
        className="min-h-[160px] rounded-none border-x-0 border-t-0 bg-background lg:min-h-[180px]"
      />
      <div className="bg-background px-3 py-3 sm:p-6">
        <p className={cn("text-eyebrow", isNavy ? "text-navy-foreground/55" : "text-accent")}>
          {step.n} · {step.eyebrow}
        </p>
        <h3
          className={cn(
            "mt-2 text-lg sm:mt-3 sm:text-2xl",
            isNavy ? "text-navy-foreground" : "text-navy",
          )}
        >
          {step.title}
        </h3>
        <p
          className={cn(
            "mt-2 text-sm leading-relaxed sm:mt-3 sm:text-base",
            isNavy ? "text-navy-foreground/80" : "text-muted-foreground",
          )}
        >
          {step.body}
        </p>
      </div>
    </article>
  );
}

export function WhyAudience() {
  const { m } = useI18n();
  const steps = m.why.funnel;

  return (
    <section className="bg-background py-2 sm:py-20">
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

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2">
          {m.why.funnelPath.map((label, index) => (
            <span key={label} className="inline-flex items-center gap-3">
              {index > 0 ? (
                <ArrowRight className="size-4 shrink-0 text-accent" aria-hidden />
              ) : null}
              <span className="text-sm font-bold text-navy">
                {String(index + 1).padStart(2, "0")} {label}
              </span>
            </span>
          ))}
        </div>
      </Container>

      <Carousel
        opts={{ align: "start", loop: false }}
        className="mt-6 w-full max-w-full sm:mt-8 lg:mx-auto lg:max-w-[84rem]"
      >
        <CarouselContent className="ml-0 pl-2">
          {steps.map((step, index) => (
            <CarouselItem
              key={step.n}
              className="basis-[calc((100%-0.5rem)*8/9)] pl-0 pr-2 last:pr-2 md:basis-[calc((100%-0.5rem)*4/9)]"
            >
              <FunnelCard
                step={step}
                src={WHY_FUNNEL_PHOTOS[index]}
                tone={WHY_SETTINGS.funnel[index]?.tone ?? "light"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
