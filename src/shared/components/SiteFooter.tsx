import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function SiteFooter() {
  const { m } = useI18n();
  const groups = [
    {
      title: m.footer.platform,
      links: [
        { label: m.footer.overview, to: "/platform" },
        { label: m.nav.why, to: "/why-openbook" },
      ],
    },
    {
      title: m.footer.org,
      links: [
        { label: m.nav.about, to: "/about" },
        { label: m.nav.community, to: "/community" },
        { label: m.nav.raiseFunds, to: "/partner" },
      ],
    },
  ];

  return (
    <footer className="mt-6 bg-navy py-10 text-navy-foreground sm:mt-24 sm:py-16">
      <Container className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Logo tone="light" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-navy-foreground/70">
            {m.footer.blurb}
          </p>
        </div>

        {groups.map((group) => (
          <div key={group.title}>
            <p className="text-eyebrow text-navy-foreground/60">{group.title}</p>
            <ul className="mt-4 space-y-3">
              {group.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-navy-foreground/85 transition-colors hover:text-accent"
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
          © {new Date().getFullYear()} OpenBook Charity. {m.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
