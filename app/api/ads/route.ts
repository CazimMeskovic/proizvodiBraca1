
/* import { supabase } from "../../../lib/supabase"; */

import { NextRequest, NextResponse } from "next/server";
/* import { createClient } from "@/utils/supabase/server"; */
import { createClient } from "../../utils/supabase/server";

export async function POST(request: NextRequest) {
  const supabase = createClient();
  const body = await request.json();

  const { data, error } = await supabase.from("ads").insert([body]).select();

  if (error) {
    console.error("Greška pri upisu u Supabase:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

export async function GET() {
  const supabase = createClient();
  const { data, error } = await supabase.from("ads").select();

  if (error) {
    console.error("Greška pri čitanju iz baze:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json(data);
}

