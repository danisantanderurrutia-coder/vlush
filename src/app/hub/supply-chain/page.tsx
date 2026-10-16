"use client";

import { useState } from "react";
import {
  Boxes,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Factory,
  Leaf,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { INITIAL_MILESTONES, SupplyMilestone } from "@/lib/initial-data";
import { formatEUR } from "@/lib/utils";

export default function HubSupplyChainPage() {
  const [milestones, setMilestones] = useState<SupplyMilestone[]>(INITIAL_MILESTONES);

  const toggleStatus = (id: string) => {
    setMilestones((prev) =>
      prev.map((m) => {
        if (m.id !== id) return m;
        const nextStatus: SupplyMilestone["status"] =
          m.status === "planned"
            ? "in_sampling"
            : m.status === "in_sampling"
            ? "approved"
            : m.status === "approved"
            ? "completed"
            : "planned";
        return { ...m, status: nextStatus, updatedAt: new Date().toISOString().split("T")[0] };
      })
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262A36]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
            PRODUCCIÓN & PROVEEDORES ÉTICOS
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
            Cadena de Suministro & Tracking de Muestras
          </h1>
          <p className="text-xs text-[#8E95A5] mt-1">
            Auditoría de talleres en Portugal y Polonia, compra de algodón crudo GOTS y packaging circular.
          </p>
        </div>
      </div>

      {/* Production Pipeline Milestones */}
      <div className="bg-[#14161D] rounded-2xl border border-[#262A36] p-6 space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-[#262A36]">
          <div>
            <h2 className="text-base font-serif font-bold text-white">
              Hitos de Producción & Aprobación de Muestras
            </h2>
            <p className="text-xs text-[#8E95A5]">
              Haz clic en cualquier estado para avanzar su ciclo de vida
            </p>
          </div>
          <span className="text-xs text-[#C5A059] font-mono font-bold">
            Total Invertido en Sourcing: {formatEUR(milestones.reduce((acc, m) => acc + m.costEstimate, 0))}
          </span>
        </div>

        <div className="space-y-3">
          {milestones.map((item) => (
            <div
              key={item.id}
              className="p-4 bg-[#1C202B] rounded-xl border border-[#272B36] flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#3E4557] transition-all"
            >
              <div className="space-y-1">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white">{item.stageName}</span>
                  <span className="text-[10px] text-[#C5A059] font-mono bg-[#C5A059]/10 px-2 py-0.5 rounded">
                    {item.country}
                  </span>
                </div>
                <p className="text-xs text-[#8E95A5]">
                  Partner: <strong className="text-white/80">{item.partnerName}</strong> • {item.notes}
                </p>
                <span className="text-[10px] text-[#7E8699] font-mono block">
                  Actualizado: {item.updatedAt}
                </span>
              </div>

              <div className="flex items-center space-x-3 shrink-0">
                <span className="font-mono text-xs text-white font-bold">
                  {formatEUR(item.costEstimate)}
                </span>
                <button
                  onClick={() => toggleStatus(item.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-1.5 ${
                    item.status === "completed" || item.status === "approved"
                      ? "bg-emerald-950/60 text-emerald-400 border border-emerald-800/40"
                      : item.status === "in_sampling"
                      ? "bg-amber-950/60 text-amber-300 border border-amber-800/40"
                      : "bg-[#272B36] text-[#A0A7B8]"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>
                    {item.status === "approved"
                      ? "Muestra Aprobada"
                      : item.status === "in_sampling"
                      ? "En Muestreo"
                      : item.status === "completed"
                      ? "Completado"
                      : "Planificado"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Atelier Comparison Matrix */}
      <div className="bg-[#14161D] rounded-2xl border border-[#262A36] p-6 space-y-6">
        <div>
          <h2 className="text-base font-serif font-bold text-white">
            Matriz Comparativa de Talleres Europeos
          </h2>
          <p className="text-xs text-[#8E95A5]">
            Evaluación técnica realizada por el socio de sostenibilidad y Marie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Atelier Portugal */}
          <div className="p-5 rounded-xl bg-[#1C202B] border border-[#4A1521]/40 space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-[#C5A059] uppercase font-bold">
                  OPCIÓN PRINCIPAL • LÍNEA FEMENINA
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  Confeções do Norte (Braga, Portugal)
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-emerald-950 text-emerald-400 text-xs font-bold">
                Muestra Validada
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#8E95A5]">
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>MOQ Inicial:</span>
                <strong className="text-white font-mono">100 unidades</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>Coste Confección / ud:</span>
                <strong className="text-white font-mono">5,20 €</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>Lead Time:</span>
                <strong className="text-white font-mono">4 semanas</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>Especialidad Textil:</span>
                <strong className="text-white">Encaje floral y costura flatlock</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Auditoría Laboral:</span>
                <strong className="text-emerald-400">SMETA 4-Pillar Aprobada</strong>
              </div>
            </div>

            <p className="text-[11px] text-[#A0A7B8] bg-[#14161D] p-3 rounded-lg leading-relaxed">
              <strong>Nota de Marie:</strong> La muestra física #01 demostró que no pellizca en ingle y el algodón crudo interior se integra a la perfección sin abultar.
            </p>
          </div>

          {/* Atelier Poland */}
          <div className="p-5 rounded-xl bg-[#1C202B] border border-[#272B36] space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono text-indigo-400 uppercase font-bold">
                  OPCIÓN PRINCIPAL • LÍNEA UNISEX & FLUID
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-0.5">
                  Łódź Textile Studio (Łódź, Polonia)
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded bg-amber-950 text-amber-300 text-xs font-bold">
                Muestra en Envío
              </span>
            </div>

            <div className="space-y-2 text-xs text-[#8E95A5]">
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>MOQ Inicial:</span>
                <strong className="text-white font-mono">150 unidades</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>Coste Confección / ud:</span>
                <strong className="text-white font-mono">5,80 €</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>Lead Time:</span>
                <strong className="text-white font-mono">5 semanas</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-[#272B36]">
                <span>Especialidad Textil:</span>
                <strong className="text-white">Patrones anatómicos y bandas elásticas</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Auditoría Laboral:</span>
                <strong className="text-emerald-400">Certificación EU Fair Work</strong>
              </div>
            </div>

            <p className="text-[11px] text-[#A0A7B8] bg-[#14161D] p-3 rounded-lg leading-relaxed">
              <strong>Nota del Socio:</strong> Taller con excelente dominio de mallas técnicas recicladas y cortes amplios para diferentes anatomías pélvicas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
