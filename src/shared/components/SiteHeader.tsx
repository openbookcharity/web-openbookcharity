import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";
import { LanguageSwitch } from "./LanguageSwitch";
import { SiteTopBar } from "./SiteTopBar";
import { NAV_LINKS } from "@/shared/config/navigation";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { m } = useI18n();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur shadow-[0_1px_6px_oklch(0.3_0.08_255_/_0.08)]">
      <SiteTopBar />
      <Container className="relative flex min-h-20 min-w-0 items-center justify-between gap-2 py-2 sm:gap-4">
        <div className="relative z-10 min-w-0">
          <Logo />
        </div>

        <nav className="pointer-events-none absolute inset-x-0 hidden justify-center lg:flex">
          <div className="pointer-events-auto flex items-center gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                className="relative pb-1 text-sm font-bold text-navy/70 transition-colors hover:text-secondary data-[status=active]:text-secondary after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-accent after:transition-transform after:duration-200 hover:after:scale-x-100 data-[status=active]:after:scale-x-100"
              >
                {m.nav[link.key]}
              </Link>
            ))}
          </div>
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch />
            <CtaButton to="/program">{m.nav.donateNow}</CtaButton>
          </div>
          <button
            type="button"
            aria-label={m.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-navy lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: true }}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-bold text-navy/80 transition-colors hover:bg-muted hover:text-secondary data-[status=active]:bg-muted data-[status=active]:text-secondary"
              >
                {m.nav[link.key]}
              </Link>
            ))}
            <div className="mt-1 flex items-center justify-between rounded-xl px-3 py-3">
              <span className="text-sm font-bold text-navy/80">{m.nav.language}</span>
              <LanguageSwitch />
            </div>
            <CtaButton to="/program" className="mt-2">
              {m.nav.donateNow}
            </CtaButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
