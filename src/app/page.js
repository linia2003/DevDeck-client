
"use client";

export default function HomePage() {
  const metricCards = [
    { 
      label: "Total Cards", 
      count: 12, 
      border: "border-[#FF6FB5]/20 dark:border-[#E94FD1]/20", 
      text: "text-[#D6249F] dark:text-[#FF6FB5]",
      glow: "shadow-[0_0_15px_rgba(233,79,209,0.05)] dark:shadow-[0_0_20px_rgba(233,79,209,0.1)]"
    },
    { 
      label: "Repositories", 
      count: 2, 
      border: "border-[#159FE0]/20 dark:border-[#3FE0C5]/20", 
      text: "text-[#0FB8A6] dark:text-[#3FE0C5]",
      glow: "shadow-[0_0_15px_rgba(63,224,197,0.05)] dark:shadow-[0_0_20px_rgba(63,224,197,0.1)]"
    },
    { 
      label: "Snippets", 
      count: 2, 
      border: "border-[#9B6BF0]/20 dark:border-[#8B5CF6]/20", 
      text: "text-[#7C3AED] dark:text-[#B084F5]",
      glow: "shadow-[0_0_15px_rgba(139,92,246,0.05)] dark:shadow-[0_0_20px_rgba(139,92,246,0.1)]"
    },
    { 
      label: "Ideas", 
      count: 2, 
      border: "border-[#F0672E]/20 dark:border-[#FFB84D]/20", 
      text: "text-[#E8940F] dark:text-[#FFB84D]",
      glow: "shadow-[0_0_15px_rgba(255,184,77,0.05)] dark:shadow-[0_0_20px_rgba(255,184,77,0.1)]"
    }
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Welcome Banner part */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight text-[#1A1D29] dark:text-[#F5F6FA]">
          Welcome back, Developer!
        </h1>
        <p className="text-sm text-[#5B5F72] dark:text-[#9CA3B5] mt-1">
          Monitor your active project deck ecosystems.
        </p>
      </div>

      {/* Metric Panel Matrix Grid Layout */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metricCards.map((card, idx) => (
          <div 
            key={idx}
            className={`rounded-2xl border border-[rgba(20,20,40,0.08)] bg-white/70 dark:border-white/5 dark:bg-[#1A1D29]/60 backdrop-blur-glass p-6 transition-all duration-300 hover:-translate-y-1 ${card.border} ${card.glow}`}
          >
            <p className="text-xs font-medium uppercase tracking-wider text-[#5B5F72] dark:text-[#9CA3B5]">
              {card.label}
            </p>
            <p className={`text-4xl font-bold mt-2 font-mono tracking-tight ${card.text}`}>
              {card.count}
            </p>
          </div>
        ))}
      </div>

      {/* Main Draggable Workspace Layout Slot */}
      <div className="rounded-2xl border border-dashed border-[rgba(20,20,40,0.15)] bg-white/30 p-12 text-center dark:border-white/10 dark:bg-[#1A1D29]/20 backdrop-blur-glass transition-colors">
        <p className="text-sm text-[#5B5F72] dark:text-[#9CA3B5]">
          Ecosystem workspace active. The canvas is unblocked and running in isolated frontend development mode.
        </p>
      </div>
    </div>
  );
}