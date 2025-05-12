// app/register/page.jsx
'use client'

import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleRegister = async () => {
        const { error } = await supabase.auth.signUp({ email, password })

        if (error) {
            setError(error.message)
        } else {
            router.push('/login')
        }
    }

    return (
        <div className="max-w-md mx-auto mt-20 p-6 border rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Registracija</h2>
            {error && <p className="text-red-600 mb-2">{error}</p>}
            <input
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Lozinka"
                className="w-full p-2 mb-4 border rounded"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleRegister}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded"
            >
                Registruj se
            </button>
        </div>
    )
}
