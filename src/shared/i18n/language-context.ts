import { createContext } from "react";
import type { Lang, Messages } from "./messages";

export type LanguageContextValue = {
  lang: Lang;
  locale: string;
  setLang: (lang: Lang) => void;
  m: Messages;
};

/** Stable module so HMR of messages.ts does not create a new context identity. */
export const LanguageContext = createContext<LanguageContextValue | null>(null);
