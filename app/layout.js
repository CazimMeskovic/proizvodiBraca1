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
'use client'

import { SessionProvider } from 'next-auth/react';
import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';


export default function RootLayout({ children }) {
  return (
    <SessionProvider>
      <html lang="en">
        <head>


        </head>
        <body>

          <Header />
          <main>{children}</main>
          <Footer />

        </body>
      </html>
    </SessionProvider>
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