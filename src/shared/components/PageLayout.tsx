import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen max-w-full flex-col overflow-x-clip">
      <SiteHeader />
      <main className="min-w-0 flex-1 overflow-x-clip">{children}</main>
      <SiteFooter />
    </div>
  );
}
