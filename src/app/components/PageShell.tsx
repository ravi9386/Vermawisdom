import { ReactNode } from "react";
import { TopNavigation } from "./TopNavigation";
import { Footer } from "./Footer";

export function PageShell({
  children,
  maxWidth = "max-w-3xl",
}: {
  children: ReactNode;
  maxWidth?: string;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopNavigation />
      <main className="flex-1 px-6 py-16">
        <div className={`${maxWidth} mx-auto w-full`}>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
