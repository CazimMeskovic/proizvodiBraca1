import React from 'react'

export default function FuturisticLoader() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
          <div className="flex space-x-4">
            {[...Array(3)].map((_, i) => (
              <span
                key={i}
                className="w-6 h-6 rounded-full bg-cyan-400 animate-ping"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <p className="absolute bottom-10 text-cyan-300 text-lg tracking-widest animate-pulse">Učitavanje...</p>
        </div>
      );
}
