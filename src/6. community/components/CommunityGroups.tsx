import { CalendarDays, MessageSquare, Users } from "lucide-react";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { CommunityJoinButton } from "./CommunityJoinButton";
import { COMMUNITY_SETTINGS } from "../settings/community.settings";

const GROUP_ICONS = [Users, MessageSquare, CalendarDays] as const;

export function CommunityGroups() {
  const { m } = useI18n();

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-eyebrow text-accent">{m.community.groupsEyebrow}</p>
          <h2 className="mt-1 text-xl tracking-tight text-navy sm:text-2xl">{m.community.groupsTitle}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{m.community.groupsIntro}</p>
        </div>
        <CommunityJoinButton
          size="md"
          className="h-10 shrink-0 px-3.5 text-xs sm:px-5 sm:text-sm"
        />
      </div>

      <div className="mt-4 grid gap-1.5 sm:grid-cols-3 sm:gap-4">
        {m.community.groups.map((group, index) => {
          const Icon = GROUP_ICONS[index] ?? Users;
          return (
            <a
              key={group.title}
              href={COMMUNITY_SETTINGS.groupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-card px-3 py-3 transition-colors hover:border-accent/40 sm:p-4"
            >
              <Icon className="size-4 text-accent" strokeWidth={1.75} />
              <h3 className="mt-2 text-base text-navy sm:mt-3">{group.title}</h3>
              <p className="mt-1 text-sm leading-snug text-muted-foreground sm:mt-2">
                {group.body}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
