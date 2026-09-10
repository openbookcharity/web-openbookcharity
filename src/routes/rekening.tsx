import { createFileRoute } from "@tanstack/react-router";
import { RekeningPage } from "@/7. rekening/pages/RekeningPage";

const title = "Rekening donasi | OpenBook Charity";
const description =
  "Rekening donasi OpenBook Charity: transfer bank, mobile banking, dan QRIS.";

export const Route = createFileRoute("/rekening")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: RekeningPage,
});
