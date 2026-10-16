"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getPreorders } from "@/lib/services";
import {
  TrendingUp,
  Package,
  Layers,
  Users,
  ArrowUpRight,
  ShieldCheck,
  Calendar,
  Download,
  AlertCircle,
  Clock,
  Euro,
} from "lucide-react";
import { formatEUR, formatDate } from "@/lib/utils";
import { INITIAL_PREORDERS, INITIAL_PRODUCTS, PreorderItem } from "@/lib/initial-data";

export default function HubDashboardPage() {
  const [preorders, setPreorders] = useState<PreorderItem[]>(INITIAL_PREORDERS);
  const [totalRaised, setTotalRaised] = useState(1420);
  const [totalUnits, setTotalUnits] = useState(45);
  const factoryMOQ = 100;

  useEffect(() => {
    getPreorders().then((data) => {
      if (data && Array.isArray(data)) {
        setPreorders(data as any);
        const units = data.reduce((acc: number, p: any) => acc + (p.quantity || 1), 0);
        const revenue = data.reduce(
          (acc: number, p: any) => acc + (Number(p.total_amount) || Number(p.totalAmount) || 0),
          0
        );
        setTotalUnits(units);
        setTotalRaised(revenue);
      }
    });
  }, []);

  const progressPercent = Math.min(Math.round((totalUnits / factoryMOQ) * 100), 100);

  // Sizing breakdown calculation
  const sizeCounts: Record<string, number> = {
    XS: 4,
    S: 12,
    M: 19,
    L: 8,
    XL: 2,
    XXL: 0,
  };

  // Model breakdown
  const modelStats = [
    { name: "Cheeky Burgundy Lace", units: 28, line: "female", pct: 62 },
    { name: "Fluid Geometric Boxers", units: 18, line: "unisex", pct: 40 },
    { name: "Trío Signature V-Lush", units: 21, line: "female", pct: 46 },
    { name: "Nocturne Noir Thong", units: 19, line: "female", pct: 42 },
    { name: "Fluid Sheer Brief", units: 14, line: "unisex", pct: 31 },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Page Title & Status Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#262A36]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
            FOUNDERS OVERVIEW • LOTE PILOTO #01
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
            Panel de Control & Lanzamiento
          </h1>
          <p className="text-xs text-[#8E95A5] mt-1">
            Métricas de preventa, tracción comercial y umbral para activación de talleres en Braga y Łódź.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            href="/hub/tasks"
            className="text-xs bg-[#1C202B] hover:bg-[#262A36] text-white px-4 py-2 rounded-xl border border-[#2B303F] transition-colors"
          >
            Ver Tareas de Marie & Socio
          </Link>
          <Link
            href="/hub/dossier"
            className="text-xs bg-[#4A1521] hover:bg-[#6E2232] text-white px-4 py-2 rounded-xl transition-colors font-semibold"
          >
            Dossier Técnico
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Total Raised */}
        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-xs text-[#8E95A5] font-medium">Recaudado en Preventa</span>
            <div className="p-2 bg-[#4A1521]/30 text-[#ECE5D8] rounded-lg">
              <Euro className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-white tracking-tight">
              {formatEUR(totalRaised)}
            </span>
            <div className="flex items-center space-x-1 text-[11px] text-emerald-400 mt-1 font-medium">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+100% autofinanciado (Bootstrapped)</span>
            </div>
          </div>
        </div>

        {/* Card 2: Factory Goal */}
        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-xs text-[#8E95A5] font-medium">Meta Tirada Mínima (MOQ)</span>
            <div className="p-2 bg-emerald-950/40 text-emerald-400 rounded-lg">
              <Package className="w-4 h-4" />
            </div>
          </div>
          <div>
            <div className="flex items-baseline space-x-2">
              <span className="text-3xl font-serif font-bold text-white tracking-tight">
                {totalUnits}
              </span>
              <span className="text-sm text-[#8E95A5]">/{factoryMOQ} prendas</span>
            </div>
            <div className="w-full bg-[#262A36] h-2 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-700"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <p className="text-[10px] text-[#8E95A5] mt-1.5 font-mono">
              Faltan {factoryMOQ - totalUnits} unidades para compra de rollo GOTS
            </p>
          </div>
        </div>

        {/* Card 3: Launch Budget */}
        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-xs text-[#8E95A5] font-medium">Presupuesto Semilla Inicial</span>
            <div className="p-2 bg-[#C5A059]/20 text-[#C5A059] rounded-lg">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-white tracking-tight">
              1.000 €
            </span>
            <p className="text-[11px] text-[#8E95A5] mt-1">
              Gastos prototipado: <strong className="text-rose-400">898 €</strong>
            </p>
            <p className="text-[10px] text-emerald-400 font-mono mt-0.5">
              Cashflow neto positivo (+{formatEUR(totalRaised + 1000 - 898)})
            </p>
          </div>
        </div>

        {/* Card 4: Community Orders */}
        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-3">
          <div className="flex justify-between items-start">
            <span className="text-xs text-[#8E95A5] font-medium">Pedidos Confirmados</span>
            <div className="p-2 bg-indigo-950/40 text-indigo-400 rounded-lg">
              <Users className="w-4 h-4" />
            </div>
          </div>
          <div>
            <span className="text-3xl font-serif font-bold text-white tracking-tight">
              {preorders.length}
            </span>
            <p className="text-[11px] text-[#8E95A5] mt-1">
              Ticket promedio: <strong>{formatEUR(totalRaised / Math.max(1, preorders.length))}</strong>
            </p>
            <p className="text-[10px] text-indigo-300 font-mono mt-0.5">
              Envíos en DE, ES, FR, NL, AT
            </p>
          </div>
        </div>
      </div>

      {/* Production Threshold Alert / Banner */}
      <div className="bg-gradient-to-r from-[#1E2330] via-[#14161D] to-[#1C1520] p-6 rounded-2xl border border-[#2F3647] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start space-x-3.5">
          <div className="p-2.5 bg-[#4A1521] text-white rounded-xl shrink-0 mt-0.5">
            <Clock className="w-5 h-5 text-[#ECE5D8]" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">
              Objetivo de Producción Lote Piloto: 100 Unidades
            </h3>
            <p className="text-xs text-[#8E95A5] mt-0.5 max-w-2xl leading-relaxed">
              El taller <strong>Confeções do Norte (Braga)</strong> requiere un compromiso de 100 prendas para reservar la mesa de corte en Noviembre. Actualmente nos encontramos al <strong>{progressPercent}%</strong> de la meta gracias a la tracción orgánica de Marie y comunidad.
            </p>
          </div>
        </div>
        <Link
          href="/hub/supply-chain"
          className="text-xs bg-[#262A36] hover:bg-[#323747] text-white px-4 py-2.5 rounded-xl border border-[#3E4557] font-medium shrink-0 text-center transition-colors"
        >
          Ver Tracking de Talleres
        </Link>
      </div>

      {/* Sizing & Models Split Visualizer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Sizing Breakdown */}
        <div className="lg:col-span-5 bg-[#14161D] p-6 rounded-2xl border border-[#262A36] space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#262A36]">
            <div>
              <h3 className="text-sm font-serif font-bold text-white">
                Distribución por Tallas Solicitadas
              </h3>
              <p className="text-[11px] text-[#8E95A5]">
                Plan de graduación de patrones para el taller
              </p>
            </div>
            <span className="text-xs font-mono text-[#C5A059] bg-[#C5A059]/10 px-2 py-0.5 rounded">
              Curva de Demanda
            </span>
          </div>

          <div className="space-y-3 pt-1">
            {Object.entries(sizeCounts).map(([sizeKey, count]) => {
              const pct = Math.round((count / totalUnits) * 100);
              return (
                <div key={sizeKey} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="font-bold text-white">Talla {sizeKey}</span>
                    <span className="text-[#8E95A5]">
                      {count} uds. ({pct}%)
                    </span>
                  </div>
                  <div className="w-full bg-[#1F2430] h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        sizeKey === "M"
                          ? "bg-[#4A1521]"
                          : sizeKey === "S"
                          ? "bg-[#6E2232]"
                          : "bg-[#404656]"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-3 bg-[#1C202B] rounded-xl text-[11px] text-[#8E95A5] flex items-center justify-between">
            <span>Talla más demandada:</span>
            <strong className="text-white">Talla M (42% de reservas)</strong>
          </div>
        </div>

        {/* Model Popularity & Line Split */}
        <div className="lg:col-span-7 bg-[#14161D] p-6 rounded-2xl border border-[#262A36] space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#262A36]">
            <div>
              <h3 className="text-sm font-serif font-bold text-white">
                Popularidad de Modelos & Líneas
              </h3>
              <p className="text-[11px] text-[#8E95A5]">
                Femenina vs Unisex & Fluid
              </p>
            </div>
            <div className="flex space-x-2 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-[#4A1521] text-white">Línea Femenina (71%)</span>
              <span className="px-2 py-0.5 rounded bg-[#272B36] text-[#DCD4C4]">Unisex / Fluid (29%)</span>
            </div>
          </div>

          <div className="space-y-3">
            {modelStats.map((item) => (
              <div
                key={item.name}
                className="p-3 bg-[#1C202B] rounded-xl border border-[#272B36] flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-semibold text-white">{item.name}</span>
                    <span
                      className={`text-[9px] px-1.5 py-0.5 rounded uppercase font-bold ${
                        item.line === "female"
                          ? "bg-[#4A1521]/50 text-rose-300"
                          : "bg-indigo-950/60 text-indigo-300"
                      }`}
                    >
                      {item.line}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#8E95A5] mt-0.5">
                    Gyno-Safe Gusset 100% Algodón Crudo GOTS
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold text-white font-mono">{item.units} uds.</span>
                  <span className="block text-[10px] text-[#8E95A5]">reservadas</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Pre-Orders Ledger Table */}
      <div className="bg-[#14161D] rounded-2xl border border-[#262A36] overflow-hidden">
        <div className="p-6 border-b border-[#262A36] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-serif font-bold text-white">
              Libro de Reservas de Preventa (Tiempo Real)
            </h3>
            <p className="text-xs text-[#8E95A5]">
              Registros sincronizados con la pasarela y la base de datos de V-Lush
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs text-[#8E95A5] font-mono">
              Total {preorders.length} órdenes
            </span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#181B23] text-[#8E95A5] border-b border-[#262A36] uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-6">Cliente</th>
                <th className="py-3 px-4">Artículo</th>
                <th className="py-3 px-4">Talla</th>
                <th className="py-3 px-4">Uds</th>
                <th className="py-3 px-4">Importe</th>
                <th className="py-3 px-4">País</th>
                <th className="py-3 px-6 text-right">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262A36] text-[#E1E4EA]">
              {preorders.map((ord: any) => (
                <tr key={ord.id} className="hover:bg-[#1C202B] transition-colors">
                  <td className="py-3.5 px-6">
                    <span className="font-semibold text-white block">
                      {ord.customerName || ord.customer_name}
                    </span>
                    <span className="text-[11px] text-[#8E95A5]">{ord.email}</span>
                  </td>
                  <td className="py-3.5 px-4 font-medium">
                    {ord.itemName || ord.item_name}
                  </td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-[#272B36] font-mono font-bold text-white">
                      {ord.size}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 font-mono">{ord.quantity || 1}</td>
                  <td className="py-3.5 px-4 font-mono font-bold text-[#C5A059]">
                    {formatEUR(Number(ord.totalAmount || ord.total_amount || 0))}
                  </td>
                  <td className="py-3.5 px-4 text-[#8E95A5]">{ord.country || "DE"}</td>
                  <td className="py-3.5 px-6 text-right">
                    <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                      <span>Confirmado</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
