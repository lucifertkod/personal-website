const DownloadSection = () => {
  const capabilities = [
    {
      name: "Text Understanding",
      status: "Target",
      detail: "Natural language processing & generation",
    },
    {
      name: "Image Understanding",
      status: "Target",
      detail: "Visual question answering & analysis",
    },
    {
      name: "Document & PDF",
      status: "Target",
      detail: "Document parsing and Q&A",
    },
    {
      name: "Audio Processing",
      status: "Target",
      detail: "Speech recognition & transcription",
    },
    {
      name: "Video Understanding",
      status: "Target",
      detail: "Clip analysis & temporal reasoning",
    },
    {
      name: "Text Generation",
      status: "Target",
      detail: "Coherent long-form output",
    },
    {
      name: "Image Generation",
      status: "Target",
      detail: "Text-to-image synthesis",
    },
    {
      name: "Speech Generation",
      status: "Target",
      detail: "Text-to-speech synthesis",
    },
  ];

  return (
    <section id="download" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="font-label text-klein-blue mb-4">
            Model Architecture
          </p>
          <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9] mb-6">
            Multimodal
            <br />
            <span className="font-serif italic font-light text-ink/60 lowercase">
              Targets
            </span>
          </h2>
          <p className="font-mono text-sm text-ink/50 leading-relaxed">
            One unified system. 1 million token context window. Text, images,
            documents, PDFs, audio, and video — all in a single model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10 arch-border">
          {capabilities.map((cap) => (
            <div
              key={cap.name}
              className="bg-card p-6 flex flex-col transition-all duration-300 hover:bg-klein-blue hover:text-bone group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider group-hover:text-bone transition-colors">
                  {cap.name}
                </h3>
                <span className="font-label text-[10px] px-2 py-0.5 arch-border text-ink/30 group-hover:text-bone/50 group-hover:border-bone/20">
                  {cap.status}
                </span>
              </div>
              <p className="font-mono text-xs text-ink/50 group-hover:text-bone/70 transition-colors mt-auto">
                {cap.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 arch-border bg-bone p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-label text-ink/40 mb-2">Parameters</p>
              <p className="font-sans font-bold text-2xl">5.82 Billion</p>
            </div>
            <div className="md:arch-border-l md:pl-8">
              <p className="font-label text-ink/40 mb-2">Context Window</p>
              <p className="font-sans font-bold text-2xl">1,000,000 tokens</p>
            </div>
            <div className="md:arch-border-l md:pl-8">
              <p className="font-label text-ink/40 mb-2">Modalities</p>
              <p className="font-sans font-bold text-2xl">8 (target)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#support" className="btn-primary inline-flex group">
            <span>Fund Training</span>
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
