/* // app/prikaz/ClientProducts.tsx
'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FuturisticLoader from '../components/FuturisticLoader';


export default function ClientProducts({ products }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setLoading(false); // Postavi loading na false jer podaci već dolaze sa servera
  }, []);

  if (loading) return <FuturisticLoader />;
  if (errorMsg) return <p>{errorMsg}</p>;

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
 */

'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FuturisticLoader from '../components/FuturisticLoader';

export default function ClientProducts({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const totalPages = Math.ceil(products.length / itemsPerPage);

  useEffect(() => {
    setLoading(false);
  }, []);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  if (loading) return <FuturisticLoader />;
  if (errorMsg) return <p>{errorMsg}</p>;

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
          {currentProducts.map((product) => (
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
               {/*  <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed line-clamp-3" title={product.description}>
                    {product.description}
                  </p>
                </div> */}
                <div className="p-6 space-y-3">
  <h3 className="text-xl font-semibold text-white">{product.title}</h3>
  {product.grad && (
    <p className="text-cyan-400 text-xs font-medium mt-2">
     Grad: {product.grad}
    </p>
  )}
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

        {/* Pagination */}
        <div className="flex justify-center items-center mt-12 gap-2 text-white">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded-lg hover:bg-cyan-600 disabled:opacity-50"
          >
            &larr;
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 border rounded-lg ${
                currentPage === i + 1 ? 'bg-cyan-500' : 'hover:bg-cyan-700'
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded-lg hover:bg-cyan-600 disabled:opacity-50"
          >
            &rarr;
          </button>
        </div>
      </div>
    </section>
  );
}
