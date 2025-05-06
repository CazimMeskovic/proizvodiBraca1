'use client';

import Link from 'next/link';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-gray-300 border-t border-cyan-400/10 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 items-center text-center sm:text-left sm:items-start">
        {/* Bottom Row */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-gray-400">
          <p>© 2025 Bratska Platforma — Poveži se, promoviraj i rastu zajedno</p>
          <p className="text-center md:text-right max-w-md">
            Platforma koja povezuje muslimane širom svijeta, omogućujući im da dijele svoje proizvode i usluge, te šire svoj poslovni utjecaj u zajednici.
          </p>
        </div>

        {/* Created by */}
        <div className="w-full flex justify-center">
          <a
            href="https://imajwebsajt.vercel.app/"
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
