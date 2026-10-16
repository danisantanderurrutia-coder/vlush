"use client";

import { useState } from "react";
import Image from "next/image";
import { Sparkles, Shield, Eye, CheckCircle2, AlertTriangle, Layers } from "lucide-react";

export default function FabricComparator() {
  const [activeSide, setActiveSide] = useState<"exterior" | "gusset">("gusset");

  return (
    <section className="py-20 bg-[#EFECE6] border-y border-[#1A1A1A]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
            Innovación Técnica Textil
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-[#1A1A1A] mt-2 mb-4">
            Pura donde importa. Sensual en todo lo demás.
          </h2>
          <p className="text-[#1A1A1A]/70 text-base sm:text-lg leading-relaxed">
            La industria te obligó a elegir entre encajes sintéticos que provocan picor e infecciones, o braguitas de algodón aburridas. En V-Lush rompemos esa falsa dicotomía.
          </p>
        </div>

        {/* Interactive Comparison Card */}
        <div className="bg-[#F5F2EB] rounded-2xl border border-[#1A1A1A]/15 shadow-sm overflow-hidden">
          {/* Switch Controls */}
          <div className="grid grid-cols-2 border-b border-[#1A1A1A]/10">
            <button
              onClick={() => setActiveSide("exterior")}
              className={`py-4 sm:py-5 px-4 text-center font-serif text-base sm:text-xl transition-all flex items-center justify-center space-x-2 ${
                activeSide === "exterior"
                  ? "bg-[#1A1A1A] text-[#F5F2EB] shadow-inner"
                  : "bg-transparent text-[#1A1A1A]/70 hover:text-[#1A1A1A]"
              }`}
            >
              <Eye className="w-4 h-4 text-[#C5A059]" />
              <span>Cara Exterior: Encaje Sensual</span>
            </button>
            <button
              onClick={() => setActiveSide("gusset")}
              className={`py-4 sm:py-5 px-4 text-center font-serif text-base sm:text-xl transition-all flex items-center justify-center space-x-2 ${
                activeSide === "gusset"
                  ? "bg-[#4A1521] text-[#F5F2EB] shadow-inner"
                  : "bg-transparent text-[#1A1A1A]/70 hover:text-[#4A1521]"
              }`}
            >
              <Shield className="w-4 h-4 text-[#ECE5D8]" />
              <span>Cara Interior: Gyno-Safe Zone</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-6 sm:p-10 items-center">
            {/* Visual Image Presentation with interactive zoom preview */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden shadow-md bg-stone-200 border border-[#1A1A1A]/10">
                <Image
                  src={
                    activeSide === "gusset"
                      ? "/images/brand/vlush-hero-grid.jpg"
                      : "/images/brand/vlush-moodboard.png"
                  }
                  alt={
                    activeSide === "gusset"
                      ? "Puente de algodón orgánico crudo Gyno-Safe Zone de V-Lush"
                      : "Encaje sensual exterior V-Lush"
                  }
                  fill
                  className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Floating Badge */}
                <div className="absolute top-4 left-4">
                  {activeSide === "gusset" ? (
                    <span className="inline-flex items-center space-x-1.5 bg-[#F5F2EB]/95 backdrop-blur-md text-[#4A1521] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm border border-[#4A1521]/20">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>100% Algodón Virgen Crudo (GOTS)</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center space-x-1.5 bg-[#1A1A1A]/90 backdrop-blur-md text-[#F5F2EB] text-xs font-semibold px-3.5 py-1.5 rounded-full shadow-sm">
                      <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                      <span>Encaje Satinado de Alta Recuperación</span>
                    </span>
                  )}
                </div>

                {/* Hotspot details overlay on image */}
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-[11px] px-3 py-1.5 rounded-lg flex items-center space-x-1.5">
                  <Layers className="w-3.5 h-3.5 text-[#DCD4C4]" />
                  <span>Doble capa con costura plana invertida</span>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-[#1A1A1A]/60 mt-3 px-1">
                <span>Fotografía real del prototipo Muestra #01</span>
                <span className="font-medium text-[#4A1521]">Taller de Confección: Braga, Portugal</span>
              </div>
            </div>

            {/* Technical Breakdown & Feature List */}
            <div className="lg:col-span-6 space-y-6">
              {activeSide === "gusset" ? (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#4A1521] font-bold">
                      EL CORAZÓN DE V-LUSH
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mt-1">
                      El Puente Íntimo &ldquo;Gyno & Skin-Safe&rdquo;
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/80 mt-2 leading-relaxed">
                      La flora íntima necesita transpiración y un pH equilibrado. Las telas teñidas y sintéticas atrapan el calor y alteran la microbiota. Nuestro puente es un santuario biológico.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white/70 border border-[#4A1521]/15 flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                          Ancho Ergonómico Extra (8.2 cm vs 4.5 cm)
                        </h4>
                        <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                          Cubre por completo la zona vulvar y mucosa sin deslizarse hacia los lados, evitando que los encajes toquen directamente tu piel más delicada.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/70 border border-[#4A1521]/15 flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                          Cero Blanqueadores, Cero Tintes Sintéticos
                        </h4>
                        <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                          Algodón virgen en su tono crudo marfil natural (puedes ver diminutas motas de la planta de algodón en el tejido). Libre de químicos azoicos y formaldehídos.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/70 border border-[#4A1521]/15 flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                          Costuras Planas Invertidas (Flatlock Seamless)
                        </h4>
                        <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                          El borde del forro queda oculto y sellado hacia el exterior. Cero roces con la ingle al caminar, entrenar o sentarte.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-5 animate-fade-in">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-[#1A1A1A]/60 font-bold">
                      DISEÑO Y ERGONOMÍA EXTERIOR
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mt-1">
                      Encajes Soft-Touch y Siluetas Esculturales
                    </h3>
                    <p className="text-sm text-[#1A1A1A]/80 mt-2 leading-relaxed">
                      El hecho de que sea saludable no significa que tenga que parecer una prenda ortopédica. Nuestras siluetas son sensuales, sofisticadas y celebran la diversidad corporal.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-white/70 border border-[#1A1A1A]/10 flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                          Encaje Geométrico y Floral Sin Picor
                        </h4>
                        <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                          Poliamida reciclada ultrafina con elastano de memoria que se adapta a las caderas sin clavarse ni provocar rojeces.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/70 border border-[#1A1A1A]/10 flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                          Línea Femenina + Línea Unisex / Fluid
                        </h4>
                        <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                          Patrones específicos para diferentes anatomías: desde cortes Cheeky y Thong de impacto, hasta bóxers translúcidos body-affirming.
                        </p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/70 border border-[#1A1A1A]/10 flex items-start space-x-3">
                      <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A]">
                          Detalles Satinados y Herrajes Seguros
                        </h4>
                        <p className="text-xs text-[#1A1A1A]/70 mt-0.5">
                          Acentos en borgoña profundo y negro grafito con anillas hipoalergénicas 100% libres de níquel.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Side-by-side Comparative Micro-Table */}
              <div className="pt-2">
                <div className="bg-[#ECE5D8]/70 rounded-xl p-4 border border-[#1A1A1A]/10">
                  <div className="flex items-center justify-between text-xs font-medium pb-2 border-b border-[#1A1A1A]/10">
                    <span className="text-[#1A1A1A]/60">Parámetro Clínico</span>
                    <span className="text-rose-900 flex items-center">
                      <AlertTriangle className="w-3 h-3 mr-1" /> Convencional
                    </span>
                    <span className="text-[#4A1521] font-bold">V-Lush Atelier</span>
                  </div>
                  <div className="divide-y divide-[#1A1A1A]/5 text-xs">
                    <div className="py-2 flex justify-between">
                      <span className="text-[#1A1A1A]/80">Ancho del puente</span>
                      <span className="text-[#1A1A1A]/60">4.0 - 5.0 cm</span>
                      <span className="font-semibold text-[#4A1521]">8.2 - 9.5 cm</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-[#1A1A1A]/80">Blanqueo de tejido</span>
                      <span className="text-[#1A1A1A]/60">Cloro / Óptico sintético</span>
                      <span className="font-semibold text-emerald-800">100% Crudo virgen</span>
                    </div>
                    <div className="py-2 flex justify-between">
                      <span className="text-[#1A1A1A]/80">Respeto al microbioma</span>
                      <span className="text-[#1A1A1A]/60">Medio / Bajo</span>
                      <span className="font-semibold text-emerald-800">Óptimo (pH 5.5)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
