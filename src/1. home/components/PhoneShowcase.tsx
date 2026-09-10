import { useEffect, useRef, useState } from "react";
import { Play, Clapperboard } from "lucide-react";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import type { Messages } from "@/shared/i18n/messages";
import { cn } from "@/lib/utils";
import { HOME_HERO_VIDEO_POSTERS, HOME_HERO_VIDEO_SOURCES } from "../photos";

type HeroVideoSlide = Messages["home"]["heroVideos"][number];

function PhoneShowcaseCard({
  slide,
  poster,
  videoSrc,
  isActive,
}: {
  slide: HeroVideoSlide;
  poster?: string | undefined;
  videoSrc?: string | undefined;
  isActive: boolean;
}) {
  const { m } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;

    if (isActive) {
      video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      video.pause();
      video.currentTime = 0;
      setPlaying(false);
    }
  }, [isActive, videoSrc]);

  const showPlayOverlay = !videoSrc || !playing;

  return (
    <div className="relative mx-auto w-full max-w-lg overflow-visible">
      <div className="absolute right-0 top-0 z-20 rounded-2xl bg-navy px-5 py-4 text-navy-foreground shadow-float sm:-right-4 sm:-top-4">
        <p className="flex items-center gap-2 text-eyebrow text-navy-foreground/70">
          <span className="size-2 rounded-full bg-primary" /> {m.home.reportScore}
        </p>
        <p className="mt-1 font-display text-3xl text-navy-foreground">{slide.reportScore}</p>
        <p className="text-xs text-navy-foreground/70">{slide.followUp}</p>
      </div>

      <div className="rounded-[2.5rem] border border-border bg-card p-3 shadow-float">
        <div className="overflow-hidden rounded-[2rem] bg-sand">
          <div className="flex items-center justify-between px-5 py-3 text-[11px] font-medium text-navy/70">
            <span>9:41</span>
            <span>OpenBook</span>
          </div>
          <div className="relative">
            {videoSrc ? (
              <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                muted
                playsInline
                loop
                className="h-80 w-full object-cover sm:h-[22rem]"
              />
            ) : (
              poster && (
                <img
                  src={poster}
                  alt={slide.posterAlt}
                  width={900}
                  height={1200}
                  className="h-80 w-full object-cover sm:h-[22rem]"
                />
              )
            )}
            {showPlayOverlay && (
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 m-auto inline-flex size-16 items-center justify-center rounded-full bg-card/90 text-navy shadow-float"
              >
                <Play className="size-6 fill-current" />
              </span>
            )}
          </div>
          <div className="bg-card px-5 py-4">
            <p className="font-display text-lg leading-tight text-navy">{slide.programTitle}</p>
            <p className="mt-1 text-xs text-muted-foreground">{slide.programCaption}</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 z-20 w-52 rounded-2xl bg-card p-4 shadow-float sm:-bottom-6 sm:-left-4 sm:w-56">
        <p className="text-sm font-semibold text-navy">{slide.fundTitle}</p>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-accent"
            style={{ width: `${slide.fundProgress}%` }}
          />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
          <span>
            {slide.fundProgress}% {slide.collected}
          </span>
          <span>
            {slide.fundRaised} {slide.collected}
          </span>
        </div>
      </div>

      <div className="absolute -right-2 bottom-24 z-20 hidden w-56 rounded-2xl bg-card p-4 shadow-float sm:block">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Clapperboard className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight text-navy">{slide.impactTitle}</p>
            <p className="mt-1 text-xs text-muted-foreground">{slide.impactBody}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroVideoCarousel({
  slides,
}: {
  slides: readonly HeroVideoSlide[];
}) {
  const [active, setActive] = useState(0);
  const count = slides.length;

  useEffect(() => {
    if (count < 2) return undefined;

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches) return undefined;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, 6000);

    return () => window.clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  return (
    <div className="mx-auto w-full max-w-lg pb-2">
      <div className="relative min-h-[440px] w-full sm:min-h-[540px]">
        {slides.map((slide, index) => {
          const isActive = index === active;
          const poster = HOME_HERO_VIDEO_POSTERS[index];
          const videoSrc = HOME_HERO_VIDEO_SOURCES[index];

          return (
            <div
              key={slide.programTitle}
              aria-hidden={!isActive}
              className={cn(
                "inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none",
                isActive
                  ? "relative z-10 opacity-100"
                  : "pointer-events-none absolute z-0 opacity-0",
              )}
            >
              <PhoneShowcaseCard
                slide={slide}
                poster={poster}
                videoSrc={videoSrc}
                isActive={isActive}
              />
            </div>
          );
        })}
      </div>

      {count > 1 && (
        <div className="mt-5 flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.programTitle}
              type="button"
              aria-label={slide.playVideo}
              aria-current={index === active ? "true" : undefined}
              onClick={() => setActive(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300",
                index === active ? "w-6 bg-accent" : "w-2 bg-border hover:bg-accent/40",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PhoneShowcase() {
  const { m } = useI18n();

  return <HeroVideoCarousel slides={m.home.heroVideos} />;
}
