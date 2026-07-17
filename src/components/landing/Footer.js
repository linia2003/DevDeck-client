'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-4 mt-12 pb-8 relative z-10 select-none">
      {/* ULTRA-THIN, FULL-WIDTH FROSTED BAR */}
      <div className="backdrop-blur-2xl bg-white/40 dark:bg-black/30 border border-white/20 dark:border-white/10 rounded-full px-6 py-4 shadow-xl dark:shadow-2xl transition-colors duration-300">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Logo & Pitch branding */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#E94FD1] to-[#FF6FB5] flex items-center justify-center shadow-sm flex-shrink-0">
              <span className="text-white font-black text-[10px]">D</span>
            </div>
            <div className="text-left flex items-baseline gap-2">
              <span className="text-xs font-black tracking-tight text-[#1A1D29] dark:text-white">DevDeck</span>
              <span className="text-[10px] text-[#5B5F72] dark:text-[#9CA3B5] font-semibold hidden md:inline">| Your workspace, perfected.</span>
            </div>
          </div>

          {/* Social Icons Hub Only */}
          <div className="flex items-center gap-2">
            {/* GitHub Raw SVG */}
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              title="GitHub Pipeline"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-[#5B5F72] dark:text-[#9CA3B5] hover:text-[#E94FD1] dark:hover:text-[#E94FD1] border border-black/5 dark:border-white/5 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                <path d="M9 18c-4.51 2-5-2-7-2"/>
              </svg>
            </a>

            {/* Email Raw SVG */}
            <a 
              href="mailto:hello@devdeck.io"
              title="Email Support"
              className="w-8 h-8 rounded-full flex items-center justify-center bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-[#5B5F72] dark:text-[#9CA3B5] hover:text-[#FFB84D] dark:hover:text-[#FFB84D] border border-black/5 dark:border-white/5 transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
          </div>

          {/* Clean Condensed Meta Line */}
          <div className="flex items-center gap-3 text-[9px] font-mono font-bold tracking-wider text-[#5B5F72]/60 dark:text-[#9CA3B5]/40 uppercase">
            <span>&copy; 2026 DevDeck</span>
            <span className="hidden sm:inline text-black/20 dark:text-white/10">//</span>
            <span className="text-[#0FB8A6] dark:text-[#3FE0C5]">v1.0.0 // ONLINE</span>
          </div>

        </div>

      </div>
    </footer>
  );
}