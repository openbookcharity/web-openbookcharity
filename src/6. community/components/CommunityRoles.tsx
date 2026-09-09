import { Handshake, Heart, Users } from "lucide-react";
import { Container } from "@/shared/components/Container";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { COMMUNITY_SETTINGS } from "../settings/community.settings";

const ICONS = { heart: Heart, handshake: Handshake, users: Users };

export function CommunityRoles() {
  const { m } = useI18n();

  return (
    <section className="border-t border-border py-8 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <p className="text-eyebrow text-accent">{m.community.rolesEyebrow}</p>
          <h2 className="mt-3 text-3xl leading-snug tracking-tight text-navy sm:text-4xl">
            {m.community.rolesTitle}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {m.community.rolesIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {m.community.roles.map((role, index) => {
            const icon = COMMUNITY_SETTINGS.roles[index]?.icon ?? "heart";
            const Icon = ICONS[icon];
            return (
              <article
                key={role.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-soft sm:p-6"
              >
                <span className="inline-flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-4 text-xl text-navy">{role.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {role.body}
                </p>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
