export type NavLink = { label: string; to: string };

export const NAV_LINKS: NavLink[] = [
  { label: "Platform", to: "/platform" },
  { label: "AI Tools", to: "/ai-tools" },
  { label: "Why OpenBook", to: "/why-openbook" },
  { label: "About Us", to: "/about" },
];

export const FOOTER_LINKS: { title: string; links: NavLink[] }[] = [
  {
    title: "Platform",
    links: [
      { label: "Overview", to: "/platform" },
      { label: "AI Tools", to: "/ai-tools" },
      { label: "Why OpenBook", to: "/why-openbook" },
    ],
  },
  {
    title: "Organisation",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Partner with Us", to: "/partner" },
    ],
  },
];
