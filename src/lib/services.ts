import { isSupabaseConfigured, supabase, vlushStore } from "@/lib/supabase";
import { INITIAL_PREORDERS } from "@/lib/initial-data";

export interface Preorder {
  id: string;
  customer_name: string;
  email: string;
  shipping_address?: string;
  country?: string;
  product_line?: string;
  item_name: string;
  size: string;
  quantity: number;
  total_amount: number;
  payment_status: string;
  created_at: string;
}

export interface CreatePreorderInput {
  customer_name: string;
  email: string;
  shipping_address?: string;
  country?: string;
  product_line?: string;
  item_name: string;
  size: string;
  quantity?: number;
  total_amount?: number;
}

// In-browser & Supabase Preorder Management
export async function submitPreorder(input: CreatePreorderInput): Promise<{ success: boolean; preorder: Preorder }> {
  const newOrder: Preorder = {
    id: `VL-${Math.floor(100000 + Math.random() * 900000)}`,
    customer_name: input.customer_name,
    email: input.email,
    shipping_address: input.shipping_address || "Dirección confirmada en preventa",
    country: input.country || "DE",
    product_line: input.product_line || "female",
    item_name: input.item_name,
    size: input.size,
    quantity: input.quantity || 1,
    total_amount: input.total_amount || 32,
    payment_status: "paid",
    created_at: new Date().toISOString(),
  };

  // 1. If Supabase is configured, write directly to database
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("preorders")
        .insert([newOrder])
        .select()
        .single();
      if (!error && data) {
        syncOrderToLocalStorage(data);
        return { success: true, preorder: data };
      }
    } catch (err) {
      console.warn("Supabase insert error, falling back to local storage:", err);
    }
  }

  // 2. Persist to browser localStorage
  syncOrderToLocalStorage(newOrder);

  // 3. Persist to in-memory store
  vlushStore.addPreorder({
    customerName: newOrder.customer_name,
    email: newOrder.email,
    shippingAddress: newOrder.shipping_address || "Dirección confirmada en preventa",
    country: newOrder.country || "DE",
    productLine: (newOrder.product_line as "female" | "unisex") || "female",
    itemName: newOrder.item_name,
    size: newOrder.size as any,
    quantity: newOrder.quantity,
    totalAmount: newOrder.total_amount,
    paymentStatus: "paid",
  });

  return { success: true, preorder: newOrder };
}

function syncOrderToLocalStorage(order: Preorder) {
  if (typeof window === "undefined") return;
  try {
    const existing = JSON.parse(localStorage.getItem("vlush_preorders") || "[]");
    localStorage.setItem("vlush_preorders", JSON.stringify([order, ...existing]));
  } catch (e) {
    console.error("Failed saving preorder to localStorage", e);
  }
}

export async function getPreorders(): Promise<Preorder[]> {
  // Try Supabase first
  if (isSupabaseConfigured && supabase) {
    try {
      const { data, error } = await supabase
        .from("preorders")
        .select("*")
        .order("created_at", { ascending: false });
      if (!error && data && data.length > 0) {
        return data;
      }
    } catch (err) {
      console.warn("Supabase fetch error, using local fallback:", err);
    }
  }

  // Fallback: merge localStorage with initial seed data
  if (typeof window !== "undefined") {
    try {
      const local = JSON.parse(localStorage.getItem("vlush_preorders") || "[]");
      const mappedInitial: Preorder[] = INITIAL_PREORDERS.map((p) => ({
        id: p.id,
        customer_name: p.customerName,
        email: p.email,
        shipping_address: p.shippingAddress,
        country: p.country,
        product_line: p.productLine,
        item_name: p.itemName,
        size: p.size,
        quantity: p.quantity,
        total_amount: p.totalAmount,
        payment_status: p.paymentStatus,
        created_at: p.createdAt,
      }));

      // Deduplicate by ID
      const all = [...local, ...mappedInitial];
      const seen = new Set();
      return all.filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
    } catch {
      // ignore
    }
  }

  return INITIAL_PREORDERS.map((p) => ({
    id: p.id,
    customer_name: p.customerName,
    email: p.email,
    shipping_address: p.shippingAddress,
    country: p.country,
    product_line: p.productLine,
    item_name: p.itemName,
    size: p.size,
    quantity: p.quantity,
    total_amount: p.totalAmount,
    payment_status: p.paymentStatus,
    created_at: p.createdAt,
  }));
}

// Master PIN Authentication Service
export const MASTER_PIN = "vlush2026";

export function authenticateFounder(pin: string): boolean {
  if (pin.trim() === MASTER_PIN) {
    if (typeof window !== "undefined") {
      localStorage.setItem("vlush_founder_session", "active");
      document.cookie = "vlush_founder_session=active; path=/; max-age=604800; SameSite=Lax";
    }
    return true;
  }
  return false;
}

export function logoutFounder(): void {
  if (typeof window !== "undefined") {
    localStorage.removeItem("vlush_founder_session");
    document.cookie = "vlush_founder_session=; path=/; max-age=0";
  }
}

export function isFounderAuthenticated(): boolean {
  if (typeof window === "undefined") return false;
  const hasStorage = localStorage.getItem("vlush_founder_session") === "active";
  const hasCookie = document.cookie.includes("vlush_founder_session=active");
  return hasStorage || hasCookie;
}
