import { useCallback, useEffect, useRef, useState } from "react";
import { BadgeCheck, Mail, MessageCircle, Phone, Wallet } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { SITE_CONTACT } from "@/shared/config/contact";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

const MARQUEE_CYCLE_MS = 32_000;
const MARQUEE_RESUME_MS = 3_000;

function Dot() {
  return <span className="size-1 shrink-0 rounded-full bg-accent" aria-hidden />;
}

function TopBarItems({
  className,
  duplicate,
}: {
  className?: string;
  duplicate?: boolean;
}) {
  const { m } = useI18n();

  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-2.5 text-[11px] font-semibold text-navy/75 sm:gap-3 sm:text-xs",
        className,
      )}
      aria-hidden={duplicate || undefined}
    >
      <span className="whitespace-nowrap">{m.topBar.service}</span>
      <Dot />
      <a
        href={`tel:${SITE_CONTACT.phoneTel}`}
        tabIndex={duplicate ? -1 : undefined}
        className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
      >
        <Phone className="size-3 shrink-0 text-secondary" />
        {SITE_CONTACT.phoneDisplay} ({m.topBar.callCenter})
      </a>
      <Dot />
      <a
        href={SITE_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
      >
        <MessageCircle className="size-3 shrink-0 text-secondary" />
        WhatsApp: {SITE_CONTACT.whatsappDisplay}
      </a>
      <Dot />
      <a
        href={`mailto:${SITE_CONTACT.email}`}
        tabIndex={duplicate ? -1 : undefined}
        className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
      >
        <Mail className="size-3 shrink-0 text-secondary" />
        {SITE_CONTACT.email}
      </a>
      <Dot />
      <Link
        to={SITE_CONTACT.rekeningPath}
        tabIndex={duplicate ? -1 : undefined}
        className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-secondary"
      >
        <Wallet className="size-3 shrink-0 text-secondary" />
        {m.topBar.rekening}
      </Link>
      <Dot />
      <Link
        to={SITE_CONTACT.konfirmasiPath}
        tabIndex={duplicate ? -1 : undefined}
        className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-accent px-2.5 py-0.5 text-accent-foreground transition-colors hover:bg-accent/90"
      >
        <BadgeCheck className="size-3 shrink-0" />
        {m.topBar.confirm}
      </Link>
    </div>
  );
}

function TopBarMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isManual, setIsManual] = useState(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const prefersReducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  const normalizeScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const half = el.scrollWidth / 2;
    if (half <= 0) return;

    if (el.scrollLeft >= half) {
      el.scrollLeft -= half;
    } else if (el.scrollLeft < 0) {
      el.scrollLeft += half;
    }
  }, []);

  const pauseAutoScroll = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
    setIsManual(true);
  }, []);

  const scheduleResume = useCallback(() => {
    if (resumeTimerRef.current) {
      clearTimeout(resumeTimerRef.current);
    }
    resumeTimerRef.current = setTimeout(() => {
      resumeTimerRef.current = null;
      normalizeScroll();
      setIsManual(false);
    }, MARQUEE_RESUME_MS);
  }, [normalizeScroll]);

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        clearTimeout(resumeTimerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isManual || prefersReducedMotion.current) return;

    const el = scrollRef.current;
    if (!el) return;

    let raf = 0;
    let lastTime = performance.now();

    const tick = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      const half = el.scrollWidth / 2;
      if (half > 0) {
        const speed = half / MARQUEE_CYCLE_MS;
        el.scrollLeft += speed * delta;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isManual]);

  return (
    <div
      ref={scrollRef}
      className="mindmap-scroll overflow-x-auto py-1.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      onPointerDown={pauseAutoScroll}
      onPointerUp={scheduleResume}
      onPointerCancel={scheduleResume}
      onScroll={normalizeScroll}
    >
      <div className="flex w-max">
        <TopBarItems className="pr-8" />
        <TopBarItems duplicate className="pointer-events-none pr-8" />
      </div>
    </div>
  );
}

export function SiteTopBar() {
  return (
    <div className="border-b border-border bg-muted/70">
      <div className="sm:hidden">
        <TopBarMarquee />
      </div>

      <Container className="hidden min-h-8 items-center py-1.5 sm:flex">
        <TopBarItems className="mx-auto w-max" />
      </Container>
    </div>
  );
}
