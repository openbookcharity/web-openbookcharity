import { ImageIcon } from "lucide-react";
import { useI18n } from "@/shared/i18n/LanguageProvider";

export function CommunityDirectory() {
  const { m } = useI18n();

  return (
    <div>
      <p className="text-eyebrow text-accent">{m.community.directoryEyebrow}</p>
      <h2 className="mt-1 text-xl tracking-tight text-navy sm:text-2xl">{m.community.directoryTitle}</h2>

      <ul className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {m.community.members.map((member) => (
          <li key={`${member.name}-${member.place}`} className="flex items-center gap-3 px-3 py-2">
            <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-navy/45">
              <ImageIcon className="size-3.5" />
            </span>
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline gap-2">
                <h3 className="truncate text-sm text-navy">{member.name}</h3>
                <p className="shrink-0 text-[10px] font-semibold uppercase tracking-wide text-accent">
                  {member.role}
                </p>
              </div>
              <p className="truncate text-xs text-muted-foreground">
                {member.place} · {member.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
