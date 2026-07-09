"use client";

import { useState } from "react";

export default function DevDeckDashboard() {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-1 pt-4">
        
        {/* SIDEBAR NAVIGATION */}
        <aside className="w-64 px-6 border-r border-black/5 dark:border-white/5 flex flex-col justify-between pb-8">
          <div className="space-y-8">
            {/* Main Menu Links */}
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-semibold rounded-xl bg-purple-500/10 text-[#8B5CF6] dark:text-[#A78BDA]">
                <span className="text-lg">📊</span> Dashboard
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <span className="text-lg">⭐</span> Favorites
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <span className="text-lg">🕒</span> Recent
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                <span className="text-lg">🏷️</span> Tags
              </button>
            </div>

            {/* Categories Section */}
            <div>
              <p className="px-3 text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2 opacity-60">Categories</p>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span> Frontend
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
                  <span className="w-2 h-2 rounded-full bg-[#6366F1]"></span> Backend
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar Footer Actions */}
          <div className="space-y-1 pt-4 border-t border-black/5 dark:border-white/5">
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <span className="text-lg">➕</span> New Category
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <span className="text-lg">⚙️</span> Settings
            </button>
          </div>
        </aside>

        {/* MAIN DECK WINDOW */}
        <main className="flex-1 px-10 pb-12 overflow-y-auto">
          
          {/* Welcome Intro Row */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">Welcome back, Alex.</h1>
            <p className="text-sm text-[var(--text-secondary)] mt-1">You have 12 cards across 5 categories.</p>
          </div>

          {/* OVERVIEW METRIC GRID */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {/* Card 1: Total Cards */}
            <div className="card p-5 flex items-center gap-4">
              <div className="p-3 bg-purple-500/10 rounded-xl text-2xl text-[#8B5CF6]">📇</div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">12</p>
                <p className="text-xs font-medium text-[var(--text-secondary)]">Total Cards</p>
              </div>
            </div>

            {/* Card 2: Repositories */}
            <div className="card p-5 flex items-center gap-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-2xl text-[#6366F1]">📦</div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">2</p>
                <p className="text-xs font-medium text-[var(--text-secondary)]">Repositories</p>
              </div>
            </div>

            {/* Card 3: Snippets */}
            <div className="card p-5 flex items-center gap-4">
              <div className="p-3 bg-amber-500/10 rounded-xl text-2xl text-[#F59E0B]">⟨/⟩</div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">2</p>
                <p className="text-xs font-medium text-[var(--text-secondary)]">Snippets</p>
              </div>
            </div>

            {/* Card 4: Ideas */}
            <div className="card p-5 flex items-center gap-4">
              <div className="p-3 bg-pink-500/10 rounded-xl text-2xl text-pink-500">💡</div>
              <div>
                <p className="text-2xl font-bold text-[var(--text-primary)]">2</p>
                <p className="text-xs font-medium text-[var(--text-secondary)]">Ideas</p>
              </div>
            </div>
          </section>

          {/* FILTER CHIPS CONTAINER */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            {["All", "Links", "Repos", "Snippets", "Notes", "APIs", "Ideas"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  activeTab === tab
                    ? "bg-[#8B5CF6] text-white shadow-sm"
                    : "bg-black/5 dark:bg-white/5 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* MAIN DECK GRID */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Grid Item 1: React Docs */}
            <div className="card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#8B5CF6] text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/10">Frontend</span>
                    <span className="text-xs font-medium text-[var(--text-secondary)]">• Learning</span>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">2 days ago</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">React Docs</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Official documentation hub for learning modern components, hooks, frameworks, and concurrent renderer architectures.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                <span className="text-xs font-mono text-[var(--text-secondary)]">#react #docs</span>
                <button className="btn-primary text-xs font-semibold px-4 py-2">Open Resource</button>
              </div>
            </div>

            {/* Grid Item 2: System Design Notes */}
            <div className="card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[#6366F1] text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/10">Backend</span>
                    <span className="text-xs font-medium text-[var(--text-secondary)]">• Architecture</span>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">2 days ago</span>
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">System Design Notes</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  Core reference notes explaining microservices decoupling structures, load balancers, caching strategies, and data consensus.
                </p>
              </div>
              <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5">
                <span className="text-xs font-mono text-[var(--text-secondary)]">#system #backend</span>
                <button className="btn-primary text-xs font-semibold px-4 py-2">Open Resource</button>
              </div>
            </div>

          </section>

        </main>
      </div>
    </div>
  );
}