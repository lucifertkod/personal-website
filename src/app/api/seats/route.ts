import { NextResponse } from "next/server";
import { getServiceSupabase } from "@/lib/supabase";

// GET seats remaining
export async function GET() {
    try {
        const supabase = getServiceSupabase();
        const { data, error } = await supabase
            .from("seats")
            .select("remaining")
            .eq("id", 1)
            .single();

        if (error) {
            // Table might not exist yet, return default
            return NextResponse.json({ remaining: 15999 });
        }

        return NextResponse.json({ remaining: data.remaining });
    } catch {
        return NextResponse.json({ remaining: 15999 });
    }
}
