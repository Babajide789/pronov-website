"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  History,
  Building2,
  Users,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavPanelProps = {
  isSignedIn: boolean;
};

export default function NavPanel({ isSignedIn }: NavPanelProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  if (!isSignedIn) return null;

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: ShoppingBag, label: "Sales", href: "/sales" },
    { icon: History, label: "Sales History", href: "/sales-history" },
    { icon: Building2, label: "Branches", href: "/branches" },
    { icon: Users, label: "Users", href: "/users" },
    { icon: Settings, label: "Settings", href: "/settings" },
  ];

  return (
    <>
      {/* Mobile toggle button - Fixed position, always visible on mobile */}
      <button
        className="fixed top-4 left-4 z-50 p-2 bg-green-700 text-white rounded-lg shadow-lg lg:hidden hover:bg-green-800 transition-colors"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle menu"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar - Desktop: Hover to expand, Mobile: Toggle to open */}
      <aside
        className={`
          fixed top-0 left-0 h-screen bg-green-700 text-white z-40
          flex flex-col justify-between
          transition-all duration-300 ease-in-out
          ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          ${isHovered ? "lg:w-64" : "lg:w-20"}
          w-64
          shadow-xl
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Top Section */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="p-4 border-b border-green-600 min-h-[100px] flex flex-col justify-center">
            <div className={`transition-opacity duration-300 ${isHovered ? "lg:opacity-100" : "lg:opacity-0 lg:hidden"}`}>
              <h1 className="text-xl font-bold text-white text-center whitespace-nowrap">
                American Pharma
              </h1>
              <p className="text-center text-green-200 text-sm mt-1 whitespace-nowrap">
                Alausa Branch
              </p>
            </div>
            <div className={`${isHovered ? "lg:hidden" : "lg:flex"} hidden justify-center`}>
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">AP</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-6 px-2">
            <ul className="space-y-2">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.href;

                return (
                  <li key={idx}>
                    <Link
                      href={item.href}
                      className={`
                        flex items-center gap-3 px-4 py-3 rounded-lg 
                        transition-all duration-200
                        ${isActive
                          ? "bg-green-900 text-white shadow-md"
                          : "text-white hover:bg-green-600"
                        }
                        ${isHovered ? "" : "lg:justify-center lg:px-0"}
                      `}
                      title={!isHovered ? item.label : ""}
                    >
                      <item.icon 
                        size={22} 
                        className={`flex-shrink-0 ${isHovered ? "" : "lg:mx-auto"}`}
                      />
                      <span 
                        className={`
                          whitespace-nowrap transition-all duration-300
                          ${isHovered ? "lg:opacity-100 lg:w-auto" : "lg:opacity-0 lg:w-0 lg:hidden"}
                        `}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Logout Section - Bottom */}
        <div className="border-t border-green-600 p-4">
          <a
            href="/logout"
            className={`
              flex items-center gap-3 px-4 py-3 
              text-white hover:bg-red-600 rounded-lg 
              transition-all duration-200
              ${isHovered ? "" : "lg:justify-center lg:px-0"}
            `}
            title={!isHovered ? "Logout" : ""}
          >
            <LogOut 
              size={22} 
              className={`flex-shrink-0 ${isHovered ? "" : "lg:mx-auto"}`}
            />
            <span 
              className={`
                whitespace-nowrap transition-all duration-300
                ${isHovered ? "lg:opacity-100 lg:w-auto" : "lg:opacity-0 lg:w-0 lg:hidden"}
              `}
            >
              Logout
            </span>
          </a>
        </div>
      </aside>

      {/* Overlay for mobile when sidebar is open */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

    </>
  );
}