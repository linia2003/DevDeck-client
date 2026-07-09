"use client";

export default function HomePage() {
  /**
   * 1. THEMATIC RESOURCE MATRIX CONFIGURATION
   * Mapped directly into the custom Tailwind CSS v4 variables inside your stylesheet.
   */
  const metricCards = [
    { 
      label: "Total Cards", 
      count: 12, 
      text: "text-white",
      dot: "bg-deck-amber shadow-[0_0_12px_#b07d3a]",
      borderAccent: "border-l-4 border-l-deck-amber"
    },
    { 
      label: "Repositories", 
      count: 2, 
      text: "text-deck-amber",
      dot: "bg-deck-ocean shadow-[0_0_12px_#2A4E63]",
      borderAccent: "border-l-4 border-l-deck-ocean"
    },
    { 
      label: "Snippets", 
      count: 2, 
      text: "text-white/90",
      dot: "bg-deck-deep-wine shadow-[0_0_12px_#45223B]",
      borderAccent: "border-l-4 border-l-deck-deep-wine"
    },
    { 
      label: "Ideas", 
      count: 2, 
      text: "text-deck-amber font-style:italic",
      dot: "bg-deck-sage shadow-[0_0_12px_#697763]",
      borderAccent: "border-l-4 border-l-deck-sage"
    }
  ];

  return (
    <div className="min-h-[calc(100vh-4rem)] relative flex flex-col justify-start">
      
      {/* CORE STRATEGY INTERFACE WORKSPACE LAYER */}
      <div className="relative z-10 mx-auto max-w-7xl w-full px-4 py-10 sm:px-6 lg:px-8 flex-1 brain-flex">
        
        {/* Welcome Character Banner Title Block */}
        <div className="rounded-2xl p-6 bg-deck-muted-plum/20 backdrop-blur-xl border border-deck-muted-plum max-w-xl shadow-xl">
          <h1 className="text-3xl tracking-tight uppercase font-black italic deck-italic-display">
            Welcome, Developer!!!
          </h1>
          <p className="text-xs font-medium tracking-wide uppercase mt-2 deck-italic-sub">
            Ecosystem environment operating stable. Ready for deployment deck initialization.
          </p>
        </div>

        {/* Metric Panel Matrix Grid Layout */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metricCards.map((card, idx) => (
            <div 
              key={idx}
              className={`note-card p-6 flex flex-col justify-between ${card.borderAccent}`}
            >
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-bold uppercase tracking-widest text-deck-sage">
                  {card.label}
                </p>
                <span className={`h-2.5 w-2.5 rounded-full transition-pulse ${card.dot}`} />
              </div>
              <p className={`text-5xl font-black mt-4 font-mono tracking-tighter italic ${card.text}`}>
                {card.count}
              </p>
            </div>
          ))}
        </div>

        {/* Main Draggable Workspace Layout Slot */}
        <div className="rounded-2xl border-2 border-dashed border-deck-muted-plum bg-deck-deep-wine/10 backdrop-blur-md p-16 text-center">
          <div className="max-w-md mx-auto flex flex-col items-center justify-center">
            <div className="h-2 w-2 rounded-full bg-deck-amber animate-pulse mb-4 shadow-[0_0_14px_#b07d3a]" />
            <p className="text-xs uppercase font-bold tracking-widest text-white/80 italic leading-relaxed">
              Ecosystem workspace active. The canvas is running smoothly inside the custom production mesh environment.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}