"use client";

import { useState } from "react";

const DownloadSection = () => {
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const platforms = [
    {
      name: "Windows",
      version: "v2.4.1",
      size: "4.2 GB",
      arch: "x64 / ARM64",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
    },
    {
      name: "macOS",
      version: "v2.4.1",
      size: "3.8 GB",
      arch: "Apple Silicon / Intel",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
    },
    {
      name: "Linux",
      version: "v2.4.1",
      size: "3.5 GB",
      arch: "x64 / ARM64",
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.504 0c-.155 0-.315.008-.48.021-1.245.091-2.095.293-2.628.619-.364.218-.658.504-.878.858-.22.354-.336.74-.336 1.156 0 .303.062.593.186.87.124.276.302.522.534.736.232.214.506.386.822.516.316.13.662.21 1.038.24v1.764c-.556.082-1.05.258-1.482.528-.432.27-.772.628-1.02 1.074-.248.446-.372.972-.372 1.578 0 .536.104 1.028.312 1.476.208.448.496.838.864 1.17.368.332.8.592 1.3.78.5.188 1.036.282 1.608.282.572 0 1.108-.094 1.608-.282.5-.188.932-.448 1.296-.78.364-.332.652-.722.864-1.17.212-.448.318-.94.318-1.476 0-.606-.124-1.132-.372-1.578-.248-.446-.588-.804-1.02-1.074-.432-.27-.926-.446-1.482-.528V6.45c.376-.03.722-.11 1.038-.24.316-.13.59-.302.822-.516.232-.214.41-.46.534-.736.124-.277.186-.567.186-.87 0-.416-.116-.802-.336-1.156-.22-.354-.514-.64-.878-.858-.533-.326-1.383-.528-2.628-.619C12.819.008 12.659 0 12.504 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="download" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-label text-klein-blue mb-4">
            Download Protocol
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
            Get
            <br />
            <span className="font-serif italic font-light text-ink/60 lowercase">
              ArcleIntelligence
            </span>
          </h2>
          <p className="font-mono text-sm text-ink/50 leading-relaxed">
            Available for all major desktop platforms. No account required.
            No installation wizard. Download and run.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10 arch-border">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="bg-card p-8 flex flex-col items-center text-center transition-all duration-300 hover:bg-klein-blue hover:text-bone group cursor-pointer"
              onMouseEnter={() => setHoveredTier(platform.name)}
              onMouseLeave={() => setHoveredTier(null)}
            >
              <div className="mb-6 text-ink/40 group-hover:text-bone/80 transition-colors">
                {platform.icon}
              </div>
              <h3 className="font-sans font-bold text-xl uppercase tracking-wider mb-2 group-hover:text-bone transition-colors">
                {platform.name}
              </h3>
              <div className="font-mono text-xs text-ink/40 space-y-1 mb-8 group-hover:text-bone/60 transition-colors">
                <p>{platform.version}</p>
                <p>{platform.size}</p>
                <p>{platform.arch}</p>
              </div>
              <button className="btn-primary w-full group/btn">
                <span>Download</span>
                <svg
                  className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>

        {/* System requirements */}
        <div className="mt-12 arch-border bg-bone p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-label text-ink/40 mb-2">Minimum RAM</p>
              <p className="font-sans font-bold text-lg">8 GB</p>
            </div>
            <div className="md:arch-border-l md:pl-8">
              <p className="font-label text-ink/40 mb-2">Storage</p>
              <p className="font-sans font-bold text-lg">10 GB SSD</p>
            </div>
            <div className="md:arch-border-l md:pl-8">
              <p className="font-label text-ink/40 mb-2">Processor</p>
              <p className="font-sans font-bold text-lg">4-core modern CPU</p>
            </div>
          </div>
        </div>

        {/* Free download link */}
        <div className="mt-8 text-center">
          <a
            href="#support"
            className="btn-ghost inline-flex"
          >
            Support development before downloading
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
