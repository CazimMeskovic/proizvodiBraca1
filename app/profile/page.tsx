/* 'use client'
import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabaseClient'

const supabase = createClient()

export default function ProfilePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data: userData } = await supabase.auth.getUser()
      const userId = userData?.user?.id

      const { data, error } = await supabase
        .from('products1')
        .select('*')
        .eq('user_id', userId)

      setProducts(data || [])
    }

    fetchData()
  }, [])

  const deleteProduct = async (id: string) => {
    await supabase.from('products1').delete().eq('id', id)
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <div>
      <h1>Moji proizvodi</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title}
            <button onClick={() => deleteProduct(p.id)}>Obriši</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
 */

// app/profile/page.tsx
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
/* import ClientProfile from './ClientProfile' */
import ClientProfile from './ClientProfile'


export default async function ProfilePage() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Prosljeđujemo user ID client komponenti
   return <ClientProfile userId={user.id} /> 
}
