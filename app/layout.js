/* 

// app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';

export const metadata = {
  title: 'EarthMeta Advisor',
  description: 'Consulting services for the metaverse.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
 */

// app/layout.js
"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import { supabase } from '@/utils/supabase/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

/* export const metadata = {
  title: "Ahi – Platforma za Promociju Proizvoda i Usluga",
  description: "Pronađite proizvode i usluge koje nudi naša braća, promovirajte svoje proizvode i širite svoju ponudu u muslimanskoj zajednici.",
  keywords: ["muslimani", "proizvodi", "usluge", "promocija", "muslimanska zajednica"],
  openGraph: {
    title: "Ahi – Platforma za Promociju",
    description: "Povežite se sa zajednicom i promovirajte svoje proizvode i usluge u sigurnom i pouzdanoj mreži.",
    url: "https://www.ahi-proizvodi.vercel.app",
    siteName: "Braća Muslimani",
    images: [
      {
        url: "https://www.ahi-proizvodi.vercel.app/musliman.jpg",
        width: 1200,
        height: 630,
        alt: "Ahi platforma"
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
}; */
export default function RootLayout({ children }) {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash.includes('access_token')) {
      router.push(`/auth${window.location.hash}`);
    }
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth');
  };

  return (
    <html lang="en">
      <head>
       
      {/*   <script
          src="https://www.paypal.com/sdk/js?client-id=AZcC9lKMl8MeoYu-EScOMXCZm0Lp26rh5q7u1q_cD_2BibBg3YnrLI5NAb9ZpB9EDGOjF6h1c0_WXhaA&currency=USD"
          async
        ></script> */}
      </head>
      <body>
        {/* Supabase client is initialized globally */}
        <Header />
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Odjava
        </button>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
} 
 

/* 
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PayPalScriptProvider options={{ clientId: 'AZcC9lKMl8MeoYu-EScOMXCZm0Lp26rh5q7u1q_cD_2BibBg3YnrLI5NAb9ZpB9EDGOjF6h1c0_WXhaA', currency: 'USD' }}>
          <Header />
          <main>{children}</main>
          <Footer />
        </PayPalScriptProvider>
      </body>
    </html>
  );
}
  */