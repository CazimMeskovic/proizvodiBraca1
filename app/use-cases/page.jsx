/* 


import slika1 from "../images/slikaZaKartice.jpg"
import slika2 from "../images/meta kartica4.jpg"
import slika3 from "../images/metaKartica3.jpg"
import slika4 from "../images/metakartica5.jpg"
import Image from "next/image";

export const metadata = {
    title: "EarthMeta Use Cases – Virtual City Success Stories",
    description: "See how EarthMeta Advisor has helped virtual cities grow and succeed through strategy, growth tactics, and expert support.",
    keywords: ["metaverse use cases", "digital city examples", "EarthMeta results", "virtual growth strategy"],
    openGraph: {
      title: "EarthMeta Advisor Use Cases",
      description: "Real-world applications of our strategy kits in metaverse city development.",
      url: "https://www.earthmeta-advisor.com/use-cases",
      siteName: "EarthMeta Advisor",
      images: [
        {
          url: "https://www.earthmeta-advisor.com/images/use-case-cover.jpg",
          width: 1200,
          height: 630,
          alt: "EarthMeta strategy success story"
        }
      ],
      type: "article"
    },
    twitter: {
      card: "summary_large_image",
      title: "EarthMeta Use Cases",
      description: "Discover how our packages have helped virtual cities thrive.",
      images: ["https://www.earthmeta-advisor.com/images/use-case-cover.jpg"]
    }
  };
  

const useCases = [
    {
        title: "Virtual City Launch – Small City Goes Big",
        image: slika1,
        description:
            "City Alpha – EarthMeta Advisor provided a Growth package resulting in a <strong class='text-cyan-400'>150% increase</strong> in active users. By implementing a targeted event strategy and optimizing land pricing, this virtual city’s economy boomed within 3 months.",
    },
    {
        title: "Revitalizing a Digital London",
        image: slika2,
        description:
            "Through strategic zoning and interactive features, Digital London saw a <strong class='text-cyan-400'>3x increase</strong> in visitor retention. EarthMeta’s branding insights helped re-establish its presence in the metaverse.",
    },
    {
        title: "MetaDubai – From Vision to Reality",
        image: slika3,
        description:
            "With EarthMeta Advisor’s Premium Package, MetaDubai developed five high-traffic hubs and saw a <strong class='text-cyan-400'>70% rise</strong> in investor engagement within the first quarter.",
    },
    {
        title: "Smart City Optimization for NeoTokyo",
        image: slika4,
        description:
            "By analyzing usage data and deploying intelligent resource zones, NeoTokyo reduced infrastructure lag by <strong class='text-cyan-400'>40%</strong>, enhancing user satisfaction and boosting trade activity.",
    },
];

const UseCasesSection = () => {
    return (
        <section className=" bg-[#0f172a] py-20 border-t border-cyan-400/10">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-white mb-4 tracking-tight">
                    Use Cases
                </h2>
                <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto text-lg">
                    Explore how EarthMeta Advisor can drive real results. These futuristic cities saw dramatic improvements.
                </p>

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-400/30 transition duration-300 overflow-hidden"
                        >
                           <div className="flex justify-center items-center p-4">
  <Image
    width={500}
    height={500}
    src={useCase.image}
    alt={useCase.title}
    className="rounded-xl object-cover object-center shadow-md"
  />
</div>


                            <div className="p-6 space-y-3">
                                <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                                <p
                                    className="text-gray-300 text-sm leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: useCase.description }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
 */
/* 
import slika1 from "../images/slikaZaKartice.jpg"
import slika2 from "../images/meta kartica4.jpg"
import slika3 from "../images/metaKartica3.jpg"
import slika4 from "../images/metakartica5.jpg"
import Image from "next/image";

export const metadata = {
  title: "HTZ Oprema – Uspješni Primjeri Korištenja",
  description: "Pogledajte kako je HTZ oprema pomogla kompanijama da poboljšaju sigurnost i efikasnost u radu.",
  keywords: ["HTZ oprema", "sigurnost na radu", "primjeri HTZ opreme", "osiguranje radne snage"],
  openGraph: {
    title: "HTZ Oprema – Primjeri Korištenja",
    description: "Pogledajte stvarne primjere uspjeha korištenja HTZ opreme u različitim industrijama.",
    url: "https://www.earthmeta-advisor.com/htz-oprema",
    siteName: "HTZ Oprema",
    images: [
      {
        url: "https://www.earthmeta-advisor.com/images/htz-oprema-cover.jpg",
        width: 1200,
        height: 630,
        alt: "HTZ oprema u akciji"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "HTZ Oprema – Primjeri Korištenja",
    description: "Pogledajte kako je HTZ oprema poboljšala sigurnost radnih mjesta.",
    images: ["https://www.earthmeta-advisor.com/images/htz-oprema-cover.jpg"]
  }
};

const useCases = [
  {
    title: "Povećanje Sigurnosti na Gradilištu",
    image: slika1,
    description:
      "Korištenjem HTZ opreme, kompanija Alfa je smanjila broj nesreća na gradilištu za <strong class='text-cyan-400'>30%</strong>, poboljšavajući sigurnost svojih radnika i povećavajući produktivnost.",
  },
  {
    title: "Optimizacija Zaštite u Industriji na Visokoj Temperaturi",
    image: slika2,
    description:
      "Upotrebom specijalizovane HTZ opreme, kompanija Beta je osigurala bolje uslove za rad u ekstremnim temperaturama, što je rezultiralo <strong class='text-cyan-400'>50% manjim brojem povreda</strong>.",
  },
  {
    title: "Zaštita Zdravlja Radnika u Rudarstvu",
    image: slika3,
    description:
      "Kompanija Gamma je implementirala HTZ opremu koja je smanjila rizik od udisanja štetnih čestica za <strong class='text-cyan-400'>40%</strong>, značajno poboljšavajući zdravlje svojih radnika.",
  },
  {
    title: "Efikasnost u Zavarivačkim Radovima",
    image: slika4,
    description:
      "Korištenje visokokvalitetne zaštite za zavarivače omogućilo je kompaniji Delta da poveća efikasnost i smanji broj nesreća na radnom mjestu za <strong class='text-cyan-400'>25%</strong>.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="bg-[#0f172a] py-20 border-t border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4 tracking-tight">
          Primjeri Korištenja HTZ Opreme
        </h2>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto text-lg">
          Saznajte kako HTZ oprema može poboljšati sigurnost i efikasnost na radnim mjestima.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-400/30 transition duration-300 overflow-hidden"
            >
              <div className="flex justify-center items-center p-4">
                <Image
                  width={500}
                  height={500}
                  src={useCase.image}
                  alt={useCase.title}
                  className="rounded-xl object-cover object-center shadow-md"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                <p
                  className="text-gray-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: useCase.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
 */

import slika1 from "../images/auto1.jpg"
import slika2 from "../images/auto2.jpg"
import slika3 from "../images/auto3.jpg"
import slika4 from "../images/auto4.jpg"
import Image from "next/image";

export const metadata = {
  title: "Mešan Auto Dijelovi – Zadovoljni Klijenti",
  description: "Pogledajte kako su naši auto dijelovi pomogli klijentima da poboljšaju performanse i sigurnost svojih vozila.",
  keywords: ["auto dijelovi", "zamjenski dijelovi", "servis vozila", "Mešan Auto", "zadovoljni klijenti"],
  openGraph: {
    title: "Mešan Auto Dijelovi – Iskustva Klijenata",
    description: "Stvarna iskustva zadovoljnih korisnika koji su koristili proizvode i usluge Mešan Auto Dijelova.",
    url: "https://www.mesan-auto.ba/iskustva",
    siteName: "Mešan Auto Dijelovi",
    images: [
      {
        url: "https://www.mesan-auto.ba/images/auto-dijelovi-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Mešan Auto Dijelovi"
      }
    ],
    type: "article"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mešan Auto Dijelovi – Iskustva Klijenata",
    description: "Pogledajte kako naši dijelovi i usluge pomažu klijentima svakodnevno.",
    images: ["https://www.mesan-auto.ba/images/auto-dijelovi-cover.jpg"]
  }
};

const useCases = [
  {
    title: "Brza Zamjena Kočionih Diskova",
    image: slika1,
    description:
      "Klijent iz Bihaća je <strong class='text-cyan-400'>u roku od jednog dana</strong> zamijenio kočione diskove zahvaljujući dostupnosti dijelova i stručnoj podršci Mešan Auto tima.",
  },
  {
    title: "Ušteda na Servisu Ovjesa",
    image: slika2,
    description:
      "Zamjenom amortizera i opruga kvalitetnim dijelovima iz Mešan Auto asortimana, korisnik je postigao <strong class='text-cyan-400'>40% niže troškove</strong> servisa u poređenju s prethodnim rješenjem.",
  },
  {
    title: "Pouzdana Dostava u Ruralna Područja",
    image: slika3,
    description:
      "Porudžbina klijenta iz okolice Cazina stigla je na kućnu adresu za <strong class='text-cyan-400'>manje od 24h</strong>, zahvaljujući efikasnoj logistici i organizaciji tima.",
  },
  {
    title: "Zamjena Motornog Ulja i Filtera",
    image: slika4,
    description:
      "Korisnik je kupio kompletan set za mali servis vozila, uključujući ulje i filtere, uz <strong class='text-cyan-400'>gratis tehnički savjet</strong> kako bi samostalno obavio zamjenu.",
  },
];

const UseCasesSection = () => {
  return (
    <section className="bg-[#0f172a] py-20 border-t border-cyan-400/10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-4 tracking-tight">
          Iskustva Naših Klijenata
        </h2>
        <p className="text-center text-gray-400 mb-14 max-w-2xl mx-auto text-lg">
          Pogledajte kako proizvodi i usluge Mešan Auto Dijelova pomažu korisnicima širom regije.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-[#1e293b] rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:ring-1 hover:ring-cyan-400/30 transition duration-300 overflow-hidden"
            >
              <div className="flex justify-center items-center p-4">
                <Image
                  width={500}
                  height={500}
                  src={useCase.image}
                  alt={useCase.title}
                  className="rounded-xl object-cover object-center shadow-md"
                />
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-white">{useCase.title}</h3>
                <p
                  className="text-gray-300 text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: useCase.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
