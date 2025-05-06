'use client';
import { motion } from "framer-motion";

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
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Braća Muslimani  Platforma za Promociju</h1>
          <p className="text-lg md:text-xl mb-6 text-gray-300">Povežite se sa zajednicom i promovirajte svoje proizvode i usluge u sigurnom okruženju.</p>
          <a href="#about" className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 transition-all duration-300">Saznaj više</a>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="md:py-20 py-0 px-6 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-blue-400 mb-4">Ko smo mi?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Braća Muslimani je platforma koja povezuje muslimane koji žele promovirati i prodavati svoje proizvode i usluge unutar zajednice. Naša misija je pružiti prostor za rast i razvoj, gdje zajednica može međusobno pomoći i podržavati se.
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
            { title: "Bez naporne registracije", text: "Brzo i lako počnite promovirati svoje proizvode." },
            { title: "Povezivanje sa Zajednicom", text: "Otkrijte nove kupce i partnere unutar muslimanske zajednice." },
            { title: "Sigurnost i Povjerenje", text: "Platforma koja nudi sigurno okruženje za trgovinu i poslovanje." },
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
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Kategorije Proizvoda</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              { name: "Proizvodi za Dom", desc: "Namještaj, aparati, dekoracija i sve što vam treba za vaš dom." },
              { name: "Tehnička Oprema", desc: "Elektronika, alati, i ostala oprema za kućne i poslovne potrebe." },
              { name: "Usuge za Poslovanje", desc: "Različite vrste usluga, od transporta do održavanja." },
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
    <h2 className="text-4xl font-bold mb-8 text-blue-400">Naša misija je</h2>
    <div className="space-y-8">
      {[ 
        { quote: "Povezivanje muslimana i omogućavanje im da promoviraju svoje proizvode i usluge unutar zajednice.", author: "" },
        { quote: "Ova platforma je odlična prilika za rast i širenje poslovanja među muslimanima širom regije.", author: "" }
      ].map(({ quote, author }, idx) => (
        <blockquote key={idx} className="bg-gray-900 p-6 rounded-xl border-l-4 border-blue-500">
          <p className="text-gray-300 italic">“{quote}”</p>
        {/*   <footer className="mt-4 text-gray-500"> {author}</footer> */}
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
          <h2 className="text-4xl font-bold mb-4 text-purple-400">Zainteresovani za saradnju?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Kontaktirajte nas i otkrijte kako možemo unaprijediti vaše poslovanje kroz našu platformu.
          </p>
          <a href="/contact" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg">Kontaktiraj nas</a>
        </motion.div>
      </section>
    </main>
  );
}
