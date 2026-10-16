import { createClient } from "@supabase/supabase-js";
import {
  INITIAL_TASKS,
  INITIAL_PREORDERS,
  INITIAL_FINANCIALS,
  INITIAL_MILESTONES,
  INITIAL_CAMPAIGNS,
  Task,
  PreorderItem,
  FinancialEntry,
  SupplyMilestone,
  Campaign,
} from "./initial-data";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl &&
  supabaseAnonKey &&
  !supabaseUrl.includes("your-project") &&
  supabaseUrl.startsWith("http")
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

/**
 * Local Reactive In-Memory & LocalStorage store for seamless development & offline demo
 */
class LocalVlushStore {
  private preorders: PreorderItem[] = [...INITIAL_PREORDERS];
  private tasks: Task[] = [...INITIAL_TASKS];
  private financials: FinancialEntry[] = [...INITIAL_FINANCIALS];
  private milestones: SupplyMilestone[] = [...INITIAL_MILESTONES];
  private campaigns: Campaign[] = [...INITIAL_CAMPAIGNS];

  constructor() {
    if (typeof window !== "undefined") {
      try {
        const savedPreorders = localStorage.getItem("vlush_preorders");
        if (savedPreorders) this.preorders = JSON.parse(savedPreorders);

        const savedTasks = localStorage.getItem("vlush_tasks");
        if (savedTasks) this.tasks = JSON.parse(savedTasks);

        const savedFin = localStorage.getItem("vlush_financials");
        if (savedFin) this.financials = JSON.parse(savedFin);
      } catch (e) {
        console.warn("Could not load from localStorage", e);
      }
    }
  }

  getPreorders() {
    return this.preorders;
  }

  addPreorder(item: Omit<PreorderItem, "id" | "createdAt">): PreorderItem {
    const newOrder: PreorderItem = {
      ...item,
      id: `ord-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };
    this.preorders = [newOrder, ...this.preorders];
    
    // Also add to financials
    const finEntry: FinancialEntry = {
      id: `fin-pre-${Date.now()}`,
      description: `Preventa: ${newOrder.customerName} (${newOrder.itemName})`,
      category: "marketing",
      type: "income_preorder",
      amount: newOrder.totalAmount,
      currency: "EUR",
      date: new Date().toISOString().split("T")[0],
    };
    this.financials = [finEntry, ...this.financials];

    if (typeof window !== "undefined") {
      localStorage.setItem("vlush_preorders", JSON.stringify(this.preorders));
      localStorage.setItem("vlush_financials", JSON.stringify(this.financials));
    }
    return newOrder;
  }

  getTasks() {
    return this.tasks;
  }

  updateTaskStatus(taskId: string, newStatus: Task["status"]) {
    this.tasks = this.tasks.map((t) =>
      t.id === taskId ? { ...t, status: newStatus } : t
    );
    if (typeof window !== "undefined") {
      localStorage.setItem("vlush_tasks", JSON.stringify(this.tasks));
    }
    return this.tasks;
  }

  addTask(task: Omit<Task, "id" | "createdAt">): Task {
    const newTask: Task = {
      ...task,
      id: `task-${Date.now()}`,
      createdAt: new Date().toISOString().split("T")[0],
    };
    this.tasks = [newTask, ...this.tasks];
    if (typeof window !== "undefined") {
      localStorage.setItem("vlush_tasks", JSON.stringify(this.tasks));
    }
    return newTask;
  }

  getFinancials() {
    return this.financials;
  }

  getMilestones() {
    return this.milestones;
  }

  getCampaigns() {
    return this.campaigns;
  }
}

export const vlushStore = new LocalVlushStore();
