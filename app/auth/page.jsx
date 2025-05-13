/* "use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash;
    console.log('Hash from URL:', hash);

    if (hash) {
      const params = new URLSearchParams(hash.substring(1));
      const accessToken = params.get('access_token');
      const refreshToken = params.get('refresh_token');

      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);

      if (accessToken && refreshToken) {
        supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken })
          .then(() => {
            console.log('Session successfully set');
            router.push('/dashboard');
          })
          .catch((error) => {
            console.error('Error setting session:', error);
          });
      } else {
        console.error('Missing tokens in URL hash');
      }
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    if (error) {
      setError(error.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      alert('Registration successful! Please check your email to confirm.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Login / Register</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all"
        >
          Login
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
      >
        Login with Google
      </button>

      <form onSubmit={handleRegister} className="space-y-4 mt-6">
        <h2 className="text-xl font-bold">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
}
 */

"use client";

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  // Proveravamo da li je korisnik već prijavljen
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (session) {
        router.push('/dashboard'); // Ako je korisnik već prijavljen, preusmeri ga na dashboard
      }
    };
    checkSession();
  }, [router]);

  // Rukovanje prijavom
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);
    } else {
      router.push('/dashboard');
    }
  };

  // Rukovanje prijavom putem Google-a
  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin + '/auth', // Nakon prijave, vrati korisnika na /auth
      },
    });

    if (error) {
      setError(error.message);
    }
  };

  // Rukovanje registracijom
  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setError(error.message);
    } else {
      alert('Registration successful! Please check your email to confirm.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-gray-800 text-white rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Login / Register</h1>

      {error && <p className="text-red-500 mb-4">{error}</p>}

      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition-all"
        >
          Login
        </button>
      </form>

      <button
        onClick={handleGoogleLogin}
        className="w-full py-3 mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all"
      >
        Login with Google
      </button>

      <form onSubmit={handleRegister} className="space-y-4 mt-6">
        <h2 className="text-xl font-bold">Register</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <button
          type="submit"
          className="w-full py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-all"
        >
          Register
        </button>
      </form>
    </div>
  );
}
