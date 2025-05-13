/* 'use client'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from '../lib/supabaseClient'
import { useState } from 'react'

export function Providers({ children }: { children: React.ReactNode }) {
  const [supabaseClient] = useState(() => createClient())

  return (
     <SessionContextProvider supabaseClient={supabaseClient}> 

      {children}
    </SessionContextProvider>
  )
}  
 */

'use client'

import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { createClient } from '../lib/supabaseClient'
import { useState } from 'react'
import { Session } from '@supabase/auth-helpers-react'

export function Providers({
  children,
  session,
}: {
  children: React.ReactNode
  session: Session | null
}) {
  const [supabaseClient] = useState(() => createClient())

  return (
    <SessionContextProvider supabaseClient={supabaseClient} initialSession={session}>
      {children}
    </SessionContextProvider>
  )
}
