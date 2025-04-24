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
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';



export const metadata = {
  title: 'Moja stranica',
  description: 'Ovo je opis moje stranice.',
  openGraph: {
    title: 'Moja stranica',
    description: 'Opis koji će biti prikazan kad neko dijeli sajt.',
    url: 'https://moj-sajt.com',
    siteName: 'MojaStranica',
    images: [
      {
        url: 'https://d4n0y8dshd77z.cloudfront.net/listings/19671932/lg/TOvgkv7Yi74qbwcmhL0p.jpg',
        width: 1200,
        height: 630,
        alt: 'Moja meta slika',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Moja stranica',
    description: 'Opis za Twitter karticu',
    images: ['https://d4n0y8dshd77z.cloudfront.net/listings/19671932/lg/TOvgkv7Yi74qbwcmhL0p.jpg'],
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
       
      {/*   <script
          src="https://www.paypal.com/sdk/js?client-id=AZcC9lKMl8MeoYu-EScOMXCZm0Lp26rh5q7u1q_cD_2BibBg3YnrLI5NAb9ZpB9EDGOjF6h1c0_WXhaA&currency=USD"
          async
        ></script> */}
      </head>
      <body>
       
        <Header />
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