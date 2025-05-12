/* 'use client'

import { useEffect, useState } from 'react'
import { supabase } from "../../lib/supabaseClient"

import Link from 'next/link'

export default function Dashboard() {
    const [ads, setAds] = useState([])

    useEffect(() => {
        const fetchAds = async () => {
            const { data: { user } } = await supabase.auth.getUser()
            if (!user) return
            const { data } = await supabase.from('ads').select('*').eq('user_id', user.id)
            setAds(data || [])
        }
        fetchAds()
    }, [])

    const deleteAd = async (id: string) => {
        await supabase.from('ads').delete().eq('id', id)
        setAds(ads.filter(ad => ad.id !== id))
    }

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <h2 className="text-2xl font-semibold mb-4">Moji oglasi</h2>
            {ads.map(ad => (
                <div key={ad.id} className="border p-4 mb-3 rounded">
                    <h3 className="text-lg font-bold">{ad.title}</h3>
                    <p>{ad.description}</p>
                    <div className="flex gap-4 mt-2">
                        <Link href={`/edit-ad/${ad.id}`} className="text-blue-600">Uredi</Link>
                        <button onClick={() => deleteAd(ad.id)} className="text-red-600">Obriši</button>
                    </div>
                </div>
            ))}
        </div>
    )
}
 */

// app/dashboard/page.tsx
/* 
'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

interface Oglas {
    id: number
    naslov: string
    opis: string
    cijena: number
    kategorija: string
}

export default function DashboardPage() {
    const [oglasi, setOglasi] = useState<Oglas[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const fetchOglasi = async () => {
            const {
                data: { user },
                error: userError,
            } = await supabase.auth.getUser()

            if (userError || !user) {
                router.push('/login')
                return
            }

            const { data, error } = await supabase
                .from('oglasi')
                .select('*')
                .eq('user_id', user.id)

            if (!error) setOglasi(data || [])
            setLoading(false)
        }

        fetchOglasi()
    }, [])

    const handleDelete = async (id: number) => {
        const { error } = await supabase.from('oglasi').delete().eq('id', id)
        if (!error) setOglasi((prev) => prev.filter((oglas) => oglas.id !== id))
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Moji oglasi</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Odjavi se
                </button>
            </div>

            {loading ? (
                <p>Učitavanje...</p>
            ) : oglasi.length === 0 ? (
                <p>Nemate objavljenih oglasa.</p>
            ) : (
                <ul className="space-y-4">
                    {oglasi.map((oglas) => (
                        <li
                            key={oglas.id}
                            className="border p-4 rounded flex justify-between items-center"
                        >
                            <div>
                                <h3 className="font-semibold text-lg">{oglas.naslov}</h3>
                                <p className="text-sm text-gray-600">{oglas.opis}</p>
                                <p className="text-green-600 font-bold">{oglas.cijena} KM</p>
                            </div>
                            <div className="space-x-2">
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                                    onClick={() => router.push(`/edit/${oglas.id}`)}
                                >
                                    Uredi
                                </button>
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={() => handleDelete(oglas.id)}
                                >
                                    Obriši
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
 */

'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

interface Oglas {
    id: number
    naslov: string
    opis: string
    cijena: number
    kategorija: string
    image_url: string
}

export default function DashboardPage() {
    const [oglasi, setOglasi] = useState<Oglas[]>([])
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const fetchOglasi = async () => {
            console.log('🍪 document.cookie:', document.cookie) // Dodano za debug
            const {
                data: { user },
                error: userError,
            } = await supabase.auth.getUser()

            if (userError || !user) {
                router.push('/login')
                return
            }

            // Dohvatanje oglasa specifičnih za korisnika (povezano sa userId)
            const { data, error } = await supabase
                .from('products')  // Promijenjeno iz 'oglasi' u 'products'
                .select('*')
                .eq('user_id', user.id)

            if (!error) setOglasi(data || [])
            setLoading(false)
        }

        fetchOglasi()
    }, [router])

    const handleDelete = async (id: number) => {
        const { error } = await supabase.from('products').delete().eq('id', id)
        if (!error) setOglasi((prev) => prev.filter((oglas) => oglas.id !== id))
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        router.push('/login')
    }

    return (
        <div className="max-w-4xl mx-auto mt-10">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Moji proizvodi</h2>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 text-white px-4 py-2 rounded"
                >
                    Odjavi se
                </button>
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Učitavanje...</p>
            ) : oglasi.length === 0 ? (
                <p className="text-center text-gray-500">Nemate objavljenih proizvoda.</p>
            ) : (
                <ul className="space-y-4">
                    {oglasi.map((oglas) => (
                        <li
                            key={oglas.id}
                            className="border p-4 rounded flex justify-between items-center"
                        >
                            <div className="flex space-x-4">
                                <img
                                    src={oglas.image_url}
                                    alt={oglas.naslov}
                                    className="w-20 h-20 object-cover rounded"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{oglas.naslov}</h3>
                                    <p className="text-sm text-gray-600">{oglas.opis}</p>
                                    <p className="text-green-600 font-bold">{oglas.cijena} KM</p>
                                </div>
                            </div>
                            <div className="space-x-2">
                                <button
                                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                                    onClick={() => router.push(`/edit/${oglas.id}`)}
                                >
                                    Uredi
                                </button>
                                <button
                                    className="bg-red-600 text-white px-3 py-1 rounded"
                                    onClick={() => handleDelete(oglas.id)}
                                >
                                    Obriši
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
