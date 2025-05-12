/* 

'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import FuturisticLoader from '@/app/components/FuturisticLoader';


export default function DetaljiPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/detaljiUslugeApi/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Greška pri dohvatu proizvoda');
        setProduct(data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (errorMsg) return <p className="text-red-500 p-4">{errorMsg}</p>;
 if (!product && !errorMsg) return <FuturisticLoader />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-900 text-white pt-24 p-8">
     
      <div className="max-w-4xl mx-auto bg-gray-800 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out">
      
        <div className="relative mb-8">
  <img
    src={product.image_url}
    alt={product.title}
    className="w-full h-80 object-contain object-center rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 bg-black"
  />
</div>


      
         <div className= "text-center bg-black bg-opacity-60 text-white p-6 rounded-xl">
            <h1 className=" sm:text-4xl text-xl  font-extrabold tracking-wide">{product.title}</h1>
          </div>
          <div className= " bg-[#652375] bg-opacity-60 text-orange-400 p-6 rounded-xl">
          <h1 className=" sm:text-4xl text-xl font-extrabold tracking-wide"> <span className='text-orange-200 ' >Grad: </span> {product.grad}</h1>
          </div>

       
        <div className="space-y-6 mt-6">
  <p className="text-lg text-gray-300 text-justify">{product.description}</p>
</div>

      
      </div>
    </div>
  );
}
 */

'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import FuturisticLoader from '@/app/components/FuturisticLoader';
import Head from 'next/head';

export default function DetaljiPage() {
  const { id } = useParams();
  const [product, setProduct] = useState < any > (null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/detaljiUslugeApi/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Greška pri dohvatu usluge');
        setProduct(data);
      } catch (err: any) {
        setErrorMsg(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (errorMsg) return <p className="text-red-500 p-4">{errorMsg}</p>;
  if (!product && !errorMsg) return <FuturisticLoader />;

  return (
    <>
      <Head>
        <title>{product?.title || 'Detalji usluge'}</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-900 text-white pt-24 p-8">
        <div className="max-w-4xl mx-auto bg-gray-800 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out">

          {/* Slika */}
          <div className="relative mb-8">
            <img
              src={product.image_url || '/fallback.jpg'}
              alt={product.title}
              className="w-full h-80 object-contain object-center rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 bg-black"
            />
          </div>

          {/* Naslov */}
          <div className="text-center bg-black bg-opacity-60 text-white p-6 rounded-xl mb-4">
            <h1 className="sm:text-4xl text-xl font-extrabold tracking-wide">{product.title}</h1>
          </div>

          {/* Grad */}
          <div className="bg-[#652375] bg-opacity-60 text-orange-400 p-6 rounded-xl mb-4">
            <h2 className="sm:text-3xl text-lg font-extrabold tracking-wide">
              <span className="text-orange-200">Grad:</span> {product.grad}
            </h2>
          </div>

          {/* Opis */}
          <div className="space-y-6 mt-6">
            <p className="text-lg text-gray-300 text-justify">{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
