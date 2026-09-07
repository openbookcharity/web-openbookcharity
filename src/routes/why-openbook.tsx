import { createFileRoute } from "@tanstack/react-router";
import { WhyOpenBookPage } from "@/4. why-openbook/pages/WhyOpenBookPage";

const title = "Why Us | OpenBook Charity";
const description =
  "Kenapa lembaga dan donatur memakai OpenBook Charity: catatan terbuka per program, laporan dampak dalam hitungan hari, dan jejak dana yang bisa dicek.";

export const Route = createFileRoute("/why-openbook")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WhyOpenBookPage,
});
