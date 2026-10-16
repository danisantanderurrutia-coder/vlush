"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StoryPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1">
        {/* Story Hero */}
        <section className="py-20 border-b border-[#1A1A1A]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#4A1521] font-semibold">
              {t.storyPage.badge}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1A1A] leading-tight">
              {t.storyPage.title}
            </h1>
            <p className="text-base sm:text-lg text-[#1A1A1A]/75 font-light leading-relaxed">
              {t.storyPage.subtitle}
            </p>
          </div>
        </section>

        {/* The Founders' Dual Vision */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative space-y-4">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#1A1A1A]/15 bg-[#EFECE6]">
                <Image
                  src="/images/story/story-founders-studio.jpg"
                  alt="Marie y el equipo fundador de V-Lush en su estudio de diseño"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-[#1A1A1A]/10 shadow-sm">
                  <Image
                    src="/images/story/story-pattern-sketching.jpg"
                    alt="Patronaje a mano de la Gyno-Safe Zone"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-[#1A1A1A]/10 shadow-sm">
                  <Image
                    src="/images/story/story-vlush-tag-cotton-hand.jpg"
                    alt="Tacto puro de algodón orgánico crudo V-Lush"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-[#ECE5D8] rounded-xl p-3.5 border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80 text-center font-medium">
                {t.storyPage.photoLabel}
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
                {t.storyPage.intersectionBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
                {t.storyPage.intersectionTitle}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed font-light">
                <p>{t.storyPage.p1}</p>
                <p>{t.storyPage.p2}</p>
                <p>{t.storyPage.p3}</p>
                <p>{t.storyPage.p4}</p>
              </div>

              {/* Quote block */}
              <div className="p-6 rounded-2xl bg-[#ECE5D8] border border-[#4A1521]/20 relative">
                <Quote className="w-8 h-8 text-[#4A1521]/30 absolute top-4 right-4" />
                <p className="font-serif text-lg text-[#4A1521] italic">
                  {t.storyPage.quoteText}
                </p>
                <p className="text-xs text-[#1A1A1A]/60 font-sans mt-2">
                  {t.storyPage.quoteAuthor}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Grid */}
        <section className="bg-[#1A1A1A] text-[#F5F2EB] py-20 border-t border-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs uppercase tracking-[0.25em] text-[#DCD4C4] font-semibold">
                {t.storyPage.pillarsBadge}
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white mt-2">
                {t.storyPage.pillarsTitle}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  1
                </div>
                <h3 className="font-serif text-xl text-white">{t.storyPage.pillar1Title}</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  {t.storyPage.pillar1Desc}
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  2
                </div>
                <h3 className="font-serif text-xl text-white">{t.storyPage.pillar2Title}</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  {t.storyPage.pillar2Desc}
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  3
                </div>
                <h3 className="font-serif text-xl text-white">{t.storyPage.pillar3Title}</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  {t.storyPage.pillar3Desc}
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  4
                </div>
                <h3 className="font-serif text-xl text-white">{t.storyPage.pillar4Title}</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  {t.storyPage.pillar4Desc}
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/collections"
                className="inline-flex items-center space-x-2 bg-[#F5F2EB] hover:bg-white text-[#1A1A1A] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg"
              >
                <span>{t.storyPage.ctaBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
