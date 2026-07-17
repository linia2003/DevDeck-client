'use client';
import React from 'react';
import { SidebarProvider } from '@/context/SidebarContext';

export default function Providers({ children }) {
  return (
    <SidebarProvider>
      {/* ONLY children. No Sidebar components here. */}
      {children}
    </SidebarProvider>
  );
}