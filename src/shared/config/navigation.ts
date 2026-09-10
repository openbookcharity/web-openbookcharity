/** Header nav labels stay English regardless of locale toggle. */
export const NAV_LINKS = [
  { key: "home" as const, to: "/", label: "Home" },
  { key: "about" as const, to: "/about", label: "About Us" },
  { key: "why" as const, to: "/why-openbook", label: "Why Us" },
  { key: "platform" as const, to: "/program", label: "Program" },
  { key: "community" as const, to: "/community", label: "Community" },
  { key: "faq" as const, to: "/faq", label: "FAQ" },
] as const;
