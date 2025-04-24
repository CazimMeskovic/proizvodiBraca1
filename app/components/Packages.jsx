/* // app/components/Packages.js
export default function Packages() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-screen-xl mx-auto text-center">
                <h2 className="text-3xl font-bold">Our Packages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    {['Starter', 'Growth', 'Empire'].map((packageType) => (
                        <div key={packageType} className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-2xl font-semibold">{packageType}</h3>
                            <p className="mt-4">Features, benefits, and pricing.</p>
                            <a href={`/packages#${packageType.toLowerCase()}`} className="mt-6 inline-block bg-yellow-500 text-gray-900 py-2 px-6 rounded-lg">Learn More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 */
/* 
import Link from 'next/link';

const Packages = () => (
    <section id="packages" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Consulting Packages</h2>
            <p className="text-lg text-gray-600">
                Choose the package that fits your needs and start your journey towards Metaverse success.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 sm:px-0">
           
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Starter</h3>
                <p className="text-xl font-bold text-gray-800 mb-4">$1,000</p>
                <p className="text-sm text-gray-600 mb-6">For new city owners</p>
                <ul className="text-left text-gray-700 space-y-3">
                    <li>Basic city analysis</li>
                    <li>5-page strategy report</li>
                    <li>Community building tips</li>
                    <li>Delivery in 7 days</li>
                </ul>
                <Link href="/checkout">
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
                        Buy Now
                    </button>
                </Link>
            </div>

          
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Growth</h3>
                <p className="text-xl font-bold text-gray-800 mb-4">$5,000</p>
                <p className="text-sm text-gray-600 mb-6">For scaling your city</p>
                <ul className="text-left text-gray-700 space-y-3">
                    <li>Deep-dive city audit</li>
                    <li>10-page strategy + growth plan</li>
                    <li>Monetization strategy</li>
                    <li>Marketing toolkit</li>
                    <li>Delivery in 10 days</li>
                </ul>
                <Link href="/checkout">
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
                        Buy Now
                    </button>
                </Link>
            </div>

        
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Empire</h3>
                <p className="text-xl font-bold text-gray-800 mb-4">$10,000</p>
                <p className="text-sm text-gray-600 mb-6">For established city leaders</p>
                <ul className="text-left text-gray-700 space-y-3">
                    <li>Full city ecosystem strategy</li>
                    <li>15-page strategy report</li>
                    <li>Personalized growth roadmap</li>
                    <li>1 follow-up Q&A session</li>
                    <li>Delivery in 14 days</li>
                </ul>
                <Link href="/checkout">
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md">
                        Buy Now
                    </button>
                </Link>
            </div>
        </div>
    </section>
);

export default Packages;
 */

/* 
import Link from 'next/link';

const Packages = () => (
  <section id="packages" className="py-20 bg-[#020617] text-white">
    <div className="container mx-auto px-4 text-center mb-16">
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">Packages</h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Choose Your Strategy Kit. Art an articulated strategy through the EarthMeta Advisor Whitepaper.
      </p>
      <a
        href="/whitepaper/whitepaper.pdf"
        download
        className="inline-block mt-6 border border-cyan-400 text-cyan-400 px-6 py-2 rounded-md text-sm hover:bg-cyan-400 hover:text-black transition"
      >
        Download Whitepaper <span className="text-xs">(PDF: 2MB)</span>
      </a>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      <div className="bg-[#0f172a] rounded-2xl p-6 shadow-md border border-cyan-800">
        <h3 className="text-2xl font-semibold mb-2">Launch</h3>
        <p className="text-3xl font-bold mb-1">$299</p>
        <p className="text-sm text-gray-400 mb-6">per city</p>
        <p className="text-gray-400 text-sm mb-8">Engagement attraction strategy for adoption and activation plan.</p>
        <Link href="/checkout">
          <button className="bg-cyan-400 text-black font-semibold py-2 px-5 rounded-md hover:bg-cyan-300 transition">
            Get Started
          </button>
        </Link>
      </div>

      <div className="bg-[#0f172a] rounded-2xl p-6 shadow-lg border border-cyan-400 relative">
        <span className="absolute top-4 right-4 bg-cyan-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
          Most Popular
        </span>
        <h3 className="text-2xl font-semibold mb-2">Growth</h3>
        <p className="text-3xl font-bold mb-1">$499</p>
        <p className="text-sm text-gray-400 mb-6">per city</p>
        <p className="text-gray-400 text-sm mb-8">Craft a growth delivery via a layered equilibrium. Learn more.</p>
        <Link href="/checkout">
          <button className="bg-cyan-400 text-black font-semibold py-2 px-5 rounded-md hover:bg-cyan-300 transition">
            Get Started
          </button>
        </Link>
      </div>

      <div className="bg-[#0f172a] rounded-2xl p-6 shadow-md border border-cyan-800">
        <h3 className="text-xl font-semibold mb-2">City Alpha – 150% Growth</h3>
        <p className="text-gray-400 text-sm mb-8">We're here to decode growth after roadmap shmutch.</p>
        <Link href="/checkout">
          <button className="bg-cyan-400 text-black font-semibold py-2 px-5 rounded-md hover:bg-cyan-300 transition">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  </section>
);

export default Packages;
 */
/* 
'use client';

import { CheckCircle } from "lucide-react";
 import clsx from "clsx"; 
 import { useRouter } from "next/navigation"; 
 import { packages } from "@/lib/packagesData";


// unutar komponente PricingSection


export default function Packages() {
  const router = useRouter();
  return (
    <section className="py-16 bg-gray-950 text-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Packages & Pricing</h2>
        <p className="text-gray-400 mb-12">
          Choose the consulting package that fits your goals best.
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
                  ⭐ Recommended
                </div>
              )}

              <div className="text-3xl">{pkg.icon}</div>
              <h3 className="text-2xl font-bold mt-2">{pkg.name}</h3>
              <p className="text-sm text-gray-400">{pkg.tagline}</p>

              <div className="text-3xl font-extrabold mt-4">{pkg.price}</div>
              <p className="text-gray-400 text-sm mb-4">
                Delivery: {pkg.delivery}
              </p>

              <ul className="text-left mb-6 space-y-2">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

 
<button
  className="w-full text-base font-semibold"
  onClick={() => router.push(`/packages/${pkg.name.toLowerCase()}`)}
>
  Select Package
</button>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 */

/* 
"use client";

import { useRouter } from "next/navigation";
import { packages } from "@/lib/packagesData";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";

export default function Packages() {
  const router = useRouter();

  return (
    <section className="py-16 bg-gray-950 text-white" id="pricing">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Paketi & Cijene</h2>
        <p className="text-gray-400 mb-12">
          Izaberite paket HTZ opreme koji najbolje odgovara vašim potrebama.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={clsx(
                "rounded-2xl shadow-lg p-6 border border-yellow-800",
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

              <div className="text-3xl">{pkg.icon}</div>
              <h3 className="text-2xl font-bold mt-2">{pkg.name}</h3>
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
 */

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
