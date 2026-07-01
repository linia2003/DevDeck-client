// src/app/layout.js
import "@/app/globals.css";
import LayoutClientWrapper from "@/components/LayoutClientWrapper";

export const metadata = {
  title: "DevDeck — Developer Workspace Dashboard",
  description: "Personalized workspace organizer dashboard for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#F4F5FA] text-[#1A1D29] antialiased selection:bg-[#FF6FB5]/20 selection:text-[#D6249F] dark:bg-[#0B0E14] dark:text-[#F5F6FA] transition-colors duration-300 overflow-x-hidden relative">
        
        {/* Layered Game Interface Ambient Glow Blobs */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          {/* Top-Right Magenta/Pink Glow Source */}
          <div className="absolute -top-[10%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#E94FD1] to-[#FF6FB5] opacity-8 dark:opacity-20 blur-[250px]" />
          
          {/* Left Edge Teal/Cyan Glow Source */}
          <div className="absolute top-[25%] -left-[15%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#3FE0C5] to-[#2FD1FF] opacity-6 dark:opacity-15 blur-[200px]" />
        </div>

        {/* Hand off tree structures to route-aware layout runtime wrapper */}
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}