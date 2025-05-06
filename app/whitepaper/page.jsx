
import Image from "next/image";
import { Download } from "lucide-react";

export const metadata = {
  title: "Braća Muslimani – Platforma za Promociju Proizvoda i Usluga",
  description: "Pronađite proizvode i usluge koje nudi naša braća, promovirajte svoje proizvode i širite svoju ponudu u muslimanskoj zajednici.",
  keywords: ["muslimani", "proizvodi", "usluge", "promocija", "muslimanska zajednica"],
  openGraph: {
    title: "Braća Muslimani – Platforma za Promociju",
    description: "Povežite se sa zajednicom i promovirajte svoje proizvode i usluge u sigurnom i pouzdanoj mreži.",
    url: "https://www.bracamuslimani.com",
    siteName: "Braća Muslimani",
    images: [
      {
        url: "https://www.bracamuslimani.com/images/vodic-preview.jpg",
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
    images: ["https://www.bracamuslimani.com/images/vodic-preview.jpg"]
  }
};

export default function WhitepaperSection() {
  return (
    <section className="min-h-screen bg-gray-950 text-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Naslov i opis */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold">Naša Bratska Platforma za Muslimanske Proizvođače</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Naša platforma povezuje muslimanske preduzetnike i proizvođače, omogućujući im da šire svoj rad, razmjenu proizvoda, 
            i širenje poslovanja unutar muslimanske zajednice. Zajedno rastemo i podržavamo naše zajedničke ciljeve.
          </p>
        </div>

        {/* Lokacija – Google mapa */}
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Gdje se nalazimo?</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Naša platforma se temelji u Bihaću, odakle pružamo podršku muslimanskim preduzetnicima i omogućavamo im da dođu do 
            novih tržišta i prošire svoje poslovanje. Pronađite nas na mapi ispod i dođite u naš grad.
          </p>
          <div className="w-full max-w-4xl h-[350px] mx-auto rounded-xl overflow-hidden shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49117.056896352944!2d15.822520947485227!3d44.81597038108023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4761406e6160d0e9%3A0x3cd88bdb0f9b8206!2zQmloYcSH!5e1!3m2!1shr!2sba!4v1746527617694!5m2!1shr!2sba"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokacija Platforme Bihać"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
