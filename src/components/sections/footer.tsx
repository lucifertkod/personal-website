import React from "react";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center pt-16 pb-20 sm:pt-20 sm:pb-24 md:pt-32 md:pb-36 px-4">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
        {/* Creator Attribution */}
        <p className="flex items-center gap-1.5 text-xs sm:text-sm md:text-base font-medium text-white">
          <span>Built with</span>
          <span className="text-red-500" aria-label="heart">
            ❤️
          </span>
          <span>by</span>
          <a
            href="#"
            className="border-b border-white hover:text-zinc-400 hover:border-zinc-400 transition-colors duration-300"
          >
            ArcleIntelligence
          </a>
        </p>

        {/* Separator Dot (Visible only on desktop) */}
        <span className="hidden sm:block text-zinc-600">•</span>

        {/* Support Link */}
        <nav className="flex items-center shrink-0">
          <a
            href="mailto:support@arcleintelligence.com?subject=ArcleIntelligence%20Support%20Inquiry"
            className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-zinc-400 hover:text-zinc-500 transition-colors duration-500 whitespace-nowrap"
            aria-label="Contact Support"
          >
            <Mail className="size-4 sm:size-5 shrink-0" />
            <span className="border-b border-zinc-400/20">Contact Support</span>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
