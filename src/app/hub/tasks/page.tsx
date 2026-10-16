"use client";

import { useState } from "react";
import {
  KanbanSquare,
  Plus,
  Clock,
  CheckCircle2,
  Filter,
  User,
  ArrowRight,
  ArrowLeft,
  Calendar,
  AlertCircle,
  Tag,
} from "lucide-react";
import { INITIAL_TASKS, Task } from "@/lib/initial-data";
import { vlushStore } from "@/lib/supabase";

export default function HubTasksPage() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [ownerFilter, setOwnerFilter] = useState<"All" | "Marie" | "Partner">("All");
  const [showAddModal, setShowAddModal] = useState(false);

  // New task form state
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [owner, setOwner] = useState<Task["owner"]>("Marie");
  const [priority, setPriority] = useState<Task["priority"]>("high");
  const [deadline, setDeadline] = useState("2026-11-15");

  const columns: { id: Task["status"]; title: string; color: string }[] = [
    { id: "todo", title: "Backlog / Por Hacer", color: "border-slate-500/30" },
    { id: "in_progress", title: "En Progreso", color: "border-[#C5A059]/40" },
    { id: "review", title: "En Revisión / Muestras", color: "border-[#4A1521]/60" },
    { id: "done", title: "Hecho / Completado", color: "border-emerald-500/40" },
  ];

  const moveTask = (taskId: string, direction: "prev" | "next") => {
    const statusOrder: Task["status"][] = ["todo", "in_progress", "review", "done"];
    setTasks((prev) =>
      prev.map((t) => {
        if (t.id !== taskId) return t;
        const currentIndex = statusOrder.indexOf(t.status);
        const nextIndex =
          direction === "next"
            ? Math.min(statusOrder.length - 1, currentIndex + 1)
            : Math.max(0, currentIndex - 1);
        const newStatus = statusOrder[nextIndex];
        vlushStore.updateTaskStatus(taskId, newStatus);
        return { ...t, status: newStatus };
      })
    );
  };

  const handleCreateTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return;

    const newTask: Task = {
      id: `task-${Date.now()}`,
      title,
      description: desc,
      status: "todo",
      owner,
      priority,
      deadline,
      createdAt: new Date().toISOString().split("T")[0],
    };

    vlushStore.addTask(newTask);
    setTasks([newTask, ...tasks]);
    setShowAddModal(false);
    setTitle("");
    setDesc("");
  };

  const filteredTasks = tasks.filter((t) => {
    if (ownerFilter === "All") return true;
    if (ownerFilter === "Marie") return t.owner === "Marie" || t.owner === "Both";
    if (ownerFilter === "Partner") return t.owner === "Partner" || t.owner === "Both";
    return true;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#262A36]">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#C5A059] font-bold">
            GESTIÓN DE OPERACIONES & ROADMAP
          </span>
          <h1 className="text-2xl sm:text-3xl font-serif text-white font-bold mt-1">
            Tablero Kanban de Fundadores
          </h1>
          <p className="text-xs text-[#8E95A5] mt-1">
            Tareas activas de Marie (Dirección y Psicología) y Socio (Gestión Ambiental y Talleres).
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center space-x-2 text-xs bg-[#4A1521] hover:bg-[#6E2232] text-white px-4 py-2.5 rounded-xl font-semibold shadow-md active:scale-95 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Nueva Tarea</span>
        </button>
      </div>

      {/* Filter by Owner Bar */}
      <div className="flex items-center space-x-2 bg-[#14161D] p-2 rounded-2xl border border-[#262A36] text-xs">
        <span className="text-[#8E95A5] px-3 font-medium flex items-center">
          <Filter className="w-3.5 h-3.5 mr-1" /> Responsable:
        </span>
        <button
          onClick={() => setOwnerFilter("All")}
          className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${
            ownerFilter === "All"
              ? "bg-[#272B36] text-white font-bold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Todos ({tasks.length})
        </button>
        <button
          onClick={() => setOwnerFilter("Marie")}
          className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${
            ownerFilter === "Marie"
              ? "bg-[#4A1521] text-white font-bold"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Marie (Dirección/Psicología)
        </button>
        <button
          onClick={() => setOwnerFilter("Partner")}
          className={`px-3 py-1.5 rounded-xl font-medium transition-colors ${
            ownerFilter === "Partner"
              ? "bg-[#1E222D] text-emerald-300 font-bold border border-emerald-800/40"
              : "text-[#8E95A5] hover:text-white"
          }`}
        >
          Socio (Gestión Ambiental)
        </button>
      </div>

      {/* Kanban Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {columns.map((col) => {
          const colTasks = filteredTasks.filter((t) => t.status === col.id);
          return (
            <div
              key={col.id}
              className={`bg-[#14161D] rounded-2xl border ${col.color} p-4 flex flex-col justify-between min-h-[500px]`}
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#262A36] mb-3">
                  <h3 className="text-xs font-serif font-bold text-white uppercase tracking-wider">
                    {col.title}
                  </h3>
                  <span className="text-[10px] font-mono font-bold bg-[#272B36] text-[#A0A7B8] px-2 py-0.5 rounded-full">
                    {colTasks.length}
                  </span>
                </div>

                <div className="space-y-3">
                  {colTasks.map((t) => (
                    <div
                      key={t.id}
                      className="p-3.5 bg-[#1C202B] rounded-xl border border-[#2B303F] space-y-2.5 hover:border-[#3E4557] transition-all group shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <span
                          className={`text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded ${
                            t.priority === "high"
                              ? "bg-rose-950/70 text-rose-300 border border-rose-800/40"
                              : t.priority === "medium"
                              ? "bg-amber-950/70 text-amber-300 border border-amber-800/40"
                              : "bg-slate-800 text-slate-300"
                          }`}
                        >
                          {t.priority === "high" ? "Alta Prioridad" : t.priority}
                        </span>

                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                            t.owner === "Marie"
                              ? "bg-[#4A1521]/60 text-white"
                              : t.owner === "Partner"
                              ? "bg-emerald-950/60 text-emerald-300"
                              : "bg-indigo-950/60 text-indigo-300"
                          }`}
                        >
                          {t.owner}
                        </span>
                      </div>

                      <h4 className="text-xs font-semibold text-white leading-snug">
                        {t.title}
                      </h4>

                      {t.description && (
                        <p className="text-[11px] text-[#8E95A5] leading-relaxed line-clamp-3">
                          {t.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between pt-2 border-t border-[#262A36] text-[10px] text-[#7E8699]">
                        <span className="flex items-center space-x-1 font-mono">
                          <Calendar className="w-3 h-3" />
                          <span>{t.deadline}</span>
                        </span>

                        {/* Move controls */}
                        <div className="flex space-x-1">
                          {col.id !== "todo" && (
                            <button
                              onClick={() => moveTask(t.id, "prev")}
                              title="Mover a etapa anterior"
                              className="p-1 hover:bg-[#272B36] rounded text-[#A0A7B8] hover:text-white"
                            >
                              <ArrowLeft className="w-3 h-3" />
                            </button>
                          )}
                          {col.id !== "done" && (
                            <button
                              onClick={() => moveTask(t.id, "next")}
                              title="Avanzar etapa"
                              className="p-1 hover:bg-[#272B36] rounded text-[#A0A7B8] hover:text-white"
                            >
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}

                  {colTasks.length === 0 && (
                    <div className="py-8 text-center text-xs text-[#7E8699]/60 italic">
                      No hay tareas en esta etapa
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => {
                  setShowAddModal(true);
                }}
                className="mt-4 w-full py-2 rounded-xl text-xs text-[#8E95A5] hover:text-white hover:bg-[#1E222D] border border-dashed border-[#262A36] flex items-center justify-center space-x-1 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Añadir tarjeta</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Modal Add Task */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-[#181B22] text-[#E1E4EA] w-full max-w-md rounded-2xl border border-[#262A36] p-6 space-y-4">
            <h3 className="font-serif text-xl font-bold text-white">Crear Nueva Tarea</h3>
            <form onSubmit={handleCreateTask} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-[#8E95A5] mb-1">Título:</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ej. Revisar cotización de rollos GOTS"
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#8E95A5] mb-1">Descripción:</label>
                <textarea
                  rows={2}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Detalles técnicos o requisitos..."
                  className="w-full text-xs p-3 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-[#8E95A5] mb-1">Responsable:</label>
                  <select
                    value={owner}
                    onChange={(e) => setOwner(e.target.value as any)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="Marie">Marie</option>
                    <option value="Partner">Socio (Ambiental)</option>
                    <option value="Both">Ambos</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#8E95A5] mb-1">Prioridad:</label>
                  <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value as any)}
                    className="w-full text-xs px-3 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                  >
                    <option value="high">Alta</option>
                    <option value="medium">Media</option>
                    <option value="low">Baja</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#8E95A5] mb-1">Fecha Límite:</label>
                <input
                  type="date"
                  value={deadline}
                  onChange={(e) => setDeadline(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl bg-[#0F1115] border border-[#272B36] text-white focus:outline-none focus:border-[#4A1521]"
                />
              </div>

              <div className="flex justify-end space-x-3 pt-3 border-t border-[#272B36]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-[#8E95A5] hover:text-white"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs bg-[#4A1521] hover:bg-[#6E2232] text-white font-semibold transition-colors"
                >
                  Guardar Tarea
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
