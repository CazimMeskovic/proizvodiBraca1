/* 'use client';

import { notFound, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { packages } from "@/lib/packagesData";


export default function PackageDetail({ params }) {
  const selectedPackage = packages.find((pkg) => pkg.slug === params.slug);

  if (!selectedPackage) {
    return notFound();
  }

  return (
    <section className="py-16 bg-gray-950 text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-3xl mb-4">{selectedPackage.icon}</div>
        <h1 className="text-4xl font-bold mb-2">{selectedPackage.name}</h1>
        <p className="text-gray-400 mb-4">{selectedPackage.tagline}</p>
        <div className="text-2xl font-extrabold">{selectedPackage.price}</div>
        <p className="text-gray-400 text-sm mb-4">
          Delivery: {selectedPackage.delivery}
        </p>
       
        <ul className="text-left mb-6 space-y-2">
          {selectedPackage.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
       
        <p className="w-full mb-6 text-gray-400 ">{selectedPackage.detaljniopis}</p>
        <Link
          href={`/checkout?package=${selectedPackage.slug}`}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-2 rounded-lg font-semibold"
        >
          Continue to Checkout
        </Link>
      </div>
    
    </section>
  );
}
 */
/* 
'use client';

import { notFound, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { packages } from "@/lib/packagesData";
import Image from "next/image";

export default function PackageDetail({ params }) {
  const selectedPackage = packages.find((pkg) => pkg.slug === params.slug);

  if (!selectedPackage) {
    return notFound();
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-6xl text-center mb-6">{selectedPackage.icon}</div>
        <h1 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          {selectedPackage.name}
        </h1>
        <p className="text-xl text-gray-300 text-center mb-8">{selectedPackage.tagline}</p>

<div className="flex justify-center mb-10">
  <Image
    src={selectedPackage.image}
    alt={selectedPackage.name}
    className="rounded-2xl shadow-lg w-full max-w-2xl object-cover"
    width={100}
    height={50}
  />
</div>
        
        <div className="text-4xl font-extrabold text-center mb-4">{selectedPackage.price}</div>
        <p className="text-lg text-gray-400 text-center mb-6">
          Delivery: {selectedPackage.delivery}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg mb-8">
          {selectedPackage.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <CheckCircle size={20} className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg text-gray-400 mb-8">
          {selectedPackage.detaljniopis}
        </p>

        <Link
          href={`/checkout?package=${selectedPackage.slug}`}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-xl font-semibold text-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          Continue to Checkout
        </Link>
      </div>
    </section>
  );
}
 */

/* 
'use client';

import { notFound, useRouter } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { packages } from "@/lib/packagesData";
import Image from "next/image";
import { useState } from "react"; // dodaj na vrhu ako već nije

export default function PackageDetail({ params }) {
  
  const selectedPackage = packages.find((pkg) => pkg.slug === params.slug);
  const [mainImage, setMainImage] = useState(selectedPackage.images?.[0] || null);

  if (!selectedPackage) {
    return notFound();
  }

  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="text-6xl text-center mb-6">{selectedPackage.icon}</div>
        <h1 className="text-5xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
          {selectedPackage.name}
        </h1>
        <p className="text-xl text-gray-300 text-center mb-8">{selectedPackage.tagline}</p>
<div className="mb-12">
  <div className="w-full h-[400px] relative rounded-2xl overflow-hidden shadow-xl mb-4 mx-auto max-w-4xl">
    <Image
      src={mainImage}
      alt="Glavna slika paketa"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 700px"
    />
  </div>

  <div className="flex gap-4 justify-center flex-wrap">
    {selectedPackage.images?.map((img, index) => (
      <div
        key={index}
        className={`w-24 h-24 relative rounded-xl overflow-hidden cursor-pointer border-2 ${
          mainImage === img ? "border-yellow-500" : "border-transparent"
        }`}
        onClick={() => setMainImage(img)}
      >
        <Image
          src={img}
          alt={`Thumbnail ${index + 1}`}
          fill
          className="object-cover"
        />
      </div>
    ))}
  </div>
</div>

        
        <div className="text-4xl font-extrabold text-center mb-4">{selectedPackage.price}</div>
        <p className="text-lg text-gray-400 text-center mb-6">
          Delivery: {selectedPackage.delivery}
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-lg mb-8">
          {selectedPackage.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
              <CheckCircle size={20} className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <p className="text-lg text-gray-400 mb-8">
          {selectedPackage.detaljniopis}
        </p>

        <Link
          href={`/checkout?package=${selectedPackage.slug}`}
          className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-10 py-4 rounded-xl font-semibold text-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110"
        >
          Continue to Checkout
        </Link>
      </div>
    </section>
  );
}
 */

'use client';

import { notFound } from "next/navigation";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { packages } from "@/lib/packagesData";
import Image from "next/image";
import { useState } from "react";

export default function PackageDetail({ params }) {
  const selectedPackage = packages.find((pkg) => pkg.slug === params.slug);
  const [mainImage, setMainImage] = useState(selectedPackage?.images?.[0] || null);

  if (!selectedPackage) {
    return notFound();
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-950 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-6xl mb-4">{selectedPackage.icon}</div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-500">
            {selectedPackage.name}
          </h1>
          <p className="mt-4 text-xl text-gray-300">{selectedPackage.tagline}</p>
        </div>

        {/* Image Section: Manja glavna lijevo, thumbnails u gridu desno */}
<div className="flex flex-col md:flex-row gap-8 justify-center items-start mb-16">
  {/* Main Image */}
  <div className="relative w-full md:w-[50%] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-white/10 max-w-md mx-auto">
    <Image
      src={mainImage}
      alt="Glavna slika paketa"
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 500px"
    />
  </div>

  {/* Thumbnails in 2x2 grid */}
  <div className="grid grid-cols-2 gap-4 md:gap-6 w-full md:w-[40%] max-w-sm mx-auto">
    {selectedPackage.images?.slice(0, 4).map((img, index) => (
      <div
        key={index}
        onClick={() => setMainImage(img)}
        className={`relative w-full aspect-square rounded-xl overflow-hidden cursor-pointer border-2 transition-all duration-300 hover:scale-105 ${
          mainImage === img ? "border-yellow-500 ring-2 ring-yellow-400" : "border-white/10"
        }`}
      >
        <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
      </div>
    ))}
  </div>
</div>


        {/* Price and Delivery */}
        <div className="text-center mb-10">
          <div className="text-4xl sm:text-5xl font-bold mb-2">{selectedPackage.price}</div>
          <p className="text-md sm:text-lg text-gray-400">
            Dostava: <span className="font-medium text-white">{selectedPackage.delivery}</span>
          </p>
        </div>

        {/* Features List */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 mb-12">
          {selectedPackage.features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-4 bg-gradient-to-br from-gray-800/50 to-gray-700/40 p-5 rounded-xl shadow-lg hover:shadow-2xl transition-all"
            >
              <CheckCircle size={22} className="text-green-400 flex-shrink-0" />
              <span className="text-base sm:text-lg">{feature}</span>
            </div>
          ))}
        </div>

        {/* Detailed Description */}
        <p className="text-md sm:text-lg text-gray-300 mb-10 text-center max-w-3xl mx-auto">
          {selectedPackage.detaljniopis}
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href={`/checkout?package=${selectedPackage.slug}`}
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-xl text-lg sm:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
          >
            Nastavi na plaćanje
          </Link>
        </div>
      </div>
    </section>
  );
}
