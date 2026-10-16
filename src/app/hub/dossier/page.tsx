"use client";

import { useState } from "react";
import {
  FileText,
  Shield,
  Layers,
  TrendingUp,
  Search,
  CheckCircle2,
  Printer,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function HubDossierPage() {
  const [activeTab, setActiveTab] = useState<string>("executive");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const sections = [
    {
      id: "executive",
      title: "1. Resumen Ejecutivo & Tesis de Inversión",
      icon: TrendingUp,
    },
    {
      id: "anatomy",
      title: "2. Definición Técnica: Gyno & Skin-Safe Zone",
      icon: Shield,
    },
    {
      id: "operations",
      title: "3. Operaciones & Talleres en Europa",
      icon: Layers,
    },
    {
      id: "economics",
      title: "4. Plan Financiero & Unit Economics",
      icon: FileText,
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262A36]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
            CONFIDENCIAL • DOCUMENTO OFICIAL PARA FUNDADORES E INVERSORES
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
            Dossier Maestro del Proyecto V-Lush
          </h1>
          <p className="text-xs text-[#8E95A5] mt-1">
            Estrategia de marca, especificación técnica de patronaje íntimo y hoja de ruta comercial.
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center space-x-2 text-xs bg-[#1C202B] hover:bg-[#262A36] text-white px-4 py-2.5 rounded-xl border border-[#2B303F] transition-colors"
        >
          <Printer className="w-4 h-4 text-[#C5A059]" />
          <span>Imprimir / Exportar PDF</span>
        </button>
      </div>

      {/* Tabs navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-[#14161D] p-2 rounded-2xl border border-[#262A36]">
        {sections.map((sec) => {
          const Icon = sec.icon;
          const isActive = activeTab === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => setActiveTab(sec.id)}
              className={`p-3 rounded-xl text-left transition-all flex items-center space-x-2.5 ${
                isActive
                  ? "bg-[#4A1521] text-white shadow-md font-semibold"
                  : "text-[#8E95A5] hover:text-white hover:bg-[#1E222D]"
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-[#ECE5D8]" : "text-[#7E8699]"}`} />
              <span className="text-xs truncate">{sec.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Dossier Content */}
      <div className="bg-[#14161D] rounded-2xl border border-[#262A36] p-6 sm:p-10 space-y-8">
        {activeTab === "executive" && (
          <div className="space-y-6 animate-fade-in text-sm text-[#C5CBD8] leading-relaxed">
            <div className="border-b border-[#262A36] pb-4">
              <span className="text-xs font-mono uppercase text-[#C5A059] font-bold">
                SECCIÓN 1 / 4
              </span>
              <h2 className="text-2xl font-serif text-white font-bold mt-1">
                Resumen Ejecutivo & Oportunidad de Mercado
              </h2>
              <p className="text-xs text-[#8E95A5] mt-1">
                Fundadores: Marie (Business & Psicología) y Socio (Protección Ambiental)
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1C202B] border border-[#2B303F] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  El Problema Silenciado (Pain Point)
                </span>
                <p className="text-xs text-[#8E95A5] leading-relaxed">
                  El <strong>78% de las personas usuarias de lencería erótica</strong> experimentan rozaduras, candidiasis recurrente o dermatitis por contacto causadas por el uso de nylon rígido, microplásticos y puentes íntimos demasiado estrechos (4 cm) teñidos con tintes químicos azoicos.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#1C202B] border border-[#2B303F] space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  La Solución V-Lush
                </span>
                <p className="text-xs text-[#8E95A5] leading-relaxed">
                  Fusión radical: encajes florales y geométricos exteriores de alta gama con un <strong>puente interior ensanchado de 100% algodón orgánico crudo sin teñir ni blanquear</strong> (&ldquo;Gyno & Skin-Safe Zone&rdquo;). Máxima sensualidad con cero peaje ginecológico.
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <h3 className="text-base font-serif font-bold text-white">
                Validación y Tracción Temprana
              </h3>
              <ul className="space-y-2 text-xs text-[#A0A7B8]">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>45/100 unidades reservadas</strong> en el Lote Piloto con ticket promedio de 34 €.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    <strong>Presupuesto inicial de 1.000 €</strong> optimizado al milímetro con cashflow neto positivo de lanzamiento.
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Cero inversión publicitaria de pago hasta la fecha (crecimiento 100% orgánico en comunidad de Berlín y redes sociales).
                  </span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "anatomy" && (
          <div className="space-y-6 animate-fade-in text-sm text-[#C5CBD8] leading-relaxed">
            <div className="border-b border-[#262A36] pb-4">
              <span className="text-xs font-mono uppercase text-[#C5A059] font-bold">
                SECCIÓN 2 / 4
              </span>
              <h2 className="text-2xl font-serif text-white font-bold mt-1">
                Especificación Técnica: Anatomía de la &ldquo;Gyno & Skin-Safe Zone&rdquo;
              </h2>
              <p className="text-xs text-[#8E95A5] mt-1">
                Patronaje registrado con costura invertida flatlock y forro biológico virgen
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-[#1C202B] border border-[#2B303F] space-y-3">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                  Despiece Estructural del Gusset Íntimo
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-3 bg-[#14161D] rounded-xl border border-[#262A36]">
                    <span className="text-[#C5A059] font-mono font-bold block">ANCHO ANATÓMICO</span>
                    <p className="text-white font-bold text-lg mt-1">8.2 cm - 9.5 cm</p>
                    <p className="text-[11px] text-[#8E95A5] mt-0.5">
                      Frente a los 4.5 cm de marcas como Victoria&apos;s Secret o Savage X.
                    </p>
                  </div>
                  <div className="p-3 bg-[#14161D] rounded-xl border border-[#262A36]">
                    <span className="text-[#C5A059] font-mono font-bold block">QUÍMICA TEXTIL</span>
                    <p className="text-white font-bold text-lg mt-1">pH 5.5 Neutro</p>
                    <p className="text-[11px] text-[#8E95A5] mt-0.5">
                      Sin cloros, sin blanqueadores ópticos y sin tintes azoicos cancerígenos.
                    </p>
                  </div>
                  <div className="p-3 bg-[#14161D] rounded-xl border border-[#262A36]">
                    <span className="text-[#C5A059] font-mono font-bold block">COSTURA INVERTIDA</span>
                    <p className="text-white font-bold text-lg mt-1">Flatlock 4 Hilos</p>
                    <p className="text-[11px] text-[#8E95A5] mt-0.5">
                      El reborde queda cerrado hacia el exterior: cero fricción en la mucosa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#4A1521]/20 border border-[#4A1521]/40 text-xs text-[#ECE5D8] space-y-1">
                <span className="font-bold text-white">Consejo Ginecológico Integrado:</span>
                <p>
                  Los ensayos clínicos demuestran que las fibras sintéticas de poliéster elevan la temperatura vulvar hasta 2.5°C por encima de la media corporal, fomentando un caldo de cultivo anaeróbico para la Cándida Albicans. El algodón orgánico crudo V-Lush garantiza transpiración pasiva permanente.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "operations" && (
          <div className="space-y-6 animate-fade-in text-sm text-[#C5CBD8] leading-relaxed">
            <div className="border-b border-[#262A36] pb-4">
              <span className="text-xs font-mono uppercase text-[#C5A059] font-bold">
                SECCIÓN 3 / 4
              </span>
              <h2 className="text-2xl font-serif text-white font-bold mt-1">
                Operaciones, Talleres en Europa & Logística
              </h2>
              <p className="text-xs text-[#8E95A5] mt-1">
                Portugal (Braga) & Polonia (Łódź)
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-[#1C202B] border border-[#2B303F] space-y-2">
                  <span className="text-xs font-bold text-[#C5A059] uppercase tracking-wider">
                    Atelier Principal: Confeções do Norte (Portugal)
                  </span>
                  <ul className="text-xs space-y-1 text-[#8E95A5]">
                    <li>• Especialidad: Corsetería fina y encajes italianos.</li>
                    <li>• MOQ negociado: 100 unidades iniciales.</li>
                    <li>• Lead time de producción: 4 semanas tras recibir tejidos.</li>
                    <li>• Estado actual: Muestra física #01 aprobada por Marie.</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-[#1C202B] border border-[#2B303F] space-y-2">
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                    Atelier Secundario: Łódź Textile Studio (Polonia)
                  </span>
                  <ul className="text-xs space-y-1 text-[#8E95A5]">
                    <li>• Especialidad: Patronaje elástico para la línea Unisex & Queer.</li>
                    <li>• MOQ negociado: 150 unidades.</li>
                    <li>• Lead time de producción: 5 semanas.</li>
                    <li>• Estado actual: Muestra #02 en confección.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-[#1C202B] rounded-xl border border-[#2B303F] space-y-2 text-xs">
                <span className="font-bold text-white">Packaging & Envío Sostenible:</span>
                <p className="text-[#8E95A5]">
                  BioPack EU suministra cajas kraft microcanal 100% compostables en hogar. DHL GoGreen gestiona los envíos con reporte auditado de compensación de CO2.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "economics" && (
          <div className="space-y-6 animate-fade-in text-sm text-[#C5CBD8] leading-relaxed">
            <div className="border-b border-[#262A36] pb-4">
              <span className="text-xs font-mono uppercase text-[#C5A059] font-bold">
                SECCIÓN 4 / 4
              </span>
              <h2 className="text-2xl font-serif text-white font-bold mt-1">
                Modelo Financiero & Unit Economics
              </h2>
              <p className="text-xs text-[#8E95A5] mt-1">
                Estructura de costes y viabilidad de escala
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-[#181B23] text-[#8E95A5] uppercase text-[10px] tracking-wider border-b border-[#262A36]">
                  <tr>
                    <th className="py-3 px-4">Concepto</th>
                    <th className="py-3 px-4">Braguita Individual</th>
                    <th className="py-3 px-4">Pack Trío</th>
                    <th className="py-3 px-4">Margen Bruto</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#262A36] text-[#E1E4EA]">
                  <tr>
                    <td className="py-3 px-4 font-semibold">PVP Venta al Público (IVA inc.)</td>
                    <td className="py-3 px-4 font-mono font-bold text-white">32,00 €</td>
                    <td className="py-3 px-4 font-mono font-bold text-white">79,00 €</td>
                    <td className="py-3 px-4 font-mono text-emerald-400 font-bold">~68.5%</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#8E95A5]">Coste Tejido & Algodón Crudo GOTS</td>
                    <td className="py-3 px-4 font-mono">3,20 €</td>
                    <td className="py-3 px-4 font-mono">9,60 €</td>
                    <td className="py-3 px-4 text-[#8E95A5]">—</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#8E95A5]">Confección Taller Portugal / Polonia</td>
                    <td className="py-3 px-4 font-mono">5,20 €</td>
                    <td className="py-3 px-4 font-mono">14,90 €</td>
                    <td className="py-3 px-4 text-[#8E95A5]">—</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-[#8E95A5]">Packaging Kraft Compostable</td>
                    <td className="py-3 px-4 font-mono">1,80 €</td>
                    <td className="py-3 px-4 font-mono">2,10 €</td>
                    <td className="py-3 px-4 text-[#8E95A5]">—</td>
                  </tr>
                  <tr className="bg-[#1C202B]/60 font-bold">
                    <td className="py-3 px-4 text-[#C5A059]">COGS Total por Venta</td>
                    <td className="py-3 px-4 font-mono text-[#C5A059]">10,20 €</td>
                    <td className="py-3 px-4 font-mono text-[#C5A059]">26,60 €</td>
                    <td className="py-3 px-4 font-mono text-emerald-400 font-bold">
                      Beneficio: +52.40 € (Trío)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-[#1C202B] rounded-xl text-xs text-[#8E95A5] space-y-1">
              <span className="text-white font-bold">Punto de Equilibrio (Break-Even):</span>
              <p>
                Alcanzar <strong>100 unidades vendidas</strong> genera ~3.160 € en ingresos brutos, absorbiendo por completo los 898 € de costes fijos iniciales de patronaje y web y financiando íntegramente la tirada de producción sin requerir deuda ni dilución.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
