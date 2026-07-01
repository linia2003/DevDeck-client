// src/app/page.js
"use client";

export default function HomePage() {
  /* card part er vitorer design r color gulo  */
  
  const metricCards = [
    { 
      label: "Total Cards", 
      count: 12, 
      border: "border-[#FF6FB5]/20 dark:border-[#E94FD1]/25", 
      text: "text-[#D6249F] dark:text-[#FF6FB5]",
      glow: "shadow-[0_0_20px_rgba(233,79,209,0.08)] dark:shadow-[0_0_25px_rgba(233,79,209,0.2)]",
      ring: "bg-white/80 dark:bg-[#1A1D29]/70 ring-1 ring-[rgba(20,20,40,0.06)] dark:ring-[#FF6FB5]/20",
      dot: "bg-[#E94FD1] shadow-[0_0_8px_#E94FD1]"
    },
    { 
      label: "Repositories", 
      count: 2, 
      border: "border-[#159FE0]/20 dark:border-[#3FE0C5]/25", 
      text: "text-[#0FB8A6] dark:text-[#3FE0C5]",
      glow: "shadow-[0_0_20px_rgba(63,224,197,0.08)] dark:shadow-[0_0_25px_rgba(63,224,197,0.2)]",
      ring: "bg-white/80 dark:bg-[#1A1D29]/70 ring-1 ring-[rgba(20,20,40,0.06)] dark:ring-[#3FE0C5]/20",
      dot: "bg-[#3FE0C5] shadow-[0_0_8px_#3FE0C5]"
    },
    { 
      label: "Snippets", 
      count: 2, 
      border: "border-[#9B6BF0]/20 dark:border-[#8B5CF6]/25", 
      text: "text-[#7C3AED] dark:text-[#B084F5]",
      glow: "shadow-[0_0_20px_rgba(139,92,246,0.08)] dark:shadow-[0_0_25px_rgba(139,92,246,0.2)]",
      ring: "bg-white/80 dark:bg-[#1A1D29]/70 ring-1 ring-[rgba(20,20,40,0.06)] dark:ring-[#8B5CF6]/20",
      dot: "bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]"
    },
    { 
      label: "Ideas", 
      count: 2, 
      border: "border-[#E8940F]/20 dark:border-[#FFB84D]/30", 
      text: "text-[#E8940F] dark:text-gradient-warning",
      glow: "shadow-[0_0_25px_rgba(255,184,77,0.1)] dark:shadow-[0_0_30px_rgba(255,184,77,0.25)]",
      ring: "bg-white/80 dark:bg-[#1A1D29]/70 ring-1 ring-[rgba(20,20,40,0.06)] dark:ring-[#FFB84D]/20",
      dot: "bg-[#FF7A3D] shadow-[0_0_8px_#FF7A3D]"
    }
  ];

  return (

    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      
      {/* navbar pore e j part oie part aikhane */}
      <div className="mb-8">
     
        <h1 className="text-2xl font-bold tracking-tight uppercase font-sans text-[#1A1D29] dark:text-[#F5F6FA]">
          Welcome, Developer!!!
        </h1>
        <p className="text-xs font-medium tracking-wide text-[#5B5F72] dark:text-[#9CA3B5] uppercase mt-1">
          Ecosystem environment operating stable. Ready for deployment deck initialization.
        </p>
      </div>

      {/* card part er grid setting r colour */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {metricCards.map((card, idx) => (
          <div 
            key={idx}
            
            className={`rounded-2xl border border-[rgba(20,20,40,0.08)] dark:border-white/5 backdrop-blur-glass p-6 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] ${card.border} ${card.glow} ${card.ring}`}
          >
            {/*  neon single-color status indicators */}
            <div className="flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-[#5B5F72] dark:text-[#9CA3B5]">
                {card.label}
              </p>
              {/* proti card er alada neon dot  */}
              <span className={`h-2 w-2 rounded-full ${card.dot}`} />
            </div>
            
            {/* Bold numeric highlights configured in monospaced game hud data layout styles */}
            <p className={`text-4xl font-extrabold mt-3 font-mono tracking-tighter ${card.text}`}>
              {card.count}
            </p>
          </div>
        ))}
      </div>

      {/* main frontend part */}
      <div className="rounded-2xl border border-dashed border-[rgba(20,20,40,0.15)] bg-white/30 p-12 text-center dark:border-white/10 dark:bg-[#1A1D29]/20 backdrop-blur-glass transition-colors">
        <div className="max-w-md mx-auto flex flex-col items-center justify-center">
          {/* Pulsing visual core portal node tracking isolated status states */}
          <div className="h-2 w-2 rounded-full bg-[#3FE0C5] animate-pulse mb-3 shadow-[0_0_10px_#3FE0C5]" />
          
          <p className="text-xs uppercase font-medium tracking-widest text-[#5B5F72] dark:text-[#9CA3B5]">
            Ecosystem workspace active. The canvas is unblocked and running in isolated frontend development mode.
          </p>
        </div>
      </div>
      
    </div>
  );
}