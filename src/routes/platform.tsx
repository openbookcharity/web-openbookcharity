import { createFileRoute } from "@tanstack/react-router";
import { PlatformPage } from "@/3. platform/pages/PlatformPage";

const title = "Platform | OpenBook Charity";
const description =
  "Cara kerja OpenBook Charity: buat program, terima donasi, catat penyaluran, unggah bukti, dan biarkan donatur melihat dana sampai.";

export const Route = createFileRoute("/platform")({
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
