"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from "next/navigation";
import { SidebarProvider } from "@/context/SidebarContext";
import Navbar from "@/components/Navbar";
import SidebarContainer from "@/components/SidebarContainer";

export default function Providers({ children }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // This effect ensures that the component is only rendered on the client side after hydration, preventing any server-side rendering issues.
  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide the global headers/footers on both the Login and Register screens
  const isAuthPage = pathname === "/login" || pathname === "/register";

  return (
    <SidebarProvider>
      {/* Only mount the Navbar when not on auth pages and after client hydration */}
      {!isAuthPage && mounted && <Navbar />}
      
      <div className="flex min-h-screen">
        {/* Only mount the Sidebar when not on auth pages and after client hydration */}
        {!isAuthPage && mounted && <SidebarContainer />}
        
        {/* Main Content Workspace viewport */}
        <main className="flex-1 transition-all duration-300 bg-transparent min-w-0">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}