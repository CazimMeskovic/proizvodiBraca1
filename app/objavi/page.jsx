'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FuturisticLoader from '../components/FuturisticLoader';

export default function ObjaviPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRedirect = (path) => {
    setLoading(true);
    router.push(path);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 space-y-6">
      <h1 className="text-3xl font-bold text-center text-white sm:text-4xl lg:text-5xl">Odaberite opciju za objavu</h1>
      <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 sm:flex-row">
        <button
          onClick={() => handleRedirect('/dodaj')}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-xl font-semibold w-full sm:w-auto"
        >
          Objavi Proizvod
        </button>
        <button
          onClick={() => handleRedirect('/dodajUsluge')}
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-xl font-semibold w-full sm:w-auto"
        >
          Objavi Uslugu
        </button>
        <button
          onClick={() => handleRedirect('/dodajPoklanjam')}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-xl font-semibold w-full sm:w-auto"
        >
          Objavi Poklanjam
        </button>
      </div>
     {/*  {loading && (
         <div className="mt-4 text-yellow-400">Preusmeravanje...</div>
      
      )} */}
      {loading && (
  <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
    <FuturisticLoader />
  </div>
)}

    </div>
  );
}
