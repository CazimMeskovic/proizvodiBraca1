/* import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <Header />
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
 */
/* 
import React from 'react'

export default function page() {
  return (
    <div>
      <h1>fffffffffffffffffffff</h1>
    </div>
  )
}
 */
/* 
// app/page.js
import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
 */
/* 
// app/page.tsx ili page.js

export const metadata = {
  title: "EarthMeta Advisor – Metaverse City Strategy Consulting",
  description: "Empowering virtual city builders with strategic consulting packages for metaverse success. Explore our packages, whitepaper, and proven results.",
  keywords: ["EarthMeta", "metaverse consulting", "virtual cities", "digital city strategy", "web3 planning"],
  openGraph: {
    title: "EarthMeta Advisor – Metaverse City Strategy Consulting",
    description: "Expert consulting packages for building successful virtual cities in the metaverse.",
    url: "https://www.earthmeta-advisor.com",
    siteName: "EarthMeta Advisor",
    images: [
      {
        url: "https://www.earthmeta-advisor.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EarthMeta Advisor platform interface"
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "EarthMeta Advisor",
    description: "Helping digital city builders succeed in the metaverse.",
    images: ["https://www.earthmeta-advisor.com/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
 */
export const metadata = {
  title: "Braća Muslimani – Platforma za Promociju Proizvoda i Usluga",
  description: "Pronađite proizvode i usluge koje nudi naša braća, promovirajte svoje proizvode i širite svoju ponudu u muslimanskoj zajednici.",
  keywords: ["muslimani", "proizvodi", "usluge", "promocija", "muslimanska zajednica"],
  openGraph: {
    title: "Braća Muslimani – Platforma za Promociju",
    description: "Povežite se sa zajednicom i promovirajte svoje proizvode i usluge u sigurnom i pouzdanoj mreži.",
    url: "https://www.bratski-proizvodi.vercel.app",
    siteName: "Braća Muslimani",
    images: [
      {
        url: "https://www.bratski-proizvodi.vercel.app/images/muslim.jpg",
        width: 1200,
        height: 630,
        alt: "Braća Muslimani platforma"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Braća Muslimani – Platforma za Promociju",
    description: "Pronađite proizvode i usluge koje nudi naša braća, promovirajte ih i širimo zajednicu.",
    images: ["https://www.bratski-proizvodi.vercel.app/images/muslim.jpg"]
  }
};

import Hero from './components/Hero';

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}
