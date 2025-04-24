/* 

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: "EarthMeta Advisor Whitepaper – Vision & Strategy Overview",
    description: "Dive into our official whitepaper for an in-depth look at EarthMeta Advisor’s vision, roadmap, and consulting methodology for virtual cities.",
    keywords: ["whitepaper", "EarthMeta strategy", "metaverse city roadmap", "virtual city planning"],
    openGraph: {
      title: "EarthMeta Advisor Whitepaper",
      description: "Comprehensive guide to our metaverse consulting vision and execution model.",
      url: "https://www.earthmeta-advisor.com/whitepaper",
      siteName: "EarthMeta Advisor",
      images: [
        {
          url: "https://www.earthmeta-advisor.com/images/whitepaper-preview.jpg",
          width: 1200,
          height: 630,
          alt: "Preview of EarthMeta Advisor whitepaper"
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "EarthMeta Whitepaper",
      description: "Explore our vision and roadmap for the metaverse.",
      images: ["https://www.earthmeta-advisor.com/images/whitepaper-preview.jpg"]
    }
  };
  

const WhitepaperSection = () => {
    return (
        <section className="bg-gray-800 text-white py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-6">EarthMeta Advisor Whitepaper</h2>
                <p className="text-lg text-center mb-10">
                    For a deep dive into our mission, vision, and detailed strategy, you can consult the EarthMeta Advisor Whitepaper.
                    This comprehensive document outlines how we plan to empower metaverse city builders every step of the way.
                </p>

                <div className="mb-8">
                    <iframe
                        src="/path-to-whitepaper.pdf"
                        width="100%"
                        height="800px"
                        className="border-2 border-gray-600 rounded-md"
                        title="EarthMeta Advisor Whitepaper"
                    />
                </div>

                <div className="text-center">
                    <Link href="/path-to-whitepaper.pdf" passHref

                        download="EarthMeta_Advisor_Whitepaper.pdf"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md inline-flex items-center"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-download mr-2" viewBox="0 0 16 16">
                            <path d="M8 0a.5.5 0 0 1 .5.5v7h2.5a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5H8v7a.5.5 0 0 1-1 0V14H4.5a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5H7V.5A.5.5 0 0 1 8 0z" />
                        </svg>
                        Download Whitepaper (PDF, 2MB)

                    </Link>
                </div>
            </div>
        </section>
    );
};

export default WhitepaperSection;
 */

/* 
export const metadata = {
    title: "EarthMeta Advisor Whitepaper – Vision & Strategy Overview",
    description: "Dive into our official whitepaper for an in-depth look at EarthMeta Advisor’s vision, roadmap, and consulting methodology for virtual cities.",
    keywords: ["whitepaper", "EarthMeta strategy", "metaverse city roadmap", "virtual city planning"],
    openGraph: {
      title: "EarthMeta Advisor Whitepaper",
      description: "Comprehensive guide to our metaverse consulting vision and execution model.",
      url: "https://www.earthmeta-advisor.com/whitepaper",
      siteName: "EarthMeta Advisor",
      images: [
        {
          url: "https://www.earthmeta-advisor.com/images/whitepaper-preview.jpg",
          width: 1200,
          height: 630,
          alt: "Preview of EarthMeta Advisor whitepaper"
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "EarthMeta Whitepaper",
      description: "Explore our vision and roadmap for the metaverse.",
      images: ["https://www.earthmeta-advisor.com/images/whitepaper-preview.jpg"]
    }
  };
  


import Image from "next/image";
import { Download } from "lucide-react";

export default function WhitepaperSection() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">EarthMeta Advisor Whitepaper</h1>
          <p className="text-lg text-gray-300">
            For a deep dive into our mission, vision, and detailed strategy, you can consult the EarthMeta Advisor Whitepaper. 
            This comprehensive document outlines how we plan to empower metaverse city builders every step of the way.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/whitepaper-thumbnail.png"
            alt="Whitepaper Cover"
            width={300}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-full h-[700px] border border-gray-700 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="/whitepaper/whitepaper.pdf"
              className="w-full h-full"
              title="Whitepaper PDF"
            ></iframe>
          </div>

          <a
            href="/whitepaper/whitepaper.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-200 shadow-md"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Whitepaper (PDF, 2MB)
          </a>
        </div>
      </div>
    </section>
  );
}
 */
/* 
import Image from "next/image";
import { Download } from "lucide-react";

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


export default function WhitepaperSection() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Vodič kroz Servisne Pakete</h1>
          <p className="text-lg text-gray-300">
            Preuzmite naš zvanični PDF vodič i upoznajte se sa detaljima svih servisnih paketa koje nudimo. 
            Sve na jednom mjestu – jasno, precizno i profesionalno.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/vodic-thumbnail.png"
            alt="Naslovna stranica vodiča"
            width={300}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="w-full h-[700px] border border-gray-700 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="/vodic/mesan-vodic.pdf"
              className="w-full h-full"
              title="Mešan Auto Vodič PDF"
            ></iframe>
          </div>

          <a
            href="/vodic/mesan-vodic.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-black font-semibold rounded-full transition duration-200 shadow-md"
          >
            <Download className="w-5 h-5 mr-2" />
            Preuzmite Vodič (PDF, 2MB)
          </a>
        </div>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-bold">Gdje se nalazimo?</h2>
          <p className="text-gray-400">
            Naša lokacija u Bihaću – lako dostupna i vidljiva. Pronađite nas na mapi ispod.
          </p>
          <div
            className="mx-auto rounded-xl shadow-md border border-gray-700"
            style={{
              backgroundImage:
                "url(https://external.fsjj3-1.fna.fbcdn.net/static_map.php?v=2060&theme=default&ccb=4-4&size=544x250&language=hr_HR&scale=1&zoom=12&center=44.828528178576%2C15.884578227997&marker_list[0]=44.828528178576%2C15.884578227997&_nc_client_id=comet_profile_address_preview&_nc_client_caller=CometStaticMap.react)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              height: "250px",
              width: "100%",
              maxWidth: "544px",
              margin: "0 auto",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
 */

import Image from "next/image";
import { Download } from "lucide-react";

export const metadata = {
  title: "Mešan Auto Dijelovi – Vodič kroz Servisne Pakete",
  description:
    "Preuzmite naš vodič kako biste saznali više o servisnim paketima, uslugama i viziji kvalitete koju nudimo za vaše vozilo.",
  keywords: [
    "auto dijelovi",
    "auto servis",
    "vodič",
    "Mešan Auto",
    "auto mehaničar Bihać"
  ],
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

export default function WhitepaperSection() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Naslov i opis */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Vodič kroz Servisne Pakete</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Preuzmite naš zvanični PDF vodič i upoznajte se sa detaljima svih servisnih paketa koje nudimo. 
            Sve na jednom mjestu – jasno, precizno i profesionalno.
          </p>
        </div>

        {/* Slika brošure */}
    {/*     <div className="flex justify-center">
          <Image
            src="/images/vodic-thumbnail.png"
            alt="Naslovna stranica vodiča"
            width={300}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div> */}

        {/* PDF prikaz + dugme za preuzimanje */}
      {/*   <div className="flex flex-col items-center space-y-6">
          <div className="w-full max-w-4xl h-[700px] border border-gray-700 rounded-xl overflow-hidden shadow-xl">
            <iframe
              src="/vodic/mesan-vodic.pdf"
              className="w-full h-full"
              title="Mešan Auto Vodič PDF"
            ></iframe>
          </div>

          <a
            href="/vodic/mesan-vodic.pdf"
            download
            className="inline-flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-full transition duration-200 shadow-md"
          >
            <Download className="w-5 h-5 mr-2" />
            Preuzmite Vodič (PDF, 2MB)
          </a>
        </div> */}

        {/* Lokacija – Google mapa */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Gdje se nalazimo?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Naša lokacija u Bihaću – lako dostupna i vidljiva. Pronađite nas na mapi ispod.
          </p>
          <div className="w-full max-w-4xl h-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.139950926142!2d15.882031876324232!3d44.82866927561734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476140887a7fd70b%3A0xf4241b9a6b4f5230!2zTWXFoWFu!5e1!3m2!1shr!2sba!4v1745480459529!5m2!1shr!2sba"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mešan Auto Lokacija"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
