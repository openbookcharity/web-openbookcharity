export const HOME_SETTINGS = {
  badge: "38 countries · 22,000+ projects funded",
  hero: {
    lines: ["Give directly.", "Raise transparently."],
    emphasis: "See the impact.",
    description:
      "OpenBook connects donors, nonprofit partners, project-based fundraising, video impact updates, and AI-assisted engagement tools in one transparent giving platform.",
    primaryCta: "Partner with Us",
    secondaryCta: "View Platform Overview",
    rating: { score: 4.8, reviews: 2086 },
  },
  stats: [
    { value: "22,000+", label: "Projects funded" },
    { value: "38", label: "Countries reached" },
    { value: "94%", label: "Funds to the field" },
    { value: "6 days", label: "Median update time" },
  ],
  features: [
    {
      title: "Project-based fundraising",
      body: "Every campaign is a specific, costed project — not a vague general fund.",
      icon: "target",
    },
    {
      title: "Video impact updates",
      body: "Field teams record proof from a phone. Donors get it in their feed.",
      icon: "video",
    },
    {
      title: "Open books by default",
      body: "Fees, disbursements, and balances are visible to everyone involved.",
      icon: "book",
    },
    {
      title: "Health score",
      body: "A live score shows how well each partner reports back on funded work.",
      icon: "activity",
    },
  ],
  aiTools: [
    "Draft donor thank-you notes from the latest field update",
    "Summarise a year of project reports into one board-ready page",
    "Flag projects going quiet before donors notice",
  ],
} as const;
