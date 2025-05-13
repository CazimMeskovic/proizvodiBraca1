'use client'

import { useEffect, useState } from 'react'
/* import { createClient } from '@/lib/supabaseClient' */
import {createClient} from "../../lib/supabaseClient"

type Props = {
  userId: string
}

const supabase = createClient()

export default function ClientProfile({ userId }: Props) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('products1')
        .select('*')
        .eq('user_id', userId)

      if (error) {
        console.error('Greška pri dohvaćanju:', error.message)
      }

      setProducts(data || [])
    }

    fetchData()
  }, [userId])

  const deleteProduct = async (id: string) => {
    await supabase.from('products1').delete().eq('id', id)
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (  
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Moji proizvodi</h1>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="flex items-center justify-between border p-4 rounded-md">
            <span>{p.title}</span>
            <button
              onClick={() => deleteProduct(p.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Obriši
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
