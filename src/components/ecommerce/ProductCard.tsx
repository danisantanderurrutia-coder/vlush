"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/initial-data";
import { formatEUR } from "@/lib/utils";
import { Sparkles, Shield, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ProductCardProps {
  product: Product;
  onSelectPreorder?: (product: Product, size: string) => void;
}

export default function ProductCard({ product, onSelectPreorder }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || product.sizes[0]);
  const [showDetails, setShowDetails] = useState(false);
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const { t } = useLanguage();

  const allImages = product.images && product.images.length > 0 ? product.images : [product.image];
  // If hovered and user hasn't explicitly clicked another image, show the on-model shot (index 1)
  const displayImage = isHovered && allImages.length > 1 && activeImgIndex === 0 ? allImages[1] : allImages[activeImgIndex] || allImages[0];

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group bg-[#F5F2EB] rounded-2xl border border-[#1A1A1A]/10 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:border-[#4A1521]/30"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-4/5 overflow-hidden bg-[#EFECE6]">
        <Image
          src={displayImage}
          alt={product.name}
          fill
          className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Multi-image indicator dots / switcher */}
        {allImages.length > 1 && (
          <div className="absolute top-12 right-3 z-10 flex flex-col gap-1.5 bg-black/40 backdrop-blur-md p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            {allImages.slice(0, 3).map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImgIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  (isHovered && activeImgIndex === 0 && idx === 1) || activeImgIndex === idx
                    ? "bg-[#C5A059] scale-125"
                    : "bg-white/60 hover:bg-white"
                }`}
                title={`Ver foto ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center space-x-1 bg-[#1A1A1A]/90 backdrop-blur-md text-[#F5F2EB] text-[10px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-full shadow-sm">
              <Sparkles className="w-3 h-3 text-[#C5A059]" />
              <span>{product.badge}</span>
            </span>
          </div>
        )}

        {/* Line Pill */}
        <div className="absolute top-3 right-3">
          <span
            className={`text-[9px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full ${
              product.line === "female"
                ? "bg-[#4A1521] text-white"
                : "bg-[#1A1A1A] text-[#DCD4C4]"
            }`}
          >
            {product.line === "female" ? t.product.lineFemale : t.product.lineUnisex}
          </span>
        </div>

        {/* Gusset Tag on image bottom */}
        <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md rounded-lg p-2 border border-black/5 text-[11px] text-[#1A1A1A] flex items-center justify-between">
          <div className="flex items-center space-x-1.5 truncate">
            <Shield className="w-3.5 h-3.5 text-[#4A1521] shrink-0" />
            <span className="truncate font-medium">{product.gussetSpecs}</span>
          </div>
          <button
            type="button"
            onClick={() => setShowDetails(!showDetails)}
            className="text-[10px] text-[#4A1521] font-bold uppercase underline hover:text-[#1A1A1A] ml-2 shrink-0"
          >
            {showDetails ? t.product.closeBtn : t.product.infoBtn}
          </button>
        </div>
      </div>

      {/* Expanded Material Details Drawer */}
      {showDetails && (
        <div className="bg-[#ECE5D8] p-4 text-xs border-y border-[#1A1A1A]/10 space-y-2 animate-fade-in">
          <div>
            <span className="font-bold text-[#4A1521] uppercase text-[10px]">{t.product.gussetLabel}:</span>
            <p className="text-[#1A1A1A]/80">{product.materials.gusset}</p>
          </div>
          <div>
            <span className="font-bold text-[#1A1A1A] uppercase text-[10px]">{t.product.outerLabel}:</span>
            <p className="text-[#1A1A1A]/80">{product.materials.outer}</p>
          </div>
          <div>
            <span className="font-bold text-[#1A1A1A] uppercase text-[10px]">{t.product.originLabel}:</span>
            <p className="text-[#1A1A1A]/80">{product.materials.origin}</p>
          </div>
        </div>
      )}

      {/* Product Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-baseline justify-between">
            <h3 className="font-serif text-xl sm:text-2xl text-[#1A1A1A] group-hover:text-[#4A1521] transition-colors">
              {product.name}
            </h3>
            <div className="text-right">
              <span className="font-serif text-xl font-bold text-[#1A1A1A]">
                {formatEUR(product.price)}
              </span>
              {product.trioPrice && (
                <p className="text-[10px] text-[#4A1521] font-semibold">
                  3-Pack: {formatEUR(product.trioPrice)}
                </p>
              )}
            </div>
          </div>
          <p className="text-xs text-[#1A1A1A]/70 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Size Selector */}
        <div className="space-y-2 pt-2 border-t border-[#1A1A1A]/10">
          <div className="flex justify-between items-center text-[11px]">
            <span className="text-[#1A1A1A]/60 font-medium">{t.product.selectSize}:</span>
            <span className="font-bold text-[#4A1521]">{selectedSize}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((sz) => (
              <button
                key={sz}
                type="button"
                onClick={() => setSelectedSize(sz)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                  selectedSize === sz
                    ? "bg-[#1A1A1A] text-[#F5F2EB] border-[#1A1A1A]"
                    : "bg-white/60 text-[#1A1A1A] border-[#1A1A1A]/15 hover:border-[#1A1A1A]/40"
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          {onSelectPreorder ? (
            <button
              type="button"
              onClick={() => onSelectPreorder(product, selectedSize)}
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#4A1521] hover:bg-[#360E17] text-[#F5F2EB] py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 shadow-sm"
            >
              <span>{t.product.reserveBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <Link
              href={`/preorder-checkout?productId=${product.id}&size=${selectedSize}`}
              className="w-full inline-flex items-center justify-center space-x-2 bg-[#4A1521] hover:bg-[#360E17] text-[#F5F2EB] py-3 rounded-full text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 shadow-sm text-center"
            >
              <span>{t.product.reserveBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
