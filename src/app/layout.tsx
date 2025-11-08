import type { Metadata } from "next";
import "./globals.css";
import SidebarWrapper from "@/components/SidebarWrapper";
import { Analytics } from "@vercel/analytics/next";



export const metadata: Metadata = {
  title: "PRONOV",
  description: "Pronov Web Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {/* SidebarWrapper handles client-side logic like usePathname */}
        <SidebarWrapper>{children}</SidebarWrapper>
        <Analytics/>
      </body>
    </html>
  );
}
