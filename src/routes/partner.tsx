import { createFileRoute } from "@tanstack/react-router";
import { PartnerPage } from "@/5. partner/pages/PartnerPage";

const title = "Galang dana | OpenBook Charity";
const description =
  "Bawa program nirlaba Anda ke OpenBook Charity dan laporkan dampak kepada donatur dalam hitungan hari, bukan berbulan-bulan.";

export const Route = createFileRoute("/partner")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PartnerPage,
});
