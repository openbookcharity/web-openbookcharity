import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Container";
import { CtaButton } from "./CtaButton";
import { LanguageSwitch } from "./LanguageSwitch";
import { useScrolled } from "@/shared/hooks/useScrolled";
import { NAV_LINKS } from "@/shared/config/navigation";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);
  const { m } = useI18n();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/90 backdrop-blur transition-shadow",
        scrolled && "border-border shadow-soft",
      )}
    >
      <Container className="flex min-h-20 min-w-0 items-center justify-between gap-2 py-2 sm:gap-4 lg:gap-6">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex">
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
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-3 lg:flex">
            <LanguageSwitch />
            <CtaButton to="/partner">{m.nav.raiseFunds}</CtaButton>
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
            <CtaButton to="/partner" className="mt-2">
              {m.nav.raiseFunds}
            </CtaButton>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
