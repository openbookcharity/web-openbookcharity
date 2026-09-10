import programKesehatan from "./program-kesehatan.jpg";
import programPendidikan from "./program-pendidikan.jpg";
import programLapangan from "./program-lapangan.jpg";
import programKeagamaan from "./program-keagamaan.jpg";
import programDhuafa from "./program-dhuafa.jpg";
import programDisabilitas from "./program-disabilitas.jpg";
import galleryMagelang from "./gallery-magelang.jpg";
import galleryYogyakarta from "./gallery-yogyakarta.jpg";
import galleryKupang from "./gallery-kupang.jpg";
import galleryCatatan from "./gallery-catatan.jpg";
import projectDimas from "./project-dimas.jpg";
import projectNenekSari from "./project-nenek-sari.jpg";
import projectSdOebelo from "./project-sd-oebelo.jpg";

export const HOME_PROGRAM_PHOTOS: Record<string, string> = {
  kesehatan: programKesehatan,
  pendidikan: programPendidikan,
  lapangan: programLapangan,
  keagamaan: programKeagamaan,
  dhuafa: programDhuafa,
  disabilitas: programDisabilitas,
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

/** Poster thumbnails for hero video carousel slides (index matches heroVideos). */
export const HOME_HERO_VIDEO_POSTERS = [
  projectNenekSari,
  projectDimas,
  projectSdOebelo,
] as const;

/** Optional video sources — add files under public/videos/ and set paths here. */
export const HOME_HERO_VIDEO_SOURCES: (string | undefined)[] = [
  undefined,
  undefined,
  undefined,
];
