import { formatCurrency, percent } from "@/shared/utils/format";

export type HomeProject = {
  id: string;
  title: string;
  location: string;
  raised: number;
  goal: number;
  healthScore: number;
};

export function fundedLabel(project: HomeProject) {
  return `${percent(project.raised, project.goal)}% funded`;
}

export function raisedLabel(project: HomeProject) {
  return `${formatCurrency(project.raised)} raised`;
}

export function healthTone(score: number) {
  if (score >= 80) return "text-mint";
  if (score >= 60) return "text-chart-4";
  return "text-primary";
}
