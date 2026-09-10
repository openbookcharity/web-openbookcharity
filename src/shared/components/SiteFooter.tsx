import { Link } from "@tanstack/react-router";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { SiteSocial } from "./SiteSocial";
import { SITE_CONTACT } from "@/shared/config/contact";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function SiteFooter() {
  const { m } = useI18n();
  const groups = [
    {
      title: m.footer.platform,
      links: [
        { label: m.footer.overview, to: "/program" },
        { label: m.nav.why, to: "/why-openbook" },
      ],
    },
    {
      title: m.footer.org,
      links: [
        { label: m.nav.about, to: "/about" },
        { label: m.nav.community, to: "/community" },
        { label: m.nav.faq, to: "/faq" },
        { label: m.topBar.confirm, to: "/konfirmasi" },
        { label: m.nav.raiseFunds, to: "/partner" },
      ],
    },
  ];

  const stores = [
    {
      href: SITE_CONTACT.googlePlayUrl,
      src: "/google-play.png",
      alt: m.footer.googlePlay,
    },
    {
      href: SITE_CONTACT.appStoreUrl,
      src: "/appstore-e1715845083819.png",
      alt: m.footer.appStore,
    },
  ];

  return (
    <footer className="bg-navy py-10 text-navy-foreground sm:py-16">
      <Container className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1.25fr]">
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

        <div>
          <p className="text-sm font-bold text-navy-foreground">{m.footer.downloadTitle}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            {stores.map((store) => (
              <a
                key={store.src}
                href={store.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0"
              >
                <img
                  src={store.src}
                  alt={store.alt}
                  className="h-8 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-10">
        <SiteSocial />
      </Container>

      <Container className="mt-8 border-t border-navy-foreground/15 pt-6">
        <p className="text-xs text-navy-foreground/60">
          © {new Date().getFullYear()} OpenBook Charity. {m.footer.copyright}
        </p>
      </Container>
    </footer>
  );
}
