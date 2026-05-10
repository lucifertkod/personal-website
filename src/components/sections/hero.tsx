"use client";

import { useEffect, useState } from "react";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [latency, setLatency] = useState("0.0");

  useEffect(() => {
    setMounted(true);
    
    const updateLatency = () => {
      const randomLatency = (Math.random() * 3 + 1).toFixed(1);
      setLatency(randomLatency);
    };
    
    updateLatency();
    const interval = setInterval(updateLatency, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col w-full px-6 md:px-12 lg:px-24 pt-20">
      <div className="shape-circle hidden md:block"></div>
      <div className="absolute right-[5vw] top-[20vh] w-[15vw] h-[15vw] border border-klein-blue rounded-full pointer-events-none opacity-20 hidden md:block"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 h-full flex-grow mt-12 md:mt-24 gap-8">
        <div className="lg:col-span-8 flex flex-col justify-center z-10 pb-20">
          <div className="text-mask mb-6">
            <div
              className={`${
                mounted ? "animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]" : "reveal-element"
              } inline-flex items-center gap-4 font-mono text-xs uppercase tracking-widest border border-ink/20 rounded-full px-4 py-1.5`}
            >
              <span className="w-2 h-2 rounded-full bg-klein-blue animate-pulse"></span>
              AI is for everyone
            </div>
          </div>

          <h1 className="font-sans font-bold text-[12vw] sm:text-[9vw] lg:text-[7vw] leading-[0.85] tracking-tighter uppercase mb-2">
            <div className="text-mask">
              <div
                className={`${
                  mounted ? "animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]" : "reveal-element"
                } delay-100`}
              >
                Absolute
              </div>
            </div>
            <div className="text-mask">
              <div
                className={`${
                  mounted ? "animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]" : "reveal-element"
                } delay-200 font-serif italic font-normal text-klein-blue lowercase pr-4`}
              >
                autonomy.
              </div>
            </div>
          </h1>

          <div className="text-mask mt-12 mb-12 max-w-xl">
            <p
              className={`${
                mounted ? "animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]" : "reveal-element"
              } delay-300 font-serif text-2xl md:text-3xl leading-snug text-ink/80`}
            >
              Avoid all technical complexity. Run the world&apos;s most powerful, offline, on-device,
              privacy-focused, state-of-the-art AI assistant.
              <br />
              <span className="font-mono text-sm uppercase tracking-widest text-klein-blue mt-4 block">
                Just download it.
              </span>
            </p>
          </div>

          <div className="text-mask flex flex-col sm:flex-row gap-4 mt-auto">
            <div className={`${mounted ? "animate-[revealUp_1s_cubic-bezier(0.16,1,0.3,1)_forwards]" : "reveal-element"} delay-500 flex gap-4 w-full sm:w-auto`}>
              <a href="#download" className="btn-editorial w-full sm:w-auto group">
                <span className="mr-8">Initiate Download</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
              <a href="#donate" className="btn-outline w-full sm:w-auto">
                Download (Free)
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:col-span-4 arch-border-l relative items-center justify-center p-8">
          <div className="w-full relative aspect-[3/4] arch-border bg-white flex flex-col p-6 shadow-2xl shadow-ink/5">
            <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-ink"></div>
            <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-ink"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-ink"></div>
            <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-ink"></div>

            <div className="font-mono text-[10px] text-ink/50 uppercase tracking-widest flex justify-between arch-border-b pb-4 mb-4">
              <span>System.Status</span>
              <span className="text-klein-blue">Local_Node</span>
            </div>

            <div className="flex-grow flex items-center justify-center relative overflow-hidden">
              <svg className="absolute w-64 h-64" viewBox="0 0 200 200">
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="rgba(15, 15, 10, 0.1)"
                  strokeWidth="1"
                  className="animate-[spin_12s_linear_infinite]"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="rgba(0, 40, 255, 0.2)"
                  strokeWidth="1"
                  className="animate-[spin_8s_linear_infinite]"
                  style={{ transformOrigin: "center", animationDirection: "reverse" }}
                />
                <circle
                  cx="100"
                  cy="100"
                  r="50"
                  fill="none"
                  stroke="rgba(0, 40, 255, 0.1)"
                  strokeWidth="1"
                  className="animate-[spin_4s_linear_infinite]"
                />
                <circle cx="100" cy="100" r="8" fill="rgba(0, 40, 255, 0.1)" />
                {mounted && [...Array(12)].map((_, i) => {
                  const angle = (i * 30 * Math.PI) / 180;
                  const x1 = 100 + Math.cos(angle) * 85;
                  const y1 = 100 + Math.sin(angle) * 85;
                  const x2 = 100 + Math.cos(angle) * 90;
                  const y2 = 100 + Math.sin(angle) * 90;
                  return (
                    <line
                      key={i}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="rgba(15, 15, 10, 0.15)"
                      strokeWidth="1"
                    />
                  );
                })}
              </svg>
              <div className="text-center z-10 bg-white/80 backdrop-blur px-4 py-2 arch-border">
                <div className="font-sans font-bold text-3xl">{mounted ? latency : '2.1'}</div>
                <div className="font-mono text-[10px] text-ink/60 uppercase">Network Latency</div>
              </div>
            </div>

            <div className="font-serif italic text-sm text-center mt-4 pt-4 arch-border-t">
              &quot;Operating entirely independent of the cloud.&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;