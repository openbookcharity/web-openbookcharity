import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/1. home/pages/HomePage";

const title = "OpenBook Charity | Lihat donasi sampai ke penerima";
const description =
  "OpenBook Charity tempat berdonasi dengan catatan yang bisa dibuka. Pilih program, beri, lalu lihat dananya sampai.";

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
