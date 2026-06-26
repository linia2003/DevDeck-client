import "@/app/globals.css"; // loading standard talwind directories 
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "DevDeck — Developer Workspace Dashboard",
  description: "Personalized workspace organizer dashboard for developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="light">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-[#EEEDFE] selection:text-[#3C3489] dark:bg-[#1A1730] dark:text-white transition-colors duration-300">
        <div className="relative flex min-h-screen flex-col">
          {/* Universal Header */}
          <Navbar />
          
          {/* Central Workspace Page  */}
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}