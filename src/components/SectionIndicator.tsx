import React from 'react';

interface Props {
  title: string;
}

export default function SectionIndicator({ title }: Props) {
  return (
    /* mx-auto centers the block, justify-center centers the content inside */
    <div className="flex justify-center w-full mb-8">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/20 text-white text-sm font-medium backdrop-blur-sm shadow-lg">
        {/* The Red/Blue High-Speed Flash */}
        <span className="w-2.5 h-2.5 rounded-full animate-flash" />
        
        <span className="tracking-wide uppercase text-[10px] md:text-xs font-bold">
          {title}
        </span>
      </div>
    </div>
  );
}