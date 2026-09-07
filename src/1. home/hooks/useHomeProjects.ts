import { useQuery } from "@tanstack/react-query";
import type { HomeProject } from "../utils/projectMetrics";

const PROJECTS: HomeProject[] = [
  {
    id: "dimas-harapan",
    title: "Harapan baru untuk Dimas",
    location: "Yogyakarta, DIY",
    raised: 32_850_000,
    goal: 45_000_000,
    healthScore: 78,
  },
  {
    id: "nenek-sari-jagung",
    title: "Bantu Nenek Sari memulai usaha jagung",
    location: "Magelang, Jawa Tengah",
    raised: 21_300_000,
    goal: 30_000_000,
    healthScore: 86,
  },
  {
    id: "sd-air-bersih",
    title: "Air bersih untuk SD Oebelo",
    location: "Kupang, Nusa Tenggara Timur",
    raised: 84_000_000,
    goal: 120_000_000,
    healthScore: 64,
  },
];

export const homeProjectsQuery = {
  queryKey: ["home", "projects"],
  queryFn: async (): Promise<HomeProject[]> => PROJECTS,
};

export function useHomeProjects() {
  return useQuery(homeProjectsQuery);
}
