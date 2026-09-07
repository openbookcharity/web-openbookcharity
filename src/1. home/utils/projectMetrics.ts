import { formatCurrency, percent } from "./format";

export type HomeProject = {
  id: string;
  title: string;
  location: string;
  raised: number;
  goal: number;
  healthScore: number;
};

export function fundedLabel(project: HomeProject, raisedWord: string) {
  return `${percent(project.raised, project.goal)}% ${raisedWord}`;
}

export function raisedLabel(project: HomeProject, raisedWord: string, locale = "id-ID") {
  return `${formatCurrency(project.raised, "IDR", locale)} ${raisedWord}`;
}

export function healthTone(score: number) {
  if (score >= 80) return "text-secondary";
  if (score >= 60) return "text-navy";
  return "text-accent";
}
