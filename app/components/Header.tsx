/* // app/components/Header.js
import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-gray-800 text-white p-4">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold">EarthMeta Advisor</Link>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/packages">Packages</Link></li>
                        <li><Link href="/whitepaper">Whitepaper</Link></li>
                        <li><Link href="/use-cases">Use Cases</Link></li>
                        <li><Link href="/how-it-works">How It Works</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
 */
/* 
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/packages', label: 'Packages' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/whitepaper', label: 'Whitepaper' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark';
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
              <header className="fixed top-0 w-full z-50  bg-[#0f172a]/80 backdrop-blur border-b border-cyan-400/10 shadow-sm ">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
              
                <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    EarthMeta Advisor
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${pathname === link.href ? 'font-semibold underline' : ''
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>
                </nav>

               
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

           
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2 shadow-md">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`block text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 ${pathname === link.href ? 'font-semibold underline' : ''
                                }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button onClick={toggleDarkMode} className="mt-2 text-gray-600 dark:text-gray-300 hover:text-blue-500">
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />} Toggle Theme
                    </button>
                </div>
            )}
        </header>
    );
}
  */

/* 
 'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/packages', label: 'Packages' },
    { href: '/use-cases', label: 'Use Cases' },
    { href: '/whitepaper', label: 'Whitepaper' },
    { href: '/contact', label: 'Contact' },
];

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const isDark = localStorage.getItem('theme') === 'dark';
        setDarkMode(isDark);
        document.documentElement.classList.toggle('dark', isDark);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('theme', newMode ? 'dark' : 'light');
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur border-b border-cyan-400/10 shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-wide uppercase text-white hover:text-cyan-300 transition"
                >
                    EarthMeta Advisor
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-300 transition duration-200 ${
                                pathname === link.href ? 'underline' : ''
                            }`}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <button
                        onClick={toggleDarkMode}
                        className="text-white hover:text-cyan-300 transition"
                    >
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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
                <div className="md:hidden bg-[#0f172a] dark:bg-gray-900 px-4 pb-4 pt-2 space-y-2 shadow-md">
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
                        {darkMode ? <Sun size={20} /> : <Moon size={20} />} Toggle Theme
                    </button>
                </div>
            )}
        </header>
    );
}

 */
/* 

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from "../images/mesan1.png"

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/prikaz', label: 'Proizvodi' },
  { href: '/usluge', label: 'Usluge' },
  { href: '/poklanjam', label: 'Poklanjam' },
  { href: '/objavi', label: 'Objavi' },
  { href: '/contact', label: 'Kontakt' },
];


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/90 backdrop-blur border-b border-cyan-400/10 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
          
            <Link
            href="/"
            className="text-2xl font-bold tracking-wider uppercase text-cyan-400 hover:text-white transition duration-300"
          >
Ahi Proizvodi
</Link>
          
        </motion.div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ scale: 1.1 }}>
              <Link
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide text-white hover:text-cyan-300 transition duration-200 ${
                  pathname === link.href ? 'border-b-2 border-cyan-300 pb-1' : ''
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-cyan-300 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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
} */

/* 

  'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import {createClient} from "../../lib/supabaseClient"

const navLinks = [
  { href: '/', label: 'Početna' },
  { href: '/prikaz', label: 'Proizvodi' },
  { href: '/usluge', label: 'Usluge' },
  { href: '/poklanjam', label: 'Poklanjam' },
  { href: '/objavi', label: 'Objavi' },
  { href: '/contact', label: 'Kontakt' },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setDarkMode(isDark)
    document.documentElement.classList.toggle('dark', isDark)

    // Provjera autentifikacije korisnika
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession()
      setIsLoggedIn(!!data.session)
    }
    checkSession()
  }, [])

  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    document.documentElement.classList.toggle('dark', newMode)
    localStorage.setItem('theme', newMode ? 'dark' : 'light')
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/login')
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-[#0f172a]/90 to-[#1e293b]/90 backdrop-blur border-b border-cyan-400/10 shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 300 }}>
          <Link
            href="/"
            className="text-2xl font-bold tracking-wider uppercase text-cyan-400 hover:text-white transition duration-300"
          >
            Ahi Proizvodi
          </Link>
        </motion.div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <motion.div key={link.href} whileHover={{ scale: 1.1 }}>
              <Link
                href={link.href}
                className={`text-sm font-medium uppercase tracking-wide text-white hover:text-cyan-300 transition duration-200 ${
                  pathname === link.href ? 'border-b-2 border-cyan-300 pb-1' : ''
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}

          {isLoggedIn && (
            <>
              <Link
                href="/profil"
                className="text-sm font-medium uppercase tracking-wide text-white hover:text-cyan-300 transition duration-200"
              >
                Moj Profil
              </Link>
              <button
                onClick={handleLogout}
                className="text-sm font-medium uppercase tracking-wide text-white hover:text-red-400 transition duration-200"
              >
                Odjavi se
              </button>
            </>
          )}

          {!isLoggedIn && (
            <Link
              href="/login"
              className="text-sm font-medium uppercase tracking-wide text-white hover:text-cyan-300 transition duration-200"
            >
              Prijavi se
            </Link>
          )}

          <button
            onClick={toggleDarkMode}
            className="text-white hover:text-cyan-300 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
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

          {isLoggedIn && (
            <>
              <Link
                href="/profil"
                className="block text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-300"
              >
                Moj Profil
              </Link>
              <button
                onClick={handleLogout}
                className="block text-sm font-semibold uppercase tracking-wide text-white hover:text-red-400"
              >
                Odjavi se
              </button>
            </>
          )}

          {!isLoggedIn && (
            <Link
              href="/login"
              className="block text-sm font-semibold uppercase tracking-wide text-white hover:text-cyan-300"
            >
              Prijavi se
            </Link>
          )}

          <button
            onClick={toggleDarkMode}
            className="mt-2 text-white hover:text-cyan-300 transition"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />} Tema
          </button>
        </motion.div>
      )}
    </header>
  )
}
 */

'use client'

export default function Header({ user }: { user: any }) {
  return (
    <header className="text-red-500 ">
      <h1>Ahi</h1>
      {user ? (
        <p>Dobrodošao, {user.email}</p>
      ) : (
        <p>Niste prijavljeni</p>
      )}
    </header>
  )  
}
