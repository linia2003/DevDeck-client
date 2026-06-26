"use client";

import Link from "next/link";

export default function HomePage() {
  // Temporary initial mock data mimicking your specifications
  const overviewMetrics = [
    { label: "Total Cards", count: 12, hue: "bg-[#534AB7]" },
    { label: "Repositories", count: 2, hue: "bg-blue-600" },
    { label: "Snippets", count: 2, hue: "bg-emerald-600" },
    { label: "Ideas", count: 2, hue: "bg-amber-500" }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome Banner Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-medium tracking-tight text-slate-900 dark:text-white">
          Welcome back, Developer!
        </h1>
      
      </div>

      {/* 4-Column Hero Metric Matrix Grid */}
      <div className="mb-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {overviewMetrics.map((metric, idx) => (
          <div 
            key={idx} 
            className="group relative rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800/80 dark:bg-[#1A1730]/40"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-400 dark:text-slate-500">
                  {metric.label}
                </p>
                <h4 className="mt-2 text-3xl font-medium text-slate-900 dark:text-white">
                  {metric.count}
                </h4>
              </div>
              <div className={`h-10 w-10 rounded-xl ${metric.hue} opacity-10 transition-opacity group-hover:opacity-15`} />
            </div>
          </div>
        ))}
      </div>

      {/* Main Draggable Workspace Layout Slot */}
      <div className="rounded-2xl border-2 border-dashed border-slate-200 p-12 text-center dark:border-slate-800">
        <p className="text-sm text-slate-400">
          Canvas initialized. Drag-and-drop workspace components will stack inside this view container.
        </p>
      </div>
    </div>
  );
}