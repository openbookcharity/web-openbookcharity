import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/features/1-home/pages/HomePage";

const title = "OpenBook Charity — Give directly, see the impact";
const description =
  "OpenBook connects donors and nonprofits with project-based fundraising, video impact updates, and AI-assisted reporting in one transparent giving platform.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: HomePage,
});
