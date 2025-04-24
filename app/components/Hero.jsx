/*  
'use client';

import Link from 'next/link';
import Image from 'next/image';
import heroMetav from "../images/metaverse.png"; // hero ilustracija ako koristiš

const HeroSection = () => (
  <section className="relative bg-[#020617] h-screen flex items-center justify-center text-white">
    <div className="absolute inset-0 -z-10">
      <Image
     
        alt="Background Futuristic City"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="opacity-90"
      />
    </div>

    <div className="relative z-10 text-center px-6 md:px-12 max-w-2xl">
      <div className="flex items-center justify-center mb-6">
        <h1 className="ml-3 text-2xl font-semibold text-cyan-400 tracking-wide">EARTHMETA <span className="text-white">ADVISOR</span></h1>
      </div>

   
      <p className="uppercase text-sm tracking-widest text-gray-300 mb-4">
        DISCOVER • INVEST • EXPLORE
      </p>

     
      <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
        OWN THE CITY <br />
        <span className="text-cyan-400">MASTER</span> THE STRATEGY
      </h1>

    
      <p className="text-lg md:text-xl text-gray-200 mb-6">
        Insights and guidance for success<br />in the metaverse
      </p>

     
      <Link href="/packages">
        <button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold py-3 px-8 rounded-md shadow-lg transition">
          Get Started
        </button>
      </Link>
    </div>
  </section>
);

export default HeroSection;
   
 */
/* 
"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroMetav from "../images/metaverse.png"; // hero ilustracija ako koristiš
import slap from "../images/slap.jpg"; // hero ilustracija ako koristiš

export default function HeroSection() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-24 md:py-36">
        <div className="absolute inset-0 z-0">
          <Image
            src={slap}
            alt="HTZ oprema pozadina"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sigurnost na prvom mjestu
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Profesionalna HTZ oprema za zaštitu na radu u svim uslovima.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="w-8 h-8 text-white/80" />
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-10">
            Kvaliteta. Zaštita. Pouzdanost.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <Image
                src={heroMetav}
                alt="Zaštitna kaciga"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Zaštita glave</h3>
              <p>
                Naše zaštitne kacige i šljemovi pružaju optimalnu zaštitu u teškim
                uslovima rada.
              </p>
            </div>
            <div>
              <Image
                src={heroMetav}
                alt="Rukavice"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Zaštita ruku</h3>
              <p>
                Rukavice za razne industrije koje štite od rezova, hemikalija i
                toplote.
              </p>
            </div>
            <div>
              <Image
                src={heroMetav}
                alt="Zaštitne čizme"
                width={80}
                height={80}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Zaštita nogu</h3>
              <p>
                Sigurnosne čizme sa čeličnim kapicama i protivkliznim đonovima za
                maksimalnu sigurnost.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} */

  'use client';
  import { motion } from "framer-motion";

  export const metadata = {
    title: "Mešan Auto Dijelovi – Vodič kroz Servisne Pakete",
    description: "Preuzmite naš vodič kako biste saznali više o servisnim paketima, uslugama i viziji kvalitete koju nudimo za vaše vozilo.",
    keywords: ["auto dijelovi", "auto servis", "vodič", "Mešan Auto", "auto mehaničar Bihać"],
    openGraph: {
      title: "Mešan Auto Dijelovi – Brošura",
      description: "Saznajte sve o našim servisima i ponudi kroz detaljan vodič.",
      url: "https://www.mesan-auto.com/vodic",
      siteName: "Mešan Auto Dijelovi",
      images: [
        {
          url: "https://www.mesan-auto.com/images/vodic-preview.jpg",
          width: 1200,
          height: 630,
          alt: "Mešan Auto Dijelovi vodič"
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "Mešan Auto Dijelovi – Vodič",
      description: "Preuzmite PDF i otkrijte našu ponudu servisnih paketa.",
      images: ["https://www.mesan-auto.com/images/vodic-preview.jpg"]
    }
  };
  


  export default function HomePage() {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-sans">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center h-screen text-center px-6 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/futuristic-car-parts.jpg')] bg-cover bg-center opacity-30 blur-sm"></div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Autooooo   dijelovi  Mešan</h1>
            <p className="text-lg md:text-xl mb-6 text-gray-300">Poveži tehnologiju sa performansama. Nabavi dijelove nove generacije.</p>
            <a href="#about" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300">Saznaj više</a>
          </motion.div>
        </section>
  
        {/* About Section */}
        <section id="about" className="md:py-20 py-0  px-6 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-4">Ko smo mi?</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Mešan Auto Dijelovi donosi budućnost servisa direktno u vaše ruke. 
              Uz visokotehnološke komponente i brzu isporuku, mi mijenjamo način na koji razmišljate o auto dijelovima.
            </p>
          </motion.div>
        </section>
  
        {/* Features Section */}
        <section className="py-20 bg-black px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center"
          >
            {[ 
              { title: "Brza Dostava", text: "Isporuka širom BiH u rekordnom roku." },
              { title: "AI Kategorije", text: "Pretraga i odabir dijelova pomoću pametnih filtera." },
              { title: "Podrška 24/7", text: "Tim stručnjaka dostupan u svakom trenutku." },
            ].map(({ title, text }, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-xl hover:scale-105 hover:shadow-blue-600/50 transition duration-300">
                <h3 className="text-xl font-semibold text-blue-400 mb-2">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </motion.div>
        </section>
  
        {/* Product Categories Section */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Kategorije Dijelova</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[ 
                { name: "Motor & Mehanika", desc: "Klipovi, remeni, filteri i više." },
                { name: "Elektronika vozila", desc: "Moduli, senzori, svjetla, baterije." },
                { name: "Enterijer & Eksterijer", desc: "Udobnost i izgled – sve na jednom mjestu." },
              ].map(({ name, desc }, idx) => (
                <div key={idx} className="bg-gray-900 p-6 rounded-xl text-center transform hover:scale-105 hover:border hover:border-blue-500 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-blue-300 mb-2">{name}</h3>
                  <p className="text-gray-400">{desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-20 bg-black px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 text-blue-400">Šta klijenti kažu</h2>
            <div className="space-y-8">
              {[ 
                { quote: "Nevjerovatna brzina isporuke i savremeni proizvodi.", author: "Auto Servis Kemo" },
                { quote: "Vizualno i funkcionalno najbolji dijelovi koje sam ikad naručio.", author: "Emir, Sarajevo" }
              ].map(({ quote, author }, idx) => (
                <blockquote key={idx} className="bg-gray-900 p-6 rounded-xl border-l-4 border-blue-500">
                  <p className="text-gray-300 italic">“{quote}”</p>
                  <footer className="mt-4 text-gray-500">– {author}</footer>
                </blockquote>
              ))}
            </div>
          </motion.div>
        </section>
  
        {/* CTA Section */}
        <section className="py-20 px-6 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Zainteresovani?</h2>
            <p className="text-lg text-gray-300 mb-6">
              Kontaktirajte nas i otkrijte kako možemo unaprijediti vaše poslovanje s najmodernijim dijelovima.
            </p>
            <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">Kontaktiraj nas</a>
          </motion.div>
        </section>
      </main>
    );
  }
  