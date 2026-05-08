import React from 'react';
import { Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full flex items-center justify-between gap-3 px-2 sm:px-0 py-2 sm:py-0 min-w-0">
      <span className="text-base sm:text-lg font-medium text-white truncate min-w-0">
        ArcleIntelligence
        <span className="text-[#6A6B6C] italic">.com</span>
      </span>

      <nav className="flex items-center shrink-0">
        <a
          href="mailto:support@arcleintelligence.com?subject=ArcleIntelligence%20Support%20Inquiry"
          className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base border-b-2 border-white/20 text-zinc-400 hover:text-zinc-500 transition-colors duration-500 whitespace-nowrap"
          aria-label="Contact Support"
        >
          <Mail 
            size={20} 
            className="size-4 sm:size-5 shrink-0" 
            strokeWidth={2}
          />
          Contact Support
        </a>
      </nav>
    </header>
  );
};

export default Header;
