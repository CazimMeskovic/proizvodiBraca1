


'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FuturisticLoader from '../components/FuturisticLoader';


export default function PrikazPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
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

 /*  if (loading) return <p className="text-white p-4">Učitavanje...</p>; */
 if (loading) return <FuturisticLoader />;

  if (errorMsg) return <p className="text-red-400 p-4">{errorMsg}</p>;

  return (
    <section className="bg-[#0f172a] py-20 border-t border-cyan-400/10 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4 tracking-tight">
          Naši Proizvodi
        </h2>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto text-lg">
          Istražite našu ponudu kvalitetnih proizvoda.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/detalji/${product.id}`}>
              <div className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-400/30 transition duration-300 overflow-hidden cursor-pointer">
                <div className="flex justify-center items-center p-4">
                  <Image
                    width={500}
                    height={300}
                    src={product.image_url}
                    alt={product.title}
                    className="rounded-xl object-cover object-center shadow-md w-full h-[200px]"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  <p
                    className="text-gray-300 text-sm leading-relaxed line-clamp-3"
                    title={product.description}
                  >
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