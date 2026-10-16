import { NextResponse } from "next/server";
import { isSupabaseConfigured, supabase, vlushStore } from "@/lib/supabase";

export async function GET() {
  if (isSupabaseConfigured && supabase) {
    const { data, error } = await supabase
      .from("preorders")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error && data) {
      return NextResponse.json({ preorders: data, source: "supabase" });
    }
  }

  // Fallback to in-memory store
  return NextResponse.json({
    preorders: vlushStore.getPreorders(),
    source: "local",
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customer_name,
      email,
      shipping_address,
      country,
      product_line,
      item_name,
      size,
      quantity,
      total_amount,
    } = body;

    if (!customer_name || !email || !item_name || !size) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios para la reserva" },
        { status: 400 }
      );
    }

    if (isSupabaseConfigured && supabase) {
      const { data, error } = await supabase
        .from("preorders")
        .insert([
          {
            customer_name,
            email,
            shipping_address: shipping_address || "Dirección confirmada en preventa",
            country: country || "DE",
            product_line: product_line || "female",
            item_name,
            size,
            quantity: quantity || 1,
            total_amount: total_amount || 32.0,
            payment_status: "paid",
          },
        ])
        .select()
        .single();

      if (!error && data) {
        return NextResponse.json({ success: true, preorder: data, source: "supabase" });
      }
      console.warn("Supabase insert error, falling back to local store:", error);
    }

    // Save in local store
    const localOrder = vlushStore.addPreorder({
      customerName: customer_name,
      email,
      shippingAddress: shipping_address || "Dirección confirmada en preventa",
      country: country || "Alemania",
      productLine: product_line || "female",
      itemName: item_name,
      size: size,
      quantity: quantity || 1,
      totalAmount: total_amount || 32,
      paymentStatus: "paid",
    });

    return NextResponse.json({
      success: true,
      preorder: localOrder,
      source: "local",
    });
  } catch (error) {
    console.error("Preorder API error:", error);
    return NextResponse.json({ error: "Error procesando reserva" }, { status: 500 });
  }
}
