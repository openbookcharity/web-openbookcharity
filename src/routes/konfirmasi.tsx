import { createFileRoute } from "@tanstack/react-router";
import { KonfirmasiPage } from "@/9. konfirmasi/pages/KonfirmasiPage";

const title = "Konfirmasi donasi | OpenBook Charity";
const description =
  "Kirim bukti transfer ke OpenBook Charity supaya pemberian Anda tidak tertukar.";

export const Route = createFileRoute("/konfirmasi")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: KonfirmasiPage,
});
