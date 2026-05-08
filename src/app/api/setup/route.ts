import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST() {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const supabase = createClient(supabaseUrl, serviceKey);

    // Try to read seats table - if it works, tables already exist
    const { error: checkError } = await supabase
      .from("seats")
      .select("remaining")
      .eq("id", 1)
      .single();

    if (checkError) {
      return NextResponse.json({
        success: false,
        message: "Tables not found. Please create them in Supabase Dashboard SQL Editor.",
        sql: `
CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS seats (
  id INT PRIMARY KEY DEFAULT 1,
  remaining INT NOT NULL DEFAULT 1599
);

INSERT INTO seats (id, remaining) VALUES (1, 1599) ON CONFLICT (id) DO NOTHING;
        `.trim(),
      });
    }

    return NextResponse.json({ success: true, message: "Tables already exist" });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
