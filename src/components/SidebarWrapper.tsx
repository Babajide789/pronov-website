"use client";

import { usePathname } from "next/navigation";
import NavPanel from "./NavsidePanel";

export default function SidebarWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Pages where sidebar should NOT display
  const noSidebarPages = ["/signin", "/signup", "/create-account", "/forgot-pin", "reset-pin", "/OTP", "business-details"];
  const isSidebarVisible = !noSidebarPages.includes(pathname);
  const isSignedIn = isSidebarVisible;

  if (isSidebarVisible) {
    return (
      <div className="flex min-h-screen bg-gray-50">
        <NavPanel isSignedIn={isSignedIn} />
        <main className="flex-1 min-h-screen lg:pl-20 w-full">
          <div className="w-full h-full lg:p-8 p-4 pt-20 lg:pt-8">{children}</div>
        </main>
      </div>
    );
  }

  return <>{children}</>;
}
