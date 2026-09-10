export type Lang = "id" | "en";

const id = {
  nav: {
    home: "Home",
    about: "Tentang Kami",
    why: "Why Us",
    platform: "Program",
    community: "Komunitas",
    faq: "Tanya Jawab",
    raiseFunds: "Galang Dana",
    donateNow: "Mulai Berdonasi",
    openMenu: "Buka menu",
    language: "Bahasa",
  },
  topBar: {
    service: "Layanan donatur",
    callCenter: "Call Center",
    rekening: "Rekening donasi",
    confirm: "Konfirmasi donasi",
  },
  footer: {
    blurb:
      "Donasimu disalurkan untuk aksi nyata dengan transparansi laporan dan bukti video.",
    platform: "Program",
    overview: "Ringkasan",
    org: "Informasi",
    copyright: "Hak cipta dilindungi.",
    socialTitle: "Ikuti kami di media sosial:",
    downloadTitle: "Download Aplikasi Kami",
    googlePlay: "Dapatkan di Google Play",
    appStore: "Dapatkan di App Store",
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      youtube: "YouTube",
      tiktok: "TikTok",
    },
  },
  logo: {
    tagline: "Transparan menyalurkan kebaikan.",
  },
  common: {
    raiseFunds: "Galang Dana",
    donateNow: "Mulai Berdonasi",
    seePlatform: "Lihat program",
    seePrograms: "Lihat kegiatan",
    photoSoon: "Gambar sementara",
    screen: "Layar",
    whatsapp: "Chat di WhatsApp",
  },
  home: {
    badge: "12+ kota · 22.000+ program terbantu",
    heroLines: ["Pastikan donasimu", "tepat sasaran."],
    heroEmphasis: "Semua tercatat transparan.",
    heroDescription:
      "Salurkan donasimu ke program terpilih dan pantau penyalurannya secara nyata, dari awal hingga diterima.",
    reviewsSuffix: "donatur",
    reviewsFrom: "dari",
    reviewsScoreMax: "/5.0",
    stats: [
      { value: "22.000+", label: "Program terbantu" },
      { value: "12+", label: "Kota di Indonesia" },
      { value: "94%", label: "Dana ke lapangan" },
      { value: "6 hari", label: "Waktu laporan" },
    ],
    featuresEyebrow: "Cara kerja",
    featuresTitle: "Pantau alur donasimu hingga tepat di tangan penerima",
    featuresDescription:
      "Pilih program spesifik, terima bukti video dari lapangan, dan cek laporan keuangan secara terbuka.",
    features: [
      {
        title: "Program Terarah & Spesifik",
        body: "Setiap rupiah dialokasikan khusus untuk kegiatan spesifik, bukan masuk ke kas umum tanpa kejelasan.",
      },
      {
        title: "Bukti Lapangan Real-Time",
        body: "Tim di lapangan mengunggah dokumentasi video langsung agar kamu bisa melihat dampak donasimu secara nyata.",
      },
      {
        title: "Laporan Keuangan Transparan",
        body: "Rincian alokasi biaya, jumlah penyaluran, hingga sisa dana dapat diakses secara terbuka oleh publik.",
      },
      {
        title: "Indikator Akuntabilitas",
        body: "Pantau tingkat kedisiplinan dan transparansi mitra pengelola dalam memperbarui laporan berkala.",
      },
    ],
    programsTitle: "Program kami",
    programsDescription:
      "Pilih kategori program yang ingin kamu dukung dan pantau langsung penyalurannya.",
    programs: [
      {
        id: "kesehatan",
        title: "Kesehatan",
        hint: "Bantuan pengobatan & fasilitas kesehatan warga.",
      },
      {
        id: "usaha",
        title: "Pemberdayaan Usaha",
        hint: "Modal kerja & pendampingan untuk UMKM mandiri.",
      },
      {
        id: "pendidikan",
        title: "Pendidikan",
        hint: "Beasiswa & pemenuhan fasilitas belajar anak.",
      },
      {
        id: "lapangan",
        title: "Tanggap Bencana & Aksi Sosial",
        hint: "Penyaluran logistik & bantuan darurat di area terdampak.",
      },
      {
        id: "penerima",
        title: "Bantuan Sosial & Keluarga",
        hint: "Dukungan langsung untuk pemenuhan kebutuhan hidup keluarga prasejahtera.",
      },
      {
        id: "terbuka",
        title: "Infrastruktur & Komunitas",
        hint: "Pembangunan fasilitas umum dan program pemberdayaan masyarakat.",
      },
    ],
    galleryEyebrow: "Dari lapangan",
    galleryTitle: "Jejak Kebaikan yang Sudah Tersalurkan",
    gallerySlides: [
      { caption: "Slide 1", hint: "Laporan video dari Magelang." },
      { caption: "Slide 2", hint: "Serah terima di Yogyakarta." },
      { caption: "Slide 3", hint: "Air bersih di Kupang." },
      { caption: "Slide 4", hint: "Catatan dana yang bisa dicek." },
    ],
    projectsEyebrow: "Sedang berjalan",
    projectsTitle: "Program yang Membutuhkan Bantuanmu",
    projectsDescription:
      "Pilih program, pantau progres penggalangan dana, dan cek penyalurannya secara langsung.",
    photoProgram: "Foto program",
    reportScore: "Skor laporan",
    raised: "terkumpul",
    storiesTitle: "Cerita Nyata dari Donatur dan Mitra",
    storiesDescription:
      "Bukti transparansi yang dirasakan langsung oleh donatur dan mitra kami.",
    storiesEyebrow: "Testimoni",
    transferEyebrow: "Area mitra",
    transferTitle: "Portal Laporan Penyaluran Mitra",
    transferDescription:
      "Khusus mitra pengelola untuk mengunggah bukti kegiatan dan menyelesaikan laporan program secara transparan.",
    transferNote: "",
    transferEmail: "Email Akun Mitra",
    transferSubmit: "Masuk ke Portal Mitra",
    transferPending: "Mengirim…",
    transferDone: "Permintaan sudah dikirim, menunggu tinjauan.",
    ctaTitle: "Galang Dana secara transparan dan berikan kepastian bagi para donatur.",
    ctaBody:
      "Buat kampanye sosialmu di OpenBook Charity dan izinkan donatur memantau penyalurannya secara langsung.",
    ctaButton: "Mulai Galang Dana",
    phone: {
      reportScore: "Skor laporan",
      followUp: "Aktif · 12 item tindak lanjut",
      playVideo: "Putar video dampak",
      programTitle: "Bantu Nenek Sari Memulai Usaha Jagung",
      programCaption: "Sari diasuh bersama cucunya di Magelang.",
      dimas: "Harapan Baru untuk Dimas",
      collected: "terkumpul",
      impactTitle: "Laporan dampak diterima",
      impactBody: "Donatur bisa melihat apa yang berubah.",
      imageAlt: "Nenek Sari menggendong cucunya di depan rumah di Magelang",
    },
    projects: [
      { id: "dimas-harapan", title: "Harapan Baru untuk Dimas" },
      { id: "nenek-sari-jagung", title: "Bantu Nenek Sari Memulai Usaha Jagung" },
      { id: "sd-air-bersih", title: "Fasilitas Air Bersih untuk Siswa SD Oebelo" },
    ],
  },
  stories: [
    {
      quote:
        "Di minggu yang sama saat donasi tersalurkan, saya langsung menerima bukti videonya. Praktis dan transparan!",
      role: "Donatur bulanan, Jakarta",
    },
    {
      quote:
        "Meski tim kami kecil, pembaruan bukti kegiatan dari lapangan tetap bisa diunggah tanpa perlu menunggu berbulan-bulan.",
      role: "Ketua program, Makassar",
    },
    {
      quote:
        "Keterbukaan bukan sekadar janji. Jajaran pengurus kami bisa memantau langsung alokasi penggunaan dana.",
      role: "Mitra yayasan, Bandung",
    },
  ],
  about: {
    heroEyebrow: "Tentang kami",
    heroTitle: "Niat baik tidak seharusnya berjalan di dalam kegelapan.",
    heroP1:
      "Kami percaya setiap rupiah yang keluar dari tangan yang tulus berhak bermuara pada penerima yang tepat, secara terbuka dan jujur.",
    heroP2:
      "OpenBook Charity lahir dari kerinduan akan sistem donasi yang jujur, terbuka, dan dapat dipertanggungjawabkan kepada publik.",
    heroPhoto: "Gambar sementara",
    heroPhotoHint: "Taruh foto di sini: potret pendiri, komunitas, atau momen memberi.",
    heroAlt: "Pendiri OpenBook Charity bersama komunitas",
    conflictEyebrow: "Akar cerita",
    conflictTitle:
      "Donasi Terus Mengalir, Namun Kejelasan Alokasinya Masih Menjadi Pertanyaan.",
    conflictP1:
      "Pendiri OpenBook Charity adalah seorang penggiat komunitas keagamaan. Beliau menyaksikan donasi mengalir setiap pekan dalam jumlah yang tidak sedikit. Niat baik para donatur sangat tulus, namun satu pertanyaan mendasar selalu muncul: ke mana tepatnya dana tersebut disalurkan?",
    conflictP2:
      "Tanpa sistem pelaporan yang terbuka, para donatur sering kali hanya bisa menebak-nebak. Keinginan untuk memberi yang seharusnya membawa ketenangan, justru menyisakan keraguan akan transparansi penyalurannya.",
    conflictQuote:
      "Saya melihat begitu banyak kepedulian yang masuk, namun sangat minim kejelasan apakah bantuan tersebut sungguh sampai ke tangan yang berhak.",
    conflictQuoteBody:
      "Bukan sekadar soal berapa besar dana yang terkumpul, melainkan kepastian setelah bantuan diserahkan. Tanpa catatan yang jelas dan bukti nyata penerima, kepercayaan donatur perlahan memudar. Dari kerinduan akan keterbukaan itulah OpenBook Charity hadir.",
    conflictPhotoAlt: "Interior gereja dengan merpati putih.",
    silenceEyebrow: "Keheningan",
    silenceQuote: "Keraguan yang Tak Kunjung Terjawab.",
    silenceP1:
      "Banyak donatur ingin mengetahui dampak dari bantuan yang mereka berikan, namun tidak menemukan wadah atau akses informasi yang jelas. Berdonasi yang seharusnya menghadirkan ketenangan, justru sering kali menyisakan keraguan.",
    silenceP2:
      "Kepercayaan tidak dapat tumbuh dalam ketidakpastian. Tanpa adanya transparansi secara nyata, semangat masyarakat untuk saling berbagi akan perlahan surut.",
    turningEyebrow: "Titik balik",
    turningTitle: "Mengembalikan Kepercayaan Lewat Transparansi Nyata",
    turningIntro:
      "Kami percaya bahwa keterbukaan adalah satu-satunya cara untuk merawat niat baik dan memastikan setiap bantuan berdampak nyata.",
    turningSteps: [
      {
        n: "01",
        title: "Transparansi Sejak Awal",
        body: "Setiap rupiah yang masuk dan keluar tercatat otomatis agar dapat dipertanggungjawabkan secara terbuka.",
      },
      {
        n: "02",
        title: "Kemudahan Akses Informasi",
        body: "Donatur dapat memantau alokasi dana kapan saja, tanpa ada proses yang ditutup-tutupi.",
      },
      {
        n: "03",
        title: "Bukti Dampak Nyata",
        body: "Menghadirkan dokumentasi langsung dari lapangan untuk memastikan bantuan tepat sasaran.",
      },
    ],
    birthEyebrow: "Jawaban kami",
    birthTitle: "Dari Keresahan Itu, Lahir OpenBook Charity.",
    birthP1:
      "OpenBook Charity hadir sebagai jawaban atas kerinduan akan wadah berdonasi yang benar-benar terbuka. Bukan sekadar laporan formalitas, melainkan catatan transparan yang bisa diakses kapan saja.",
    birthP2:
      "Di sini, donatur dapat melihat, memantau, dan memastikan bantuan sampai ke tujuan. Setiap program memiliki jejak yang jelas, dari tangan yang memberi hingga ke penerima manfaat. Setiap rupiah memiliki peruntukan, dan setiap pertanyaan selalu memiliki jawaban.",
    direction: "Arah kami",
    vision: "Visi",
    visionTitle:
      "Mewujudkan Budaya Berdonasi yang Tulus melalui Transparansi dan Kepercayaan.",
    visionBody:
      "Kami ingin setiap orang berbagi dengan keyakinan penuh. Keyakinan tersebut tumbuh dari pelaporan yang terbuka, jujur, dan dapat dipertanggungjawabkan.",
    mission: "Misi",
    missions: [
      {
        title: "Menjamin Transparansi Dana",
        body: "Menghadirkan rincian alokasi dana secara jelas hingga rupiah terakhir, sehingga seluruh penyaluran dapat dipantau secara terbuka.",
      },
      {
        title: "Membuka Akses Komunikasi",
        body: "Memberikan ruang bagi donatur untuk memantau dan memastikan bantuan sampai ke penerima manfaat dengan jelas dan tepat.",
      },
      {
        title: "Menyajikan Laporan Real-Time",
        body: "Menyediakan pembaruan laporan dari lapangan secara cepat dan transparan, tanpa penundaan yang memakan waktu lama.",
      },
    ],
    promisesEyebrow: "Janji kami",
    promisesTitle: "Komitmen Transparansi, Bukan Sekadar Slogan.",
    promisesIntro:
      "Kepercayaan tidak dibangun dari janji manis, melainkan dari bukti nyata yang dapat dipantau secara berkala.",
    promises: [
      {
        n: "01",
        title: "Rincian Biaya yang Transparan",
        body: "Setiap program dilengkapi rincian alokasi dana secara terbuka, tanpa ada biaya yang disembunyikan.",
      },
      {
        n: "02",
        title: "Alur Penyaluran yang Terlacak",
        body: "Setiap tahapan donasi tercatat secara runtut dari penerimaan hingga penyaluran, memberikan kepastian penuh bagi donatur dan mitra.",
      },
      {
        n: "03",
        title: "Laporan Berkala dan Terbuka",
        body: "Pembaruan dampak disampaikan secara berkala melalui dokumentasi video, data angka, dan catatan resmi yang dapat diakses oleh seluruh donatur.",
      },
    ],
    storiesTitle: "Cerita Nyata dari Donatur dan Mitra",
    storiesDescription:
      "Bukti transparansi dan kemudahan pelaporan yang dirasakan langsung oleh para donatur serta mitra kami.",
    ctaTitle: "Siap Penggalangan Dana Bersama OpenBook Charity?",
    ctaBody:
      "Daftarkan program sosial lembaga Anda dan berikan kepastian transparansi bagi setiap donatur.",
    ctaButton: "Mulai Galang Dana",
  },
  why: {
    eyebrow: "Why Us",
    title: "Membangun Kepercayaan Lewat Transparansi Nyata.",
    p1: "Di era digital, kejelasan informasi adalah kunci utama dalam berdonasi. OpenBook Charity hadir sebagai platform yang memastikan setiap kontribusi tercatat secara terbuka dan penyalurannya dapat dipantau langsung.",
    p2: "Kami memberikan akses penuh bagi donatur untuk melihat dampak dari bantuan mereka, sekaligus membantu mitra membangun rekam jejak yang tepercaya melalui laporan yang akuntabel.",
    heroRaiseFunds: "Mulai Galang Dana",
    heroSeeProgram: "Lihat Program",
    stats: [
      { value: "22.000+", label: "Program terbantu" },
      { value: "12+", label: "Kota di Indonesia" },
      { value: "94%", label: "Dana Tersalurkan" },
      { value: "6 hari", label: "Rata-rata Waktu Laporan" },
    ],
    problemEyebrow: "Masalahnya",
    problemTitle: "Tantangan Utama dalam Metode Penggalangan Konvensional.",
    problemP1:
      "Pada sistem penggalangan konvensional, donasi yang terkumpul sering kali tidak diimbangi dengan pelaporan berkala. Akibatnya, donatur kesulitan mengetahui alokasi serta dampak nyata dari bantuan yang telah disalurkan.",
    problemP2:
      "Tanpa adanya platform pelaporan yang jelas, donatur tidak memiliki akses untuk memantau perkembangan program. Hal ini secara perlahan mengikis rasa percaya dan menurunkan partisipasi masyarakat untuk berdonasi.",
    problemQuote: "Kepercayaan Dibangun Melalui Keterbukaan Real-Time",
    problemQuoteBody:
      "Dibutuhkan sistem pelaporan yang dapat diakses publik secara berkala: pencatatan transparan, alokasi yang dapat dilacak, dan pembaruan dampak yang jelas.",
    problemPhotoAlt: "Jemaat memasukkan uang ke kantong kolekte merah di gereja.",
    contrastEyebrow: "Bedanya",
    contrastTitle: "Di Perbedaan cara kerja yang memberi kepastian transparansi.",
    contrastIntro:
      "OpenBook Charity hadir sebagai platform berdonasi dengan pencatatan terbuka. Donatur dapat memantau setiap kontribusi dan melihat bagaimana dana disalurkan melalui laporan yang akuntabel.",
    without: "Tanpa OpenBook Charity",
    with: "Dengan OpenBook Charity",
    contrast: [
      {
        old: "Alokasi penggunaan dana tidak terperinci.",
        now: "Setiap program dilengkapi rincian biaya yang transparan.",
      },
      {
        old: "Pelaporan berkala jarang tersedia dan sulit diakses.",
        now: "Pembaruan laporan berbasis video dan data secara berkala.",
      },
      {
        old: "Keterbatasan akses untuk memverifikasi penyaluran.",
        now: "Alur penyaluran dana dapat dilacak hingga penerima manfaat.",
      },
      {
        old: "Kepercayaan hanya berpatokan pada janji formalitas.",
        now: "Kepercayaan dibuktikan dengan data akurat dan dokumentasi lapangan.",
      },
    ],
    benefitsEyebrow: "Yang Anda dapat",
    benefitsTitle: "Empat Alasan Menggunakan OpenBook Charity",
    benefitsIntro:
      "Kami menghadirkan ekosistem penggalangan dana yang transparan, terintegrasi, dan berfokus pada dampak nyata dari setiap kontribusi.",
    benefits: [
      {
        n: "01",
        title: "Penggalangan Dana Berbasis Program",
        body: "Setiap program memiliki rincian tujuan, alokasi dana, dan penerima manfaat yang jelas, sehingga donatur mengetahui persis dampak dari bantuannya.",
      },
      {
        n: "02",
        title: "Dokumentasi Dampak Berbasis Video",
        body: "Tim lapangan mengunggah pembaruan kegiatan secara langsung, memungkinkan donatur memantau perkembangan program secara transparan pada minggu yang sama.",
      },
      {
        n: "03",
        title: "Pencatatan Keuangan Transparan",
        body: "Rincian biaya, penyaluran, dan sisa dana dapat diakses secara terbuka oleh publik, memastikan mayoritas dana dialokasikan langsung untuk program.",
      },
      {
        n: "04",
        title: "Indikator Keaktifan Laporan",
        body: "Sistem pemeringkatan menampilkan kedisiplinan mitra dalam melaporkan perkembangan kegiatan, membangun rekam jejak yang tepercaya secara berkesinambungan.",
      },
    ],
    galleryEyebrow: "Bukti di lapangan",
    galleryTitle: "Bukti Nyata Pengawasan dan Penyaluran di Lapangan.",
    gallerySlides: [
      { caption: "Slide 1", hint: "Laporan video dari lapangan." },
      { caption: "Slide 2", hint: "Serah terima yang tercatat." },
      { caption: "Slide 3", hint: "Kegiatan yang bisa diikuti." },
      { caption: "Slide 4", hint: "Skor laporan di platform." },
    ],
    audienceEyebrow: "Alur bantuan",
    audienceTitle: "Alur Penyaluran Dana yang Transparan dan Terukur",
    audienceIntro:
      "Setiap tahap penyaluran dari donatur hingga penerima manfaat tercatat secara rinci dan dapat dipantau kapan saja.",
    funnelPath: ["Donatur", "Lembaga", "Penerima bantuan"],
    funnel: [
      {
        n: "01",
        eyebrow: "Donatur",
        title: "Donasi Dialokasikan ke Program Spesifik",
        body: "Pilih program sosial yang ingin dibantu dan lihat rincian penggunannya. Setelah dana disalurkan, Anda akan menerima dokumentasi bukti penyerahan dari lapangan.",
        caption: "Foto donatur",
        hint: "Donatur memilih program dan memantau penyalurannya.",
      },
      {
        n: "02",
        eyebrow: "Lembaga",
        title: "Pencatatan dan Pelaporan Transparan",
        body: "Mitra mengelola donasi sesuai alokasi program, mencatat seluruh transaksi masuk dan keluar, serta mengunggah bukti penyerahan secara terbuka.",
        caption: "Foto lembaga",
        hint: "Mitra mencatat dan melaporkan setiap transaksi.",
      },
      {
        n: "03",
        eyebrow: "Penerima bantuan",
        title: "Bantuan Tiba di Penerima Manfaat",
        body: "Donasi disalurkan langsung kepada penerima yang berhak. Donatur dapat memverifikasi penerimaan bantuan melalui laporan video dan dokumentasi di lapangan.",
        caption: "Foto penerima",
        hint: "Penerima manfaat menerima bantuan yang terverifikasi.",
      },
    ],
    storiesTitle: "Cerita dari donatur dan mitra",
    storiesDescription:
      "Pengalaman nyata dari donatur dan mitra yang merasakan langsung kemudahan serta transparansi sistem pelaporan kami.",
    ctaTitle: "Wujudkan Transparansi Akuntabel untuk Program Sosial Anda",
    ctaBody:
      "Daftarkan program lembaga Anda di OpenBook Charity. Berikan akses pemantauan alokasi dana secara utuh kepada donatur, mulai dari penerimaan, penyaluran, hingga bukti dokumentasi di lapangan.",
    ctaRaiseFunds: "Mulai Galang Dana",
    readStory: "Tentang Kami",
  },
  platform: {
    eyebrow: "Program",
    title: "Satu Platform untuk Menggalang Dana, Mencatat, dan Membuktikan Dampak.",
    description:
      "Kelola penggalangan dana secara terpadu—mulai dari pendaftaran program, pencatatan alokasi, hingga pengunggahan bukti penyaluran yang dapat dipantau langsung oleh donatur.",
    heroRaiseFunds: "Mulai Galang Dana",
    heroSeePrograms: "Lihat Kegiatan",
    heroCaption: "Layar program",
    heroHint: "Tampilan daftar program, dana, dan laporan. Isi nanti dengan screenshot.",
    flowEyebrow: "Alur kerja",
    flowTitle: "Alur Kerja Transparansi dari Awal Hingga Akhir",
    flowIntro:
      "Lima langkah terstruktur untuk memastikan setiap program berjalan secara terbuka dan akuntabel.",
    steps: [
      {
        n: "01",
        title: "Buat Program",
        body: "Tentukan tujuan, rincian biaya, dan target penerima manfaat sejak awal agar program memiliki transparansi penuh.",
      },
      {
        n: "02",
        title: "Terima Donasi",
        body: "Setiap dana masuk dialokasikan khusus ke program pilihan, tanpa tercampur dengan anggaran umum.",
      },
      {
        n: "03",
        title: "Catat Penyaluran",
        body: "Seluruh transaksi pengeluaran tercatat secara mendetail sehingga alur penggunaan dana dapat dilacak.",
      },
      {
        n: "04",
        title: "Unggah Bukti",
        body: "Tim lapangan mengunggah dokumentasi video dan laporan pembaruan kegiatan dalam waktu maksimal 6 hari.",
      },
      {
        n: "05",
        title: "Pemantauan Donatur",
        body: "Donatur dapat mengakses laporan, alokasi sisa dana, dan dampak nyata program kapan saja.",
      },
    ],
    sidesEyebrow: "Dua sisi",
    sidesTitle: "Satu Sistem, Transparan untuk Donatur dan Lembaga",
    sidesIntro:
      "Mewujudkan keterbukaan informasi dengan memberikan akses data yang selaras bagi donatur maupun pengelola program.",
    donorCaption: "Layar donatur",
    donorHint: "Daftar pemberian, laporan, dan sisa dana.",
    donorEyebrow: "Untuk donatur",
    donorTitle: "Pantau Penyaluran Donasi",
    donorBody:
      "Akses program yang Anda bantu untuk melihat rincian biaya, alokasi penyaluran, bukti video lapangan, hingga sisa dana secara terperinci kapan saja.",
    orgCaption: "Layar lembaga",
    orgHint: "Kelola program, unggah bukti, pantau skor.",
    orgEyebrow: "Untuk lembaga",
    orgTitle: "Kelola Laporan dengan Akuntabel",
    orgBody:
      "Kelola program, catat pengeluaran, dan unggah bukti kegiatan secara praktis untuk membangun rekam jejak lembaga yang tepercaya.",
    modulesEyebrow: "Modul",
    modulesTitle: "Modul Transparansi Sistem",
    modules: [
      {
        title: "Transparansi Biaya Program",
        body: "Rincian anggaran tertulis secara jelas untuk setiap kegiatan, sehingga alokasi dana dapat dipahami publik secara transparan.",
      },
      {
        title: "Pelacakan Alur Dana",
        body: "Setiap tahapan dari penerimaan hingga penyaluran tercatat secara runtut dan dapat diakses secara terbuka.",
      },
      {
        title: "Dokumentasi Video Real-Time",
        body: "Bukti kegiatan langsung dari lapangan diunggah ke lini masa donatur sebagai pembaruan berkala.",
      },
      {
        title: "Indikator Kedisiplinan Laporan",
        body: "Menampilkan tingkat kepatuhan dan konsistensi mitra dalam memperbarui laporan kegiatan program.",
      },
      {
        title: "Riwayat Serah Terima",
        body: "Dokumentasi dan catatan riwayat program yang telah selesai diserahterimakan tetap tersimpan dengan aman dalam sistem.",
      },
    ],
    screensEyebrow: "Contoh",
    screensTitle: "Dokumentasi dan Pelaporan Kegiatan Transparan",
    screens: [
      { caption: "Program", hint: "Kegiatan di lapangan yang didanai." },
      { caption: "Biaya", hint: "Rincian biaya yang bisa dicek." },
      { caption: "Laporan", hint: "Bukti video dari lapangan." },
      { caption: "Skor", hint: "Seberapa rajin mitra melapor." },
    ],
    ctaTitle: "Siap Menjalankan Program Sosial yang Akuntabel?",
  },
  community: {
    eyebrow: "Komunitas",
    joinGroup: "Gabung grup",
    placeholder: "Data contoh",
    directoryEyebrow: "Anggota",
    directoryTitle: "Yang sudah gabung",
    members: [
      { name: "Dewi", place: "Jakarta", role: "Donatur", note: "Mengikuti video penyerahan." },
      { name: "Andi", place: "Bandung", role: "Donatur", note: "Aktif di forum daring." },
      { name: "Siti", place: "Yogyakarta", role: "Donatur", note: "Hadir di pertemuan kota." },
      { name: "Raka", place: "Surabaya", role: "Donatur", note: "Baru bergabung ke grup." },
      { name: "Lina", place: "Kupang", role: "Penerima", note: "Membuat campaign air bersih." },
      { name: "Tim Magelang", place: "Magelang", role: "Lembaga", note: "Mencatat penyaluran di lapangan." },
    ],
    forumEyebrow: "Forum",
    forumTitle: "Ruang diskusi",
    threads: [
      { title: "Cara donatur mengikuti video penyerahan", author: "Dewi", meta: "12 balasan · 2 hari lalu" },
      { title: "Pertemuan daring bulan ini, siapa yang masuk?", author: "Andi", meta: "4 balasan · 5 hari lalu" },
      { title: "Campaign baru dari Kupang", author: "Lina", meta: "8 balasan · 1 minggu lalu" },
    ],
    groupsEyebrow: "Grup",
    groupsTitle: "Pilih grup",
    groupsIntro: "Masuk ke percakapan yang sudah jalan.",
    groups: [
      { title: "Grup donatur", body: "Percakapan harian orang yang memberi." },
      { title: "Forum mingguan", body: "Diskusi terjadwal, daring." },
      { title: "Acara dan pertemuan", body: "Pengumuman kumpul online dan di kota." },
    ],
    volunteerTitle: "Bantu lebih banyak dengan jadi relawan OpenBook Charity.",
    volunteerBody:
      "Selain donasi, Anda bisa ikut program dan kegiatan kami secara langsung. Gabung sebagai relawan.",
    volunteerJoin: "Gabung relawan",
    volunteerSee: "Lihat kegiatan",
    volunteerPhotos: [
      { caption: "Foto 1", hint: "Relawan menanam di lapangan." },
      { caption: "Foto 2", hint: "Penyerahan bantuan di rumah." },
      { caption: "Foto 3", hint: "Paket diserahkan ke penerima." },
      { caption: "Foto 4", hint: "Bantuan sampai ke yang membutuhkan." },
    ],
  },
  rekening: {
    bankTitle: "Metode transfer bank",
    bankIntro: "Transfer lewat ATM atau internet banking ke rekening di bawah.",
    groupDonasi: "Rekening donasi",
    numberSoon: "Nomor akan diumumkan",
    holderPrefix: "a/n",
    mobileTitle: "Pembayaran via mobile banking",
    mobileIntro: "Pilih aplikasi bank Anda, lalu ikuti langkahnya.",
    mobileDone: "Sudah beres. Kabari kami di WhatsApp",
    mobileGuides: {
      "bca-mobile": {
        zakatTitle: "Zakat melalui BCA Mobile",
        zakatSteps: [
          "Jalankan **BCA Mobile**, kemudian buka **BCA Lifestyle**.",
          "Sentuh menu **Zakat**.",
          "Tentukan jenis zakat, misalnya zakat penghasilan atau zakat harta.",
          "Isi jumlah yang akan disalurkan.",
          "Pilih lembaga **OpenBook Charity**.",
          "NPWP boleh diisi atau dilewati, lalu lanjut.",
          "Ketik PIN, kemudian konfirmasi.",
        ],
        otherTitle: "Pemberian di luar zakat melalui BCA Mobile",
        otherSteps: [
          "Buka **BCA Mobile**, masuk ke **BCA Lifestyle**.",
          "Sentuh menu **Donasi**.",
          "Pilih program yang ingin dibantu:",
          "Isi jumlah pemberian.",
          "Pilih lembaga **OpenBook Charity**.",
          "NPWP boleh diisi atau dilewati, lalu lanjut.",
          "Ketik PIN, kemudian konfirmasi.",
        ],
        otherPrograms: [
          "Tanggap Bencana & Aksi Sosial",
          "Pemberdayaan Usaha",
          "Pendidikan",
          "Bantuan Sosial & Keluarga",
        ],
        nestedAt: 2,
      },
      livin: {
        zakatTitle: "Zakat di Mandiri Livin",
        zakatSteps: [
          "Buka **Mandiri Livin**, lalu pilih **Donasi**.",
          "Masuk ke **Zakat**, lalu pilih programnya, misalnya zakat penghasilan atau zakat harta.",
          "Isi jumlah zakat.",
          "Lembaga penyalur: pilih **OpenBook Charity**.",
          "NPWP boleh diisi, boleh dilewati, lalu lanjut.",
          "Ketik PIN, lalu OK.",
        ],
        otherTitle: "Transfer donasi yang dijadwalkan",
        otherSteps: [
          "Buka **Livin by Mandiri**, lalu pilih **Transfer**.",
          "Di sudut kanan atas, buka **Transfer Terjadwal**.",
          "Lalu buat jadwal baru lewat **Buat Transfer Terjadwal**.",
          "Isi rekening OpenBook Charity:",
          "Isi jumlah transfer.",
          "Di keterangan, tulis tujuan pemberian, misalnya zakat, infak, atau wakaf.",
          "Pilih seberapa sering dana didebet otomatis.",
        ],
        otherPrograms: [
          "Zakat, nomor akan diumumkan",
          "Infak, nomor akan diumumkan",
          "Wakaf, nomor akan diumumkan",
        ],
        nestedAt: 3,
      },
      brimo: {
        zakatTitle: "Ziswaf lewat BRI Mobile",
        zakatSteps: [
          "Jalankan **BRImo**.",
          "Masuk ke **Lainnya**, lalu buka **Donasi**.",
          "Pilih produk donasi **OpenBook Charity**.",
          "Pilih jenisnya, **Zakat** atau **Infak**.",
          "Isi jumlah, lalu ketik PIN.",
        ],
        otherTitle: "",
        otherSteps: [],
        otherPrograms: [],
        nestedAt: 0,
      },
    },
    qrisTitle: "Pembayaran via QRIS",
    qrisIntro: "Scan kode QR di bawah lewat aplikasi yang mendukung QRIS.",
    qrisName: "QRIS OpenBook Charity",
    qrisHow: "Bagaimana donasi lewat QRIS dilakukan?",
    qrisHint: "Kode QR akan tampil di sini.",
    qrisSteps: [
      "Di halaman ini pilih **QRIS**, lalu tekan **Kirim donasi**.",
      "Berikutnya tampil layar untuk memastikan jumlah yang akan dikirim.",
      "Pastikan jumlahnya benar, lalu **pindai kode QR** memakai e-wallet atau mobile banking yang menerima QRIS.",
      "Kalau halaman ini dan aplikasi bayar ada di perangkat yang sama, simpan gambar kodenya lalu unggah di aplikasi tersebut.",
      "Ketik PIN di aplikasi itu supaya transaksi dilanjutkan.",
    ],
    qrisDone: "Donasi sudah masuk. Kabari kami di WhatsApp",
  },
  faq: {
    title: "FAQ",
    heading: "Pertanyaan yang sering diajukan",
    intro: "Jawaban singkat soal pemberian, gereja, dan program OpenBook Charity.",
    groups: {
      giving: "Pemberian",
      church: "Gereja dan jemaat",
    },
    items: [
      {
        id: "confirm-need",
        question: "Apakah saya perlu melakukan konfirmasi setelah mentransfer donasi?",
        body: "Ya. Konfirmasi diperlukan untuk memverifikasi transaksi Anda dengan mutasi rekening kami. Hal ini memastikan setiap donasi terdata dengan akurat dan tidak tertukar dengan transaksi bernilai sama dari donatur lain.",
      },
      {
        id: "confirm-how",
        question: "Bagaimana cara mengonfirmasi donasi saya?",
        body: "Setelah melakukan transfer via ATM, teller, atau mobile banking, kirimkan bukti transfer melalui WhatsApp atau email kami dengan menyertakan nama lengkap, nominal donasi, dan nama program yang dituju.",
        steps: [
          "Transfer ke rekening resmi OpenBook Charity.",
          "Simpan bukti transfer dari bank atau e-wallet Anda.",
          "Kirim bukti ke WhatsApp atau email kami lengkap dengan nama, nominal, dan program tujuan.",
        ],
      },
      {
        id: "history",
        question: "Bisakah saya memantau riwayat donasi dan laporan penyalurannya?",
        body: "Tentu. Anda dapat mengakses halaman program yang Anda bantu kapan saja untuk melihat rincian alokasi biaya, realisasi penyaluran, bukti video kegiatan, hingga saldo sisa dana secara transparan.",
      },
      {
        id: "why-obc",
        question: "Apa latar belakang didirikannya OpenBook Charity?",
        body: "OpenBook Charity hadir atas inisiatif penggiat gereja yang merespons perlunya sistem keterbukaan atas dana pelayanan yang terkumpul. Kami menyediakan platform pelaporan terbuka agar setiap donatur dan jemaat dapat memastikan dana tersalurkan tepat sasaran secara akuntabel.",
      },
      {
        id: "why-silent",
        question: "Bagaimana OpenBook Charity membantu membangun kepercayaan jemaat?",
        body: "Kami menyediakan akses informasi yang jelas bagi jemaat untuk memantau alur penggunaan dana dan mengajukan pertanyaan. Dengan transparansi ini, jemaat dapat memberi dengan keyakinan penuh dan rasa sukacita.",
      },
      {
        id: "what-see",
        question: "Informasi apa saja yang dapat diakses jemaat setelah berdonasi?",
        body: "Jemaat dapat memantau rincian anggaran, laporan penyaluran dana, dokumentasi video kegiatan dari lapangan, hingga saldo sisa program secara berkala dan terbuka.",
      },
      {
        id: "tithe",
        question: "Apakah saya bisa menyalurkan perpuluhan atau persembahan melalui OpenBook Charity?",
        body: "Bisa. Jemaat dapat menyalurkan perpuluhan, persembahan, maupun donasi khusus langsung ke program spesifik yang terdaftar. Setiap dana yang dialokasikan akan dicatat khusus sesuai dengan program pilihan Anda tanpa terhitung sebagai kas umum.",
      },
      {
        id: "open-program",
        question: "Bagaimana cara gereja atau lembaga mendaftarkan program?",
        body: "Lembaga dapat memilih menu Mulai Galang Dana, lalu mengisi rincian kegiatan, estimasi biaya, dan target penerima manfaat. Setelah diterbitkan, jemaat dapat berdonasi dan memantau seluruh riwayat transaksi serta bukti penyaluran dana secara langsung.",
      },
    ],
  },
  konfirmasi: {
    title: "Konfirmasi Donasi",
    heading: "Konfirmasi Donasi",
    intro: "Kirimkan bukti transfer untuk memastikan donasi Anda terverifikasi dengan akurat.",
    whyTitle: "Mengapa Perlu Konfirmasi?",
    whyBody:
      "Konfirmasi memudahkan kami mencocokkan transaksi Anda dengan mutasi rekening. Hal ini memastikan setiap donasi terdata dengan benar, terutama jika terdapat nominal transaksi yang sama dari donatur lain.",
    howTitle: "Langkah Konfirmasi Donasi",
    steps: [
      "Lakukan transfer ke rekening resmi OpenBook Charity.",
      "Simpan bukti transaksi atau struk transfer.",
      "Kirimkan bukti transfer via WhatsApp atau email dengan menyertakan detail donasi.",
    ],
    fieldsTitle: "Informasi yang Perlu Dilampirkan",
    fields: {
      name: "Nama Lengkap",
      amount: "Nominal Transfer",
      program: "Nama Program Tujuan",
      proof: "Bukti Transfer",
    },
    whatsappButton: "Konfirmasi via WhatsApp",
    rekeningButton: "Lihat Rekening Donasi",
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
    platform: "Program",
    community: "Community",
    faq: "FAQ",
    raiseFunds: "Raise funds",
    donateNow: "Start donating",
    openMenu: "Open menu",
    language: "Language",
  },
  topBar: {
    service: "Donor support",
    callCenter: "Call Center",
    rekening: "Donation accounts",
    confirm: "Confirm donation",
  },
  footer: {
    blurb:
      "Your donation is delivered to real action with transparent reports and video proof.",
    platform: "Program",
    overview: "Overview",
    org: "Information",
    copyright: "All rights reserved.",
    socialTitle: "Follow us on social media:",
    downloadTitle: "Download Our App",
    googlePlay: "Get it on Google Play",
    appStore: "Download on the App Store",
    social: {
      facebook: "Facebook",
      instagram: "Instagram",
      youtube: "YouTube",
      tiktok: "TikTok",
    },
  },
  logo: {
    tagline: "Transparently delivering good.",
  },
  common: {
    raiseFunds: "Raise funds",
    donateNow: "Start donating",
    seePlatform: "See program",
    seePrograms: "See programs",
    photoSoon: "Photo coming soon",
    screen: "Screen",
    whatsapp: "Chat on WhatsApp",
  },
  home: {
    badge: "12+ cities · 22,000+ programs helped",
    heroLines: ["Make sure your donation", "reaches the right target."],
    heroEmphasis: "Everything recorded transparently.",
    heroDescription:
      "Send your donation to a chosen program and track the delivery for real, from start to finish.",
    reviewsSuffix: "donors",
    reviewsFrom: "from",
    reviewsScoreMax: "/5.0",
    stats: [
      { value: "22,000+", label: "Programs helped" },
      { value: "12+", label: "Cities in Indonesia" },
      { value: "94%", label: "Funds to the field" },
      { value: "6 days", label: "Time to report" },
    ],
    featuresEyebrow: "How it works",
    featuresTitle: "Track your donation until it reaches the recipient",
    featuresDescription:
      "Choose a specific program, get video proof from the field, and check open financial reports.",
    features: [
      {
        title: "Targeted, specific programs",
        body: "Every rupiah is allocated to a specific activity, not a general fund without clarity.",
      },
      {
        title: "Real-time field proof",
        body: "Field teams upload live video documentation so you can see your donation's impact for real.",
      },
      {
        title: "Transparent financial reports",
        body: "Cost breakdown, disbursements, and remaining funds are openly accessible to the public.",
      },
      {
        title: "Accountability indicator",
        body: "Monitor how disciplined and transparent partner organisations are in updating regular reports.",
      },
    ],
    programsTitle: "Our programs",
    programsDescription:
      "Choose the program category you want to support and track how it is delivered.",
    programs: [
      {
        id: "kesehatan",
        title: "Health",
        hint: "Medical care and health facilities for communities.",
      },
      {
        id: "usaha",
        title: "Business empowerment",
        hint: "Working capital and mentoring for independent small businesses.",
      },
      {
        id: "pendidikan",
        title: "Education",
        hint: "Scholarships and learning facilities for children.",
      },
      {
        id: "lapangan",
        title: "Disaster response & social action",
        hint: "Logistics and emergency aid in affected areas.",
      },
      {
        id: "penerima",
        title: "Social & family support",
        hint: "Direct support for underprivileged families' basic living needs.",
      },
      {
        id: "terbuka",
        title: "Infrastructure & community",
        hint: "Public facility development and community empowerment programs.",
      },
    ],
    galleryEyebrow: "From the field",
    galleryTitle: "A trail of goodwill already delivered",
    gallerySlides: [
      { caption: "Slide 1", hint: "A video report from Magelang." },
      { caption: "Slide 2", hint: "A recorded handover in Yogyakarta." },
      { caption: "Slide 3", hint: "Clean water in Kupang." },
      { caption: "Slide 4", hint: "Fund records you can check." },
    ],
    projectsEyebrow: "In progress",
    projectsTitle: "Programs that need your support",
    projectsDescription:
      "Choose a program, track fundraising progress, and check delivery directly.",
    photoProgram: "Program photo",
    reportScore: "Report score",
    raised: "raised",
    storiesTitle: "Real stories from donors and partners",
    storiesDescription:
      "Transparency they experienced firsthand as donors and partners.",
    storiesEyebrow: "Testimonials",
    transferEyebrow: "Partner area",
    transferTitle: "Partner delivery reporting portal",
    transferDescription:
      "For managing partners to upload activity proof and complete program reports transparently.",
    transferNote: "",
    transferEmail: "Partner account email",
    transferSubmit: "Go to partner portal",
    transferPending: "Sending…",
    transferDone: "Request sent, awaiting review.",
    ctaTitle: "Raise funds transparently and give donors certainty.",
    ctaBody:
      "Create your social campaign on OpenBook Charity and let donors track delivery directly.",
    ctaButton: "Start fundraising",
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
      { id: "dimas-harapan", title: "New Hope for Dimas" },
      { id: "nenek-sari-jagung", title: "Help Grandma Sari Start a Corn Business" },
      { id: "sd-air-bersih", title: "Clean Water Facilities for SD Oebelo Students" },
    ],
  },
  stories: [
    {
      quote:
        "The same week my donation was delivered, I received the video proof. Practical and transparent!",
      role: "Monthly donor, Jakarta",
    },
    {
      quote:
        "Even with a small team, field activity updates can still be uploaded without waiting months.",
      role: "Program lead, Makassar",
    },
    {
      quote:
        "Openness is more than a promise. Our leadership can monitor fund allocation directly.",
      role: "Foundation partner, Bandung",
    },
  ],
  about: {
    heroEyebrow: "About us",
    heroTitle: "Good intentions should not walk in the dark.",
    heroP1:
      "We believe every rupiah given in good faith deserves to reach the right recipient, openly and honestly.",
    heroP2:
      "OpenBook Charity was born from a longing for a donation system that is honest, open, and accountable to the public.",
    heroPhoto: "Photo coming soon",
    heroPhotoHint: "Place a photo here: founder, community, or a moment of giving.",
    heroAlt: "OpenBook Charity founder with the community",
    conflictEyebrow: "The root of the story",
    conflictTitle:
      "Donations keep flowing, yet clarity on allocation remains an open question.",
    conflictP1:
      "The founder of OpenBook Charity was active in a faith community. He watched donations flow every week in significant amounts. Donors gave with sincere intent, yet one fundamental question always arose: where exactly are these funds delivered?",
    conflictP2:
      "Without an open reporting system, donors often had to guess. Giving that should bring peace instead left doubts about whether delivery was transparent.",
    conflictQuote:
      "I saw so much care coming in, yet very little clarity on whether help truly reached those who deserved it.",
    conflictQuoteBody:
      "It is not just about how much is raised, but certainty after a gift is given. Without clear records and proof of recipients, donor trust slowly fades. From that longing for openness, OpenBook Charity was born.",
    conflictPhotoAlt: "A church interior with a white dove.",
    silenceEyebrow: "Silence",
    silenceQuote: "Doubts that never get answered.",
    silenceP1:
      "Many donors want to know the impact of their giving, yet cannot find a clear channel or access to information. Donating that should bring peace often leaves uncertainty instead.",
    silenceP2:
      "Trust cannot grow in uncertainty. Without real transparency, the community's spirit of sharing gradually fades.",
    turningEyebrow: "Turning point",
    turningTitle: "Restoring Trust Through Real Transparency",
    turningIntro:
      "We believe openness is the only way to nurture good intentions and ensure every gift makes a real impact.",
    turningSteps: [
      {
        n: "01",
        title: "Transparency from the Start",
        body: "Every rupiah in and out is recorded automatically so it can be accounted for openly.",
      },
      {
        n: "02",
        title: "Easy Access to Information",
        body: "Donors can monitor fund allocation anytime, without closed-off processes.",
      },
      {
        n: "03",
        title: "Proof of Real Impact",
        body: "Field documentation shows that help reaches the right recipients.",
      },
    ],
    birthEyebrow: "Our answer",
    birthTitle: "From That Unrest, OpenBook Charity Was Born.",
    birthP1:
      "OpenBook Charity exists as an answer to the longing for a truly open place to donate. Not mere formal reporting, but transparent records accessible anytime.",
    birthP2:
      "Here, donors can see, monitor, and ensure help reaches its destination. Every program has a clear trail, from the giver's hand to the beneficiary. Every rupiah has a clear purpose, and every question always has an answer.",
    direction: "Our direction",
    vision: "Vision",
    visionTitle:
      "Building a Culture of Sincere Giving Through Transparency and Trust.",
    visionBody:
      "We want everyone to share with full confidence. That confidence grows from reporting that is open, honest, and accountable.",
    mission: "Mission",
    missions: [
      {
        title: "Ensuring Fund Transparency",
        body: "Providing clear fund allocation details down to the last rupiah, so every distribution can be monitored openly.",
      },
      {
        title: "Opening Access to Communication",
        body: "Giving donors space to monitor and ensure help reaches beneficiaries clearly and accurately.",
      },
      {
        title: "Delivering Real-Time Reports",
        body: "Providing fast, transparent field updates without lengthy delays.",
      },
    ],
    promisesEyebrow: "Our promise",
    promisesTitle: "A Commitment to Transparency, Not Just a Slogan.",
    promisesIntro:
      "Trust is not built on sweet promises, but on real evidence that can be monitored regularly.",
    promises: [
      {
        n: "01",
        title: "Transparent Cost Details",
        body: "Every program includes open fund allocation details, with no hidden costs.",
      },
      {
        n: "02",
        title: "Traceable Distribution Flow",
        body: "Every stage of a donation is recorded from receipt to delivery, giving full certainty to donors and partners.",
      },
      {
        n: "03",
        title: "Regular and Open Reports",
        body: "Impact updates are shared regularly through video documentation, data, and official records accessible to all donors.",
      },
    ],
    storiesTitle: "Real Stories from Donors and Partners",
    storiesDescription:
      "Evidence of transparency and easy reporting felt firsthand by our donors and partners.",
    ctaTitle: "Ready to Raise Funds with OpenBook Charity?",
    ctaBody:
      "Register your organisation's social programs and give every donor certainty through transparency.",
    ctaButton: "Start Raising Funds",
  },
  why: {
    eyebrow: "Why Us",
    title: "Building Trust Through Real Transparency.",
    p1: "In the digital era, clear information is the key to giving with confidence. OpenBook Charity is a platform that ensures every contribution is recorded openly and every distribution can be monitored directly.",
    p2: "We give donors full access to see the impact of their help, while helping partners build a trusted track record through accountable reporting.",
    heroRaiseFunds: "Start Raising Funds",
    heroSeeProgram: "See Programs",
    stats: [
      { value: "22,000+", label: "Programs helped" },
      { value: "12+", label: "Cities in Indonesia" },
      { value: "94%", label: "Funds Delivered" },
      { value: "6 days", label: "Average Reporting Time" },
    ],
    problemEyebrow: "The problem",
    problemTitle: "Main Challenges in Conventional Fundraising Methods.",
    problemP1:
      "In conventional fundraising systems, collected donations are often not matched with regular reporting. As a result, donors struggle to know the allocation and real impact of help that has been delivered.",
    problemP2:
      "Without a clear reporting platform, donors lack access to monitor program progress. This gradually erodes trust and reduces community participation in giving.",
    problemQuote: "Trust Is Built Through Real-Time Openness",
    problemQuoteBody:
      "What is needed is a reporting system publicly accessible on a regular basis: transparent records, traceable allocation, and clear impact updates.",
    problemPhotoAlt: "Congregants putting money into a red collection bag in church.",
    contrastEyebrow: "The difference",
    contrastTitle: "A different way of working that brings transparency you can rely on.",
    contrastIntro:
      "OpenBook Charity is a giving platform with open records. Donors can monitor every contribution and see how funds are delivered through accountable reporting.",
    without: "Without OpenBook Charity",
    with: "With OpenBook Charity",
    contrast: [
      {
        old: "Fund allocation is not detailed.",
        now: "Every program includes transparent cost breakdowns.",
      },
      {
        old: "Regular reports are rarely available and hard to access.",
        now: "Report updates based on video and data, shared regularly.",
      },
      {
        old: "Limited access to verify distribution.",
        now: "Fund distribution can be traced to beneficiaries.",
      },
      {
        old: "Trust relies only on formal promises.",
        now: "Trust is backed by accurate data and field documentation.",
      },
    ],
    benefitsEyebrow: "What you get",
    benefitsTitle: "Four Reasons to Use OpenBook Charity",
    benefitsIntro:
      "We provide a transparent, integrated fundraising ecosystem focused on the real impact of every contribution.",
    benefits: [
      {
        n: "01",
        title: "Program-Based Fundraising",
        body: "Every program has clear goals, fund allocation, and beneficiaries, so donors know exactly the impact of their help.",
      },
      {
        n: "02",
        title: "Video-Based Impact Documentation",
        body: "Field teams upload activity updates directly, allowing donors to monitor program progress transparently in the same week.",
      },
      {
        n: "03",
        title: "Transparent Financial Records",
        body: "Cost details, disbursements, and remaining funds are openly accessible to the public, ensuring most funds go directly to programs.",
      },
      {
        n: "04",
        title: "Reporting Activity Indicator",
        body: "A ranking system shows how consistently partners report on program progress, building a trusted track record over time.",
      },
    ],
    galleryEyebrow: "Proof in the field",
    galleryTitle: "Real Proof of Oversight and Distribution in the Field.",
    gallerySlides: [
      { caption: "Slide 1", hint: "A video report from the field." },
      { caption: "Slide 2", hint: "A recorded handover." },
      { caption: "Slide 3", hint: "A program donors can follow." },
      { caption: "Slide 4", hint: "The report score on the platform." },
    ],
    audienceEyebrow: "How help flows",
    audienceTitle: "A Transparent, Measurable Fund Distribution Flow",
    audienceIntro:
      "Every stage of distribution from donor to beneficiary is recorded in detail and can be monitored anytime.",
    funnelPath: ["Donor", "Organisation", "Beneficiary"],
    funnel: [
      {
        n: "01",
        eyebrow: "Donor",
        title: "Donations Allocated to Specific Programs",
        body: "Choose the social program you want to support and see how funds are used. After distribution, you receive field documentation of the handover.",
        caption: "Donor photo",
        hint: "Donors choose a program and monitor delivery.",
      },
      {
        n: "02",
        eyebrow: "Organisation",
        title: "Transparent Recording and Reporting",
        body: "Partners manage donations according to program allocation, record all incoming and outgoing transactions, and upload proof of delivery openly.",
        caption: "Organisation photo",
        hint: "Partners record and report every transaction.",
      },
      {
        n: "03",
        eyebrow: "Beneficiary",
        title: "Help Reaches the Beneficiary",
        body: "Donations are delivered directly to those entitled to receive them. Donors can verify receipt through video reports and field documentation.",
        caption: "Recipient photo",
        hint: "Beneficiaries receive verified help.",
      },
    ],
    storiesTitle: "Stories from donors and partners",
    storiesDescription:
      "Real experiences from donors and partners who feel firsthand the ease and transparency of our reporting system.",
    ctaTitle: "Build Accountable Transparency for Your Social Programs",
    ctaBody:
      "Register your organisation's programs on OpenBook Charity. Give donors full access to monitor fund allocation, from receipt and distribution to field documentation.",
    ctaRaiseFunds: "Start Raising Funds",
    readStory: "About Us",
  },
  platform: {
    eyebrow: "Program",
    title: "One Platform to Raise Funds, Record, and Prove Impact.",
    description:
      "Manage fundraising in one place—from program registration and allocation records to uploading proof of delivery that donors can monitor directly.",
    heroRaiseFunds: "Start Raising Funds",
    heroSeePrograms: "See Programs",
    heroCaption: "Program screen",
    heroHint: "A view of programs, funds, and reports. Replace later with a screenshot.",
    flowEyebrow: "How it works",
    flowTitle: "A Transparent Workflow from Start to Finish",
    flowIntro:
      "Five structured steps to ensure every program runs openly and accountably.",
    steps: [
      {
        n: "01",
        title: "Create a Program",
        body: "Define goals, cost details, and target beneficiaries from the start so the program is fully transparent.",
      },
      {
        n: "02",
        title: "Receive Donations",
        body: "Every incoming fund is allocated specifically to the chosen program, without mixing with general budgets.",
      },
      {
        n: "03",
        title: "Record Disbursements",
        body: "All outgoing transactions are recorded in detail so fund usage can be traced.",
      },
      {
        n: "04",
        title: "Upload Proof",
        body: "Field teams upload video documentation and activity updates within a maximum of 6 days.",
      },
      {
        n: "05",
        title: "Donor Monitoring",
        body: "Donors can access reports, remaining fund allocation, and real program impact anytime.",
      },
    ],
    sidesEyebrow: "Two sides",
    sidesTitle: "One System, Transparent for Donors and Organisations",
    sidesIntro:
      "Open information through aligned data access for both donors and program managers.",
    donorCaption: "Donor screen",
    donorHint: "Gifts given, reports, and remaining funds.",
    donorEyebrow: "For donors",
    donorTitle: "Monitor Donation Delivery",
    donorBody:
      "Access the programs you support to see cost details, disbursement allocation, field video proof, and remaining funds in detail anytime.",
    orgCaption: "Organisation screen",
    orgHint: "Manage programs, upload proof, watch the score.",
    orgEyebrow: "For organisations",
    orgTitle: "Manage Reports Accountably",
    orgBody:
      "Manage programs, record spending, and upload activity proof practically to build a trusted organisational track record.",
    modulesEyebrow: "Modules",
    modulesTitle: "System Transparency Modules",
    modules: [
      {
        title: "Program Cost Transparency",
        body: "Clear written budget details for every activity, so fund allocation is transparent to the public.",
      },
      {
        title: "Fund Flow Tracking",
        body: "Every stage from receipt to distribution is recorded in sequence and openly accessible.",
      },
      {
        title: "Real-Time Video Documentation",
        body: "Field activity proof is uploaded to the donor timeline as regular updates.",
      },
      {
        title: "Reporting Discipline Indicator",
        body: "Shows partner compliance and consistency in updating program activity reports.",
      },
      {
        title: "Handover History",
        body: "Documentation and records of completed programs handed over remain securely stored in the system.",
      },
    ],
    screensEyebrow: "Examples",
    screensTitle: "Transparent Activity Documentation and Reporting",
    screens: [
      { caption: "Program", hint: "A funded activity in the field." },
      { caption: "Costs", hint: "Cost details that can be checked." },
      { caption: "Report", hint: "Video proof from the field." },
      { caption: "Score", hint: "How promptly partners report." },
    ],
    ctaTitle: "Ready to Run an Accountable Social Program?",
  },
  community: {
    eyebrow: "Community",
    joinGroup: "Join group",
    placeholder: "Sample data",
    directoryEyebrow: "Members",
    directoryTitle: "People who already joined",
    members: [
      { name: "Dewi", place: "Jakarta", role: "Donor", note: "Follows handover videos." },
      { name: "Andi", place: "Bandung", role: "Donor", note: "Active in the online forum." },
      { name: "Siti", place: "Yogyakarta", role: "Donor", note: "Comes to city meetups." },
      { name: "Raka", place: "Surabaya", role: "Donor", note: "Just joined the group." },
      { name: "Lina", place: "Kupang", role: "Recipient", note: "Opened a clean-water campaign." },
      { name: "Magelang team", place: "Magelang", role: "Organisation", note: "Records field disbursements." },
    ],
    forumEyebrow: "Forum",
    forumTitle: "Discussion space",
    threads: [
      { title: "How donors follow handover videos", author: "Dewi", meta: "12 replies · 2 days ago" },
      { title: "This month's online meetup, who is in?", author: "Andi", meta: "4 replies · 5 days ago" },
      { title: "A new campaign from Kupang", author: "Lina", meta: "8 replies · 1 week ago" },
    ],
    groupsEyebrow: "Groups",
    groupsTitle: "Pick a group",
    groupsIntro: "Join a conversation that is already going.",
    groups: [
      { title: "Donor group", body: "Daily conversation for people who give." },
      { title: "Weekly forum", body: "Scheduled discussion, online." },
      { title: "Events and meetups", body: "Announcements for online and city gatherings." },
    ],
    volunteerTitle: "Help more by joining as an OpenBook Charity volunteer.",
    volunteerBody:
      "Besides donating, you can take part in our programs and activities in person. Join as a volunteer.",
    volunteerJoin: "Join as volunteer",
    volunteerSee: "See our work",
    volunteerPhotos: [
      { caption: "Photo 1", hint: "Volunteers planting in the field." },
      { caption: "Photo 2", hint: "Aid handed over at home." },
      { caption: "Photo 3", hint: "A package given to a recipient." },
      { caption: "Photo 4", hint: "Help reaching those who need it." },
    ],
  },
  rekening: {
    bankTitle: "Bank transfer",
    bankIntro: "Transfer via ATM or internet banking to the accounts below.",
    groupDonasi: "Donation accounts",
    numberSoon: "Account number to be announced",
    holderPrefix: "a/n",
    mobileTitle: "Pay via mobile banking",
    mobileIntro: "Pick your bank app, then follow the steps.",
    mobileDone: "It is done. Message us on WhatsApp",
    mobileGuides: {
      "bca-mobile": {
        zakatTitle: "Zakat through BCA Mobile",
        zakatSteps: [
          "Open **BCA Mobile**, then go to **BCA Lifestyle**.",
          "Tap the **Zakat** menu.",
          "Pick the zakat type, for example income zakat or wealth zakat.",
          "Enter the amount to send.",
          "Choose **OpenBook Charity** as the organisation.",
          "Fill NPWP if you have one, or skip it, then continue.",
          "Enter your PIN, then confirm.",
        ],
        otherTitle: "Giving besides zakat through BCA Mobile",
        otherSteps: [
          "Open **BCA Mobile**, then go to **BCA Lifestyle**.",
          "Tap the **Donasi** menu.",
          "Pick the program you want to support:",
          "Enter the gift amount.",
          "Choose **OpenBook Charity** as the organisation.",
          "Fill NPWP if you have one, or skip it, then continue.",
          "Enter your PIN, then confirm.",
        ],
        otherPrograms: [
          "Disaster response & social action",
          "Business empowerment",
          "Education",
          "Social & family support",
        ],
        nestedAt: 2,
      },
      livin: {
        zakatTitle: "Zakat in Mandiri Livin",
        zakatSteps: [
          "Open **Mandiri Livin**, then choose **Donasi**.",
          "Go to **Zakat**, then pick the program, for example income zakat or wealth zakat.",
          "Enter the zakat amount.",
          "For the organisation, choose **OpenBook Charity**.",
          "Fill NPWP if you want, or skip it, then continue.",
          "Enter your PIN, then OK.",
        ],
        otherTitle: "Scheduled donation transfer",
        otherSteps: [
          "Open **Livin by Mandiri**, then choose **Transfer**.",
          "At the top right, open **Transfer Terjadwal**.",
          "Then start a new schedule via **Buat Transfer Terjadwal**.",
          "Enter the OpenBook Charity account:",
          "Enter the transfer amount.",
          "In the note, write the purpose, for example zakat, infak, or wakaf.",
          "Choose how often the auto debit should run.",
        ],
        otherPrograms: [
          "Zakat, account number to be announced",
          "Infak, account number to be announced",
          "Wakaf, account number to be announced",
        ],
        nestedAt: 3,
      },
      brimo: {
        zakatTitle: "Ziswaf through BRI Mobile",
        zakatSteps: [
          "Open **BRImo**.",
          "Go to **Lainnya**, then open **Donasi**.",
          "Pick the donation product **OpenBook Charity**.",
          "Pick the type, **Zakat** or **Infak**.",
          "Enter the amount, then enter your PIN.",
        ],
        otherTitle: "",
        otherSteps: [],
        otherPrograms: [],
        nestedAt: 0,
      },
    },
    qrisTitle: "Pay via QRIS",
    qrisIntro: "Scan the QR code below with an app that supports QRIS.",
    qrisName: "OpenBook Charity QRIS",
    qrisHow: "How is a QRIS donation made?",
    qrisHint: "The QR code will appear here.",
    qrisSteps: [
      "On this page choose **QRIS**, then tap **Send donation**.",
      "The next screen shows the amount so you can check it.",
      "When the amount looks right, **scan the QR code** with an e-wallet or mobile banking app that supports QRIS.",
      "If this page and the payment app are on the same device, save a picture of the code and upload it in that app.",
      "Enter your PIN in the app so the payment can continue.",
    ],
    qrisDone: "The donation is in. Message us on WhatsApp",
  },
  faq: {
    title: "FAQ",
    heading: "Questions people often ask",
    intro: "Short answers on giving, the church, and OpenBook Charity programs.",
    groups: {
      giving: "Giving",
      church: "Church and congregation",
    },
    items: [
      {
        id: "confirm-need",
        question: "Do I need to confirm after transferring a donation?",
        body: "Yes. Confirmation is required to verify your transaction against our bank records. This ensures every donation is recorded accurately and not mixed up with another transfer of the same amount.",
      },
      {
        id: "confirm-how",
        question: "How do I confirm my donation?",
        body: "After transferring via ATM, teller, or mobile banking, send the proof to us on WhatsApp or email with your full name, donation amount, and target program.",
        steps: [
          "Transfer to the official OpenBook Charity account.",
          "Keep the transfer proof from your bank or e-wallet.",
          "Send the proof on WhatsApp or email with your name, amount, and target program.",
        ],
      },
      {
        id: "history",
        question: "Can I monitor my donation history and delivery reports?",
        body: "Yes. You can access the program page you supported anytime to see cost allocation details, disbursement records, field video proof, and remaining balance transparently.",
      },
      {
        id: "why-obc",
        question: "What is the background behind OpenBook Charity?",
        body: "OpenBook Charity was founded by church community leaders responding to the need for openness over collected ministry funds. We provide an open reporting platform so every donor and congregant can ensure funds reach the right recipients accountably.",
      },
      {
        id: "why-silent",
        question: "How does OpenBook Charity help build congregational trust?",
        body: "We provide clear information access for congregants to monitor fund usage and ask questions. With this transparency, congregants can give with full confidence and joy.",
      },
      {
        id: "what-see",
        question: "What information can congregants access after donating?",
        body: "Congregants can monitor budget details, fund disbursement reports, field activity video documentation, and remaining program balance regularly and openly.",
      },
      {
        id: "tithe",
        question: "Can I give tithe or an offering through OpenBook Charity?",
        body: "Yes. Congregants can give tithe, offerings, or special donations directly to specific registered programs. Every allocated fund is recorded separately for your chosen program, not counted as general funds.",
      },
      {
        id: "open-program",
        question: "How can a church or organisation register a program?",
        body: "Organisations can choose Start Raising Funds, then fill in activity details, estimated costs, and target beneficiaries. Once published, congregants can donate and monitor all transaction history and proof of delivery directly.",
      },
    ],
  },
  konfirmasi: {
    title: "Donation Confirmation",
    heading: "Donation Confirmation",
    intro: "Send your transfer proof to ensure your donation is verified accurately.",
    whyTitle: "Why Confirmation Is Needed",
    whyBody:
      "Confirmation helps us match your transaction with our bank records. This ensures every donation is recorded correctly, especially when several donors transfer the same amount.",
    howTitle: "Donation Confirmation Steps",
    steps: [
      "Transfer to the official OpenBook Charity account.",
      "Keep the transaction proof or transfer receipt.",
      "Send the proof via WhatsApp or email with your donation details.",
    ],
    fieldsTitle: "Information to Include",
    fields: {
      name: "Full Name",
      amount: "Transfer Amount",
      program: "Target Program",
      proof: "Transfer Proof",
    },
    whatsappButton: "Confirm via WhatsApp",
    rekeningButton: "View Donation Accounts",
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
