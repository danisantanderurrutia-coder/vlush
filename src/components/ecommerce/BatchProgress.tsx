"use client";

import Link from "next/link";
import { Sparkles, Clock, CheckCircle, Gift, ArrowRight } from "lucide-react";

interface BatchProgressProps {
  currentReserved?: number;
  totalGoal?: number;
  onOpenQuickOrder?: () => void;
}

export default function BatchProgress({
  currentReserved = 45,
  totalGoal = 100,
  onOpenQuickOrder,
}: BatchProgressProps) {
  const percentage = Math.min(Math.round((currentReserved / totalGoal) * 100), 100);
  const remaining = totalGoal - currentReserved;

  return (
    <div className="bg-[#4A1521] text-[#F5F2EB] rounded-2xl p-6 sm:p-8 shadow-xl border border-[#DCD4C4]/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#6E2232]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full text-xs tracking-wider uppercase font-semibold text-[#ECE5D8] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Campaña de Preventa Oficial • Lote Piloto #01</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              Cofinancia la primera tirada artesanal europea
            </h3>
            <p className="text-xs sm:text-sm text-[#ECE5D8]/80 mt-1 max-w-xl">
              Producimos bajo demanda ética para evitar sobreproducción. Cada reserva asegura los metros de algodón crudo GOTS y el tiempo de confección de nuestras costureras en Braga y Łódź.
            </p>
          </div>

          <div className="text-left sm:text-right shrink-0">
            <span className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">
              {currentReserved}
            </span>
            <span className="text-xl sm:text-2xl text-[#ECE5D8]/70 font-light">/{totalGoal}</span>
            <p className="text-xs uppercase tracking-widest text-[#ECE5D8]/70 mt-0.5">
              Unidades Reservadas
            </p>
          </div>
        </div>

        {/* Progress Bar Container */}
        <div className="space-y-2 mb-6">
          <div className="flex justify-between items-center text-xs font-medium text-[#ECE5D8]/90">
            <span className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5" />
              <span>Estado: <strong>{percentage}% completado</strong></span>
            </span>
            <span>
              Faltan solo <strong className="text-white underline">{remaining} prendas</strong> para cerrar el lote
            </span>
          </div>

          <div className="w-full h-3.5 bg-black/30 rounded-full overflow-hidden p-0.5 border border-white/20">
            <div
              className="h-full bg-gradient-to-r from-[#DCD4C4] via-[#F5F2EB] to-[#C5A059] rounded-full transition-all duration-1000 ease-out shadow-sm"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15 text-xs text-[#ECE5D8]/90 mb-6">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Precio exclusivo con hasta 20% de descuento</span>
          </div>
          <div className="flex items-center space-x-2">
            <Gift className="w-4 h-4 text-[#C5A059] shrink-0" />
            <span>Caja kraft numerada 100% compostable</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Entrega prioritaria DHL GoGreen (Diciembre)</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          {onOpenQuickOrder ? (
            <button
              onClick={onOpenQuickOrder}
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#F5F2EB] hover:bg-white text-[#1A1A1A] px-7 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-md transition-all active:scale-95"
            >
              <span>Reservar Mi Talla Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <Link
              href="/preorder-checkout"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#F5F2EB] hover:bg-white text-[#1A1A1A] px-7 py-3 rounded-full text-xs uppercase tracking-widest font-bold shadow-md transition-all active:scale-95"
            >
              <span>Reservar Mi Talla Ahora</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}

          <Link
            href="/collections"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-1.5 text-xs uppercase tracking-wider text-white/80 hover:text-white px-5 py-3 rounded-full border border-white/20 hover:border-white/40 transition-colors"
          >
            <span>Ver Catálogo Completo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
