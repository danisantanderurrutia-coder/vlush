"use client";

import { useState } from "react";
import {
  Megaphone,
  Sparkles,
  Copy,
  Check,
  Calendar,
  Layers,
  Send,
  Eye,
  Plus,
} from "lucide-react";
import { INITIAL_CAMPAIGNS, Campaign } from "@/lib/initial-data";

export default function HubCampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(INITIAL_CAMPAIGNS);
  const [selectedAudience, setSelectedAudience] = useState<string>("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // New prompt input form
  const [showNewModal, setShowNewModal] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newAudience, setNewAudience] = useState<Campaign["audience"]>("female_daily");
  const [newChannel, setNewChannel] = useState("Instagram Reels");
  const [newPrompt, setNewPrompt] = useState("");
  const [newDate, setNewDate] = useState("2026-11-15");

  const filteredCampaigns = campaigns.filter(
    (c) => selectedAudience === "all" || c.audience === selectedAudience
  );

  const handleCopyPrompt = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newPrompt) return;

    const newCamp: Campaign = {
      id: `camp-${Date.now()}`,
      title: newTitle,
      audience: newAudience,
      channel: newChannel,
      promptReference: newPrompt,
      status: "scheduled",
      launchDate: newDate,
    };

    setCampaigns([newCamp, ...campaigns]);
    setShowNewModal(false);
    setNewTitle("");
    setNewPrompt("");
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262A36]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
            ESTRATEGIA EDITORIAL & CREATIVIDAD
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
            Gestor de Campañas & Prompts de IA
          </h1>
          <p className="text-xs text-[#8E95A5] mt-1">
            Repositorio de directivas visuales para Midjourney/Flux, copys editoriales y calendario de captación.
          </p>
        </div>

        <button
          onClick={() => setShowNewModal(true)}
          className="inline-flex items-center space-x-2 text-xs bg-[#4A1521] hover:bg-[#6E2232] text-white px-4 py-2.5 rounded-xl transition-all shadow-md active:scale-95 font-semibold"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo Prompt o Campaña</span>
        </button>
      </div>

      {/* Audience Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 bg-[#14161D] p-2 rounded-2xl border border-[#262A36]">
        <span className="text-xs text-[#8E95A5] px-3 font-medium">Filtrar por Audiencia:</span>
        <button
          onClick={() => setSelectedAudience("all")}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
            selectedAudience === "all"
              ? "bg-[#272B36] text-white font-bold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setSelectedAudience("female_daily")}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
            selectedAudience === "female_daily"
              ? "bg-[#4A1521] text-white font-bold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Línea Femenina Daily (Piel Sensible)
        </button>
        <button
          onClick={() => setSelectedAudience("hot_spicy")}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
            selectedAudience === "hot_spicy"
              ? "bg-[#6E2232] text-white font-bold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Hot & Spicy (Noches de Impacto)
        </button>
        <button
          onClick={() => setSelectedAudience("queer_unisex")}
          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-colors ${
            selectedAudience === "queer_unisex"
              ? "bg-indigo-950 text-indigo-200 border border-indigo-800 font-bold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Unisex & Queer (Body-Affirming)
        </button>
      </div>

      {/* Campaigns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCampaigns.map((camp) => (
          <div
            key={camp.id}
            className="bg-[#14161D] rounded-2xl border border-[#262A36] p-6 flex flex-col justify-between space-y-4 hover:border-[#4A1521]/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <span
                  className={`text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                    camp.audience === "female_daily"
                      ? "bg-[#4A1521]/60 text-rose-200"
                      : camp.audience === "hot_spicy"
                      ? "bg-[#C5A059]/20 text-[#C5A059]"
                      : "bg-indigo-950 text-indigo-300"
                  }`}
                >
                  {camp.audience.replace("_", " ")}
                </span>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                    camp.status === "active"
                      ? "bg-emerald-950 text-emerald-400"
                      : "bg-[#272B36] text-[#8E95A5]"
                  }`}
                >
                  {camp.status === "active" ? "En Marcha" : "Programada"}
                </span>
              </div>

              <h3 className="text-base font-serif font-bold text-white">{camp.title}</h3>

              <div className="text-xs text-[#8E95A5] flex items-center space-x-2">
                <Calendar className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Lanzamiento: {camp.launchDate}</span>
                <span>•</span>
                <span className="text-white/80">{camp.channel}</span>
              </div>

              {/* Prompt box */}
              <div className="bg-[#1C202B] p-3.5 rounded-xl border border-[#272B36] relative group">
                <span className="text-[10px] font-mono uppercase text-[#C5A059] block mb-1 font-bold">
                  Prompt de IA Guardado:
                </span>
                <p className="text-xs text-[#A0A7B8] font-mono italic leading-relaxed">
                  &ldquo;{camp.promptReference}&rdquo;
                </p>
                <button
                  onClick={() => handleCopyPrompt(camp.id, camp.promptReference)}
                  className="mt-3 w-full inline-flex items-center justify-center space-x-1.5 text-[11px] bg-[#14161D] hover:bg-[#272B36] text-white py-1.5 rounded-lg border border-[#272B36] transition-colors"
                >
                  {copiedId === camp.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">¡Prompt Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar para Midjourney/Flux</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal to add new campaign prompt */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#181B22] text-[#E1E4EA] w-full max-w-lg rounded-2xl border border-[#272B36] p-6 sm:p-8 space-y-5">
            <div>
              <span className="text-xs font-mono uppercase text-[#C5A059] font-bold">
                NUEVA ACCIÓN EDITORIAL
              </span>
              <h3 className="font-serif text-2xl text-white font-bold mt-1">
                Registrar Campaña o Prompt de IA
              </h3>
            </div>

            <form onSubmit={handleCreateCampaign} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#8E95A5] mb-1">
                  Título de la Campaña:
                </label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  placeholder="Ej. Lookbook Sensual Otoño / Cápsula Unisex"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#8E95A5] mb-1">Audiencia:</label>
                  <select
                    value={newAudience}
                    onChange={(e) => setNewAudience(e.target.value as any)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="female_daily">Femenina Daily</option>
                    <option value="hot_spicy">Hot & Spicy</option>
                    <option value="queer_unisex">Unisex / Queer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8E95A5] mb-1">Canal:</label>
                  <input
                    type="text"
                    required
                    value={newChannel}
                    onChange={(e) => setNewChannel(e.target.value)}
                    placeholder="Instagram Reels, Substack, etc."
                    className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#8E95A5] mb-1">
                  Prompt Generativo / Copy de Campaña:
                </label>
                <textarea
                  rows={3}
                  required
                  value={newPrompt}
                  onChange={(e) => setNewPrompt(e.target.value)}
                  placeholder="Instrucciones para IA o copy visual en detalle..."
                  className="w-full text-xs p-3.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-[#272B36]">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="px-4 py-2 text-xs text-[#8E95A5] hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs bg-[#4A1521] hover:bg-[#6E2232] text-white font-semibold transition-colors"
                >
                  Guardar en el Hub
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
