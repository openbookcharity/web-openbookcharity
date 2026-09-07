export type Lang = "id" | "en";

const id = {
  nav: {
    home: "Home",
    about: "About Us",
    why: "Why Us",
    platform: "Platform",
    raiseFunds: "Galang dana",
    openMenu: "Buka menu",
    language: "Bahasa",
  },
  footer: {
    blurb:
      "Setiap pemberian terikat pada kegiatan nyata, dan setiap program lapor kembali dengan bukti video.",
    platform: "Platform",
    overview: "Ringkasan",
    org: "Lembaga",
    copyright: "Hak cipta dilindungi.",
  },
  logo: {
    tagline: "Lihat perbedaan yang Anda buat",
  },
  common: {
    raiseFunds: "Galang dana",
    seePlatform: "Lihat Platform",
    seePrograms: "Lihat kegiatan",
    photoSoon: "Gambar sementara",
    screen: "Layar",
  },
  home: {
    badge: "38 negara · 22.000+ program terbantu",
    heroLines: ["Lihat donasi Anda", "sampai ke yang membutuhkan."],
    heroEmphasis: "Catatannya terbuka.",
    heroDescription:
      "OpenBook Charity tempat berdonasi dengan catatan yang bisa dibuka. Pilih program, beri, lalu lihat dananya sampai.",
    reviewsSuffix: "ulasan bintang lima",
    reviewsFrom: "dari",
    stats: [
      { value: "22.000+", label: "Program terbantu" },
      { value: "38", label: "Negara terjangkau" },
      { value: "94%", label: "Dana ke lapangan" },
      { value: "6 hari", label: "Waktu laporan" },
    ],
    featuresEyebrow: "Cara kerja",
    featuresTitle: "Donasi yang bisa diikuti sampai penerima",
    featuresDescription: "Galang per program, laporkan dengan video, dan buka catatannya.",
    features: [
      {
        title: "Bantuan per program",
        body: "Setiap donasi terikat pada kegiatan nyata. Bukan dana umum yang kabur.",
      },
      {
        title: "Laporan dampak via video",
        body: "Tim lapangan mengirim bukti dari ponsel. Donatur melihatnya langsung.",
      },
      {
        title: "Buku terbuka",
        body: "Biaya, penyaluran, dan sisa dana terlihat oleh yang memberi dan yang menggalang.",
      },
      {
        title: "Skor laporan",
        body: "Terlihat seberapa rajin mitra melaporkan pekerjaan yang sudah dibantu.",
      },
    ],
    galleryEyebrow: "Dari lapangan",
    galleryTitle: "Foto dari kegiatan di lapangan.",
    gallerySlides: [
      { caption: "Slide 1", hint: "Laporan video dari Magelang." },
      { caption: "Slide 2", hint: "Serah terima di Yogyakarta." },
      { caption: "Slide 3", hint: "Air bersih di Kupang." },
      { caption: "Slide 4", hint: "Catatan dana yang bisa dicek." },
    ],
    projectsEyebrow: "Sedang berjalan",
    projectsTitle: "Kegiatan yang sedang dibantu",
    projectsDescription:
      "Pilih program di bawah. Lihat dananya terkumpul, lalu pastikan ia sampai ke yang membutuhkan.",
    photoProgram: "Foto program",
    reportScore: "Skor laporan",
    raised: "terkumpul",
    storiesTitle: "Yang sudah memberi dan melihat",
    storiesDescription: "Donatur dan mitra yang mengecek catatannya sendiri.",
    storiesEyebrow: "Cerita",
    transferEyebrow: "Serah terima",
    transferTitle: "Serahkan program yang sudah selesai ke mitra",
    transferDescription: "Catatan dananya tetap bisa dilihat donatur.",
    transferNote: "Setiap serah terima tercatat dan bisa dilihat donatur.",
    transferEmail: "Email mitra di daerah",
    transferSubmit: "Mulai serah terima",
    transferPending: "Mengirim…",
    transferDone: "Permintaan sudah dikirim, menunggu tinjauan.",
    ctaTitle: "Buka catatan lembaga Anda di sini",
    ctaBody: "Kalau siap transparan, gabung sebagai mitra. Donatur bisa melihat dana sampai.",
    phone: {
      reportScore: "Skor laporan",
      followUp: "Aktif · 12 item tindak lanjut",
      playVideo: "Putar video dampak",
      programTitle: "Bantu Nenek Sari memulai usaha jagung",
      programCaption: "Sari diasuh bersama cucunya di Magelang.",
      dimas: "Harapan baru untuk Dimas",
      collected: "terkumpul",
      impactTitle: "Laporan dampak diterima",
      impactBody: "Donatur bisa melihat apa yang berubah.",
      imageAlt: "Nenek Sari menggendong cucunya di depan rumah di Magelang",
    },
    projects: [
      { id: "dimas-harapan", title: "Harapan baru untuk Dimas" },
      { id: "nenek-sari-jagung", title: "Bantu Nenek Sari memulai usaha jagung" },
      { id: "sd-air-bersih", title: "Air bersih untuk SD Oebelo" },
    ],
  },
  stories: [
    {
      quote:
        "Saya melihat videonya di minggu yang sama donasi saya sampai. Itu belum pernah terjadi di lembaga lain.",
      role: "Donatur bulanan, Jakarta",
    },
    {
      quote:
        "Tim lapangan kami yang kecil bisa melaporkan dampak dalam hitungan menit, bukan laporan panjang yang tidak dibaca siapa pun.",
      role: "Ketua program, Makassar",
    },
    {
      quote:
        "Keterbukaan bukan janji lagi. Dewan kami bisa melihat sendiri ke mana dananya pergi.",
      role: "Mitra yayasan, Bandung",
    },
  ],
  about: {
    heroEyebrow: "Tentang kami",
    heroTitle: "Niat baik tidak seharusnya berjalan di dalam kegelapan.",
    heroP1:
      "Kami percaya setiap rupiah yang keluar dari tangan yang tulus berhak bermuara pada penerima yang tepat, secara terbuka dan jujur.",
    heroP2:
      "OpenBook Charity tidak lahir dari teori. Ia lahir dari yang dilihat, dirasakan, lalu tidak bisa lagi disembunyikan.",
    heroPhoto: "Gambar sementara",
    heroPhotoHint: "Taruh foto di sini: potret pendiri, komunitas, atau momen memberi.",
    heroAlt: "Pendiri OpenBook Charity bersama komunitas",
    conflictEyebrow: "Akar cerita",
    conflictTitle:
      "Beliau melihat uang terkumpul. Yang tidak pernah terlihat adalah ke mana perginya.",
    conflictP1:
      "Pendiri OBC adalah penggiat komunitas keagamaan. Di sana beliau menyaksikan donasi mengalir setiap pekan, dari ratusan juta hingga miliaran rupiah. Niat orang yang memberi tidak diragukan. Yang selalu menggantung adalah satu pertanyaan sederhana: ke mana tepatnya uang ini pergi?",
    conflictP2:
      "Laporan yang jujur jarang datang. Yang ada hanyalah keheningan, dan rasa ganjal yang dibawa pulang setelah memberi. Berderma yang seharusnya menenangkan justru menyisakan pertanyaan yang tidak boleh diucapkan.",
    conflictQuote:
      "Yang kulihat hanya uang yang masuk. Yang tidak kulihat: apakah ia sungguh sampai.",
    conflictQuoteBody:
      "Bukan soal seberapa besar yang terkumpul. Yang mengganggu adalah ruang kosong setelah pemberian diserahkan: tidak ada catatan, tidak ada nama penerima, tidak ada yang bisa ditunjuk kalau ditanya. Dari ruang kosong itu, kepercayaan tidak runtuh sekaligus. Ia menipis, pelan, tanpa ada yang berani menunjuk.",
    silenceEyebrow: "Keheningan",
    silenceQuote: "Sebagian jemaah merasakan yang janggal. Mereka bungkam.",
    silenceP1:
      "Mereka tahu ada yang tidak beres. Tapi tidak ada wadah untuk bertanya, dan tidak ada keberanian untuk bersuara. Memberi yang seharusnya mendatangkan damai justru terasa seperti kewajiban, sekadar formalitas, bukan ketulusan.",
    silenceP2:
      "Iklim berderma yang dibangun dari rasa terpaksa tidak akan pernah menumbuhkan kepercayaan. Ia hanya menumbuhkan diam.",
    turningEyebrow: "Titik balik",
    turningTitle: "Diam tidak memperbaiki kepercayaan yang sudah luntur.",
    turningIntro:
      "Kami menyadari tutup mata bukan pilihan. Kalau niat baik terus berjalan tanpa jejak, yang tersisa hanyalah keraguan. Harus ada aksi yang meruntuhkan tembok ketidaktahuan itu.",
    turningSteps: [
      {
        n: "01",
        title: "Lihat yang tersembunyi",
        body: "Kepercayaan tidak bisa tumbuh di tempat yang gelap. Yang tidak dicatat, tidak bisa dipertanggungjawabkan. Yang tidak bisa dicek, pada akhirnya tidak dipercaya.",
      },
      {
        n: "02",
        title: "Berani bertanya",
        body: "Donatur berhak tahu ke mana uangnya pergi. Yang menerima berhak dipastikan sungguh menerima. Diam bukan kesetiaan. Diam hanya menunda kejujuran.",
      },
      {
        n: "03",
        title: "Buka catatannya",
        body: "Kepercayaan yang sudah luntur tidak bisa diperbaiki dengan ucapan manis. Jalan yang tersisa hanyalah membuat aliran dana terlihat, nyata, bukan janji.",
      },
    ],
    birthEyebrow: "Jawaban kami",
    birthTitle: "Dari keresahan itu, lahir OpenBook Charity.",
    birthP1:
      "OpenBook Charity hadir sebagai jawaban atas kerinduan akan tempat berderma yang sungguh bisa dicek. Bukan laporan tahunan yang tidak dibaca. Bukan janji di atas panggung. Catatan yang bisa dilihat kapan saja.",
    birthP2:
      "Di sini donatur bisa melihat, mengikuti, dan memastikan dana sampai. Setiap program punya jejak, dari tangan yang memberi sampai orang yang menerima. Setiap rupiah punya tempat. Setiap pertanyaan punya jawaban.",
    direction: "Arah kami",
    vision: "Visi",
    visionTitle:
      "Agar berderma kembali tulus: setiap pemberian terlihat, setiap penyaluran bisa dipercaya.",
    visionBody:
      "Kami ingin orang memberi karena yakin, bukan karena terpaksa, bukan karena formalitas. Keyakinan itu hanya tumbuh kalau catatannya terbuka.",
    mission: "Misi",
    missions: [
      {
        title: "Buka aliran dana",
        body: "Setiap program punya catatan sampai rupiah terakhir. Tidak ada dana kabur, tidak ada pos yang hanya dipahami pengurus.",
      },
      {
        title: "Buka ruang bertanya",
        body: "Yang memberi berhak bertanya. Yang menerima berhak dipastikan. OBC jadi wadah yang dulu tidak ada: tempat bersuara tanpa harus bungkam.",
      },
      {
        title: "Jaga mitra di lapangan",
        body: "Laporan datang cepat, jujur, dan bisa dilihat. Bukan menunggu berbulan lamanya. Bukan PDF yang tidak dibuka siapa pun.",
      },
    ],
    promisesEyebrow: "Janji kami",
    promisesTitle: "Buku terbuka, bukan slogan.",
    promisesIntro:
      "Kalau kepercayaan sudah pernah patah, yang dibutuhkan bukan ucapan baru. Yang dibutuhkan adalah bukti yang bisa dilihat berulang kali.",
    promises: [
      {
        n: "01",
        title: "Biaya yang jelas",
        body: "Setiap kegiatan punya rincian yang bisa dilihat. Bukan dana umum yang kabur. Bukan pos yang hanya tertulis di kertas internal.",
      },
      {
        n: "02",
        title: "Jejak yang bisa diikuti",
        body: "Dari pemberian sampai penyaluran, alurnya tercatat. Donatur tidak perlu menebak. Mitra tidak perlu bersembunyi di balik ringkasan.",
      },
      {
        n: "03",
        title: "Laporan yang datang",
        body: "Dampak dilaporkan, bukan ditunggu berbulan lamanya. Video, angka, dan catatan yang sama bisa dicek oleh siapa pun yang memberi.",
      },
    ],
    storiesTitle: "Yang sudah berani melihat",
    storiesDescription:
      "Mereka memberi, atau bekerja di lapangan, lalu melihat sendiri bahwa catatannya memang bisa dicek.",
    ctaTitle: "Percaya itu harus bisa dicek.",
    ctaBody:
      "Kalau lembaga Anda siap membuka catatannya, kami siap menampungnya. Bawa kegiatan Anda ke OpenBook Charity, supaya yang memberi tidak perlu bungkam lagi.",
  },
  why: {
    eyebrow: "Why Us",
    title: "Karena donatur tidak lagi cukup diminta percaya.",
    p1: "Lembaga yang menggalang di tempat gelap kehilangan orang yang tulus. Yang tinggal hanyalah pemberian karena terpaksa. OpenBook Charity adalah platform agar setiap pemberian terlihat, dan setiap penyaluran bisa dipastikan.",
    p2: "Di sini donatur melihat, mengikuti, dan memastikan dana sampai. Mitra punya rekam jejak yang bisa dicek, bukan laporan tahunan yang tidak dibuka siapa pun.",
    stats: [
      { value: "22.000+", label: "Program terbantu" },
      { value: "38", label: "Negara terjangkau" },
      { value: "94%", label: "Dana ke lapangan" },
      { value: "6 hari", label: "Waktu laporan" },
    ],
    problemEyebrow: "Masalahnya",
    problemTitle: "Cara lama membuat niat baik berjalan di kegelapan.",
    problemP1:
      "Banyak lembaga masih menggalang seperti dulu: uang masuk, laporan ditunda, jejak hilang. Donasi bisa terkumpul sangat besar, bahkan miliaran, tetapi alokasi dan peruntukannya tidak terbuka. Yang memberi tidak tahu ke mana tepatnya uang ini pergi.",
    problemP2:
      "Sebagian orang merasakan yang janggal, lalu bungkam. Tidak ada wadah untuk bertanya, tidak ada catatan untuk dicek. Berderma yang seharusnya tulus berubah jadi formalitas. Kepercayaan tidak runtuh sekaligus. Ia menipis, pelan, sampai orang berhenti memberi karena yakin.",
    problemQuote: "Kepercayaan yang sudah luntur tidak bisa diperbaiki dengan ucapan manis.",
    problemQuoteBody:
      "Harus ada cara kerja yang meruntuhkan tembok ketidaktahuan itu: catatan yang bisa dilihat, jejak yang bisa diikuti, dan laporan yang datang.",
    contrastEyebrow: "Bedanya",
    contrastTitle: "Bukan janji baru. Cara kerja yang berbeda.",
    contrastIntro:
      "OpenBook Charity didirikan sebagai jawaban atas kerinduan akan tempat berderma yang sungguh bisa dicek. Bukan laporan tahunan. Bukan janji di atas panggung. Platform yang membuka setiap rupiah yang dikelola.",
    without: "Tanpa platform ini",
    with: "Dengan OpenBook Charity",
    contrast: [
      {
        old: "Donasi masuk ke dana umum yang kabur. Tidak ada yang tahu pos mana yang terisi.",
        now: "Setiap penggalangan adalah kegiatan nyata dengan biaya yang jelas sampai rupiah terakhir.",
      },
      {
        old: "Laporan datang setahun sekali, kalau datang. PDF panjang yang jarang dibuka.",
        now: "Dampak dilaporkan lewat video dan catatan yang sama, biasanya dalam 6 hari.",
      },
      {
        old: "Yang memberi bungkam. Tidak ada wadah untuk bertanya, tidak ada jejak untuk dicek.",
        now: "Donatur melihat, mengikuti, dan memastikan dana sampai. Pertanyaan punya jawaban.",
      },
      {
        old: "Kepercayaan diminta dengan ucapan manis di atas panggung.",
        now: "Kepercayaan dibuktikan: skor laporan, aliran dana, dan bukti dari lapangan terlihat bersama.",
      },
    ],
    benefitsEyebrow: "Yang Anda dapat",
    benefitsTitle: "Empat alasan memakai jasa dan platform ini.",
    benefitsIntro:
      "Kami tidak menjual slogan keterbukaan. Kami menyediakan tempat kerja: menggalang per program, merekam dampak, dan membiarkan siapa pun yang memberi mengikuti uang dari pemberian sampai hasil.",
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
    galleryEyebrow: "Bukti di lapangan",
    galleryTitle: "Setelah alasannya, yang dibutuhkan adalah yang terlihat.",
    gallerySlides: [
      { caption: "Slide 1", hint: "Laporan video dari lapangan." },
      { caption: "Slide 2", hint: "Serah terima yang tercatat." },
      { caption: "Slide 3", hint: "Kegiatan yang bisa diikuti." },
      { caption: "Slide 4", hint: "Skor laporan di platform." },
    ],
    audienceEyebrow: "Untuk siapa",
    audienceTitle: "Dipakai yang memberi, dan yang menggalang.",
    audienceIntro:
      "Platform ini berdiri di tengah. Donatur mendapat kepastian. Lembaga mendapat wadah yang dulu tidak ada: tempat bersuara, lapor cepat, dan menunjukkan kerja lapangan tanpa harus menunggu setahun.",
    donorCaption: "Foto donatur",
    donorHint: "Orang yang memberi, lalu melihat sendiri dananya sampai.",
    donorEyebrow: "Untuk donatur",
    donorTitle: "Lihat. Ikuti. Pastikan.",
    donorBody:
      "Setiap rupiah dari tangan yang tulus berhak bermuara pada penerima yang tepat. Di OpenBook Charity Anda tidak menebak. Program punya jejak, dari tangan yang memberi sampai orang yang menerima. Video dampak datang, bukan ditunggu berbulan lamanya.",
    orgCaption: "Foto mitra",
    orgHint: "Tim lapangan atau pengurus yang membuka catatannya.",
    orgEyebrow: "Untuk lembaga",
    orgTitle: "Rekam jejak yang menumbuhkan.",
    orgBody:
      "Mitra tumbuh ketika kerjanya terlihat. Siapkan program dengan biaya yang jelas, terima donasi, catat penyaluran, unggah bukti. Dewan dan donatur melihat sendiri ke mana dananya pergi. Itulah alasan 22.000 lebih program sudah dibantu lewat cara kerja ini.",
    storiesTitle: "Yang sudah memakai cara ini",
    storiesDescription:
      "Donatur dan mitra di Indonesia yang melihat sendiri bahwa catatannya memang bisa dicek.",
    ctaTitle: "Bawa kegiatan Anda ke buku yang terbuka.",
    ctaBody:
      "Kalau lembaga Anda siap membuka catatannya, kami siap menampungnya. Gabung dengan yang sudah lapor dampak dalam hitungan hari, bukan berbulan lamanya. Agar yang memberi tidak perlu bungkam lagi.",
    readStory: "Baca cerita kami",
  },
  platform: {
    eyebrow: "Platform",
    title: "Satu tempat menggalang, mencatat, dan membuktikan.",
    description:
      "Buat program, terima donasi, catat penyaluran, unggah bukti. Donatur melihat dananya sampai.",
    heroCaption: "Layar program",
    heroHint: "Tampilan daftar program, dana, dan laporan. Isi nanti dengan screenshot.",
    flowEyebrow: "Alur kerja",
    flowTitle: "Dari program dibuat sampai donatur melihat.",
    flowIntro: "Lima langkah yang sama untuk setiap kegiatan. Tidak ada dana yang masuk lalu sunyi.",
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
    sidesEyebrow: "Dua sisi",
    sidesTitle: "Yang memberi melihat. Yang menggalang mencatat.",
    sidesIntro: "Satu catatan yang sama. Donatur dan lembaga tidak memakai angka yang berbeda.",
    donorCaption: "Layar donatur",
    donorHint: "Daftar pemberian, laporan, dan sisa dana.",
    donorEyebrow: "Untuk donatur",
    donorTitle: "Lihat dana sampai.",
    donorBody:
      "Buka program yang dibantu. Lihat rincian biaya, penyaluran, video dari lapangan, dan sisa dana. Tidak perlu menunggu laporan tahunan.",
    orgCaption: "Layar lembaga",
    orgHint: "Kelola program, unggah bukti, pantau skor.",
    orgEyebrow: "Untuk lembaga",
    orgTitle: "Catat, lapor, buktikan.",
    orgBody:
      "Buat program, terima donasi, catat pengeluaran, unggah bukti. Skor laporan terlihat, jadi rekam jejak tidak tersembunyi.",
    modulesEyebrow: "Modul",
    modulesTitle: "Yang ada di dalam sistem.",
    modulesIntro: "Bukan slogan keterbukaan. Ini fungsi yang dipakai setiap hari.",
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
    screensEyebrow: "Tampilan",
    screensTitle: "Layar yang nanti dipakai donatur dan lembaga.",
    screens: [
      { caption: "Layar 1", hint: "Daftar program dan dana terkumpul." },
      { caption: "Layar 2", hint: "Rincian biaya dan sisa dana." },
      { caption: "Layar 3", hint: "Laporan video dari lapangan." },
      { caption: "Layar 4", hint: "Skor laporan mitra." },
    ],
    ctaTitle: "Siap memakai cara kerja ini?",
    ctaBody:
      "Lembaga membuka program di sini. Donatur memilih kegiatan yang sedang berjalan di beranda.",
  },
  partner: {
    eyebrow: "Galang dana",
    title: "Mulai program terbuka pertama Anda",
    description:
      "Ceritakan tentang lembaga Anda, dan kami akan membantu menerbitkan kegiatan berbiaya jelas yang pertama.",
  },
  notFound: {
    title: "Halaman tidak ditemukan",
    body: "Halaman yang Anda cari tidak ada atau sudah dipindahkan.",
    home: "Ke beranda",
    errorTitle: "Halaman ini gagal dimuat",
    errorBody: "Ada gangguan di sisi kami. Silakan coba muat ulang atau kembali ke beranda.",
    retry: "Coba lagi",
  },
};

const en: typeof id = {
  nav: {
    home: "Home",
    about: "About Us",
    why: "Why Us",
    platform: "Platform",
    raiseFunds: "Raise funds",
    openMenu: "Open menu",
    language: "Language",
  },
  footer: {
    blurb:
      "Every gift is tied to a real program, and every program reports back with video proof.",
    platform: "Platform",
    overview: "Overview",
    org: "Organisation",
    copyright: "All rights reserved.",
  },
  logo: {
    tagline: "See the difference you make",
  },
  common: {
    raiseFunds: "Raise funds",
    seePlatform: "See platform",
    seePrograms: "See programs",
    photoSoon: "Photo coming soon",
    screen: "Screen",
  },
  home: {
    badge: "38 countries · 22,000+ programs helped",
    heroLines: ["See your donation", "reach the people who need it."],
    heroEmphasis: "The records are open.",
    heroDescription:
      "OpenBook Charity is a place to give with records you can open. Choose a program, give, then see the funds arrive.",
    reviewsSuffix: "five-star reviews",
    reviewsFrom: "from",
    stats: [
      { value: "22,000+", label: "Programs helped" },
      { value: "38", label: "Countries reached" },
      { value: "94%", label: "Funds to the field" },
      { value: "6 days", label: "Time to report" },
    ],
    featuresEyebrow: "How it works",
    featuresTitle: "Donations you can follow to the recipient",
    featuresDescription: "Raise per program, report with video, and keep the books open.",
    features: [
      {
        title: "Giving per program",
        body: "Every donation is tied to a real activity. Not a murky general fund.",
      },
      {
        title: "Impact reports on video",
        body: "Field teams send proof from a phone. Donors see it directly.",
      },
      {
        title: "Open books",
        body: "Costs, disbursements, and remaining funds are visible to givers and fundraisers.",
      },
      {
        title: "Report score",
        body: "See how promptly partners report on work that has already been funded.",
      },
    ],
    galleryEyebrow: "From the field",
    galleryTitle: "Photos from programs on the ground.",
    gallerySlides: [
      { caption: "Slide 1", hint: "A video report from Magelang." },
      { caption: "Slide 2", hint: "A recorded handover in Yogyakarta." },
      { caption: "Slide 3", hint: "Clean water in Kupang." },
      { caption: "Slide 4", hint: "Fund records you can check." },
    ],
    projectsEyebrow: "In progress",
    projectsTitle: "Programs being funded now",
    projectsDescription:
      "Choose a program below. See funds come in, then make sure they reach the people who need them.",
    photoProgram: "Program photo",
    reportScore: "Report score",
    raised: "raised",
    storiesTitle: "People who gave, then saw for themselves",
    storiesDescription: "Donors and partners who checked the records.",
    storiesEyebrow: "Stories",
    transferEyebrow: "Handover",
    transferTitle: "Hand a finished program to a local partner",
    transferDescription: "The fund records stay visible to donors.",
    transferNote: "Every handover is recorded and visible to donors.",
    transferEmail: "Local partner email",
    transferSubmit: "Start handover",
    transferPending: "Sending…",
    transferDone: "Request sent, awaiting review.",
    ctaTitle: "Open your organisation's books here",
    ctaBody: "If you are ready to be transparent, join as a partner. Donors can see funds arrive.",
    phone: {
      reportScore: "Report score",
      followUp: "Active · 12 follow-up items",
      playVideo: "Play impact video",
      programTitle: "Help Grandma Sari start a corn business",
      programCaption: "Sari is cared for with her grandchild in Magelang.",
      dimas: "New hope for Dimas",
      collected: "raised",
      impactTitle: "Impact report received",
      impactBody: "Donors can see what changed.",
      imageAlt: "Grandma Sari holding her grandchild in front of their home in Magelang",
    },
    projects: [
      { id: "dimas-harapan", title: "New hope for Dimas" },
      { id: "nenek-sari-jagung", title: "Help Grandma Sari start a corn business" },
      { id: "sd-air-bersih", title: "Clean water for SD Oebelo" },
    ],
  },
  stories: [
    {
      quote:
        "I saw the video the same week my donation arrived. That had never happened at another organisation.",
      role: "Monthly donor, Jakarta",
    },
    {
      quote:
        "Our small field team can report impact in minutes, not a long report nobody reads.",
      role: "Program lead, Makassar",
    },
    {
      quote:
        "Openness is no longer a promise. Our board can see for themselves where the funds go.",
      role: "Foundation partner, Bandung",
    },
  ],
  about: {
    heroEyebrow: "About us",
    heroTitle: "Good intentions should not walk in the dark.",
    heroP1:
      "We believe every rupiah given in good faith deserves to reach the right recipient, openly and honestly.",
    heroP2:
      "OpenBook Charity was not born from theory. It was born from what was seen, felt, and could no longer be hidden.",
    heroPhoto: "Photo coming soon",
    heroPhotoHint: "Place a photo here: founder, community, or a moment of giving.",
    heroAlt: "OpenBook Charity founder with the community",
    conflictEyebrow: "The root of the story",
    conflictTitle: "He saw money collected. What never appeared was where it went.",
    conflictP1:
      "The founder of OBC was active in a faith community. There he watched donations flow every week, from hundreds of millions to billions of rupiah. The givers' intent was never in doubt. One simple question always hung in the air: where exactly does this money go?",
    conflictP2:
      "Honest reports rarely came. What remained was silence, and a nagging feeling after giving. Charity that should have brought peace left a question that could not be spoken.",
    conflictQuote:
      "All I saw was money coming in. What I did not see: whether it truly arrived.",
    conflictQuoteBody:
      "It was not about how much was collected. What troubled him was the empty space after a gift was handed over: no record, no recipient's name, no one to point to if asked. From that empty space, trust did not collapse at once. It thinned, slowly, with no one brave enough to point.",
    silenceEyebrow: "Silence",
    silenceQuote: "Some in the congregation felt something was off. They stayed silent.",
    silenceP1:
      "They knew something was wrong. But there was no place to ask, and no courage to speak. Giving that should have brought peace felt like an obligation, a formality, not sincerity.",
    silenceP2:
      "A culture of giving built on compulsion will never grow trust. It only grows silence.",
    turningEyebrow: "Turning point",
    turningTitle: "Silence does not repair trust that has already faded.",
    turningIntro:
      "We realised looking away was not a choice. If good intentions keep moving without a trail, only doubt remains. There had to be action that would bring down that wall of not knowing.",
    turningSteps: [
      {
        n: "01",
        title: "See what is hidden",
        body: "Trust cannot grow in the dark. What is not recorded cannot be accounted for. What cannot be checked, in the end, is not trusted.",
      },
      {
        n: "02",
        title: "Dare to ask",
        body: "Donors have a right to know where their money goes. Recipients have a right to be confirmed. Silence is not loyalty. Silence only delays honesty.",
      },
      {
        n: "03",
        title: "Open the records",
        body: "Trust that has faded cannot be repaired with sweet words. The only path left is to make the flow of funds visible, real, not a promise.",
      },
    ],
    birthEyebrow: "Our answer",
    birthTitle: "From that unrest, OpenBook Charity was born.",
    birthP1:
      "OpenBook Charity exists as an answer to the longing for a place to give that can actually be checked. Not an unread annual report. Not a promise on a stage. Records you can see at any time.",
    birthP2:
      "Here donors can see, follow, and make sure funds arrive. Every program has a trail, from the giver's hand to the person who receives. Every rupiah has a place. Every question has an answer.",
    direction: "Our direction",
    vision: "Vision",
    visionTitle:
      "So that giving is sincere again: every gift is visible, every distribution can be trusted.",
    visionBody:
      "We want people to give because they are sure, not because they feel forced, not out of formality. That certainty only grows when the records are open.",
    mission: "Mission",
    missions: [
      {
        title: "Open the flow of funds",
        body: "Every program has records down to the last rupiah. No murky funds, no line items only the committee understands.",
      },
      {
        title: "Open space to ask",
        body: "Those who give have a right to ask. Those who receive have a right to be confirmed. OBC is the place that used to be missing: a place to speak without staying silent.",
      },
      {
        title: "Support partners in the field",
        body: "Reports come quickly, honestly, and visibly. Not after months of waiting. Not a PDF nobody opens.",
      },
    ],
    promisesEyebrow: "Our promise",
    promisesTitle: "An open book, not a slogan.",
    promisesIntro:
      "If trust has already broken, what is needed is not new words. What is needed is proof that can be seen again and again.",
    promises: [
      {
        n: "01",
        title: "Clear costs",
        body: "Every activity has details you can see. Not a murky general fund. Not a line that exists only on internal paper.",
      },
      {
        n: "02",
        title: "A trail you can follow",
        body: "From giving to distribution, the flow is recorded. Donors do not have to guess. Partners do not have to hide behind a summary.",
      },
      {
        n: "03",
        title: "Reports that arrive",
        body: "Impact is reported, not waited for over months. Video, numbers, and the same records, checkable by anyone who gave.",
      },
    ],
    storiesTitle: "Those who already dared to look",
    storiesDescription:
      "They gave, or worked in the field, then saw for themselves that the records can be checked.",
    ctaTitle: "Trust has to be checkable.",
    ctaBody:
      "If your organisation is ready to open its records, we are ready to hold them. Bring your programs to OpenBook Charity, so those who give no longer have to stay silent.",
  },
  why: {
    eyebrow: "Why Us",
    title: "Because donors will no longer just be asked to trust.",
    p1: "Organisations that raise funds in the dark lose sincere givers. What remains is giving out of obligation. OpenBook Charity is a platform so every gift is visible, and every distribution can be confirmed.",
    p2: "Here donors see, follow, and make sure funds arrive. Partners have a track record that can be checked, not an annual report nobody opens.",
    stats: [
      { value: "22,000+", label: "Programs helped" },
      { value: "38", label: "Countries reached" },
      { value: "94%", label: "Funds to the field" },
      { value: "6 days", label: "Time to report" },
    ],
    problemEyebrow: "The problem",
    problemTitle: "The old way lets good intentions walk in the dark.",
    problemP1:
      "Many organisations still raise funds as they used to: money in, reports delayed, the trail gone. Donations can be huge, even billions, but allocation is not open. Givers do not know where the money actually goes.",
    problemP2:
      "Some people feel something is off, then stay silent. There is no place to ask, no record to check. Giving that should be sincere becomes a formality. Trust does not collapse at once. It thins, slowly, until people stop giving because they are sure.",
    problemQuote: "Trust that has faded cannot be repaired with sweet words.",
    problemQuoteBody:
      "There has to be a way of working that brings down that wall of not knowing: records you can see, a trail you can follow, and reports that arrive.",
    contrastEyebrow: "The difference",
    contrastTitle: "Not a new promise. A different way of working.",
    contrastIntro:
      "OpenBook Charity was founded as an answer to the longing for a place to give that can actually be checked. Not an annual report. Not a promise on a stage. A platform that opens every rupiah under its care.",
    without: "Without this platform",
    with: "With OpenBook Charity",
    contrast: [
      {
        old: "Donations enter a murky general fund. Nobody knows which line is filled.",
        now: "Every raise is a real activity with clear costs down to the last rupiah.",
      },
      {
        old: "Reports come once a year, if they come. A long PDF rarely opened.",
        now: "Impact is reported on video and in the same records, usually within 6 days.",
      },
      {
        old: "Givers stay silent. There is no place to ask, no trail to check.",
        now: "Donors see, follow, and make sure funds arrive. Questions have answers.",
      },
      {
        old: "Trust is requested with sweet words on a stage.",
        now: "Trust is proven: report scores, fund flows, and field proof are visible together.",
      },
    ],
    benefitsEyebrow: "What you get",
    benefitsTitle: "Four reasons to use this service and platform.",
    benefitsIntro:
      "We do not sell a slogan of openness. We provide a place of work: raise per program, record impact, and let anyone who gives follow the money from gift to result.",
    benefits: [
      {
        n: "01",
        title: "Giving per program",
        body: "You no longer raise into an unclear pot. Every activity has details, a purpose, and a recipient. Donors know what they are helping, not only the organisation's name.",
      },
      {
        n: "02",
        title: "Impact reports on video",
        body: "Field teams record proof on a phone. Donors see what changed in their feed, the same week funds arrive. Not after months of waiting.",
      },
      {
        n: "03",
        title: "An open book",
        body: "Costs, disbursements, and remaining funds are visible to everyone involved. Ninety-four percent of funds go to the field, not sitting in a line only the committee understands.",
      },
      {
        n: "04",
        title: "A living report score",
        body: "The score shows how promptly partners report on work already funded. The track record cannot hide behind a summary.",
      },
    ],
    galleryEyebrow: "Proof in the field",
    galleryTitle: "After the reasons, what is needed is what can be seen.",
    gallerySlides: [
      { caption: "Slide 1", hint: "A video report from the field." },
      { caption: "Slide 2", hint: "A recorded handover." },
      { caption: "Slide 3", hint: "A program donors can follow." },
      { caption: "Slide 4", hint: "The report score on the platform." },
    ],
    audienceEyebrow: "Who it is for",
    audienceTitle: "Used by those who give, and those who raise.",
    audienceIntro:
      "The platform stands in the middle. Donors get certainty. Organisations get the space that used to be missing: a place to speak, report quickly, and show field work without waiting a year.",
    donorCaption: "Donor photo",
    donorHint: "Someone who gave, then saw the funds arrive.",
    donorEyebrow: "For donors",
    donorTitle: "See. Follow. Confirm.",
    donorBody:
      "Every rupiah from a sincere hand deserves to reach the right recipient. At OpenBook Charity you do not guess. Programs have a trail, from the giver to the person who receives. Impact videos arrive, not after months of waiting.",
    orgCaption: "Partner photo",
    orgHint: "A field team or board that opens its records.",
    orgEyebrow: "For organisations",
    orgTitle: "A track record that helps you grow.",
    orgBody:
      "Partners grow when their work is visible. Set up a program with clear costs, receive donations, record disbursements, upload proof. Boards and donors see for themselves where funds go. That is why more than 22,000 programs have already been helped this way.",
    storiesTitle: "Those already working this way",
    storiesDescription:
      "Donors and partners in Indonesia who saw for themselves that the records can be checked.",
    ctaTitle: "Bring your programs to an open book.",
    ctaBody:
      "If your organisation is ready to open its records, we are ready to hold them. Join those who already report impact in days, not months. So those who give no longer have to stay silent.",
    readStory: "Read our story",
  },
  platform: {
    eyebrow: "Platform",
    title: "One place to raise, record, and prove.",
    description:
      "Create a program, receive donations, record disbursements, upload proof. Donors see the funds arrive.",
    heroCaption: "Program screen",
    heroHint: "A view of programs, funds, and reports. Replace later with a screenshot.",
    flowEyebrow: "How it works",
    flowTitle: "From a program being created to a donor seeing it.",
    flowIntro: "The same five steps for every activity. No funds that come in, then go quiet.",
    steps: [
      {
        n: "01",
        title: "Create a program",
        body: "Write the purpose, costs, and recipient from the start. Donors know what they are helping.",
      },
      {
        n: "02",
        title: "Receive donations",
        body: "Every gift goes into that program, not a murky general pot.",
      },
      {
        n: "03",
        title: "Record disbursements",
        body: "Money out is recorded. The trail can be followed into the field.",
      },
      {
        n: "04",
        title: "Upload proof",
        body: "Field teams send video and reports from a phone, usually within 6 days.",
      },
      {
        n: "05",
        title: "Donors check",
        body: "Records, remaining funds, and impact are visible. No guessing.",
      },
    ],
    sidesEyebrow: "Two sides",
    sidesTitle: "Those who give see. Those who raise record.",
    sidesIntro: "One shared ledger. Donors and organisations do not use different numbers.",
    donorCaption: "Donor screen",
    donorHint: "Gifts given, reports, and remaining funds.",
    donorEyebrow: "For donors",
    donorTitle: "See funds arrive.",
    donorBody:
      "Open the program you supported. See cost details, disbursements, field video, and remaining funds. No waiting for an annual report.",
    orgCaption: "Organisation screen",
    orgHint: "Manage programs, upload proof, watch the score.",
    orgEyebrow: "For organisations",
    orgTitle: "Record, report, prove.",
    orgBody:
      "Create a program, receive donations, record spending, upload proof. The report score is visible, so the track record is not hidden.",
    modulesEyebrow: "Modules",
    modulesTitle: "What is inside the system.",
    modulesIntro: "Not a slogan of openness. These are functions used every day.",
    modules: [
      {
        title: "Costs per program",
        body: "Written details per activity. Not a line only the committee understands.",
      },
      {
        title: "Fund trail",
        body: "From giving to distribution, the flow is recorded and can be opened.",
      },
      {
        title: "Video reports",
        body: "Proof from the field reaches the donor feed, not an annual PDF.",
      },
      {
        title: "Report score",
        body: "See how promptly partners report on work that has already been funded.",
      },
      {
        title: "Handover",
        body: "A finished program can be handed to a local partner. The records stay.",
      },
    ],
    screensEyebrow: "Screens",
    screensTitle: "Screens donors and organisations will use.",
    screens: [
      { caption: "Screen 1", hint: "Program list and funds raised." },
      { caption: "Screen 2", hint: "Cost details and remaining funds." },
      { caption: "Screen 3", hint: "A video report from the field." },
      { caption: "Screen 4", hint: "Partner report score." },
    ],
    ctaTitle: "Ready to work this way?",
    ctaBody:
      "Organisations open programs here. Donors choose a program that is already running on the home page.",
  },
  partner: {
    eyebrow: "Raise funds",
    title: "Start your first open program",
    description:
      "Tell us about your organisation, and we will help publish your first activity with clear costs.",
  },
  notFound: {
    title: "Page not found",
    body: "The page you are looking for does not exist or has been moved.",
    home: "Go home",
    errorTitle: "This page failed to load",
    errorBody: "Something went wrong on our side. Please reload or go back home.",
    retry: "Try again",
  },
};

export const messages = { id, en };
export type Messages = typeof id;
