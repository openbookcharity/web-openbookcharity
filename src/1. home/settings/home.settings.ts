export const HOME_SETTINGS = {
  badge: "38 negara · 22.000+ program terbantu",
  hero: {
    lines: ["Lihat donasi Anda", "sampai ke yang membutuhkan."],
    emphasis: "Catatannya terbuka.",
    description:
      "OpenBook Charity tempat berdonasi dengan catatan yang bisa dibuka. Pilih program, beri, lalu lihat dananya sampai.",
    primaryCta: "Galang dana",
    secondaryCta: "Lihat Platform",
    rating: { score: 4.8, reviews: 2086 },
  },
  stats: [
    { value: "22.000+", label: "Program terbantu" },
    { value: "38", label: "Negara terjangkau" },
    { value: "94%", label: "Dana ke lapangan" },
    { value: "6 hari", label: "Waktu laporan" },
  ],
  features: [
    {
      title: "Bantuan per program",
      body: "Setiap donasi terikat pada kegiatan nyata. Bukan dana umum yang kabur.",
      icon: "target",
    },
    {
      title: "Laporan dampak via video",
      body: "Tim lapangan mengirim bukti dari ponsel. Donatur melihatnya langsung.",
      icon: "video",
    },
    {
      title: "Buku terbuka",
      body: "Biaya, penyaluran, dan sisa dana terlihat oleh yang memberi dan yang menggalang.",
      icon: "book",
    },
    {
      title: "Skor laporan",
      body: "Terlihat seberapa rajin mitra melaporkan pekerjaan yang sudah dibantu.",
      icon: "activity",
    },
  ],
} as const;
