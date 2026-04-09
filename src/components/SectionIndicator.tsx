import React from 'react';

interface SectionIndicatorProps {
  title: string;
}

export default function SectionIndicator({ title }: SectionIndicatorProps) {
  return (
    /* w-full and flex-justify-center FORCES it to the middle */
    <div className="w-full flex justify-center mb-6">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm shadow-lg">
        {/* The Flash Dot */}
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-cyan shadow-[0_0_10px_#00f0ff]"></span>
        </span>
        
        {/* The Text - This MUST use {title} */}
        <span className="text-white text-[10px] md:text-xs font-bold uppercase tracking-widest">
          {title}
        </span>
      </div>
    </div>
  );
}