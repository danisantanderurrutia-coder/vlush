"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import confetti from "canvas-confetti";
import { submitPreorder } from "@/lib/services";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { INITIAL_PRODUCTS } from "@/lib/initial-data";
import { formatEUR } from "@/lib/utils";
import {
  ShieldCheck,
  Truck,
  CreditCard,
  Lock,
  ArrowRight,
  Check,
  CheckCircle2,
  Calendar,
  Gift,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PreorderCheckoutPage() {
  const { t } = useLanguage();
  const [selectedProductId, setSelectedProductId] = useState<string>("trio-bundle-female");
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [quantity, setQuantity] = useState<number>(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("DE");
  const [paymentMethod, setPaymentMethod] = useState<"card" | "klarna" | "paypal">("card");
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [orderReceipt, setOrderReceipt] = useState<any>(null);

  const product =
    INITIAL_PRODUCTS.find((p) => p.id === selectedProductId) || INITIAL_PRODUCTS[0];

  // Dynamic Shipping calculation
  const subtotal = product.price * quantity;
  const isGermany = country === "DE";
  const freeShippingThreshold = isGermany ? 60 : 85;
  const shippingCost = subtotal >= freeShippingThreshold ? 0 : isGermany ? 3.9 : 4.9;
  const grandTotal = subtotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition(async () => {
      try {
        const fullAddress = `${address}, ${postalCode} ${city}`;
        const { preorder } = await submitPreorder({
          customer_name: name,
          email,
          shipping_address: fullAddress,
          country,
          product_line: product.line,
          item_name: product.name,
          size: selectedSize,
          quantity,
          total_amount: grandTotal,
        });

        setOrderReceipt({
          orderId: preorder?.id || `VL-${Math.floor(100000 + Math.random() * 900000)}`,
          customerName: name,
          email,
          productName: product.name,
          size: selectedSize,
          quantity,
          country,
          total: grandTotal,
          date: new Date().toLocaleDateString(),
        });

        setSubmitted(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#4A1521", "#DCD4C4", "#1A1A1A"],
        });
      } catch (err) {
        console.error(err);
      }
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted && orderReceipt ? (
            /* Confirmation Screen */
            <div className="max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-[#1A1A1A]/10 shadow-2xl text-center space-y-6 animate-fade-in">
              <div className="w-16 h-16 bg-[#4A1521] text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <Check className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#4A1521] font-bold">
                  {t.checkoutPage.confirmedBadge}
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] mt-1">
                  {t.checkoutPage.confirmedTitle}
                </h1>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-2">
                  {t.checkoutPage.confirmedDesc} <strong>{orderReceipt.email}</strong>.
                </p>
              </div>

              {/* Order Receipt Box */}
              <div className="bg-[#F5F2EB] rounded-2xl p-6 text-left space-y-3 border border-[#1A1A1A]/10 text-xs">
                <div className="flex justify-between items-center pb-3 border-b border-[#1A1A1A]/10">
                  <span className="text-[#1A1A1A]/60">{t.checkoutPage.orderNumberLabel}</span>
                  <span className="font-mono font-bold text-[#4A1521]">{orderReceipt.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/60">{t.checkoutPage.reservedItemLabel}</span>
                  <span className="font-semibold text-right">
                    {orderReceipt.productName} ({orderReceipt.quantity}x)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/60">{t.checkoutPage.selectedSizeLabel}</span>
                  <span className="font-semibold">{orderReceipt.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/60">{t.checkoutPage.countryDestLabel}</span>
                  <span className="font-semibold">{orderReceipt.country}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/60">{t.checkoutPage.estimatedDeliveryLabel}</span>
                  <span className="font-semibold text-emerald-800">
                    {t.checkoutPage.estimatedDeliveryVal}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3 border-t border-[#1A1A1A]/10 font-bold text-sm">
                  <span>{t.checkoutPage.totalPaidLabel}</span>
                  <span className="font-serif text-xl text-[#4A1521]">
                    {formatEUR(orderReceipt.total)}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-[#EFECE6] rounded-xl text-xs text-[#1A1A1A]/75 text-left flex items-start space-x-3">
                <Gift className="w-5 h-5 text-[#4A1521] shrink-0 mt-0.5" />
                <p>{t.checkoutPage.giftNote}</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/"
                  className="flex-1 bg-[#1A1A1A] hover:bg-black text-[#F5F2EB] py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  {t.checkoutPage.returnHome}
                </Link>
                <Link
                  href="/hub"
                  className="flex-1 border border-[#1A1A1A]/20 hover:bg-[#EFECE6] text-[#1A1A1A] py-3.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  {t.checkoutPage.checkHub}
                </Link>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Left Column: Form */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#4A1521] font-bold">
                    {t.checkoutPage.badge}
                  </span>
                  <h1 className="font-serif text-3xl sm:text-5xl text-[#1A1A1A] mt-1">
                    {t.checkoutPage.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-[#1A1A1A]/70 mt-1">
                    {t.checkoutPage.subtitle}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Step 1: Select Piece */}
                  <div className="bg-white/70 p-6 rounded-2xl border border-[#1A1A1A]/10 space-y-4">
                    <h2 className="font-serif text-lg text-[#1A1A1A] font-bold flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-[#4A1521] text-white text-[10px] flex items-center justify-center font-sans font-bold">
                        1
                      </span>
                      <span>{t.checkoutPage.step1}</span>
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {INITIAL_PRODUCTS.map((p) => (
                        <button
                          key={p.id}
                          type="button"
                          onClick={() => {
                            setSelectedProductId(p.id);
                            if (!p.sizes.includes(selectedSize as any)) {
                              setSelectedSize(p.sizes[0]);
                            }
                          }}
                          className={`p-3.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                            selectedProductId === p.id
                              ? "bg-[#4A1521] text-white border-[#4A1521] shadow-md"
                              : "bg-white text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40"
                          }`}
                        >
                          <div>
                            <div className="flex justify-between items-start">
                              <span className="text-xs font-serif font-bold">{p.name}</span>
                              <span
                                className={`text-xs font-bold ${
                                  selectedProductId === p.id ? "text-[#ECE5D8]" : "text-[#4A1521]"
                                }`}
                              >
                                {formatEUR(p.price)}
                              </span>
                            </div>
                            <p
                              className={`text-[10px] mt-1 line-clamp-2 ${
                                selectedProductId === p.id ? "text-white/80" : "text-[#1A1A1A]/60"
                              }`}
                            >
                              {p.tagline}
                            </p>
                          </div>
                          {p.badge && (
                            <span
                              className={`mt-2 text-[9px] uppercase tracking-wider font-semibold inline-block ${
                                selectedProductId === p.id ? "text-[#C5A059]" : "text-[#4A1521]"
                              }`}
                            >
                              {p.badge}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>

                    {/* Size and Quantity selector */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-[#1A1A1A]/10">
                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A]/80 mb-1.5">
                          {t.checkoutPage.sizeLabel}
                        </label>
                        <div className="flex flex-wrap gap-1.5">
                          {product.sizes.map((sz) => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() => setSelectedSize(sz)}
                              className={`px-3 py-1.5 rounded-md text-xs font-bold border transition-colors ${
                                selectedSize === sz
                                  ? "bg-[#1A1A1A] text-white border-[#1A1A1A]"
                                  : "bg-white text-[#1A1A1A] border-[#1A1A1A]/20 hover:border-[#4A1521]"
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#1A1A1A]/80 mb-1.5">
                          {t.checkoutPage.qtyLabel}
                        </label>
                        <div className="inline-flex items-center border border-[#1A1A1A]/20 rounded-lg bg-white">
                          <button
                            type="button"
                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                            className="px-3 py-1.5 text-xs text-[#1A1A1A] hover:bg-black/5"
                          >
                            -
                          </button>
                          <span className="px-4 py-1.5 text-xs font-bold">{quantity}</span>
                          <button
                            type="button"
                            onClick={() => setQuantity(quantity + 1)}
                            className="px-3 py-1.5 text-xs text-[#1A1A1A] hover:bg-black/5"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Step 2: Shipping details */}
                  <div className="bg-white/70 p-6 rounded-2xl border border-[#1A1A1A]/10 space-y-4">
                    <h2 className="font-serif text-lg text-[#1A1A1A] font-bold flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-[#4A1521] text-white text-[10px] flex items-center justify-center font-sans font-bold">
                        2
                      </span>
                      <span>{t.checkoutPage.step2}</span>
                    </h2>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1">
                          {t.checkoutPage.nameLabel}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Marie Becker"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1">
                          {t.checkoutPage.emailLabel}
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="name@example.com"
                          className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="sm:col-span-2">
                          <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1">
                            {t.checkoutPage.addressLabel}
                          </label>
                          <input
                            type="text"
                            required
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Torstraße 142"
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1">
                            {t.checkoutPage.zipLabel}
                          </label>
                          <input
                            type="text"
                            required
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            placeholder="10119"
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1">
                            {t.checkoutPage.cityLabel}
                          </label>
                          <input
                            type="text"
                            required
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Berlin"
                            className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-[#1A1A1A]/20 bg-white focus:outline-none focus:border-[#4A1521]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-[#1A1A1A]/70 mb-1">
                            {t.checkoutPage.countryLabel}
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
                    </div>
                  </div>

                  {/* Step 3: Payment Method */}
                  <div className="bg-white/70 p-6 rounded-2xl border border-[#1A1A1A]/10 space-y-4">
                    <h2 className="font-serif text-lg text-[#1A1A1A] font-bold flex items-center space-x-2">
                      <span className="w-5 h-5 rounded-full bg-[#4A1521] text-white text-[10px] flex items-center justify-center font-sans font-bold">
                        3
                      </span>
                      <span>{t.checkoutPage.step3}</span>
                    </h2>

                    <div className="grid grid-cols-3 gap-3">
                      <button
                        type="button"
                        onClick={() => setPaymentMethod("card")}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMethod === "card"
                            ? "border-[#4A1521] bg-[#4A1521]/5 font-bold text-[#4A1521]"
                            : "border-[#1A1A1A]/15 bg-white text-[#1A1A1A]/70"
                        }`}
                      >
                        <CreditCard className="w-5 h-5 mx-auto mb-1 text-[#4A1521]" />
                        <span className="text-[11px] block">{t.checkoutPage.cardMethod}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("klarna")}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMethod === "klarna"
                            ? "border-[#4A1521] bg-[#4A1521]/5 font-bold text-[#4A1521]"
                            : "border-[#1A1A1A]/15 bg-white text-[#1A1A1A]/70"
                        }`}
                      >
                        <div className="font-serif text-sm font-bold text-[#4A1521] mb-1">
                          Klarna.
                        </div>
                        <span className="text-[11px] block">{t.checkoutPage.klarnaMethod}</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setPaymentMethod("paypal")}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          paymentMethod === "paypal"
                            ? "border-[#4A1521] bg-[#4A1521]/5 font-bold text-[#4A1521]"
                            : "border-[#1A1A1A]/15 bg-white text-[#1A1A1A]/70"
                        }`}
                      >
                        <div className="font-serif text-sm font-bold text-sky-700 mb-1">
                          PayPal
                        </div>
                        <span className="text-[11px] block">{t.checkoutPage.paypalMethod}</span>
                      </button>
                    </div>

                    <div className="p-3 bg-[#EFECE6] rounded-xl text-[11px] text-[#1A1A1A]/70 flex items-center space-x-2">
                      <Lock className="w-3.5 h-3.5 text-[#4A1521]" />
                      <span>{t.checkoutPage.securityNote}</span>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-[#4A1521] hover:bg-[#360E17] text-white py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg transition-transform active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    <span>
                      {t.checkoutPage.submitBtn} ({formatEUR(grandTotal)})
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Right Column: Order Summary & Reassurance */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#EFECE6] rounded-2xl p-6 border border-[#1A1A1A]/10 shadow-sm sticky top-28 space-y-5">
                  <h3 className="font-serif text-xl text-[#1A1A1A] font-bold pb-3 border-b border-[#1A1A1A]/10">
                    {t.checkoutPage.summaryTitle}
                  </h3>

                  {/* Product Micro Preview */}
                  <div className="flex space-x-4 items-center">
                    <div className="relative w-16 h-20 rounded-lg overflow-hidden bg-white shrink-0 border border-black/10">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-bold truncate text-[#1A1A1A]">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#1A1A1A]/60">{selectedSize} • {quantity}x</p>
                      <span className="inline-block text-[10px] text-[#4A1521] font-semibold">
                        {t.checkoutPage.gussetTag}
                      </span>
                    </div>
                    <span className="font-serif font-bold text-sm text-[#1A1A1A]">
                      {formatEUR(subtotal)}
                    </span>
                  </div>

                  {/* Calculations */}
                  <div className="space-y-2 pt-3 border-t border-[#1A1A1A]/10 text-xs">
                    <div className="flex justify-between text-[#1A1A1A]/70">
                      <span>Subtotal ({quantity}x)</span>
                      <span>{formatEUR(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-[#1A1A1A]/70">
                      <span className="flex items-center space-x-1">
                        <Truck className="w-3.5 h-3.5 text-[#4A1521]" />
                        <span>DHL GoGreen ({country})</span>
                      </span>
                      <span>
                        {shippingCost === 0 ? (
                          <strong className="text-emerald-800 uppercase">
                            {t.checkoutPage.shippingDeFree}
                          </strong>
                        ) : (
                          formatEUR(shippingCost)
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-[#1A1A1A]/10 font-bold text-base">
                      <span>{t.checkoutPage.totalLabel}</span>
                      <span className="font-serif text-2xl text-[#4A1521]">
                        {formatEUR(grandTotal)}
                      </span>
                    </div>
                  </div>

                  {/* Production & Delivery Timeline */}
                  <div className="p-4 bg-white/70 rounded-xl border border-[#1A1A1A]/10 space-y-2 text-xs">
                    <div className="flex items-center space-x-2 text-[#4A1521] font-bold">
                      <Calendar className="w-4 h-4" />
                      <span>{t.checkoutPage.timelineTitle}</span>
                    </div>
                    <p className="text-[#1A1A1A]/70 text-[11px] leading-relaxed">
                      • {t.checkoutPage.timelineOct}
                      <br />
                      • {t.checkoutPage.timelineNov}
                      <br />
                      • {t.checkoutPage.timelineDec}
                    </p>
                  </div>

                  <div className="space-y-2 text-[11px] text-[#1A1A1A]/60 pt-2 border-t border-[#1A1A1A]/10">
                    <p className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{t.checkoutPage.sizeExchangePerk}</span>
                    </p>
                    <p className="flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                      <span>{t.checkoutPage.refundPerk}</span>
                    </p>
                  </div>
                </div>

                {/* Sustainable Unboxing & Quality Promise */}
                <div className="bg-white rounded-2xl overflow-hidden border border-[#1A1A1A]/10 shadow-sm">
                  <div className="relative aspect-16/9 w-full">
                    <Image
                      src="/images/details/detail-unboxing-ribbon.jpg"
                      alt="Packaging de lujo sostenible V-Lush"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 space-y-1 bg-[#ECE5D8]/50">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-[#4A1521]">100% Plastic-Free Unboxing</span>
                    <p className="text-xs text-[#1A1A1A]/80 leading-normal">
                      Tu pedido incluye caja kraft de archivo, papel de semillas plantables y lazo de satén biodegradable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
