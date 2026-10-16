"use client";

import Link from "next/link";
import { useState } from "react";
import { Sparkles, Menu, X, ArrowUpRight, Lock, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "es", label: "ES", flag: "🇪🇸" },
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "de", label: "DE", flag: "🇩🇪" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2EB]/95 backdrop-blur-md border-b border-[#1A1A1A]/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium tracking-wide">
            <Link
              href="/collections"
              className="text-[#1A1A1A]/80 hover:text-[#4A1521] transition-colors"
            >
              {t.nav.collections}
            </Link>
            <Link
              href="/story"
              className="text-[#1A1A1A]/80 hover:text-[#4A1521] transition-colors"
            >
              {t.nav.story}
            </Link>
            <Link
              href="/sustainability"
              className="text-[#1A1A1A]/80 hover:text-[#4A1521] transition-colors"
            >
              {t.nav.sustainability}
            </Link>
          </nav>

          {/* Central Editorial Brand Logo */}
          <div className="flex-1 text-center md:flex-none">
            <Link href="/" className="inline-block group">
              <span className="font-serif text-3xl sm:text-4xl tracking-tight text-[#1A1A1A] group-hover:text-[#4A1521] transition-colors">
                V-Lush
              </span>
              <span className="block text-[9px] uppercase tracking-[0.3em] text-[#1A1A1A]/60 font-sans -mt-1">
                {t.nav.tagline}
              </span>
            </Link>
          </div>

          {/* Right Action & Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher Pill */}
            <div className="flex items-center bg-[#EFECE6] p-1 rounded-full border border-[#1A1A1A]/10 text-xs">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`px-2.5 py-1 rounded-full text-[11px] font-semibold transition-all ${
                    language === l.code
                      ? "bg-[#4A1521] text-white shadow-sm"
                      : "text-[#1A1A1A]/60 hover:text-[#1A1A1A]"
                  }`}
                  title={`Cambiar idioma a ${l.label}`}
                >
                  <span className="mr-1 text-[10px]">{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>

            <Link
              href="/hub"
              className="inline-flex items-center space-x-1.5 text-xs px-3 py-1.5 rounded-full border border-[#1A1A1A]/20 bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F5F2EB] transition-all"
              title="Portal interno para fundadores"
            >
              <Lock className="w-3 h-3 text-[#4A1521]" />
              <span className="font-medium">{t.nav.hub}</span>
            </Link>

            <Link
              href="/preorder-checkout"
              className="inline-flex items-center space-x-2 bg-[#4A1521] hover:bg-[#360E17] text-[#F5F2EB] px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-medium shadow-sm transition-transform active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#EFECE6]" />
              <span>{t.nav.preorder}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button & Mobile Language Pill */}
          <div className="flex md:hidden items-center space-x-2">
            <div className="flex bg-[#EFECE6] p-0.5 rounded-full border border-[#1A1A1A]/10 text-[10px]">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setLanguage(l.code)}
                  className={`px-2 py-0.5 rounded-full font-bold ${
                    language === l.code ? "bg-[#4A1521] text-white" : "text-[#1A1A1A]/60"
                  }`}
                >
                  {l.label}
                </button>
              ))}
            </div>

            <Link
              href="/hub"
              className="p-1.5 text-xs text-[#1A1A1A] border border-[#1A1A1A]/20 rounded-md"
            >
              <Lock className="w-4 h-4 text-[#4A1521]" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1A1A1A]"
              aria-label={t.nav.menuLabel}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2EB] border-b border-[#1A1A1A]/10 px-6 py-6 space-y-4 animate-fade-in">
          <Link
            href="/collections"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-serif text-[#1A1A1A] hover:text-[#4A1521]"
          >
            {t.nav.collections}
          </Link>
          <Link
            href="/story"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-serif text-[#1A1A1A] hover:text-[#4A1521]"
          >
            {t.nav.story}
          </Link>
          <Link
            href="/sustainability"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-lg font-serif text-[#1A1A1A] hover:text-[#4A1521]"
          >
            {t.nav.sustainability}
          </Link>
          <Link
            href="/hub"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center space-x-2 text-sm text-[#4A1521] font-medium pt-2 border-t border-[#1A1A1A]/10"
          >
            <Lock className="w-4 h-4" />
            <span>{t.nav.hub}</span>
          </Link>
          <div className="pt-2">
            <Link
              href="/preorder-checkout"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center bg-[#4A1521] text-[#F5F2EB] py-3 rounded-full text-sm uppercase tracking-wider font-medium"
            >
              {t.nav.preorder}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
