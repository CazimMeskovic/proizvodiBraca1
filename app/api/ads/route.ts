// 8. app/api/ads/route.ts (GET, POST)
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
export async function GET() {
    const { data } = await supabase.from("ads").select("*").order("created_at", { ascending: false });
    return NextResponse.json(data);
}
export async function POST(req) {
    const body = await req.json();
    const { data } = await supabase.from("ads").insert([body]).select();
    return NextResponse.json(data);
}
