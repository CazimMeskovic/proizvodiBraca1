/* 
"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
import { supabase } from '@/utils/supabase/client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';


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
       
      
      </head>
      <body>
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
 
 */

/* 
'use client';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

export default function SupabaseProvider({ children }) {
  const [supabase] = useState(() => createPagesBrowserClient());

  return (
    <SessionContextProvider supabaseClient={supabase}>
      {children}
    </SessionContextProvider>
  );
}
 
 */

"use client";

import Header from './components/Header';
import Footer from './components/Footer';
import './globals.css';
/* import { supabase } from '@/utils/supabase/client'; */
import {supabase} from "../utils/supabase/client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';

export default function SupabaseProvider({ children }) {
  const [supabase] = useState(() => createPagesBrowserClient());

/* 
export default function RootLayout({ children }) { */
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
       
      
      </head>
      <body>
        <Header />
        <button
          onClick={handleLogout}
          className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Odjava
        </button>
        <main>
            <SessionContextProvider supabaseClient={supabase}>
          {children}
          </SessionContextProvider>
          </main>
        <Footer />
      </body>
    </html>
  );
} 
 
