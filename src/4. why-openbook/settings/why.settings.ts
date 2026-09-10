export const WHY_SETTINGS = {
  stats: [
    { value: "22.000+", label: "Program terbantu" },
    { value: "12+", label: "Kota di Indonesia" },
    { value: "94%", label: "Dana ke lapangan" },
    { value: "6 hari", label: "Waktu laporan" },
  ],
  contrast: [
    {
      old: "Uang masuk, tapi tidak jelas dipakai untuk apa.",
      now: "Tiap program punya rincian biaya. Anda tahu uang dipakai untuk apa.",
    },
    {
      old: "Laporan jarang datang. Kalau ada, panjang dan jarang dibaca.",
      now: "Update lewat video, biasanya dalam 6 hari. Bisa dibuka kapan saja.",
    },
    {
      old: "Sulit bertanya. Tidak ada catatan yang bisa dicek.",
      now: "Anda bisa lihat alurnya dan yakin uang sampai ke penerima.",
    },
    {
      old: "Kepercayaan diminta lewat janji saja.",
      now: "Kepercayaan dibuktikan lewat catatan uang dan bukti dari lapangan.",
    },
  ],
  benefits: [
    {
      n: "01",
      title: "Bantuan per program",
      body: "Anda tidak lagi menggalang ke kantong yang tidak jelas. Setiap kegiatan punya rincian, tujuan, dan penerima. Donatur tahu apa yang mereka bantu, bukan hanya nama lembaga.",
    },
    {
      n: "02",
      title: "Laporan dampak lewat video",
      body: "Tim lapangan merekam bukti dari ponsel. Donatur melihat apa yang berubah di umpan mereka, di minggu yang sama dana sampai. Bukan menunggu berbulan lamanya.",
    },
    {
      n: "03",
      title: "Buku yang terbuka",
      body: "Biaya, penyaluran, dan sisa dana terlihat oleh semua yang terlibat. Sembilan puluh empat persen dana diarahkan ke lapangan, bukan mengendap di pos yang hanya dipahami pengurus.",
    },
    {
      n: "04",
      title: "Skor laporan yang hidup",
      body: "Skor langsung menunjukkan seberapa rajin mitra melaporkan pekerjaan yang sudah dibantu. Rekam jejak tidak bisa disembunyikan di balik ringkasan.",
    },
  ],
  funnel: [{ tone: "light" }, { tone: "light" }, { tone: "sand" }],
} as const;
