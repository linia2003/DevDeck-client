
import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "DevDeck — Developer Workspace Dashboard",
  description: "Personalized workspace organizer dashboard for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#F4F5FA] text-[#1A1D29] antialiased selection:bg-[#FF6FB5]/20 selection:text-[#D6249F] dark:bg-[#0B0E14] dark:text-[#F5F6FA] transition-colors duration-300 overflow-x-hidden relative">
        
        {/* Cinematic Radial Background Glow Blobs */}
        <div className="absolute pointer-events-none inset-0 z-0 overflow-hidden">
          {/* Top Left Neon Blob */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#E94FD1] to-[#8B5CF6] opacity-8 dark:opacity-15 blur-[120px]" />
          {/* Center Right Neon Blob */}
          <div className="absolute top-[30%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#3FE0C5] to-[#2FD1FF] opacity-6 dark:opacity-12 blur-[150px]" />
        </div>

        <div className="relative flex min-h-screen flex-col z-10">
          {/* Universal Header */}
          <Navbar />
          
          {/* Central Workspace Page */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}