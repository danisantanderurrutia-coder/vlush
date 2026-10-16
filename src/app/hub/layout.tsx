"use client";

import { useState } from "react";
import HubSidebar from "@/components/layout/HubSidebar";
import { Menu, X, Sparkles, Bell, ExternalLink, Shield } from "lucide-react";
import Link from "next/link";

export default function HubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0F12] text-[#E1E4EA] flex font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <HubSidebar />
      </div>

      {/* Mobile Drawer */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative z-10 w-64">
            <HubSidebar onCloseMobile={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        {/* Top Hub Bar */}
        <header className="h-16 bg-[#14161D]/90 backdrop-blur-md border-b border-[#262A36] px-4 sm:px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileSidebarOpen(true)}
              className="lg:hidden p-2 text-[#A0A7B8] hover:text-white rounded-lg hover:bg-[#1E222D]"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="hidden sm:flex items-center space-x-2 text-xs text-[#7E8699]">
              <span className="font-semibold text-white">V-Lush OS</span>
              <span>/</span>
              <span>Lanzamiento Campaña Preventa 2026</span>
            </div>
          </div>

          {/* Quick Metrics Ticker */}
          <div className="flex items-center space-x-4 text-xs">
            <div className="hidden md:flex items-center space-x-2 bg-[#1C202B] px-3 py-1.5 rounded-full border border-[#2B303F]">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-[#A0A7B8]">Meta MOQ Taller:</span>
              <strong className="text-white">45% (45/100)</strong>
            </div>

            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center space-x-1.5 text-xs text-[#DCD4C4] hover:text-white bg-[#4A1521]/60 px-3 py-1.5 rounded-full border border-[#4A1521]"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tienda Online</span>
            </Link>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
