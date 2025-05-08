

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
      {/* Main container */}
      <div className="max-w-4xl mx-auto bg-gray-800 p-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500 ease-in-out">
        {/* Image and title */}
       {/*  <div className="relative mb-8">
          <img
            src={product.image_url}
            alt={product.title}
            className="w-full h-80 object-cover object-center rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500"
          />
        
        </div> */}
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
