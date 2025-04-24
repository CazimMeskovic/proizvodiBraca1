/* // app/components/Footer.js
export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white p-6 mt-12">
            <div className="max-w-screen-xl mx-auto text-center">
                <p>&copy; 2025 EarthMeta Advisor. All rights reserved.</p>
                <div className="mt-4">
                    <a href="https://twitter.com" className="text-white mx-2">Twitter</a>
                    <a href="https://linkedin.com" className="text-white mx-2">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}
 */

/* 
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700 mt-16">
            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
              
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                 
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <Link href="/whitepaper" className="hover:text-blue-600 dark:hover:text-blue-400">
                            Whitepaper
                        </Link>
                        <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">
                            Contact
                        </Link>
                        <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-blue-600 dark:hover:text-blue-400">
                            Terms of Service
                        </Link>
                    </div>

                    <div className="flex gap-4">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <Twitter size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>

              
                <div className="border-t border-gray-300 dark:border-gray-700 my-6" />

       
                <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
                    <p>© 2025 EarthMeta Advisor – All Rights Reserved</p>
                    <p className="text-center md:text-right">
                        EarthMeta Advisor is an independent advisory service within the EarthMeta metaverse ecosystem.
                    </p>
                </div>
            </div>
        </footer>
    );
}
 */
/* 
import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300 border-t border-cyan-400/10 ">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col sm:flex-row gap-4 items-center text-sm tracking-wide">
            <Link
              href="/whitepaper"
              className="hover:text-cyan-400 transition"
            >
              Whitepaper
            </Link>
            <Link
              href="/contact"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-cyan-400 transition"
            >
              Terms of Service
            </Link>
          </div>

          <div className="flex gap-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-white transition"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-cyan-400/10 my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-gray-400">
          <p>© 2025 EarthMeta Advisor — All Rights Reserved</p>
          <p className="text-center md:text-right max-w-md">
            EarthMeta Advisor is an independent advisory service within the EarthMeta metaverse ecosystem.
          </p>
        </div>
      </div>
    </footer>
  );
}
 */
/* 
'use client';

import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 border-t border-cyan-400/10 py-10 px-4 sm:px-6 lg:px-8">
      
       
<div>
        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-gray-400">
          <p>© 2025 Mešan Auto Dijelovi — Sva prava zadržana</p>
          <p className="text-center md:text-right max-w-md">
            Mešan Auto je savremeni dobavljač autodijelova, specijalizovan za vrhunsku uslugu i podršku online klijentima širom regije.
          </p>
        </div>
      </div>
    </footer>
  );
}
 */

'use client';

import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 border-t border-cyan-400/10 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center text-center sm:text-left sm:items-start">
        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-gray-400">
          <p>© 2025 Mešan Auto Dijelovi — Sva prava zadržana</p>
          <p className="text-center md:text-right max-w-md">
            Mešan Auto je savremeni dobavljač autodijelova, specijalizovan za vrhunsku uslugu i podršku online klijentima širom regije.
          </p>
        </div>

        {/* Created by */}
        <div className="w-full flex justify-center">
          <a
            href="https://cazim.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-white transition text-sm"
          >
            Created by Mesko development
          </a>
        </div>
      </div>
    </footer>
  );
}
