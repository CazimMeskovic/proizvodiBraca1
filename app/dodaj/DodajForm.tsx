'use client'
import { useState } from 'react'
import imageCompression from 'browser-image-compression'
/* import { createClient } from '@/lib/supabaseClient' */
import {createClient} from "../../lib/supabaseClient"
import { useRouter } from 'next/navigation'

export default function DodajForm({ userId }: { userId: string }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [grad, setGrad] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const supabase = createClient()
  const router = useRouter()

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    if (file.size > 2 * 1024 * 1024) {
      alert('Slika je veća od 2MB. Koristi screenshot ili manju sliku.')
      e.target.value = ''
      return
    }

    try {
      const compressed = await imageCompression(file, {
        maxSizeMB: 1,
        maxWidthOrHeight: 1280,
        useWebWorker: true,
      })

      setImage(compressed)
    } catch (err) {
      console.error('Greška pri kompresiji slike:', err)
      setErrorMsg('Greška pri kompresiji slike.')
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMsg('')
    setSuccessMsg('')

    let imageUrl = null

    if (image) {
      const fileExt = image.name.split('.').pop()
      const fileName = `${Date.now()}-${Math.random()}.${fileExt}`
      const filePath = `products1/${fileName}`

      const { error: uploadError } = await supabase.storage
        .from('images')
        .upload(filePath, image)

      if (uploadError) {
        setLoading(false)
        return setErrorMsg('Greška pri slanju slike.')
      }

      const { data: publicUrlData } = supabase.storage
        .from('images')
        .getPublicUrl(filePath)

      imageUrl = publicUrlData.publicUrl
    }

    const { error } = await supabase.from('products1').insert({
      title,
      description,
      grad,
      image_url: imageUrl,
      user_id: userId,
    })

    if (error) {
      setErrorMsg('Greška pri snimanju u bazu.')
    } else {
      setSuccessMsg('Proizvod uspješno dodat!')
      setTitle('')
      setDescription('')
      setGrad('')
      setImage(null)
      router.push('/profil') // ili /moji-proizvodi
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-xl space-y-4">
        <h1 className="text-3xl font-bold text-center mb-6">Dodaj Proizvod</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Naslov"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 text-white mb-3"
          />
          <textarea
            placeholder="Opis"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 text-white mb-3"
          />
          <input
            type="text"
            placeholder="Grad"
            value={grad}
            onChange={(e) => setGrad(e.target.value)}
            required
            className="w-full p-2 rounded bg-gray-700 text-white mb-3"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-full p-2 rounded bg-gray-700 text-white mb-3"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded"
          >
            {loading ? 'Dodavanje...' : 'Dodaj'}
          </button>
          {successMsg && <p className="text-green-400 mt-4">{successMsg}</p>}
          {errorMsg && <p className="text-red-400 mt-4">{errorMsg}</p>}
        </form>
      </div>
    </div>
  )
}
