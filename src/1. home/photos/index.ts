import programKesehatan from "./program-kesehatan.jpg";
import programUsaha from "./program-usaha.jpg";
import programPendidikan from "./program-pendidikan.jpg";
import programLapangan from "./program-lapangan.jpg";
import programPenerima from "./program-penerima.jpg";
import programTerbuka from "./program-terbuka.jpg";
import galleryMagelang from "./gallery-magelang.jpg";
import galleryYogyakarta from "./gallery-yogyakarta.jpg";
import galleryKupang from "./gallery-kupang.jpg";
import galleryCatatan from "./gallery-catatan.jpg";
import projectDimas from "./project-dimas.jpg";
import projectNenekSari from "./project-nenek-sari.jpg";
import projectSdOebelo from "./project-sd-oebelo.jpg";

export const HOME_PROGRAM_PHOTOS: Record<string, string> = {
  kesehatan: programKesehatan,
  usaha: programUsaha,
  pendidikan: programPendidikan,
  lapangan: programLapangan,
  penerima: programPenerima,
  terbuka: programTerbuka,
};

export const HOME_GALLERY_PHOTOS = [
  galleryMagelang,
  galleryYogyakarta,
  galleryKupang,
  galleryCatatan,
] as const;

export const HOME_PROJECT_PHOTOS: Record<string, string> = {
  "dimas-harapan": projectDimas,
  "nenek-sari-jagung": projectNenekSari,
  "sd-air-bersih": projectSdOebelo,
};
