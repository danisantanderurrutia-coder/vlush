"use client";

import Link from "next/link";
import { useState } from "react";
import { ShieldCheck, Leaf, HeartHandshake, Truck, ArrowRight, Check } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#1A1A1A] text-[#F5F2EB] pt-16 pb-12 border-t border-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Value Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-12 border-b border-white/10 text-xs text-[#EFECE6]/80">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">Gyno & Skin-Safe</p>
              <p className="text-[11px] text-white/60">Algodón orgánico sin tintes</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Leaf className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">Zero Plástico</p>
              <p className="text-[11px] text-white/60">Cajas kraft 100% compostables</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <HeartHandshake className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">Confección Europea Ética</p>
              <p className="text-[11px] text-white/60">Talleres en Portugal & Polonia</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Truck className="w-5 h-5 text-[#DCD4C4] shrink-0" />
            <div>
              <p className="font-semibold text-white">DHL GoGreen</p>
              <p className="text-[11px] text-white/60">Logística neutral en carbono</p>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-12">
          {/* Brand Manifesto */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-tight text-[#F5F2EB]">
                V-Lush
              </span>
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#DCD4C4] font-sans">
                Pure where it matters, sensual everywhere else.
              </span>
            </Link>
            <p className="text-sm text-[#EFECE6]/70 leading-relaxed max-w-sm">
              Fundada por Marie (Gestión y Psicología) y su socio (Protección y Gestión Ambiental). Diseñamos la lencería que el mercado ignoró: la fusión honesta de alta sensualidad y cuidado ginecológico radical.
            </p>
            <div className="pt-2 text-xs text-white/50 space-y-1">
              <p>📍 Estudio de Diseño: Berlín / Confección: Braga & Łódź</p>
              <p>🌱 Fibras Certificadas GOTS & OEKO-TEX Standard 100</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DCD4C4] font-semibold">
              Explorar
            </h4>
            <ul className="space-y-2 text-sm text-[#EFECE6]/80">
              <li>
                <Link href="/collections" className="hover:text-white transition-colors">
                  Catálogo Preventa
                </Link>
              </li>
              <li>
                <Link href="/collections?line=female" className="hover:text-white transition-colors">
                  Línea Femenina
                </Link>
              </li>
              <li>
                <Link href="/collections?line=unisex" className="hover:text-white transition-colors">
                  Línea Unisex & Fluid
                </Link>
              </li>
              <li>
                <Link href="/story" className="hover:text-white transition-colors">
                  Manifiesto y Origen
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="hover:text-white transition-colors">
                  Cadena de Suministro
                </Link>
              </li>
            </ul>
          </div>

          {/* Hub & Transparency */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DCD4C4] font-semibold">
              Gobernanza
            </h4>
            <ul className="space-y-2 text-sm text-[#EFECE6]/80">
              <li>
                <Link href="/hub" className="text-[#DCD4C4] hover:text-white flex items-center space-x-1 font-medium">
                  <span>Portal Fundadores (/hub)</span>
                </Link>
              </li>
              <li>
                <Link href="/hub/dossier" className="hover:text-white transition-colors">
                  Dossier del Proyecto
                </Link>
              </li>
              <li>
                <Link href="/hub/supply-chain" className="hover:text-white transition-colors">
                  Tracking de Muestras
                </Link>
              </li>
              <li>
                <Link href="/hub/finances" className="hover:text-white transition-colors">
                  Finanzas de Lanzamiento
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter / Early Access */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#DCD4C4] font-semibold">
              Acceso a Futuros Lotes
            </h4>
            <p className="text-xs text-[#EFECE6]/70">
              Únete a nuestra lista íntima para recibir actualizaciones de la producción y lanzamientos de edición limitada.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu.email@ejemplo.com"
                  required
                  className="w-full bg-white/10 text-white placeholder-white/40 text-xs px-3.5 py-2.5 rounded-lg border border-white/20 focus:outline-none focus:border-[#DCD4C4]"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 bg-[#4A1521] hover:bg-[#6E2232] text-white px-3 rounded-md text-xs font-medium flex items-center space-x-1"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-emerald-400">
                  ¡Gracias! Te hemos añadido a la lista prioritaria de V-Lush.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50">
          <p>© 2026 V-Lush Lingerie UG. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <span>Envíos a Alemania y Unión Europea</span>
            <Link href="/story" className="hover:text-white">Aviso Legal & Privacidad</Link>
            <Link href="/hub" className="hover:text-white">Acceso Privado</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
