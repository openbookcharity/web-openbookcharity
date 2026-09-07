import { useQuery } from "@tanstack/react-query";
import type { HomeProject } from "../utils/projectMetrics";

const PROJECTS: HomeProject[] = [
  {
    id: "clement-freedom",
    title: "Clement's Freedom",
    location: "Lilongwe, Malawi",
    raised: 2190,
    goal: 3000,
    healthScore: 78,
  },
  {
    id: "grace-maize",
    title: "Help Grace's Grandmother Start a Maize Business",
    location: "Kasungu, Malawi",
    raised: 1420,
    goal: 2000,
    healthScore: 86,
  },
  {
    id: "school-water",
    title: "Clean Water for Mtendere Primary School",
    location: "Zomba, Malawi",
    raised: 5600,
    goal: 8000,
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
