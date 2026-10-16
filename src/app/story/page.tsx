"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, Shield, Heart, ArrowRight, Quote } from "lucide-react";

export default function StoryPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1">
        {/* Story Hero */}
        <section className="py-20 border-b border-[#1A1A1A]/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <span className="text-xs uppercase tracking-[0.3em] text-[#4A1521] font-semibold">
              Origen & Manifiesto
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1A1A] leading-tight">
              Nacimos para desterrar el dolor de la sensualidad
            </h1>
            <p className="text-base sm:text-lg text-[#1A1A1A]/75 font-light leading-relaxed">
              Durante décadas, la industria de la lencería dividió el mundo en dos extremos crueles: prendas ortopédicas de algodón sin deseo, o piezas eróticas de plástico que arruinan la flora genital.
            </p>
          </div>
        </section>

        {/* The Founders' Dual Vision */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-2xl border border-[#1A1A1A]/15 bg-[#EFECE6]">
                <Image
                  src="/images/brand/vlush-hero-grid.jpg"
                  alt="Marie y el equipo de diseño de V-Lush"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="bg-[#ECE5D8] rounded-xl p-4 mt-4 border border-[#1A1A1A]/10 text-xs text-[#1A1A1A]/80 text-center">
                Estudio de prototipado & patronaje anatómico • Berlín & Braga
              </div>
            </div>

            {/* Narrative text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
                La Intersección Humana
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
                Psicología del Bienestar y Rigor Ambiental
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#1A1A1A]/80 leading-relaxed font-light">
                <p>
                  <strong>Marie</strong> estudió Administración de Empresas y Psicología. En sus investigaciones y en conversaciones íntimas con amigas y compañeras, observó un patrón recurrente y silenciado: casi todas las personas que vestían lencería sexy de encaje sufrían dermatitis por contacto, infecciones recurrentes por cándida o rozaduras en los pliegues inguinales. La respuesta médica convencional era siempre la misma: <em>&ldquo;Usa solo braguitas básicas de abuela de algodón blanco&rdquo;</em>.
                </p>
                <p>
                  Para Marie, eso significaba pedirle a las personas que renunciaran a su deseo, a su erotismo y a su autoestima.
                </p>
                <p>
                  Por su parte, su <strong>socio y cofundador</strong>, especialista en Gestión y Protección Ambiental, estaba cansado de la hipocresía del <em>greenwashing</em>: marcas que cobran 70 € por un conjunto de poliéster virgen fabricado en condiciones laborales precarias y envuelto en bolsas plásticas no biodegradables.
                </p>
                <p>
                  Juntos decidieron formular una regla inviolable: <strong>V-Lush</strong> sólo existiría si podíamos crear lencería visualmente arrebatadora con un puente anatómico 100% puro, hipoalergénico y con una cadena de custodia europea totalmente limpia.
                </p>
              </div>

              {/* Quote block */}
              <div className="p-6 rounded-2xl bg-[#ECE5D8] border border-[#4A1521]/20 relative">
                <Quote className="w-8 h-8 text-[#4A1521]/30 absolute top-4 right-4" />
                <p className="font-serif text-lg text-[#4A1521] italic">
                  &ldquo;La piel vulvar tiene una tasa de absorción 5 veces más rápida que el resto del cuerpo. Lo que pones sobre ella no es solo moda: es salud biológica.&rdquo;
                </p>
                <p className="text-xs text-[#1A1A1A]/60 font-sans mt-2">
                  — Marie, Co-Fundadora de V-Lush
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
                Nuestros Pilares
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl text-white mt-2">
                Los 4 Compromisos Inquebrantables
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  1
                </div>
                <h3 className="font-serif text-xl text-white">Gyno-Safe Zone</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  Puente interior de 8.2 cm de algodón orgánico crudo GOTS, sin tintes químicos, sin blanqueadores clóricos y con pH neutro.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  2
                </div>
                <h3 className="font-serif text-xl text-white">Inclusividad Real</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  Línea femenina y línea unisex/fluid adaptada a cualquier corporalidad y expresión queer, sin clichés ni prendas incómodas.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  3
                </div>
                <h3 className="font-serif text-xl text-white">Talleres Éticos</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  Confección de alta costura en talleres tradicionales de Braga (Portugal) y Łódź (Polonia) con contratos justos y artesanía rigurosa.
                </p>
              </div>

              <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center font-serif text-lg">
                  4
                </div>
                <h3 className="font-serif text-xl text-white">Circularidad 100%</h3>
                <p className="text-xs text-[#EFECE6]/70 leading-relaxed">
                  Packaging 100% compostable sin plástico y envíos neutralizados en carbono a través de DHL GoGreen en toda la UE.
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <Link
                href="/collections"
                className="inline-flex items-center space-x-2 bg-[#F5F2EB] hover:bg-white text-[#1A1A1A] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-lg"
              >
                <span>Descubre la Colección de Preventa</span>
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
