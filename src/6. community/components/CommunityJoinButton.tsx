import { ctaVariants } from "@/shared/components/CtaButton";
import { useI18n } from "@/shared/i18n/LanguageProvider";
import { cn } from "@/lib/utils";
import { COMMUNITY_SETTINGS } from "../settings/community.settings";

export function CommunityJoinButton({
  size = "lg",
  className,
}: {
  size?: "md" | "lg";
  className?: string;
}) {
  const { m } = useI18n();

  return (
    <a
      href={COMMUNITY_SETTINGS.groupUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(ctaVariants({ variant: "solid", size }), className)}
    >
      {m.community.joinGroup}
    </a>
  );
}
