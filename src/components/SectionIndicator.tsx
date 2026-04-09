import React from 'react';

interface SectionIndicatorProps {
  title: string;
}

export default function SectionIndicator({ title }: SectionIndicatorProps) {
  // If no title is passed accidentally, it won't crash the site
  if (!title) return null;

  return (
    <div className="w-full flex justify-center mb-8 relative z-20">
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-tech-blue-light/40 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,240,255,0.05)] group hover:border-neon-cyan/40 transition-all duration-500">
        
        {/* The Flash Dot */}
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-neon-cyan shadow-[0_0_10px_#00f0ff]"></span>
        </span>
        
        {/* The Text - Dynamically rendered */}
        <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] select-none">
          {title}
        </span>
      </div>
    </div>
  );
}