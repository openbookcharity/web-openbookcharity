export function formatCurrency(amount: number, currency = "IDR", locale = "id-ID") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatCompact(value: number, locale = "id-ID") {
  return new Intl.NumberFormat(locale, { notation: "compact" }).format(value);
}

export function percent(raised: number, goal: number) {
  if (goal <= 0) return 0;
  return Math.min(100, Math.round((raised / goal) * 100));
}
