const FeatureTable = () => {
  const features = [
    {
      feature: "Execution Environment",
      arc: "On-Device",
      competitors: "Cloud-dependent",
    },
    {
      feature: "Network Dependency",
      arc: "True Offline",
      competitors: "Internet required",
    },
    {
      feature: "API Dependencies",
      arc: "Zero Dependencies",
      competitors: "External APIs needed",
    },
    {
      feature: "Operational Limits",
      arc: "Unlimited",
      competitors: "Monthly caps & rate limits",
    },
    {
      feature: "App / Web / Game Generation",
      arc: "Native Generation",
      competitors: "Not available",
    },
    {
      feature: "Media Generation Suite",
      arc: "Full Native Suite",
      competitors: "Partial / API required",
    },
    {
      feature: "Data Privacy",
      arc: "100% Local",
      competitors: "Server-side processing",
    },
    {
      feature: "Latency",
      arc: "< 100ms local",
      competitors: "Network-dependent",
    },
  ];

  return (
    <section id="matrix" className="py-20 md:py-32 px-6 md:px-12 lg:px-24 scroll-mt-20">
      <div className="max-w-[1600px] mx-auto">
        {/* Section header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 arch-border-b pb-8">
          <div className="md:col-span-7">
            <p className="font-label text-klein-blue mb-4">
              Fig. 01 — Data Matrix
            </p>
            <h2 className="font-sans font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-tighter leading-[0.9]">
              System
              <br />
              <span className="font-serif italic font-light text-ink/60 lowercase">
                Comparison
              </span>
            </h2>
          </div>
          <div className="md:col-span-5 md:flex md:items-end">
            <p className="font-mono text-sm text-ink/50 leading-relaxed max-w-sm">
              Architectural differences between ArcleIntelligence and legacy
              cloud-dependent AI models. Every row represents a fundamental
              advantage.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="arch-border bg-card overflow-hidden">
          {/* Table header */}
          <div className="grid grid-cols-12 font-label bg-bone arch-border-b">
            <div className="col-span-5 md:col-span-4 px-6 py-4 text-ink/40">
              Capability
            </div>
            <div className="col-span-4 md:col-span-3 px-6 py-4 text-ink/40 arch-border-l text-center">
              Legacy AI
            </div>
            <div className="col-span-3 md:col-span-5 px-6 py-4 bg-klein-blue text-bone arch-border-l text-center font-bold">
              ArcleIntelligence
            </div>
          </div>

          {/* Table rows */}
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
