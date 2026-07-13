import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from 'react';
import Providers from "./providers"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "DevDeck",
  description: "Your development dashboard Workspace Hub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen text-white bg-slate-950`}>
        
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}