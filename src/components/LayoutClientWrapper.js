// src/components/LayoutClientWrapper.js
"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function LayoutClientWrapper({ children }) {
  const pathname = usePathname();
  
  // Check if current view is the access login initialization gate
  const isLoginPage = pathname === "/login";

  return (
    <div className="relative flex min-h-screen flex-col z-10">
      {/* Conditionally display the core navigation frame based on routing parameters */}
      {!isLoginPage && <Navbar />}
      
      {/* Primary Viewport Context */}
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}