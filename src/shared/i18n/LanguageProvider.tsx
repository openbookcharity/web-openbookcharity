import { useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { messages, type Lang } from "./messages";
import { LanguageContext, type LanguageContextValue } from "./language-context";

const STORAGE_KEY = "obc-lang";

function isLang(value: string | null): value is Lang {
  return value === "id" || value === "en";
}

function localeOf(lang: Lang) {
  return lang === "en" ? "en-US" : "id-ID";
}

const fallback: LanguageContextValue = {
  lang: "id",
  locale: "id-ID",
  setLang: () => {},
  m: messages.id,
};

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
  return useContext(LanguageContext) ?? fallback;
}
