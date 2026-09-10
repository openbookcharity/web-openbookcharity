import galleryLaporan from "./gallery-laporan.jpg";
import gallerySerahTerima from "./gallery-serah-terima.jpg";
import galleryKegiatan from "./gallery-kegiatan.jpg";
import gallerySkor from "./gallery-skor.jpg";
import funnelDonatur from "./funnel-donatur.jpg";
import funnelLembaga from "./funnel-lembaga.jpg";
import funnelPenerima from "./funnel-penerima.jpg";
import churchGiving from "./church-giving.jpg";

export const WHY_GALLERY_PHOTOS = [
  galleryLaporan,
  gallerySerahTerima,
  galleryKegiatan,
  gallerySkor,
] as const;

export const WHY_FUNNEL_PHOTOS = [
  funnelDonatur,
  funnelLembaga,
  funnelPenerima,
] as const;

export const WHY_PROBLEM_PHOTO = churchGiving;
