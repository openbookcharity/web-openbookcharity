import { createFileRoute } from "@tanstack/react-router";
import { CommunityPage } from "@/6. community/pages/CommunityPage";

const title = "Community | OpenBook Charity";
const description =
  "Community OpenBook Charity: orang yang memberi, yang menggalang, dan yang dibantu, di satu catatan yang bisa dibuka.";

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
