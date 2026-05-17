"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20 pb-16">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div
              className={`inline-flex items-center gap-3 font-label text-ink/50 arch-border rounded-full px-4 py-1.5 w-fit mb-8 transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-klein-blue animate-pulse" />
              In Training — 5.82B Parameters
            </div>

            <h1 className="font-sans font-bold text-[14vw] sm:text-[10vw] lg:text-[6.5vw] leading-[0.85] tracking-tighter uppercase mb-8">
              <div
                className={`transition-all duration-700 delay-100 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Arcle
              </div>
              <div
                className={`font-serif italic font-light text-klein-blue lowercase transition-all duration-700 delay-200 ${
                  mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                Intelligence.
              </div>
            </h1>

            <p
              className={`font-serif text-xl md:text-2xl lg:text-3xl leading-snug text-ink/70 max-w-xl mb-4 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              A 5.82B parameter multimodal AI being built independently by a
              student developer. Zero corporate funding. No investors. No team.
            </p>

            <p
              className={`font-mono text-sm text-ink/50 mb-10 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Text, images, documents, audio, video — all in one model.
              1 million token context window.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <a href="#support" className="btn-primary group">
                <span>Support Training</span>
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a href="#features" className="btn-secondary">
                See Progress
              </a>
            </div>

            <div
              className={`flex items-center gap-8 mt-12 pt-8 arch-border-t transition-all duration-700 delay-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                <div className="font-sans font-bold text-2xl">5.82B</div>
                <div className="font-label text-ink/40 mt-0.5">Parameters</div>
              </div>
              <div className="w-px h-10 bg-ink/10" />
              <div>
                <div className="font-sans font-bold text-2xl">1M</div>
                <div className="font-label text-ink/40 mt-0.5">Context Window</div>
              </div>
              <div className="w-px h-10 bg-ink/10" />
              <div>
                <div className="font-sans font-bold text-2xl">1</div>
                <div className="font-label text-ink/40 mt-0.5">Developer</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5">
            <div className="w-full arch-border bg-card p-6 flex flex-col relative">
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-ink/20" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-ink/20" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-ink/20" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-ink/20" />

              <div className="font-label text-ink/30 flex justify-between arch-border-b pb-3 mb-4">
                <span>Model.Status</span>
                <span className="text-klein-blue">Training_In_Progress</span>
              </div>

              <div className="flex-grow flex items-center justify-center py-8 relative">
                <svg className="w-56 h-56" viewBox="0 0 200 200">
                  <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(26,26,26,0.06)" strokeWidth="0.5" />
                  <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(0,47,167,0.12)" strokeWidth="0.5" className="animate-[spin_10s_linear_infinite]" style={{ transformOrigin: "center" }} />
                  <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(0,47,167,0.08)" strokeWidth="0.5" className="animate-[spin_6s_linear_infinite]" style={{ transformOrigin: "center", animationDirection: "reverse" }} />
                  <circle cx="100" cy="100" r="4" fill="#002FA7" opacity="0.6" />
                  {mounted && [...Array(24)].map((_, i) => {
                    const angle = (i * 15 * Math.PI) / 180;
                    const r1 = 88;
                    const r2 = i % 3 === 0 ? 82 : 85;
                    return (
                      <line key={i} x1={100 + Math.cos(angle) * r1} y1={100 + Math.sin(angle) * r1} x2={100 + Math.cos(angle) * r2} y2={100 + Math.sin(angle) * r2} stroke="rgba(26,26,26,0.08)" strokeWidth={i % 3 === 0 ? "0.75" : "0.5"} />
                    );
                  })}
                </svg>
                <div className="absolute text-center bg-bone/90 backdrop-blur px-3 py-1.5 arch-border">
                  <div className="font-sans font-bold text-2xl tracking-tight">OSS</div>
                  <div className="font-label text-ink/40">Omni Model</div>
                </div>
              </div>

              <div className="font-serif italic text-sm text-center text-ink/50 arch-border-t pt-3">
                &ldquo;One developer. For everyone.&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
