export const FAQ_SETTINGS = {
  groups: [
    {
      id: "giving",
      items: ["confirm-need", "confirm-how", "history", "direct-transfer-visible", "gateway-vs-bank"],
    },
    { id: "church", items: ["why-obc", "why-silent", "what-see", "tithe", "open-program"] },
  ],
  items: [
    { id: "confirm-need" },
    { id: "confirm-how", whatsapp: true, email: true, rekening: true },
    { id: "history" },
    { id: "direct-transfer-visible" },
    { id: "gateway-vs-bank" },
    { id: "why-obc" },
    { id: "why-silent" },
    { id: "what-see" },
    { id: "tithe" },
    { id: "open-program" },
  ],
} as const;
