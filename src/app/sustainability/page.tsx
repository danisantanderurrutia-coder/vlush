"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Leaf, ShieldCheck, Truck, Factory, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
              Transparencia Radical
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1A1A] mt-2 mb-4">
              La Cadena de Custodia Ética de V-Lush
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A]/75 leading-relaxed font-light">
              Nuestra política ambiental no es un reclamo publicitario: es un diseño de producto auditado desde el cultivo del algodón hasta el buzón de tu casa.
            </p>
          </div>

          {/* Visual Showcase: Moodboard and Packaging */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative aspect-4/3 rounded-2xl overflow-hidden shadow-xl border border-[#1A1A1A]/10 bg-[#EFECE6]">
              <Image
                src="/images/brand/vlush-moodboard.png"
                alt="Proceso de materiales puros y packaging compostable V-Lush"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#4A1521] font-bold">
                1. EL ALGODÓN ORGÁNICO CRUDO (GOTS)
              </span>
              <h2 className="font-serif text-3xl text-[#1A1A1A]">
                Sin lejía, sin pesticidas, sin tintes azoicos
              </h2>
              <p className="text-sm text-[#1A1A1A]/80 leading-relaxed font-light">
                El algodón convencional requiere hasta 2.700 litros de agua por prenda y tratamientos con cloro químico para blanquear la fibra. Para nuestro puente interior, seleccionamos exclusivamente algodón orgánico virgen sin procesar quimicamente.
              </p>
              <ul className="space-y-2.5 text-xs text-[#1A1A1A]/85">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Certificación GOTS (Global Organic Textile Standard) Grado Médico.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Gramaje denso de 180 gsm que asegura transpiración y durabilidad tras 100 lavados.</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0" />
                  <span>Tono marfil crudo natural: cada pieza conserva la pureza botánica original de la fibra.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Supply Chain Stages Grid */}
          <div className="space-y-8">
            <div className="text-center">
              <span className="text-xs uppercase tracking-widest text-[#4A1521] font-bold">
                Trazabilidad Punto a Punto
              </span>
              <h3 className="font-serif text-3xl text-[#1A1A1A] mt-1">
                De Europa para Europa: Nuestras 4 Estaciones
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Step 1 */}
              <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#DCD4C4] flex items-center justify-center">
                  <Leaf className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl text-[#1A1A1A]">1. Hilatura Limpia</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  <strong>EcoFabrics Iberia (Portugal):</strong> Cultivo regenerativo y tejido del algodón orgánico en máquinas impulsadas por energía solar.
                </p>
              </div>

              {/* Step 2 */}
              <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center">
                  <Factory className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl text-[#1A1A1A]">2. Confección Artesanal</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  <strong>Braga (Portugal) & Łódź (Polonia):</strong> Talleres con tradición centenaria en corsetería y patronaje flatlock, con auditorías laborales SMETA.
                </p>
              </div>

              {/* Step 3 */}
              <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] text-[#DCD4C4] flex items-center justify-center">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl text-[#1A1A1A]">3. Packaging 100% Circular</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  <strong>BioPack EU (Alemania):</strong> Cajas de cartón corrugado FSC sin laminado plástico. Precintos adhesivos de almidón vegetal solubles en agua.
                </p>
              </div>

              {/* Step 4 */}
              <div className="p-6 rounded-2xl bg-[#EFECE6] border border-[#1A1A1A]/10 space-y-3">
                <div className="w-10 h-10 rounded-full bg-[#4A1521] text-white flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <h4 className="font-serif text-xl text-[#1A1A1A]">4. DHL GoGreen</h4>
                <p className="text-xs text-[#1A1A1A]/70 leading-relaxed">
                  <strong>Neutralización de Carbono:</strong> Entrega terrestre eficiente en Alemania (24-48h) y Unión Europea con compensación certificada de GEI.
                </p>
              </div>
            </div>
          </div>

          {/* Comparative Impact Callout */}
          <div className="bg-[#1A1A1A] text-[#F5F2EB] rounded-2xl p-8 sm:p-12 border border-black">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#DCD4C4] font-bold">
                Auditoría del Ciclo de Vida (LCA)
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-white">
                0 gramos de plástico de un solo uso por envío
              </h3>
              <p className="text-xs sm:text-sm text-[#EFECE6]/80 leading-relaxed">
                El promedio de la industria del fast-fashion envía cada braguita envuelta en una bolsa individual de polietileno transparente que tarda 450 años en degradarse. En V-Lush, cada prenda viaja protegida por papel vegetal compostable y un estuche que puedes desechar con las cáscaras de tu cocina.
              </p>
              <div className="pt-4">
                <Link
                  href="/preorder-checkout"
                  className="inline-flex items-center space-x-2 bg-[#F5F2EB] hover:bg-white text-[#1A1A1A] px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold transition-all shadow-md"
                >
                  <span>Reservar Mi Lote Ético</span>
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
