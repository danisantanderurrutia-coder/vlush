"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Lock, ArrowRight, Loader2, KeyRound } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl") || "/hub";

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
        body: JSON.stringify({ pin }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "PIN Maestro incorrecto");
      }

      router.push(callbackUrl);
      router.refresh();
    } catch (err: any) {
      setErrorMsg(err.message || "Error al autenticar");
    } finally {
      setLoading(false);
    }
  };

  const handleQuickMasterPin = () => {
    setPin("vlush2026");
    setErrorMsg("");
  };

  return (
    <div className="w-full max-w-md bg-[#181B22] border border-[#272B36] rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#4A1521]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-2 relative">
        <Link href="/" className="inline-block">
          <span className="font-serif text-3xl tracking-tight text-white hover:text-[#DCD4C4] transition-colors">
            V-Lush
          </span>
          <span className="block text-[9px] uppercase tracking-[0.3em] text-[#DCD4C4]/70 font-sans">
            Founders Private Hub
          </span>
        </Link>
        <h1 className="text-lg font-semibold text-white pt-2">Acceso con PIN Maestro</h1>
        <p className="text-xs text-[#8E95A5]">
          Área privada exclusiva para los fundadores (Marie & Socio).
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-[#8E95A5] mb-1.5">
            Introduce el PIN Maestro:
          </label>
          <div className="relative">
            <input
              type="password"
              required
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder="••••••••"
              autoFocus
              className="w-full text-sm px-4 py-3 rounded-xl bg-[#0F1115] border border-[#272B36] text-white placeholder-[#8E95A5]/40 focus:outline-none focus:border-[#4A1521] tracking-widest"
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
          className="w-full bg-[#4A1521] hover:bg-[#6E2232] text-white py-3 rounded-xl text-xs uppercase tracking-wider font-semibold transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center space-x-2 shadow-lg"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Validando PIN...</span>
            </>
          ) : (
            <>
              <span>Entrar al Hub</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>

      {/* Quick Demo Helper */}
      <div className="pt-3 border-t border-[#272B36] flex items-center justify-between text-xs text-[#8E95A5]">
        <button
          type="button"
          onClick={handleQuickMasterPin}
          className="inline-flex items-center space-x-1.5 text-[11px] text-[#C5A059] hover:underline"
        >
          <KeyRound className="w-3.5 h-3.5" />
          <span>Autocompletar PIN maestro (demo)</span>
        </button>
        <span className="font-mono text-[10px] text-[#7E8699]">vlush2026</span>
      </div>

      <div className="text-center pt-2">
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
