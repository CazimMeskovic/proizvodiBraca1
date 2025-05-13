/* 'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { createBrowserSupabaseClient } from '@supabase/ssr';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    const handleAuth = async () => {
      const { error } = await supabase.auth.exchangeCodeForSession();
      if (error) {
        console.error('Error exchanging code:', error);
      } else {
        router.replace('/dashboard'); // ili kamo god želiš
      }
    };

    handleAuth();
  }, [router]);

  return <p>Signing in...</p>;
}
 */

'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
/* import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'; */
import { createBrowserSupabaseClient } from '@supabase/ssr';

export default function Callback() {
  const router = useRouter();

  useEffect(() => {
    const supabase = createBrowserSupabaseClient();

    const extractTokensFromHash = () => {
      const hash = window.location.hash;
      const params = new URLSearchParams(hash.slice(1)); // remove #
      return {
        access_token: params.get('access_token'),
        refresh_token: params.get('refresh_token'),
      };
    };

    const handleAuth = async () => {
      const { access_token, refresh_token } = extractTokensFromHash();

      if (!access_token || !refresh_token) {
        console.error('❌ Tokeni nisu pronađeni u URL hash-u');
        return;
      }

      const { error } = await supabase.auth.setSession({
        access_token,
        refresh_token,
      });

      if (error) {
        console.error('❌ Greška kod setSession:', error.message);
      } else {
        console.log('✅ Sesija postavljena!');
        router.replace('/dashboard'); // ili kamo god želiš
      }
    };

    handleAuth();
  }, [router]);

  return <p>Prijavljujem vas...</p>;
}
