/* import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
 */

 /*  // app/providers.tsx
'use client'

import { createBrowserClient } from '@supabase/ssr'
import { SupabaseProvider } from '@supabase/auth-helpers-react'


export function Providers({ children }: { children: React.ReactNode }) {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return <SupabaseProvider client={supabase}>{children}</SupabaseProvider>
}
 */
/* 
'use client'

import { createBrowserClient } from '@supabase/ssr'
import { SupabaseProvider } from '@supabase/auth-helpers-react'

// ✅ Kreiraj klijent izvan komponente — stvara se samo jednom
const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SupabaseProvider client={supabase}>
      {children}
    </SupabaseProvider>
  )
}
 */

import { createBrowserClient } from '@supabase/ssr'

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
