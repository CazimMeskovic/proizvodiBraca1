'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {createClient} from "../../lib/supabaseClient"

const supabase = createClient()

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()

   /*  const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/profile') // ili '/login' ako želiš verifikaciju emaila prvo
    } */
   const { data, error } = await supabase.auth.signUp({
  email,
  password,
})

if (error) {
  console.error('Error during registration:', error.message)
} else {
  console.log('Registration successful! Please check your email for verification link.')
   router.push('/profile') // ili '/login' ako želiš verifikaciju emaila prvo
}

  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleRegister} className="space-y-4">
        <h1 className="text-2xl font-bold">Registracija</h1>
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Lozinka"
          className="border p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2">
          Registruj se
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  )
}
