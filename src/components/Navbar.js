"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const [searchFocused, setSearchFocused] = useState(false);
  
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error("Authentication separation error during logout:", err);
    }
  };

  const menuItems = [
    { label: "Dashboard", target: "/" },
    { label: "My Cards", target: "/cards" },
    { label: "Snippets", target: "/snippets" },
    { label: "Bookmarks", target: "/bookmarks" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#AFA9EC]/20 bg-white/90 backdrop-blur-md dark:bg-[#1A1730]/90 transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/*  branding & navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2.5 transition-transform active:scale-95">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#534AB7] text-white shadow-[0_4px_12px_rgba(83,74,183,0.3)]">
              {/* mimicking gravity ui icons*/}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-10 5 10 5 10-5-10-5Z" />
                <path d="m2 17 10 5 10-5" />
                <path d="m2 12 10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-medium tracking-tight text-[#3C3489] dark:text-white">
              DevDeck
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1.5">
            {menuItems.map((item) => {
              const isActive = currentPath === item.target;
              return (
                <Link
                  key={item.target}
                  href={item.target}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#EEEDFE] text-[#3C3489] dark:bg-[#534AB7]/20 dark:text-[#AFA9EC]"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/*  Search Bar part */}
        <div className="hidden sm:flex relative max-w-sm w-full mx-4">
          <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-[#7F77DD]">
            {/* another gravity ui mimick magnifier Icon(will add gravity ui later if possible) */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search dashboard..."
            className="w-full h-10 rounded-full border border-slate-200 bg-slate-50 pl-10 pr-12 text-sm text-slate-900 outline-none transition-all duration-200 focus:border-[#AFA9EC] focus:bg-white focus:ring-4 focus:ring-[#EEEDFE] dark:border-slate-700 dark:bg-slate-800/50 dark:text-white dark:focus:ring-[#534AB7]/10"
          />
          <kbd className={`absolute right-3 top-2 inline-flex h-6 select-none items-center gap-0.5 rounded-md border px-1.5 font-sans text-[10px] font-medium transition-opacity duration-200 ${
            searchFocused ? "opacity-0" : "opacity-100 border-slate-200 bg-white text-slate-400 dark:border-slate-600 dark:bg-slate-700"
          }`}>
            <span>⌘</span>K
          </kbd>
        </div>

        {/* Interactive Actions & Settings Dropdowns */}
        <div className="flex items-center gap-3.5">
          <button className="hidden sm:inline-flex h-10 items-center justify-center rounded-full bg-[#534AB7] px-5 text-sm font-medium text-white shadow-[0_4px_12px_rgba(83,74,183,0.2)] transition-all hover:bg-[#3C3489] active:scale-95">
            Add Card
          </button>

          {/* Theme Switcher Key */}
          <button className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-slate-50 text-slate-500 hover:bg-slate-100 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-400 transition-colors">
            {/* another gravity ui mimick  Moon Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
            </svg>
          </button>

          {/* Context Boundary for Session Profile Check */}
          {!isPending && (
            session?.user ? (
              <div className="relative group">
                <button className="flex items-center outline-none focus:outline-none">
                  <img
                    src={session.user.image || "https://api.dicebear.com/7.x/open-peeps/svg?seed=DevDeckFallback"}
                    alt="User Ecosystem Profile"
                    className="h-9 w-9 rounded-full border-2 border-[#534AB7] object-cover ring-2 ring-offset-2 ring-transparent transition-all"
                  />
                </button>
                {/* Floating Claymorphic Context Wrapper */}
                <div className="absolute right-0 mt-2.5 w-52 origin-top-right scale-95 opacity-0 pointer-events-none rounded-2xl border border-slate-100 bg-white p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.08)] transition-all duration-200 group-hover:scale-100 group-hover:opacity-100 group-hover:pointer-events-auto dark:border-slate-800 dark:bg-[#1A1730]">
                  <div className="px-3 py-2 border-b border-slate-50 dark:border-slate-800/60 mb-1">
                    <p className="text-xs font-semibold text-[#3C3489] dark:text-[#AFA9EC] truncate">
                      {session.user.name}
                    </p>
                    <p className="text-[11px] text-slate-400 truncate">
                      {session.user.email}
                    </p>
                  </div>
                  <Link href="/profile" className="flex items-center w-full px-3 py-2 text-xs rounded-xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800/40">
                    Profile Settings
                  </Link>
                  <button onClick={handleLogout} className="flex items-center w-full px-3 py-2 text-xs font-medium rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors">
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link href="/login" className="text-sm font-medium text-[#3C3489] hover:text-[#534AB7] dark:text-[#AFA9EC]">
                Sign In
              </Link>
            )
          )}
        </div>

      </div>
    </header>
  );
}