import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/1. home/pages/HomePage";

const title = "OpenBook Charity | Pastikan donasimu tepat sasaran";
const description =
  "Salurkan donasimu ke program terpilih dan pantau penyalurannya secara nyata, dari awal hingga diterima.";

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
