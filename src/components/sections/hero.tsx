import React from "react";
import { Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="w-full max-w-5xl flex flex-col gap-0 min-w-0 mx-auto" style={{ animation: 'fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both' }}>
      {/* Header */}
      <header className="w-full flex items-center justify-between gap-3 px-5 sm:px-4 py-4 sm:py-6 md:py-8 min-w-0">
        <span className="text-base sm:text-lg font-medium text-white truncate min-w-0">
          ArcleIntelligence<span className="text-zinc-400 italic">.com</span>
        </span>
        <nav className="flex items-center shrink-0">
          <a
            href="mailto:support@arcleintelligence.com?subject=ArcleIntelligence%20Support%20Inquiry"
            className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base border-b-2 border-white/20 text-zinc-400 hover:text-zinc-300 transition-colors duration-500 whitespace-nowrap pb-0.5"
            aria-label="Contact Support"
          >
            <Mail className="size-4 sm:size-5 shrink-0" />
            Contact Support
          </a>
        </nav>
      </header>

      {/* Hero Content */}
      <section className="w-full px-4 sm:px-6 md:px-8 pt-8 sm:pt-12 md:pt-24 pb-6 sm:pb-10 md:pb-12 flex flex-col gap-3 sm:gap-4 text-center min-w-0">
        {/* Big "AI is for everyone" header */}
        <h1
          className="text-white text-4xl sm:text-5xl md:text-[64px] lg:text-[80px] font-extrabold italic tracking-tight text-balance leading-[1.05] mb-2 sm:mb-4 bg-gradient-to-r from-white via-zinc-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          style={{ animation: 'fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both' }}
        >
          AI is for everyone
        </h1>

        <h2
          className="text-white text-2xl sm:text-3xl md:text-[40px] font-semibold tracking-tight text-balance leading-[1.15]"
          style={{ animation: 'fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both' }}
        >
          Run most powerful, On-Device AI Assistant, Just Download It
        </h2>
        <p
          className="text-sm sm:text-base text-zinc-400 leading-relaxed text-pretty max-w-xl mx-auto"
          style={{ animation: 'fadeSlideUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both' }}
        >
          Avoid all the technical complexity and download World&apos;s Most powerful, offline, On-Device, privacy focused, Android-compatible, state of the Art AI assistant.
        </p>
      </section>

      {/* Background Decorative Gradient */}
      <div className="w-full flex justify-center relative">
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] pointer-events-none -z-10">
          <div
            className="absolute inset-0 blur-[60px] opacity-40"
            style={{
              background: "radial-gradient(40% 147% at 50% 46.2%, hsla(0, 100%, 73%, 0.1) 5%, rgba(154, 170, 255, 0.05) 60%, hsla(0, 100%, 88%, 0) 140%)",
              clipPath: "polygon(0 0, 50% 14%, 100% 0, 92% 50%, 100% 100%, 50% 86%, 0 100%, 8% 50%)"
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
