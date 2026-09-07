import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messages, type Lang, type Messages } from "./messages";

const STORAGE_KEY = "obc-lang";

type LanguageContextValue = {
  lang: Lang;
  locale: string;
  setLang: (lang: Lang) => void;
  m: Messages;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function isLang(value: string | null): value is Lang {
  return value === "id" || value === "en";
}

function localeOf(lang: Lang) {
  return lang === "en" ? "en-US" : "id-ID";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLang(saved)) {
      setLangState(saved);
      document.documentElement.lang = saved;
      return;
    }
    document.documentElement.lang = "id";
  }, []);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }, []);

  const value = useMemo(
    () => ({
      lang,
      locale: localeOf(lang),
      setLang,
      m: messages[lang],
    }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useI18n must be used within LanguageProvider");
  return ctx;
}
