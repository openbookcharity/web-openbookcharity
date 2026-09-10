import { useEffect, useState } from "react";
import { CircleUser, ImageIcon, Play } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { CtaButton, ctaVariants } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { COMMUNITY_SETTINGS } from "../settings/community.settings";
import { COMMUNITY_VOLUNTEER_PHOTOS } from "../photos";

function VolunteerSlide({
  caption,
  hint,
  src,
}: {
  caption: string;
  hint: string;
  src?: string | undefined;
}) {
  if (src) {
    return <img src={src} alt={`${caption}. ${hint}`} className="h-full w-full object-cover" />;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5 px-3 py-5 text-center">
      <span className="inline-flex size-10 items-center justify-center rounded-full border border-navy/15 bg-card text-navy/45">
        <ImageIcon className="size-4" strokeWidth={1.5} />
      </span>
      <p className="font-display text-base text-navy">{caption}</p>
      <p className="max-w-[14rem] text-xs leading-snug text-muted-foreground">{hint}</p>
    </div>
  );
}

function VolunteerSlider({
  photos,
}: {
  photos: readonly { caption: string; hint: string }[];
}) {
  const [active, setActive] = useState(0);
  const count = photos.length;

  useEffect(() => {
    if (count < 2) return undefined;
    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 1500);
    return () => window.clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  return (
    <div className="relative h-[180px] w-full min-w-0 sm:h-[260px]">
      {photos.map((photo, index) => {
        const offset = (index - active + count) % count;
        const isCenter = offset === 0;
        const isRight = offset === 1;
        const isLeft = offset === count - 1;
        const src = COMMUNITY_VOLUNTEER_PHOTOS[index];

        return (
          <button
            key={photo.caption}
            type="button"
            onClick={() => setActive(index)}
            className={cn(
              "absolute overflow-hidden rounded-2xl border text-left transition-all duration-300 ease-out",
              src
                ? "border-border bg-muted"
                : "border-dashed border-navy/20 bg-muted",
              isCenter &&
                "left-[14%] top-0 z-20 h-full w-[72%] scale-100 opacity-100 shadow-float",
              isLeft && "left-0 top-[6%] z-10 h-[88%] w-[42%] opacity-85",
              isRight && "left-[58%] top-[6%] z-10 h-[88%] w-[42%] opacity-85",
              !isCenter &&
                !isLeft &&
                !isRight &&
                "pointer-events-none left-[29%] top-[16%] z-0 h-[68%] w-[42%] opacity-0",
            )}
            aria-hidden={!isCenter}
            tabIndex={isCenter || isLeft || isRight ? 0 : -1}
          >
            <VolunteerSlide caption={photo.caption} hint={photo.hint} src={src} />
          </button>
        );
      })}
    </div>
  );
}

export function CommunityVolunteer() {
  const { m } = useI18n();

  return (
    <section className="border-b border-border bg-background py-2 sm:py-8">
      <Container>
        <div className="grid items-center gap-4 sm:gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <p className="text-eyebrow text-navy/55">{m.community.eyebrow}</p>
            <h1 className="mt-2 font-display text-2xl leading-snug tracking-tight text-navy sm:text-3xl">
              {m.community.volunteerTitle}
            </h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
              {m.community.volunteerBody}
            </p>
            <div className="mt-4 flex flex-nowrap items-center gap-2 sm:flex-wrap">
              <a
                href={COMMUNITY_SETTINGS.groupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  ctaVariants({ variant: "solid", size: "md" }),
                  "h-10 shrink-0 px-3.5 text-xs sm:h-14 sm:px-8 sm:text-base",
                )}
              >
                <CircleUser className="size-4" />
                {m.community.volunteerJoin}
              </a>
              <CtaButton
                to="/program"
                size="md"
                variant="outline"
                className="h-10 shrink-0 px-3.5 text-xs sm:h-14 sm:px-8 sm:text-base"
              >
                <span className="inline-flex size-4 items-center justify-center rounded-sm border-2 border-current">
                  <Play className="size-2 fill-current" />
                </span>
                {m.community.volunteerSee}
              </CtaButton>
            </div>
          </div>

          <VolunteerSlider photos={m.community.volunteerPhotos} />
        </div>
      </Container>
    </section>
  );
}
