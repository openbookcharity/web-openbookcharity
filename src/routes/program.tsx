import { createFileRoute } from "@tanstack/react-router";
import { PlatformPage } from "@/3. platform/pages/PlatformPage";

const title = "Program | OpenBook Charity";
const description =
  "Program OpenBook Charity: pilih kegiatan, beri, lalu lihat dananya sampai.";

export const Route = createFileRoute("/program")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: PlatformPage,
});
