import { createFileRoute } from "@tanstack/react-router";
import { FaqPage } from "@/8. faq/pages/FaqPage";

const title = "FAQ | OpenBook Charity";
const description =
  "Pertanyaan yang sering diajukan ke OpenBook Charity, termasuk donasi, perpuluhan, dan program gereja.";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FaqPage,
});
