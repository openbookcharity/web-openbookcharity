export const HOME_SETTINGS = {
  badge: "12+ kota · 22.000+ program terbantu",
  hero: {
    lines: ["Pastikan donasimu", "tepat sasaran."],
    emphasis: "Semua tercatat transparan.",
    description:
      "Salurkan donasimu ke program terpilih dan pantau penyalurannya secara nyata, dari awal hingga diterima.",
    primaryCta: "Mulai Berdonasi",
    secondaryCta: "Lihat program",
    rating: { score: 4.8, reviews: 2000 },
  },
  stats: [
    { value: "22.000+", label: "Program terbantu" },
    { value: "12+", label: "Kota di Indonesia" },
    { value: "94%", label: "Dana ke lapangan" },
    { value: "6 hari", label: "Waktu laporan" },
  ],
  features: [
    {
      title: "Program Terarah & Spesifik",
      body: "Setiap rupiah dialokasikan khusus untuk kegiatan spesifik, bukan masuk ke kas umum tanpa kejelasan.",
      icon: "target",
    },
    {
      title: "Bukti Lapangan Real-Time",
      body: "Tim di lapangan mengunggah dokumentasi video langsung agar kamu bisa melihat dampak donasimu secara nyata.",
      icon: "video",
    },
    {
      title: "Laporan Keuangan Transparan",
      body: "Rincian alokasi biaya, jumlah penyaluran, hingga sisa dana dapat diakses secara terbuka oleh publik.",
      icon: "book",
    },
    {
      title: "Indikator Akuntabilitas",
      body: "Pantau tingkat kedisiplinan dan transparansi mitra pengelola dalam memperbarui laporan berkala.",
      icon: "activity",
    },
  ],
} as const;
