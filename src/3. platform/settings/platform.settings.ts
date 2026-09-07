export const PLATFORM_SETTINGS = {
  steps: [
    {
      n: "01",
      title: "Buat program",
      body: "Tulis tujuan, biaya, dan penerima dari awal. Donatur tahu apa yang mereka bantu.",
    },
    {
      n: "02",
      title: "Terima donasi",
      body: "Setiap pemberian masuk ke program itu, bukan ke kantong umum yang kabur.",
    },
    {
      n: "03",
      title: "Catat penyaluran",
      body: "Uang yang keluar tercatat. Jejaknya bisa diikuti sampai ke lapangan.",
    },
    {
      n: "04",
      title: "Unggah bukti",
      body: "Tim lapangan mengirim video dan laporan dari ponsel, biasanya dalam 6 hari.",
    },
    {
      n: "05",
      title: "Donatur cek",
      body: "Catatan, sisa dana, dan dampak terlihat. Tidak perlu menebak.",
    },
  ],
  modules: [
    {
      title: "Biaya per program",
      body: "Rincian tertulis per kegiatan. Bukan pos yang hanya dipahami pengurus.",
    },
    {
      title: "Jejak dana",
      body: "Dari pemberian sampai penyaluran, alurnya tercatat dan bisa dibuka.",
    },
    {
      title: "Laporan video",
      body: "Bukti dari lapangan masuk ke umpan donatur, bukan PDF tahunan.",
    },
    {
      title: "Skor laporan",
      body: "Terlihat seberapa rajin mitra melaporkan pekerjaan yang sudah dibantu.",
    },
    {
      title: "Serah terima",
      body: "Program yang selesai bisa diserahkan ke mitra di daerah, catatannya tetap ada.",
    },
  ],
  screens: [
    { caption: "Layar 1", hint: "Daftar program dan dana terkumpul." },
    { caption: "Layar 2", hint: "Rincian biaya dan sisa dana." },
    { caption: "Layar 3", hint: "Laporan video dari lapangan." },
    { caption: "Layar 4", hint: "Skor laporan mitra." },
  ],
} as const;
