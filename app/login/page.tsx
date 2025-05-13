'use client'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
/* import { createClient } from '@/lib/supabaseClient' */
import {createClient} from "../../lib/supabaseClient"

const supabase = createClient()

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
       /*  providers={['google']} // možeš ukloniti ako koristiš email/password */
      />
    </div>
  )
}
