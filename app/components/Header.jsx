'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from "../images/mesan1.png"
import { supabase } from '@/utils/supabase/client';

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/prikaz', label: 'Proizvodi' },
  { href: '/usluge', label: 'Usluge' },
  { href: '/poklanjam', label: 'Poklanjam' },
  { href: '/objavi', label: 'Objavi' },
 /*  { href: '/whitepaper', label: 'Gdje smo' }, */
  { href: '/contact', label: 'Kontakt' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsLoggedIn(!!user);
    };

    const { subscription } = supabase.auth.onAuthStateChange(() => {
      checkAuth();
    });

    checkAuth();

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  const handleAuthAction = async () => {
    if (isLoggedIn) {
      await supabase.auth.signOut();
      router.push('/');
      setIsLoggedIn(false);
    } else {
      router.push('/auth');
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/90 backdrop-blur border-b border-cyan-400/10 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
          
            <Link
            href="/"
            className="text-2xl font-bold tracking-wider uppercase text-cyan-400 hover:text-white transition duration-300"
          >
 {/*  <Image
    src={logo}
    alt="Metaverse City"
    width={70}
    height={20}
    className="object-contain rounded-lg"
    priority
  /> */}Ahi Proizvodi
</Link>
          
        </motion.div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${
                pathname === link.href ? 'font-semibold underline' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={handleAuthAction}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            {isLoggedIn ? 'Odjava' : 'Prijavi se'}
          </button>
        </nav>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden bg-[#0f172a] dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2 shadow-md"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-300 transition duration-200 ${
                pathname === link.href ? 'underline' : ''
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleDarkMode}
            className="mt-2 text-white hover:text-cyan-300 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />} Tema
          </button>
        </motion.div>
      )}
    </header>
  );
}