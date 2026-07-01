// src/components/LayoutClientWrapper.js
"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LayoutClientWrapper({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Delay execution until after initial client mount pass to prevent SSR mismatches
  useEffect(() => {
    setMounted(true);
  }, []);

  const isLoginPage = pathname === "/login";

  if (!mounted) {
    return (
      <div className="relative flex min-h-screen flex-col z-10">
        <main className="flex-1 flex flex-col">{children}</main>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-screen flex-col z-10">
      {/* Safe client-side conditional render */}
      {!isLoginPage && <Navbar />}
      
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {!isLoginPage && <Footer />}
    </div>
  );
}