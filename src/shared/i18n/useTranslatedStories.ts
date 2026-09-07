import { SHARED_STORIES } from "@/shared/data/stories";
import type { StoryItem } from "@/shared/components/StoryHighlight";
import { useI18n } from "./LanguageProvider";

export function useTranslatedStories(): StoryItem[] {
  const { m } = useI18n();

  return SHARED_STORIES.map((story, index) => {
    const copy = m.stories[index];
    return {
      name: story.name,
      quote: copy?.quote ?? story.quote,
      role: copy?.role ?? story.role,
    };
  });
}
