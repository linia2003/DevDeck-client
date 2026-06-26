"use client";

export default function HomePage() {
  const metricCards = [
    { label: "Total Cards", count: 12, bg: "bg-[#534AB7]/10", text: "text-[#534AB7]" },
    { label: "Repositories", count: 2, bg: "bg-blue-500/10", text: "text-blue-600" },
    { label: "Snippets", count: 2, bg: "bg-emerald-500/10", text: "text-emerald-600" },
    { label: "Ideas", count: 2, bg: "bg-amber-500/10", text: "text-amber-600" }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome Banner */}
      <div className="mb-8">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white">
          Welcome back, Developer!!
        </h1>

      </div>

      {/* Metric Panel Matrix Grid Layout */}
   

      {/* Main Draggable Workspace Layout Slot */}
      <div className="rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center dark:border-slate-800 transition-colors">
        <p className="text-sm text-slate-400">
          Ecosystem workspace active. The canvas is unblocked and running in isolated frontend development mode.
        </p>
      </div>
    </div>
  );
}