"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Leaf, HeartHandshake, Truck, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Language } from "@/lib/translations";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "de", label: "Deutsch", flag: "🇩🇪" },
  ];

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F2EB] pt-16 pb-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Value Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/10 text-xs text-[#EFECE6]/80">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">{t.footer.badge1Title}</p>
              <p className="text-[11px] text-white/60">{t.footer.badge1Desc}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Leaf className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">{t.footer.badge2Title}</p>
              <p className="text-[11px] text-white/60">{t.footer.badge2Desc}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <HeartHandshake className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">{t.footer.badge3Title}</p>
              <p className="text-[11px] text-white/60">{t.footer.badge3Desc}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">{t.footer.badge4Title}</p>
              <p className="text-[11px] text-white/60">{t.footer.badge4Desc}</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          {/* Brand Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-tight text-[#F5F2EB]">
                V-Lush
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#DCD4C4] font-sans">
                {t.footer.tagline}
              </span>
            </Link>
            <p className="text-sm text-[#EFECE6]/70 leading-relaxed max-w-sm">
              {t.footer.bio}
            </p>
            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>📍 {t.footer.designIn}</p>
              <p>🌱 {t.footer.certifiedGots}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DCD4C4] font-semibold">
              {t.footer.exploreTitle}
            </h4>
            <ul className="space-y-2 text-sm text-[#EFECE6]/80">
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  {t.footer.catalogLink}
                </Link>
              </li>
              <li>
                <Link href="/collections?line=female" className="hover:text-white transition-colors">
                  {t.footer.femaleLink}
                </Link>
              </li>
              <li>
                <Link href="/collections?line=unisex" className="hover:text-white transition-colors">
                  {t.footer.unisexLink}
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-white transition-colors">
                  {t.footer.manifestoLink}
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors">
                  {t.footer.sustainabilityLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Hub & Governance */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DCD4C4] font-semibold">
              {t.footer.governanceTitle}
            </h4>
            <ul className="space-y-2 text-sm text-[#EFECE6]/80">
              <li>
                <Link href="/hub" className="text-[#DCD4C4] hover:text-white flex items-center space-x-1 font-medium">
                  <span>{t.footer.hubLink}</span>
                </Link>
              </li>
              <li>
                <Link href="/hub/dossier" className="hover:text-white transition-colors">
                  {t.footer.dossierLink}
                </Link>
              </li>
              <li>
                <Link href="/hub/supply-chain" className="hover:text-white transition-colors">
                  {t.footer.samplesLink}
                </Link>
              </li>
              <li>
                <Link href="/hub/finances" className="hover:text-white transition-colors">
                  {t.footer.financesLink}
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Early Access */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DCD4C4] font-semibold">
              {t.footer.newsletterTitle}
            </h4>
            <p className="text-xs text-[#EFECE6]/70">
              {t.footer.newsletterDesc}
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-white/10 text-white placeholder-white/40 text-xs px-3.5 py-2.5 rounded-lg border border-white/20 focus:outline-none focus:border-[#DCD4C4]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#4A1521] hover:bg-[#6E2232] text-white px-3 rounded-md text-xs font-medium flex items-center space-x-1"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400">
                  {t.footer.newsletterSuccess}
                </p>
              )}
            </form>

            {/* Language Switcher in Footer */}
            <div className="pt-3">
              <span className="text-[10px] uppercase tracking-wider text-white/50 block mb-1.5">
                Idioma / Language / Sprache:
              </span>
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => setLanguage(l.code)}
                    className={`text-xs px-2.5 py-1 rounded-md transition-colors ${
                      language === l.code
                        ? "bg-[#4A1521] text-white font-bold"
                        : "bg-white/10 text-white/70 hover:text-white"
                    }`}
                  >
                    <span className="mr-1">{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>© {t.footer.copyright}</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span>{t.footer.shippingEu}</span>
            <Link href="/story" className="hover:text-white">{t.footer.legalLink}</Link>
            <Link href="/hub" className="hover:text-white">{t.footer.privateLink}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
