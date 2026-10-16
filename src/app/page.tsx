"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FabricComparator from "@/components/ui/FabricComparator";
import BatchProgress from "@/components/ecommerce/BatchProgress";
import ProductCard from "@/components/ecommerce/ProductCard";
import QuickPreorderModal from "@/components/ecommerce/QuickPreorderModal";
import { INITIAL_PRODUCTS, Product } from "@/lib/initial-data";
import { Sparkles, Shield, Heart, ArrowRight, CheckCircle2, Star } from "lucide-react";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<"all" | "female" | "unisex" | "bundles">("all");
  const [reservedCount, setReservedCount] = useState(45);

  // Fetch live preorder count from API
  useEffect(() => {
    fetch("/api/preorders")
      .then((res) => res.json())
      .then((data) => {
        if (data.preorders && Array.isArray(data.preorders)) {
          const totalUnits = data.preorders.reduce(
            (acc: number, item: { quantity?: number }) => acc + (item.quantity || 1),
            0
          );
          if (totalUnits > 0) setReservedCount(totalUnits);
        }
      })
      .catch(() => {});
  }, []);

  const handleOpenPreorder = (product: Product, size: string) => {
    setSelectedProduct(product);
    setSelectedSize(size);
    setIsModalOpen(true);
  };

  const filteredProducts = INITIAL_PRODUCTS.filter((prod) => {
    if (activeCategory === "female") return prod.line === "female";
    if (activeCategory === "unisex") return prod.line === "unisex";
    if (activeCategory === "bundles") return prod.id.includes("trio");
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative pt-8 sm:pt-14 pb-20 overflow-hidden border-b border-[#1A1A1A]/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Editorial Headline & Value Proposition */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center space-x-2 bg-[#EFECE6] border border-[#1A1A1A]/10 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#4A1521]">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Alta Costura Íntima • Gyno-Safe & Body-Affirming</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl leading-[1.08] tracking-tight text-[#1A1A1A]">
                  Pura donde importa. <br />
                  <span className="italic font-normal text-[#4A1521]">
                    Sensual en todo lo demás.
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-[#1A1A1A]/75 max-w-xl leading-relaxed font-light">
                  Lencería de diseño sensual europeo con un santuario interior: puente de 100% algodón orgánico crudo sin teñir ni clorar. La libertad de sentirte ardiente sin pagar el peaje de la irritación.
                </p>

                {/* Founder Micro-Sign */}
                <div className="pt-2 flex items-center space-x-4 text-xs text-[#1A1A1A]/70">
                  <div className="flex -space-x-2 overflow-hidden">
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F5F2EB] bg-[#4A1521] text-white flex items-center justify-center font-serif text-xs">
                      M
                    </div>
                    <div className="inline-block h-8 w-8 rounded-full ring-2 ring-[#F5F2EB] bg-[#1A1A1A] text-[#DCD4C4] flex items-center justify-center font-serif text-xs">
                      S
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Creado por Marie & Socio</p>
                    <p className="text-[11px] text-[#1A1A1A]/60">Psicología Conductual & Protección Ambiental</p>
                  </div>
                </div>

                {/* Primary CTA Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    href="/preorder-checkout"
                    className="inline-flex items-center justify-center space-x-2 bg-[#4A1521] hover:bg-[#360E17] text-[#F5F2EB] px-8 py-4 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg shadow-[#4A1521]/15 transition-transform active:scale-95"
                  >
                    <span>Reservar Mi Prenda (Preventa)</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/collections"
                    className="inline-flex items-center justify-center space-x-2 bg-[#EFECE6] hover:bg-white text-[#1A1A1A] px-7 py-4 rounded-full text-xs uppercase tracking-widest font-bold border border-[#1A1A1A]/15 transition-colors"
                  >
                    <span>Explorar Catálogo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Visual Grid (Authentic Brand Imagery) */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#1A1A1A]/15 bg-[#EFECE6]">
                  <div className="relative aspect-4/5 w-full">
                    <Image
                      src="/images/brand/vlush-hero-grid.jpg"
                      alt="Colección V-Lush Lingerie - Encaje sensual y puente de algodón crudo Gyno-Safe"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>

                  {/* Floating Overlay Badge: Gyno-Safe Gusset callout */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#F5F2EB]/95 backdrop-blur-md p-4 rounded-xl border border-[#1A1A1A]/10 shadow-lg text-xs space-y-1">
                    <div className="flex items-center justify-between font-serif text-sm font-semibold text-[#4A1521]">
                      <span className="flex items-center space-x-1.5">
                        <Shield className="w-4 h-4" />
                        <span>Innovación: Gyno-Safe Gusset</span>
                      </span>
                      <span className="text-[10px] uppercase font-sans tracking-wider bg-[#4A1521] text-white px-2 py-0.5 rounded-full">
                        Patrón Registrado
                      </span>
                    </div>
                    <p className="text-[11px] text-[#1A1A1A]/70 leading-normal">
                      Puente ensanchado 8.2 cm de algodón virgen sin blanquear. Cero tintes, cero irritación.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Pilot Batch Progress Box */}
            <div className="mt-14">
              <BatchProgress
                currentReserved={reservedCount}
                totalGoal={100}
                onOpenQuickOrder={() => {
                  setSelectedProduct(INITIAL_PRODUCTS[0]);
                  setIsModalOpen(true);
                }}
              />
            </div>
          </div>
        </section>

        {/* FABRIC COMPARATOR SECTION (Encaje exterior vs Algodón crudo interior) */}
        <FabricComparator />

        {/* PRE-ORDER CATALOG SECTION */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
                Lanzamiento Limitado
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl tracking-tight text-[#1A1A1A] mt-1">
                Catálogo de Preventa (Lote #01)
              </h2>
              <p className="text-sm text-[#1A1A1A]/70 mt-1 max-w-md">
                Precios especiales de co-fundación. Reserva ahora y recibe en Diciembre con packaging compostable de edición especial.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === "all"
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Todas las Piezas
              </button>
              <button
                onClick={() => setActiveCategory("female")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === "female"
                    ? "bg-[#4A1521] text-white"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Línea Femenina
              </button>
              <button
                onClick={() => setActiveCategory("unisex")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === "unisex"
                    ? "bg-[#1A1A1A] text-[#DCD4C4]"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Línea Unisex & Fluid
              </button>
              <button
                onClick={() => setActiveCategory("bundles")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === "bundles"
                    ? "bg-[#C5A059] text-black"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Packs Trío
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <ProductCard
                key={prod.id}
                product={prod}
                onSelectPreorder={handleOpenPreorder}
              />
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/collections"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#4A1521] hover:text-[#1A1A1A] pb-1 border-b-2 border-[#4A1521] transition-colors"
            >
              <span>Ver todas las especificaciones y guía de tallas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* BRAND MANIFESTO EDITORIAL BLOCK */}
        <section className="bg-[#1A1A1A] text-[#F5F2EB] py-24 border-y border-black">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
            <span className="text-xs uppercase tracking-[0.3em] text-[#DCD4C4] font-semibold">
              El Manifiesto V-Lush
            </span>
            <blockquote className="font-serif text-3xl sm:text-5xl leading-tight text-white font-light italic">
              &ldquo;Tu piel íntima absorbe químicos más rápido que cualquier otra parte de tu cuerpo. No aceptamos que debas elegir entre sentirte deseada o sentirte sana.&rdquo;
            </blockquote>
            <p className="text-sm sm:text-base text-[#ECE5D8]/80 max-w-2xl mx-auto leading-relaxed">
              Marie aplicó sus estudios en psicología del bienestar y experiencia en negocios para entender la relación íntima entre autoestima y salud corporal. Su socio aportó el rigor de la gestión ambiental: eliminar los microplásticos del packaging y confeccionar exclusivamente en la Unión Europea.
            </p>
            <div className="pt-4 flex justify-center items-center space-x-6 text-xs text-[#DCD4C4]">
              <span>✓ Talleres en Braga & Łódź</span>
              <span>✓ Algodón GOTS 100% Virgen</span>
              <span>✓ Packaging Sin Plástico</span>
            </div>
          </div>
        </section>

        {/* SUSTAINABILITY & LOGISTICS HIGHLIGHT */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-[#1A1A1A]/10">
                <Image
                  src="/images/brand/vlush-moodboard.png"
                  alt="Packaging circular y tacto suave de algodón orgánico V-Lush"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
                Cadena de Suministro Consciente
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1A1A1A]">
                Empaquetado en la tierra, entregado sin huella
              </h2>
              <p className="text-sm text-[#1A1A1A]/75 leading-relaxed">
                Cada pedido de preventa se entrega en nuestra caja kraft de cartón reciclado FSC con cintas de almidón de patata y papel de seda libre de ácido. 100% biodegradable en tu compost casero.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    <strong>Producción ética en Europa:</strong> Confección en Portugal y Polonia con salarios justos y condiciones de trabajo transparentes.
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    <strong>DHL GoGreen:</strong> Cada gramo de CO2 emitido durante el envío dentro de la UE se compensa a través de proyectos climáticos certificados.
                  </span>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <span>
                    <strong>Cero sobreproducción:</strong> Fabricamos exclusivamente lo que nuestra comunidad cofinancia en la preventa.
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  href="/sustainability"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-bold text-[#4A1521] hover:text-[#1A1A1A]"
                >
                  <span>Conoce los detalles de nuestra auditoría ecológica</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Quick Pre-order Modal */}
      {selectedProduct && (
        <QuickPreorderModal
          product={selectedProduct}
          initialSize={selectedSize}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSuccess={() => setReservedCount((prev) => prev + 1)}
        />
      )}
    </div>
  );
}
