"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Product } from "@/lib/initial-data";
import { formatEUR } from "@/lib/utils";
import { X, Sparkles, ShieldCheck, Check, ArrowRight, Loader2 } from "lucide-react";

interface QuickPreorderModalProps {
  product: Product;
  initialSize?: string;
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function QuickPreorderModal({
  product,
  initialSize,
  isOpen,
  onClose,
  onSuccess,
}: QuickPreorderModalProps) {
  const [size, setSize] = useState<string>(initialSize || product.sizes[0] || "M");
  const [isTrioPack, setIsTrioPack] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("DE");
  const [submitting, setSubmitting] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  if (!isOpen) return null;

  const currentPrice = isTrioPack && product.trioPrice ? product.trioPrice : product.price;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg("");

    try {
      const response = await fetch("/api/preorders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          email,
          shipping_address: address,
          country,
          product_line: product.line,
          item_name: isTrioPack ? `Pack Trío (${product.name})` : product.name,
          size,
          quantity: isTrioPack ? 3 : 1,
          total_amount: currentPrice,
        }),
      });

      if (!response.ok) {
        throw new Error("No se pudo completar la reserva.");
      }

      setCompleted(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#4A1521", "#DCD4C4", "#1A1A1A"],
      });

      if (onSuccess) onSuccess();
    } catch {
      setErrorMsg("Ocurrió un error al procesar tu reserva. Inténtalo de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F5F2EB] text-[#1A1A1A] w-full max-w-lg rounded-2xl border border-[#1A1A1A]/15 shadow-2xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#1A1A1A]/60 hover:text-[#1A1A1A] rounded-full hover:bg-black/5 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {completed ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-[#4A1521] text-[#F5F2EB] rounded-full flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#1A1A1A]">
              ¡Tu reserva está asegurada!
            </h3>
            <p className="text-sm text-[#1A1A1A]/70 max-w-md mx-auto">
              Muchas gracias, <strong>{name}</strong>. Hemos reservado tu unidad de{" "}
              <strong>{product.name} (Talla {size})</strong> en el Lote Piloto #01.
            </p>
            <div className="bg-[#ECE5D8] rounded-xl p-4 text-xs text-left space-y-1.5 border border-[#1A1A1A]/10">
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Destino:</span>
                <span className="font-semibold">{country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Total de preventa:</span>
                <span className="font-serif font-bold text-[#4A1521]">{formatEUR(currentPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">Entrega estimada:</span>
                <span className="font-medium text-emerald-800">Diciembre 2026 (DHL GoGreen)</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-[#1A1A1A] text-[#F5F2EB] py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-black transition-colors"
            >
              Cerrar y seguir explorando
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#4A1521] font-bold">
                Reserva de Lote Piloto • Entrega Diciembre
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mt-0.5">
                {product.name}
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">
                Asegura tu talla antes de enviar las unidades a taller en Braga / Łódź.
              </p>
            </div>

            {/* Bundle Toggle if available */}
            {product.availableForTrio && product.trioPrice && (
              <div className="bg-[#ECE5D8] p-3 rounded-xl border border-[#1A1A1A]/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A]">¿Prefieres el Pack Trío?</p>
                  <p className="text-[11px] text-[#1A1A1A]/70">
                    3 piezas en caja kraft de regalo por solo {formatEUR(product.trioPrice)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setIsTrioPack(!isTrioPack)}
                  className={`text-xs px-3 py-1.5 rounded-full font-semibold transition-colors ${
                    isTrioPack
                      ? "bg-[#4A1521] text-white"
                      : "bg-white text-[#1A1A1A] border border-[#1A1A1A]/20"
                  }`}
                >
                  {isTrioPack ? "Pack Trío Activado" : "Añadir Trío"}
                </button>
              </div>
            )}

            {/* Size Selector */}
            <div>
              <label className="block text-xs font-medium text-[#1A1A1A]/80 mb-1.5">
                Talla deseada:
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSize(sz)}
                    className={`px-3 py-1.5 rounded-md text-xs font-semibold border transition-colors ${
                      size === sz
                        ? "bg-[#4A1521] text-[#F5F2EB] border-[#4A1521]"
                        : "bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#4A1521]"
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Customer Inputs */}
            <div className="space-y-3 pt-2 border-t border-[#1A1A1A]/10">
              <div>
                <label className="block text-[11px] font-semibold text-[#1A1A1A]/70 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ej. Marie Becker"
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/70 mb-1">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="marie@ejemplo.com"
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/70 mb-1">
                    País de Envío (UE)
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="DE">Alemania (DE)</option>
                    <option value="ES">España (ES)</option>
                    <option value="FR">Francia (FR)</option>
                    <option value="NL">Países Bajos (NL)</option>
                    <option value="AT">Austria (AT)</option>
                    <option value="IT">Italia (IT)</option>
                    <option value="PT">Portugal (PT)</option>
                    <option value="PL">Polonia (PL)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#1A1A1A]/70 mb-1">
                  Dirección o Ciudad de Entrega
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Calle, número, código postal y ciudad"
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>
            </div>

            {errorMsg && (
              <p className="text-xs text-rose-700 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
                {errorMsg}
              </p>
            )}

            {/* Total and Submit */}
            <div className="pt-2 flex items-center justify-between">
              <div>
                <p className="text-[11px] text-[#1A1A1A]/60">Total preventa:</p>
                <p className="font-serif text-2xl font-bold text-[#4A1521]">
                  {formatEUR(currentPrice)}
                </p>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center space-x-2 bg-[#4A1521] hover:bg-[#360E17] text-white px-6 py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Confirmando...</span>
                  </>
                ) : (
                  <>
                    <span>Confirmar Reserva</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-[10px] text-[#1A1A1A]/60 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>Garantía V-Lush: Sin cargos sorpresa, envío neutral en carbono.</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
