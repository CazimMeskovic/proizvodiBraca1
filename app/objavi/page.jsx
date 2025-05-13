'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
/* import { supabase } from '@/utils/supabase/client'; */
import { supabase } from '../utils/supabase/client';
/* import FuturisticLoader from '../components/FuturisticLoader'; */


// Loader komponenta
function FuturisticLoader1() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex space-x-4">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="w-6 h-6 rounded-full bg-cyan-400 animate-ping"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
      <p className="absolute bottom-10 text-cyan-300 text-lg tracking-widest animate-pulse">
        Učitavanje...
      </p>
    </div>
  );
}


export default function ObjaviPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/auth');
      }
    };

    checkUser();
  }, [router]);

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
    
      {loading && (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <FuturisticLoader1 />
  </div>
)}

    </div>
  );
}
