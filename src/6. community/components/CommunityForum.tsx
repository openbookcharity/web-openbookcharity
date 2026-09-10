import { useI18n } from "@/shared/i18n/LanguageProvider";

export function CommunityForum() {
  const { m } = useI18n();

  return (
    <div>
      <p className="text-eyebrow text-accent">{m.community.forumEyebrow}</p>
      <h2 className="mt-1 text-xl tracking-tight text-navy sm:text-2xl">{m.community.forumTitle}</h2>

      <ul className="mt-4 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {m.community.threads.map((thread) => (
          <li key={thread.title} className="px-3 py-2.5">
            <p className="text-sm text-navy">{thread.title}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">
              {thread.author} · {thread.meta}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
