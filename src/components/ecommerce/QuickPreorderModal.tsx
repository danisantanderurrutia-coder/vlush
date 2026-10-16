"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Product } from "@/lib/initial-data";
import { formatEUR } from "@/lib/utils";
import { X, Sparkles, ShieldCheck, Check, ArrowRight, Loader2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

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
  const { t } = useLanguage();
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
          item_name: isTrioPack ? `Pack Trio (${product.name})` : product.name,
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
      setErrorMsg("Error processing preorder / Error procesando reserva.");
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
              {t.quickModal.successTitle}
            </h3>
            <p className="text-sm text-[#1A1A1A]/70 max-w-md mx-auto">
              {t.quickModal.successDesc} <strong>{product.name} ({size})</strong>.
            </p>
            <div className="bg-[#ECE5D8] rounded-xl p-4 text-xs text-left space-y-1.5 border border-[#1A1A1A]/10">
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">{t.quickModal.successDest}</span>
                <span className="font-semibold">{country}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">{t.quickModal.successTotal}</span>
                <span className="font-serif font-bold text-[#4A1521]">{formatEUR(currentPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#1A1A1A]/60">{t.quickModal.successDelivery}</span>
                <span className="font-medium text-emerald-800">DHL GoGreen</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-[#1A1A1A] text-[#F5F2EB] py-3 rounded-full text-xs uppercase tracking-wider font-semibold hover:bg-black transition-colors"
            >
              {t.quickModal.closeModalBtn}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-[#4A1521] font-bold">
                {t.quickModal.badge}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] mt-0.5">
                {product.name}
              </h3>
              <p className="text-xs text-[#1A1A1A]/70 mt-1">
                {t.quickModal.subhead}
              </p>
            </div>

            {/* Bundle Toggle if available */}
            {product.availableForTrio && product.trioPrice && (
              <div className="bg-[#ECE5D8] p-3 rounded-xl border border-[#1A1A1A]/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#1A1A1A]">{t.quickModal.trioQuestion}</p>
                  <p className="text-[11px] text-[#1A1A1A]/70">
                    {t.quickModal.trioSub} {formatEUR(product.trioPrice)}
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
                  {isTrioPack ? t.quickModal.trioActivated : t.quickModal.trioAdd}
                </button>
              </div>
            )}

            {/* Size Selector */}
            <div>
              <label className="block text-xs font-medium text-[#1A1A1A]/80 mb-1.5">
                {t.quickModal.sizeLabel}
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
                  {t.quickModal.nameLabel}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t.quickModal.namePlaceholder}
                  className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/70 mb-1">
                    {t.quickModal.emailLabel}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.quickModal.emailPlaceholder}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#1A1A1A]/70 mb-1">
                    {t.quickModal.countryLabel}
                  </label>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full text-xs px-3 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="DE">Deutschland (DE)</option>
                    <option value="ES">España (ES)</option>
                    <option value="FR">France (FR)</option>
                    <option value="NL">Nederland (NL)</option>
                    <option value="AT">Österreich (AT)</option>
                    <option value="IT">Italia (IT)</option>
                    <option value="PT">Portugal (PT)</option>
                    <option value="PL">Polska (PL)</option>
                    <option value="BE">België / Belgique (BE)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#1A1A1A]/70 mb-1">
                  {t.quickModal.addressLabel}
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder={t.quickModal.addressPlaceholder}
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
                <p className="text-[11px] text-[#1A1A1A]/60">{t.quickModal.totalLabel}</p>
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
                    <span>{t.quickModal.confirmingBtn}</span>
                  </>
                ) : (
                  <>
                    <span>{t.quickModal.confirmBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            <div className="flex items-center justify-center space-x-2 text-[10px] text-[#1A1A1A]/60 pt-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              <span>{t.quickModal.guaranteeNote}</span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
