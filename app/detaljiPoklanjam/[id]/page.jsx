/* // app/detalji/[id]/page.jsx
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function DetaljiPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Greška pri dohvatu proizvoda');
        setProduct(data);
      } catch (err) {
        setErrorMsg(err.message);
      }
    };

    fetchProduct();
  }, [id]);

  if (errorMsg) return <p className="text-red-400 p-4">{errorMsg}</p>;
  if (!product) return <p className="text-white p-4">Učitavanje...</p>;

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto bg-gray-800 p-6 rounded-xl shadow-lg">
        <img
          src={product.image_url}
          alt={product.title}
          className="w-full h-64 object-cover rounded mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-300">{product.description}</p>
      </div>
    </div>
  );
}
 */

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
        const res = await fetch(`/api/poklanjamApi/${id}`);
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
 /*  if (!product) return <p className="text-white p-4">Učitavanje...</p>; */
 if (!product && !errorMsg) return <FuturisticLoader />;


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 to-blue-900 text-white pt-24 p-8">
      {/* Main container */}
      <div className="max-w-4xl mx-auto bg-gray-800 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out">
        {/* Image and title */}
        <div className="relative mb-8">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-80 object-cover object-center rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
          />
         {/*  <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white p-6 rounded-xl">
            <h1 className="text-4xl font-extrabold tracking-wide">{product.title}</h1>
          </div> */}
        </div>

        {/* Title below image */}
       {/*  <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-gray-300">{product.title}</h2>
        </div> */}
         <div className= "text-center bg-black bg-opacity-60 text-white p-6 rounded-xl">
            <h1 className=" sm:text-4xl text-xl  font-extrabold tracking-wide">{product.title}</h1>
          </div>
          <div className= " bg-[#652375] bg-opacity-60 text-orange-400 p-6 rounded-xl">
            <h1 className=" sm:text-4xl text-xl font-extrabold tracking-wide"> <span className='text-orange-200 ' >Grad: </span> {product.grad}</h1>
          </div>

        {/* Product description */}
       
        <div className="space-y-6 mt-6">
  <p className="text-lg text-gray-300 text-justify">{product.description}</p>
</div>

        {/* Purchase button */}
       {/*  <div className="mt-8 flex justify-center">
          <button className="bg-gradient-to-r from-teal-500 to-cyan-400 text-white py-3 px-8 rounded-lg text-2xl font-semibold shadow-lg transform hover:scale-110 transition-transform duration-300">
            Dodaj u korpu
          </button>
        </div> */}
      </div>
    </div>
  );
}
