import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/2. about/pages/AboutPage";

const title = "Cerita kami | OpenBook Charity";
const description =
  "Dari keresahan transparansi donasi di komunitas keagamaan, OpenBook Charity lahir sebagai buku terbuka: setiap pemberian bisa dilihat dan dicek.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});
