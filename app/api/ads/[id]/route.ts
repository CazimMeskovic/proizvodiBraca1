// 9. app/api/ads/[id]/route.ts (GET)
import { NextResponse } from "next/server";
/* import { supabase } from "@/lib/supabase"; */
import { supabase } from "../../../../lib/supabase";
export async function GET(_, { params }) {
    const { data } = await supabase.from("ads").select("*").eq("id", params.id).single();
    return NextResponse.json(data);
}