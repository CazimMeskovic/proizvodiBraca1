'use client'

/* import { supabase } from '@/lib/supabaseClient' */
/* import { supabase } from '@/lib/supabaseClient' */
import { supabase } from "../../lib/supabaseClient"

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (!error) router.push('/dashboard')
        else alert('Login error')
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Login</h2>
            <input type="email" placeholder="Email" className="w-full p-2 mb-2 border" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 border" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin} className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        </div>
    )
}
