/* 
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FuturisticLoader from '../components/FuturisticLoader';


export const revalidate = 10

export default function UslugePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/usluge');
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Greška pri dohvatu proizvoda');
        setProducts(data);
      } catch (err) {
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

 if (loading) return <FuturisticLoader />;

  if (errorMsg) return <p className="text-red-400 p-4">{errorMsg}</p>;

  return (
    <section className="bg-[#0f172a] py-20 border-t border-cyan-400/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4 tracking-tight">
          Usluge koje nudimo
        </h2>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto text-lg">
          Istražite našu ponudu kvalitetnih usluga.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/detaljiUsluge/${product.id}`}>
              <div className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-400/30 transition duration-300 overflow-hidden cursor-pointer">
                <div className="flex justify-center items-center p-4">
                
                  {product.image_url ? (
  <Image
    width={500}
    height={300}
    src={product.image_url}
    alt={product.title}
    className="rounded-xl object-cover object-center shadow-md w-full h-[200px]"
  />
) : (
  <div className="w-full h-[200px] bg-gray-700 flex items-center justify-center text-white text-sm rounded-xl">
    Nema slike
  </div>
)}

                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  <p
                    className="text-gray-300 text-sm leading-relaxed line-clamp-3"
                    title={product.description}
                  >
                    <p className="text-gray-400 text-sm mt-2">Grad: {product.grad}</p>
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
 


 */

// app/usluge/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import FuturisticLoader from '../components/FuturisticLoader';
/* import { createClient } from '@/utils/supabase/server'; */
import { createClient } from '../utils/supabase/server';

export const revalidate = 10; // ISR – regeneriši svakih 10 sekundi

export default async function UslugePage() {
 /*  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/usluge`, {
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    return <p className="text-red-400 p-4">Greška pri dohvatu podataka</p>;
  }

  const products = await res.json();
 */
 

  const supabase = createClient();
  const { data: products, error } = await supabase.from('usluge').select('*');
  if (error) {
    throw new Error('Greška pri dohvatu podataka iz Supabase-a');
  }
  
  return (
    <section className="bg-[#0f172a] py-20 border-t border-cyan-400/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4 tracking-tight">
          Usluge koje nudimo
        </h2>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto text-lg">
          Istražite našu ponudu kvalitetnih usluga.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/detaljiUsluge/${product.id}`}>
              <div className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-400/30 transition duration-300 overflow-hidden cursor-pointer">
                <div className="flex justify-center items-center p-4">
                  {product.image_url ? (
                    <Image
                      width={500}
                      height={300}
                      src={product.image_url}
                      alt={product.title}
                      className="rounded-xl object-cover object-center shadow-md w-full h-[200px]"
                    />
                  ) : (
                    <div className="w-full h-[200px] bg-gray-700 flex items-center justify-center text-white text-sm rounded-xl">
                      Nema slike
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  <p className="text-gray-400 text-sm mt-2">Grad: {product.grad}</p>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
