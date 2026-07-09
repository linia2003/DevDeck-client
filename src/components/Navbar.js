"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const currentPath = usePathname();
  const [searchFocused, setSearchFocused] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      await authClient.signOut();
      setDropdownOpen(false);
      router.push("/login");
      router.refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const menuItems = [
    { label: "Dashboard", target: "/" },
    { label: "My Cards", target: "/cards" },
    { label: "Snippets", target: "/snippets" },
    { label: "Bookmarks", target: "/bookmarks" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-deck-muted-plum bg-deck-midnight/65 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Branding (Asymmetric slanted style) */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 transition-transform active:scale-95 group">
            <span className="text-2xl font-black italic tracking-tighter text-white">
              Dev<span className="text-deck-amber not-italic font-light">Deck</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = currentPath === item.target;
              return (
                <Link
                  key={item.target}
                  href={item.target}
                  className={`px-4 py-1.5 rounded-lg text-xs font-medium uppercase italic tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-deck-deep-wine text-white border border-deck-amber/30 shadow-[0_0_15px_rgba(176,125,58,0.15)]"
                      : "text-deck-sage hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Global Filter Search Module Bar */}
        <div className="hidden sm:flex relative max-w-sm w-full mx-4">
          <div className="pointer-events-none absolute inset-y-0 left-3.5 flex items-center text-deck-sage">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </div>
          <input
            type="text"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            placeholder="Search deck engine..."
            className="w-full h-10 rounded-xl border border-deck-muted-plum bg-deck-midnight/40 pl-10 pr-12 text-xs italic tracking-wide text-white outline-none transition-all focus:border-deck-amber focus:ring-1 focus:ring-deck-amber/20"
          />
          <kbd className="absolute right-3 top-2.5 inline-flex h-5 select-none items-center gap-0.5 rounded border border-deck-muted-plum bg-deck-midnight px-1.5 font-sans text-[9px] text-deck-sage">
            <span>⌘</span>K
          </kbd>
        </div>

        {/* Interactive Actions Stack */}
        <div className="flex items-center gap-3.5">
          <button className="hidden sm:inline-flex h-9 items-center justify-center rounded-lg bg-deck-amber px-5 text-xs font-bold uppercase italic tracking-wider text-deck-midnight shadow-md hover:opacity-90 active:scale-95 transition-all">
            Add Card
          </button>

          {mounted && !isPending && session?.user ? (
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="flex items-center outline-none cursor-pointer transition-transform active:scale-95"
              >
                <img
                  src={session.user.image || `https://api.dicebear.com/7.x/open-peeps/svg?seed=${encodeURIComponent(session.user.name || 'default')}`}
                  alt="User Profile"
                  className="h-9 w-9 rounded-full border border-deck-amber object-cover"
                />
              </button>
              
              <div 
                className={`absolute right-0 mt-2.5 w-52 origin-top-right rounded-xl border border-deck-muted-plum bg-deck-midnight/95 p-1.5 shadow-xl transition-all duration-150 ${
                  dropdownOpen 
                    ? "opacity-100 scale-100 pointer-events-auto" 
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <div className="px-3 py-2 border-b border-deck-muted-plum mb-1">
                  <p className="text-xs font-semibold text-white truncate">{session.user.name}</p>
                  <p className="text-[11px] text-deck-sage truncate">{session.user.email}</p>
                </div>
                <Link 
                  href="/profile" 
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center w-full px-3 py-2 text-xs rounded-lg text-deck-sage hover:bg-deck-muted-plum/40 hover:text-white"
                >
                  Profile Settings
                </Link>
                <button 
                  onClick={handleLogout} 
                  className="flex items-center w-full px-3 py-2 text-xs font-medium rounded-lg text-red-400 hover:bg-red-950/20 cursor-pointer text-left"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            mounted && !isPending && (
              <Link href="/login" className="text-sm font-medium text-deck-sage hover:text-white italic">
                Sign In
              </Link>
            )
          )}
        </div>
      </div>
    </nav>
  );
}