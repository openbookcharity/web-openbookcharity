import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/6. community/pages/CommunityPage";

const title = "Community | OpenBook Charity";
const description =
  "Bantu lebih banyak sebagai relawan OpenBook Charity. Selain donasi, ikut program dan kegiatan secara langsung.";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: CommunityPage,
});
