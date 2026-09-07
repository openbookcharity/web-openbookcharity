import { Play, Clapperboard } from "lucide-react";
import heroImage from "@/assets/impact-hero.jpg";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function PhoneShowcase() {
  const { m } = useI18n();
  const copy = m.home.phone;

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="absolute -left-6 top-24 hidden size-3 rounded-full bg-accent/50 lg:block" />
      <div className="absolute -right-4 -top-4 z-20 rounded-2xl bg-navy px-5 py-4 text-navy-foreground shadow-float">
        <p className="flex items-center gap-2 text-eyebrow text-navy-foreground/70">
          <span className="size-2 rounded-full bg-primary" /> {copy.reportScore}
        </p>
        <p className="mt-1 font-display text-3xl">78</p>
        <p className="text-xs text-navy-foreground/70">{copy.followUp}</p>
      </div>

      <div className="rounded-[2.5rem] border border-border bg-card p-3 shadow-float">
        <div className="overflow-hidden rounded-[2rem] bg-sand">
          <div className="flex items-center justify-between px-5 py-3 text-[11px] font-medium text-navy/70">
            <span>9:41</span>
            <span>OpenBook</span>
          </div>
          <div className="relative">
            <img
              src={heroImage}
              alt={copy.imageAlt}
              width={900}
              height={1200}
              className="h-72 w-full object-cover"
            />
            <button
              type="button"
              aria-label={copy.playVideo}
              className="absolute inset-0 m-auto inline-flex size-16 items-center justify-center rounded-full bg-card/90 text-navy shadow-float transition-transform hover:scale-105"
            >
              <Play className="size-6 fill-current" />
            </button>
          </div>
          <div className="bg-card px-5 py-4">
            <p className="font-display text-lg leading-tight text-navy">
              {copy.programTitle}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {copy.programCaption}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-4 z-20 w-56 rounded-2xl bg-card p-4 shadow-float">
        <p className="text-sm font-semibold text-navy">{copy.dimas}</p>
        <div className="mt-3 h-1.5 w-full rounded-full bg-muted">
          <div className="h-full w-[73%] rounded-full bg-accent" />
        </div>
        <div className="mt-2 flex justify-between text-[11px] text-muted-foreground">
          <span>73% {copy.collected}</span>
          <span>Rp32,8 jt {copy.collected}</span>
        </div>
      </div>

      <div className="absolute -right-2 bottom-24 z-20 hidden w-56 rounded-2xl bg-card p-4 shadow-float sm:block">
        <div className="flex items-start gap-3">
          <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
            <Clapperboard className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold leading-tight text-navy">
              {copy.impactTitle}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {copy.impactBody}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
