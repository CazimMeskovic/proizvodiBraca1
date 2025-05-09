
"use client";

import { useRouter } from "next/navigation";
import { packages } from "@/lib/packagesData";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";

export default function Packages() {
  const router = useRouter();

  return (
    <section className="py-16 bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Paketi & Cijene</h2>
        <p className="text-gray-400 mb-12">
          Izaberite servisni paket koji najbolje odgovara vašem vozilu i budžetu.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={clsx(
                "rounded-2xl shadow-lg p-6 border",
                pkg.recommended
                  ? "border-yellow-500 bg-gray-900 scale-[1.03]"
                  : "border-gray-800 bg-gray-900"
              )}
            >
              {pkg.recommended && (
                <div className="mb-2 text-sm font-semibold text-yellow-500">
                  ⭐ Preporučeno
                </div>
              )}

              <div className="text-4xl mb-2">{pkg.icon}</div>
              {/*   <h3 className="text-2xl font-bold">{pkg.name}</h3> */}
              <p className="text-sm text-gray-400">{pkg.tagline}</p>

              <div className="text-3xl font-extrabold mt-4">{pkg.price}</div>
              <p className="text-gray-400 text-sm mb-4">
                Dostava: {pkg.delivery}
              </p>

              <ul className="text-left mb-6 space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/*   <button
                className="w-full text-base font-semibold border border-yellow-600 bg-transparent py-3 px-6 rounded-xl transition duration-300 ease-in-out hover:bg-yellow-600 hover:text-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                onClick={() => router.push(`/packages/${pkg.name.toLowerCase()}`)}
              >
                Odaberite Paket
              </button> */}

              <button
                className="w-full text-base font-semibold border border-yellow-600 bg-transparent py-3 px-6 rounded-xl transition duration-300 ease-in-out hover:bg-yellow-600 hover:text-gray-900 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
                onClick={() => router.push(`/packages/${pkg.name.toLowerCase()}`)}
              >
                Odaberite Paket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
