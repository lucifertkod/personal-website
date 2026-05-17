const FeatureTable = () => {
  const features = [
    {
      feature: "Parameters",
      arc: "5.82 Billion",
      competitors: "Varies (closed)",
    },
    {
      feature: "Context Window",
      arc: "1,000,000 tokens",
      competitors: "128K – 200K tokens",
    },
    {
      feature: "Multimodal Input",
      arc: "Text, Image, PDF, Audio, Video",
      competitors: "Text + Image only",
    },
    {
      feature: "Generation Output",
      arc: "Text, Image, Speech",
      competitors: "Text only (mostly)",
    },
    {
      feature: "Funding",
      arc: "Independent / Crowdfunded",
      competitors: "Corporate (billions)",
    },
    {
      feature: "Team Size",
      arc: "1 developer",
      competitors: "Thousands of engineers",
    },
    {
      feature: "Release Plan",
      arc: "Open weights + source code",
      competitors: "Closed / API-only",
    },
  ];

  return (
    <section id="matrix" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 arch-border-b pb-8">
          <div className="md:col-span-7">
            <p className="font-label text-klein-blue mb-4">
              Fig. 01 — Model Specs
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9]">
              Independent
              <br />
              <span className="font-serif italic font-light text-ink/60 lowercase">
                Intelligence
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:flex md:items-end">
            <p className="font-mono text-sm text-ink/50 leading-relaxed max-w-sm">
              ArcleIntelligence vs. corporate AI models — built by one student
              developer with zero corporate funding.
            </p>
          </div>
        </div>

        <div className="arch-border bg-card overflow-hidden">
          <div className="grid grid-cols-12 font-label bg-bone arch-border-b">
            <div className="col-span-5 md:col-span-4 px-6 py-4 text-ink/40">
              Specification
            </div>
            <div className="col-span-4 md:col-span-3 px-6 py-4 text-ink/40 arch-border-l text-center">
              Corporate AI
            </div>
            <div className="col-span-3 md:col-span-5 px-6 py-4 bg-klein-blue text-bone arch-border-l text-center font-bold">
              ArcleIntelligence
            </div>
          </div>

          {features.map((row, index) => (
            <div
              key={index}
              className={`grid grid-cols-12 group transition-colors duration-300 hover:bg-klein-blue hover:text-bone ${
                index > 0 ? "arch-border-t" : ""
              }`}
            >
              <div className="col-span-5 md:col-span-4 px-6 py-5 font-sans text-sm font-medium group-hover:text-bone transition-colors">
                {row.feature}
              </div>
              <div className="col-span-4 md:col-span-3 px-6 py-5 font-mono text-xs text-ink/50 arch-border-l text-center group-hover:text-bone/70 transition-colors flex items-center justify-center">
                {row.competitors}
              </div>
              <div className="col-span-3 md:col-span-5 px-6 py-5 font-mono text-xs text-klein-blue font-bold arch-border-l text-center group-hover:text-bone transition-colors flex items-center justify-center">
                {row.arc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureTable;
