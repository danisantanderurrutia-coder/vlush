"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutFounder } from "@/lib/services";
import {
  LayoutDashboard,
  FileText,
  Boxes,
  Megaphone,
  Wallet,
  KanbanSquare,
  ExternalLink,
  LogOut,
  Sparkles,
  ShieldAlert,
} from "lucide-react";

interface HubSidebarProps {
  onCloseMobile?: () => void;
}

export default function HubSidebar({ onCloseMobile }: HubSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    {
      label: "Visión General (KPIs)",
      href: "/hub",
      icon: LayoutDashboard,
      badge: "En vivo",
    },
    {
      label: "Dossier del Proyecto",
      href: "/hub/dossier",
      icon: FileText,
    },
    {
      label: "Cadena de Suministro",
      href: "/hub/supply-chain",
      icon: Boxes,
      badge: "Muestras #2",
    },
    {
      label: "Campañas & Prompts IA",
      href: "/hub/campaigns",
      icon: Megaphone,
    },
    {
      label: "Control de Finanzas",
      href: "/hub/finances",
      icon: Wallet,
      badge: "1.000 €",
    },
    {
      label: "Tablero Kanban",
      href: "/hub/tasks",
      icon: KanbanSquare,
    },
  ];

  const handleLogout = () => {
    logoutFounder();
    router.push("/hub/login");
  };

  return (
    <aside className="w-64 bg-[#14161D] border-r border-[#262A36] text-[#A0A7B8] flex flex-col justify-between shrink-0 h-screen sticky top-0">
      <div>
        {/* Brand Header */}
        <div className="h-16 px-6 flex items-center justify-between border-b border-[#262A36]">
          <Link href="/hub" className="flex items-center space-x-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              V-Lush
            </span>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#4A1521] text-white font-semibold">
              HUB v1.0
            </span>
          </Link>
        </div>

        {/* Founder Context Tag */}
        <div className="p-4 mx-3 my-3 rounded-xl bg-[#1C202B] border border-[#2B303F] text-xs">
          <div className="flex items-center justify-between text-white font-medium">
            <span>Área de Fundadores</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          </div>
          <p className="text-[11px] text-[#7E8699] mt-0.5">
            Marie (Mgmt/Psicología) & Socio (Ambiental)
          </p>
        </div>

        {/* Navigation list */}
        <nav className="px-3 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? "bg-[#4A1521] text-white shadow-sm font-semibold"
                    : "hover:bg-[#1E222D] hover:text-white"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon className={`w-4 h-4 ${isActive ? "text-[#ECE5D8]" : "text-[#7E8699]"}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] px-1.5 py-0.5 rounded font-mono font-bold ${
                      isActive ? "bg-black/30 text-white" : "bg-[#272B36] text-[#A0A7B8]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Actions */}
      <div className="p-4 border-t border-[#262A36] space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-xs text-[#A0A7B8] hover:text-white hover:bg-[#1E222D] transition-colors"
        >
          <div className="flex items-center space-x-2">
            <ExternalLink className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Ver Tienda Pública</span>
          </div>
          <span className="text-[10px] text-[#7E8699]">Pre-Order</span>
        </Link>

        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 w-full px-3 py-2 rounded-lg text-xs text-rose-400 hover:bg-rose-950/40 transition-colors"
        >
          <LogOut className="w-3.5 h-3.5" />
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  );
}
