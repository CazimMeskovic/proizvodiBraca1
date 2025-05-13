/* 
// app/layout.js
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';



export const metadata = {
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
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
     
      </head>
      <body>
       
        <Header />
        <main>{children}</main>
        <Footer />
       
      </body>
    </html>
  );
} 
 
 */
/* 
// app/layout.tsx
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import type { Metadata } from 'next'
import { Providers } from '../lib/Providers'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { user },
  } = await supabase.auth.getUser()

  console.log('Trenutni korisnik:', user) // možeš obrisati kasnije

  return (
    <html lang="en">
      <body>
        <Providers>
        <Header user={user} /> 
        <main>{children}</main>
        <Footer />
        </Providers>
      </body>  
    </html>
  )
}
 */

// app/layout.tsx

import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Providers } from '../lib/Providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tvoja Aplikacija',
  description: 'Opis tvoje aplikacije',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Inicijalizuj Supabase na serverskoj strani
  const supabase = createServerComponentClient({ cookies })

  // Dobavi sesiju (za SSR)
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Dobavi korisnika ako ti treba
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <html lang="en">
      <body>
        <Providers session={session}>
          <Header user={user} /> {/* Ako Header koristi user podatke */}
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
