"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, Sparkles, Shield, ArrowRight, Loader2, UserCheck } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/hub";

  const [founder, setFounder] = useState<"Marie" | "Partner">("Marie");
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ founder, pin }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "PIN incorrecto");
      }

      router.push(callbackUrl);
      router.refresh();
    } catch (err: any) {
      setErrorMsg(err.message || "Error al autenticar");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickDemoLogin = (selectedFounder: "Marie" | "Partner", demoPin: string) => {
    setFounder(selectedFounder);
    setPin(demoPin);
    setTimeout(() => {
      fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ founder: selectedFounder, pin: demoPin }),
      }).then(() => {
        router.push(callbackUrl);
        router.refresh();
      });
    }, 100);
  };

  return (
    <div className="w-full max-w-md bg-[#181B22] border border-[#272B36] rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#4A1521]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center space-y-2 relative">
        <Link href="/" className="inline-block">
          <span className="font-serif text-3xl tracking-tight text-white hover:text-[#DCD4C4] transition-colors">
            V-Lush
          </span>
          <span className="block text-[9px] uppercase tracking-[0.3em] text-[#DCD4C4]/70 font-sans">
            Founders Private Hub
          </span>
        </Link>
        <h1 className="text-lg font-semibold text-white pt-2">Acceso a Gestión Interna</h1>
        <p className="text-xs text-[#8E95A5]">
          Área restringida para Marie y socio de sostenibilidad.
        </p>
      </div>

      {/* Quick Founder Selection */}
      <div className="grid grid-cols-2 gap-2 bg-[#0F1115] p-1.5 rounded-xl border border-[#272B36]">
        <button
          type="button"
          onClick={() => {
            setFounder("Marie");
            setPin("marie123");
          }}
          className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
            founder === "Marie"
              ? "bg-[#4A1521] text-white shadow-sm font-semibold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Marie (Mgmt/Psicología)
        </button>
        <button
          type="button"
          onClick={() => {
            setFounder("Partner");
            setPin("partner123");
          }}
          className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${
            founder === "Partner"
              ? "bg-[#272B36] text-white shadow-sm font-semibold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Socio (Sostenibilidad)
        </button>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#8E95A5] mb-1">
            PIN de Acceso Fundador:
          </label>
          <div className="relative">
            <input
              type="password"
              required
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="Introduce tu PIN"
              className="w-full text-xs px-3.5 py-3 rounded-xl bg-[#0F1115] border border-[#272B36] text-white placeholder-[#8E95A5]/40 focus:outline-none focus:border-[#4A1521]"
            />
            <Lock className="w-4 h-4 text-[#8E95A5] absolute right-3.5 top-3.5" />
          </div>
        </div>

        {errorMsg && (
          <p className="text-xs text-rose-400 bg-rose-950/40 border border-rose-800/50 p-2.5 rounded-lg">
            {errorMsg}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#4A1521] hover:bg-[#6E2232] text-white py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Validando...</span>
            </>
          ) : (
            <>
              <span>Entrar al Hub de Gestión</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Demo Fast Shortcuts */}
      <div className="pt-4 border-t border-[#272B36] space-y-2">
        <p className="text-[10px] uppercase tracking-wider text-[#8E95A5] font-semibold text-center">
          Accesos Rápidos de Demostración:
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => handleQuickDemoLogin("Marie", "marie123")}
            className="flex-1 text-[11px] bg-[#0F1115] hover:bg-[#272B36] border border-[#272B36] py-2 rounded-lg text-white/90 flex items-center justify-center space-x-1"
          >
            <UserCheck className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Entrar como Marie</span>
          </button>
          <button
            onClick={() => handleQuickDemoLogin("Partner", "partner123")}
            className="flex-1 text-[11px] bg-[#0F1115] hover:bg-[#272B36] border border-[#272B36] py-2 rounded-lg text-white/90 flex items-center justify-center space-x-1"
          >
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Entrar como Socio</span>
          </button>
        </div>
      </div>

      <div className="text-center">
        <Link
          href="/"
          className="text-xs text-[#8E95A5] hover:text-white transition-colors underline"
        >
          ← Volver a la Tienda Pública
        </Link>
      </div>
    </div>
  );
}

export default function HubLoginPage() {
  return (
    <div className="min-h-screen bg-[#0F1115] text-[#ededed] flex flex-col justify-center items-center p-4">
      <Suspense fallback={<div className="text-white text-xs">Cargando portal...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
