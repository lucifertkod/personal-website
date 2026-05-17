const FeaturesGrid = () => {
  const categories = [
    {
      title: "Understanding",
      icon: "01",
      items: [
        "Natural language processing",
        "Image & visual analysis",
        "Document & PDF parsing",
        "Audio & speech recognition",
        "Video clip understanding",
      ],
    },
    {
      title: "Generation",
      icon: "02",
      items: [
        "Long-form text generation",
        "Image synthesis from text",
        "Speech generation (TTS)",
        "Code generation",
        "Structured data output",
      ],
    },
    {
      title: "Reasoning",
      icon: "03",
      items: [
        "Visual question answering",
        "Document Q&A",
        "Multi-step problem solving",
        "Cross-modal reasoning",
        "1M token context window",
      ],
    },
    {
      title: "Independence",
      icon: "04",
      items: [
        "Zero corporate funding",
        "Built by 1 developer",
        "Open weights planned",
        "Source code on GitHub",
        "Free for everyone",
      ],
    },
  ];

  return (
    <section id="features" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 arch-border-b pb-8">
          <div className="md:col-span-7">
            <p className="font-label text-klein-blue mb-4">
              Fig. 02 — Capabilities
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9]">
              One Model.
              <br />
              <span className="font-serif italic font-light text-ink/60 lowercase">
                Every modality.
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:flex md:items-end">
            <p className="font-mono text-sm text-ink/50 leading-relaxed max-w-sm">
              Text, images, documents, PDFs, audio, and video — all in one
              unified system.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 arch-border">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`p-6 md:p-8 card-hover group ${
                index > 0 ? "md:arch-border-l" : ""
              } ${index >= 2 ? "lg:arch-border-t md:arch-border-t lg:arch-border-t-0" : ""} ${
                index === 1 ? "lg:arch-border-t-0" : ""
              }`}
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-sans font-bold text-sm uppercase tracking-wider group-hover:text-bone transition-colors">
                  {category.title}
                </h3>
                <span className="font-mono text-[10px] text-ink/20 card-hover-accent transition-colors">
                  {category.icon}
                </span>
              </div>
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="font-mono text-xs text-ink/60 group-hover:text-bone/80 transition-colors flex items-start gap-2"
                  >
                    <span className="text-klein-blue group-hover:text-bone transition-colors mt-0.5 shrink-0">
                      ↬
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
