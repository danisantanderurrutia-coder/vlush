"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ecommerce/ProductCard";
import QuickPreorderModal from "@/components/ecommerce/QuickPreorderModal";
import BatchProgress from "@/components/ecommerce/BatchProgress";
import { INITIAL_PRODUCTS, Product } from "@/lib/initial-data";
import { Sparkles, Ruler, Shield, Layers, Filter } from "lucide-react";

export default function CollectionsPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>("M");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "female" | "unisex" | "trios">("all");
  const [showSizeGuide, setShowSizeGuide] = useState(false);

  const filteredProducts = INITIAL_PRODUCTS.filter((p) => {
    if (activeTab === "female") return p.line === "female" && !p.id.includes("trio");
    if (activeTab === "unisex") return p.line === "unisex" && !p.id.includes("trio");
    if (activeTab === "trios") return p.availableForTrio || p.id.includes("trio");
    return true;
  });

  const handleOpenPreorder = (product: Product, size: string) => {
    setSelectedProduct(product);
    setSelectedSize(size);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1A1A1A]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#4A1521] font-semibold">
              Edición Pre-Order Lote #01
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl text-[#1A1A1A] mt-2 mb-4">
              Colección V-Lush
            </h1>
            <p className="text-sm sm:text-base text-[#1A1A1A]/70 leading-relaxed font-light">
              Telas nobles de tacto sensorial exterior y la pureza biológica del algodón virgen en contacto con tu mucosa. Diseñado para cuerpos libres de tabúes y pieles exigentes.
            </p>
          </div>

          {/* Quick Filter & Size Guide Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-10 border-b border-[#1A1A1A]/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#1A1A1A]/50 font-medium flex items-center mr-1">
                <Filter className="w-3.5 h-3.5 mr-1" /> Filtrar:
              </span>
              <button
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "all"
                    ? "bg-[#1A1A1A] text-white"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Todas las Siluetas
              </button>
              <button
                onClick={() => setActiveTab("female")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "female"
                    ? "bg-[#4A1521] text-white"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Línea Femenina (Cheeky, Thong, Strappy)
              </button>
              <button
                onClick={() => setActiveTab("unisex")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "unisex"
                    ? "bg-[#1A1A1A] text-[#DCD4C4]"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Línea Unisex / Fluid (Anatomical)
              </button>
              <button
                onClick={() => setActiveTab("trios")}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeTab === "trios"
                    ? "bg-[#C5A059] text-black"
                    : "bg-[#EFECE6] text-[#1A1A1A] hover:bg-[#DCD4C4]"
                }`}
              >
                Packs de 3 (75 € - 85 €)
              </button>
            </div>

            <button
              onClick={() => setShowSizeGuide(!showSizeGuide)}
              className="inline-flex items-center space-x-1.5 text-xs text-[#4A1521] hover:text-[#1A1A1A] font-semibold underline shrink-0"
            >
              <Ruler className="w-4 h-4" />
              <span>{showSizeGuide ? "Ocultar Guía de Tallas" : "Guía de Tallas & Ajuste Anatómico"}</span>
            </button>
          </div>

          {/* Collapsible Size Guide */}
          {showSizeGuide && (
            <div className="mb-12 p-6 rounded-2xl bg-[#ECE5D8] border border-[#1A1A1A]/10 text-xs animate-fade-in space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg text-[#1A1A1A] font-bold">
                  Guía Anatómica de Medidas V-Lush (XS - XXL)
                </h3>
                <span className="text-[10px] text-[#4A1521] uppercase font-bold tracking-wider">
                  Elasticidad Multidireccional Soft-Touch
                </span>
              </div>
              <p className="text-[#1A1A1A]/75">
                Nuestras prendas cuentan con un 12-15% de elastano de alta memoria. Si estás entre dos tallas, recomendamos elegir la menor si prefieres un ajuste ceñido o la mayor para máxima holgura en descanso.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#1A1A1A]/20 text-[11px] font-bold uppercase text-[#1A1A1A]">
                      <th className="py-2 pr-4">Talla</th>
                      <th className="py-2 pr-4">Cadera (cm)</th>
                      <th className="py-2 pr-4">Cintura (cm)</th>
                      <th className="py-2 pr-4">Equivalencia UE</th>
                      <th className="py-2">Ancho Puente Gusset</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#1A1A1A]/10 text-[11px]">
                    <tr>
                      <td className="py-2 font-bold">XS</td>
                      <td>84 - 89 cm</td>
                      <td>60 - 65 cm</td>
                      <td>32 - 34</td>
                      <td className="text-[#4A1521] font-semibold">7.5 cm (Gyno-Safe)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">S</td>
                      <td>90 - 95 cm</td>
                      <td>66 - 71 cm</td>
                      <td>36</td>
                      <td className="text-[#4A1521] font-semibold">8.0 cm (Gyno-Safe)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">M</td>
                      <td>96 - 101 cm</td>
                      <td>72 - 77 cm</td>
                      <td>38 - 40</td>
                      <td className="text-[#4A1521] font-semibold">8.2 cm (Gyno-Safe)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">L</td>
                      <td>102 - 107 cm</td>
                      <td>78 - 83 cm</td>
                      <td>42</td>
                      <td className="text-[#4A1521] font-semibold">8.5 cm (Gyno-Safe)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">XL</td>
                      <td>108 - 114 cm</td>
                      <td>84 - 90 cm</td>
                      <td>44 - 46</td>
                      <td className="text-[#4A1521] font-semibold">9.0 cm (Gyno-Safe)</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-bold">XXL</td>
                      <td>115 - 122 cm</td>
                      <td>91 - 98 cm</td>
                      <td>48</td>
                      <td className="text-[#4A1521] font-semibold">9.5 cm (Gyno-Safe)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

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

          {/* Batch Progress reminder */}
          <div className="mt-16">
            <BatchProgress
              onOpenQuickOrder={() => {
                setSelectedProduct(INITIAL_PRODUCTS[0]);
                setIsModalOpen(true);
              }}
            />
          </div>
        </div>
      </main>

      <Footer />

      {selectedProduct && (
        <QuickPreorderModal
          product={selectedProduct}
          initialSize={selectedSize}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
