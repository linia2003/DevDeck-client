"use client";

import React, { useState, useEffect, useRef } from 'react';
import { 
  Plus, 
  Layers, 
  Link2, 
  Code, 
  FileText, 
  Cpu, 
  Lightbulb
} from 'lucide-react';
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [dbCards, setDbCards] = useState([]);
  
  // HUD Runtime Monitoring States
  const [isSystemActive, setIsSystemActive] = useState(true);
  const [activeMinutes, setActiveMinutes] = useState(0);
  
  const backendUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001";
  const lastActivityTime = useRef(Date.now());

  // Connect to better-auth react hook to monitor dynamic sessions
  const { data: session } = authClient.useSession();

  // 1. DATASTREAM SYNC EFFECT: Fetch items out of MongoDB
  useEffect(() => {
    const streamWorkspaceAssets = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/cards`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setDbCards(data);
        }
      } catch (err) {
        console.error("Ecosystem stream connection rejected by infrastructure link.", err);
      }
    };
    streamWorkspaceAssets();
  }, [backendUrl]);

  // 2. HUD HEARTBEAT METRICS RUNTIME EFFECT
  useEffect(() => {
    const runtimeInterval = setInterval(() => {
      if (isSystemActive) {
        setActiveMinutes((prev) => prev + 1);
      }
    }, 60000);

    const idleCheckInterval = setInterval(() => {
      const timeSinceLastAction = Date.now() - lastActivityTime.current;
      if (timeSinceLastAction > 120000) {
        setIsSystemActive(false);
      }
    }, 5000);

    const recordUserHeartbeat = () => {
      lastActivityTime.current = Date.now();
      setIsSystemActive(true);
    };

    window.addEventListener("mousemove", recordUserHeartbeat);
    window.addEventListener("keydown", recordUserHeartbeat);
    window.addEventListener("click", recordUserHeartbeat);

    return () => {
      clearInterval(runtimeInterval);
      clearInterval(idleCheckInterval);
      window.removeEventListener("mousemove", recordUserHeartbeat);
      window.removeEventListener("keydown", recordUserHeartbeat);
      window.removeEventListener("click", recordUserHeartbeat);
    };
  }, [isSystemActive]);

  const filters = [
    { id: 'All', label: 'All', icon: Layers },
    { id: 'links', label: 'Links', icon: Link2 },
    { id: 'repos', label: 'Repositories', icon: Code },
    { id: 'snippets', label: 'Snippets', icon: Code },
    { id: 'notes', label: 'Notes', icon: FileText },
    { id: 'apis', label: 'APIs', icon: Cpu },
    { id: 'ideas', label: 'Ideas', icon: Lightbulb },
  ];

  const allCategories = [
    { id: 'links', title: 'Links / Docs', accent: 'border-t-4 border-rosepink' },
    { id: 'repos', title: 'Repositories', accent: 'border-t-4 border-seagreen' },
    { id: 'snippets', title: 'Snippets', accent: 'border-t-4 border-mauve' },
    { id: 'notes', title: 'Notes', accent: 'border-t-4 border-[#159FE0]' },
    { id: 'apis', title: 'APIs', accent: 'border-t-4 border-[#E8940F]' },
    { id: 'ideas', title: 'Ideas', accent: 'border-t-4 border-rosepink' },
  ];

  const username = session?.user?.name || session?.user?.email || "User";

  // Dynamic Category Visibility Filtering Matrix
  const visibleCategories = activeFilter === 'All' 
    ? allCategories 
    : allCategories.filter(cat => cat.id.toLowerCase() === activeFilter.toLowerCase());

  // Dynamic Column Layout Grid Calculations 
  const getGridColumnClass = () => {
    if (activeFilter !== 'All') return "grid-cols-1 w-full max-w-4xl mx-auto";
    return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6";
  };

  return (
    <div className="w-full flex flex-col justify-start relative z-10 space-y-6">
      
      {/* HERO HEADER: Extra Dense Frosted Glass Card */}
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-start lg:items-center w-full">
          <div className="rounded-2xl p-6 bg-white/85 dark:bg-black/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 max-w-xl shadow-2xl flex-1 w-full transition-all duration-300 hover:border-white/60 dark:hover:border-white/20">
            <h1 className="text-3xl font-extrabold tracking-tight uppercase font-sans text-[#1A1D29] dark:text-white text-left drop-shadow-sm dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Welcome back, {username}.
            </h1>
            <p className="text-xs font-semibold tracking-wide text-[#5B5F72] dark:text-white/70 uppercase mt-2 text-justify flex items-start gap-2">
              <span className={`h-1.5 w-1.5 rounded-full animate-ping mt-1 flex-shrink-0 ${isSystemActive ? "bg-[#0FB8A6] dark:bg-[#3FE0C5]" : "bg-amber-500"}`} />
              System environment operating stable. Ready for deployment deck workspace layout implementation parameters.
            </p>
          </div>

          {/* DYNAMIC CIRCULAR HUD RUNTIME MONITOR WIDGET */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/85 dark:bg-black/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-2xl w-full sm:w-auto min-w-[240px] justify-center sm:justify-start transition-all duration-500">
            <div className="relative h-16 w-16 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <path className="text-black/5 dark:text-white/10" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                <path 
                  className={`transition-all duration-1000 ease-in-out ${
                    isSystemActive 
                      ? "text-[#0FB8A6] dark:text-[#3FE0C5] drop-shadow-[0_0_8px_rgba(63,224,197,0.5)] [stroke-dasharray:100,_100]" 
                      : "text-amber-500 dark:text-amber-500/80 [stroke-dasharray:30,_100]"
                  }`}
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  fill="none" 
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                />
              </svg>
              <span className={`absolute h-2 w-2 rounded-full shadow-md ${
                isSystemActive ? "bg-[#0FB8A6] dark:bg-[#3FE0C5] animate-ping" : "bg-amber-500 animate-pulse"
              }`} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-[#5B5F72] dark:text-white/50">Workspace Status</p>
              <div className="flex flex-col mt-0.5">
                <span className={`text-sm font-black font-mono transition-colors duration-300 ${
                  isSystemActive ? "text-[#0FB8A6] dark:text-[#3FE0C5]" : "text-amber-500"
                }`}>
                  {isSystemActive ? "SYS_ACTIVE" : "SYS_IDLE"}
                </span>
                <span className="text-[11px] font-mono text-zinc-500 dark:text-white/40 font-medium">
                  Uptime: <span className="text-[#E94FD1] font-bold">{activeMinutes}m</span>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* STAT MODULE CARDS: High-Density Frosted Glass Plates */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Cards", value: dbCards.length.toString(), icon: Layers, color: "text-[#7C3AED] dark:text-[#8B5CF6]" },
          { label: "Repositories", value: dbCards.filter(c => c.type === 'repos').length.toString(), icon: Code, color: "text-[#159FE0] dark:text-[#2FD1FF]" },
          { label: "Snippets", value: dbCards.filter(c => c.type === 'snippets').length.toString(), icon: Code, color: "text-[#D6249F] dark:text-[#E94FD1]" },
          { label: "Ideas", value: dbCards.filter(c => c.type === 'ideas').length.toString(), icon: Lightbulb, color: "text-[#E8940F] dark:text-[#FFB84D]" },
        ].map((stat, i) => (
          <div key={i} className="rounded-2xl border border-white/40 dark:border-white/10 bg-white/85 dark:bg-black/60 backdrop-blur-2xl p-5 flex items-center justify-between shadow-2xl transition-all duration-300 hover:border-white/60 dark:hover:border-white/20">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#5B5F72] dark:text-white/50 font-semibold">{stat.label}</p>
              <p className="text-xl font-bold text-[#1A1D29] dark:text-white mt-1">{stat.value}</p>
            </div>
            <div className={`p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 ${stat.color}`}>
              <stat.icon size={18} />
            </div>
          </div>
        ))}
      </div>

      {/* CHIPS FILTER SLOTS: Expanded Full-Width Fluid Pills Layout */}
      <div className="w-full bg-white/5 dark:bg-black/20 backdrop-blur-2xl p-2 border border-white/40 dark:border-white/5 rounded-2xl shadow-xl select-none">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7 gap-2 w-full">
          {filters.map((filter) => {
            const isSelected = activeFilter.toLowerCase() === filter.id.toLowerCase();
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group flex items-center justify-center gap-2.5 px-4 py-3 text-xs font-bold uppercase tracking-widest rounded-xl border transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 w-full cursor-pointer
                  ${isSelected 
                    ? `bg-white dark:bg-white/25 shadow-xl border-white/80 dark:border-white/30 text-[#D6249F] dark:text-white scale-[1.02] drop-shadow-[0_0_12px_rgba(233,79,209,0.25)]` 
                    : 'bg-white/40 dark:bg-black/40 border-white/20 dark:border-white/5 text-[#5B5F72] dark:text-white/60 hover:bg-white/80 dark:hover:bg-black/60 hover:text-[#1A1D29] dark:hover:text-white'
                  }`}
              >
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* COLUMNS MATRIX GRID: Dynamic Auto-Expanding Columns */}
      <div className={`grid gap-5 w-full items-start transition-all duration-500 ${getGridColumnClass()}`}>
        {visibleCategories.map((col) => {
          const columnCards = dbCards.filter(card => card.type.toLowerCase() === col.id.toLowerCase());

          return (
            <div 
              key={col.id} 
              className={`rounded-2xl bg-white/85 dark:bg-black/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 p-5 flex flex-col h-auto transition-all duration-300 hover:border-white/60 dark:hover:border-white/20 shadow-2xl deck-column ${col.accent}`}
            >
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-black/5 dark:border-white/5">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#1A1D29] dark:text-white/80 font-sans">
                  {col.title} ({columnCards.length})
                </h3>
              </div>

              {/* Card Stack Workspace Target Container */}
              <div className="flex flex-col gap-3 h-auto transition-all duration-300">
                {columnCards.length === 0 ? (
                  <div className="rounded-xl border border-dashed border-black/20 dark:border-white/20 bg-black/[0.03] dark:bg-white/5 backdrop-blur-xl p-6 text-center flex flex-col items-center justify-center py-8 group transition-all duration-300 hover:bg-black/[0.06] dark:hover:bg-white/10 deck-card">
                    <div className="h-1.5 w-1.5 rounded-full bg-black/20 dark:bg-white/30 group-hover:bg-[#0FB8A6] dark:group-hover:bg-[#3FE0C5] transition-colors duration-300 mb-2 animate-pulse" />
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#5B5F72] dark:text-white/40 group-hover:text-[#1A1D29] dark:group-hover:text-white/70 transition-colors duration-300">
                      No items found
                    </p>
                  </div>
                ) : (
                  columnCards.map((card) => (
                    <div 
                      key={card.id}
                      className="rounded-xl border border-white/10 bg-white/85 dark:bg-[#12141C]/80 p-4 flex flex-col justify-between shadow-md transition-all duration-200 hover:border-white/30 hover:scale-[1.01]"
                    >
                      <h4 className="text-sm font-bold text-[#1A1D29] dark:text-white tracking-wide line-clamp-2">
                        {card.content?.title || card.content?.url || "Untitled Configuration"}
                      </h4>
                      {card.content?.notes && (
                        <p className="text-xs text-[#5B5F72] dark:text-zinc-400 mt-1.5 line-clamp-2">{card.content.notes}</p>
                      )}
                      {card.content?.body && (
                        <p className="text-xs text-[#5B5F72] dark:text-zinc-400 mt-1.5 line-clamp-2">{card.content.body}</p>
                      )}
                      <span className="text-[9px] font-mono text-[#5B5F72]/50 dark:text-white/30 mt-3 block tracking-wider">
                        SEC_ID: {card.id ? card.id.substring(0, 8) : "SYNCING"}
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}