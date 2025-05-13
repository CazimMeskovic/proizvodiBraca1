

'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/utils/supabase/client';
import Image from 'next/image';

export default function DashboardClient() {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  /* useEffect(() => {
    const fetchData = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        router.push('/auth');
        return;
      }

      // Fetch podaci iz tabele 'ads'
      const { data, error } = await supabase
        .from('ads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Greška pri dohvaćanju:', error);
      } else {
        setAds(data);
         console.log('Oglasi iz baze:', data); // <-- OVDJE JE KONZOLA
      }

      setLoading(false);
    };

    fetchData();
  }, [router]);
 */
useEffect(() => {
  const fetchData = async () => {
    const { data: { session } } = await supabase.auth.getSession();

    if (!session) {
      router.push('/auth');
      return;
    }

    const userId = session.user.id;

    const { data, error } = await supabase
      .from('ads')
      .select('*')
      .eq('user_id', userId) // 🔥 filtriraš samo oglase tog korisnika
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Greška pri dohvaćanju:', error);
    } else {
      console.log('Oglasi prijavljenog korisnika:', data);
      setAds(data);
    }

    setLoading(false);
  };

  fetchData();
}, [router]);


  const getImageUrl = (imagePath) => {
    const { data } = supabase.storage
      .from('product-images')
      .getPublicUrl(imagePath);
    return data.publicUrl;
  };

  if (loading) return <p className="text-white text-center p-6">Učitavanje...</p>;

  return (
    <div className="mt-32 min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Dashboard - Pregled Oglasa</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ads.map((ad) => (
         <div key={ad.id} className="bg-gray-800 p-4 rounded shadow">
  <Image
    src={getImageUrl(ad.image_path)}
    alt={ad.title}
    width={500}
    height={300}
    className="w-full h-48 object-cover rounded mb-4"
  />
  <h2 className="text-xl font-semibold">{ad.title}</h2>
  <p className="text-sm text-gray-300 mb-2">{ad.description}</p>
  <p className="text-sm text-gray-400 italic">📍 {ad.grad}</p>
</div>
        ))}
      </div>
    </div>
  );
}
