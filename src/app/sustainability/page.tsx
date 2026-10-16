"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Leaf, Truck, Factory, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SustainabilityPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
              {t.sustainabilityPage.badge}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1A1A] mt-2 mb-4">
              {t.sustainabilityPage.title}
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed font-light">
              {t.sustainabilityPage.desc}
            </p>
          </div>

          {/* Visual Showcase: Moodboard and Packaging */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#1A1A1A]/10 bg-[#EFECE6]">
              <Image
                src="/images/craft/craft-vlush-luxury-box.jpg"
                alt="Packaging de lujo compostable y algodón puro V-Lush"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#4A1521] font-bold">
                {t.sustainabilityPage.cottonBadge}
              </span>
              <h2 className="font-serif text-3xl text-[#1A1A1A]">
                {t.sustainabilityPage.cottonTitle}
              </h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
                {t.sustainabilityPage.cottonP1}
              </p>
              <ul className="space-y-2.5 text-xs text-[#1A1A1A]/85">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>{t.sustainabilityPage.cottonBullet1}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>{t.sustainabilityPage.cottonBullet2}</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>{t.sustainabilityPage.cottonBullet3}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Supply Chain Stages Grid */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-[#4A1521] font-bold">
                {t.sustainabilityPage.traceabilityBadge}
              </span>
              <h3 className="font-serif text-3xl text-[#1A1A1A] mt-1">
                {t.sustainabilityPage.traceabilityTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 overflow-hidden flex flex-col">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src="/images/craft/craft-raw-organic-cotton.jpg"
                    alt={t.sustainabilityPage.step1Title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#DCD4C4] flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <h4 className="font-serif text-lg text-[#1A1A1A]">{t.sustainabilityPage.step1Title}</h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {t.sustainabilityPage.step1Desc}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 overflow-hidden flex flex-col">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src="/images/craft/craft-seamstress-lace.jpg"
                    alt={t.sustainabilityPage.step2Title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#4A1521] text-white flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <h4 className="font-serif text-lg text-[#1A1A1A]">{t.sustainabilityPage.step2Title}</h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {t.sustainabilityPage.step2Desc}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 overflow-hidden flex flex-col">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src="/images/craft/craft-vlush-luxury-box.jpg"
                    alt={t.sustainabilityPage.step3Title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#1A1A1A] text-[#DCD4C4] flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <h4 className="font-serif text-lg text-[#1A1A1A]">{t.sustainabilityPage.step3Title}</h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {t.sustainabilityPage.step3Desc}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 overflow-hidden flex flex-col">
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src="/images/craft/craft-atelier-pattern-table.jpg"
                    alt={t.sustainabilityPage.step4Title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5 space-y-2 flex-1">
                  <div className="w-8 h-8 rounded-full bg-[#4A1521] text-white flex items-center justify-center text-xs font-bold">
                    4
                  </div>
                  <h4 className="font-serif text-lg text-[#1A1A1A]">{t.sustainabilityPage.step4Title}</h4>
                  <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                    {t.sustainabilityPage.step4Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparative Impact Callout */}
          <div className="bg-[#1A1A1A] text-[#F5F2EB] rounded-2xl p-8 sm:p-12 border border-black">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#DCD4C4] font-bold">
                {t.sustainabilityPage.lcaBadge}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                {t.sustainabilityPage.lcaTitle}
              </h3>
              <p className="text-xs sm:text-sm text-[#EFECE6]/80 leading-relaxed">
                {t.sustainabilityPage.lcaDesc}
              </p>
              <div className="pt-4">
                <Link
                  href="/preorder-checkout"
                  className="inline-flex items-center space-x-2 bg-[#F5F2EB] hover:bg-white text-[#1A1A1A] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-md"
                >
                  <span>{t.sustainabilityPage.ctaBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
