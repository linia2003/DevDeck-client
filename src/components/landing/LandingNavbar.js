'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { Bars, Xmark } from '@gravity-ui/icons';

export default function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4 max-w-[1440px] mx-auto">
      <div className="backdrop-filter backdrop-blur-[20px] bg-[rgba(26,29,41,0.7)] border border-white/5 rounded-full px-6 py-3 flex items-center justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#E94FD1] to-[#FF6FB5] flex items-center justify-center">
            <span className="text-white font-medium text-lg">D</span>
          </div>
          <span className="text-xl font-medium tracking-tight text-[#F5F6FA]">
            DevDeck
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-[#9CA3B5] hover:text-[#F5F6FA] transition-colors">Features</a>
          <a href="#why" className="text-sm text-[#9CA3B5] hover:text-[#F5F6FA] transition-colors">Benefits</a>
          <a href="#about" className="text-sm text-[#9CA3B5] hover:text-[#F5F6FA] transition-colors">About</a>
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login">
            <Button variant="light" className="rounded-full text-sm border border-white/5 bg-white/5 text-[#F5F6FA]">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button className="rounded-full text-sm bg-gradient-to-r from-[#E94FD1] to-[#FF6FB5] text-white">
              Register
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#9CA3B5] hover:text-[#F5F6FA]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <Xmark className="w-6 h-6" /> : <Bars className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-20 left-4 right-4 backdrop-filter backdrop-blur-[20px] bg-[rgba(26,29,41,0.95)] border border-white/5 rounded-3xl p-6 flex flex-col gap-4 md:hidden">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-[#9CA3B5] hover:text-[#F5F6FA]">Features</a>
          <a href="#why" onClick={() => setIsOpen(false)} className="text-[#9CA3B5] hover:text-[#F5F6FA]">Benefits</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-[#9CA3B5] hover:text-[#F5F6FA]">About</a>
          <hr className="border-white/5" />
          <Link href="/login" onClick={() => setIsOpen(false)}>
            <Button className="w-full rounded-full border border-white/10 bg-white/5 text-[#F5F6FA]">Login</Button>
          </Link>
          <Link href="/register" onClick={() => setIsOpen(false)}>
            <Button className="w-full rounded-full bg-gradient-to-r from-[#E94FD1] to-[#FF6FB5] text-white">Register</Button>
          </Link>
        </div>
      )}
    </nav>
  );
}