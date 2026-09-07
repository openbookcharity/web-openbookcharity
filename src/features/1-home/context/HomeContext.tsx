import { createContext, useContext, useMemo, useState, type ReactNode } from "react";

type HomeContextValue = {
  activeProjectId: string | null;
  setActiveProjectId: (id: string | null) => void;
};

const HomeContext = createContext<HomeContextValue | null>(null);

export function HomeProvider({ children }: { children: ReactNode }) {
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null);
  const value = useMemo(
    () => ({ activeProjectId, setActiveProjectId }),
    [activeProjectId],
  );
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

export function useHomeContext() {
  const ctx = useContext(HomeContext);
  if (!ctx) throw new Error("useHomeContext must be used inside <HomeProvider>");
  return ctx;
}
