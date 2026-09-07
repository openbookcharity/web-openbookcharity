import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { FOOTER_LINKS } from "@/shared/config/navigation";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-navy py-16 text-navy-foreground">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            Transparent giving: every donation is tied to a real project and every project
            reports back with video proof.
          </p>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.title}>
            <p className="text-eyebrow text-navy-foreground/60">{group.title}</p>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/85 transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <Container className="mt-12 border-t border-navy-foreground/15 pt-6">
        <p className="text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} OpenBook Charity. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
