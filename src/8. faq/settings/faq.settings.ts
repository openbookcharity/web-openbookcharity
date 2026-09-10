export const FAQ_SETTINGS = {
  groups: [
    { id: "giving", items: ["confirm-need", "confirm-how", "history"] },
    { id: "church", items: ["why-obc", "why-silent", "what-see", "tithe", "open-program"] },
  ],
  items: [
    { id: "confirm-need" },
    { id: "confirm-how", whatsapp: true, email: true, rekening: true },
    { id: "history" },
    { id: "why-obc" },
    { id: "why-silent" },
    { id: "what-see" },
    { id: "tithe" },
    { id: "open-program" },
  ],
} as const;
