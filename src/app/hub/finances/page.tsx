"use client";

import { useState } from "react";
import {
  Wallet,
  TrendingUp,
  ArrowDownRight,
  ArrowUpRight,
  Plus,
  Layers,
  PieChart,
  Calendar,
  Euro,
} from "lucide-react";
import { INITIAL_FINANCIALS, FinancialEntry } from "@/lib/initial-data";
import { formatEUR, formatDate } from "@/lib/utils";

export default function HubFinancesPage() {
  const [financials, setFinancials] = useState<FinancialEntry[]>(INITIAL_FINANCIALS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState<FinancialEntry["category"]>("prototype");
  const [type, setType] = useState<FinancialEntry["type"]>("expense");
  const [amount, setAmount] = useState<string>("50");

  const initialCapital = 1000;
  const totalExpenses = financials
    .filter((f) => f.type === "expense")
    .reduce((acc, f) => acc + f.amount, 0);

  const totalIncome = financials
    .filter((f) => f.type === "income_preorder")
    .reduce((acc, f) => acc + f.amount, 0);

  const netCash = initialCapital - totalExpenses + totalIncome;

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc || !amount) return;

    const newEntry: FinancialEntry = {
      id: `fin-${Date.now()}`,
      description: desc,
      category: cat,
      type: type,
      amount: parseFloat(amount),
      currency: "EUR",
      date: new Date().toISOString().split("T")[0],
    };

    setFinancials([newEntry, ...financials]);
    setShowAddModal(false);
    setDesc("");
    setAmount("50");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262A36]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
            FINANZAS & CONTROL PRESUPUESTARIO
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
            Gestión del Capital Semilla de Lanzamiento
          </h1>
          <p className="text-xs text-[#8E95A5] mt-1">
            Presupuesto inicial de 1.000 €, gastos de prototipado/web y capital levantado vía preventa.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 text-xs bg-[#4A1521] hover:bg-[#6E2232] text-white px-4 py-2.5 rounded-xl font-semibold shadow-md active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Añadir Movimiento Contable</span>
        </button>
      </div>

      {/* Top Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-2">
          <span className="text-xs text-[#8E95A5] font-medium">Presupuesto Semilla Inicial</span>
          <p className="font-serif text-3xl font-bold text-white tracking-tight">1.000 €</p>
          <span className="text-[10px] text-[#C5A059] font-mono">
            Aportado por Marie & Socio (50/50)
          </span>
        </div>

        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-2">
          <span className="text-xs text-[#8E95A5] font-medium">Gastos de Prototipado & Web</span>
          <p className="font-serif text-3xl font-bold text-rose-400 tracking-tight">
            -{formatEUR(totalExpenses)}
          </p>
          <span className="text-[10px] text-[#8E95A5] font-mono">
            Patronaje, GOTS crudo, EUIPO y cajas
          </span>
        </div>

        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-2">
          <span className="text-xs text-[#8E95A5] font-medium">Ingresos por Preventas</span>
          <p className="font-serif text-3xl font-bold text-emerald-400 tracking-tight">
            +{formatEUR(totalIncome)}
          </p>
          <span className="text-[10px] text-emerald-400 font-mono">
            45 unidades pagadas y confirmadas
          </span>
        </div>

        <div className="bg-[#14161D] p-5 rounded-2xl border border-[#262A36] space-y-2">
          <span className="text-xs text-[#8E95A5] font-medium">Tesorería Neta Viva (Runway)</span>
          <p className="font-serif text-3xl font-bold text-[#C5A059] tracking-tight">
            {formatEUR(netCash)}
          </p>
          <span className="text-[10px] text-[#C5A059] font-mono">
            Listo para comprar rollo de 100m GOTS
          </span>
        </div>
      </div>

      {/* Category Breakdown & Unit Economics Banner */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6 bg-[#14161D] p-6 rounded-2xl border border-[#262A36] space-y-4">
          <h3 className="text-sm font-serif font-bold text-white">
            Desglose de Gastos de Lanzamiento
          </h3>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center py-2 border-b border-[#262A36]">
              <span className="text-[#8E95A5]">Prototipado & Patronaje (Tallas XS-XXL)</span>
              <span className="font-mono font-bold text-white">375,00 €</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#262A36]">
              <span className="text-[#8E95A5]">Registro Legal y Marca EUIPO</span>
              <span className="font-mono font-bold text-white">180,00 €</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-[#262A36]">
              <span className="text-[#8E95A5]">Muestras Packaging Kraft Compostable</span>
              <span className="font-mono font-bold text-white">85,00 €</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#8E95A5]">Dominio web + Hosting Vercel Pro</span>
              <span className="font-mono font-bold text-white">48,00 €</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 bg-[#14161D] p-6 rounded-2xl border border-[#262A36] space-y-4">
          <h3 className="text-sm font-serif font-bold text-white">
            Salud Financiera & Previsión al Completar Lote
          </h3>
          <p className="text-xs text-[#8E95A5] leading-relaxed">
            Al alcanzar las <strong>100 unidades</strong> (meta de preventa), los ingresos brutos ascenderán a <strong>~3.160 €</strong>. Esto permitirá liquidar los 520 € de confección con el taller de Braga, 320 € de compra de rollo de algodón orgánico, y dejará una caja remanente de más de <strong>2.200 €</strong> para financiar el Lote #02 sin inversión externa.
          </p>
          <div className="p-3 bg-[#1C202B] rounded-xl text-xs text-emerald-400 font-semibold border border-[#2B303F]">
            ✓ Modelo 100% Bootstrap sostenible y rentable desde la primera tirada.
          </div>
        </div>
      </div>

      {/* Transaction Ledger Table */}
      <div className="bg-[#14161D] rounded-2xl border border-[#262A36] overflow-hidden">
        <div className="p-6 border-b border-[#262A36]">
          <h3 className="text-base font-serif font-bold text-white">
            Libro Diario de Movimientos Contables
          </h3>
          <p className="text-xs text-[#8E95A5]">
            Histórico detallado de inyecciones, costes y ventas registradas
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-[#181B23] text-[#8E95A5] uppercase text-[10px] tracking-wider border-b border-[#262A36]">
              <tr>
                <th className="py-3 px-6">Fecha</th>
                <th className="py-3 px-4">Descripción</th>
                <th className="py-3 px-4">Categoría</th>
                <th className="py-3 px-4">Tipo</th>
                <th className="py-3 px-6 text-right">Importe (EUR)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#262A36] text-[#E1E4EA]">
              {financials.map((entry) => (
                <tr key={entry.id} className="hover:bg-[#1C202B] transition-colors">
                  <td className="py-3.5 px-6 font-mono text-[#8E95A5]">{entry.date}</td>
                  <td className="py-3.5 px-4 font-medium text-white">{entry.description}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded bg-[#272B36] font-mono text-[10px] text-[#A0A7B8] uppercase">
                      {entry.category}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <span
                      className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                        entry.type === "expense"
                          ? "bg-rose-950/60 text-rose-300"
                          : "bg-emerald-950/60 text-emerald-400"
                      }`}
                    >
                      {entry.type === "expense"
                        ? "Gasto"
                        : entry.type === "income_preorder"
                        ? "Ingreso Preventa"
                        : "Capital Inicial"}
                    </span>
                  </td>
                  <td
                    className={`py-3.5 px-6 text-right font-mono font-bold ${
                      entry.type === "expense" ? "text-rose-400" : "text-emerald-400"
                    }`}
                  >
                    {entry.type === "expense" ? "-" : "+"}
                    {formatEUR(entry.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add Entry */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#181B22] text-[#E1E4EA] w-full max-w-md rounded-2xl border border-[#272B36] p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white">Nuevo Movimiento</h3>
            <form onSubmit={handleAddEntry} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#8E95A5] mb-1">Concepto:</label>
                <input
                  type="text"
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Ej. Envío de muestras por DHL"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#8E95A5] mb-1">Tipo:</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as any)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="expense">Gasto</option>
                    <option value="income_preorder">Ingreso Preventa</option>
                    <option value="capital_injection">Inyección Capital</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8E95A5] mb-1">Categoría:</label>
                  <select
                    value={cat}
                    onChange={(e) => setCat(e.target.value as any)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="prototype">Prototipo</option>
                    <option value="marketing">Marketing</option>
                    <option value="platform">Plataforma</option>
                    <option value="legal">Legal</option>
                    <option value="packaging">Packaging</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#8E95A5] mb-1">Importe en EUR:</label>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-[#272B36]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-[#8E95A5] hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs bg-[#4A1521] hover:bg-[#6E2232] text-white font-semibold transition-colors"
                >
                  Guardar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
