import React from 'react';

export default function SectionIndicator() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm shadow-lg">
      {/* The Red/Blue High-Speed Flash */}
      <span className="w-2.5 h-2.5 rounded-full animate-flash" />
      
      <span className="tracking-wide uppercase text-[10px] md:text-xs font-bold">
        Turning Clicks into <span className="text-neon-cyan">Revenue</span>
      </span>
    </div>
  );
}